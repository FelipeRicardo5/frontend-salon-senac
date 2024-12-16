import styles from './Clients.module.css'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllClientes, deleteCliente } from '../../api/api';

import LogoSenac from '../../assets/senac.png'
import Toast from '../../components/form/Toast'
import Button from '../form/Button'

function ClientesPage() {
  
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [clientes, setClientes] = useState([]);

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000); // fecha automaticamente após 3 segundos
    };

  useEffect(() => {
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      const data = await getAllClientes();
      setClientes(data);
    } catch (err) {
      console.error('Erro ao buscar clientes:', err);
    }
  };

  const handleDelete = async (cpf) => {
    try {
      await deleteCliente(cpf);
      fetchClientes();
      showToast('Cliente deletado do sistema, com sucesso!', 'success');
    } catch (err) {
      console.error('Erro ao deletar cliente:', err);
      showToast('Não foi possível deletar o cliente do sistema.', 'error');
    }
  };

    const navigate = useNavigate();

    const handleButtonClickRegisterClient = () => {
          navigate('/registroclientes'); 
          console.log('Deu certo meu chapa!')
    };

  return (
    <div style={{backgroundColor: 'white', width: '100vw', height: 'auto', paddingTop: '2em', textAlign: 'center', minHeight: '96.6vh'}}>
            
            {toast.show && (
                <Toast
                        message={toast.message}
                        type={toast.type}
                        closeToast={() => setToast({ show: false, message: '', type: '' })}
                />
            )}

      <h1 className={styles.hClients} >Lista de <strong>Clientes</strong></h1>
        <img src={LogoSenac} style={{width: '100px', margin: '2em'}} />

      {clientes.length === 0 ? (
        <p className={styles.noClients}>Nenhum cliente encontrado.</p>
      ) : (
        <ul className={styles.containerListClients}>

            <Button 
              text={"cadastrar cliente"}
              variant={'larger'}
              onClick={handleButtonClickRegisterClient}
            />

          {clientes.map((cliente) => (
            <li key={cliente.cpf} className={styles.clients}>
              <div>
                <strong>Nome:</strong> {cliente.nome} - <strong>CPF:</strong> {cliente.cpf}
              </div>
              <Button 
                text={"Deletar"} 
                onClick={() => handleDelete(cliente.cpf)} 
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
}

export default ClientesPage;
