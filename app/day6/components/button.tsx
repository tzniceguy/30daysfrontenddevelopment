import React from 'react'

interface props {
    label: string;
}
export default function Button({label}: props) {
  return (
    <button className={`p-2 bg-cyan-950 rounded text-white w-auto h-2/4`}>{label}</button>
  )
}
