import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App'; //usa os brackets para importar aqui a funcao App pq vc esta exportando a funcao no App.tsx

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

