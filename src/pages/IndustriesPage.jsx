import { useState } from 'react'
import {
  Building2,
  ShoppingCart,
  Truck,
  Laptop,
  Stethoscope,
  HardHat,
  Utensils,
  Globe2,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  FileCheck2,
  Briefcase
} from 'lucide-react'

export default function IndustriesPage({ onNavigate }) {
  const [selectedIndustry, setSelectedIndustry] = useState('all')

  const industries = [
    {
      id: 'real-estate',
      title: 'Real Estate & Property Development',
      icon: Building2,
      badge: 'RERA & ESCROW COMPLIANCE',
      overview: 'Real estate developers and brokerage firms in the UAE operate under intense regulatory scrutiny from the Real Estate Regulatory Agency (RERA) and Dubai Land Department (DLD).',
      challenges: [
        'Mandatory annual escrow trust account audits for off-plan development projects.',
        'Complex IFRS 15 revenue recognition based on construction milestone completion.',
        'VAT treatment on mixed-use, commercial leases vs residential exemptions.',
      ],
      solutions: [
        'RERA-approved escrow account audits and project financial progress certificates.',
        'Cash flow modeling for multi-year project development phases.',
        'Brokerage commission tracking and agent VAT billing compliance.',
      ],
      stat: 'AED 650M+',
      statLabel: 'Developer Project Escrows Audited',
    },
    {
      id: 'trading',
      title: 'General Trading, Import & Export',
      icon: Globe2,
      badge: 'CROSS-BORDER CUSTOMS & TRANSIT VAT',
      overview: 'High-volume general merchants, commodities traders, and distributors require rigorous inventory valuation and cross-border customs reconciliation.',
      challenges: [
        'Matching Dubai Customs declarations (Bayan) with FTA VAT return inputs.',
        'Foreign exchange fluctuations across USD, EUR, AED, and emerging market currencies.',
        'Letters of Credit (LC), trade finance, and bank loan covenant reporting.',
      ],
      solutions: [
        'Automated customs-to-VAT monthly reconciliation preventing FTA audit queries.',
        'FIFO and weighted average inventory cost tracking in multi-warehouse setups.',
        'Bank-compliant audited financials for trade finance credit renewals.',
      ],
      stat: '100%',
      statLabel: 'Customs VAT Clearance Rate',
    },
    {
      id: 'logistics',
      title: 'Logistics, Shipping & Maritime',
      icon: Truck,
      badge: 'FREEZONE WAREHOUSING & FLEET ASSETS',
      overview: 'Freight forwarders, third-party logistics (3PL) operators, and maritime transport firms operate in bonded freezones with complex international freight rules.',
      challenges: [
        'Zero-rated international freight documentation vs local domestic delivery VAT.',
        'Heavy fixed-asset depreciation schedules for fleets, containers, and warehouses.',
        'Freezone bonded storage compliance and cross-emirate movement reporting.',
      ],
      solutions: [
        'Comprehensive freight forwarding VAT audit trails and substantiations.',
        'Componentized fixed asset depreciation under IFRS standards.',
        'Fleet operating cost unit economics and fuel surcharge margin modeling.',
      ],
      stat: '45+',
      statLabel: 'Active Logistics & Shipping Clients',
    },
    {
      id: 'retail',
      title: 'Retail, E-Commerce & F&B',
      icon: ShoppingCart,
      badge: 'OMNICHANNEL POS & PAYMENT GATEWAYS',
      overview: 'Consumer-facing retail stores, multi-location restaurant franchises, and direct-to-consumer (D2C) online merchants generate tens of thousands of micro-transactions monthly.',
      challenges: [
        'Daily reconciliation of credit card, Tabby, Tamara, and Cash-on-Delivery (COD) batches.',
        'Promotional discounts, gift card liabilities, and seasonal inventory shrinkage.',
        'Municipality fees and tourism taxes in prime shopping malls and tourist zones.',
      ],
      solutions: [
        'Automated daily POS-to-accounting integration (Shopify, WooCommerce, Odoo).',
        'End-of-day cash drawer discrepancy audits and inventory shrinkage tracking.',
        'Timely quarterly VAT return filings consolidating in-store and online channels.',
      ],
      stat: '1.2M+',
      statLabel: 'Annual Retail Invoices Processed',
    },
    {
      id: 'tech',
      title: 'Technology, SaaS & Startups',
      icon: Laptop,
      badge: '0% QFZP ELIGIBILITY & VC REPORTING',
      overview: 'High-growth software companies, fintech platforms, and venture-backed startups based in DIFC, ADGM, or DAFZA require investor-grade financial rigor.',
      challenges: [
        'Capitalization of software development R&D costs under IAS 38.',
        'Maintaining strict Qualifying Free Zone Person (QFZP) status for 0% Corporate Tax.',
        'Managing cross-border software licenses, withholding taxes, and subscription MRR.',
      ],
      solutions: [
        'Board-ready Monthly Recurring Revenue (MRR) and Unit Economics reporting.',
        'Freezone substance documentation and transfer pricing local file preparation.',
        'Dual-shore bookkeeping offering seed/Series-A startups maximum runway.',
      ],
      stat: '0% Tax',
      statLabel: 'QFZP Freezone Tax Preserved',
    },
    {
      id: 'healthcare',
      title: 'Healthcare, Clinics & Medical Centers',
      icon: Stethoscope,
      badge: 'MOHAP / DHA REGULATORY ADVISORY',
      overview: 'Medical polyclinics, dental centers, pharmacies, and diagnostic laboratories must balance stringent health authority regulations with complex insurance provider payouts.',
      challenges: [
        'Reconciling delayed insurance reimbursements (Oman Insurance, NextCare, Daman).',
        'Tax treatment: zero-rated basic healthcare vs standard-rated cosmetic procedures.',
        'Doctor profit-sharing and commission calculations on procedure volume.',
      ],
      solutions: [
        'Specialized medical billing and insurance deduction reconciliation.',
        'Clear demarcation of VAT taxable vs exempt medical treatment revenues.',
        'Doctor payout verification and internal control SOPs for medical consumables.',
      ],
      stat: '30+',
      statLabel: 'Medical Clinics Stewarded',
    },
    {
      id: 'contracting',
      title: 'Construction & Contracting',
      icon: HardHat,
      badge: 'PERCENTAGE OF COMPLETION & RETENTIONS',
      overview: 'Main contractors, MEP specialists, and civil engineering companies face lumpy project cash flows, retention money held by developers, and variation claim disputes.',
      challenges: [
        'Percentage-of-completion revenue recognition under IFRS 15.',
        'Tracking long-term retention receivables and supplier performance guarantees.',
        'Job-order costing across multiple active site locations.',
      ],
      solutions: [
        'Project-by-project P&L and work-in-progress (WIP) valuation audits.',
        'Retention money ledgers and aging schedules for liquidity forecasting.',
        'Subcontractor payment certification and VAT compliance checks.',
      ],
      stat: 'AED 380M+',
      statLabel: 'Contracting Revenue Audited',
    },
    {
      id: 'hospitality',
      title: 'Hospitality, Tourism & Events',
      icon: Utensils,
      badge: 'MUNICIPALITY & TOURISM FEES',
      overview: 'Boutique hotels, event organizers, and catering companies deal with high seasonality, cash drawer handling, and complex municipal tourism levies.',
      challenges: [
        'Accurate computation and reporting of Tourism Dirham and Dubai Municipality fees.',
        'Food & beverage cost of goods sold (COGS) variance and kitchen wastage.',
        'Managing advance deposits for multi-day corporate conferences and exhibitions.',
      ],
      solutions: [
        'Hospitality PMS integration (Opera, Micros) with back-office accounting.',
        'Recipe cost modeling, menu engineering, and F&B variance audits.',
        'Advance ticket sale VAT treatment and sponsorship revenue recognition.',
      ],
      stat: '99.9%',
      statLabel: 'Municipal Compliance Accuracy',
    },
  ]

  const filteredIndustries = selectedIndustry === 'all'
    ? industries
    : industries.filter((ind) => ind.id === selectedIndustry)

  return (
    <div className="inner-page industries-page">
      {/* Page Hero */}
      <section className="inner-hero">
        <div className="inner-hero-backdrop" aria-hidden="true" />
        <div className="container inner-hero-content">
          <div className="inner-hero-top-bar">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <a href="#/" onClick={(e) => { e.preventDefault(); onNavigate('home') }}>Home</a>
              <ChevronRight size={14} />
              <span aria-current="page">Industries</span>
            </nav>

            <span className="inner-hero-badge">
              <Briefcase size={15} />
              <span>SECTOR-SPECIFIC FINANCIAL ARCHITECTURES</span>
            </span>
          </div>

          <h1 className="inner-hero-title">
            Tailored Accounting & Audit for <span>UAE Key Sectors</span>
          </h1>

          <p className="inner-hero-lead">
            Every industry operates under distinct regulatory mandates, VAT rules, and operational rhythms. Acetrix delivers deep sector knowledge to shield your business from compliance risks.
          </p>

          <div className="industry-filter-scroll">
            <button
              type="button"
              className={`ind-pill-btn ${selectedIndustry === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedIndustry('all')}
            >
              All Sectors (8)
            </button>
            {industries.map((ind) => (
              <button
                key={ind.id}
                type="button"
                className={`ind-pill-btn ${selectedIndustry === ind.id ? 'active' : ''}`}
                onClick={() => setSelectedIndustry(ind.id)}
              >
                <span>{ind.title.split(',')[0].split('&')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Industries Showcase */}
      <section className="section industries-showcase-section">
        <div className="container">
          <div className="industries-cards-layout">
            {filteredIndustries.map((ind) => {
              const Icon = ind.icon
              return (
                <div className="industry-sector-card" key={ind.id}>
                  <div className="ind-card-top">
                    <div className="ind-icon-box">
                      <Icon size={26} />
                    </div>
                    <div className="ind-header-info">
                      <span className="ind-badge-pill">{ind.badge}</span>
                      <h3>{ind.title}</h3>
                    </div>
                    <div className="ind-stat-badge">
                      <strong>{ind.stat}</strong>
                      <small>{ind.statLabel}</small>
                    </div>
                  </div>

                  <p className="ind-overview-p">{ind.overview}</p>

                  <div className="ind-challenges-solutions-grid">
                    <div className="ind-col ind-challenges">
                      <strong>Key Regulatory Hurdles:</strong>
                      <ul>
                        {ind.challenges.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="ind-col ind-solutions">
                      <strong>The Acetrix Solution:</strong>
                      <ul>
                        {ind.solutions.map((s, i) => (
                          <li key={i}>
                            <CheckCircle2 size={14} className="sol-check" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="ind-card-action">
                    <a
                      href="#/contact"
                      className="ind-cta-link"
                      onClick={(e) => { e.preventDefault(); onNavigate('contact') }}
                    >
                      <span>Inquire for {ind.title}</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sector Compliance Table / Insights */}
      <section className="section industry-matrix-section">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow">REGULATORY COMPARISON</span>
            <h2>UAE Regulatory Landscape by Sector</h2>
            <p>A quick summary of statutory compliance requirements across primary business sectors.</p>
          </div>

          <div className="matrix-table-card">
            <div className="table-responsive">
              <table className="compliance-table">
                <thead>
                  <tr>
                    <th>Industry Vertical</th>
                    <th>Standard VAT Rate</th>
                    <th>Corporate Tax (9%) Scope</th>
                    <th>Statutory Audit Requirement</th>
                    <th>Primary Regulatory Body</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Real Estate & Property</strong></td>
                    <td>0% / 5% (Mixed)</td>
                    <td>Standard 9% / Escrow rules</td>
                    <td>Mandatory for RERA / Developers</td>
                    <td>RERA / DLD / FTA</td>
                  </tr>
                  <tr>
                    <td><strong>Trading & Import/Export</strong></td>
                    <td>5% (Customs linked)</td>
                    <td>Standard 9% (SBR eligible)</td>
                    <td>Required for Bank & Freezones</td>
                    <td>Dubai Customs / FTA</td>
                  </tr>
                  <tr>
                    <td><strong>Technology & SaaS</strong></td>
                    <td>5% / 0% Export</td>
                    <td>0% QFZP Eligible if in Freezone</td>
                    <td>Mandatory for Freezone licenses</td>
                    <td>DIFC / ADGM / DAFZA / FTA</td>
                  </tr>
                  <tr>
                    <td><strong>Healthcare & Clinics</strong></td>
                    <td>0% (Basic Health) / 5%</td>
                    <td>Standard 9%</td>
                    <td>Mandatory for Health Authorities</td>
                    <td>MOHAP / DHA / DOH / FTA</td>
                  </tr>
                  <tr>
                    <td><strong>Construction & Contracting</strong></td>
                    <td>5% Standard</td>
                    <td>Standard 9%</td>
                    <td>Required for Tenders & Bank lines</td>
                    <td>Municipalities / Ministry of Economy</td>
                  </tr>
                  <tr>
                    <td><strong>Retail & E-Commerce</strong></td>
                    <td>5% Standard</td>
                    <td>Standard 9% (SBR eligible)</td>
                    <td>Mandatory for Audited renewals</td>
                    <td>Department of Economy & Tourism</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="about-cta-strip">
        <div className="container cta-flex">
          <div className="cta-text">
            <h3>Speak to an Industry Practice Leader</h3>
            <p>Schedule a targeted discussion tailored to your industry’s specific tax and accounting requirements.</p>
          </div>
          <div className="cta-actions">
            <a
              href="#/contact"
              className="button button-primary"
              onClick={(e) => { e.preventDefault(); onNavigate('contact') }}
            >
              Consult an Industry Specialist <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

