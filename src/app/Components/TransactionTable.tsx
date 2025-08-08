
'use client';

import { Transaction } from '../types/transaction';
import Image from 'next/image';

interface TransactionTableProps {
  transactions: Transaction[];
}

export default function TransactionTable({ transactions }: TransactionTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="lg:px-20 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex">
                Date
                 <Image src={'./icon.svg'}
                 alt='icon'
                 width={20}
                 height={20}
                 className='relative bottom-1'
                 />
           </th>
            <th className="lg:px-20 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className='flex'>
                Remark
                <Image src={'./icon.svg'}
                 alt='icon'
                 width={20}
                 height={20}
                 className='relative bottom-1'
                 />
                 </div>
            </th>
            <th className="lg:px-20 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className='flex'>
                Amount
                <Image src={'./icon.svg'}
                 alt='icon'
                 width={20}
                 height={20}
                 className='relative bottom-1'
                 />
                 </div>
            </th>
            <th className="lg:px-20 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className='flex'>
                Currency
               <Image src={'./icon.svg'}
                 alt='icon'
                 width={20}
                 height={20}
                 className='relative bottom-1'
                 />
                 </div>
            </th>
            <th className="lg:px-20 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex">
                Type
                <Image src={'./icon.svg'}
                 alt='icon'
                 width={20}
                 height={20}
                 className='relative bottom-1'
                 />
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td className="lg:px-20 px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(transaction.date).toLocaleDateString()}
              </td>
              <td className="lg:px-20 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {transaction.remark}
              </td>
              <td className={`lg:px-20 px-6 py-4 whitespace-nowrap text-sm ${
                transaction.type === 'Credit' ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.type === 'Credit' ? '+' : '-'}${transaction.amount.toLocaleString()}
              </td>
              <td className="lg:px-20 px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {transaction.currency}
              </td>
              <td className="lg:px-20 px-6 py-4 whitespace-nowrap">
                <div className={` flex items-center px-3 rounded-full h-8
                ${transaction.type === 'Credit' 
                ? 'bg-slate-100 text-green-800' 
                : 'bg-slate-100'}`}>{transaction.type === 'Credit'? <div className='w-2 h-2 rounded-full bg-green-800'></div>: <div className='w-2 h-2 rounded-full bg-red-200'></div>}
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full`}>
                  {transaction.type}
                </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}