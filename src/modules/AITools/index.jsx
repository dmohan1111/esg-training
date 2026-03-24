import { useState } from 'react'
import TenderScanner from './TenderScanner.jsx'
import ProposalWriter from './ProposalWriter.jsx'
import ESGReviewer from './ESGReviewer.jsx'
import { SDGMapper, KPIAdvisor } from './SDGandKPI.jsx'

const TOOLS = [
  {
    id: 'scanner',
    icon: '🔍',
    label: 'Tender Scanner',
    tagline: 'Identify ESG requirements in any RFP or client brief',
    description: 'Paste a tender document to extract explicit and implicit ESG requirements, recommended frameworks, priority GRI indicators, and high-risk gaps.',
    component: TenderScanner,
  },
  {
    id: 'writer',
    icon: '✍️',
    label: 'Proposal Writer',
    tagline: 'Generate compliant ESG narrative sections on demand',
    description: 'Choose a proposal section type, enter project details, and receive a fully drafted, framework-referenced ESG narrative block — ready to customise.',
    component: ProposalWriter,
  },
  {
    id: 'reviewer',
    icon: '🔬',
    label: 'ESG Reviewer',
    tagline: 'Catch errors before they reach the evaluator',
    description: 'Paste your drafted ESG content for a strict compliance review. Flags critical errors, serious issues, and quality improvements — with an overall quality score.',
    component: ESGReviewer,
  },
  {
    id: 'sdg',
    icon: '🗺️',
    label: 'SDG Mapper',
    tagline: 'Build a defensible, quantified SDG mapping table',
    description: 'Generates a project-specific, material SDG shortlist with quantification guidance and a ready-to-insert mapping table — avoiding the common overreach of claiming all 17.',
    component: SDGMapper,
  },
  {
    id: 'kpi',
    icon: '📊',
    label: 'KPI Advisor',
    tagline: 'Find the right metrics for your sector and client',
    description: 'Enter your sector and client priorities to receive sector-specific KPI recommendations with GRI references, industry benchmarks, and ready-to-use sample sentences.',
    component: KPIAdvisor,
  },
]

export default function AITools() {
  const [activeTool, setActiveTool] = useState('scanner')
  const tool = TOOLS.find(t => t.id === activeTool)
  const ToolComponent = tool?.component

  return (
    <div>
      {/* Hero */}
      <div className="ai-hero">
        <div className="ai-hero-inner">
          <div className="ai-hero-label">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="4" fill="var(--green-mid)" opacity="0.5"/>
              <circle cx="5" cy="5" r="2" fill="var(--green-mid)"/>
            </svg>
            AI-Powered Tools
          </div>
          <h1>Intelligent ESG <span>Pipeline</span></h1>
          <p>
            Five purpose-built tools that bring language model intelligence directly into your BD workflow —
            from scanning tender documents to drafting compliant proposal sections and catching errors before submission.
          </p>
          <div className="ai-hero-note">
            <strong>Powered by Claude.</strong>
            &nbsp;Your Anthropic API key is required and stored locally. Configure it via the ⚙ settings icon in the header.
          </div>
        </div>
      </div>

      {/* Tool selector */}
      <div style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border-lt)', padding: '24px 32px', display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        {TOOLS.map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTool(t.id)}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
              gap: 4, padding: '14px 18px', borderRadius: 'var(--r)',
              border: `1.5px solid ${activeTool === t.id ? 'var(--green)' : 'var(--border-lt)'}`,
              background: activeTool === t.id ? 'var(--green-lt)' : 'var(--surface)',
              cursor: 'pointer', minWidth: 160, textAlign: 'left',
              transition: 'all 180ms ease',
              boxShadow: activeTool === t.id ? 'var(--s1)' : 'none',
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>{t.icon}</span>
            <span style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '0.85rem', color: activeTool === t.id ? 'var(--green)' : 'var(--navy)' }}>{t.label}</span>
            <span style={{ fontSize: '0.72rem', color: 'var(--t3)', lineHeight: 1.4 }}>{t.tagline}</span>
          </button>
        ))}
      </div>

      {/* Active tool content */}
      <div className="page-content fade-in" key={activeTool}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <span style={{ fontSize: '1.5rem' }}>{tool?.icon}</span>
            <div>
              <h2 style={{ margin: 0 }}>{tool?.label}</h2>
              <p style={{ margin: 0, color: 'var(--t2)', fontSize: '0.9rem', marginTop: 2 }}>{tool?.description}</p>
            </div>
          </div>
        </div>

        {ToolComponent && <ToolComponent />}
      </div>

      {/* How the AI pipeline works */}
      <div style={{ background: 'var(--surface)', borderTop: '1px solid var(--border-lt)', padding: '32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>The AI-Enhanced BD Workflow</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 0 }}>
            {[
              { step: '01', icon: '📥', label: 'Tender Arrives', action: 'Run Tender Scanner to extract ESG requirements' },
              { step: '02', icon: '🗺️', label: 'Strategy', action: 'Use SDG Mapper + KPI Advisor to plan content' },
              { step: '03', icon: '✍️', label: 'Draft', action: 'Use Proposal Writer for each ESG section' },
              { step: '04', icon: '🔬', label: 'QC Review', action: 'Run ESG Reviewer on all drafted content' },
              { step: '05', icon: '✅', label: 'Submit', action: 'Complete BD Checklist + PM sign-off' },
            ].map((s, i) => (
              <div key={s.step} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 16px', borderLeft: i > 0 ? '1px solid var(--border-lt)' : 'none' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, flexShrink: 0 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 700, color: 'var(--green)', letterSpacing: '0.08em' }}>{s.step}</span>
                  <span style={{ fontSize: '1.2rem' }}>{s.icon}</span>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--navy)', marginBottom: 2 }}>{s.label}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--t3)', lineHeight: 1.5 }}>{s.action}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
