import { useState } from 'react'
import {
  MapPin,
  Building2,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Globe2,
  CheckCircle2,
  Compass,
  PhoneCall
} from 'lucide-react'

export default function LocationsPage({ onNavigate }) {
  const [selectedHub, setSelectedHub] = useState('all')

  const hubs = [
    {
      id: 'dubai',
      name: 'Dubai Office',
      flag: '🇦🇪',
      emirate: 'Dubai, UAE',
      badge: 'Commercial & Freezone Hub',
      address: 'Dubai, United Arab Emirates',
      phone: '+971 50 653 5070',
      email: 'info@acetrix.com',
      hours: '09:00 to 18:00 All Week / Sunday Off',
      status: 'Open Now',
      jurisdictions: 'Dubai Mainland LLCs • DMCC • DIFC • JAFZA • DAFZA • Dubai South',
      specialties: [
        'Mainland & Freezone Statutory Annual Audits',
        'FTA Corporate Tax (9%) & VAT Compliance',
        'Financial Statements Preparation & Advisory',
        'Cloud Accounting & Workflow Automation',
      ],
      mapUrl: 'https://maps.google.com/?q=Dubai+UAE',
    },
    {
      id: 'india',
      name: 'India Office',
      flag: '🇮🇳',
      emirate: 'India Hub',
      badge: 'Operations & Delivery Hub',
      address: '294, Baba Home Communication, Anand Nagar, Netivali, Kalyan Shil Road, Opp. Metro Mall, Kalyan, Thane, Maharashtra - 421306, India',
      landmark: 'Opp. Metro Mall, Kalyan Shil Road',
      phone: '+91 77388 35070',
      email: 'info@acetrix.com',
      hours: '09:00 to 18:00 All Week / Sunday Off',
      status: 'Open Now',
      jurisdictions: 'Global Delivery & Offshore Processing Hub for GCC & International Practice',
      specialties: [
        'Accounting Automation & Software Customization',
        'Rapid Historical Backlog Reconstruction & Sorting',
        'High-Volume Daily Bank & POS Batch Reconciliations',
        'Cloud ERP Data Migration & Multi-Platform Bookkeeping',
      ],
      mapUrl: 'https://maps.google.com/?q=Metro+Mall+Kalyan+Shil+Road+Kalyan+Maharashtra',
    },
  ]

  const freezonesList = [
    { name: 'Jebel Ali Free Zone (Jafza)', emirate: 'Dubai', logo: '/images/jafza.jpg', desc: 'Premier logistics & trade hub in the Middle East.' },
    { name: 'Dubai Airport Freezone (DAFZA)', emirate: 'Dubai', logo: '/images/dafza.jpg', desc: 'Aviation, electronics, and global commerce hub.' },
    { name: 'Abu Dhabi Global Market (ADGM)', emirate: 'Abu Dhabi', logo: '/images/abu-dhabi-global-market.jpg', desc: 'Leading international financial center.' },
    { name: 'International Free Zone Authority (IFZA)', emirate: 'Dubai', logo: '/images/IFZA.jpg', desc: 'Dynamic commercial ecosystem in Dubai Silicon Oasis.' },
    { name: 'Umm Al Quwain Free Trade Zone (UAQ FTZ)', emirate: 'Northern Emirates', logo: '/images/uaq.jpg', desc: 'Cost-effective SME hub with strategic maritime links.' },
    { name: 'Dubai Studio City & Media Freezones', emirate: 'Dubai', logo: '/images/studio-city.jpg', desc: 'Broadcasting, film, and digital creative hub.' },
    { name: 'Abu Dhabi Ports & KEZAD', emirate: 'Abu Dhabi', logo: '/images/abudhabi-ports.jpg', desc: 'Integrated industrial trade zone and Khalifa Port.' },
  ]

  const filteredHubs = selectedHub === 'all' ? hubs : hubs.filter((h) => h.id === selectedHub)

  return (
    <div className="inner-page locations-page">
      {/* Page Hero */}
      <section className="inner-hero">
        <div className="inner-hero-backdrop" aria-hidden="true" />
        <div className="container inner-hero-content">
          <div className="inner-hero-top-bar">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <a href="#/" onClick={(e) => { e.preventDefault(); onNavigate('home') }}>Home</a>
              <ChevronRight size={14} />
              <span aria-current="page">Locations</span>
            </nav>

            <span className="inner-hero-badge">
              <Compass size={15} />
              <span>LOCALIZED ACCESSIBILITY • GLOBAL SCALE</span>
            </span>
          </div>

          <h1 className="inner-hero-title">
            Our Regional Presence & <span>Offices</span>
          </h1>

          <p className="inner-hero-lead">
            With direct partner advisory in Dubai, backed by our dedicated delivery center in India, Acetrix brings high-touch accounting and compliance advisory to your business.
          </p>

          <div className="hub-filter-tabs">
            <button
              type="button"
              className={`hub-filter-btn ${selectedHub === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedHub('all')}
            >
              All Offices (2)
            </button>
            {hubs.map((h) => (
              <button
                key={h.id}
                type="button"
                className={`hub-filter-btn ${selectedHub === h.id ? 'active' : ''}`}
                onClick={() => setSelectedHub(h.id)}
              >
                <span>{h.flag}</span>
                <span>{h.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3D UAE Map Featured Section */}
      <section className="section map-feature-section">
        <div className="container">
          <div className="map-showcase-wrapper">
            <div className="map-showcase-image-box">
              <img
                src="/images/uae-presence-map-new.jpg"
                alt="Acetrix 3D UAE Relief Map showcasing Dubai & India Hubs"
                className="map-feature-img"
              />
              <div className="map-live-indicator">
                <span className="pulse-ring" />
                <span>Live UAE Regulatory & Advisory Grid</span>
              </div>
            </div>

            <div className="map-showcase-legend">
              <div className="legend-head">
                <Building2 size={20} className="legend-icon" />
                <div>
                  <h3>Dual-Shore Footprint</h3>
                  <p>Coordinated regional advisory with offshore speed</p>
                </div>
              </div>

              <div className="legend-items">
                <div className="legend-item">
                  <span className="pin-badge uae-pin">🇦🇪</span>
                  <div>
                    <strong>Dubai Office (UAE)</strong>
                    <p>Client onboarding, FTA tax filings, audit representations, and freezone authority filings.</p>
                  </div>
                </div>
                <div className="legend-item">
                  <span className="pin-badge ind-pin">🇮🇳</span>
                  <div>
                    <strong>India Office</strong>
                    <p>High-volume bookkeeping, continuous bank statement reconciliation, software configuration, and backlog sorting.</p>
                  </div>
                </div>
              </div>

              <div className="legend-footer">
                <ShieldCheck size={18} />
                <span>Approved Financial & Tax Specialists across UAE and India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Office Cards Grid */}
      <section className="section office-cards-section">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow">OFFICE DIRECTORY</span>
            <h2>Visit or Connect with Our Offices</h2>
            <p>Direct contact numbers, operational hours, and specialized practice leaders at each office.</p>
          </div>

          <div className="offices-grid">
            {filteredHubs.map((hub) => (
              <div className="office-card" key={hub.id}>
                <div className="office-card-header">
                  <div className="office-title-row">
                    <span className="office-flag">{hub.flag}</span>
                    <div>
                      <span className="office-badge-text">{hub.badge}</span>
                      <h3>{hub.name}</h3>
                    </div>
                  </div>
                  <span className="office-status-pill">{hub.status}</span>
                </div>

                <div className="office-details-list">
                  <div className="office-detail-row">
                    <MapPin size={18} className="office-icon" />
                    <div>
                      <strong>Address:</strong>
                      <p>{hub.address}</p>
                      {hub.landmark && <small className="landmark-text">📍 Landmark: {hub.landmark}</small>}
                    </div>
                  </div>

                  <div className="office-detail-row">
                    <Clock size={18} className="office-icon" />
                    <div>
                      <strong>Hours:</strong>
                      <p>{hub.hours}</p>
                    </div>
                  </div>

                  <div className="office-detail-row">
                    <Compass size={18} className="office-icon" />
                    <div>
                      <strong>Jurisdictions Covered:</strong>
                      <p className="jurisdiction-text">{hub.jurisdictions}</p>
                    </div>
                  </div>
                </div>

                <div className="office-specialties">
                  <strong>Key Practice Specializations:</strong>
                  <ul>
                    {hub.specialties.map((spec, i) => (
                      <li key={i}>
                        <CheckCircle2 size={13} className="spec-check" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="office-actions">
                  <a href={`tel:${hub.phone.replace(/\s+/g, '')}`} className="office-call-btn">
                    <Phone size={15} />
                    <span>{hub.phone}</span>
                  </a>
                  <a
                    href={hub.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="office-map-link"
                  >
                    <span>View Map</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Freezones Approval Grid */}
      <section className="section approved-freezones-section">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow">FREEZONE AUDIT RECOGNITION</span>
            <h2>Approved & Registered Across UAE Major Freezones</h2>
            <p>Our audit reports are officially accepted by Freezone Registrars, Banks, and Federal Tax Authorities.</p>
          </div>

          <div className="freezone-cards-grid">
            {freezonesList.map((fz) => (
              <div className="freezone-box-card" key={fz.name}>
                <div className="fz-box-logo">
                  <img src={fz.logo} alt={fz.name} loading="lazy" />
                </div>
                <h4>{fz.name}</h4>
                <span className="fz-emirate-tag">{fz.emirate}</span>
                <p>{fz.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Meeting Scheduler CTA */}
      <section className="about-cta-strip">
        <div className="container cta-flex">
          <div className="cta-text">
            <h3>Prefer an In-Person Meeting at Our Dubai, Abu Dhabi, or Sharjah Office?</h3>
            <p>Schedule a private boardroom consultation with our Practice Directors.</p>
          </div>
          <div className="cta-actions">
            <a
              href="#/contact"
              className="button button-primary"
              onClick={(e) => { e.preventDefault(); onNavigate('contact') }}
            >
              Book Office Visit <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

