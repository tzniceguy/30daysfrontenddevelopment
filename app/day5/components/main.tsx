import React from 'react'
import NavBar from './NavBar'
import Billing from './billing'
import Payment from './payment'

export default function Main() {
  return (
    <div className="flex-col md:flex md:grid-cols-3">
        <div className="md:col-span-1">
            <NavBar />
        </div>
        <div className="md:col-span-1 p-4">
            <Billing />
            <Payment />
        </div>
        <div className="md:col-span-1">
            plan
        </div>
    </div>
  )
}
