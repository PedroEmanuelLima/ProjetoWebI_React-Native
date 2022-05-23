import axios from 'axios';

const configPlain = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "text/plain",
};

const configJson = {
  'Content-Type': 'application/json', 
  'Accept': 'application/json',
};

export const apiMercado = axios.create({
    baseURL: `https://api.mercadolibre.com/`,
    https: configPlain,
});

export const apiRastreio = axios.create({
  baseURL: `https://proxyapp.correios.com.br/v1/sro-rastro/`,
  headers: configJson
});

export const apiInfoLocation = axios.create({
  baseURL: `https://geocoding-api.open-meteo.com/v1/search`,
  headers: configJson,
});

export const apiCep = axios.create({
  baseURL: `https://viacep.com.br/ws/`,
  headers: configJson
});
