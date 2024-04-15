import React from 'react'

interface props {
    label: string;
}

export default function Button({label}: props) {
  return (
    <button className="outline outline-1 rounded p-2">{label}</button>
  )
}
