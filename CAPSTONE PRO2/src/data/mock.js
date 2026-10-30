export const DEMO_USERS = [
  {
    id: 'u-consumer',
    name: 'Apoorv Katyayan',
    email: 'consumer@packpramaan.ai',
    password: 'demo',
    role: 'consumer',
  },
  {
    id: 'u-maker',
    name: 'Raj Packaging',
    email: 'maker@packpramaan.ai',
    password: 'demo',
    role: 'manufacturer',
  },
  {
    id: 'u-admin',
    name: 'Inspector Desk',
    email: 'admin@packpramaan.ai',
    password: 'demo',
    role: 'admin',
  },
]

export const RULES = [
  {
    id: 'LM-PCR-2011-06',
    version: '2011/Amd-2025',
    domain: 'Legal Metrology',
    title: 'Mandatory declarations on a packaged commodity',
    source: 'Legal Metrology (Packaged Commodities) Rules, 2011 — Rule 6',
    effective: '2011-07-01',
  },
  {
    id: 'LM-PCR-2011-06-MRP',
    version: '2011/Amd-2025',
    domain: 'Legal Metrology',
    title: 'Maximum retail price inclusive of all taxes',
    source: 'Packaged Commodities Rules, 2011 — Rule 6(1)(e)',
    effective: '2011-07-01',
  },
  {
    id: 'LM-PCR-2011-06-QTY',
    version: '2011/Amd-2025',
    domain: 'Legal Metrology',
    title: 'Net quantity declaration',
    source: 'Packaged Commodities Rules, 2011 — Rule 6(1)(d)',
    effective: '2011-07-01',
  },
  {
    id: 'FSS-LD-2020-02',
    version: '2020/v8-2025',
    domain: 'FSSAI',
    title: 'Name of food and FSSAI licence display',
    source: 'FSS (Labelling and Display) Regulations, 2020',
    effective: '2020-11-17',
  },
  {
    id: 'FSS-LD-2020-NIP',
    version: '2020/v8-2025',
    domain: 'FSSAI',
    title: 'Nutritional information per 100g / 100ml',
    source: 'FSS (Labelling and Display) Regulations, 2020 — Nutritional information',
    effective: '2020-11-17',
  },
  {
    id: 'FSS-LD-2020-VEG',
    version: '2020/v8-2025',
    domain: 'FSSAI',
    title: 'Vegetarian / non-vegetarian logo',
    source: 'FSS (Labelling and Display) Regulations, 2020',
    effective: '2020-11-17',
  },
]

export const PRODUCTS = [
  {
    id: 'prd-kesar-dal',
    name: 'Kesar Kitchen Toor Dal',
    brand: 'Kesar Kitchen',
    category: 'Pulses',
    packSize: '1 kg',
    mrp: '₹168.00',
    mfg: '12/08/2026',
    expiry: '11/08/2027',
    manufacturer: 'Kesar Foods Pvt Ltd, Indore, MP',
    fssai: '10012021000123',
    customerCare: '1800-212-4400',
    country: 'India',
    barcode: '8901234560011',
    ingredients: ['Toor dal (Cajanus cajan)', 'No additives declared'],
    allergens: [],
    nutrition: {
      basis: 'per 100 g',
      energy: 343,
      protein: 22.3,
      carbs: 62.0,
      sugar: 2.1,
      fat: 1.4,
      satFat: 0.3,
      fibre: 15.0,
      sodium: 12,
    },
    passportId: 'PP-IN-7K4C-DAL1',
    status: 'pass',
    foodFit: 86,
  },
  {
    id: 'prd-peak-bar',
    name: 'PeakFuel Cocoa Protein Bar',
    brand: 'PeakFuel',
    category: 'Snack / protein',
    packSize: '60 g',
    mrp: 'Rs 99',
    mfg: '02/09/2026',
    expiry: '02/03/2027',
    manufacturer: 'PeakFuel Nutrition LLP, Pune',
    fssai: '10014088004421',
    customerCare: 'support@peakfuel.example',
    country: 'India',
    barcode: '8901234560088',
    ingredients: [
      'Milk protein isolate',
      'Dates',
      'Cocoa powder',
      'Palm oil',
      'Soy lecithin',
      'Added sugar',
    ],
    allergens: ['Milk', 'Soy'],
    nutrition: {
      basis: 'per 100 g',
      energy: 412,
      protein: 28.0,
      carbs: 38.0,
      sugar: 21.4,
      fat: 14.2,
      satFat: 7.8,
      fibre: 4.1,
      sodium: 210,
    },
    passportId: 'PP-IN-7K4C-BAR2',
    status: 'fail',
    foodFit: 41,
  },
  {
    id: 'prd-amrit-ghee',
    name: 'Amrit Gold Cow Ghee',
    brand: 'Amrit Gold',
    category: 'Fats / dairy',
    packSize: '500 ml',
    mrp: '₹412.00',
    mfg: '18/07/2026',
    expiry: '17/07/2027',
    manufacturer: 'Amrit Dairy Co-op, Anand',
    fssai: '10012001000901',
    customerCare: '079-1234-8800',
    country: 'India',
    barcode: '8901234560035',
    ingredients: ['Cow milk fat'],
    allergens: ['Milk'],
    nutrition: {
      basis: 'per 100 g',
      energy: 897,
      protein: 0.0,
      carbs: 0.0,
      sugar: 0.0,
      fat: 99.8,
      satFat: 61.0,
      fibre: 0,
      sodium: 2,
    },
    passportId: 'PP-IN-7K4C-GHE3',
    status: 'review',
    foodFit: 34,
  },
]

const findingsByProduct = {
  'prd-kesar-dal': [
    {
      id: 'f1',
      status: 'pass',
      field: 'MRP',
      value: '₹168.00 (inclusive of all taxes)',
      ruleId: 'LM-PCR-2011-06-MRP',
      reason: 'MRP is present, rupee symbol is used, and tax-inclusive wording is visible.',
      evidence: { view: 'front', x: 58, y: 62, w: 28, h: 10, ocr: 'MRP Rs 168.00 (incl. of all taxes)' },
      confidence: 0.96,
    },
    {
      id: 'f2',
      status: 'pass',
      field: 'Net quantity',
      value: '1 kg',
      ruleId: 'LM-PCR-2011-06-QTY',
      reason: 'Net quantity is declared in SI unit on the principal display panel.',
      evidence: { view: 'front', x: 18, y: 70, w: 16, h: 8, ocr: 'NET QTY 1 kg' },
      confidence: 0.94,
    },
    {
      id: 'f3',
      status: 'pass',
      field: 'FSSAI licence',
      value: '10012021000123',
      ruleId: 'FSS-LD-2020-02',
      reason: 'FSSAI licence number is printed and matches 14-digit format.',
      evidence: { view: 'back', x: 12, y: 78, w: 40, h: 9, ocr: 'Lic. No. 10012021000123' },
      confidence: 0.91,
    },
    {
      id: 'f4',
      status: 'review',
      field: 'Veg logo',
      value: 'Not confidently detected',
      ruleId: 'FSS-LD-2020-VEG',
      reason: 'Green vegetarian mark is faint against the gold band. Flagged for human review, not a fail.',
      evidence: { view: 'front', x: 8, y: 10, w: 10, h: 10, ocr: '' },
      confidence: 0.46,
    },
    {
      id: 'f5',
      status: 'pass',
      field: 'Nutrition table',
      value: 'Present per 100 g',
      ruleId: 'FSS-LD-2020-NIP',
      reason: 'Energy, protein, carbohydrate, sugar, fat and sodium are declared.',
      evidence: { view: 'nutrition', x: 20, y: 18, w: 60, h: 55, ocr: 'NUTRITION INFORMATION per 100g' },
      confidence: 0.93,
    },
  ],
  'prd-peak-bar': [
    {
      id: 'f6',
      status: 'fail',
      field: 'MRP',
      value: 'Rs 99',
      ruleId: 'LM-PCR-2011-06-MRP',
      reason: 'Price is present but rupee symbol (₹) is missing and tax-inclusive wording is not detected.',
      evidence: { view: 'front', x: 62, y: 68, w: 22, h: 9, ocr: 'MRP Rs 99' },
      confidence: 0.88,
    },
    {
      id: 'f7',
      status: 'pass',
      field: 'Net quantity',
      value: '60 g',
      ruleId: 'LM-PCR-2011-06-QTY',
      reason: 'Net quantity is declared in grams.',
      evidence: { view: 'front', x: 14, y: 72, w: 14, h: 8, ocr: 'NET 60g' },
      confidence: 0.92,
    },
    {
      id: 'f8',
      status: 'pass',
      field: 'Ingredients',
      value: 'List present',
      ruleId: 'FSS-LD-2020-02',
      reason: 'Ingredient list is complete. Palm oil and added sugar are declared.',
      evidence: { view: 'back', x: 10, y: 22, w: 78, h: 28, ocr: 'INGREDIENTS: milk protein isolate, dates, cocoa, palm oil...' },
      confidence: 0.9,
    },
    {
      id: 'f9',
      status: 'review',
      field: 'Customer care',
      value: 'Email only',
      ruleId: 'LM-PCR-2011-06',
      reason: 'Email is present; a telephone number is not clearly extracted. Review recommended.',
      evidence: { view: 'back', x: 12, y: 80, w: 50, h: 8, ocr: 'support@peakfuel.example' },
      confidence: 0.71,
    },
  ],
  'prd-amrit-ghee': [
    {
      id: 'f10',
      status: 'pass',
      field: 'MRP / quantity',
      value: '₹412.00 · 500 ml',
      ruleId: 'LM-PCR-2011-06',
      reason: 'Price and net quantity declarations are present and consistent.',
      evidence: { view: 'front', x: 50, y: 66, w: 36, h: 14, ocr: 'MRP ₹412.00  NET 500 ml' },
      confidence: 0.95,
    },
    {
      id: 'f11',
      status: 'review',
      field: 'Best before vs use by',
      value: 'Two date formats detected',
      ruleId: 'FSS-LD-2020-02',
      reason: 'Pack shows both “Best before” and a lot date. No contradiction, but wording should be standardised.',
      evidence: { view: 'back', x: 18, y: 60, w: 48, h: 12, ocr: 'Best before 17/07/2027' },
      confidence: 0.77,
    },
    {
      id: 'f12',
      status: 'pass',
      field: 'Vegetarian logo',
      value: 'Green mark detected',
      ruleId: 'FSS-LD-2020-VEG',
      reason: 'Vegetarian identification mark is present on the principal panel.',
      evidence: { view: 'front', x: 8, y: 8, w: 12, h: 12, ocr: '' },
      confidence: 0.89,
    },
  ],
}

export const SCANS = [
  {
    id: 'scn-1042',
    productId: 'prd-kesar-dal',
    createdAt: '2026-10-18T09:12:00+05:30',
    actor: 'Apoorv Katyayan',
    role: 'consumer',
    images: ['front', 'back', 'nutrition', 'side'],
    ocrConfidence: 0.93,
    summary: '4 pass · 1 review · 0 fail',
  },
  {
    id: 'scn-1038',
    productId: 'prd-peak-bar',
    createdAt: '2026-10-16T16:40:00+05:30',
    actor: 'Apoorv Katyayan',
    role: 'consumer',
    images: ['front', 'back', 'nutrition'],
    ocrConfidence: 0.86,
    summary: '2 pass · 1 review · 1 fail',
  },
  {
    id: 'scn-1021',
    productId: 'prd-amrit-ghee',
    createdAt: '2026-10-12T11:05:00+05:30',
    actor: 'Raj Packaging',
    role: 'manufacturer',
    images: ['front', 'back'],
    ocrConfidence: 0.9,
    summary: '2 pass · 1 review · 0 fail',
  },
]

export const VERSIONS = {
  'prd-kesar-dal': [
    {
      id: 'v3',
      observed: '2026-10-18',
      note: 'Current pack — gold band reprint',
      changes: ['MRP updated from ₹162 to ₹168', 'FSSAI licence unchanged', 'Nutrition table identical'],
      similarity: 0.91,
    },
    {
      id: 'v2',
      observed: '2026-06-02',
      note: 'Summer pack',
      changes: ['Added bilingual Hindi quantity', 'Customer-care number updated'],
      similarity: 0.84,
    },
    {
      id: 'v1',
      observed: '2025-11-20',
      note: 'First observed version',
      changes: ['Baseline label captured'],
      similarity: 1,
    },
  ],
}

export const DEFAULT_PREFERENCES = {
  goals: ['higher-protein', 'lower-sugar'],
  avoid: ['palm oil', 'added sugar'],
  vegetarian: true,
  medicalDisclaimer: true,
}

export const ASSISTANT_THREADS = [
  {
    q: 'Why was the PeakFuel bar flagged?',
    a: 'The rule engine failed LM-PCR-2011-06-MRP because OCR read “MRP Rs 99” without the rupee symbol and without “inclusive of all taxes”. This is a deterministic check on extracted fields, not an LLM legal decision. Source: Packaged Commodities Rules, 2011 — Rule 6(1)(e).',
  },
  {
    q: 'Is Kesar Kitchen dal a good protein choice for my profile?',
    a: 'Against your selected preferences (higher protein, lower sugar, vegetarian), the extracted nutrition is 22.3 g protein and 2.1 g sugar per 100 g, with no declared animal ingredients. Food-fit score 86/100. This is preference matching, not medical advice.',
  },
]

export const ANALYTICS = {
  scansThisMonth: 128,
  passRate: 71,
  reviewRate: 21,
  failRate: 8,
  avgLatencySec: 18.4,
  ocrAccuracy: 91.2,
  fieldPrecision: 87.6,
  ruleRecall: 93.1,
}

export function findingsFor(productId) {
  return findingsByProduct[productId] ?? []
}

export function productById(id) {
  return PRODUCTS.find((p) => p.id === id)
}

export function productByPassport(code) {
  return PRODUCTS.find((p) => p.passportId === code)
}

export function ruleById(id) {
  return RULES.find((r) => r.id === id)
}

export function scoreFoodFit(product, prefs) {
  let score = 55
  const n = product.nutrition
  if (prefs.goals.includes('higher-protein') && n.protein >= 15) score += 18
  if (prefs.goals.includes('lower-sugar') && n.sugar <= 5) score += 16
  if (prefs.goals.includes('lower-sugar') && n.sugar > 15) score -= 18
  if (prefs.avoid.some((a) => product.ingredients.join(' ').toLowerCase().includes(a.toLowerCase()))) {
    score -= 22
  }
  if (prefs.vegetarian && product.allergens.includes('Milk') && product.category.includes('dairy')) {
    score -= 4
  }
  return Math.max(8, Math.min(98, score))
}
