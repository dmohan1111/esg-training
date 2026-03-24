import { useState } from 'react'
import { sectors } from '../data/index.js'

const CAT_STYLE = { ENV: 'tag-sky', SOC: 'tag-amber', GOV: 'tag-green' }

export default function Sectors() {
  const [active, setActive] = useState('education')
  const sector = sectors.find(s => s.id === active)

  return (
    <div className="page-content fade-in">
      <div className="module-header">
        <span className="eyebrow">Module 03</span>
        <h2>Sector ESG Standards Mapping</h2>
        <p>Select your target sector to view the most relevant ESG metrics, KPIs, and framework applicability for your proposal.</p>
      </div>

      <div className="sector-tabs">
        {sectors.map(s => (
          <button key={s.id} className={`sector-tab${active === s.id ? ' active' : ''}`} onClick={() => setActive(s.id)}>
            {s.label}
          </button>
        ))}
      </div>

      {sector && (
        <div className="fade-in">
          <div className="grid-3 mb-lg">
            {[
              { icon: '📌', label: 'Priority Frameworks', val: sector.priorities, tag: 'tag-navy' },
              { icon: '🎯', label: 'Top Bid KPIs', val: sector.topKPIs, tag: 'tag-sky' },
              { icon: '⭐', label: 'Key Differentiators', val: sector.differentiators, tag: 'tag-amber' },
            ].map(c => (
              <div key={c.label} className="card">
                <div style={{ fontSize: '1.3rem', marginBottom: 10 }}>{c.icon}</div>
                <div className={`tag ${c.tag} mb-sm`}>{c.label}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--t2)', lineHeight: 1.6 }}>{c.val}</p>
              </div>
            ))}
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Category</th><th>ESG Focus</th><th>GRI</th><th>SDG</th><th>UNGC</th><th>WEP</th><th>Sample KPIs</th>
                </tr>
              </thead>
              <tbody>
                {sector.rows.map((r, i) => (
                  <tr key={i}>
                    <td><span className={`tag ${CAT_STYLE[r.cat]}`}>{r.cat}</span></td>
                    <td style={{ fontWeight: 500, color: 'var(--t1)' }}>{r.focus}</td>
                    <td style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>{r.gri}</td>
                    <td style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>{r.sdg}</td>
                    <td style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>{r.ungc}</td>
                    <td style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>{r.wep}</td>
                    <td style={{ fontSize: '0.8rem' }}>{r.kpis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
