import React from 'react'

interface buttonProps {
    label:string
}
export default function Button({label}:buttonProps) {
  return (
    <button className='rounded p-4 bg-sky-800 w-full'>{label}</button>
  )
}
