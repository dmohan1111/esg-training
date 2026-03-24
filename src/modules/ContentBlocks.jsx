import { useState } from 'react'

const BLOCKS = [
  {
    title: '📄 Executive Summary — ESG Leadership (Signatory)',
    context: 'Placement: First paragraph of ESG/Sustainability section in Executive Summary',
    template: `As a [UN Global Compact signatory since YEAR] and [Women's Empowerment Principles signatory since YEAR], [COMPANY NAME] demonstrates commitment to internationally recognized ESG standards. Our implementation of the UNGC's 10 Principles and WEP's 7 Principles is evidenced through [NUMBER] projects delivering measurable outcomes, including [METRIC 1: e.g., LTIFR 0.4 vs. industry average 8.5 (GRI 403-9)] and [METRIC 2: e.g., 30% women in workforce (GRI 405-1)]. For [PROJECT NAME], this translates to [specific benefit to client], ensuring [CLIENT NAME] receives technical excellence and sustainable, responsible delivery aligned with global best practices.\n\nOur annual Communication on Progress is available at: [CoP URL]`,
  },
  {
    title: '📄 Executive Summary — ESG Alignment (Non-Signatory)',
    context: '"Alignment" is acceptable language for non-signatories — shows commitment without false claims.',
    template: `[COMPANY NAME]'s ESG approach aligns with the UN Global Compact's 10 Principles across human rights, labour, environment, and anti-corruption. Our systematic implementation is evidenced through [ISO 14001:2015 Environmental Management (Certificate No., valid until Date)], [ISO 45001:2018 Occupational Health & Safety (Certificate No., valid until Date)], and [optional: ISO 37001:2016 Anti-Bribery Management] certifications. Proven outcomes include [METRIC 1] and [METRIC 2] across [NUMBER] projects. For [PROJECT NAME], this ensures [CLIENT NAME] benefits from [describe value], delivered through internationally recognized management systems.`,
  },
  {
    title: '🦺 Health & Safety Excellence Narrative',
    context: 'Placement: Technical Approach section / HSE subsection',
    template: `Our Health and Safety performance is demonstrated through UN Global Compact Principle 1 and GRI 403 Occupational Health and Safety Indicators. Through our ISO 45001:2018 certified Occupational Health and Safety Management System, we achieved a Lost Time Injury Frequency Rate (LTIFR) of [VALUE] across [NUMBER] projects, protecting over [WORKER COUNT] workers — [X]% better than the [SECTOR] industry average of [INDUSTRY AVERAGE]. This performance reflects strong leadership commitment and consistent implementation of safe work practices across diverse, high-risk project environments, including [REFERENCE PROJECT], which is aligned with the scale and risk profile of this project. For [PROJECT NAME], this proven record lowers [CLIENT NAME]'s operational exposure and supports predictable, incident-free delivery.`,
  },
  {
    title: '🌿 Environmental Performance Narrative',
    context: 'Placement: Technical Approach or Sustainability section',
    template: `Our environmental performance is measured through Global Reporting Initiative (GRI) Standards. Under GRI 305 Emissions, we achieved a project-wide reduction of [X]% compared to the [SECTOR] sector average, performing [Y]% better than industry. This resulted in a total avoided emission volume of [Z tonnes CO₂e] across [NUMBER] projects, including [REFERENCE PROJECT], which reflects similar environmental conditions to this project. For [PROJECT NAME], this demonstrated performance lowers [CLIENT NAME]'s environmental impact, strengthens regulatory alignment, and reduces exposure to environmental and reputational risk.`,
  },
  {
    title: '🏛️ ESG Governance Statement',
    context: 'Placement: Project Management or Governance section',
    template: `ESG governance for [PROJECT NAME] ensures UNGC 10 Principles and WEP 7 Principles implementation through: [ROLE/TITLE] accountable for ESG performance (GRI 2-12); monthly GRI indicator reporting (GRI 403-9, 401-1, 405-1, 305); quarterly stakeholder engagement per AA1000AP Principle of Inclusivity (GRI 2-29); and independent ESG audits [FREQUENCY: e.g., semi-annually] verifying compliance. This governance structure ensures [CLIENT NAME] receives transparent, accountable, and continuously improving ESG performance throughout project delivery.`,
  },
]

function BlockCard({ block }) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(block.template).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const highlighted = block.template.replace(/\[([^\]]+)\]/g, '<mark style="background:#D6E8E0;color:var(--navy);padding:1px 5px;border-radius:3px;font-style:normal;font-weight:600;font-size:0.82rem">[$1]</mark>')

  return (
    <div className="content-block-card">
      <div className="content-block-head">
        <h3>{block.title}</h3>
        <span className="content-block-ctx">{block.context}</span>
      </div>
      <div className="content-block-body">
        <div className="template-text" dangerouslySetInnerHTML={{ __html: highlighted }} />
        <button
          className="btn btn-sm btn-outline"
          onClick={copy}
          style={copied ? { background: 'var(--green)', color: 'white', borderColor: 'var(--green)' } : {}}
        >
          {copied ? '✓ Copied' : '📋 Copy block'}
        </button>
      </div>
    </div>
  )
}

export default function ContentBlocks() {
  return (
    <div className="page-content fade-in">
      <div className="module-header">
        <span className="eyebrow">Module 04</span>
        <h2>Content Block Library</h2>
        <p>
          Ready-to-use, customizable content blocks for client-facing proposals. Replace all{' '}
          <mark style={{ background: '#D6E8E0', padding: '1px 6px', borderRadius: 3, fontWeight: 700 }}>[PLACEHOLDER]</mark>{' '}
          fields with project-specific data before use.
        </p>
      </div>

      {BLOCKS.map(b => <BlockCard key={b.title} block={b} />)}

      <div className="content-block-card">
        <div className="content-block-head">
          <h3>📊 SDG Mapping Visual Template</h3>
          <span className="content-block-ctx">Placement: Sustainability section — adapt to 3–5 material SDGs per project</span>
        </div>
        <div className="content-block-body">
          <p style={{ fontSize: '0.85rem', color: 'var(--t2)', marginBottom: 14 }}>
            Select 3–5 material SDGs and quantify each contribution. Customise to the project's specific activities and scope.
          </p>
          <table className="data-table">
            <thead>
              <tr><th>SDG</th><th>Project Contribution</th><th>Quantification + GRI Reference</th></tr>
            </thead>
            <tbody>
              {[
                ['SDG 5: Gender Equality', 'Women employment programme', '25% women in workforce (GRI 405-1)'],
                ['SDG 8: Decent Work', 'Local employment & training', '[X] jobs created, [X] training hours (GRI 401-1, 404-1)'],
                ['SDG 9: Infrastructure', 'Resilient, sustainable facility', '[X] sqm built to green standards'],
                ['SDG 13: Climate Action', 'Emissions reduction design', '[X] tCO₂e avoided vs. baseline (GRI 305-5)'],
                ['SDG 11: Sustainable Cities', 'Community-integrated development', '[X] local suppliers, [X] community members engaged'],
              ].map(([sdg, contrib, quant]) => (
                <tr key={sdg}>
                  <td><strong style={{ fontFamily: 'var(--font-head)', fontSize: '0.83rem' }}>{sdg}</strong></td>
                  <td>{contrib}</td>
                  <td style={{ fontStyle: 'italic', color: 'var(--green)' }}>{quant}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
