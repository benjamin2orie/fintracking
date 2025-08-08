
'use client';
import { ReactElement } from "react";
import Card from "./Card";


interface BalanceSummary{
    id:string;
    name:string;
    dotmenu:ReactElement;
    totalBalance:number;
    balanceChange:number;
}

interface Creditsummary{
    id:string;
    name:string;
    dotmenu:ReactElement;
    totalCredits:number;
    creditsChange:number;
}
interface DebitSummary{
    id:string;
    name:string;
    dotmenu:ReactElement;
    totalDebits:number;
    debitsChange:number;
}
interface TransactionSummary{
    id:string;
    name:string;
    dotmenu:ReactElement;
    transactionCount:number;
    transactionChange:number;
}

const Summary = ()=>{

    const balanceSummary:BalanceSummary[] =[
        {id:"1", name:"total balance", dotmenu:<div>...</div>, totalBalance:3000, balanceChange:5}
    ]

    const credit:Creditsummary[] =[
        {id:"1", name:"total credits", dotmenu:<div>...</div>, totalCredits:3000, creditsChange:3}
    ]

    const debit:DebitSummary[] =[
        {id:"1", name:"total debits", dotmenu:<div>...</div>, totalDebits:8000, debitsChange:23}
    ]

    const transaction:TransactionSummary[] =[
        {id:"1", name:"transactions", dotmenu:<div>...</div>, transactionCount:9, transactionChange:10}
    ]



    return(
        <div className="lg:pl-[5em]">
            <h2 className="lg:py-5 py-3">summary</h2>
            <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-5">
            <Card>
                <div>
                    {balanceSummary.map((balance) =>(
                        <div key={balance.id}>
                            <div className="flex gap-[3em]">
                                <h2>{balance.name}</h2>
                                {balance.dotmenu}
                            </div>
                            <div>
                                <p className="lg:text-[20px] font-[600]">${balance.totalBalance}</p>
                                <p className="text-green-300">+{balance.balanceChange}%</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

                        <Card>
                <div>
                    {credit.map((balance) =>(
                        <div key={balance.id}>
                            <div className="flex gap-[3em]">
                                <h2>{balance.name}</h2>
                                {balance.dotmenu}
                            </div>
                            <div>
                                <p className="lg:text-[20px] font-[600]">${balance.totalCredits}</p>
                                <p className="text-green-500">+{balance.creditsChange}%</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

                <Card>
                <div>
                    {debit.map((balance) =>(
                        <div key={balance.id}>
                            <div className="flex gap-[3em]">
                                <h2>{balance.name}</h2>
                                {balance.dotmenu}
                            </div>
                            <div>
                                <p className="lg:text-[20px] font-[600]">${balance.totalDebits}</p>
                                <p className="text-green-500">+{balance.debitsChange}%</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

                        <Card>
                <div>
                    {transaction.map((balance) =>(
                        <div key={balance.id}>
                            <div className="flex gap-[3em]">
                                <h2>{balance.name}</h2>
                                {balance.dotmenu}
                            </div>
                            <div>
                                <p className="lg:text-[20px] font-[600]">{balance.transactionCount}</p>
                                <p className="text-green-500">+{balance.transactionChange}%</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
            </div>
        </div>
    )
};


export default Summary;