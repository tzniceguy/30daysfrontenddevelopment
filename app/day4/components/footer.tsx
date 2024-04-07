import React from 'react'
import Company from './company'

export default function Footer() {
  return (
    <div className="p-6 md:p-12 flex flex-col  md:grid md:grid-cols-4 bg-black text-white h-screen space-y-5 md:space-y-5">
        <div className="md:grid-cols-4">
            Visit our Help center
        </div>
        <div>
            <Company/>
        </div>
    </div>
  )
}
