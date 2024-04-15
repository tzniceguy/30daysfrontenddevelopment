import React from 'react'
import Table from './table'

export default function Billing() {
  return (
    <div className="flex-grow">
        <h3 className="font-bold text-xl md:text-4xl mb-6">Billing</h3>
        <div className="mb-6">
            <h3 className="font-semibold">Order History</h3>
            <span className="text-md">Manage billing information and view reciepts</span>
        </div>
        <div>
            <Table />
        </div>
    </div>
  )
}
