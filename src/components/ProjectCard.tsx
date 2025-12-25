import React from 'react'
import type { Project } from '../types'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border rounded-lg p-4 bg-white shadow-sm">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 text-gray-600">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded-full">{t}</span>
        ))}
      </div>
      {project.link && (
        <div className="mt-3">
          <a href={project.link} className="text-sm text-blue-600 hover:underline">View project</a>
        </div>
      )}
    </article>
  )
}
