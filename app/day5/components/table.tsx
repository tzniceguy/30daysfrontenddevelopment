import React from 'react'
import { tableData } from '../tabledata';
import Link from 'next/link';

interface TableData {
  date: string;
  type: string;
}
export default function Table() {
  return (
    <table className="border-spacing-2">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Receipt</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((datavalue => (
            <tr key={datavalue.date} className="p-2">
              <td>{datavalue.date}</td>
              <td>{datavalue.type}</td>
              <td><Link href={'#'}><span className="">Download</span></Link></td>
            </tr>
          )))}
        </tbody>
    </table>
  )
}
