import { commercialMatrix } from '../data/index.js'

export default function CommercialMatrix() {
  return (
    <div className="page-content fade-in">
      <div className="module-header">
        <span className="eyebrow">Module 05</span>
        <h2>ESG-to-Commercial Outcome Matrix</h2>
        <p>How each ESG lever creates tangible commercial value for clients and competitive advantage for Alliad. Use these arguments to build your value proposition beyond compliance.</p>
      </div>
      <div className="grid-3">
        {commercialMatrix.map(item => (
          <div key={item.title} className="matrix-card">
            <div className="matrix-top">
              <div className="matrix-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <div className="matrix-ref">{item.ref}</div>
            </div>
            <div className="matrix-outcomes">
              <h4>Commercial Outcomes</h4>
              {item.outcomes.map(o => (
                <div key={o} className="outcome-chip">{o}</div>
              ))}
            </div>
            <div className="impact-row">
              <h4>Commercial Impact <span>{item.impact}%</span></h4>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${item.impact}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
