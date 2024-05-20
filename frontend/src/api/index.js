import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const fetchRegulationData = async () => {
  try {
    const response = await api.get('/regulation/fetch');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchFileFromBucket = async () => {
  try {
    const response = await api.get('/regulation/download');
    return response.data;
  } catch (error) {
    throw error;
  }
};
