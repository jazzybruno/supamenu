import axios from 'axios';

const apiURL = 'http://10.5.222.22:3000/api';

export const axiosInstance = axios.create({
  baseURL: apiURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// export const authAxiosInstance = axios.create({
//     baseURL: apiURL,
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + localStorage.getItem('token')
//     },
//     });