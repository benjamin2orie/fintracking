'use client';
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Avaters {
    id:string;
    src:string;
    alt:string;
}

interface Name {
    id:string;
    name:string;
}

const WalletLedger = () =>{

    const pathname = usePathname();

    const onlineUsers:Avaters[]= [
        {id:"1", src:"./avater2.svg", alt:"online users image"},
        {id:"2", src:"./avater3.svg", alt:"online users image"},
        {id:"3", src:"./avater4.svg", alt:"online users image"},
        {id:"4", src:"./avater5.svg", alt:"online users image"},
    ];

    const names:Name[] =[
        {id:"1", name:"Awa"},
        {id:"2", name:"Liam"},
        {id:"3", name:"Noah"}
    ]

    return(
        <div className="border-b border-b-gray-300 mb-10">
            <div className="flex lg:justify-between gap-[3em] lg:gap-0 py-[2em] lg:pl-[5em]">
                <div className="flex lg:flex-row flex-col gap-5">
                    <div className="text-[20px] font-[600] flex">wallet ledger 
                        <Image
                        src={"./icon.svg"}
                        alt="icon"
                        width={20}
                        height={20}
                        className="relative bottom-1"

                    />

                    </div>
                  <div className="bg-slate-100 flex items-center gap-1 w-[100px] h-[40px] rounded-full justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#087A2E] font-[800]"></div>
                        Active
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="bg-[#4B8B9F] text-[#1B2528] text-[20px] font-[500] flex items-center justify-center w-20 h-10 rounded-full">share</button>
                    <div className="text-[20px] font-[600] bg-[#FCFDFD] w-10 h-10 rounded-full text-center text-[#1B2528] border">...</div>
                </div>
            </div>

            <div className="flex items-center lg:pl-[5em]">
                {onlineUsers.map((user) => (
                    <div key={user.id}>
                        <Image
                        src={user.src}
                        alt={user.alt}
                        width={30}
                        height={30}
                    />    
                    </div>
                ))}

                {names.map((n) =>(
                    <div key={n.id} className="gap-2 pl-2 text-[#aaa]">
                        {n.name}
                    </div>
                ))}

                <span className="text-[#aaa] pl-2">+ 12 others</span>
            </div>

            <div className="flex py-7 pl-[5em] gap-[3em]">
                <Link href={"/"} className={`relative pb-2 text-[#437D8E]
                    ${pathname === '/' ? "border-b-3 border-b-[#437D8E] -mb-[1.8em]" : ""}`}>Over view</Link>
                <Link href={"/transactions"} className={`text-[#437D8E] relative pb-2
                    ${pathname === '/transactions' ? "text-[#437D8E] border-b-3 border-b-[#437D8E] -mb-[1.8em]" : ""}`}>Transactions</Link>
            </div>
        </div>
    )
};


export default WalletLedger;