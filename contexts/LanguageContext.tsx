'use client'

import { createContext, useContext, ReactNode } from 'react'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { Language, translations } from '@/lib/translations'

const locales: Language[] = ['en', 'ar']

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.en
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ 
  children,
  initialLocale 
}: { 
  children: ReactNode
  initialLocale: 'en' | 'ar'
}) {
  const params = useParams()
  const router = useRouter()
  const pathname = usePathname()
  
  const locale = params?.locale as Language | undefined
  const language = locale || initialLocale || 'en'

  const setLanguage = (lang: Language) => {
    // Replace the locale in the current pathname
    const segments = pathname.split('/').filter(Boolean)
    if (segments.length > 0 && locales.includes(segments[0] as Language)) {
      segments[0] = lang
    } else {
      segments.unshift(lang)
    }
    const newPath = '/' + segments.join('/')
    router.push(newPath)
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    isRTL: language === 'ar',
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
