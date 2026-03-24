import { useState } from 'react'
import { frameworks } from '../data/index.js'

function FWItem({ fw }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`fw-item${open ? ' open' : ''}`}>
      <button className="fw-trigger" onClick={() => setOpen(o => !o)}>
        <span className={`fw-badge ${fw.tier}`}>{fw.code}</span>
        <div className="fw-title-block">
          <div className="fw-name">{fw.name}</div>
          <div className="fw-type">{fw.subtitle}</div>
        </div>
        <span className="fw-chevron">▼</span>
      </button>
      {open && (
        <div className="fw-body">
          <p className="fw-body-intro">{fw.intro}</p>
          <div className="fw-col">
            <h4>Key Indicators / Elements</h4>
            <ul>{fw.keyIndicators.map(k => <li key={k}><strong style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>{k.split('—')[0]}</strong>{k.includes('—') ? `— ${k.split('—')[1]}` : ''}</li>)}</ul>
          </div>
          <div className="fw-col">
            <h4>Language in Proposals</h4>
            <ul>
              {fw.doItems.map(d => <li key={d}><span className="do">✓</span> {d}</li>)}
              {fw.dontItems.map(d => <li key={d} style={{ marginTop: 4 }}><span className="dont">✗</span> {d}</li>)}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Frameworks() {
  return (
    <div className="page-content fade-in">
      <div className="module-header">
        <span className="eyebrow">Module 02</span>
        <h2>ESG Framework Reference Guide</h2>
        <p>Click each framework to expand correct usage, key indicators, and language guidance for proposals.</p>
      </div>

      <div className="flex items-center gap-md wrap mb-lg">
        <span className="tag tag-navy">● PRIMARY — Client-Driven</span>
        <span className="tag tag-gray">● SECONDARY — Market Competitiveness</span>
        <span style={{ fontSize: '0.8rem', color: 'var(--t3)' }}>Click any row to expand</span>
      </div>

      <div className="fw-accordion">
        {frameworks.map(fw => <FWItem key={fw.id} fw={fw} />)}
      </div>

      {/* Terminology quick-reference */}
      <h3 style={{ marginTop: 36, marginBottom: 16, color: 'var(--navy)' }}>Terminology Quick-Reference</h3>
      <div style={{ overflowX: 'auto' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Framework</th>
              <th>Correct Status Language</th>
              <th>Never Say</th>
              <th>Evidence Required</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['GRI Standards',    'Reports against / aligned with GRI Standards', '"GRI-certified" / "GRI-compliant"',    'GRI Content Index + data with methodology'],
              ['UNGC',             'Signatory since [YEAR]',                        '"UNGC-certified" / "UNGC-compliant"',  'Annual CoP link; evidence for all 10 principles'],
              ['UN SDGs',          'Contribute to / advance SDG [X]',               '"SDG-compliant" / "SDG-certified"',    'Quantified contributions + GRI cross-reference'],
              ['WEP',              'WEP signatory since [YEAR]',                    '"WEP-certified" / "WEP-compliant"',    'Gender data (GRI 405-1, 405-2); all 7 principles'],
              ['SASB',             'SASB-aligned / references SASB',                '"SASB-certified" / "SASB-compliant"',  'Industry-specific SASB metrics table'],
              ['AA1000AP',         'Aligned with AA1000AP (2018)',                  '"AA1000-certified"',                   'Principles applied: Inclusivity, Materiality, etc.'],
              ['SEDEX / SMETA',    'SMETA 2/4-pillar audit completed',              '"SEDEX-certified" / "SMETA-certified"', 'Audit date + auditor + non-conformances'],
              ['ISO 14001:2015',   'ISO 14001:2015 certified',                      '"ISO 14000" / "ISO-certified" (generic)', 'Cert number + body + expiry date'],
              ['ISO 45001:2018',   'ISO 45001:2018 certified',                      '"OHSAS 18001" (expired 2021)',          'Cert number + body + expiry date'],
              ['ISO 37001:2016',   'ISO 37001:2016 certified',                      '"Anti-bribery certified" (generic)',    'Cert number + body + expiry date'],
              ['TCFD / IFRS S2',   'TCFD-aligned / IFRS S2-aligned',               '"TCFD-certified" / "TCFD-compliant"',  '4-pillar disclosure in sustainability report'],
              ['SBTi',             'SBTi-committed / SBTi-approved',               '"SBTi-certified" / "Net zero certified"', 'Target details + approval date on SBTi database'],
            ].map(([fw, correct, wrong, evidence]) => (
              <tr key={fw}>
                <td><strong style={{ fontFamily: 'var(--font-head)', fontSize: '0.82rem' }}>{fw}</strong></td>
                <td style={{ color: 'var(--green)' }}>{correct}</td>
                <td style={{ color: 'var(--coral)', fontSize: '0.82rem' }}>{wrong}</td>
                <td style={{ fontSize: '0.8rem' }}>{evidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
