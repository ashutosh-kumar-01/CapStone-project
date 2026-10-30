import { Link } from 'react-router-dom'
import { ArrowRight, ScanLine, Scale, HeartPulse, QrCode, ShieldCheck, Sparkles } from 'lucide-react'
import Logo from '../components/Logo'

const steps = [
  { n: '01', t: 'Scan', d: 'Front, back, side and nutrition panels in one session.' },
  { n: '02', t: 'OCR + vision', d: 'PaddleOCR extracts text, numbers and evidence regions.' },
  { n: '03', t: 'Structure', d: 'Fields such as MRP, quantity, dates and ingredients are validated.' },
  { n: '04', t: 'Rule check', d: 'Versioned Legal Metrology and FSSAI rules — not an LLM verdict.' },
  { n: '05', t: 'Food fit', d: 'Transparent preference matching. Never a medical diagnosis.' },
  { n: '06', t: 'Passport', d: 'QR-accessible Product Trust Passport with evidence history.' },
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <div className="absolute inset-0 paper-grid opacity-20 pointer-events-none" />
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Logo light />
        <div className="flex items-center gap-3">
          <Link to="/p/PP-IN-7K4C-DAL1" className="hidden text-sm text-cream/70 hover:text-gold sm:inline">
            Sample passport
          </Link>
          <Link to="/login" className="rounded-full border border-cream/20 px-4 py-2 text-sm hover:border-gold">
            Sign in
          </Link>
          <Link to="/register" className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink">
            Open the desk
          </Link>
        </div>
      </header>

      <section className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:pt-16">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-gold">
            SIH26034 · K4C0371 · Decision support
          </p>
          <h1 className="font-display text-5xl leading-[1.05] text-cream sm:text-6xl">
            Read the packet.
            <span className="block text-gold">Prove the claim.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/70">
            PackPramaan AI scans Indian packaged-food labels, extracts declarations, checks a bounded set of Legal
            Metrology and FSSAI rules, and stores an evidence-backed Product Trust Passport.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 font-semibold text-ink"
            >
              Start a scan <ArrowRight size={16} />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-5 py-3"
            >
              Demo accounts
            </Link>
          </div>
          <p className="mt-6 max-w-lg text-xs leading-5 text-cream/45">
            Software decision-support only. Not a government certification, legal determination, or medical device.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -right-4 -top-4 stamp px-3 py-2 text-[10px] text-gold">Evidence held</div>
          <div className="rounded-3xl border border-white/10 bg-forest/60 p-5 shadow-2xl">
            <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-gold">
              <span>Scan SCN-1042</span>
              <span>OCR 93%</span>
            </div>
            <div className="rounded-2xl bg-paper p-4 text-ink">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gold">Kesar Kitchen</p>
                  <h2 className="font-display text-2xl">Toor Dal 1 kg</h2>
                </div>
                <span className="rounded-full bg-pass/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-pass">
                  Pass
                </span>
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-paper-2/60 p-3">
                  <dt className="text-[10px] uppercase tracking-widest text-ink-soft">MRP</dt>
                  <dd className="font-semibold">₹168.00 incl. taxes</dd>
                </div>
                <div className="rounded-xl bg-paper-2/60 p-3">
                  <dt className="text-[10px] uppercase tracking-widest text-ink-soft">Food-fit</dt>
                  <dd className="font-semibold">86 / 100</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs text-ink-soft">
                Finding F4 flagged a faint vegetarian mark for review. Rule FSS-LD-2020-VEG · confidence 0.46.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/10 bg-ink">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: ScanLine, t: 'Multi-image scanner', d: 'Associate front, back, side and nutrition photos with one product identity.' },
            { icon: Scale, t: 'Versioned rule engine', d: 'Deterministic Legal Metrology and FSSAI checks with source metadata.' },
            { icon: HeartPulse, t: 'Nutrition & food-fit', d: 'Preference scoring from declared label data. Conservative, explainable.' },
            { icon: QrCode, t: 'Digital Product Passport', d: 'QR page with current fields, evidence and verification timestamps.' },
            { icon: ShieldCheck, t: 'Evidence, not vibes', d: 'Every finding points to a crop, OCR snippet and a dated rule ID.' },
            { icon: Sparkles, t: 'Grounded assistant', d: 'RAG explains why something was flagged. It does not invent the law.' },
          ].map((item) => (
            <article key={item.t} className="rounded-2xl border border-white/10 p-5">
              <item.icon className="mb-4 text-gold" size={22} />
              <h3 className="font-display text-xl">{item.t}</h3>
              <p className="mt-2 text-sm text-cream/65">{item.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <p className="text-[11px] uppercase tracking-[0.24em] text-gold">Core workflow</p>
        <h2 className="mt-2 font-display text-4xl">Six stages. One auditable record.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-white/10 p-4">
              <div className="font-display text-gold">{s.n}</div>
              <div className="mt-2 font-semibold">{s.t}</div>
              <p className="mt-1 text-xs text-cream/60">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-xs text-cream/40">
        PackPramaan AI · CSE Capstone 2026–2027 · Ministry of Consumer Affairs SIH theme · Team K4C0371
      </footer>
    </div>
  )
}
