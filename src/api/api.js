import axios from 'axios';

// Configuração básica do Axios
const apiMock = axios.create({
  baseURL: 'http://localhost:3000', // Endereço do JSON Server
});

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




export default apiMock;