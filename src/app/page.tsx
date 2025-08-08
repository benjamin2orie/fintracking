'use client';

import {useState} from 'react';
import TransactionTable from './Components/TransactionTable';
import { TRANSACTIONS } from './data/transaction';
import WalletLedger from './Components/walletLedger';
import { useSearch } from './Components/SearchContext';
import Summary from './Components/DashboardSummary';

export default function Home() {
  const { searchQuery, setSearchQuery } = useSearch();

  
    const filteredTransactions = TRANSACTIONS.filter(transaction =>
    transaction.remark.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.amount.toString().includes(searchQuery) ||
    transaction.type.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="font-sans">
      <div>
        <div className='lg:pr-[3em]'>
          <div>
            <WalletLedger/>
            <Summary/>
          </div>
          <div className="font-sans">
           <TransactionTable transactions={filteredTransactions} />
          </div>

        </div>
      </div>

    </div>
  );
};
