// ─── FRAMEWORKS ──────────────────────────────────────────────────────────────
export const frameworks = [
  {
    id: 'gri', code: 'GRI', tier: 'primary',
    name: 'Global Reporting Initiative',
    subtitle: 'PRIMARY · Reporting Standard',
    intro: 'GRI provides globally recognized standards for sustainability reporting. It does NOT certify organizations — it provides indicators to report against. Correct format uses hyphens: GRI 305-1 (not GRI 305.1).',
    keyIndicators: [
      'GRI 403-9 — Lost Time Injury Frequency Rate (LTIFR)',
      'GRI 405-1 — Workforce diversity (% women)',
      'GRI 405-2 — Gender pay equity ratio',
      'GRI 305-5 — Emissions reduction vs. baseline',
      'GRI 306-4 — Waste diversion rate',
      'GRI 401-1 — New hires and turnover',
      'GRI 2-12  — ESG governance accountability',
      'GRI 413   — Local community engagement',
    ],
    doItems: [
      '"Report against GRI Standards"',
      '"GRI-aligned disclosure"',
      'Select 3–5 material indicators with real data',
      'Include GRI codes in case studies',
      'Cross-reference all data for consistency',
    ],
    dontItems: [
      '"GRI-certified" ← GRI doesn\'t certify',
      '"GRI 305.1" ← use hyphen: GRI 305-1',
      'Cherry-picking only strong indicators',
      'Omitting GRI 405-2 if a pay gap exists',
      'Generic indicator data without methodology',
    ],
  },
  {
    id: 'ungc', code: 'UNGC', tier: 'primary',
    name: 'UN Global Compact — 10 Principles',
    subtitle: 'PRIMARY · Signatory Programme',
    intro: 'Alliad is a UNGC signatory. This means we are publicly committed to ALL 10 Principles. An annual Communication on Progress (CoP) is mandatory and publicly verifiable at unglobalcompact.org/participants.',
    keyIndicators: [
      'P1–P2: Human Rights — respect & non-complicity',
      'P3–P4: Labour — freedom of association, no forced labour',
      'P5–P6: Labour — no child labour, non-discrimination',
      'P7–P9: Environment — precaution, responsibility, green tech',
      'P10:   Anti-Corruption — against extortion & bribery',
    ],
    doItems: [
      '"UNGC signatory since [Year]"',
      'Map project activities to specific Principles',
      'Include anti-corruption measures for P10',
      'Provide CoP link in executive summary',
      'Address all 10 Principles, not just strong ones',
    ],
    dontItems: [
      '"UNGC-certified" or "UNGC-compliant"',
      'Only referencing P7–P9 (environment)',
      'Claiming signatory with no implementation evidence',
      'Missing or outdated CoP link',
      '"UNGC P11" — only 10 Principles exist',
    ],
  },
  {
    id: 'sdg', code: 'SDGs', tier: 'primary',
    name: 'UN Sustainable Development Goals',
    subtitle: 'PRIMARY · Alignment Framework — 17 Goals',
    intro: 'Select 3–7 material SDGs per project and quantify contributions. Never claim all 17 — it demonstrates lack of materiality understanding. Common error: mapping SDG 3 to climate (correct is SDG 13).',
    keyIndicators: [
      'SDG 3: Good Health & Well-being (worker safety)',
      'SDG 5: Gender Equality (WEP link, GRI 405)',
      'SDG 8: Decent Work & Economic Growth',
      'SDG 9: Industry, Innovation & Infrastructure',
      'SDG 11: Sustainable Cities & Communities',
      'SDG 13: Climate Action (not SDG 3)',
    ],
    doItems: [
      '"Contribute to / advance SDG [X]"',
      'Quantify: "X jobs created (SDG 8, GRI 401-1)"',
      'Use SDG icons per UN guidelines (allowed for proposals)',
      'Map to GRI indicators for credibility',
      'Explain the specific activity-to-goal linkage',
    ],
    dontItems: [
      '"SDG-compliant" or "SDG-certified"',
      'Claiming all 17 SDGs without rationale',
      'SDG icons with no data or narrative',
      'SDG 3 for climate (→ use SDG 13)',
      '"SDG 8.8" when you mean overall SDG 8',
    ],
  },
  {
    id: 'wep', code: 'WEP', tier: 'primary',
    name: "Women's Empowerment Principles",
    subtitle: 'PRIMARY · Signatory Programme — 7 Principles',
    intro: 'Alliad is a WEP signatory. All 7 Principles must be addressed. Minimum data disclosure: GRI 405-1 (diversity) and GRI 405-2 (pay equity). Total % women alone is considered superficial.',
    keyIndicators: [
      'P1: Leadership for Gender Equality',
      'P2: Equal Opportunity & Non-discrimination',
      'P3: Health, Safety & Freedom from Violence',
      'P4: Education & Training for Women',
      'P5: Enterprise Development & Supply Chain',
      'P6: Community Engagement & Advocacy',
      'P7: Transparency & Reporting',
    ],
    doItems: [
      '"WEP signatory since [Year]"',
      'Provide GRI 405-1 + GRI 405-2 as minimum',
      'Address P5 (supply chain) and P6 (community)',
      'Track women-owned suppliers in supply chain',
      'Report gender data publicly (WEP P7)',
    ],
    dontItems: [
      '"WEP-certified" or "WEP-compliant"',
      'Only reporting total workforce % women',
      'Ignoring P5–P6 (marketplace & community)',
      'No gender pay equity data (GRI 405-2)',
      '"WEP P8" — only 7 Principles exist',
    ],
  },
  {
    id: 'sasb', code: 'SASB', tier: 'secondary',
    name: 'Sustainability Accounting Standards Board',
    subtitle: 'SECONDARY · Industry-Specific Financial Materiality',
    intro: 'SASB provides industry-specific financial materiality metrics. Use for investor-facing or institutionally procured projects to demonstrate market competitiveness and financial ESG disclosure.',
    keyIndicators: [
      'Total Scope 1 GHG emissions (metric tons CO₂e)',
      'Total energy consumed + % renewable',
      'Total water withdrawn + % recycled',
      'Total Recordable Incident Rate (TRIR)',
      '% suppliers assessed for ESG criteria',
      'Confirmed corruption or bribery cases',
    ],
    doItems: [
      '"SASB-aligned" or "references SASB standards"',
      'Include in investor or institutional bid sections',
      'Use industry-specific SASB metrics (not generic)',
      'Show supply chain ESG screening',
    ],
    dontItems: [
      '"SASB-certified" or "SASB-compliant"',
      'Generic metrics unrelated to the project sector',
      'Using SASB without cross-referencing GRI data',
    ],
  },
  {
    id: 'aa1000', code: 'AA1000', tier: 'secondary',
    name: 'AA1000AP (2018) Accountability Principles',
    subtitle: 'SECONDARY · Stakeholder Engagement Framework',
    intro: 'Use AA1000AP to demonstrate accountability and structured stakeholder engagement in governance sections. Based on 4 core principles.',
    keyIndicators: [
      'Inclusivity: Stakeholder participation in decisions',
      'Materiality: Focus on what matters most',
      'Responsiveness: Communicate actions taken',
      'Impact: Measure and report actual effects',
    ],
    doItems: [
      '"Aligned with AA1000AP (2018)"',
      'Show grievance mechanisms and engagement plans',
      'Include in governance & project management sections',
      'Commit to transparent impact reporting',
    ],
    dontItems: [
      '"AA1000-certified"',
      'Using AA1000 language without a stakeholder plan',
      'Claiming materiality without showing how issues were identified',
    ],
  },
  {
    id: 'sedex', code: 'SEDEX', tier: 'secondary',
    name: 'SEDEX 2-Pillar SMETA',
    subtitle: 'SECONDARY · Ethical Trade Audit',
    intro: 'SMETA (Sedex Members Ethical Trade Audit) provides third-party assurance for ethical labour and health & safety. Frequently requested by multinational clients for supply chain assurance.',
    keyIndicators: [
      'Labour Standards: Fair wages, working hours',
      'Health & Safety: Site safety measures',
      'Business Ethics: Anti-bribery, anti-corruption',
      'Environmental Assessment: Compliance & sustainability',
    ],
    doItems: [
      '"SMETA 2-pillar audit completed [date]"',
      'Provide audit date + auditor + non-conformances',
      'Include labour and H&S evidence in technical sections',
    ],
    dontItems: [
      '"SEDEX/SMETA-certified"',
      'Referencing SMETA without providing audit details',
    ],
  },
]

// ─── SECTORS ──────────────────────────────────────────────────────────────────
export const sectors = [
  {
    id: 'education', label: '🎓 Education', icon: '🎓',
    priorities: 'GRI 302, 403, 404, 413 · SDG 4, 5, 8 · UNGC P1–6 · WEP P4',
    topKPIs: 'Energy intensity kWh/sqm · Training hours/employee · Local hiring ratio · % women in workforce · LTIFR · Student/community beneficiaries',
    differentiators: 'LEED or BREEAM certified design · Inclusive learning environments · Skills development & apprenticeship programs · Community engagement plan',
    rows: [
      { cat: 'ENV', focus: 'Energy efficiency of building', gri: '302, 305', sdg: '7, 13', ungc: 'P7–9', wep: '—', kpis: 'Energy intensity (kWh/sqm), Lighting power density' },
      { cat: 'ENV', focus: 'Water management', gri: '303', sdg: '6', ungc: 'P7', wep: '—', kpis: 'Water use per occupant (L/person)' },
      { cat: 'ENV', focus: 'Construction waste', gri: '301, 306', sdg: '12', ungc: 'P8', wep: '—', kpis: 'Waste diversion rate (%), C&D waste (tons)' },
      { cat: 'SOC', focus: 'Worker & student safety', gri: '403', sdg: '3', ungc: 'P1–2', wep: 'P3', kpis: 'LTIFR, Safety training hours/employee' },
      { cat: 'SOC', focus: 'Gender equality in workforce', gri: '405', sdg: '5', ungc: 'P6', wep: 'P1–4', kpis: '% women in workforce & management' },
      { cat: 'SOC', focus: 'Local employment', gri: '202, 413', sdg: '8, 11', ungc: 'P1', wep: 'P6', kpis: 'Local hires / total staff (%)' },
      { cat: 'SOC', focus: 'Skills & training', gri: '404', sdg: '4, 8', ungc: 'P6', wep: 'P4', kpis: 'Training hours/employee, Apprenticeship intake' },
      { cat: 'GOV', focus: 'Anti-corruption', gri: '205', sdg: '16', ungc: 'P10', wep: '—', kpis: 'ABAC training completion, Incidents: 0' },
      { cat: 'GOV', focus: 'Community stakeholder engagement', gri: '413', sdg: '17', ungc: 'P1', wep: 'P6', kpis: 'Engagement sessions/quarter' },
    ],
  },
  {
    id: 'healthcare', label: '🏥 Healthcare', icon: '🏥',
    priorities: 'GRI 403 (critical), 306, 302 · SDG 3, 6 · UNGC P1–6 · SEDEX',
    topKPIs: 'Patient/staff incident rate · Clinical waste treated (kg) · Medication error rate · LTIFR · Emergency response time',
    differentiators: 'ISO 45001 certification · Clinical waste protocols · Infection prevention systems · Backup power capacity',
    rows: [
      { cat: 'ENV', focus: 'Clinical & hazardous waste', gri: '306', sdg: '12', ungc: 'P8', wep: '—', kpis: 'Clinical waste treated (kg), Hazardous waste volume' },
      { cat: 'ENV', focus: 'Water quality & sanitation', gri: '303', sdg: '6', ungc: 'P7', wep: '—', kpis: 'Turbidity level (NTU), Contamination incidents: 0' },
      { cat: 'ENV', focus: 'Energy & backup power', gri: '302', sdg: '7', ungc: 'P7–9', wep: '—', kpis: 'Backup power (kW), Autonomy (hrs)' },
      { cat: 'SOC', focus: 'Patient & staff safety', gri: '403, 410', sdg: '3', ungc: 'P1–2', wep: 'P3', kpis: 'Incident rate (cases/1,000 patients)' },
      { cat: 'SOC', focus: 'Occupational health programs', gri: '403', sdg: '3, 8', ungc: 'P1', wep: 'P3', kpis: 'Health screening coverage/100 employees/year' },
      { cat: 'SOC', focus: 'Worker welfare', gri: '403, 410', sdg: '3, 16', ungc: 'P3–5', wep: 'P3', kpis: 'Welfare facility access, Accommodation standards' },
      { cat: 'GOV', focus: 'Ethical procurement', gri: '308, 414', sdg: '16', ungc: 'P10', wep: 'P5', kpis: 'Supplier ESG assessments completed (%)' },
      { cat: 'GOV', focus: 'Data privacy (patient records)', gri: '418', sdg: '—', ungc: 'P1', wep: '—', kpis: 'Privacy incidents: 0, Cybersecurity breaches: 0' },
    ],
  },
  {
    id: 'warehouse', label: '📦 Warehouse', icon: '📦',
    priorities: 'GRI 302, 305, 403 · SDG 9, 11, 13 · SASB Supply Chain · SEDEX',
    topKPIs: 'Energy intensity kWh/sqm · GHG emissions/m² · Solar capacity kWp · Waste diversion rate · LTIFR · Local supplier spend',
    differentiators: 'LEED/BREEAM certified design · Renewable energy integration · Smart energy monitoring · Circular economy sourcing',
    rows: [
      { cat: 'ENV', focus: 'Energy efficiency & renewables', gri: '302, 305', sdg: '7, 13', ungc: 'P7–9', wep: '—', kpis: 'Energy intensity (kWh/sqm), Renewable share (%)' },
      { cat: 'ENV', focus: 'Carbon footprint', gri: '305', sdg: '13', ungc: 'P8', wep: '—', kpis: 'Total emissions (tCO₂e), Intensity (kgCO₂e/sqm)' },
      { cat: 'ENV', focus: 'Waste & circular economy', gri: '301, 306', sdg: '12', ungc: 'P8', wep: '—', kpis: 'Waste diversion rate (%), Recycled content in materials' },
      { cat: 'ENV', focus: 'Water management', gri: '303', sdg: '6', ungc: 'P7', wep: '—', kpis: 'Water use intensity (L/sqm)' },
      { cat: 'SOC', focus: 'Workforce safety', gri: '403', sdg: '8', ungc: 'P1–2', wep: '—', kpis: 'LTIFR, TRCF, Training hours/employee' },
      { cat: 'SOC', focus: 'Local workforce hiring', gri: '202, 401', sdg: '8, 11', ungc: 'P1', wep: '—', kpis: 'Local hiring ratio (%)' },
      { cat: 'GOV', focus: 'Supply chain ethics', gri: '308, 414', sdg: '12, 16', ungc: 'P10', wep: '—', kpis: '% suppliers with Code of Conduct signed' },
      { cat: 'GOV', focus: 'Anti-corruption', gri: '205', sdg: '16', ungc: 'P10', wep: '—', kpis: 'ABAC incidents: 0, ABAC training completion (%)' },
    ],
  },
  {
    id: 'water', label: '💧 Water & Wastewater', icon: '💧',
    priorities: 'GRI 303, 304, 307 · SDG 6, 14, 15 · UNGC P7–9 · AA1000AP',
    topKPIs: 'Treated effluent m³/day · Effluent pollutant load · Water recycling rate · Stormwater capture · Environmental incidents: 0',
    differentiators: 'ISO 14001 certification · Real-time monitoring & SCADA · Pollution prevention systems · Biodiversity impact assessment',
    rows: [
      { cat: 'ENV', focus: 'Effluent treatment & quality', gri: '303', sdg: '6', ungc: 'P7–8', wep: '—', kpis: 'Treated effluent (m³/day), Pollutant load (mg/L)' },
      { cat: 'ENV', focus: 'Water recycling & reuse', gri: '303', sdg: '6', ungc: 'P8', wep: '—', kpis: 'Recycled water production (m³/day)' },
      { cat: 'ENV', focus: 'Stormwater management', gri: '303', sdg: '6, 11', ungc: 'P7', wep: '—', kpis: 'Stormwater capture (m³/event)' },
      { cat: 'ENV', focus: 'Biodiversity & soil protection', gri: '304, 307', sdg: '14, 15', ungc: 'P7–8', wep: '—', kpis: 'Habitat area restored (m²), Soil contaminant levels' },
      { cat: 'ENV', focus: 'Pollution prevention', gri: '303, 307', sdg: '14', ungc: 'P8', wep: '—', kpis: 'Spill events: 0, Pollutant discharge (mg/L)' },
      { cat: 'SOC', focus: 'Worker safety (high-risk)', gri: '403', sdg: '3', ungc: 'P1–2', wep: '—', kpis: 'LTIFR, High-risk task compliance checks/shift' },
      { cat: 'SOC', focus: 'Community access & engagement', gri: '413', sdg: '6, 11', ungc: 'P1', wep: '—', kpis: 'Community consultations, Beneficiaries (people)' },
      { cat: 'GOV', focus: 'Environmental compliance', gri: '307, 308', sdg: '16', ungc: 'P10', wep: '—', kpis: 'Compliance inspections/year, Violations: 0' },
    ],
  },
  {
    id: 'energy', label: '⚡ Energy', icon: '⚡',
    priorities: 'GRI 302, 305 (critical), 304 · SDG 7, 13 · UNGC P7–9 · SASB · ISO 50001',
    topKPIs: 'Scope 1+2 emissions (tCO₂e) · Renewable energy share (%) · Energy avoided (kWh) · Emissions intensity · System uptime (%)',
    differentiators: 'ISO 50001 Energy Management · SBTi-aligned targets · Renewable integration · Smart monitoring & analytics',
    rows: [
      { cat: 'ENV', focus: 'GHG emissions (Scope 1, 2)', gri: '305', sdg: '13', ungc: 'P7–9', wep: '—', kpis: 'Total tCO₂e, % reduction vs baseline' },
      { cat: 'ENV', focus: 'Renewable energy integration', gri: '302', sdg: '7', ungc: 'P9', wep: '—', kpis: 'Renewable share (%), Solar capacity (kWp)' },
      { cat: 'ENV', focus: 'Energy performance monitoring', gri: '302', sdg: '7, 9', ungc: 'P8', wep: '—', kpis: 'System uptime (%), Monitoring data points' },
      { cat: 'ENV', focus: 'Climate risk assessment', gri: '305', sdg: '13', ungc: 'P7', wep: '—', kpis: 'Climate exposure rating (score/site)' },
      { cat: 'ENV', focus: 'Biodiversity (land-use)', gri: '304', sdg: '15', ungc: 'P7', wep: '—', kpis: 'Habitat area restored (m²), Land footprint (ha)' },
      { cat: 'SOC', focus: 'Workforce safety (high voltage)', gri: '403', sdg: '3', ungc: 'P1–2', wep: '—', kpis: 'LTIFR, High-risk control compliance' },
      { cat: 'SOC', focus: 'Community energy access', gri: '413', sdg: '7, 11', ungc: 'P1', wep: '—', kpis: 'Communities benefiting, % renewable access' },
      { cat: 'GOV', focus: 'Environmental regulatory compliance', gri: '307', sdg: '16', ungc: 'P10', wep: '—', kpis: 'Regulatory findings: 0, Inspections passed/year' },
    ],
  },
]

// ─── COMMERCIAL MATRIX ─────────────────────────────────────────────────────────
export const commercialMatrix = [
  {
    icon: '⚡', title: 'Energy Efficiency',
    ref: 'GRI 302 · SDG 7, 13 · SASB',
    outcomes: ['Lower utility costs for client', 'Green financing eligibility', 'Carbon tax mitigation', 'ESG investor attraction', 'Premium pricing potential'],
    impact: 85,
  },
  {
    icon: '🦺', title: 'Health & Safety Excellence',
    ref: 'GRI 403 · UNGC P1–2 · ISO 45001',
    outcomes: ['Lower insurance premiums', 'Reduced workers\' comp costs', 'Fewer project delays & penalties', 'Reputational protection', 'Predictable delivery = client trust'],
    impact: 92,
  },
  {
    icon: '♻️', title: 'Waste & Circular Economy',
    ref: 'GRI 301, 306 · SDG 12 · SASB',
    outcomes: ['Reduced waste disposal costs', 'Material recovery revenue', 'Client ESG reporting support', 'Circular supply chain value', 'Regulatory pre-compliance'],
    impact: 70,
  },
  {
    icon: '👥', title: 'Diversity, Equity & Inclusion',
    ref: 'GRI 405 · WEP · SDG 5, 8, 10',
    outcomes: ['Broader talent pool', 'Higher retention (lower cost)', 'Better decision-making', 'Brand trust & market access', 'Diverse procurement qualification'],
    impact: 65,
  },
  {
    icon: '🛡️', title: 'Anti-Corruption & Governance',
    ref: 'GRI 205 · UNGC P10 · ISO 37001',
    outcomes: ['Lower legal/fine exposure', 'License to operate protection', 'Lower cost of capital', 'Investor confidence signal', 'Procurement pre-qualification'],
    impact: 80,
  },
  {
    icon: '🌍', title: 'Local Employment & Community',
    ref: 'GRI 202, 413 · SDG 1, 8, 11 · WEP P6',
    outcomes: ['Social license to operate', 'Government tender preference', 'Reduced community opposition', 'Lower logistics & labour costs', 'CSR client alignment'],
    impact: 75,
  },
  {
    icon: '💧', title: 'Water Management',
    ref: 'GRI 303 · SDG 6 · SASB',
    outcomes: ['Lower water procurement costs', 'Operational continuity in water-stressed regions', 'Social licence in arid markets', 'Regulatory pre-compliance'],
    impact: 68,
  },
  {
    icon: '🔗', title: 'Ethical Supply Chain',
    ref: 'GRI 308, 414 · UNGC P1–6 · SEDEX · SDG 12',
    outcomes: ['Reduced supplier scandal risk', 'Resilient supply chain', 'ESG client requirement met', 'B2B competitive advantage', 'Third-party audit readiness'],
    impact: 78,
  },
  {
    icon: '📊', title: 'Training & Skills Development',
    ref: 'GRI 404 · SDG 4, 8 · WEP P4',
    outcomes: ['Lower safety incidents (cost)', 'Higher retention rate', 'Internal promotion (saves hiring)', 'Institutional knowledge build', 'Future-proofed capability'],
    impact: 60,
  },
]

// ─── RED FLAGS ─────────────────────────────────────────────────────────────────
export const redFlags = [
  {
    severity: 'critical',
    title: '"Certified" Language Misuse',
    wrong: '"GRI-certified," "TCFD-certified," "UNGC-certified," "WEP-certified," "SASB-certified." None of these frameworks certify organizations — they provide standards, principles, or frameworks to report against.',
    fix: 'Use: "Report against GRI Standards" | "TCFD-aligned disclosure" | "UNGC signatory" | "WEP signatory" | "SASB-aligned"',
  },
  {
    severity: 'critical',
    title: 'Expired Certifications',
    wrong: 'Referencing ISO certificates past their 3-year cycle, LEED projects from 15+ years ago as "current capability," or GRESB scores older than 1 year. Clients verify certificates.',
    fix: 'Only reference current certifications. Always include: certificate number + issuing body + expiry date.',
  },
  {
    severity: 'critical',
    title: 'Unverifiable Data Claims',
    wrong: '"Third-party verified" with no verifier named. GRI emissions data with no methodology. "Zero incidents" with no audit trail or reference.',
    fix: 'Name the verifier. State the methodology. Reference the assurance statement. If data is unavailable, acknowledge the gap and commit to a timeline.',
  },
  {
    severity: 'serious',
    title: 'Framework Inconsistency',
    wrong: 'GRI 405-1 shows 15% women in one section, 25% in another. UNGC P10 claimed but no ISO 37001 or system described. WEP signatory stated with no gender data anywhere in the proposal.',
    fix: 'Cross-reference all ESG data before submission. Maintain a data register for the bid and check all figures are consistent throughout.',
  },
  {
    severity: 'serious',
    title: 'Incomplete UNGC Coverage',
    wrong: 'Only mentioning environmental Principles P7–P9, ignoring human rights and labour P1–P6. Claiming signatory status with no implementation evidence or missing CoP link.',
    fix: 'Address all 10 Principles with evidence, or explicitly explain which principles are less material to this specific project scope.',
  },
  {
    severity: 'serious',
    title: 'Generic SDG Mapping',
    wrong: 'Claiming contribution to all 17 SDGs. SDG icons with no quantification. Wrong SDG mapped — e.g., SDG 3 for climate action (correct is SDG 13).',
    fix: 'Select 3–7 material SDGs. Quantify each contribution with GRI indicator cross-reference. Explain the specific activity-to-goal linkage.',
  },
  {
    severity: 'serious',
    title: 'Superficial WEP Claims',
    wrong: 'Claiming WEP signatory but only providing total workforce % women. No gender pay equity data (GRI 405-2). Only addressing workplace P1–P3, ignoring supply chain P5 and community P6.',
    fix: 'Minimum data requirement: GRI 405-1 (diversity) + GRI 405-2 (pay equity). Address all 7 Principles relevant to the project context.',
  },
  {
    severity: 'moderate',
    title: 'Wrong Framework Reference Formatting',
    wrong: '"GRI 305.1" (use hyphen) · "ISO 14000" (it\'s ISO 14001) · "UNGC P11" (only 10 exist) · "WEP P8" (only 7 exist) · "SDG 8.8" when meaning overall SDG 8.',
    fix: 'Double-check all framework formatting before submission. Use the Framework Terminology Quick-Guide as your final review checklist.',
  },
  {
    severity: 'moderate',
    title: 'Boilerplate Framework Language',
    wrong: 'Same UNGC paragraph copy-pasted into every proposal unchanged. Generic "we support the SDGs" without customization. WEP content not adapted to project sector, location, or client.',
    fix: 'Customize framework content to each project\'s sector, client ESG priorities, location, and material issues. Use the Sector Mapping module.',
  },
  {
    severity: 'moderate',
    title: 'Framework Overload',
    wrong: 'Listing every framework (UNGC, WEP, GRI, SDGs, TCFD, SASB, ISO ×5, GRESB, CDP, SBTi...) without focus or evidence. This appears as name-dropping rather than genuine implementation.',
    fix: 'Prioritize 4–6 frameworks relevant to the client and project. For every framework referenced, provide concrete evidence of implementation.',
  },
]

// ─── CHECKLIST SECTIONS ────────────────────────────────────────────────────────
export const checklistSections = [
  {
    id: 's1', title: '🔍 Pre-Tender Assessment', items: [
      { id: 'c1', text: 'Run client documents through AI scanner to flag explicit and implicit ESG requirements' },
      { id: 'c2', text: 'Apply BD ESG Go/No-Go Checklist to evaluate ESG feasibility and alignment' },
      { id: 'c3', text: 'Confirm internal capability and reputational fit before bid/no-bid decision' },
      { id: 'c4', text: 'Identify which ESG frameworks the client references (GRI, UNGC, SDGs, WEP, SASB, ISO)' },
      { id: 'c5', text: 'Identify the target sector and refer to the Sector ESG Metrics & Standards Mapping table' },
    ],
  },
  {
    id: 's2', title: '📄 Executive Summary', items: [
      { id: 'c6', text: 'UNGC/WEP signatory status (or alignment language for non-signatories) in first ESG paragraph' },
      { id: 'c7', text: 'At least 1 strong GRI indicator with actual data and industry benchmark (e.g., GRI 403-9: LTIFR)' },
      { id: 'c8', text: 'ISO certifications listed with certificate numbers, issuing body, and expiry dates' },
      { id: 'c9', text: 'Value proposition follows: Capability + Framework + Client Benefit + Quantified Proof formula' },
    ],
  },
  {
    id: 's3', title: '🔬 Technical Approach', items: [
      { id: 'c10', text: '3–5 material GRI indicators selected and referenced with actual performance data' },
      { id: 'c11', text: 'SDG mapping table with 3–5 material SDGs, quantified contributions, and GRI cross-references' },
      { id: 'c12', text: 'Health & Safety narrative aligned with GRI 403 and ISO 45001 (if certified)' },
      { id: 'c13', text: 'Environmental performance section with GRI 305 emissions data and reduction targets' },
      { id: 'c14', text: 'Water and waste management addressed with sector-specific KPIs (see Sector Mapping module)' },
    ],
  },
  {
    id: 's4', title: '🏢 Company Profile', items: [
      { id: 'c15', text: 'UNGC signatory status confirmed with CoP link (or alignment language used correctly)' },
      { id: 'c16', text: 'WEP signatory status with GRI 405-1 and GRI 405-2 minimum data disclosed' },
      { id: 'c17', text: 'All ISO certifications current — verify certificate numbers and expiry dates' },
      { id: 'c18', text: 'Win theme formula applied to executive statement or company narrative' },
    ],
  },
  {
    id: 's5', title: '📚 Case Studies', items: [
      { id: 'c19', text: 'At least 1 case study uses the Framework-Structured Template (GRI + UNGC + SDGs + certs)' },
      { id: 'c20', text: 'Case study GRI indicators are consistent with data cited in all other proposal sections' },
      { id: 'c21', text: 'Case study SDG contributions are quantified — not just listed with icons' },
      { id: 'c22', text: 'Case study relevance to current project is explicitly stated in 2–3 sentences' },
    ],
  },
  {
    id: 's6', title: '🏛️ Governance Section', items: [
      { id: 'c23', text: 'ESG Governance Statement with named accountability role (GRI 2-12)' },
      { id: 'c24', text: 'Anti-corruption measures with ISO 37001 (if certified) or policy description (UNGC P10)' },
      { id: 'c25', text: 'Stakeholder engagement plan referenced (AA1000AP Principle of Inclusivity)' },
    ],
  },
  {
    id: 's7', title: '✅ Quality Control & Sign-Off', items: [
      { id: 'c26', text: 'All ESG data points cross-referenced for consistency throughout the entire proposal' },
      { id: 'c27', text: 'No "certified" language used for non-certifying frameworks (GRI, UNGC, SDGs, WEP, SASB)' },
      { id: 'c28', text: 'All framework references formatted correctly (GRI 305-1 not 305.1 · ISO 14001 not 14000)' },
      { id: 'c29', text: 'All measurable ESG commitments validated with Engineering, HSE, or Sustainability leads' },
      { id: 'c30', text: 'Proposal Manager sign-off obtained — ESG content reviewed and approved for submission' },
    ],
  },
]

// ─── QUIZ QUESTIONS ────────────────────────────────────────────────────────────
export const quizQuestions = [
  {
    q: 'Which is the CORRECT language to use when referencing GRI in a proposal?',
    opts: ['GRI-certified performance', 'GRI-compliant reporting', 'Report against GRI Standards', 'GRI-approved methodology'],
    ans: 2,
    exp: 'GRI is a reporting standard, not a certification body. The correct language is "report against GRI Standards" or "GRI-aligned disclosure." Using "certified" signals a fundamental misunderstanding of the framework.',
  },
  {
    q: 'Alliad is a UNGC signatory. Which represents a CRITICAL error in a proposal?',
    opts: ['Including the CoP link in the executive summary', 'Only referencing UNGC environmental Principles P7–P9', 'Mapping Principle 10 to ISO 37001 anti-corruption system', 'Addressing all 10 Principles with project-specific evidence'],
    ans: 1,
    exp: 'UNGC requires commitment to all 10 Principles. Only addressing environmental P7–P9 while ignoring human rights and labour P1–P6 demonstrates selective reporting — a serious credibility issue that evaluators notice.',
  },
  {
    q: 'A BD team member writes "SDG 3: Climate Action" in the SDG mapping table. What is wrong?',
    opts: ['SDG 3 does not apply to construction projects', 'SDG 3 is Good Health & Well-being — Climate Action is SDG 13', 'Nothing is wrong with this mapping', 'SDG 3 requires ISO 14001 certification'],
    ans: 1,
    exp: 'SDG 3 is "Good Health and Well-being." Climate Action is SDG 13. Incorrect SDG mapping demonstrates a lack of materiality understanding and is an immediate credibility signal to knowledgeable evaluators.',
  },
  {
    q: 'What is the MINIMUM gender data required when claiming WEP signatory status in a proposal?',
    opts: ['Total workforce % women only', 'GRI 405-1 (workforce diversity) AND GRI 405-2 (pay equity)', 'A WEP logo on the cover page', 'A statement of intent to report gender data in future'],
    ans: 1,
    exp: 'WEP Principle 7 requires transparency and reporting. At minimum, GRI 405-1 (workforce diversity breakdown) and GRI 405-2 (gender pay equity ratio) must be provided. Total % women alone is considered superficial and signals tokenism.',
  },
  {
    q: 'Which is the correctly formatted GRI reference?',
    opts: ['GRI 305.1', 'GRI-305-1', 'GRI 305-1', 'GRI305/1'],
    ans: 2,
    exp: 'GRI references use a hyphen: GRI 305-1, GRI 403-9, GRI 405-1. Using a period (GRI 305.1) or any other separator is a formatting error — small but signals careless work to evaluators who know the standards.',
  },
  {
    q: 'The BD formula for winning ESG content is: [Capability] + [Framework] + [Client Benefit] + [Proof]. Which example BEST follows this?',
    opts: ['We are ISO 45001 certified', 'We are committed to health and safety excellence on all projects', 'As UNGC signatory with ISO 45001, we achieve LTIFR 0.4 vs. industry 8.5 — protecting X workers, proven on [Project]', 'Our LTIFR is 0.4 which is better than average'],
    ans: 2,
    exp: 'The winning formula combines all four elements: capability (ISO 45001 system), framework reference (UNGC signatory), client benefit (worker protection, reduced risk), and quantified proof (LTIFR 0.4 vs 8.5 average, named project). The other options each miss one or more elements.',
  },
  {
    q: 'You find "ISO 14000 certified" in a proposal before submission. What action do you take?',
    opts: ['Leave it — ISO 14000 and ISO 14001 are interchangeable', 'Change to "ISO 14001:2015 certified" and add the cert number, body, and expiry date', 'Add a footnote explaining ISO 14000 is the correct family name', 'Delete the ISO reference entirely'],
    ans: 1,
    exp: 'ISO 14001 is the specific certifiable standard. ISO 14000 refers to the broader family — it cannot be certified. The correct reference is "ISO 14001:2015 certified" with certificate number, certifying body, and expiry date.',
  },
  {
    q: 'For a healthcare proposal, which 3 GRI indicators should you PRIORITIZE in the technical section?',
    opts: ['GRI 201, 206, 301', 'GRI 403 (H&S), GRI 306 (Clinical Waste), GRI 418 (Data Privacy)', 'GRI 302, 304, 402', 'GRI 205, 404, 413'],
    ans: 1,
    exp: 'For healthcare: GRI 403 (patient and worker safety — critical), GRI 306 (clinical and hazardous waste management — sector-specific), GRI 418 (patient data privacy — mandatory for hospitals). These address the sector\'s material risks directly.',
  },
  {
    q: 'What does "SMETA 2-pillar" cover, and who administers it?',
    opts: ['Sustainable Metrics & Environmental Trade Audit — GRI', 'Sedex Members Ethical Trade Audit — SEDEX', 'Social Management & Ethical Trade Assessment — UN', 'Supply Management Ethical Trade Authority — ISO'],
    ans: 1,
    exp: 'SMETA (Sedex Members Ethical Trade Audit) is administered by SEDEX. The 2-pillar audit covers Labour Standards and Health & Safety. The 4-pillar also adds Business Ethics and Environment. It provides third-party ethical trade assurance frequently requested by multinational clients.',
  },
  {
    q: 'A colleague proposes referencing 12 frameworks in a proposal to show comprehensive ESG capability. Your response?',
    opts: ['Approve — more frameworks show greater commitment', 'Approve if all 12 are relevant to the sector', 'Advise against — framework overload appears as name-dropping; prioritize 4–6 with evidence', 'Approve only if competitors also reference multiple frameworks'],
    ans: 2,
    exp: 'Framework overload damages credibility. Evaluators recognize "framework name-dropping" when frameworks are listed without implementation evidence. The correct approach: 4–6 genuinely material frameworks with concrete evidence for each one.',
  },
]
