import { useEffect, useState } from 'react'
import {Table} from '../../components/table/table'
import './LandingPage.css'
import { Transactions, TransactionsResponse } from '../../types/responseType';
import { formatAmount, formatDate } from '../../utils/common';
import { EXPENSETABLEKEYMAP } from '../../constants/constant';
import useFetchData from '../../custom-hooks/fetchData';

function LandingPage() {
    const [tableData, setTableData] = useState<Transactions<string>[]>([]);
    const {data,loading,error} = useFetchData<TransactionsResponse<number>>('transactions?page=1');
    
    useEffect(() => {
        setTableData(mapTableData(data.transactions));
    }, [data])

   const mapTableData= ((tableData: Transactions<number>[]) : Transactions<string>[] => {
    return tableData && tableData.map((data: Transactions<number>) => {
        return { ...data, date: formatDate(data.date), amount : formatAmount(data.amount) } as Transactions<string>;
      });
   });

  return (
    <>
      <h2>Expenses</h2>
        {loading ? (<p>Loading...</p>) :
          error ? (<p>{error?.message}</p>) :
            <Table<Transactions<string>> data={tableData} headingKeyMap={EXPENSETABLEKEYMAP} heading={['Id','Date', 'Amount', 'Merchant', 'Category']}></Table>
          
          }
        </>
  )
}

export default LandingPage
