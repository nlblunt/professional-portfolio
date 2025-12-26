import React, { useEffect, useRef, useState } from 'react'
import type { Project } from '../types'

export default function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [showToggle, setShowToggle] = useState(false)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    setShowToggle(el.scrollHeight > 200)
  }, [project])

  return (
    <article className="border rounded-lg p-4 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-sm">
      {project.screenshot && (
        <img src={project.screenshot} alt={`${project.title} screenshot`} className="w-full h-40 object-cover rounded-md mb-3" />
      )}

      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold">{project.title}</h3>
          {project.role && <p className="text-sm text-gray-800 dark:text-gray-100 font-medium mt-1">Role: {project.role}</p>}

          {project.platforms && project.platforms.length > 0 && (
            <div className="mt-2 flex items-center gap-2">
              {project.platforms.map((pf) => (
                <span key={pf} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100">{pf}</span>
              ))}
            </div>
          )}
        </div>

        <div className="ml-4 flex flex-col items-end gap-2">
          {project.store?.android && (
            <a href={project.store.android} className="text-sm inline-flex items-center gap-2 px-2 py-1 bg-green-600 text-white rounded" target="_blank" rel="noopener noreferrer">Google Play</a>
          )}

          {project.store?.ios && (
            <a href={project.store.ios} className="text-sm inline-flex items-center gap-2 px-2 py-1 bg-black text-white rounded" target="_blank" rel="noopener noreferrer">App Store</a>
          )}
        </div>
      </div>

      <div className="relative mt-2">
        <div
          ref={contentRef}
          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${expanded ? 'max-h-[2000px]' : 'max-h-48'}`}
        >
          <p className="text-gray-800 dark:text-gray-100">{project.description}</p>

          {project.foundation && (
            <div className="mt-3">
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">The Foundation & Infrastructure</h4>
              <div className="text-sm text-gray-800 dark:text-gray-100 mt-1 whitespace-pre-line">{project.foundation}</div>
            </div>
          )}

          {project.apiExpansion && (
            <div className="mt-3">
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">API Architecture & Mobile Expansion</h4>
              <div className="text-sm text-gray-800 dark:text-gray-100 mt-1 whitespace-pre-line">{project.apiExpansion}</div>
            </div>
          )} 

          {project.directorWorkflow && (
            <div className="mt-3">
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">The "Director" Workflow</h4>
              <p className="text-sm text-gray-800 dark:text-gray-100 mt-1">{project.directorWorkflow}</p>
            </div>
          )} 

          {project.keyImprovements && (
            <div className="mt-3">
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">Key Improvements</h4>
              <ul className="list-disc ml-5 mt-2 text-sm text-gray-800 dark:text-gray-100 space-y-1">
                {project.keyImprovements.map((k, i) => (
                  <li key={i}>{k}</li>
                ))}
              </ul>
            </div>
          )} 

          {project.architecture && (
            <div className="mt-3">
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">{project.architectureTitle ?? 'The API-First Architecture'}</h4>
              <div className="text-sm text-gray-800 dark:text-gray-100 mt-1 whitespace-pre-line">{project.architecture}</div>
            </div>
          )} 

          {project.aiWorkflow && (
            <div className="mt-3">
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">The AI-Augmented Workflow</h4>
              <p className="text-sm text-gray-800 dark:text-gray-100 mt-1">{project.aiWorkflow}</p>
            </div>
          )} 

          {project.workflow && (
            <div className="mt-3">
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">The Workflow</h4>
              <p className="text-sm text-gray-800 dark:text-gray-100 mt-1">{project.workflow}</p>
            </div>
          )} 

          {project.oversight && (
            <div className="mt-3">
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">The Oversight</h4>
              <p className="text-sm text-gray-800 dark:text-gray-100 mt-1">{project.oversight}</p>
            </div>
          )} 

          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="text-xs px-2 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full">{t}</span>
            ))}
          </div>


        </div>

        {!expanded && showToggle && (
          <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-12 bg-gradient-to-t from-white dark:from-gray-900"></div>
        )}
      </div>

      {showToggle && (
        <div className="mt-3">
          <button
            onClick={() => setExpanded((s) => !s)}
            className="text-sm text-blue-600 hover:underline"
            aria-expanded={expanded}
          >
            {expanded ? 'View less' : 'View more'}
          </button>
        </div>
      )}
    </article>
  )
}
