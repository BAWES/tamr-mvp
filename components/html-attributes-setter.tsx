'use client'

import { useEffect } from 'react'
import { useParams } from 'next/navigation'

export function HtmlAttributesSetter() {
  const params = useParams()
  const locale = (params?.locale as string) || 'en'
  const isRTL = locale === 'ar'

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
  }, [locale, isRTL])

  return null
}

