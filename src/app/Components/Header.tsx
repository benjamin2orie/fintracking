
'use client';
import Image from "next/image";
import Link from "next/link";
import Search from "./SearchBar";
import { useSearch } from "./SearchContext";
import Menu from "./Menu";






const Header = () =>{

    const { setSearchQuery } = useSearch();
    
    return(
        <div>
         <header className="flex items-center justify-between lg:px-[3em] px-[1em] py-[2em] sticky z-10">
        <div className="flex items-center gap-[0.5em]">
          
          <Menu/>
           <Link href={"/"} className="flex items-center">
                <Image src={"./fintrack.svg"}
                alt="fintrack icon"
                width={40}
                height={40}
                className="w-[10px] h-[10px] lg:w-[40px] h-[40px]"
                />
              <span className="text-[#437D8E] font-[600] lg:text-[20px] text-[12px] italic">fintrack</span>
           </Link>
        </div>

        <div className="flex items-center gap-[1em] lg:pr-[20em]">
        {/* <input type="text"
         placeholder="search"
         className="border outline-none rounded-full px-2"
         /> */}
         <Search onSearch={setSearchQuery} />
        <Image src={"./menu2.svg"}
          alt="icon"
          width={20}
          height={20}
          className="lg:w-[20px] h-[20px] w-[10px] h-[10px]"
        />
        <Image
        src={"./avater2.svg"}
        alt="avater icon"
        width={50}
        height={50}
        className="lg:w-[50px] h-[50px] h-[20px] w-[20px]"
        />
        </div>
      </header>

        </div>
    )
};



export default Header;