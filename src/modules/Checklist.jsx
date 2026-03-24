import { useState } from 'react'
import { checklistSections } from '../data/index.js'

export default function Checklist() {
  const allIds = checklistSections.flatMap(s => s.items.map(i => i.id))
  const [checked, setChecked] = useState({})
  const toggle = id => setChecked(c => ({ ...c, [id]: !c[id] }))
  const doneCount = Object.values(checked).filter(Boolean).length
  const pct = Math.round((doneCount / allIds.length) * 100)

  return (
    <div className="page-content fade-in">
      <div className="module-header">
        <span className="eyebrow">Module 07</span>
        <h2>BD ESG Bid Checklist</h2>
        <p>Work through every section before submitting. All 30 items must be confirmed before Proposal Manager sign-off.</p>
      </div>

      <div className="card" style={{ marginBottom: 24, padding: '18px 22px' }}>
        <div className="flex items-center justify-between mb-sm">
          <span style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--navy)' }}>Overall Progress</span>
          <span style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1rem', color: pct === 100 ? 'var(--green)' : 'var(--navy)' }}>
            {doneCount}/{allIds.length} — {pct}%
          </span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
        {pct === 100 && (
          <p style={{ fontSize: '0.84rem', color: 'var(--green)', marginTop: 8, fontWeight: 600 }}>
            ✓ All items complete. Ready for Proposal Manager sign-off.
          </p>
        )}
      </div>

      {checklistSections.map(section => {
        const sectionDone = section.items.filter(i => checked[i.id]).length
        return (
          <div key={section.id} className="check-section">
            <div className="check-section-head">
              <h3>
                {section.title}{' '}
                <span className={`check-count${sectionDone === section.items.length ? ' complete' : ''}`}>
                  {sectionDone}/{section.items.length}
                </span>
              </h3>
            </div>
            {section.items.map(item => (
              <div key={item.id} className="check-item">
                <input type="checkbox" id={item.id} checked={!!checked[item.id]} onChange={() => toggle(item.id)} />
                <label htmlFor={item.id} className={checked[item.id] ? 'done' : ''}>{item.text}</label>
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}
