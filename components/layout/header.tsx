import Image from 'next/image'
import logoMark from '../../public/Logomark.svg'
import logoType from '../../public/Logotype.svg'
import {Input} from "@nextui-org/react";
import NavLink from './navlink';
import Link from 'next/link';


export default function LayoutHeader() {
    return (
        <div className='flex flex-col pt-8 gap-6'>
            <div className='flex px-6 gap-2 items-center'>
                <Link href='/' className='bg-indigo-500 rounded-lg h-8 w-8 flex justify-center'>
                    <Image src={logoMark} alt='logo'/>
                </Link>
                <Link href='/'>
                    <Image src={logoType}  alt='logo Type'/>
                </Link>
            </div> 
            <div className='px-6'>
                <Input type="search" variant='bordered' radius='lg' label="Search" />
            </div>
            <div className='px-4'>
                <NavLink />
            </div>
        </div>
    )
}
