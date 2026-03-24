import express from 'express'
import fetch from 'node-fetch'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
app.use(express.json({ limit: '10mb' }))
app.use(express.static(path.join(__dirname, 'dist')))

// Proxy route for Claude API — keeps API key server-side in production
// You can alternatively set ANTHROPIC_API_KEY env var here
app.post('/api/claude', async (req, res) => {
  const apiKey = req.headers['x-api-key'] || process.env.ANTHROPIC_API_KEY
  if (!apiKey) return res.status(401).json({ error: 'API key required' })

  try {
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01',
        'x-api-key': apiKey,
      },
      body: JSON.stringify(req.body),
    })

    res.setHeader('Content-Type', upstream.headers.get('content-type') || 'application/json')
    upstream.body.pipe(res)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.get('*', (_req, res) =>
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`\n  Alliad ESG Toolkit → http://localhost:${PORT}\n`))
