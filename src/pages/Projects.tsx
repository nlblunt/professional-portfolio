import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </section>
  )
}
