import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { PRODUCTS } from '../data/mock'

export default function ListingCheck() {
  const product = PRODUCTS[1]
  const [listing, setListing] = useState(
    'PeakFuel Cocoa Protein Bar\nNet quantity: 55 g\nMRP: ₹89\nSeller: Marketplace listing (user pasted)\nClaims: 30g protein per bar',
  )

  const diffs = [
    { field: 'Net quantity', pack: '60 g', listing: '55 g', status: 'mismatch' },
    { field: 'MRP', pack: 'Rs 99', listing: '₹89', status: 'mismatch' },
    { field: 'Protein claim', pack: '28 g / 100 g ≈ 16.8 g / bar', listing: '30 g protein per bar', status: 'mismatch' },
    { field: 'Brand name', pack: product.brand, listing: 'PeakFuel', status: 'match' },
  ]

  return (
    <div>
      <PageHeader
        kicker="Module 12"
        title="Online listing vs physical pack"
        subtitle="Paste listing text or drop a screenshot. The prototype does not scrape marketplaces — you supply the listing."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <textarea
          className="min-h-[280px] rounded-3xl border border-line bg-cream p-4 font-mono text-sm"
          value={listing}
          onChange={(e) => setListing(e.target.value)}
        />
        <div className="space-y-3">
          {diffs.map((d) => (
            <div key={d.field} className="rounded-2xl border border-line bg-cream p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{d.field}</h3>
                <span className={d.status === 'match' ? 'text-pass' : 'text-fail'}>{d.status}</span>
              </div>
              <p className="mt-2 text-sm">Pack: {d.pack}</p>
              <p className="text-sm">Listing: {d.listing}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
