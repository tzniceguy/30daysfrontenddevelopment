import React from 'react'
import NavBar from './NavBar'

export default function Main() {
  return (
    <div className="flex-col md:flex md:grid-cols-3">
        <div className="md:col-span-1">
            <NavBar />
        </div>
        <div className="md:col-span-1">
            Billing
        </div>
        <div className="md:col-span-1">
            plan
        </div>
    </div>
  )
}
