'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { CiLock, CiMail, CiMenuFries, CiMoneyBill, CiVault } from 'react-icons/ci'
import Avatar from './avatar'
import { IoExitOutline } from 'react-icons/io5'

export default function NavBar() {

    const [navOpen, setNavOpen] = useState(false)

    const toggleNav = () => {
        setNavOpen(!navOpen)
    }

    const listItems = [
        {label: 'General', icon: <CiLock/>,  href:'/#'},
        {label: 'Password', icon: <CiLock/>, href:'/#'},
        {label: 'Invitation', icon: <CiMail/>, href:'/#'},
        {label: 'Billing', icon: <CiMoneyBill/>, href:'/#'},
        {label: 'Apps', icon: <CiVault />, href:'/#'},
    ]

  return (
    <div className={`p-4 fixed md:h-screen md:w-56 ${navOpen ? 'space-y-3': 'space-y-0'} md:space-y-4 sticky top-2`}>
        <div className={`md:p-4 ${navOpen ? 'border-b-2':'border-none'}`}>
            <Avatar />
        </div>
        <div className={` ${navOpen ? 'block' : 'hidden'} md:flex md:p-4 ${navOpen ? 'h-full': 'h-auto'}`}>
            <ul className={`${navOpen ? 'space-y-3': 'space-y-0'}md:space-y-6`}>
                {listItems.map((item => (
                    <li key={item.label} className="">
                        <Link href={item.href}>
                            <div className="flex p-2">
                                <div className="text-xl md:text-3xl">{item.icon}</div>
                                <div className="text-center md:text-lg">{item.label}</div>
                            </div>
                        </Link>
                    </li>
                )))}
            </ul>
        </div>
        <div className={` ${navOpen ? 'block' : 'hidden'
        } md:flex md:absolute md:bottom-2 md:left-6`}>
            <div className="flex">
                <div className="text-2xl md:text-4xl"><IoExitOutline /></div>
                <div><span>logout</span></div>
            </div>
            
        </div>
        <div className="absolute top-5 right-3 md:hidden">
            <button className="text-4xl" onClick={toggleNav}><CiMenuFries /></button>
        </div>
    </div>
  )
}
