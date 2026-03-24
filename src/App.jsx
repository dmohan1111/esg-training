import { useState } from 'react'
import { AppProvider } from './context.jsx'
import Header from './components/Header.jsx'

import WhyESG from './modules/WhyESG.jsx'
import Frameworks from './modules/Frameworks.jsx'
import Sectors from './modules/Sectors.jsx'
import ContentBlocks from './modules/ContentBlocks.jsx'
import CommercialMatrix from './modules/CommercialMatrix.jsx'
import RedFlags from './modules/RedFlags.jsx'
import Checklist from './modules/Checklist.jsx'
import Quiz from './modules/Quiz.jsx'
import AITools from './modules/AITools/index.jsx'

const MODULE_MAP = {
  why:        WhyESG,
  frameworks: Frameworks,
  sectors:    Sectors,
  blocks:     ContentBlocks,
  matrix:     CommercialMatrix,
  redflags:   RedFlags,
  checklist:  Checklist,
  quiz:       Quiz,
  ai:         AITools,
}

function AppInner() {
  const [active, setActive] = useState('why')
  const Module = MODULE_MAP[active] || WhyESG

  return (
    <div className="app">
      <Header active={active} onChange={setActive} />
      <main className={active === 'ai' ? 'ai-section' : ''}>
        <Module />
      </main>
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <AppInner />
    </AppProvider>
  )
}
