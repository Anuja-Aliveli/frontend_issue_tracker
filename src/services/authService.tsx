import { LoginPostData, RegisterPostData } from '../Interfaces/authInterface';
import api from './axios';

export const postRegister = async (data: RegisterPostData) => {
  try {
    const response = await api.post('/register/', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postLogin = async (data: LoginPostData) => {
  try {
    const response = await api.post('/login/', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getEmail = async (email: string) => {
  try {
    const response = await api.get(`/check_email/`, {
      params: { email },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
