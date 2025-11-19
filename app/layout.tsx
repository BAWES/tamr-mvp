import type { Metadata } from 'next'
import './globals.css'
import { HtmlAttributesSetter } from '@/components/html-attributes-setter'

export const metadata: Metadata = {
  title: 'Tamr.me - Real humans to handle your tasks',
  description: 'Tamr.me connects your request to a human account manager who coordinates workers to get it done.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <HtmlAttributesSetter />
        {children}
      </body>
    </html>
  )
}
