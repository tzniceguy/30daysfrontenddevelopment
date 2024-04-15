import React from 'react'
import Table from './table'

export default function Billing() {
  return (
    <div>
        <h3>Billing</h3>

        <div>
            <h3>Order History</h3>
            <span>Manage billing information and view reciepts</span>
        </div>
        <div>
            <Table />
        </div>
    </div>
  )
}
