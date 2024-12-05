import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost/api'
})

export function generateQR(value: string) {
    return api.post(
      '/qr',
      { "value": value },
      { responseType: 'blob' });
}