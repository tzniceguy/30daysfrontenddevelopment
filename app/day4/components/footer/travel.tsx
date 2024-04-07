import Link from 'next/link'
import React from 'react'

export default function Travel() {
    const links = [
        {label: 'reserve', href: '#reserve'},
        {label: 'airports', href: '#airports'},
    ]
  return (
    <div className="space-y-3">
        <h3 className="text-xl">Travel</h3>
        <div>
            <ul className="space-y-3">
                {links.map((link) => (
                    <li key={link.href}><Link href={link.href} className="hover:underline">{link.label}</Link></li>
                ))}
            </ul>
        </div>
    </div>
  )
}
