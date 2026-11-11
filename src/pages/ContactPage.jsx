import { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  MessageCircle,
  Building2,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  PhoneCall,
  AlertCircle,
  Sparkles
} from 'lucide-react'

export default function ContactPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Accounting & Bookkeeping',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [activeFaq, setActiveFaq] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated smooth submission
    setSubmitted(true)
  }

  const officeLocations = [
    {
      name: 'Dubai Office',
      flag: '🇦🇪',
      address: 'Dubai, United Arab Emirates',
      phone: '+971 50 653 5070',
      email: 'info@acetrix.ae',
      hours: '09:00 to 18:00 All Week / Sunday Off',
      status: 'Open Now',
    },
    {
      name: 'India Office',
      flag: '🇮🇳',
      address: '294, Baba Home Communication, Anand Nagar, Netivali, Kalyan Shil Road, Opp. Metro Mall, Kalyan, Thane, Maharashtra - 421306, India',
      landmark: 'Opp. Metro Mall, Kalyan Shil Road',
      phone: '+91 77388 35070',
      email: 'info@acetrix.com',
      hours: '09:00 to 18:00 All Week / Sunday Off',
      status: 'Open Now',
    },
  ]

  const faqs = [
    {
      q: 'What information should I have ready for our initial consultation?',
      a: 'A general overview of your entity structure (Mainland vs Freezone), current accounting software, estimated annual turnover, and any immediate regulatory deadlines (such as impending Corporate Tax registration or VAT filing dates) will help us tailor our recommendations immediately.',
    },
    {
      q: 'How fast can Acetrix clear historical accounting backlogs?',
      a: 'Depending on volume, our dual-shore team can typically reconstruct and reconcile 6 to 12 months of unorganized backlog accounts in 7 to 14 business days, delivering an auditor-ready package well before your filing deadline.',
    },
    {
      q: 'Is my financial data strictly confidential under UAE law?',
      a: 'Yes. All client records are safeguarded under strict Non-Disclosure Agreements (NDAs), encrypted bank-grade cloud storage, and stringent UAE Federal Data Protection compliance.',
    },
    {
      q: 'Can you assist if we have received an official FTA Tax Audit or Penalty notice?',
      a: 'Yes, our FTA Registered Tax Agents specialize in urgent audit defense, drafting formal voluntary disclosures (Form 211), and lodging penalty reconsideration requests with the Federal Tax Authority.',
    },
  ]

  return (
    <div className="inner-page contact-page">
      {/* Page Hero */}
      <section className="inner-hero">
        <div className="inner-hero-backdrop" aria-hidden="true" />
        <div className="container inner-hero-content">
          <div className="inner-hero-top-bar">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <a href="#/" onClick={(e) => { e.preventDefault(); onNavigate('home') }}>Home</a>
              <ChevronRight size={14} />
              <span aria-current="page">Contact Us</span>
            </nav>

            <span className="inner-hero-badge">
              <ShieldCheck size={15} />
              <span>CONFIDENTIAL ADVISORY • 2-HOUR RESPONSE TIME</span>
            </span>
          </div>

          <h1 className="inner-hero-title">
            Connect with Acetrix’s <span>Senior Practice Partners</span>
          </h1>

          <p className="inner-hero-lead">
            Whether you need urgent FTA corporate tax filing, statutory audit reports for license renewal, or complete accounting outsourcing, our practice leaders are available across Dubai and India.
          </p>

          <div className="contact-quick-pills">
            <a href="tel:+971506535070" className="quick-pill">
              <Phone size={14} />
              <span>Direct Phone: +971 50 653 5070</span>
            </a>
            <a
              href="https://wa.me/971506535070"
              target="_blank"
              rel="noopener noreferrer"
              className="quick-pill whatsapp"
            >
              <MessageCircle size={14} />
              <span>WhatsApp Instant Advisory</span>
            </a>
            <span className="quick-pill status">
              <span className="status-dot-pulse" />
              <span>Offices Open Now</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Contact Section: Form + Offices */}
      <section className="section contact-main-section">
        <div className="container contact-split-grid">
          {/* Left Column: Direct Directory & Information */}
          <div className="contact-info-col">
            <span className="eyebrow">OUR LOCATIONS</span>
            <h2>Our Offices</h2>
            <p className="contact-col-intro">
              Connect directly with our dedicated teams in Dubai and India.
            </p>

            <div className="contact-office-cards">
              {officeLocations.map((off) => (
                <div className="contact-office-card" key={off.name}>
                  <div className="contact-off-head">
                    <span className="off-flag">{off.flag}</span>
                    <div>
                      <h4>{off.name}</h4>
                      <span className="off-hours">{off.hours}</span>
                    </div>
                    <span className="off-status-tag">{off.status}</span>
                  </div>

                  <div className="off-address-block">
                    <p className="off-address">
                      <MapPin size={15} className="off-pin-icon" />
                      <span>{off.address}</span>
                    </p>
                    {off.landmark && (
                      <p className="off-landmark-text">
                        <span>📍 Landmark: {off.landmark}</span>
                      </p>
                    )}
                  </div>

                  <div className="off-links">
                    <a href={`tel:${off.phone.replace(/\s+/g, '')}`} className="off-phone-link">
                      <Phone size={13} />
                      <span>{off.phone}</span>
                    </a>
                    <a href={`mailto:${off.email}`} className="off-email-link">
                      <Mail size={13} />
                      <span>{off.email}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="emergency-support-card">
              <AlertCircle size={20} className="alert-icon" />
              <div>
                <strong>Urgent FTA Regulatory Deadline?</strong>
                <p>If you have an impending VAT return, Corporate Tax registration date, or audit report due within 48 hours, call our rapid response hotline directly at <strong>+971 50 653 5070 (UAE)</strong> or <strong>+91 77388 35070 (India)</strong>.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Proposal Request Form */}
          <div className="contact-form-col">
            <div className="consultation-form-card">
              <div className="form-card-header">
                <span className="form-eyebrow">COMPLIMENTARY CONSULTATION</span>
                <h3>Request an Advisory Proposal</h3>
                <p>Fill out the details below and a Senior Practice Partner will review your inquiry within 2 business hours.</p>
              </div>

              {submitted ? (
                <div className="form-success-box">
                  <div className="success-icon-badge">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4>Consultation Request Received!</h4>
                  <p>
                    Thank you for reaching out. A Senior Practice Partner from Acetrix will review your requirements and contact you via phone or email within <strong>2 business hours</strong>.
                  </p>
                  <div className="success-reference">
                    <span>Reference: ACTX-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <button
                    type="button"
                    className="button button-outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="consultation-form" onSubmit={handleSubmit}>
                  <div className="form-grid-2">
                    <div className="form-field">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Tariq Al Mansoori"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="tariq@company.ae"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-field">
                      <label htmlFor="phone">Phone / WhatsApp Number *</label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="company">Company Name (Optional)</label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Company Name LLC"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="service">Service Required</label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
                      <option value="Business Advisory & CFO">Business Advisory & CFO Services</option>
                      <option value="Registered Tax Agents">Registered Tax Agents (FTA Representation)</option>
                      <option value="VAT & Corporate Tax">VAT & UAE Corporate Tax Advisory</option>
                      <option value="Auditing & Assurance">Auditing & Assurance</option>
                      <option value="Payroll Services & WPS">Payroll Services & WPS Compliance</option>
                      <option value="Accounting Software Setup">Accounting Software & ERP Setup</option>
                      <option value="Other Financial Services">Other Financial Consultation</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="message">Message / Requirements (Optional)</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us briefly about your business requirements or any questions you have..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="button button-primary form-submit-btn">
                    <span>Submit Consultation Request</span>
                    <Send size={16} />
                  </button>

                  <div className="form-privacy-note">
                    <ShieldCheck size={14} />
                    <span>Your details are 100% confidential under our NDA policy. No spam guaranteed.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Consultation FAQ */}
      <section className="section contact-faq-section">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow">COMMON QUESTIONS</span>
            <h2>Frequently Asked Before Inquiring</h2>
            <p>Clear answers to help prepare for your initial consultation with our partners.</p>
          </div>

          <div className="contact-faqs-grid">
            <div className="contact-faq-col">
              {faqs.filter((_, i) => i % 2 === 0).map((faq) => {
                const originalIndex = faqs.findIndex(f => f.q === faq.q)
                const isOpen = activeFaq === originalIndex
                return (
                  <div
                    className={`contact-faq-item ${isOpen ? 'active' : ''}`}
                    key={faq.q}
                    style={{ order: originalIndex }}
                  >
                    <button
                      type="button"
                      className="faq-question-btn"
                      onClick={() => setActiveFaq(isOpen ? -1 : originalIndex)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown size={16} className={`faq-arrow ${isOpen ? 'rotate' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="faq-answer-body">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="contact-faq-col">
              {faqs.filter((_, i) => i % 2 !== 0).map((faq) => {
                const originalIndex = faqs.findIndex(f => f.q === faq.q)
                const isOpen = activeFaq === originalIndex
                return (
                  <div
                    className={`contact-faq-item ${isOpen ? 'active' : ''}`}
                    key={faq.q}
                    style={{ order: originalIndex }}
                  >
                    <button
                      type="button"
                      className="faq-question-btn"
                      onClick={() => setActiveFaq(isOpen ? -1 : originalIndex)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown size={16} className={`faq-arrow ${isOpen ? 'rotate' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="faq-answer-body">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

