import React from 'react'
import { FaCcVisa } from 'react-icons/fa'
import Button from './button'


export default function Payment() {
  return (
    <div>
        <h3 className="font-bold text-lg">Payment Method</h3>
        <p className="">Manage billing information and view receipts</p>

        <div className="flex space-x-4">
            <FaCcVisa className="text-5xl"/>
            <span>VISA ending in 2255</span>
            <Button label='Remove' />
        </div>
    </div>
  )
}
