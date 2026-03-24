import { useState } from 'react'
import { useApp } from '../context.jsx'

export default function SettingsModal({ onClose }) {
  const { apiKey, saveApiKey } = useApp()
  const [draft, setDraft] = useState(apiKey)
  const [show, setShow] = useState(false)

  const handleSave = () => {
    saveApiKey(draft.trim())
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box fade-in">
        <div className="flex items-center gap-md mb-md">
          <div style={{ width: 36, height: 36, background: 'var(--green-lt)', borderRadius: 'var(--r-sm)', display: 'grid', placeItems: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
          <h2 style={{ margin: 0 }}>AI Tools Configuration</h2>
        </div>

        <p style={{ marginBottom: 24, color: 'var(--t2)', fontSize: '0.88rem', lineHeight: 1.6 }}>
          The AI-powered tools require an Anthropic API key. Your key is stored locally in your browser and never sent anywhere except Anthropic's API. You can get a key at <strong>console.anthropic.com</strong>.
        </p>

        <div className="form-group">
          <label className="form-label">Anthropic API Key</label>
          <div style={{ position: 'relative' }}>
            <input
              type={show ? 'text' : 'password'}
              className="form-input"
              value={draft}
              onChange={e => setDraft(e.target.value)}
              placeholder="sk-ant-api03-..."
              style={{ paddingRight: 44 }}
            />
            <button
              type="button"
              onClick={() => setShow(s => !s)}
              style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--t3)', cursor: 'pointer', padding: 4 }}
            >
              {show ? '🙈' : '👁️'}
            </button>
          </div>
          <p className="form-hint">
            Stored in localStorage · Used only for AI tools in this session
          </p>
        </div>

        <div style={{ background: 'var(--bg)', border: '1px solid var(--border-lt)', borderRadius: 'var(--r-sm)', padding: '12px 14px', fontSize: '0.81rem', color: 'var(--t2)', marginBottom: 8 }}>
          <strong style={{ color: 'var(--navy)' }}>Security note:</strong> For team deployment, set <code style={{ background: 'var(--bg-alt)', padding: '1px 5px', borderRadius: 3 }}>ANTHROPIC_API_KEY</code> as an environment variable on the server and run <code style={{ background: 'var(--bg-alt)', padding: '1px 5px', borderRadius: 3 }}>npm run serve</code>. The API key will not be exposed to browsers.
        </div>

        <div className="modal-actions">
          <button className="btn btn-outline" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSave}>Save Key</button>
        </div>
      </div>
    </div>
  )
}
