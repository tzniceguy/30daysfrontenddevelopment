import React from 'react'

interface props {
    label:string;
    color: string;
}

export default function Button({label, color}:props) {
  return (
    <button className={`p-2 bg-${color}-500`}>{label}</button>
  )
}
