import { useState } from 'react'
import { useApp } from '../../context.jsx'
import { streamClaude } from '../../utils/claude.js'
import { MarkdownOutput } from './TenderScanner.jsx'

const SYSTEM = `You are a strict ESG compliance reviewer for Alliad, specialising in bid proposals for engineering and construction projects. Your role is to review ESG content in proposals and flag errors, risks, and improvement opportunities with surgical precision.

Review framework — check for ALL of the following:

**CRITICAL ERRORS (flag with 🔴):**
- Any use of "certified" with non-certifying frameworks: GRI, UNGC, SDGs, WEP, SASB, TCFD
- Expired or vague certifications (ISO without cert number, body, or expiry)
- Unverifiable claims ("third-party verified" without naming the verifier)
- Data inconsistencies (same metric cited differently in different places)

**SERIOUS ERRORS (flag with 🟡):**
- Claiming UNGC signatory but not addressing all 10 Principles
- Claiming WEP signatory without GRI 405-1 AND GRI 405-2 data
- Generic SDG mapping — claiming all 17 SDGs, or SDG 3 mapped to climate (correct is SDG 13)
- GRI cherry-picking — only reporting strong indicators and omitting material ones
- Missing UNGC CoP link when signatory status is claimed

**QUALITY ISSUES (flag with 🟢):**
- Wrong GRI formatting (period instead of hyphen: 305.1 vs 305-1)
- "ISO 14000" instead of "ISO 14001"
- "UNGC P11" or "WEP P8" (out of range references)
- Boilerplate/generic language not adapted to the project/client
- Framework overload without evidence
- Missing client-facing value articulation (compliance language without commercial benefit)

**STRENGTHS (flag with ✅):**
- Well-evidenced claims with data
- Correct framework language
- Strong value proposition formula
- Good SDG quantification

After flagging issues, provide:
## PRIORITY FIXES (ordered by impact)
## OVERALL ESG SCORE: X/10 with brief rationale

Be direct and specific. Quote the exact problematic text when flagging.`

export default function ESGReviewer() {
  const { apiKey } = useApp()
  const [text, setText] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const run = async () => {
    if (!text.trim()) return
    setLoading(true); setOutput(''); setError('')
    try {
      await streamClaude({
        apiKey,
        system: SYSTEM,
        userMessage: `Review the following ESG proposal content for errors, risks, and improvement opportunities:\n\n${text}`,
        onChunk: t => setOutput(t),
        onError: e => setError(e),
      })
    } finally { setLoading(false) }
  }

  return (
    <div>
      <div className="card" style={{ marginBottom: 20 }}>
        <div className="tag tag-coral mb-sm" style={{ background:'var(--coral-lt)', color:'var(--coral)', border:'1px solid #E8B8B2' }}>Quality Control</div>
        <p style={{ fontSize: '0.87rem', color: 'var(--t2)', lineHeight: 1.65 }}>
          Paste your drafted ESG content here before submission. The reviewer checks against all critical framework rules, flags errors by severity, and gives an overall ESG quality score. Use this as your final QC gate.
        </p>
      </div>

      <div className="form-group">
        <label className="form-label">ESG Proposal Content to Review</label>
        <textarea
          className="form-textarea"
          style={{ minHeight: 240 }}
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Paste your ESG proposal section(s) here — executive summary, technical approach, governance statement, case studies…"
        />
      </div>

      <button className="btn btn-lg" onClick={run} disabled={loading || !apiKey || !text.trim()}
        style={{ background:'var(--coral)', color:'white', border:'none', borderRadius:'var(--r-sm)', padding:'14px 28px', fontWeight:600, cursor: loading || !apiKey || !text.trim() ? 'not-allowed' : 'pointer', opacity: loading || !apiKey || !text.trim() ? 0.6 : 1 }}>
        {loading ? <><span className="thinking-dots"><span/><span/><span/></span> Reviewing…</> : '🔬 Review for Framework Errors'}
      </button>

      {!apiKey && (
        <div className="api-required" style={{ marginTop: 16 }}>
          <span>⚙️</span><span><strong>API key required.</strong> Click the settings icon in the header to configure your key.</span>
        </div>
      )}

      {(output || loading) && (
        <div className="ai-output-wrap">
          <div className="ai-output-head">
            <span><span className={`ai-dot${loading ? ' thinking' : ''}`} style={loading ? {} : { background:'var(--coral)' }} />{loading ? 'Reviewing ESG content…' : 'Framework Compliance Review'}</span>
            {!loading && output && <button className="btn btn-ghost btn-sm" onClick={() => navigator.clipboard.writeText(output)}>Copy</button>}
          </div>
          <div className="ai-output-body">
            {loading && !output
              ? <div className="ai-thinking"><span className="thinking-dots"><span/><span/><span/></span>Checking against framework rules…</div>
              : <MarkdownOutput text={output} />
            }
          </div>
        </div>
      )}
      {error && <div className="card" style={{ marginTop:16, background:'var(--coral-lt)', borderColor:'var(--coral)' }}><p style={{ color:'var(--coral)', fontSize:'0.86rem' }}>⚠️ {error}</p></div>}
    </div>
  )
}
