'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { CiMenuFries } from "react-icons/ci";


export default function Header() {
    const navItems = [
        {label: 'pricing', href: '/pricing'},
        {label: 'docs', href:'docs.sarufi.io'},
        {label: 'contact', href: '#contact'},
        {label: 'template', href: '/template'},
        {label: 'resources', href: '/resources'},
    ]

    const [isVisible, setVisibility] =useState(false)

  return (
    <div className="bg-blue-500 p-6 flex flex-wrap space-x-48 text-white">
        <div>
            <Image src={"https://sarufi.io/images/logo_w_text.svg"} height={100} width={100} alt='sarufi'/>
        </div>
        <nav className='hidden md:flex items-center justify-center space-x-12'>
            <ul className="flex space-x-6">
                {navItems.map((navItem) => (
                    <li key={navItem.href}>{navItem.label}</li>
                ))}
            </ul>

            <h2>Login</h2>
        </nav>
        <button className="text-2xl">
            <CiMenuFries />
        </button>
    </div>
  )
}
