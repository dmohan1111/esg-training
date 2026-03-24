import { useState } from 'react'
import { useApp } from '../../context.jsx'
import { streamClaude } from '../../utils/claude.js'
import { MarkdownOutput } from './TenderScanner.jsx'

// ─── SDG MAPPER ───────────────────────────────────────────────────────────────
const SDG_SYSTEM = `You are an ESG SDG mapping specialist for engineering and construction proposals at Alliad. Your job is to recommend the most material and defensible SDG-to-project mappings.

For each recommended SDG:
1. State the SDG number and name
2. Explain the direct link to the project activities (be specific — not generic)
3. Suggest 2-3 quantification metrics to include in the proposal, cross-referenced to GRI indicators where applicable
4. Provide a 1-sentence example narrative to use in the proposal

Then provide:
- A completed SDG Mapping Table ready to copy into a proposal
- Guidance on what SDGs to EXCLUDE and why (demonstrating materiality thinking)

Rules:
- Never recommend more than 7 SDGs
- Always include SDG 13 for any project with significant construction or operational energy use
- Never map safety/health to SDG 13 — that is SDG 3
- Always cross-reference SDG contributions to GRI indicators
- Quantify every SDG contribution with specific metrics`

const KPI_SYSTEM = `You are an ESG KPI advisor for engineering and construction proposals at Alliad. Given a project type and sector, recommend the most credible, measurable, and evaluator-compelling KPIs for inclusion in a bid proposal.

For each recommended KPI category:
1. Name the KPI and its unit of measurement
2. State the GRI indicator it maps to
3. State the UNGC Principle or SDG it supports
4. Provide Alliad's baseline data if mentioned, or provide a typical industry benchmark for context
5. Give a sample proposal sentence using the KPI

Structure your response as:

## PRIORITY KPIs FOR THIS PROJECT (Top 8-10)
## INDUSTRY BENCHMARKS TO REFERENCE
## KPIs TO AVOID (and why — e.g., metrics that can't be verified or aren't material)
## SAMPLE KPI TABLE ready to insert into proposal

Be specific to the sector. A healthcare project has different priority KPIs to a warehouse project.`

export function SDGMapper() {
  const { apiKey } = useApp()
  const [sector, setSector] = useState('Education')
  const [desc, setDesc] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const SECTORS = ['Education', 'Healthcare', 'Warehouse / Logistics', 'Water & Wastewater', 'Energy / Utilities', 'Mixed Use / Other']

  const run = async () => {
    setLoading(true); setOutput(''); setError('')
    try {
      await streamClaude({
        apiKey,
        system: SDG_SYSTEM,
        userMessage: `Sector: ${sector}\nProject description: ${desc || 'No additional details provided'}\n\nRecommend the most material SDGs for this project and generate a ready-to-use SDG Mapping Table.`,
        onChunk: t => setOutput(t),
        onError: e => setError(e),
      })
    } finally { setLoading(false) }
  }

  return (
    <div>
      <div className="card" style={{ marginBottom: 20 }}>
        <div className="tag tag-sky mb-sm">SDG Selection Made Simple</div>
        <p style={{ fontSize: '0.87rem', color: 'var(--t2)', lineHeight: 1.65 }}>
          Selecting the wrong SDGs — or claiming all 17 — is one of the most common evaluation red flags. Enter your project details to get a precise, defensible SDG shortlist with a ready-to-insert mapping table.
        </p>
      </div>

      <div className="grid-2" style={{ marginBottom: 20 }}>
        <div className="form-group" style={{ margin: 0 }}>
          <label className="form-label">Sector</label>
          <select className="form-select" value={sector} onChange={e => setSector(e.target.value)}>
            {SECTORS.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div className="form-group" style={{ margin: 0 }}>
          <label className="form-label">Project Description (optional)</label>
          <input className="form-input" value={desc} onChange={e => setDesc(e.target.value)} placeholder="e.g., Design & build of 2 secondary schools, UAE" />
        </div>
      </div>

      <button className="btn btn-primary btn-lg" onClick={run} disabled={loading || !apiKey}>
        {loading ? <><span className="thinking-dots"><span/><span/><span/></span> Mapping…</> : '🗺️ Generate SDG Mapping Table'}
      </button>

      {!apiKey && <div className="api-required" style={{ marginTop: 16 }}><span>⚙️</span><span><strong>API key required.</strong> Click the settings icon in the header.</span></div>}

      {(output || loading) && (
        <div className="ai-output-wrap">
          <div className="ai-output-head">
            <span><span className={`ai-dot${loading ? ' thinking' : ''}`} />{loading ? 'Mapping SDGs…' : 'SDG Mapping Recommendations'}</span>
            {!loading && output && <button className="btn btn-ghost btn-sm" onClick={() => navigator.clipboard.writeText(output)}>Copy</button>}
          </div>
          <div className="ai-output-body">
            {loading && !output ? <div className="ai-thinking"><span className="thinking-dots"><span/><span/><span/></span>Identifying material SDGs…</div> : <MarkdownOutput text={output} />}
          </div>
        </div>
      )}
      {error && <div className="card" style={{ marginTop:16, background:'var(--coral-lt)', borderColor:'var(--coral)' }}><p style={{ color:'var(--coral)', fontSize:'0.86rem' }}>⚠️ {error}</p></div>}
    </div>
  )
}

// ─── KPI ADVISOR ──────────────────────────────────────────────────────────────
export function KPIAdvisor() {
  const { apiKey } = useApp()
  const [sector, setSector] = useState('Education')
  const [goals, setGoals] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const SECTORS = ['Education', 'Healthcare', 'Warehouse / Logistics', 'Water & Wastewater', 'Energy / Utilities']

  const run = async () => {
    setLoading(true); setOutput(''); setError('')
    try {
      await streamClaude({
        apiKey,
        system: KPI_SYSTEM,
        userMessage: `Sector: ${sector}\nKey client/evaluation priorities: ${goals || 'General best practice'}\n\nRecommend the most credible and evaluator-compelling KPIs for this proposal.`,
        onChunk: t => setOutput(t),
        onError: e => setError(e),
      })
    } finally { setLoading(false) }
  }

  return (
    <div>
      <div className="card" style={{ marginBottom: 20 }}>
        <div className="tag tag-amber mb-sm">Sector-Specific KPI Guidance</div>
        <p style={{ fontSize: '0.87rem', color: 'var(--t2)', lineHeight: 1.65 }}>
          Enter the project sector and any known client priorities to receive a tailored list of the most credible, measurable KPIs — complete with GRI references, industry benchmarks, and ready-to-use sample sentences.
        </p>
      </div>

      <div className="grid-2" style={{ marginBottom: 20 }}>
        <div className="form-group" style={{ margin: 0 }}>
          <label className="form-label">Sector</label>
          <select className="form-select" value={sector} onChange={e => setSector(e.target.value)}>
            {SECTORS.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div className="form-group" style={{ margin: 0 }}>
          <label className="form-label">Client / Evaluation Priorities (optional)</label>
          <input className="form-input" value={goals} onChange={e => setGoals(e.target.value)} placeholder="e.g., carbon reduction, local hiring, ISO certification" />
        </div>
      </div>

      <button className="btn btn-green btn-lg" onClick={run} disabled={loading || !apiKey}>
        {loading ? <><span className="thinking-dots"><span/><span/><span/></span> Advising…</> : '📊 Generate KPI Recommendations'}
      </button>

      {!apiKey && <div className="api-required" style={{ marginTop: 16 }}><span>⚙️</span><span><strong>API key required.</strong> Click the settings icon in the header.</span></div>}

      {(output || loading) && (
        <div className="ai-output-wrap">
          <div className="ai-output-head">
            <span><span className={`ai-dot${loading ? ' thinking' : ''}`} />{loading ? 'Generating KPI recommendations…' : 'KPI Recommendations'}</span>
            {!loading && output && <button className="btn btn-ghost btn-sm" onClick={() => navigator.clipboard.writeText(output)}>Copy</button>}
          </div>
          <div className="ai-output-body">
            {loading && !output ? <div className="ai-thinking"><span className="thinking-dots"><span/><span/><span/></span>Identifying sector KPIs…</div> : <MarkdownOutput text={output} />}
          </div>
        </div>
      )}
      {error && <div className="card" style={{ marginTop:16, background:'var(--coral-lt)', borderColor:'var(--coral)' }}><p style={{ color:'var(--coral)', fontSize:'0.86rem' }}>⚠️ {error}</p></div>}
    </div>
  )
}
