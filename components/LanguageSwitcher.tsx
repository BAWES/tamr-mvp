'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/button'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  // Show only the opposite language button
  const oppositeLanguage = language === 'en' ? 'ar' : 'en'
  const oppositeLabel = language === 'en' ? 'العربية' : 'EN'

  return (
    <Button
      onClick={() => setLanguage(oppositeLanguage)}
      variant="outline"
      size="sm"
      className="h-9 px-4"
    >
      {oppositeLabel}
    </Button>
  )
}
