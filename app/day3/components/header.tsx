'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { CiMenuFries } from "react-icons/ci";
import Button from './button';


export default function Header() {
    const navItems = [
        {label: 'pricing', href: '/pricing'},
        {label: 'docs', href:'docs.sarufi.io'},
        {label: 'contact', href: '#contact'},
        {label: 'template', href: '/template'},
        {label: 'resources', href: '/resources'},
    ]

    const [isVisible, setVisibility] =useState(false)

    const toggleMenu =() => {
        setVisibility!(isVisible)
    }

  return (
    <div className="bg-blue-500 p-6 md:flex md:items-center md:justify-between text-white space-x-6">
        <div className="flex items-center md:space-x-64">
            <div className="py-5 px-4">
                <Image src={"https://sarufi.io/images/logo_w_text.svg"} height={200} width={100} alt='sarufi'/>
            </div>
            <nav className='hidden md:flex md:items-center md:justify-center'>
                <ul className=" md:flex md:space-x-6">
                    {navItems.map((navItem) => (
                        <li key={navItem.href} className="text-xl hover:bg-gray-400 hover:px-3">{navItem.label}</li>
                        ))}
                </ul>
            </nav>
        </div>
        <div className="md:flex md:items-center md:space-x-6">
            <div className="hidden md:flex md:pb-4 mr-6">
                <Button label='Login'/>
            </div>
        </div>
        <div className="absolute top-10 right-8 flex md:hidden">
            <button className="text-3xl" onClick={toggleMenu}>
                <CiMenuFries />
            </button>
        </div>  
    </div> 
  )
}
