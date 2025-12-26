export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  link?: string
  // Optional fields for richer project cards
  role?: string
  screenshot?: string
  // Visual accent colors for UI badges (hex)
  accent?: string
  accentDark?: string
  // Additional details
  workflow?: string
  oversight?: string
  // Architecture and AI-related details
  // Optional custom title for the architecture section (overrides default header)
  architectureTitle?: string
  architecture?: string
  aiWorkflow?: string
  // Foundation and AI-specific details
  foundation?: string
  aiAcceleration?: {
    intro?: string
    points?: string[]
  }
  // Director workflow notes
  directorWorkflow?: string
  // API / mobile and improvements
  apiExpansion?: string
  keyImprovements?: string[]
} 

// Skill-related types
export interface SkillItem {
  name: string
  description?: string
  url?: string
}

export interface SkillCategory {
  category: string
  items: SkillItem[]
}
