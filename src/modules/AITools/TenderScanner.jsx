import { useState } from 'react'
import { useApp } from '../../context.jsx'
import { streamClaude } from '../../utils/claude.js'

const SYSTEM = `You are an expert ESG analyst specialising in engineering and construction bid analysis for Alliad — a global integrated services company that is a UN Global Compact signatory and Women's Empowerment Principles signatory. Your role is to analyse tender documents and extract ESG requirements with precision.

When given tender text, respond with a structured analysis in this exact format:

## EXPLICIT ESG REQUIREMENTS
List direct, stated requirements word-for-word or closely paraphrased. Include the source section if identifiable.

## IMPLICIT ESG REQUIREMENTS
List requirements that are strongly implied even if not stated outright (e.g., "ISO-certified health and safety" implies ISO 45001; a hospital project implies clinical waste management).

## PRIMARY FRAMEWORKS EXPECTED
List the ESG frameworks the client appears to be using or expecting (GRI, UNGC, SDGs, WEP, SASB, ISO standards, etc.). Explain why you infer each one.

## RECOMMENDED GRI INDICATORS (TOP 5)
List the 5 most material GRI indicators for this tender with a brief explanation of why each is relevant.

## RECOMMENDED SDGs (TOP 3-5)
List the most material SDGs with brief quantification guidance for each.

## HIGH-RISK ESG GAPS
Identify any ESG areas that, if poorly addressed, could disqualify the bid or damage scoring.

## QUICK WIN ACTIONS
List 3-5 immediate, high-impact actions the BD team should take to strengthen the ESG component of this proposal.

Be concise, specific, and actionable. Do not use generic ESG language — be sector and project specific.`

export default function TenderScanner() {
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
        userMessage: `Analyse the following tender document for ESG requirements:\n\n${text}`,
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
          Paste the full text of a tender document, RFP, or client brief below. The scanner will identify explicit and implicit ESG requirements, recommend the most relevant frameworks and KPIs, and flag any high-risk gaps before you start writing.
        </p>
      </div>

      <div className="form-group">
        <label className="form-label">Tender / RFP Text</label>
        <textarea
          className="form-textarea"
          style={{ minHeight: 200, fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Paste the tender document text here — scope of work, evaluation criteria, technical requirements, special conditions…"
        />
        <p className="form-hint">The more complete the text, the more precise the analysis. You can include sections from multiple documents.</p>
      </div>

      <button className="btn btn-green btn-lg" onClick={run} disabled={loading || !apiKey || !text.trim()}>
        {loading ? (
          <><span className="thinking-dots"><span/><span/><span/></span> Analysing…</>
        ) : '🔍 Scan for ESG Requirements'}
      </button>

      {!apiKey && (
        <div className="api-required" style={{ marginTop: 16 }}>
          <span>⚙️</span>
          <span><strong>API key required.</strong> Click the settings icon (⚙) in the top-right header to enter your Anthropic API key.</span>
        </div>
      )}

      {(output || loading) && (
        <div className="ai-output-wrap">
          <div className="ai-output-head">
            <span>
              <span className={`ai-dot${loading ? ' thinking' : ''}`} />
              {loading ? 'Analysing tender document…' : 'ESG Requirements Analysis'}
            </span>
            {!loading && output && (
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => navigator.clipboard.writeText(output)}
              >Copy</button>
            )}
          </div>
          <div className="ai-output-body">
            {loading && !output ? (
              <div className="ai-thinking">
                <span className="thinking-dots"><span/><span/><span/></span>
                Scanning document for ESG requirements…
              </div>
            ) : (
              <MarkdownOutput text={output} />
            )}
          </div>
        </div>
      )}

      {error && (
        <div className="card" style={{ marginTop: 16, background: 'var(--coral-lt)', borderColor: 'var(--coral)' }}>
          <p style={{ color: 'var(--coral)', fontSize: '0.86rem' }}>⚠️ {error}</p>
        </div>
      )}
    </div>
  )
}

// Simple markdown renderer
export function MarkdownOutput({ text }) {
  if (!text) return null
  const lines = text.split('\n')
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {lines.map((line, i) => {
        if (line.startsWith('## ')) return <h4 key={i} style={{ fontFamily: 'var(--font-head)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--green)', marginTop: i > 0 ? 16 : 0, marginBottom: 4 }}>{line.slice(3)}</h4>
        if (line.startsWith('### ')) return <h5 key={i} style={{ fontFamily: 'var(--font-head)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', marginTop: 10 }}>{line.slice(4)}</h5>
        if (line.startsWith('- ') || line.startsWith('* ')) return <div key={i} style={{ display: 'flex', gap: 8, paddingLeft: 8 }}><span style={{ color: 'var(--green)', flexShrink: 0, marginTop: 2 }}>›</span><span style={{ fontSize: '0.86rem', color: 'var(--t2)', lineHeight: 1.6 }}>{line.slice(2)}</span></div>
        if (/^\d+\./.test(line)) return <div key={i} style={{ display: 'flex', gap: 8, paddingLeft: 8 }}><span style={{ color: 'var(--green)', flexShrink: 0, fontWeight: 700, fontSize: '0.8rem' }}>{line.match(/^\d+/)[0]}.</span><span style={{ fontSize: '0.86rem', color: 'var(--t2)', lineHeight: 1.6 }}>{line.replace(/^\d+\.\s*/, '')}</span></div>
        if (line.startsWith('**') && line.endsWith('**')) return <strong key={i} style={{ fontSize: '0.87rem', color: 'var(--t1)' }}>{line.slice(2, -2)}</strong>
        if (!line.trim()) return <div key={i} style={{ height: 6 }} />
        return <p key={i} style={{ fontSize: '0.87rem', color: 'var(--t2)', lineHeight: 1.65 }}>{line}</p>
      })}
    </div>
  )
}
