import React from 'react'
import Button from './button'
import Link from 'next/link'
import Image from 'next/image'

export default function Reinvented() {
  return (
    <div className='p-6 md:p-12 flex flex-col  md:grid md:grid-cols-2 bg-white text-black h-screen space-y-5 md:space-y-5'>
        <div className="space-y-4">
            <h3 className="text-3xl md:text-5xl font-bold">The Uber you know, reimagined for business</h3>
            <h4 className="text-lg">Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size.</h4>

            <div className="flex text-white space-x-4">
                <Button label='Get Started' color='black'/>
                <Link href={'/'}><span className="text-black text-center underline">Check out our Solutions</span></Link>
            </div>
        </div>
        <div className="p-4 relative flex-grow">
            <Image src={'/Images/u4b-square.webp'} alt='bussiness' fill />
        </div>
    </div>
  )
}
