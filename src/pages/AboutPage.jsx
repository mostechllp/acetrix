import { useState } from 'react'
import {
  ShieldCheck,
  Target,
  Eye,
  Award,
  ArrowRight,
  CheckCircle2,
  Building2,
  Users,
  Briefcase,
  TrendingUp,
  Landmark,
  Scale,
  Sparkles,
  ChevronRight,
  Globe2,
  Clock,
  FileCheck2,
  PhoneCall
} from 'lucide-react'

export default function AboutPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('mission')

  const milestones = [
    {
      year: '2018',
      title: 'Foundation in the UAE',
      desc: 'Established with a core team of Chartered Accountants dedicated to delivering institutional-grade bookkeeping and compliance advisory.',
    },
    {
      year: '2020',
      title: 'Dual-Shore Operations Launch',
      desc: 'Inaugurated our dedicated high-capacity Delivery Center in India to deliver 24/7 turnaround, high-volume reconciliations, and backlog clearing.',
    },
    {
      year: '2022',
      title: 'Corporate Tax Advisory Taskforce',
      desc: 'Formed a specialized regulatory desk ahead of UAE Federal Decree-Law No. 47 of 2022, assisting hundreds of firms with impact assessments.',
    },
    {
      year: '2024',
      title: 'Pan-UAE Freezone Expansion',
      desc: 'Secured official audit approvals across major freezones including DMCC, DIFC, DAFZA, JAFZA, ADGM, IFZA, and Northern Emirates.',
    },
    {
      year: 'Today',
      title: 'Multidisciplinary Advisory Leader',
      desc: 'Stewarding 500+ active enterprises across 8 industry verticals with an unblemished 99.8% on-time statutory filing record.',
    },
  ]

  const pillars = {
    mission: {
      title: 'Our Mission',
      tagline: 'Automate Your Accounts. Ace Your Finances.',
      icon: Target,
      desc: 'To empower commercial enterprises across Dubai, India, and global corridors with uncompromising accounting integrity, proactive FTA tax compliance, and strategic financial clarity that shields them from regulatory liabilities and unlocks sustainable profitability.',
      bullets: [
        'Deliver auditor-ready financial reporting adhering strictly to IFRS frameworks.',
        'Eliminate tax penalties through proactive, multi-tier FTA verification.',
        'Bridge localized advisory with scalable offshore efficiency.',
      ],
    },
    vision: {
      title: 'Our Vision',
      tagline: 'The Gold Standard of UAE Accounting & Advisory.',
      icon: Eye,
      desc: 'To be the most trusted, agile, and forward-thinking financial advisory firm in the Middle East, recognized for setting the benchmark in cross-border tax compliance, transparent reporting, and digital accounting transformation.',
      bullets: [
        'Pioneer technology-driven continuous audit and automated reconciliations.',
        'Expand regional footprint across GCC economic gateways.',
        'Cultivate a multidisciplinary team of world-class chartered professionals.',
      ],
    },
    values: {
      title: 'Our Core Values',
      tagline: 'The Guiding Principles Behind Every Decision.',
      icon: Award,
      desc: 'Our work is anchored in foundational ethics that prioritize our clients’ long-term security, complete regulatory compliance, and total transparency.',
      bullets: [
        'Absolute Integrity: Unwavering commitment to truthful, compliant disclosures.',
        'Regulatory Vigilance: Anticipating FTA decrees before they become liabilities.',
        'Client-Centric Agility: Rapid response times and customized solutions.',
        'Dual-Shore Synergies: Local strategic presence paired with global scale.',
      ],
    },
  }

  const credentials = [
    { title: 'FTA Registered Tax Agency', detail: 'Authorized for Corporate Tax & VAT representations' },
    { title: 'IFRS Statutory Reporting', detail: 'Compliant with International Financial Reporting Standards' },
    { title: 'Freezone Approved Auditors', detail: 'Approved in DMCC, DIFC, DAFZA, JAFZA, ADGM & IFZA' },
    { title: 'Strict 4-Eye Review Quality Policy', detail: 'Partner-led oversight on every regulatory filing' },
  ]

  const freezoneLogos = [
    { name: 'UAQ Free Trade Zone', file: '/images/uaq.jpg' },
    { name: 'Jebel Ali Free Zone (Jafza)', file: '/images/jafza.jpg' },
    { name: 'Dubai Airport Freezone (DAFZA)', file: '/images/dafza.jpg' },
    { name: 'Dubai Studio City', file: '/images/studio-city.jpg' },
    { name: 'International Free Zone Authority (IFZA)', file: '/images/IFZA.jpg' },
    { name: 'Abu Dhabi Global Market (ADGM)', file: '/images/abu-dhabi-global-market.jpg' },
    { name: 'Abu Dhabi Ports & KEZAD', file: '/images/abudhabi-ports.jpg' },
  ]

  return (
    <div className="inner-page about-page">
      {/* Page Hero */}
      <section className="inner-hero">
        <div className="inner-hero-backdrop" aria-hidden="true" />
        <div className="container inner-hero-content">
          <div className="inner-hero-top-bar">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <a href="#/" onClick={(e) => { e.preventDefault(); onNavigate('home') }}>Home</a>
              <ChevronRight size={14} />
              <span aria-current="page">About Us</span>
            </nav>

            <span className="inner-hero-badge">
              <ShieldCheck size={15} />
              <span>WHO WE ARE & OUR STRATEGIC FOUNDATIONS</span>
            </span>
          </div>

          <h1 className="inner-hero-title">
            The Architects of <span>Financial Clarity</span> & Growth in the UAE
          </h1>

          <p className="inner-hero-lead">
            Founded on the pillars of uncompromising precision and regulatory vigilance, Acetrix bridges on-the-ground UAE partner advisory with scalable offshore execution to protect and elevate ambitious enterprises.
          </p>

          <div className="inner-hero-stats">
            <div className="hero-stat-card">
              <strong>500+</strong>
              <span>Enterprises Advised</span>
            </div>
            <div className="hero-stat-card">
              <strong>99.8%</strong>
              <span>On-Time FTA Filings</span>
            </div>
            <div className="hero-stat-card">
              <strong>4 Hubs</strong>
              <span>Dubai • Abu Dhabi • Sharjah • India</span>
            </div>
            <div className="hero-stat-card">
              <strong>15+ Yrs</strong>
              <span>Leadership Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Genesis Section */}
      <section className="section about-story-section">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-text">
              <span className="eyebrow">OUR STORY & HERITAGE</span>
              <h2>Built to Navigate Complexity with Absolute Certainty</h2>
              <p className="story-lead">
                In an era of sweeping regulatory reforms across the United Arab Emirates—from mandatory FTA VAT compliance to the introduction of the 9% Corporate Tax framework—businesses require more than conventional bookkeepers.
              </p>
              <p>
                Acetrix was established to bridge this vital gap. Our founders recognized that modern enterprises need strategic financial advisors who comprehend the nuanced complexities of UAE Mainland and Freezone jurisdictions, paired with the operational bandwidth to manage high-volume transactional accounts seamlessly.
              </p>
              <p>
                Today, operating across physical hubs in <strong>Dubai, Abu Dhabi, Sharjah, and our state-of-the-art India Delivery Center</strong>, Acetrix provides dual-shore agility: localized boardroom advisory supported by 24-hour offshore processing power.
              </p>

              <div className="story-highlights-list">
                <div className="story-highlight-item">
                  <CheckCircle2 size={18} className="check-icon" />
                  <div>
                    <strong>Partner-Led Client Engagements</strong>
                    <p>Direct access to Senior Chartered Accountants and Tax Specialists.</p>
                  </div>
                </div>
                <div className="story-highlight-item">
                  <CheckCircle2 size={18} className="check-icon" />
                  <div>
                    <strong>Zero-Penalty Compliance Guarantee</strong>
                    <p>Rigorous multi-layer audits before any FTA or freezone submission.</p>
                  </div>
                </div>
                <div className="story-highlight-item">
                  <CheckCircle2 size={18} className="check-icon" />
                  <div>
                    <strong>Dual-Shore Delivery Advantage</strong>
                    <p>Rapid backlog resolution and cost-efficient bookkeeping scalability.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-timeline-card">
              <div className="timeline-card-header">
                <Clock size={20} className="timeline-header-icon" />
                <div>
                  <h3>Our Growth Journey</h3>
                  <p>Milestones that shaped our practice</p>
                </div>
              </div>

              <div className="milestones-timeline">
                {milestones.map((m, idx) => (
                  <div className="milestone-row" key={m.year}>
                    <div className="milestone-marker">
                      <span className="marker-dot" />
                      {idx < milestones.length - 1 && <span className="marker-line" />}
                    </div>
                    <div className="milestone-content">
                      <span className="milestone-year">{m.year}</span>
                      <h4>{m.title}</h4>
                      <p>{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Foundations: Mission, Vision, Values */}
      <section className="section foundations-interactive-section">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow">STRATEGIC PILLARS</span>
            <h2>Our Core Foundations</h2>
            <p>The uncompromising standards that guide every ledger, report, and audit.</p>
          </div>

          <div className="pillar-tabs-nav" role="tablist">
            {Object.keys(pillars).map((key) => {
              const p = pillars[key]
              const Icon = p.icon
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === key}
                  className={`pillar-tab-btn ${activeTab === key ? 'active' : ''}`}
                  onClick={() => setActiveTab(key)}
                >
                  <Icon size={18} />
                  <span>{p.title}</span>
                </button>
              )
            })}
          </div>

          <div className="pillar-display-card">
            {(() => {
              const current = pillars[activeTab]
              const Icon = current.icon
              return (
                <div className="pillar-card-content">
                  <div className="pillar-card-badge">
                    <Icon size={28} />
                  </div>
                  <span className="pillar-tagline">{current.tagline}</span>
                  <h3>{current.title}</h3>
                  <p className="pillar-desc">{current.desc}</p>

                  <div className="pillar-bullets-grid">
                    {current.bullets.map((b, i) => (
                      <div className="pillar-bullet-card" key={i}>
                        <CheckCircle2 size={16} className="bullet-check" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      </section>

      {/* The Acetrix Dual-Shore Advantage */}
      <section className="section dual-shore-section">
        <div className="container">
          <div className="dual-shore-grid">
            <div className="dual-shore-info">
              <span className="eyebrow">OPERATIONAL EXCELLENCE</span>
              <h2>The Dual-Shore Delivery Model</h2>
              <p className="dual-shore-desc">
                Traditional firms either struggle with limited local capacity or lack on-the-ground UAE regulatory expertise. Acetrix uniquely balances both.
              </p>

              <div className="shore-comparison-cards">
                <div className="shore-card uae-shore">
                  <div className="shore-badge">
                    <Building2 size={20} />
                    <span>UAE Local Presence</span>
                  </div>
                  <h4>Boardroom & Regulatory Advisory</h4>
                  <ul>
                    <li>Direct partner meetings across Dubai, Abu Dhabi & Sharjah.</li>
                    <li>Official FTA registered agent representation.</li>
                    <li>Mainland, Freezone & banking audit defense.</li>
                    <li>Strategic corporate restructuring & tax planning.</li>
                  </ul>
                </div>

                <div className="shore-card offshore-shore">
                  <div className="shore-badge">
                    <Globe2 size={20} />
                    <span>India Delivery Center</span>
                  </div>
                  <h4>Scalable Execution & Processing</h4>
                  <ul>
                    <li>24/7 transaction processing & automated bank reconciliation.</li>
                    <li>Rapid historical backlog cleanup within days.</li>
                    <li>Multi-platform bookkeeping (Zoho, QuickBooks, Xero, Tally).</li>
                    <li>Substantial operational cost savings passed directly to clients.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="dual-shore-stats-box">
              <h3>Quality & Assurance Pledge</h3>
              <p>Every account processed through our dual-shore infrastructure undergoes our strict multi-tier review cycle:</p>

              <div className="quality-steps">
                <div className="q-step">
                  <span className="step-num">01</span>
                  <div>
                    <strong>Initial Processing & Reconciliation</strong>
                    <small>Accurate classification by dedicated account specialists.</small>
                  </div>
                </div>
                <div className="q-step">
                  <span className="step-num">02</span>
                  <div>
                    <strong>Senior Audit Review (4-Eye Principle)</strong>
                    <small>Comprehensive ledger review and IFRS compliance check.</small>
                  </div>
                </div>
                <div className="q-step">
                  <span className="step-num">03</span>
                  <div>
                    <strong>Partner Sign-Off & FTA Submission</strong>
                    <small>Final sign-off by Licensed UAE Partner and Tax Agent.</small>
                  </div>
                </div>
              </div>

              <div className="guarantee-pill">
                <ShieldCheck size={18} />
                <span>100% Confidentiality & Non-Disclosure Protected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Freezones & Accreditations Banner */}
      <section className="section about-accreditations-section">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow">OFFICIAL ACCREDITATIONS</span>
            <h2>Approved Across Major UAE Freezones & Authorities</h2>
            <p>Licensed, recognized, and approved by regulatory bodies, freezones, and major UAE banking institutions.</p>
          </div>

          <div className="freezone-ribbon-grid">
            {freezoneLogos.map((fz) => (
              <div className="fz-logo-card" key={fz.name} title={fz.name}>
                <img src={fz.file} alt={fz.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="about-cta-strip">
        <div className="container cta-flex">
          <div className="cta-text">
            <h3>Ready to Experience Financial Clarity with Acetrix?</h3>
            <p>Schedule a confidential consultation with one of our Senior Advisory Partners today.</p>
          </div>
          <div className="cta-actions">
            <a
              href="#/contact"
              className="button button-primary"
              onClick={(e) => { e.preventDefault(); onNavigate('contact') }}
            >
              Book Advisory Consultation <ArrowRight size={16} />
            </a>
            <a
              href="https://wa.me/971506535070"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
            >
              <PhoneCall size={16} /> WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

