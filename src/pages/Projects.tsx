import React, { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const [showAllWeb, setShowAllWeb] = useState(false)
  const [showAllMobile, setShowAllMobile] = useState(false)

  const webProjects = projects.filter((p) => p.category === 'web' || !p.category)
  const mobileProjects = projects.filter((p) => p.category === 'mobile')

  const visibleWeb = showAllWeb ? webProjects : webProjects.slice(0, 6)
  const visibleMobile = showAllMobile ? mobileProjects : mobileProjects.slice(0, 3)

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-xl font-bold mb-2">Webpages</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Selected websites and web apps I've built or led.</p>

        <div className="grid gap-6 md:grid-cols-2">
          {visibleWeb.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {webProjects.length > 6 && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setShowAllWeb((s) => !s)}
              className="text-sm text-blue-600 hover:underline"
              aria-expanded={showAllWeb}
            >
              {showAllWeb ? 'Show less' : `Show more (${webProjects.length - 6})`}
            </button>
          </div>
        )}
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Mobile Apps <span className="text-sm font-normal text-gray-600 dark:text-gray-300">Android · iOS</span></h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Native and cross-platform mobile projects for Android and iOS.</p>

        {mobileProjects.length > 0 ? (
          <>
            <div className="grid gap-6 md:grid-cols-2">
              {visibleMobile.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>

            {mobileProjects.length > 3 && (
              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => setShowAllMobile((s) => !s)}
                  className="text-sm text-blue-600 hover:underline"
                  aria-expanded={showAllMobile}
                >
                  {showAllMobile ? 'Show less' : `Show more (${mobileProjects.length - 3})`}
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="text-sm text-gray-600 dark:text-gray-300">No mobile apps listed yet.</p>
        )}
      </div>
    </section>
  )
}
