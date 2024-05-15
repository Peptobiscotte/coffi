'use client'

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import filterSvg from '@/public/filter-lines.svg'
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FilterBtn() {
    const [keyState, setKeyState] = useState()
    const router = useRouter()
    
    return (
        <Dropdown>
        <DropdownTrigger>
          <Button 
            variant="bordered"
            className="rounded-3xl border font-geo text-slate-500 dark:border-slate-800" 
          >
            <Image src={filterSvg} alt='filter Button'/>
            Filters
          </Button>
        </DropdownTrigger>
        <DropdownMenu 
          aria-label="Action event example" 
          onAction={(key:any) => {
            router.push(`/members/${key}`)
        }}
        >
          <DropdownItem key="name" className="font-geo">Name</DropdownItem>
          <DropdownItem key="plan" className="font-geo">Plan</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
}