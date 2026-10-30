import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { ASSISTANT_THREADS } from '../data/mock'

export default function Assistant() {
  const [messages, setMessages] = useState(
    ASSISTANT_THREADS.flatMap((t) => [
      { from: 'you', text: t.q },
      { from: 'pp', text: t.a },
    ]),
  )
  const [input, setInput] = useState('')

  function send(e) {
    e.preventDefault()
    if (!input.trim()) return
    const q = input.trim()
    setInput('')
    setMessages((m) => [
      ...m,
      { from: 'you', text: q },
      {
        from: 'pp',
        text: 'Grounded reply (demo): explanations are retrieved from the official Legal Metrology / FSSAI corpus attached to this product’s rule IDs. The assistant cannot override a fail/pass from the deterministic engine. Re-verify source documents before submission because amendments continue through 2025–2026.',
      },
    ])
  }

  return (
    <div>
      <PageHeader
        kicker="Module 14"
        title="Explainable consumer assistant"
        subtitle="Ask why a field was flagged. Answers cite extracted evidence and official source metadata. The model does not decide compliance."
      />
      <div className="rounded-3xl border border-line bg-cream p-4 sm:p-6">
        <div className="max-h-[480px] space-y-3 overflow-y-auto scrollbar-thin">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                m.from === 'you' ? 'ml-auto bg-ink text-cream' : 'bg-paper'
              }`}
            >
              {m.text}
            </div>
          ))}
        </div>
        <form onSubmit={send} className="mt-4 flex gap-2">
          <input
            className="flex-1 rounded-full border border-line bg-paper px-4 py-2"
            placeholder="Why is veg logo only a review, not a fail?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-cream">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
