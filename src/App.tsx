import React from 'react'
import Projects from './pages/Projects'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <p className="mt-2 text-gray-600">Personal portfolio to showcase projects and skills.</p>
      </header>
      <main className="max-w-4xl mx-auto px-4">
        <Projects />
      </main>
    </div>
  )
}
