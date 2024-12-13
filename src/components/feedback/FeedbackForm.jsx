import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { submitFeedback } from '../../api/api';
import styles from './FeedbackForm.module.css';

import Button from '../form/Button';
import Input from '../form/Input';

const FeedbackForm = ({ onFeedbackSubmitted }) => {

//Crio todas as constantes que eu vou precisar e aproveito com o hooke useState que é capaz de atualizar o estado da constante
  const [name, setName] = useState('');
  const [serviceRating, setServiceRating] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Começo identificando se a quantidade de Estrelas é dentro do limite.
    if (serviceRating < 1 || serviceRating > 5) {
      alert('A classificação deve ser entre 1 e 5.');
      return;
    }

    //Crio a constante feedback e passo todos os data necessários
    const feedback = {
    //  Relembrando quê a função trim() retorna a string que recebe no caso name e retira espaços se houver
      name: name.trim(),
      serviceRating,
      comments: comments.trim(),
    //   profile: 'default.png', // Perfil padrão
    };

    // Envia o feedback ao servidor
    const newFeedback = await submitFeedback(feedback);
    onFeedbackSubmitted(newFeedback); // Atualiza a lista de feedbacks
    setName('');
    setServiceRating('');
    setComments('');
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
          navigate('/'); // Aqui você define o caminho da página de destino
          console.log('Deu certo meu chapa!')
  }
  return (
    <div className={styles.body} >

    <form className={styles.feedbackForm} onSubmit={handleSubmit}>
      <h2>Deixe seu Feedback!</h2>
      <p>nos ajude a melhorar cada vez mais o salão que te surpreende!</p>

      <Input 
        text={"Nome:"}
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        />

      <Input 
        text={"Comentários:"}
        type={"text"}
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        />
      <div className={styles.rang} >
        <Input
          text={"Nos avalie!"}
          type={"number"}
          value={serviceRating}
          onChange={(e) => setServiceRating(e.target.value)}
          min={"1"}
          max={"5"}
          />
      </div>

      <div className={styles.btn} >
        <Button 
        text={"Enviar"}
        type={"submit"}
        onClick={handleButtonClick}
        />
      </div>

    </form>
        </div>
  );
};

export default FeedbackForm;
