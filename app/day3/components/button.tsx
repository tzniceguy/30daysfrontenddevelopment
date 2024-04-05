import React from 'react'

interface props {
    label: string
}

export default function Button({label}: props) {
  return (
    <button className="mt-3 w-auto p-2 rounded  bg-white text-small font-semibold text-blue-500">{label}</button>
  )
}
