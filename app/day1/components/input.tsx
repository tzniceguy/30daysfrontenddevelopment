import React from 'react'

interface inputProps  {
    type : string,
    placeholder: string,

}

export default function Input({type ='text', placeholder = ''}: inputProps) {
  return (
    <input type={type} placeholder={placeholder} className="rounded m-2 p-2 block w-full" />
  )
}
