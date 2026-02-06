import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SherrodBots | Custom AI Agents for Your Business',
  description: 'Stop hiring. Start deploying. Custom AI agents that answer calls, draft emails, manage tasks, and scale your business—built in days, not months.',
  keywords: 'AI agent consultant, custom AI solutions, AI voice assistant, business automation, AI receptionist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
