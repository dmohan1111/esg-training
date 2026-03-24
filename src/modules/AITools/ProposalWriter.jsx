import { useState } from 'react'
import { useApp } from '../../context.jsx'
import { streamClaude } from '../../utils/claude.js'
import { MarkdownOutput } from './TenderScanner.jsx'

const SYSTEM = `You are a senior ESG proposal writer for Alliad — a global integrated services company and UN Global Compact and Women's Empowerment Principles signatory. You write precise, credible, and commercially compelling ESG narrative sections for engineering and construction proposals.

Writing rules you must always follow:
1. NEVER write "GRI-certified," "UNGC-certified," "WEP-certified," or "SASB-certified" — these frameworks do not certify. Use "report against GRI Standards," "UNGC signatory," "WEP signatory," "SASB-aligned" etc.
2. NEVER claim all 17 SDGs — select only the most material ones (3–5 max) and quantify contributions.
3. ALWAYS use hyphens in GRI references: GRI 403-9 not GRI 403.9.
4. ALWAYS follow the formula: [Capability] + [Framework Reference] + [Client Benefit] + [Quantified Proof].
5. Write in professional, confident third-person narrative prose — not bullet points unless specifically asked.
6. Highlight where the user needs to insert actual data using [DATA NEEDED: description] markers.
7. Keep it specific to the sector and project type provided.
8. Cross-reference frameworks naturally — GRI indicators linked to UNGC Principles and SDGs where relevant.`

const SECTION_TYPES = [
  { id: 'exec', label: 'Executive Summary — ESG Leadership Para' },
  { id: 'hs', label: 'Health & Safety Excellence Narrative' },
  { id: 'env', label: 'Environmental Performance Narrative' },
  { id: 'governance', label: 'ESG Governance Statement' },
  { id: 'dei', label: 'Diversity, Equity & Inclusion Narrative' },
  { id: 'community', label: 'Local Employment & Community Impact' },
  { id: 'case', label: 'Framework-Structured Case Study' },
  { id: 'sdg', label: 'SDG Mapping Narrative (with table)' },
]

const SECTORS = ['Education', 'Healthcare', 'Warehouse / Logistics', 'Water & Wastewater', 'Energy / Utilities']

export default function ProposalWriter() {
  const { apiKey } = useApp()
  const [form, setForm] = useState({
    section: 'exec', sector: 'Education', client: '', project: '', kpis: '', signatory: 'signatory'
  })
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const run = async () => {
    const sectionLabel = SECTION_TYPES.find(s => s.id === form.section)?.label || form.section
    const prompt = `Write a "${sectionLabel}" proposal section for the following project:

Sector: ${form.sector}
Client name: ${form.client || '[CLIENT NAME]'}
Project name / description: ${form.project || '[PROJECT DESCRIPTION]'}
UNGC/WEP status: ${form.signatory === 'signatory' ? 'Alliad is a UNGC and WEP signatory' : 'Alliad aligns with UNGC and WEP principles but is not a formal signatory'}
Available KPIs / data points: ${form.kpis || 'None provided — use [DATA NEEDED] markers where real data is required'}

Write the full narrative section now. Use the Alliad company voice: confident, specific, substantive, and commercially intelligent. Do not use filler language.`

    setLoading(true); setOutput(''); setError('')
    try {
      await streamClaude({
        apiKey,
        system: SYSTEM,
        userMessage: prompt,
        onChunk: t => setOutput(t),
        onError: e => setError(e),
      })
    } finally { setLoading(false) }
  }

  return (
    <div>
      <div className="card" style={{ marginBottom: 20 }}>
        <div className="tag tag-green mb-sm">How to Use</div>
        <p style={{ fontSize: '0.87rem', color: 'var(--t2)', lineHeight: 1.65 }}>
          Select the proposal section you need to write, enter key project details, and paste any available KPI data. The writer will produce a compliant, framework-referenced narrative draft — ready to customise and submit.
        </p>
      </div>

      <div className="grid-2" style={{ marginBottom: 20 }}>
        <div className="form-group" style={{ margin: 0 }}>
          <label className="form-label">Proposal Section</label>
          <select className="form-select" value={form.section} onChange={e => set('section', e.target.value)}>
            {SECTION_TYPES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
          </select>
        </div>
        <div className="form-group" style={{ margin: 0 }}>
          <label className="form-label">Sector</label>
          <select className="form-select" value={form.sector} onChange={e => set('sector', e.target.value)}>
            {SECTORS.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className="grid-2" style={{ marginBottom: 20 }}>
        <div className="form-group" style={{ margin: 0 }}>
          <label className="form-label">Client Name (optional)</label>
          <input className="form-input" value={form.client} onChange={e => set('client', e.target.value)} placeholder="e.g., Ministry of Health" />
        </div>
        <div className="form-group" style={{ margin: 0 }}>
          <label className="form-label">Project Name / Brief Description</label>
          <input className="form-input" value={form.project} onChange={e => set('project', e.target.value)} placeholder="e.g., New 300-bed hospital, Abu Dhabi" />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">UNGC / WEP Status</label>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {[['signatory','Alliad is UNGC + WEP Signatory'],['alignment','Use Alignment Language (non-signatory)']].map(([v,l]) => (
            <label key={v} style={{ display:'flex', alignItems:'center', gap:8, cursor:'pointer', fontSize:'0.87rem', color:'var(--t2)' }}>
              <input type="radio" name="signatory" value={v} checked={form.signatory===v} onChange={() => set('signatory',v)} style={{ accentColor:'var(--green)' }} /> {l}
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Available KPIs / Data Points (paste what you have)</label>
        <textarea
          className="form-textarea"
          style={{ minHeight: 100 }}
          value={form.kpis}
          onChange={e => set('kpis', e.target.value)}
          placeholder="e.g., LTIFR: 0.4, Women in workforce: 30%, GRI 405-1, Total training hours: 251,834, 2 LTIs in past year…"
        />
        <p className="form-hint">The more data you provide, the less [DATA NEEDED] markers will appear in the output.</p>
      </div>

      <button className="btn btn-green btn-lg" onClick={run} disabled={loading || !apiKey}>
        {loading ? <><span className="thinking-dots"><span/><span/><span/></span> Writing…</> : '✍️ Generate Proposal Section'}
      </button>

      {!apiKey && (
        <div className="api-required" style={{ marginTop: 16 }}>
          <span>⚙️</span><span><strong>API key required.</strong> Click the settings icon in the header to enter your Anthropic API key.</span>
        </div>
      )}

      {(output || loading) && (
        <div className="ai-output-wrap">
          <div className="ai-output-head">
            <span><span className={`ai-dot${loading ? ' thinking' : ''}`} />{loading ? 'Drafting proposal section…' : 'Generated Proposal Section'}</span>
            {!loading && output && <button className="btn btn-ghost btn-sm" onClick={() => navigator.clipboard.writeText(output)}>Copy</button>}
          </div>
          <div className="ai-output-body">
            {loading && !output
              ? <div className="ai-thinking"><span className="thinking-dots"><span/><span/><span/></span>Writing your ESG narrative…</div>
              : <MarkdownOutput text={output} />
            }
          </div>
        </div>
      )}
      {error && <div className="card" style={{ marginTop:16, background:'var(--coral-lt)', borderColor:'var(--coral)' }}><p style={{ color:'var(--coral)', fontSize:'0.86rem' }}>⚠️ {error}</p></div>}
    </div>
  )
}
