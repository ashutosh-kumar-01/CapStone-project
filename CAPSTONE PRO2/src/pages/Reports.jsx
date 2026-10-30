import PageHeader from '../components/PageHeader'
import { ANALYTICS, SCANS, productById } from '../data/mock'

export default function Reports() {
  return (
    <div>
      <PageHeader
        kicker="Module 15"
        title="Reports & analytics"
        subtitle="Semester-7 style operational view. PDF export is print-to-PDF until ReportLab is connected on the Node service."
      />
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ['OCR accuracy (subset)', `${ANALYTICS.ocrAccuracy}%`],
          ['Rule recall', `${ANALYTICS.ruleRecall}%`],
          ['Review share', `${ANALYTICS.reviewRate}%`],
        ].map(([l, v]) => (
          <div key={l} className="rounded-2xl border border-line bg-cream p-5">
            <p className="text-[11px] uppercase tracking-[0.16em] text-ink-soft">{l}</p>
            <p className="mt-2 font-display text-3xl">{v}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 overflow-hidden rounded-3xl border border-line bg-cream">
        <table className="w-full text-sm">
          <thead className="bg-paper text-left text-[11px] uppercase tracking-[0.16em] text-ink-soft">
            <tr>
              <th className="px-4 py-3">Scan</th>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Summary</th>
              <th className="px-4 py-3">Report</th>
            </tr>
          </thead>
          <tbody>
            {SCANS.map((s) => (
              <tr key={s.id} className="border-t border-line">
                <td className="px-4 py-3 font-medium">{s.id}</td>
                <td className="px-4 py-3">{productById(s.productId).name}</td>
                <td className="px-4 py-3">{s.summary}</td>
                <td className="px-4 py-3">
                  <button type="button" onClick={() => window.print()} className="text-forest">
                    Export PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
