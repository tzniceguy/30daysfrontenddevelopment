import React from 'react'
import Company from './company'
import Products from './product'
import Global from './global'
import Travel from './travel'

export default function Footer() {
  return (
    <div className="p-6 md:p-12 flex flex-col bg-black text-white h-full space-y-5 md:space-y-5">
        <div className="md:grid-cols-4">
            Visit our Help center
        </div>
        <div className='md:grid md:grid-cols-4'>
          <div>
            <Company/>
          </div>
          <div>
            <Products />
          </div>
          <div>
            <Global />
          </div>
          <div>
            <Travel />
          </div>
        </div>
    </div>
  )
}
