import React from 'react'
import Button from './button'
import Link from 'next/link'
import Image from 'next/image'

export default function Join() {
  return (
    <div className="p-6 md:p-12 flex flex-col  md:grid md:grid-cols-2 bg-white text-black h-screen space-y-5 md:space-y-5">
        <div className="space-y-4">
            <h3 className="text-3xl md:text-5xl font-bold">Drive When you Want, Earn what you need </h3>
            <h4 className="text-lg">Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber</h4>

            <div className="flex text-white space-x-4">
                <Button label='Join Now' color='black'/>
                <Link href={'/'}><span className="text-black text-center underline">Already have an account? Login</span></Link>
            </div>
        </div>
        <div className="p-4 relative flex-grow">
            <Image src={'/Images/earner-illustra.webp'} alt='earn' fill />
        </div>
    </div>
  )
}
