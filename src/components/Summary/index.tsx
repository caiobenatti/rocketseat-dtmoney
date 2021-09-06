import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions(); //tem de usar o transactions como objeto por causa do context

  // const totalDeposits = transactions.reduce((acc, transaction) => {
  //   if (transaction.type === "deposit") {
  //     return acc + transaction.amount; //aqui atualiza o valor total do income, caso seja negativo ele reconhece isso e subtrai o valor
  //   }

  //   return acc;
  // }, 0);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws -= transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  function formatValuesCurrency(value: number) {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "GBP",
    }).format(value); //cria uma formatacao para todos os numeros
  }

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Income img" />
        </header>
        <strong>{formatValuesCurrency(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Expenses</p>
          <img src={outcomeImg} alt="Expenses img" />
        </header>
        <strong>{formatValuesCurrency(summary.withdraws)}</strong>
      </div>
      <div className="background-highlight">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total img" />
        </header>
        <strong>{formatValuesCurrency(summary.total)}</strong>
      </div>
    </Container>
  );
}
