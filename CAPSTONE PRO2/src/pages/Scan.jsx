import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Camera, ImagePlus, Trash2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { PRODUCTS } from '../data/mock'

const SLOTS = [
  { id: 'front', label: 'Front / PDP' },
  { id: 'back', label: 'Back panel' },
  { id: 'nutrition', label: 'Nutrition table' },
  { id: 'side', label: 'Side / extra' },
]

const STAGES = [
  'Image quality & layout',
  'OCR + region detection',
  'Structured field extraction',
  'Versioned rule engine',
  'Nutrition & food-fit',
  'Writing Product Trust record',
]

export default function Scan() {
  const navigate = useNavigate()
  const [files, setFiles] = useState({})
  const [match, setMatch] = useState(PRODUCTS[0].id)
  const [running, setRunning] = useState(false)
  const [stage, setStage] = useState(0)

  const filled = useMemo(() => Object.keys(files).length, [files])

  function onFile(slot, file) {
    if (!file) return
    const url = URL.createObjectURL(file)
    setFiles((f) => ({ ...f, [slot]: { name: file.name, url } }))
  }

  function run() {
    setRunning(true)
    setStage(0)
    let i = 0
    const timer = setInterval(() => {
      i += 1
      setStage(i)
      if (i >= STAGES.length) {
        clearInterval(timer)
        const scanId = match === 'prd-peak-bar' ? 'scn-1038' : match === 'prd-amrit-ghee' ? 'scn-1021' : 'scn-1042'
        navigate(`/app/scans/${scanId}`, { state: { simulated: true } })
      }
    }, 700)
  }

  return (
    <div>
      <PageHeader
        kicker="Module 1"
        title="Multi-image product scanner"
        subtitle="Capture at least the principal display panel and nutrition panel. The prototype maps your upload to a curated Indian pack so findings stay realistic."
      />

      <div className="mb-6 rounded-2xl border border-line bg-cream p-4">
        <label className="text-xs uppercase tracking-[0.16em] text-ink-soft">Map this session to a demo product</label>
        <select
          className="mt-2 w-full max-w-md rounded-xl border border-line bg-paper px-3 py-2"
          value={match}
          onChange={(e) => setMatch(e.target.value)}
        >
          {PRODUCTS.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} · {p.status}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {SLOTS.map((slot) => (
          <label
            key={slot.id}
            className="relative flex min-h-[220px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-3xl border border-dashed border-line bg-cream"
          >
            {files[slot.id] ? (
              <>
                <img src={files[slot.id].url} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <button
                  type="button"
                  className="absolute right-3 top-3 rounded-full bg-ink p-2 text-cream"
                  onClick={(e) => {
                    e.preventDefault()
                    setFiles((f) => {
                      const n = { ...f }
                      delete n[slot.id]
                      return n
                    })
                  }}
                >
                  <Trash2 size={14} />
                </button>
                <span className="absolute bottom-3 left-3 rounded-full bg-ink/80 px-3 py-1 text-xs text-cream">
                  {slot.label}
                </span>
              </>
            ) : (
              <>
                <ImagePlus className="text-gold" />
                <p className="mt-2 font-semibold">{slot.label}</p>
                <p className="text-xs text-ink-soft">JPG or PNG · phone camera is enough</p>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={(e) => onFile(slot.id, e.target.files?.[0])}
            />
          </label>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-ink-soft">
          {filled} / 4 views attached. Nutrition panel strongly recommended.
        </p>
        <button
          type="button"
          onClick={run}
          disabled={running}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-cream disabled:opacity-60"
        >
          <Camera size={16} /> {running ? 'Running pipeline…' : 'Run OCR & compliance'}
        </button>
      </div>

      {running && (
        <ol className="mt-8 space-y-2 rounded-3xl border border-line bg-cream p-6">
          {STAGES.map((s, i) => (
            <li key={s} className={`flex items-center gap-3 text-sm ${i <= stage ? 'text-forest' : 'text-ink-soft/50'}`}>
              <span className="font-display text-gold">{String(i + 1).padStart(2, '0')}</span>
              {s}
              {i === stage && i < STAGES.length && <span className="animate-pulse text-xs">working</span>}
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}
