export type TransactionsResponse<T> = {
    totalTransactions: number,
    transactions : Transactions<T>[]
  };

  export type Transactions<T> = {
    id: number,
    date: string,
    amount: T,
    merchant: string,
    category: string
  };