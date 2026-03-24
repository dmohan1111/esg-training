import { redFlags } from '../data/index.js'

export default function RedFlags() {
  const byLevel = level => redFlags.filter(f => f.severity === level)

  return (
    <div className="page-content fade-in">
      <div className="module-header">
        <span className="eyebrow">Module 06</span>
        <h2>Red Flags to Avoid</h2>
        <p>These errors damage proposal credibility, can disqualify bids, or constitute greenwashing. Review before every submission.</p>
      </div>

      {[
        { key: 'critical', label: '🔴 Critical — Disqualifying' },
        { key: 'serious',  label: '🟡 Serious — Credibility Damage' },
        { key: 'moderate', label: '🟢 Moderate — Quality Issues' },
      ].map(({ key, label }) => (
        <div key={key}>
          <div className="severity-header">
            <span className={`severity-badge severity-${key}`}>{label}</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--t3)' }}>{byLevel(key).length} issues</span>
          </div>
          {byLevel(key).map(flag => (
            <div key={flag.title} className={`flag-card ${key}`}>
              <div className="flag-wrong">
                <span style={{ fontSize: '1.1rem' }}>✗</span>
                <div>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--t1)', display: 'block', marginBottom: 4 }}>{flag.title}</strong>
                  <p>{flag.wrong}</p>
                </div>
              </div>
              <div className="flag-fix">
                <span>✓</span>
                <p><strong>Fix:</strong> {flag.fix}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
