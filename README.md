# Alliad ESG BD Toolkit

An interactive, AI-powered ESG training and proposal toolkit for the Business Development team.

---

## What's Inside

**8 Training Modules**
- 01 · Why ESG Matters for BD
- 02 · Framework Reference Guide (GRI, UNGC, SDGs, WEP, SASB, AA1000, SEDEX)
- 03 · Sector ESG Standards Mapping (Education, Healthcare, Warehouse, Water, Energy)
- 04 · Content Block Library (ready-to-customise proposal templates)
- 05 · ESG-to-Commercial Outcome Matrix
- 06 · Red Flags to Avoid
- 07 · BD ESG Bid Checklist (30 items, live progress)
- 08 · Knowledge Check Quiz

**5 AI-Powered Tools** *(requires Anthropic API key)*
- 🔍 Tender Scanner — extract ESG requirements from any RFP
- ✍️ Proposal Writer — generate compliant ESG narrative sections
- 🔬 ESG Reviewer — catch framework errors before submission
- 🗺️ SDG Mapper — build a defensible SDG mapping table
- 📊 KPI Advisor — sector-specific KPI recommendations

---

## Quick Start (Development)

```bash
npm install
npm run dev
```

Open http://localhost:5173 — the Vite dev server proxies API calls to Anthropic automatically.

## Production Deployment

```bash
npm run build
npm run serve
```

Open http://localhost:3000

### Setting the API Key

**Option A — Per user (browser):**
Click the ⚙ settings icon in the top-right header and enter the Anthropic API key. It is stored in the user's browser localStorage and never sent anywhere except Anthropic.

**Option B — Server-side (recommended for team deployment):**
```bash
ANTHROPIC_API_KEY=sk-ant-api03-... npm run serve
```
When the environment variable is set, the server uses it and no key is needed in the browser.

---

## Tech Stack

- **Frontend:** React 18, Vite 5
- **Styling:** Pure CSS with custom design tokens (no CSS framework)
- **Fonts:** Syne (headings) + DM Sans (body) + JetBrains Mono (code) — via Google Fonts
- **AI:** Anthropic Claude API (claude-sonnet-4-6) via streaming
- **Server:** Express.js (production proxy)

---

## Project Structure

```
src/
  App.jsx                  # Root component + routing
  context.jsx              # API key global state
  styles.css               # Full design system
  data/index.js            # All static content (frameworks, sectors, quiz, etc.)
  utils/claude.js          # Claude API streaming utility
  components/
    Header.jsx             # Sticky header + tab navigation
    SettingsModal.jsx      # API key configuration
  modules/
    WhyESG.jsx             # Module 01
    Frameworks.jsx         # Module 02
    Sectors.jsx            # Module 03
    ContentBlocks.jsx      # Module 04
    CommercialMatrix.jsx   # Module 05
    RedFlags.jsx           # Module 06
    Checklist.jsx          # Module 07
    Quiz.jsx               # Module 08
    AITools/
      index.jsx            # AI tools shell + tool switcher
      TenderScanner.jsx    # AI tool: scan tender documents
      ProposalWriter.jsx   # AI tool: generate proposal sections
      ESGReviewer.jsx      # AI tool: review for errors
      SDGandKPI.jsx        # AI tools: SDG mapper + KPI advisor
server.js                  # Express production server
```

---

## Customisation

- **Add data:** All static content lives in `src/data/index.js` — frameworks, sectors, quiz questions, red flags, commercial matrix, checklist items.
- **Update Alliad KPIs:** Replace placeholder values in content blocks and KPI sections with real annual report data.
- **Add sectors:** Add a new sector object to the `sectors` array in `data/index.js`.
- **Change AI prompts:** Each AI tool has its own `SYSTEM` constant at the top of the file.

---

*Internal use only — Business Development · Alliad*
