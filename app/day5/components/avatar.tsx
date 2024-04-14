import React from 'react'
import Image from 'next/image'

export default function Avatar() {
  return (
    <div className="flex space-x-2">
        <div className="relative shadow-lg rounded-full">
            <Image src={'/day5/Avatar.jpg'} alt='avatar' height={56} width={56}  className="rounded-full object-cover"/>
        </div>
        <div>
            <h2 className="md:text-lg font-bold">Leo Messi</h2>
            <h3 className="text-sm">@messi</h3>
        </div>
    </div>
  )
}
