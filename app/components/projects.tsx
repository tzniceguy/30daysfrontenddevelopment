import React from 'react'
import Card from './card'

export default function Projects() {
    const projects =[
        {name: 'Registration Page', description: 'A simple Registration Page inspired by a twitter user on his 30daysDesign challenge', href: 'https://30daysfrontenddevelopment.vercel.app/day1', image: '/project-images/1.png'},
        {name: 'Product Launch Page', description: 'A simple Product Launch countdown  inspired by a twitter user on his 30daysDesign challenge', href: 'https://30daysfrontenddevelopment.vercel.app/day2', image: '/project-images/2.png'},
        {name: 'SarufiAI', description: 'Sarufi AI website re-design inspired by a twitter user on his 30daysDesign challenge', href: 'https://30daysfrontenddevelopment.vercel.app/day3', image: '/project-images/3.png'},
        {name: 'Uber Clone', description: 'A uber website clone crafted with NextJS and TailwindCSS', href: 'https://30daysfrontenddevelopment.vercel.app/day4', image: '/project-images/4.png'},
        {name: 'Billing Page', description: 'A billing page inspired from uidesignsdaily website', href: 'https://30daysfrontenddevelopment.vercel.app/day5', image: '/project-images/5.png'},

    ]
  return (
    <div>
        <h4 className="font-bold text-2xl md:text-5xl text-center">Daily Designs</h4>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 flex-grow">
            {projects.map((project) => (
                <Card key={project.name} image={project.image} name={project.name} description={project.description} href={project.href} />
            ))}
        </div>
    </div>
  )
}
