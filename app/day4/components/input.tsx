import React from 'react'

interface props {
  type:string,
  placeholder: string
}
export default function Input({type,placeholder}: props) {
  return (
    <input className="rounded-lg p-2" placeholder={placeholder} />
  )
}
