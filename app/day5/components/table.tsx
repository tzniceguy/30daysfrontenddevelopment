import React from 'react'
import { tableData } from '../tabledata';
import Button from './button';

interface TableData {
  date: string;
  type: string;
}
export default function Table() {
  return (
    <table className="border-spacing-2 w-full">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Receipt</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((datavalue => (
            <tr key={datavalue.date} className="p-2 m-2">
              <td>{datavalue.date}</td>
              <td>{datavalue.type}</td>
              <td><Button label='Download' /></td>
            </tr>
          )))}
        </tbody>
    </table>
  )
}
