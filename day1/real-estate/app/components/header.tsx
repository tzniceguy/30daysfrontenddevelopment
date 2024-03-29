import React from 'react'
import Image from 'next/image'


export default function Header() {
  return (
    <div className="p-6 my-6 float-left">
      <Image src={'./Nairobi-black.svg'} alt="logo" width={100} height={100} className="text-2xl"  />
    </div>
  )
}
