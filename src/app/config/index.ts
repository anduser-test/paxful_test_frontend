import axios from 'axios';

export const cfg = {
  baseUrl: 'https://api.coindesk.com/v1/bpi/currentprice',
};

export const axiosAPI = axios.create({
  baseURL: cfg.baseUrl,
});
