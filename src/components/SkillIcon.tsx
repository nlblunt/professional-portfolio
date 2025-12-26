import React from 'react'

type Props = {
  name: string
  className?: string
}

export default function SkillIcon({ name, className = '' }: Props) {
  const size = 40

  switch (name) {
    case 'TypeScript':
      return (
        <div className={`flex items-center justify-center rounded-md ${className}`} style={{ width: size, height: size, background: '#3178C6' }}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="white" aria-hidden>
            <text x="50%" y="55%" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="sans-serif">TS</text>
          </svg>
        </div>
      )

    case 'JavaScript':
      return (
        <div className={`flex items-center justify-center rounded-md ${className}`} style={{ width: size, height: size, background: '#F7DF1E' }}>
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
            <text x="50%" y="55%" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="sans-serif" fill="#000">JS</text>
          </svg>
        </div>
      )

    case 'Ruby':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M12 2l6 6-6 12-6-12 6-6z" fill="#CC342D" />
        </svg>
      )

    case 'PHP':
      return (
        <div className={`flex items-center justify-center rounded-md ${className}`} style={{ width: size, height: size, background: '#8892BF' }}>
          <svg viewBox="0 0 24 24" width="22" height="12" aria-hidden>
            <text x="50%" y="55%" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="sans-serif" fill="white">PHP</text>
          </svg>
        </div>
      )

    case 'C++':
      return (
        <div className={`flex items-center justify-center rounded-md ${className}`} style={{ width: size, height: size, background: '#00599C' }}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="white" aria-hidden>
            <text x="50%" y="55%" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="sans-serif">C++</text>
          </svg>
        </div>
      )

    case 'C#':
      return (
        <div className={`flex items-center justify-center rounded-md ${className}`} style={{ width: size, height: size, background: '#239120' }}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="white" aria-hidden>
            <text x="50%" y="55%" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="sans-serif">C#</text>
          </svg>
        </div>
      )

    case 'React':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse cx="12" cy="12" rx="6" ry="2.5" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="12" rx="6" ry="2.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="6" ry="2.5" transform="rotate(120 12 12)" />
          </g>
        </svg>
      )

    case 'Ruby on Rails':
      return (
        <div className={`flex items-center justify-center rounded-md ${className}`} style={{ width: size, height: size, background: '#CC0000' }}>
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
            <text x="50%" y="55%" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="sans-serif" fill="white">R</text>
          </svg>
        </div>
      )

    case 'Unity':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M4 7l8-5 8 5-8 5-8-5z" fill="#000" opacity="0.9" />
        </svg>
      )

    case 'Tailwind CSS':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M3 12c6 0 6-6 12-6 4 0 4 3 6 3-6 6-6 6-12 6-4 0-4-3-6-3z" fill="#06B6D4" />
        </svg>
      )

    case 'Bootstrap':
      return (
        <div className={`flex items-center justify-center rounded-md ${className}`} style={{ width: size, height: size, background: '#7952B3' }}>
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
            <text x="50%" y="55%" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="sans-serif" fill="white">B</text>
          </svg>
        </div>
      )

    case 'Git':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M12 2l7 7-7 7-7-7 7-7z" fill="#F34F29" />
        </svg>
      )

    case 'GitHub':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
          <circle cx="12" cy="12" r="10" fill="#000" />
          <path d="M8 17c1-1 2-1 4-1s3 0 4 1c0-2-1-3-4-3s-4 1-4 3z" fill="#fff" />
        </svg>
      )

    case 'Bitbucket':
      return (
        <div className={`flex items-center justify-center rounded-md ${className}`} style={{ width: size, height: size, background: '#0052CC' }}>
          <svg viewBox="0 0 24 24" width="20" height="14" aria-hidden>
            <text x="50%" y="60%" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="sans-serif" fill="white">BB</text>
          </svg>
        </div>
      )

    case 'Ubuntu':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
          <circle cx="12" cy="12" r="10" fill="#E95420" />
          <circle cx="12" cy="6.5" r="1.2" fill="#fff" />
          <circle cx="17" cy="12" r="1.2" fill="#fff" />
          <circle cx="7" cy="12" r="1.2" fill="#fff" />
        </svg>
      )

    case 'WSL (Windows Subsystem for Linux)':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" fill="#2B2B2B" />
          <path d="M7 9h10M7 12h10M7 15h6" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      )

    case 'Heroku':
      return (
        <div className={`flex items-center justify-center rounded-md ${className}`} style={{ width: size, height: size, background: '#430098' }}>
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
            <text x="50%" y="55%" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="sans-serif" fill="white">H</text>
          </svg>
        </div>
      )

    case 'Google Gemini':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
          <circle cx="12" cy="12" r="10" fill="url(#g)" />
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0%" stopColor="#4285F4" />
              <stop offset="50%" stopColor="#DB4437" />
              <stop offset="100%" stopColor="#F4B400" />
            </linearGradient>
          </defs>
        </svg>
      )

    case 'GitHub Copilot':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
          <circle cx="12" cy="12" r="10" fill="#3EBB77" />
          <path d="M7 12c1-3 5-5 10-3" stroke="#fff" strokeWidth="1.2" fill="none" />
        </svg>
      )

    case 'PostgreSQL':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M12 2s6 3 6 8-6 9-6 9-6-4-6-9 6-8 6-8z" fill="#336791" />
        </svg>
      )

    case 'SQLite':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
          <ellipse cx="12" cy="12" rx="9" ry="6" fill="#003B57" />
          <path d="M6 12c3 3 9 3 12 0" stroke="#fff" strokeWidth="1.2" fill="none" />
        </svg>
      )

    default:
      return (
        <div className={`flex items-center justify-center rounded-full bg-blue-50 text-blue-700 font-medium ${className}`} style={{ width: size, height: size }}>
          <span className="text-sm">{name.charAt(0)}</span>
        </div>
      )
  }
}
