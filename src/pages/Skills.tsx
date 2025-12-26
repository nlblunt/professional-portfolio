import React, { useState } from 'react'
import { skills } from '../data/skills'
import { projects } from '../data/projects'
import SkillIcon from '../components/SkillIcon' 

const headerClasses: Record<string, { bg: string; text: string }> = {
  'Languages': { bg: 'bg-blue-50 border-b border-blue-200', text: 'text-blue-800' },
  'Frameworks & Libraries': { bg: 'bg-green-50 border-b border-green-200', text: 'text-green-800' },
  'Tools & Platforms': { bg: 'bg-purple-50 border-b border-purple-200', text: 'text-purple-800' },
  'Databases': { bg: 'bg-amber-50 border-b border-amber-200', text: 'text-amber-800' },
  'AI & LLM Workflows': { bg: 'bg-indigo-50 border-b border-indigo-200', text: 'text-indigo-800' }
}

export default function Skills() {
  const aggregateSkills = ['Ubuntu', 'Git', 'GitHub', 'WSL (Windows Subsystem for Linux)', 'Google Gemini', 'GitHub Copilot']

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Skills</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((c) => (
          <div key={c.category} className="bg-white dark:bg-gray-800 dark:text-gray-100 rounded-md shadow-sm overflow-hidden border border-transparent dark:border-gray-700">
            <div className={`${headerClasses[c.category]?.bg ?? 'bg-gray-50 border-b'} dark:bg-gray-700 dark:border-b dark:border-gray-700 px-5 py-3`}>
              <h3 className={`text-lg font-semibold m-0 ${headerClasses[c.category]?.text ?? 'text-gray-900'} dark:text-gray-100`}>
                {c.category}
              </h3>
            </div>

            <div className="p-6">
              <ul className="space-y-4">
                {c.items.map((s) => {
                  const usedIn = projects.filter((p) => p.tech?.includes(s.name))

                  return (
                    <li key={s.name} className="flex flex-col items-start gap-3 transition transform hover:-translate-y-1 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md p-3">
                      <div className="flex items-start gap-4 w-full">
                        <div className="flex-shrink-0">
                          <SkillIcon name={s.name} className="rounded-full" />
                        </div>
                        <div>
                          <a
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-900 dark:text-gray-100 font-medium hover:underline"
                          >
                            {s.name}
                          </a>
                          {s.description && (
                            <div className="text-sm text-gray-800 dark:text-gray-100 mt-1 max-w-xl">{s.description}</div>
                          )}
                        </div>
                      </div>

                      {usedIn.length > 0 && (
                        <div className="mt-2 flex items-center gap-2">
                          {aggregateSkills.includes(s.name) ? (
                            <a
                              href="/portfolio"
                              title="All projects"
                              className="inline-flex items-center justify-center px-4 py-1 text-xs font-medium rounded-full text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-sm hover:shadow-md"
                            >
                              All projects
                            </a>
                          ) : (
                            <>
                              {((expanded[s.name]) ? usedIn : usedIn.slice(0, 3)).map((p) => {
                                const short = (p.title.length > 12) ? p.title.slice(0, 12).trim() + '…' : p.title

                                return p.category === 'mobile' ? (
                                  <span
                                    key={p.id}
                                    title={p.title}
                                    aria-label={p.title}
                                    className="inline-block cursor-default"
                                    style={{ ['--badge-bg' as any]: p.accent, ['--badge-bg-dark' as any]: p.accentDark ?? p.accent }}
                                  >
                                    <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full shadow-sm truncate border border-transparent badge-light">
                                      {short}
                                    </span>
                                  </span>
                                ) : (
                                  <a
                                    key={p.id}
                                    href={p.link}
                                    title={p.title}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block hover:scale-105 transition-transform"
                                    aria-label={p.title}
                                    style={{ ['--badge-bg' as any]: p.accent, ['--badge-bg-dark' as any]: p.accentDark ?? p.accent }}
                                  >
                                    <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full shadow-sm hover:shadow-md truncate border border-transparent badge-light">
                                      {short}
                                    </span>
                                  </a>
                                )
                              })}

                              {usedIn.length > 3 && (
                                <button
                                  onClick={() => setExpanded((prev) => ({ ...prev, [s.name]: !prev[s.name] }))}
                                  className="text-sm text-blue-600 hover:underline ml-2"
                                  aria-expanded={!!expanded[s.name]}
                                >
                                  {expanded[s.name] ? 'Show less' : `Show more (${usedIn.length - 3})`}
                                </button>
                              )}
                            </>
                          )}
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
