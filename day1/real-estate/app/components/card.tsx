import React from 'react'
import Register from './register'
import Link from 'next/link'

export default function Card() {
  return (
    <div className='md:grid md:grid-cols-2 md:grid-cols-8fr  md:space-x-2 md:flex-wrap rounded shadow-md'>
        <div>
            <Register />
        </div>
        <div className="text-center items-center md:text-left">
            <Link href={'/'} /><span className="text-xl md:text-sm underline underline-offset-2">Log in here  </span>
        </div>
    </div>
  )
}
