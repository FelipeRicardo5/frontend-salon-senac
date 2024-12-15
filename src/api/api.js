import axios from 'axios';

// Configuração básica do Axios
const apiMock = axios.create({
  baseURL: 'http://localhost:3000', // Endereço do JSON Server
});

const apiReal = axios.create({
  baseURL: 'http://localhost:8081/salao', // Endereço da API Rai
              headers: {
                'Content-Type': 'application/json',
              }
});


// ------------------------------------------------------------------------------------------------------


// Busco todos os feedbacks
export const getFeedback = async () => {
  const response = await apiMock.get('/feedbacks');
  return response.data; // Retorna somente os dados
};

// Envio um novo feedbackkk
export const submitFeedback = async (feedback) => {
  const response = await apiMock.post('/feedbacks', feedback);
  return response.data; // Retorna o feedback adicionado
};



export const handleLogin = async (email, password) => {
  try {
    const response = await apiMock.get(`/users`, {
      params: { email, password }, // Passa os parâmetros para a APIMock
    });

    // Retorna o usuário encontrado ou null caso não exista
    if (response.data.length > 0) {
      return response.data[0]; // Retorna o primeiro usuário encontrado
    } else {
      return null;
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error; // Propaga o erro para ser tratado no componente
  }
};

// CADASTRO DE USUÁRIOS
export const handleRegister = async (userData) => {
  try {
    // Envia os dados do usuário para a APIMock
    const response = await apiMock.post('/users', userData);
    return response.data; // Retorna o usuário criado
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    throw error; // Propaga o erro 
  }
};

// ------------------------------------------------------------------------------------------------------

// Criar um cliente
export const createCliente = async (cliente) => {
  const response = await apiReal.post('/cliente', cliente);
  return response.data;
};

// Buscar todos os clientes
export const getAllClientes = async () => {
  const response = await apiReal.get('/clientes');
  return response.data;
};

// Buscar cliente por CPF
export const getClienteByCpf = async (cpf) => {
  const response = await apiReal.get(`/cliente/${cpf}`);
  return response.data;
};

// Buscar cliente por nome
export const getClienteByNome = async (nome) => {
  const response = await apiReal.get(`/cliente/nome/${nome}`);
  return response.data;
};

// Buscar cliente por email
export const getClienteByEmail = async (email) => {
  const response = await apiReal.get(`/cliente/email/${email}`);
  return response.data;
};

// Atualizar um cliente
export const updateCliente = async (cpf, cliente) => {
  const response = await apiReal.put(`/cliente/${cpf}`, cliente);
  return response.data;
};

// Deletar um cliente
export const deleteCliente = async (cpf) => {
  const response = await apiReal.delete(`/cliente/${cpf}`);
  return response.data;
};

// Deletar todos os clientes
export const deleteAllClientes = async () => {
  const response = await apiReal.delete('/clientes');
  return response.data;
};


export default apiMock;