 
 'use client';

import { Transaction } from '../types/transaction';
import Image from 'next/image';

interface TableProps {
  transactions: Transaction[];
}

export default function Tables({ transactions }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="lg:px-20 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center">
              Date
              <Image 
                src="/icon.svg"
                alt="Sort icon"
                width={20}
                height={20}
                className="relative bottom-1 ml-1"
              />
            </th>
            <th className="lg:px-20 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center">
                Remark
                <Image 
                  src="/icon.svg"
                  alt="Sort icon"
                  width={20}
                  height={20}
                  className="relative bottom-1 ml-1"
                />
              </div>
            </th>
            <th className="lg:px-20 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center">
                Amount
                <Image 
                  src="/icon.svg"
                  alt="Sort icon"
                  width={20}
                  height={20}
                  className="relative bottom-1 ml-1"
                />
              </div>
            </th>
            <th className="lg:px-20 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center">
                Currency
                <Image 
                  src="/icon.svg"
                  alt="Sort icon"
                  width={20}
                  height={20}
                  className="relative bottom-1 ml-1"
                />
              </div>
            </th>
            <th className="lg:px-20 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center">
              Type
              <Image 
                src="/icon.svg"
                alt="Sort icon"
                width={20}
                height={20}
                className="relative bottom-1 ml-1"
              />
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <tr key={`${transaction.id}-${transaction.date}`}>
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
                <div className={`flex items-center px-3 rounded-full h-8 ${
                  transaction.type === 'Credit' 
                    ? 'bg-slate-100 text-green-800' 
                    : 'bg-slate-100'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    transaction.type === 'Credit' ? 'bg-green-800' : 'bg-red-200'
                  }`} />
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold">
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