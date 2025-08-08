import { ReactNode } from "react";

interface Properties{
    className:string;
    children:ReactNode
}
export default function Card ({children, className}: Properties){

    return(
        <>
        <div className="bg-slate-200 flex flex-col justify-center items-center lg:w-[200px] w-[200px] lg:h-[100px] h-[100px] mb-[3em] rounded-[10px]">
            {children}
        </div>
        </>
    )
};