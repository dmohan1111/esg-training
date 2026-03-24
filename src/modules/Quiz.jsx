import { useState } from 'react'
import { quizQuestions } from '../data/index.js'

export default function Quiz() {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const q = quizQuestions[current]
  const pct = Math.round((score / quizQuestions.length) * 100)

  const selectAnswer = idx => {
    if (answered !== null) return
    setAnswered(idx)
    if (idx === q.ans) setScore(s => s + 1)
  }

  const next = () => {
    if (current + 1 >= quizQuestions.length) { setShowResult(true); return }
    setCurrent(c => c + 1)
    setAnswered(null)
  }

  const reset = () => { setCurrent(0); setScore(0); setAnswered(null); setShowResult(false) }

  const tier = pct >= 90 ? { label: 'ESG Expert', icon: '🏆', color: '#2A7B5C' }
    : pct >= 70 ? { label: 'Framework Proficient', icon: '✅', color: '#1A5A8A' }
    : pct >= 50 ? { label: 'Developing Knowledge', icon: '📖', color: '#B87A18' }
    : { label: 'Keep Practising', icon: '💪', color: '#C44A3A' }

  const msg = pct >= 90
    ? 'Outstanding. You have mastered ESG framework knowledge for business development and are ready to lead ESG content in any proposal.'
    : pct >= 70
    ? 'Good work. Review the modules for any questions you missed before your next bid submission.'
    : pct >= 50
    ? 'A solid start. Review Module 02 (Framework Guide) and Module 06 (Red Flags) to strengthen your accuracy.'
    : 'Review all modules — especially Framework Guide, Red Flags, and Content Blocks — then retake the quiz.'

  return (
    <div className="page-content fade-in">
      <div className="module-header">
        <span className="eyebrow">Module 08</span>
        <h2>Knowledge Check</h2>
        <p>10 scenario-based questions testing your ESG framework mastery and proposal best practices.</p>
      </div>

      <div style={{ maxWidth: 720 }}>
        <div className="quiz-dots">
          {quizQuestions.map((_, i) => (
            <div key={i} className={`quiz-dot${i < current ? ' done' : i === current && !showResult ? ' active' : ''}`} />
          ))}
        </div>

        {!showResult ? (
          <div className="quiz-card">
            <div className="qnum">Question {current + 1} of {quizQuestions.length}</div>
            <div className="qtext">{q.q}</div>
            <div className="quiz-opts">
              {q.opts.map((opt, i) => {
                let cls = 'quiz-opt'
                if (answered !== null) {
                  if (i === q.ans) cls += ' correct'
                  else if (i === answered && i !== q.ans) cls += ' wrong'
                }
                return (
                  <button key={i} className={cls} onClick={() => selectAnswer(i)}>
                    <span className="quiz-opt-letter">{String.fromCharCode(65 + i)}</span>
                    {opt}
                  </button>
                )
              })}
            </div>
            {answered !== null && (
              <div className={`quiz-feedback show ${answered === q.ans ? 'correct' : 'wrong'}`}>
                {answered === q.ans ? '✓ Correct! ' : '✗ Not quite. '}{q.exp}
              </div>
            )}
            {answered !== null && (
              <button className="btn btn-primary mt-md" onClick={next}>
                {current + 1 === quizQuestions.length ? 'See Results →' : 'Next Question →'}
              </button>
            )}
          </div>
        ) : (
          <div className="quiz-card" style={{ textAlign: 'center', padding: 40 }}>
            <div style={{ fontSize: '2.8rem', marginBottom: 4 }}>{tier.icon}</div>
            <div style={{ fontFamily: 'var(--font-head)', fontSize: '2.4rem', fontWeight: 800, color: tier.color, marginBottom: 4 }}>
              {score}/{quizQuestions.length}
            </div>
            <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 12 }}>
              {tier.label}
            </div>
            <p style={{ color: 'var(--t2)', maxWidth: 460, margin: '0 auto 28px', lineHeight: 1.65 }}>{msg}</p>
            <button className="btn btn-green btn-lg" onClick={reset}>Retake Quiz</button>
          </div>
        )}
      </div>
    </div>
  )
}
