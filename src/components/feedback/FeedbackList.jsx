import React, { useEffect, useState } from 'react';
import { getFeedback } from '../../api/api';
import CardFeedback from './CardFeedback';
import FeedbackForm from './FeedbackForm.jsx';
import styles from './FeedbackList.module.css';

const FeedbackList = () => {
//Crio todas as constantes no formato de array que eu vou precisar e aproveito com o hooke useState que é capaz de atualizar o estado da constante
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // busco os feedbacks do JSON Server
  // Possibilidade de criar um setTimeout para poder SIMULAR um carregamento! Talvez fique legal.
  useEffect(() => {
    const fetchFeedbacks = async () => {
      setIsLoading(true); // Ativa o estado de carregamento
      setTimeout(async () => {
        const data = await getFeedback(); // Chamada à API
        setFeedbacks(data);
        setIsLoading(false); // Desativa o estado de carregamento
      }, 2000); // 2000ms = 2 segundos
    };
    fetchFeedbacks();
  }, []); // Array vazio para executar apenas uma vez
  //   <---------------------------------Aqui eu digo que ele espera na condicional um valor vazio.

  const handleNewFeedback = (newFeedback) => {
    setFeedbacks((prevFeedbacks) => [newFeedback, ...prevFeedbacks]);//Lembrando que os três pontinhos espelha as propriedades anteriores.
  };

  return (
    <div className={styles.container}>
      <h2>Feedbacks Recebidos</h2>
      {isLoading ? (
          <p className={styles.ListComents} >Carregando feedbacks...</p>
        ) : feedbacks.length === 0 ? (
            <p className={styles.ListComents} >Nenhum feedback recebido ainda.</p>
        ) : (
            <div className={styles.feedbackList}>
          {feedbacks.map((feedback) => (
              <CardFeedback
              key={feedback.id}
              user={feedback.name}
              description={feedback.comments}
              profile={`/images/${feedback.profile}`}
              rating={feedback.serviceRating} 
              />
            ))}
        </div>
      )}
      {/* <FeedbackForm onFeedbackSubmitted={handleNewFeedback} /> */}
    </div>
  );
};

export default FeedbackList;
