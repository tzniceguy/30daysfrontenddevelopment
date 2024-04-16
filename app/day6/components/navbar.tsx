'use client'
import React, { useState } from 'react'
import { listItems } from '../navitems';
import { CiMenuFries } from 'react-icons/ci';
import Image from 'next/image';
import Button from './button';
import Link from 'next/link';

interface listItems {
    label:string;
    href: string;
}
export default function NavBar() {

    const [isOpen, setOpen] = useState(false)

    const toggleNav = () =>{
        setOpen(!isOpen)
    }

  return (
    <div className="m-2 md:space-x-56 md:flex flex-grow border-b">
        <div className="m-2">
            <Image src={'/day6/logo.svg'} width={200} height={200} alt='Logo' />
        </div>
        <div className={`${isOpen ? 'block': 'hidden'} md:flex m-2 justify-center items-center`}>
            <nav className="">
                <ul className='flex flex-grow space-x-4'>
                    {listItems.map((li => (
                        <li key={li.title}><Link href={li.href}>{li.title}</Link></li>
                    )))}
                </ul>
            </nav>
        </div>
        <div className={`${isOpen ? 'flex': 'hidden'} flex md:flex space-x-6 justify-center items-center md:absolute md:right-4 md:top-5`}>
            <Button label='Sign Up'/>
            <Button label='Login' />
        </div>
        <div className="absolute top-5 right-4 text-3xl md:hidden">
            <button onClick={toggleNav}><CiMenuFries /></button>
        </div>
    </div>
  )
}
