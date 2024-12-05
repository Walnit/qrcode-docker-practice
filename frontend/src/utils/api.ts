import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
})

export function generateQR(value: string) {
    return api.post(
      '/qr',
      { "value": value },
      { responseType: 'blob' });
}