import React from 'react'
import { FaCcVisa } from 'react-icons/fa'


export default function Payment() {
  return (
    <div>
        <h3>Payment Method</h3>
        <p>Manage billing information and view receipts</p>

        <div className="flex space-x-4">
            <FaCcVisa className="text-5xl"/>
            <span>VISA ending in 2255</span>
            <span>Remove</span>
        </div>
    </div>
  )
}
