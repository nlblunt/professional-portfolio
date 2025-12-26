import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: '1',
    title: '52 Weeks of Fun',
    description: 'A community-driven platform designed to inspire active lifestyles through weekly curated activity guides.',
    role: 'Lead Developer (Manual Foundation + AI Evolution)',
    foundation: 'Originally built as a robust Ruby on Rails application, I transitioned this project into a scalable cloud-hosted environment:\n\nCloud Ecosystem: Orchestrated deployment using Amazon AWS services, utilizing EC2 for reliable application hosting and S3 for high-availability media storage.\n\nGeospatial Integration: Integrated Google Maps Platform to provide interactive, location-based activity discovery.\n\nData & Insights: Engineered an internal analytics engine to track user engagement and content performance directly within the PostgreSQL database.',
    apiExpansion: 'I evolved the platform from a standalone website into a centralized backend for a multi-platform experience.\n\nCustom API Development: Developed and exposed a secure RESTful API to serve as the data backbone for the native Android and iOS applications.\n\nOmnichannel Delivery: Ensured seamless data synchronization across web and mobile, maintaining a single source of truth for all community content.',
    keyImprovements: [
      'Full-Stack Authority: Demonstrated capability with AWS EC2/S3 for infrastructure and DevOps.',
      'Mobile-Ready Skills: Built and exposed a secure API enabling native mobile apps and cross-platform data sync.',
      'Analytical Mindset: Implemented internal analytics to measure engagement and improve content performance.'
    ],
    aiAcceleration: {
      intro: 'I recently transitioned the project into an AI-augmented development cycle. Using GitHub Copilot and Google Gemini, I integrated high-velocity features that would have previously taken weeks of manual coding:',
      points: [
        'AI-Driven Content Generation: Leveraging LLMs to rapidly draft and format activity guides, which I then manually vet for quality.',
        'Accelerated Feature Deployment: Used "vibe coding" workflows to quickly implement complex JavaScript interactions and dynamic search filters.',
        'Intelligent Debugging: Utilized AI to identify and refactor legacy code bottlenecks, significantly improving the application\'s overall "snappiness."'
      ]
    },
    directorWorkflow: 'My deep familiarity with the original codebase allows me to act as the lead architect. While AI suggests the code for new API endpoints or AWS configurations, I provide the technical oversight—ensuring that every automated suggestion adheres to Rails best practices and maintains the site\'s long-term maintainability.',
    tech: [
      'Ruby on Rails',
      'Ruby',
      'Bootstrap',
      'PostgreSQL',
      'SQLite',
      'Git',
      'GitHub',
      'Ubuntu',
      'WSL (Windows Subsystem for Linux)',
      'Google Gemini',
      'GitHub Copilot',
      'JavaScript'
    ],
    // Visual accent for badges (light / dark)
    accent: '#2563EB',
    accentDark: '#1E40AF',
    link: 'https://www.52weeksoffun.net',
    screenshot: '/assets/52-weeksoffun.png'
  },
  {
    id: '2',
    title: 'South Coast Humane Society',
    description: 'A high-impact nonprofit platform designed to bridge the gap between shelter animals and their forever homes.',
    role: 'Sole Developer (React + 3rd Party API Orchestration)',
    architecture: 'I engineered a seamless data pipeline by integrating specialized third-party services, transforming the site into a live, interactive ecosystem.\n\nShelter Manager API Integration: Developed a robust integration with Animal Shelter Manager (ASM) to pull real-time data for adoptable pets. I utilized the HTTP API to automate the display of animal photos, bios, and health status directly from the shelter\'s internal database.\n\nSecure Donation Processing: Integrated the PayPal Donate SDK to handle high-security financial transactions. This allowed the organization to accept one-time and recurring donations safely while minimizing the PCI-compliance burden on the local server.',
    aiWorkflow: 'Component Prototyping: Used Google Gemini to rapidly draft modular React components for the adoption gallery, allowing me to focus on the complex logic of asynchronous API data fetching.',
    oversight: 'While AI assisted with UI structures, I manually directed the error handling and state management. This was critical for ensuring the ASM API gracefully handled "no data" states and that PayPal redirects were secure and verified.',
    tech: [
      'React',
      'Bootstrap',
      'Shelter Manager API',
      'PayPal API',
      'Git',
      'GitHub',
      'Ubuntu',
      'WSL (Windows Subsystem for Linux)',
      'Google Gemini',
      'GitHub Copilot',
      'JavaScript'
    ],
    // Visual accent for badges (light / dark)
    accent: '#7C3AED',
    accentDark: '#5B21B6',
    link: 'https://www.southcoasthumanebrookings.org',
    screenshot: '/assets/southcoast-humane.png' 
  },
  {
    id: '3',
    title: 'Jen\'s Home School',
    description: 'Sole developer responsible for the architecture, component design, and deployment of a responsive educational microsite.',
    role: 'Front-End Developer (React / Bootstrap / Vite)',
    architectureTitle: 'The Educational Service Hub',
    architecture: 'I engineered this microsite to serve as a professional gateway for California families seeking specialized homeschooling. By leveraging React and Vite, I built a high-performance platform that translates complex state educational requirements into a clear, user-friendly experience. The site prioritizes accessibility and trust, ensuring that families can easily connect with a credentialed teacher while navigating their homeschooling options.',
    tech: [
      'React',
      'Bootstrap',
      'JavaScript',
      'HTML',
      'CSS',
      'Vite'
    ],
    // Visual accent for badges (light / dark)
    accent: '#0EA5A4',
    accentDark: '#0D9488',
    link: 'https://jen.52weeksoffun.net',
    screenshot: '/assets/jen-52weeksoffun.png'
  }
]
