import React from 'react'
import NavBar from './NavBar'
import Billing from './billing'
import Payment from './payment'
import Card from './card'

export default function Main() {
  return (
    <main className="md:flex md:grid-cols-3">
        <div className="">
            <NavBar />
        </div>
        <div className="p-6 md:h-screen flex flex-col md:items-center md:w-2/4">
            <Billing />
            <Payment />
        </div>
        <div className="p-6">
            <Card />
        </div>
    </main>
  )
}
