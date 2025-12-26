import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const webProjects = projects.filter((p) => p.category === 'web' || !p.category)
  const mobileProjects = projects.filter((p) => p.category === 'mobile')

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-xl font-bold mb-2">Webpages</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Selected websites and web apps I've built or led.</p>
        <div className="grid gap-6 md:grid-cols-2">
          {webProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Mobile Apps <span className="text-sm font-normal text-gray-600 dark:text-gray-300">Android · iOS</span></h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Native and cross-platform mobile projects for Android and iOS.</p>
        {mobileProjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {mobileProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-600 dark:text-gray-300">No mobile apps listed yet.</p>
        )}
      </div>
    </section>
  )
}
