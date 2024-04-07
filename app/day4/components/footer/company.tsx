import Link from 'next/link'
import React from 'react'

export default function Company() {
    const links = [
        {label: 'about us', href: '#about'},
        {label: 'our offerings', href: '#offerings'},
        {label: 'newsroom', href: '#news'},
        {label: 'investors', href: '#investors'},
        {label: 'blog', href: '#blog'},
        {label: 'carees', href: '#careers'},
        {label: 'AI', href: '#ai'},
        {label: 'Gift cards', href: '#cards'},
    ]
  return (
    <div className="space-y-3">
        <h3 className="text-xl">company</h3>
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
