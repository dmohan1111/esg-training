/**
 * Calls the Claude API via the local proxy endpoint.
 * In development, Vite proxies /api/claude → https://api.anthropic.com/v1/messages
 * In production, the Express server.js handles the proxy.
 */
export async function streamClaude({ apiKey, system, userMessage, onChunk, onDone, onError, model = 'claude-sonnet-4-6' }) {
  try {
    const res = await fetch('/api/claude', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01',
        'x-api-key': apiKey,
      },
      body: JSON.stringify({
        model,
        max_tokens: 2048,
        stream: true,
        system,
        messages: [{ role: 'user', content: userMessage }],
      }),
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: { message: res.statusText } }))
      throw new Error(err?.error?.message || `API error ${res.status}`)
    }

    const reader = res.body.getReader()
    const decoder = new TextDecoder()
    let full = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      const chunk = decoder.decode(value, { stream: true })
      for (const line of chunk.split('\n')) {
        if (!line.startsWith('data: ')) continue
        const raw = line.slice(6).trim()
        if (raw === '[DONE]') continue
        try {
          const parsed = JSON.parse(raw)
          const text = parsed?.delta?.text || ''
          if (text) {
            full += text
            onChunk?.(full)
          }
        } catch {}
      }
    }

    onDone?.(full)
    return full
  } catch (err) {
    onError?.(err.message)
    throw err
  }
}

/** Non-streaming call — returns full response text */
export async function callClaude({ apiKey, system, userMessage, model = 'claude-sonnet-4-6' }) {
  const res = await fetch('/api/claude', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'anthropic-version': '2023-06-01',
      'x-api-key': apiKey,
    },
    body: JSON.stringify({
      model,
      max_tokens: 2048,
      system,
      messages: [{ role: 'user', content: userMessage }],
    }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err?.error?.message || `API error ${res.status}`)
  }

  const data = await res.json()
  return data.content?.[0]?.text || ''
}
