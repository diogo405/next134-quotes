'use client'

import { Theme } from '../types'

const Topbar: React.FC<{
  theme: Theme
  onThemeChange: (currentTheme: Theme) => void
}> = ({ theme, onThemeChange }) => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px' }}
    >
      <span onClick={() => onThemeChange(theme)} style={{ cursor: 'pointer' }}>
        {theme === 'light' ? '🌘' : '🌞'}
      </span>
    </div>
  )
}

export default Topbar
