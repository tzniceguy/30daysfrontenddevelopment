import Link from 'next/link'
import React from 'react'

export default function Products() {
    const links = [
        {label: 'ride', href: '#about'},
        {label: 'drive', href: '#offerings'},
        {label: 'eat', href: '#news'},
        {label: 'uber for business', href: '#investors'},
        {label: 'uber freight', href: '#blog'},
    ]
  return (
    <div className="space-y-3">
        <h3 className="text-xl">Products</h3>
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
