import React from 'react'
import Input from './input'
import Button from './button'
import Image from 'next/image'

export default function Main() {
  return (
    <div className="p-6 md:p-12 flex flex-col  md:grid md:grid-cols-2 bg-black text-white h-screen space-y-5 md:space-y-5 ">
        <div className="flex flex-col space-y-4 mr-6 md:items-center md:justify-center">
            <div className="space-y-2">
                <h4 className="text-2xl md:text-4xl">Go anywhere with Uber</h4>
                <h1>Request a Ride hop in and Go </h1>
            </div>
            <div className="flex flex-col space-y-3 text-black">
                <Input type='text' placeholder='Enter Location'/>
                <Input type='text' placeholder='choose destination'/>
                <Button color='white' label='check prices'/>
            </div>
        </div>
        <div className="p-4 relative flex-grow">
            <Image src={'/Images/Ride-with-Uber.webp'} alt='ride with uber' fill className="rounded-lg object-cover" />
        </div>
    </div>
  )
}