import React from 'react'
import Input from './input'
import Button from './button'

export default function Waitlist() {
  return (
    <div className="space-y-2 mr-16 flex flex-col justify-center">
      <span className="font-semibold">Be In The Know!</span>
      <span>Join The Waitlist! Now.</span>
      <div className="space-y-2 w-full">
        <Input />
        <Button label='Join the Waitlist' />
      </div>
     
    </div>
  )
}
