import React from 'react'
import Card from './card'
import { projects } from '../projects'

export default function Projects() {

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
