
'use client';
import Tables from "../Components/Table";
import { TRANSACTIONS } from "../data/transaction";
import { useSearch } from "../Components/SearchContext";
import WalletLedger from "../Components/walletLedger";


const Transactions = ()=>{
   const { searchQuery, setSearchQuery } = useSearch();



   const filteredTransactions = TRANSACTIONS.filter(transaction =>
        transaction.remark.toLowerCase().includes(searchQuery.toLowerCase()) ||
        transaction.amount.toString().includes(searchQuery) ||
        transaction.type.toLowerCase().includes(searchQuery.toLowerCase())
   );

    return(
        <>
          
            <div className="p-6">
                <WalletLedger/>
              {filteredTransactions.length > 0 ?(
              <Tables transactions={filteredTransactions} />
              ): (<p className="text-center">No result found</p>)}
            </div>
      </>
    )
};


export default Transactions;

