import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App"; //usa os brackets para importar aqui a funcao App pq vc esta exportando a funcao no App.tsx

createServer({
  models: {
    transaction: Model, //cria o Model para persistir as informacoes
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Webbsite Freelancing",
          type: "deposit",
          category: "Development",
          amount: 2000,
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Rent",
          type: "withdraw",
          category: "Development",
          amount: 500,
          createdAt: new Date("2021-02-21 10:00:00"),
        },
      ],
    });
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
