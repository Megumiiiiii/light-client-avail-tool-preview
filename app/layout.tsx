import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PHProvider, PostHogPageview, Providers } from './providers'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Avail Light Client',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Suspense>
        <PostHogPageview />
      </Suspense>
      <PHProvider>
        <body className={inter.className}>
        <Providers>{children}</Providers>
        </body>
      </PHProvider>
    </html>
  )
}
