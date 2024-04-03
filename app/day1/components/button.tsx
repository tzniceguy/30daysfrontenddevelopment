import React from 'react'

interface buttonProps {
    label: string,
}

export default function Button({label= 'Button'}: buttonProps) {
  return (
    <button className="rounded w-full text-white bg-black m-2 p-2 block "><span>{label}</span>
    </button>
  )
}
