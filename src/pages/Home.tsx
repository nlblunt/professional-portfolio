import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">        <h2 className="text-4xl font-extrabold">Full-Stack Developer | Cloud Infrastructure & AI-Augmented Systems</h2>

        <p className="mt-4 text-gray-800 dark:text-gray-100">I build scalable digital ecosystems by bridging foundational engineering with modern, AI-accelerated workflows. With a background in Ruby on Rails and React, I specialize in moving projects from manual foundations to high-velocity, cloud-hosted environments on Amazon AWS (EC2/S3).</p>

        <p className="mt-2 text-gray-800 dark:text-gray-100">I leverage GitHub Copilot and Google Gemini to accelerate development, while relying on my technical oversight to manage complex RESTful API design, secure PayPal integrations, and internal analytics. I don't just write code; I direct it to ensure every automated suggestion meets the highest standards of security and maintainability.</p>

        <div className="mt-6">
          <Link to="/portfolio" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">View portfolio</Link>
        </div>
      </div>
    </section>
  )
}
