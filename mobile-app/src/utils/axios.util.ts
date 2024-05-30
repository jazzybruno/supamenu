import { useAuth } from '@/contexts/AuthProvider';
import axios from 'axios';
import useStorage from '@/hooks/useStorage';

const apiURL = 'https://65c7-197-157-135-42.ngrok-free.app/api';
// const apiURL = '10.5.223.61:3000/api';

export const axiosInstance = axios.create({
  baseURL: apiURL,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const getAuthorizedAxiosInstance = (token : string) => {
  return axios.create({
    baseURL: apiURL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    },
    });
}