import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface Transaction {
  //tem de criar a interface para o react entender a informacao que vem da api e passar para o componente
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

// interface TransactionInput {
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// }

type TransactionInput = Omit<Transaction, "id" | "createdAt">; //aqui herda todos os campos do transaction mas omite o ID ou o createdAt

interface TransactionsProviderProps {
  children: ReactNode; //aqui vc precisa importar o reactnode para passar o resto do conteudo da aplicacao dentro do container que foi criado aqui
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>; //cria a interface para o transaction context , ai vc coloca a promise por causa da funcao ser assincrona
}

const TransactionsContext = createContext<TransactionsContextData>( //passa o context data aqui dentro e usa o as TransactionsContextData para o React parar de dar erro
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  //aqui vc passa o prop children para dentro
  const [transactions, setTransactions] = useState<Transaction[]>([]); //aqui passa a interface e tem de passar [] senao ele so passa um objeto

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    //transforma a funcao em assincrona para poder fechar o modal se tiver sucesso
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    }); //manda as informacoes do form
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]); // aqui usa o spread context para adicionar a transaction dentro do objeto que ja existia transactions
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {" "}
      {/*aqui cria o contexto e passa as duas properiedades que precisam dentro do interface */}
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  //aqui vc cria o hook e exporta ele junto com o useContext para nao ter de importar em todas as partes da aplicacao
  const context = useContext(TransactionsContext);

  return context;
}
