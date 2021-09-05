import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App"; //usa os brackets para importar aqui a funcao App pq vc esta exportando a funcao no App.tsx

createServer({
  models: {
    transaction: Model, //cria o Model para persistir as informacoes
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction"); //retorna todas as transicoes dentro do schema do model
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody); //da parse das informacoes pq elas sao mandadas em form de Json pelos forms

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
