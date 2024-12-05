import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:8000'
})

export function generateQR(value: string) {
    return api.post(
      '/qr',
      { "value": value },
      { responseType: 'blob' });
}