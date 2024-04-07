import React from 'react'

interface props{
    label: string,
    color: string,
}
export default function Button({color,label}:props) {
  return (
    <button className={`bg-${color} rounded-lg p-2 w-1/4`}>{label}</button>
  )
}
