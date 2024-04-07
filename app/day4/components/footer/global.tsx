import Link from 'next/link'
import React from 'react'

export default function Global() {
    const links = [
        {label: 'safety', href: '#about'},
        {label: 'diversity and inclusion', href: '#offerings'},
        {label: 'sustainability', href: '#news'},
    ]
  return (
    <div className="space-y-3">
        <h3 className="text-xl">Global Citizenship</h3>
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
