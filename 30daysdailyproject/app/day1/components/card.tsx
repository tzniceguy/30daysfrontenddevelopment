import React from 'react'
import Register from './register'
import Link from 'next/link'

export default function Card() {
  return (
    <div className='md:flex md:space-x-2 md:flex-wrap'>
        <div className="md:w-4/5 p-3">
            <Register />
        </div>
        <div className="text-center items-center md:text-left md:m-2">
            <Link href={'/'} /><span className="text-xl md:text-sm underline underline-offset-2">Log in here</span>
        </div>
    </div>
  )
}
