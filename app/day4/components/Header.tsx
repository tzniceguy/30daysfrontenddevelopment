'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'

export default function Header() {

    const navItems =[
        {label: 'Ride', href: '/'},
        {label: 'Drive', href: '#drive'},
        {label: 'Business', href: '#business'},
        {label: 'Uber Eats', href: '#eats'},
        {label: 'About', href: '#about'},
        
    ]

    const [navOpen, isOpen] =useState(false)

    const menuOpen =() => {
        isOpen(!navOpen)
    }

  return (
    <div className={`bg-black h-auto ${navOpen ? 'flex-col': 'flex'}`}>
        <div className=''>
            <Image src={'/Images/logo.png'} alt='uber' height={50} width={100} />
        </div>
        <div className={`m-6 ${navOpen ? 'block':'hidden'} md:flex`}>
            <ul className="md:flex md:items-center md:justify-center md:space-x-6">
                {navItems.map((navItem) => (
                    <li key={navItem.href} className="text-xl text-white">{navItem.label}</li>
                ) )}
            </ul>
        </div>
        <div className="flex flex-wrap m-6 space-x-12 p-3 md:absolute right-14">
            <Link href={'#'} className="text-white p-1">Login</Link>
            <Link href={'#'} className="bg-white text-black p-1 rounded-lg h-8">Sign Up</Link>
        </div>
        <div>
            <button className="absolute top-10 right-8 flex text-white text-4xl md:hidden" onClick={menuOpen}>
                <CiMenuFries />
            </button>            
        </div>
    </div>

  )
}
