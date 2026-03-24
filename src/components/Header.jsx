import { useState } from 'react'
import SettingsModal from './SettingsModal.jsx'
import logo from '../assets/alliad_logo.jpg'

const MODULES = [
  { id: 'why',        label: '01 · Why ESG Matters' },
  { id: 'frameworks', label: '02 · Framework Guide' },
  { id: 'sectors',    label: '03 · Sector Mapping' },
  { id: 'blocks',     label: '04 · Content Blocks' },
  { id: 'matrix',     label: '05 · Commercial Matrix' },
  { id: 'redflags',   label: '06 · Red Flags' },
  { id: 'checklist',  label: '07 · Bid Checklist' },
  { id: 'quiz',       label: '08 · Knowledge Quiz' },
  { id: 'ai',         label: '✦ AI-Powered Tools', isAI: true },
]

export default function Header({ active, onChange }) {
  const [showSettings, setShowSettings] = useState(false)

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <div className="header-logo-mark">
            <img src={logo} alt="Alliad logo" />
          </div>
          <div className="header-logo-text">
            <span className="header-logo-name">Alliad</span>
            <span className="header-logo-sub">ESG BD Toolkit</span>
          </div>
        </div>
        <div className="header-right">
          <span className="header-badge">BD Internal</span>
          <button
            className="header-settings-btn"
            onClick={() => setShowSettings(true)}
            title="Settings — configure AI API key"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </button>
        </div>
      </header>

      <nav className="tab-bar">
        {MODULES.map(m => (
          <button
            key={m.id}
            className={`tab-btn${m.isAI ? ' ai-tab' : ''}${active === m.id ? ' active' : ''}`}
            onClick={() => onChange(m.id)}
          >
            {m.label}
          </button>
        ))}
      </nav>

      {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
    </>
  )
}
