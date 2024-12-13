import axios from 'axios';

// Configuração básica do Axios
const api = axios.create({
  baseURL: 'http://localhost:3000', // Endereço do JSON Server
});

// Busco todos os feedbacks
export const getFeedback = async () => {
  const response = await api.get('/feedbacks');
  return response.data; // Retorna somente os dados
};

// Envio um novo feedbackkk
export const submitFeedback = async (feedback) => {
  const response = await api.post('/feedbacks', feedback);
  return response.data; // Retorna o feedback adicionado
};