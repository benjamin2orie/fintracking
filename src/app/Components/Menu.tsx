'use client';
import React, { useState } from 'react';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { Drawer, Space } from 'antd';
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";


interface SideBarItems {
  id: number;
  url: string;
  name: string;
  icon?: ReactNode; // You can add icons later
}


const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');



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

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

//   const onChange = (e: RadioChangeEvent) => {
//     setPlacement(e.target.value);
//   };

  return (
    <div className='lg:hidden'>
      <Space>
          <Image
          onClick={showDrawer}
          src={'./menu.svg'}
          alt='icon'
          width={20}
          height={20}
          />
      </Space>
      <Drawer
        title=<div onClick={onClose} className='text-[20px] font-[600] cursor-pointer'>X</div>
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
    <div className="w-64 bg-white p-4">
      
      <nav className="space-y-2">
        {sideBars.map((item) => (
          <a 
            key={item.id}
            href={item.url}
            className={`flex items-center p-1 rounded-full transition-colors duration-200
              ${pathname === item.url 
                ? 'bg-slate-300 font-medium text-[#3A6C7B]' 
                : 'text-[#1B2528] hover:bg-gray-100'
              }`}
          >
            <span className="capitalize text-[16px]">
              {item.name}
            </span>
          </a>
        ))}
      </nav>
    </div>

      </Drawer>
    </div>
  );
};

export default Menu;