

'use client';
import Tables from "../Components/Table";
import { TRANSACTIONS } from "../data/transaction";
export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Transaction History</h1>
      <Tables transactions={TRANSACTIONS} />
    </div>
  );
}


