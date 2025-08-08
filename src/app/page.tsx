'use client';

import {useState} from 'react';
import Search from './Components/SearchBar';
import Table from './dashboard/page';
import TransactionTable from './Components/TransactionTable';
import { Transaction } from './types/transaction';
import SideBar from './Components/SideBar';
import Image from "next/image";
import WalletLedger from './Components/walletLedger';
import Link from 'next/link';
import { useSearch } from './Components/SearchContext';
import Summary from './Components/DashboardSummary';

export default function Home() {
  const { searchQuery, setSearchQuery } = useSearch();


  // const [searchQuery, setSearchQuery] = useState('');

  const transactions:Transaction[] =[
    { date: '2023-10-01', remark: 'Salary', amount: 3000, currency: 'USD', type: 'Credit' },
    { date: '2023-10-02', remark: 'Groceries', amount: 150, currency: 'USD', type: 'Debit' },
    { date: '2023-10-03', remark: 'Gym Membership', amount: 50, currency: 'USD', type: 'Debit' },
    { date: '2023-10-04', remark: 'Dinner', amount: 40, currency: 'USD', type: 'Debit' },
    { date: '2023-10-05', remark: 'Movie Tickets', amount: 30, currency: 'USD', type: 'Debit' },
    { date: '2023-10-06', remark: 'Rent', amount: 1200, currency: 'USD', type: 'Debit' },
    { date: '2023-10-07', remark: 'Utilities', amount: 100, currency: 'USD', type: 'Debit' },
    { date: '2023-10-08', remark: 'Car Payment', amount: 400, currency: 'USD', type: 'Debit' },
    { date: '2023-10-09', remark: 'Insurance', amount: 200, currency: 'USD', type: 'Debit' },
  ];




 // Filter transactions based on search query
  const filteredTransactions = transactions.filter(transaction =>
    transaction.remark.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.amount.toString().includes(searchQuery) ||
    transaction.type.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="font-sans">

      <div>
        {/* <SideBar/> */}

        <div className='lg:pr-[3em]'>
          <div>
            <WalletLedger/>
            <Summary/>
          </div>
          {filteredTransactions.length > 0 ? (
           <>
              <TransactionTable transactions={filteredTransactions} />

              <div className="mt-4 text-sm text-gray-500 text-center py-5">
                Showing {filteredTransactions.length} of {transactions.length} transactions
              </div>
            </>
          ) : (
            <>
              <p className='text-center text-[#437D8E]'>No result found</p>
                  <p className="text-gray-500 text-center max-w-md pt-6">
                We couldn't find any transactions matching "{searchQuery}".<br />
                Try adjusting your search or filter by type or name.
            </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 px-4 py-2 bg-[#437D8E] text-[#fff] rounded-md hover:bg-blue-300 transition-colors ml-[3em]"
              >
                Clear search
              </button>
            </>
           )}
        </div>
      </div>

    </div>
  );
}
