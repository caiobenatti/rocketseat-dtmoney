import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000/api', //cria api, aqui pode colocar tb os headers para esconder a requisicao de token da api

})