import React, { useState } from 'react';
import { createCliente } from '../../api/api';
import styles from './RegisterClients.module.css'
import { useNavigate } from 'react-router-dom';

import LogoSenac from '../../assets/senac.png'
import Input from './Input';
import Button from './Button';
import Toast from './Toast';


import "bootstrap-icons/font/bootstrap-icons.css";


function RegisterClients() {

  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000); // fecha automaticamente após 3 segundos
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createCliente({ nome, cpf, email });
      setNome('');
      setCpf('');
      setEmail('');
      showToast('Cliente cadastrado no sistema, com sucesso!', 'success');
    } catch (err) {
      console.error('Erro ao cadastrar cliente:', err);
    }
  };

  const navigate = useNavigate();

  const handleButtonClickClient = () => {
        navigate('/clientes'); 
        console.log('Deu certo meu chapa!')
  };
  
  return (

    <div className={styles.containerRegister} >

    {toast.show && (
        <Toast
            message={toast.message}
            type={toast.type}
            closeToast={() => setToast({ show: false, message: '', type: '' })}
        />
    )}

      <form className={styles.containerForm}  onSubmit={handleSubmit}>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
      <h1 className={styles.containerFormHUM} >Cadastrar <strong>Cliente</strong></h1>
      <img src={LogoSenac} style={{width: '20%', height: '70%'}} />
    </div>
        <div>
          <Input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            text={"nome"}
            placeholder={"Digite aqui o nome do cliente."}
            variantLabel={"labelBlack"}   
            variant={"normal"}      
          />
        </div>
        <div>
          <Input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
            text={"CPF"}
            placeholder={"Digite aqui o CPF do cliente."}
            variantLabel={"labelBlack"}
            variant={"normal"} 
          />
        </div>
        <div>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            text={"e-mail"}
            placeholder={"Digite aqui o e-mail do cliente."}
            variantLabel={"labelBlack"}
            variant={"normal"} 
          />
        </div>
        <Button  
        type={'submit'}
        text={"Cadastrar"}
        />
        <div style={{display: 'flex',width: '100%', justifyContent: 'end'}} >
        <button onClick={handleButtonClickClient} className={styles.arrowLeft} ><i className="bi bi-arrow-return-left"></i></button>
        
        </div>
      </form>
    </div>
  );
}

export default RegisterClients;
