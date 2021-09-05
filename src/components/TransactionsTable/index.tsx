import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  //tem de criar a interface para o react entender a informacao que vem da api e passar para o componente
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]); //aqui passa a interface e tem de passar [] senao ele so passa um objeto

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            //puxa a lista da response e formata dentro da pagina
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat("en-GB", {
                    //formatando para pound com Intl funcao base do javascript
                    style: "currency",
                    currency: "GBP",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {" "}
                  {new Intl.DateTimeFormat("en-GB").format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
