export default function WhyESG() {
  return (
    <div className="page-content fade-in">
      <div className="module-header">
        <span className="eyebrow">Module 01</span>
        <h2>Why ESG Matters for Business Development</h2>
        <p>Understanding the strategic imperative behind every ESG claim you make in a proposal — and how to translate frameworks into client value.</p>
      </div>

      {/* Two-column intro */}
      <div className="grid-2" style={{ marginBottom: 32 }}>
        <div className="card card-accent">
          <div className="tag tag-green mb-sm">The BD Team's Job</div>
          <h3 style={{ marginBottom: 10 }}>Translate Frameworks Into Client Value</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--t2)', marginBottom: 14 }}>Your role is not just to list ESG standards — it is to show how they protect the client's interests.</p>
          <ul style={{ paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {['ESG content must appear in ≥ 3 proposal sections', 'Every claim needs proof (case study, metric, cert)', 'Lead with benefit to client, not just capability', 'Validate commitments with HSE / Operations before submission'].map(t => (
              <li key={t} style={{ fontSize: '0.86rem', color: 'var(--t2)' }}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="card" style={{ background: 'var(--surface-2)' }}>
          <div className="tag tag-sky mb-sm">The Client's Perspective</div>
          <h3 style={{ marginBottom: 10 }}>Evaluators Are Managing Their Own ESG Risk</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--t2)', marginBottom: 14 }}>Clients assess your ESG positioning to understand what risk you represent — or mitigate — for them.</p>
          <ul style={{ paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {['Regulatory compliance exposure', 'Supply chain transparency mandates', 'ESG investor & board obligations', 'Reputational protection on high-profile projects', 'Scoring criteria in formal bid evaluations'].map(t => (
              <li key={t} style={{ fontSize: '0.86rem', color: 'var(--t2)' }}>{t}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 6 pillars */}
      <h3 style={{ marginBottom: 18, color: 'var(--navy)' }}>The Six Pillars of ESG Credibility</h3>
      <div className="grid-3" style={{ marginBottom: 36 }}>
        {[
          { icon: '🏗️', title: 'Credibility', tag: 'tag-green', tagLabel: 'Framework Alignment', body: 'ESG commitments must be sector-appropriate and deliverable. Vague claims hurt credibility more than silence. Use frameworks that match the client\'s own reporting standards.' },
          { icon: '📊', title: 'Measurability', tag: 'tag-sky', tagLabel: 'KPI-Driven', body: '"We will divert 90% of construction waste to [Recycler]" scores higher than "We recycle." Always attach a specific metric and a verifiable method.' },
          { icon: '🤝', title: 'Deliverability', tag: 'tag-amber', tagLabel: 'Internal Alignment', body: 'Only commit to what operations can deliver. Over-promising on ESG creates contractual risk. Validate all measurable commitments with HSE, Engineering, or Sustainability leads.' },
          { icon: '⚖️', title: 'Compliance Signal', tag: 'tag-green', tagLabel: 'Systemic Approach', body: 'Referencing GRI, UNGC, or ISO certifications signals organization-wide management systems — not just project-level intention. It demonstrates systematic, auditable process.' },
          { icon: '💰', title: 'Commercial Leverage', tag: 'tag-sky', tagLabel: 'Value Creation', body: 'Strong ESG positioning enables access to green financing, reduces insurance premiums, attracts ESG-focused investors, and creates premium pricing potential in sustainability-led markets.' },
          { icon: '🛡️', title: 'Risk Mitigation', tag: 'tag-amber', tagLabel: 'Risk Reduction', body: 'ESG frameworks protect against reputational damage from supplier scandals, labour violations, environmental incidents, and governance failures — all of which evaluators screen for.' },
        ].map(c => (
          <div key={c.title} className="card">
            <div style={{ fontSize: '1.5rem', marginBottom: 12 }}>{c.icon}</div>
            <h3 style={{ marginBottom: 8 }}>{c.title}</h3>
            <p style={{ fontSize: '0.86rem', color: 'var(--t2)', marginBottom: 12 }}>{c.body}</p>
            <span className={`tag ${c.tag}`}>{c.tagLabel}</span>
          </div>
        ))}
      </div>

      {/* Formula */}
      <div className="formula-box">
        <div className="formula-label">The BD ESG Win Formula</div>
        <div className="formula-parts">
          {['[Capability]', '[Framework Reference]', '[Client Benefit]', '[Quantified Proof]'].map((p, i) => (
            <>
              <div key={p} className="f-part">{p}</div>
              {i < 3 && <span className="f-op">+</span>}
            </>
          ))}
          <span className="f-op">=</span>
          <div className="f-part f-result">Winning ESG Content</div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <div className="tag tag-green mb-sm">Example</div>
        <p style={{ fontSize: '0.9rem', color: 'var(--t1)', lineHeight: 1.7 }}>
          <em>"As <strong>UNGC signatory</strong> implementing Principles 1–6 (labour rights) with <strong>ISO 45001</strong> safety management, we achieve <strong>LTIFR 0.4</strong> (GRI 403-9) versus the industry average of 8.5 — protecting <strong>[X] workers</strong> and supporting <strong>SDG 3 &amp; 8</strong>, proven on [Project Name]."</em>
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
          <span className="tag tag-navy" style={{ fontSize: '0.7rem' }}>✓ Capability: ISO 45001</span>
          <span className="tag tag-green" style={{ fontSize: '0.7rem' }}>✓ Framework: UNGC P1–6</span>
          <span className="tag tag-sky" style={{ fontSize: '0.7rem' }}>✓ Benefit: Worker protection</span>
          <span className="tag tag-amber" style={{ fontSize: '0.7rem' }}>✓ Proof: LTIFR 0.4 vs 8.5</span>
        </div>
      </div>

      {/* Quick start */}
      <h3 style={{ marginTop: 36, marginBottom: 18, color: 'var(--navy)' }}>Quick Start Guide — When Time Is Limited</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="timing-pair">
        {[
          { time: '5 Minutes', color: 'var(--green)', bg: 'var(--green-lt)', border: 'var(--green-line)', items: ['Add UNGC/WEP status + CoP link to executive summary', 'List ISO certifications with certificate numbers and expiry dates', 'Add 1 strong GRI indicator with actual data vs industry benchmark'] },
          { time: '10 Minutes', color: 'var(--navy)', bg: 'var(--sky)', border: '#B8D0E8', items: ['Create SDG mapping visual (3–5 SDGs, quantified)', 'Add Framework Win Theme to executive summary using the formula', 'Add 1 framework-structured case study with GRI/UNGC/SDG evidence', 'Add ESG governance statement with named accountability role'] },
        ].map(t => (
          <div key={t.time} style={{ background: t.bg, border: `1.5px solid ${t.border}`, borderRadius: 'var(--r)', padding: 22 }}>
            <div className="eyebrow" style={{ color: t.color, marginBottom: 4 }}>⏱ {t.time}</div>
            <ul style={{ paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 7, marginTop: 8 }}>
              {t.items.map(i => <li key={i} style={{ fontSize: '0.86rem', color: 'var(--t2)' }}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
