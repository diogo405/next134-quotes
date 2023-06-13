'use client'

import Topbar from './components/Topbar'
import './globals.css'
import { Grand_Hotel } from 'next/font/google'
import { Theme } from './types'
import { useState } from 'react'

const font = Grand_Hotel({ weight: '400', subsets: ['latin-ext'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<Theme>('light')

  const bodyStyle = {
    color: theme === 'light' ? '#000' : '#fff',
    backgroundColor: theme === 'light' ? '#fff' : '#000',
    ...font.style,
  }

  return (
    <html lang="en">
      <body style={bodyStyle}>
        <Topbar
          theme={theme}
          onThemeChange={(currentTheme) =>
            setTheme(currentTheme === 'light' ? 'dark' : 'light')
          }
        />
        {children}
      </body>
    </html>
  )
}
