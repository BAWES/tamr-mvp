import type { Metadata } from 'next'
import '../globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { ThemeProvider } from '@/components/theme-provider'
import { notFound } from 'next/navigation'

const locales = ['en', 'ar']

export const metadata: Metadata = {
  title: 'Tamr.me - Real humans to handle your tasks',
  description: 'Tamr.me connects your request to a human account manager who coordinates workers to get it done.',
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale)) {
    notFound()
  }

  const isRTL = locale === 'ar'

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider initialLocale={locale as 'en' | 'ar'}>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  )
}
