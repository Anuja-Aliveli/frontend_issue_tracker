import { RegisterPostData } from '../Interfaces/authInterface';
import api from './axios';

export const postRegister = async (data: RegisterPostData) => {
  try {
    const response = await api.post('/register/', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
