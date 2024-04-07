import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface props{
    image:string,
    name:string,
    description:string,
    href:string;

}
export default function Card({image, name, description, href}:props) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-md m-4">
        <div className="box-border w-full h-48 rounded-md relative">
            <Image src={image} fill alt={name} className="object-cover p-2 rounded-md hover:scale-95 transition duration-300 ease-in-out"  />
        </div>
        <div className="flex flex-col space-y-1.5 p-4">
            <h3 className="whitespace-nowrap tracking-tight text-lg font-medium text-center">
            {name}</h3>
            <p className="text-muted-foreground text-sm text-center"> {description}</p>
        </div>
        <div className="flex items-center p-4 bottom-4">
            <Link className="inline-flex h-6 items-center rounded-md border border-gray-200 bg-white px-2 text-xs font-medium shadow-sm gap-0.5 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:text-blackgit pu"
            href={href}>
            Visit
            </Link>
        </div>
    </div>
  )
}
