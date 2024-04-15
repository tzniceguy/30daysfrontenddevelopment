import React from 'react'
import Button from './button'

export default function Card() {
  return (
    <div className="box-border p-6 shadow-lg w-2/3 md:w-full bg-red-600 rounded-lg text-white space-y-3">
        <h3>Your plan</h3>

        <h4 className="font-semibold">Pro  Annual</h4>
        <h3>Renews on Nov.2021</h3>
        <Button label='Cancel Subscription'/>

    </div>
  )
}
