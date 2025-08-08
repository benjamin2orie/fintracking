'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface SideBarItems {
  id: number;
  url: string;
  name: string;
  icon?: ReactNode; // You can add icons later
}

const SideBar = () => {
  const pathname = usePathname();

  const sideBars: SideBarItems[] = [
    {
      id: 1,
      url: "/",
      name: "Dashboard"
    },
    {
      id: 2,
      url: "/transactions",
      name: "Transactions",
    },
    {
      id: 3,
      url: "/reports",
      name: "Reports"
    },
    {
      id: 4,
      url: "/settings",
      name: "Settings"
    }
  ];

  return (
    <div className="w-64 bg-white border-r-[#437D8E] h-screen sticky top-0 p-4 lg:shadow-md">
      
      <nav className="space-y-2">
        {sideBars.map((item) => (
          <Link 
            key={item.id}
            href={item.url}
            className={`lg:flex hidden items-center p-3 rounded-full transition-colors duration-200
              ${pathname === item.url 
                ? 'bg-slate-100 font-medium text-[#3A6C7B]' 
                : 'text-[#1B2528] hover:bg-gray-100'
              }`}
          >
            <span className="capitalize text-[16px]">
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SideBar;