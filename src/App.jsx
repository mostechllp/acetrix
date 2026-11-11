import { useState, useRef, useEffect } from 'react'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import LocationsPage from './pages/LocationsPage'
import IndustriesPage from './pages/IndustriesPage'
import ContactPage from './pages/ContactPage'
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgePercent,
  BarChart3,
  Briefcase,
  BriefcaseBusiness,
  Building2,
  Calculator,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Eye,
  FileBarChart,
  FileCheck2,
  FileSearch,
  Handshake,
  Landmark,
  Laptop,
  Layers,
  LineChart,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessageSquareText,
  Phone,
  Quote,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingUp,
  Truck,
  UsersRound,
  X,
} from 'lucide-react'

const imageBase = 'https://images.unsplash.com'

const serviceCategories = [
  {
    id: 'accounting',
    name: 'Accounting',
    items: [
      'Account Reconciliation Services',
      'Accounting Outsourcing Services',
      'Updating of Backlog Accounts Service',
      'Part Time Accounting Services',
      'Accounting System Analysis',
      'Accounting And Financial Reporting Services',
      'Bookkeeping Services',
      'Regular Accounting Services- Data Entry',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    items: [
      'CFO Services',
      'Cost Benefit Analysis',
      'Credit & Working Capital Management',
      'Feasibility Study Services',
      'Cash Flow Management Services',
      'IFRS- Impact & Its Implementation',
      'Finalization of Financial Statements',
      'Business Valuation Services',
      'IFRS Advisory Services',
    ],
  },
  {
    id: 'tax-agents',
    name: 'Registered Tax Agents',
    items: [
      'FTA Registered Tax Agency Representation',
      'Corporate Tax Assessment & Filing',
      'Tax Audit Defense & Assistance',
      'Tax Assessment & Penalty Reconsideration',
      'Voluntary Disclosure (Form 211) Filing',
      'Excise Tax Advisory & Registration',
    ],
  },
  {
    id: 'vat',
    name: 'VAT',
    items: [
      'VAT Consultancy Services',
      'VAT Registration Services',
      'VAT Deregistration Services',
      'VAT Accounting Services',
      'VAT Return Filing Services',
      'VAT Impact On Company Profit',
      'VAT Impact On Company Cash Flow',
      'Excise Tax Advisory Services',
      'Tax Consultation Services',
      'Corporate Tax UAE',
    ],
  },
  {
    id: 'auditing',
    name: 'Auditing & Assurance',
    items: [
      'Organisational Restructuring Services',
      'Internal Audit Services',
      'External Audit Services',
      'Business Strategy Consultants Services',
      'Financial Restructuring Service',
      'Internal Control Procedure Services',
    ],
  },
  {
    id: 'software',
    name: 'Accounting Software',
    items: [
      'Accounting Software Consultancy Services',
      'Training On Different Accounting Software',
    ],
  },
  {
    id: 'payroll',
    name: 'Payroll Services',
    items: [
      'Payroll Accounting Services',
      'Payroll Outsourcing Services',
      'WPS Compliance & Salary Processing',
      'End of Service & Gratuity Calculation',
    ],
  },
]

const navItems = [
  { label: 'Home', route: 'home', href: '#/' },
  { label: 'About', route: 'about', href: '#/about' },
  { label: 'Services', route: 'services', href: '#/services' },
  { label: 'Location', route: 'locations', href: '#/locations' },
  { label: 'Industry', route: 'industries', href: '#/industries' },
  { label: 'Contact Us', route: 'contact', href: '#/contact' },
]

const footerQuickLinks = [
  { label: 'Home', route: 'home', href: '#/' },
  { label: 'About', route: 'about', href: '#/about' },
  { label: 'Services', route: 'services', href: '#/services' },
  { label: 'Location', route: 'locations', href: '#/locations' },
  { label: 'Approved Freezones', route: 'locations', href: '#/locations' },
  { label: 'Industry', route: 'industries', href: '#/industries' },
  { label: 'Insights', route: 'home', href: '#insights' },
  { label: 'Contact Us', route: 'contact', href: '#/contact' },
]

const footerServices = [
  { label: 'Accounting Services', category: 'accounting' },
  { label: 'Business & CFO Services', category: 'business' },
  { label: 'Registered Tax Agents & VAT', category: 'tax-agents' },
  { label: 'Auditing & Assurance', category: 'auditing' },
  { label: 'Payroll Services & WPS', category: 'payroll' },
  { label: 'Accounting Software & Cloud ERP', category: 'software' },
]

const trustItems = [
  { icon: ShieldCheck, title: 'Accuracy in Accounting', detail: 'Consistent and reliable records' },
  { icon: Handshake, title: 'Transparent Processes', detail: 'Clear and open communication' },
  { icon: BarChart3, title: 'Business-Focused Solutions', detail: 'Support for your operational goals' },
  { icon: UsersRound, title: 'Reliable Financial Support', detail: 'Professional and timely assistance' },
]

const mainServices = [
  {
    id: 'accounting',
    number: '01',
    icon: Calculator,
    title: 'Accounting Services',
    badge: 'IFRS Compliant',
    detail: 'Dependable bookkeeping, monthly reconciliations, and auditor-ready IFRS reporting.',
    subServices: [
      'Bank & Ledger Reconciliations',
      'Outsourced Bookkeeping & AP/AR',
      'Historical Backlog Clean-Up',
    ],
    count: '8 Services',
  },
  {
    id: 'auditing',
    number: '02',
    icon: ShieldCheck,
    title: 'Auditing & Assurance',
    badge: 'Approved UAE Auditors',
    detail: 'Statutory and internal audits approved across UAE freezones and mainland jurisdictions.',
    subServices: [
      'Statutory License Renewal Audits',
      'Internal Audit & Governance Reviews',
      'Financial Restructuring Advisory',
    ],
    count: '6 Services',
  },
  {
    id: 'vat',
    number: '03',
    icon: BadgePercent,
    title: 'VAT & UAE Corporate Tax',
    badge: 'FTA Certified Agency',
    detail: 'Proactive tax structuring, 9% Corporate Tax returns, and zero-penalty FTA compliance.',
    subServices: [
      'UAE 9% Corporate Tax Filings',
      'Quarterly FTA VAT Returns (Form 201)',
      '0% Freezone QFZP Tax Structuring',
    ],
    count: '10 Services',
  },
  {
    id: 'tax-agents',
    number: '04',
    icon: FileCheck2,
    title: 'Registered Tax Agents',
    badge: 'FTA Authorized Agency',
    detail: 'Official legal representation before the FTA for audits, fines, and voluntary disclosures.',
    subServices: [
      'Direct FTA Legal Representation',
      'Tax Audit Defense & Penalty Relief',
      'Voluntary Disclosures (Form 211)',
    ],
    count: '6 Services',
  },
  {
    id: 'business',
    number: '05',
    icon: BriefcaseBusiness,
    title: 'Business Advisory & CFO',
    badge: 'Executive Advisory',
    detail: 'Strategic CFO leadership, rolling liquidity models, and performance governance.',
    subServices: [
      'Fractional CFO & Cash Flow Models',
      'Cost-Benefit & Working Capital',
      'Financial Strategy & IFRS Advisory',
    ],
    count: '9 Services',
  },
  {
    id: 'business',
    number: '06',
    icon: TrendingUp,
    title: 'Feasibility & Valuation',
    badge: 'Commercial Advisory',
    detail: 'Bankable commercial feasibility studies and certified company valuation models.',
    subServices: [
      'Bankable Feasibility Study Reports',
      'Certified DCF Business Valuations',
      '5-Year Pro-Forma Cash Projections',
    ],
    count: '5 Solutions',
  },
  {
    id: 'payroll',
    number: '07',
    icon: UsersRound,
    title: 'Payroll & WPS Services',
    badge: 'MOHRE & WPS Compliant',
    detail: 'Confidential payroll processing, Central Bank WPS salary routing, and gratuity calculations.',
    subServices: [
      'Central Bank SIF WPS Salary Files',
      'Monthly Payroll & Staff Pay Slips',
      'End of Service (EOSB) Gratuity',
    ],
    count: '4 Services',
  },
  {
    id: 'software',
    number: '08',
    icon: Laptop,
    title: 'Accounting Software & ERP',
    badge: 'Certified Cloud Partners',
    detail: 'Independent software selection, Chart of Accounts architecture, and staff training.',
    subServices: [
      'Zoho Books, QuickBooks & Xero Setup',
      'Chart of Accounts Migration',
      'Corporate Staff Software Training',
    ],
    count: '2 Solutions',
  },
]

const services = mainServices

const industries = [
  {
    id: 'sme',
    icon: Building2,
    badge: 'Enterprise & SME',
    title: 'Small and Medium-Sized Businesses',
    detail: 'Agile bookkeeping, cash flow forecasting, and FTA tax governance tailored to help growing enterprises scale sustainably.',
  },
  {
    id: 'professional',
    icon: Briefcase,
    badge: 'Advisory & Practices',
    title: 'Professional Services',
    detail: 'Specialized accounting, partner draw management, and billing reconciliations for legal, consulting, and medical practices.',
  },
  {
    id: 'retail',
    icon: ShoppingCart,
    badge: 'Omnichannel & POS',
    title: 'Retail and Ecommerce',
    detail: 'High-volume POS batch reconciliation, inventory valuation, payment gateway matching, and cross-border VAT returns.',
  },
  {
    id: 'trading',
    icon: Truck,
    badge: 'Logistics & Trade',
    title: 'Trading and Distribution',
    detail: 'Landed cost accounting, customs duty handling, letter of credit reconciliation, and supply chain inventory controls.',
  },
  {
    id: 'startups',
    icon: Rocket,
    badge: 'Venture & Tech',
    title: 'Startups and Growing Businesses',
    detail: 'Investor-ready unit economics, 0% QFZP tax structuring, fractional CFO guidance, and cloud ERP architecture.',
  },
  {
    id: 'services',
    icon: Layers,
    badge: 'Operations & Retainers',
    title: 'Service-Based Companies',
    detail: 'Project-based time tracking, retainer fee accounting, contract revenue recognition, and staff utilization reporting.',
  },
]

const steps = [
  {
    number: '01',
    stepTag: 'Phase 01 • Intake & Audit',
    icon: FileSearch,
    title: 'Understand & Diagnose',
    detail: 'We conduct an exhaustive review of your entity structure, existing ledgers, chart of accounts, and current tax status.',
    points: [
      'Entity jurisdiction & license intake',
      'Historical ledger & account mapping',
    ],
  },
  {
    number: '02',
    stepTag: 'Phase 02 • Gap Scoping',
    icon: ClipboardCheck,
    title: 'Review & Prioritize',
    detail: 'We identify backlog bottlenecks, tax liability risks, missing invoices, and establish priority workflows before ledger entry begins.',
    points: [
      'Reconciliation gap diagnostic report',
      'FTA compliance & filing calendar',
    ],
  },
  {
    number: '03',
    stepTag: 'Phase 03 • Structured Execution',
    icon: BarChart3,
    title: 'Execute & Reconcile',
    detail: 'Our dual-shore accounting engine updates backlogs, verifies bank feeds, and applies 4-eye partner oversight to every ledger line.',
    points: [
      'Clean IFRS-compliant general ledger',
      'Multi-tier 4-eye verification protocol',
    ],
  },
  {
    number: '04',
    stepTag: 'Phase 04 • Continuous Governance',
    icon: ShieldCheck,
    title: 'Support & CFO Advisory',
    detail: 'We deliver board-level monthly closures, accurate FTA VAT & corporate tax returns, and ongoing fractional CFO guidance.',
    points: [
      'Month-end closure binders in 5 days',
      'Zero-penalty statutory filing guarantee',
    ],
  },
]

const testimonials = [
  { quote: 'Acetrix helped us keep our accounting organized and up to date. Their professional approach and clear communication make working with them simple and effective.', name: 'Business Owner', company: 'Service industry', initials: 'BO' },
  { quote: 'Their support with bookkeeping and financial reporting has made a real difference in how we manage our business finances.', name: 'Managing Director', company: 'Retail business', initials: 'MD' },
  { quote: 'A reliable and responsive team. They understand our requirements and provide practical accounting support.', name: 'Founder', company: 'Professional services', initials: 'FO' },
]

const faqs = [
  ['What accounting services does Acetrix provide?', 'Acetrix provides reconciliation, bookkeeping, outsourced accounting, backlog updating, reporting, system analysis, part-time accounting and regular data entry services.'],
  ['Can a business use part-time accounting services?', 'Yes. Part-time support is ideal for businesses that need dependable accounting expertise without the cost of a full-time in-house team.'],
  ['What is accounting outsourcing?', 'Accounting outsourcing means engaging a specialist team to handle agreed accounting activities, giving your business more time and clarity to focus on operations.'],
  ['What is included in bookkeeping services?', 'Bookkeeping includes maintaining organized records of transactions, income, expenses, and the supporting information your business relies on.'],
  ['Can Acetrix help update pending accounting records?', 'Yes. Our backlog accounting service brings pending records up to date through a structured review and organization process.'],
  ['How can accounting and financial reporting help my business?', 'Reliable reports help you understand performance, monitor cash flow, plan ahead, and make decisions with greater confidence.'],
  ['What are account reconciliation services?', 'Reconciliation compares records from different sources, identifies discrepancies and helps keep financial information accurate and consistent.'],
  ['How can I request a consultation?', 'Use the contact form below or call our team. We will learn about your requirements and suggest the right next step.'],
]

const insights = [
  { category: 'Accounting', title: 'Why Account Reconciliation Matters for Businesses', detail: 'Understand how regular account reconciliation helps maintain accurate records and better financial control.', time: '5 min read', image: `${imageBase}/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=85` },
  { category: 'Business', title: 'The Benefits of Outsourcing Accounting Services', detail: 'Explore how outsourcing accounting can improve efficiency and reduce administrative workload.', time: '6 min read', image: `${imageBase}/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=85` },
  { category: 'Bookkeeping', title: 'How Organized Bookkeeping Supports Better Decisions', detail: 'Learn how consistent bookkeeping helps you understand your finances and plan for the future.', time: '5 min read', image: `${imageBase}/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1000&q=85` },
]

function Logo({ light = false, onNavigate }) {
  return (
    <a
      href="#/"
      className={`logo ${light ? 'logo-light' : ''}`}
      aria-label="Acetrix Home"
      onClick={(e) => {
        if (onNavigate) {
          e.preventDefault()
          onNavigate('home')
        }
      }}
    >
      <img
        src={light ? '/images/acetrix-logo-white.png' : '/images/acetrix-logo.png'}
        alt="AcEtrix Accounting & Automation Solutions"
        className="site-logo-image"
        width="220"
        height="56"
      />
    </a>
  )
}

function SectionIntro({ eyebrow, title, light = false }) {
  return (
    <div className={`section-intro ${light ? 'section-intro-light' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  )
}

function Header({ currentRoute = 'home', onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileActiveCategory, setMobileActiveCategory] = useState(null)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)
  const dropdownTimeoutRef = useRef(null)

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setServicesDropdownOpen(true)
  }

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false)
    }, 180)
  }

  const closeMobile = () => setMobileMenuOpen(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setServicesDropdownOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo onNavigate={onNavigate} />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            if (item.label === 'Services') {
              return (
                <div
                  key={item.label}
                  className="nav-dropdown-item"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <a
                    href={item.href}
                    className={`nav-dropdown-trigger ${servicesDropdownOpen ? 'open' : ''} ${currentRoute === 'services' ? 'active' : ''}`}
                    aria-expanded={servicesDropdownOpen}
                    aria-haspopup="true"
                    onClick={(e) => {
                      e.preventDefault()
                      if (onNavigate) onNavigate('services')
                      setServicesDropdownOpen(false)
                    }}
                  >
                    <span>Services</span>
                    <ChevronDown size={14} className={`nav-chevron ${servicesDropdownOpen ? 'rotate' : ''}`} />
                  </a>

                  {/* Two-Column Mega Dropdown Panel */}
                  {servicesDropdownOpen && (
                    <div className="services-mega-dropdown" role="menu" aria-label="Services Menu">
                      <div className="dropdown-arrow-pointer" aria-hidden="true" />
                      <div className="services-dropdown-grid">
                        {/* Left Category Tabs Column */}
                        <div className="services-categories-col">
                          {serviceCategories.map((cat, idx) => (
                            <button
                              key={cat.id}
                              type="button"
                              role="menuitem"
                              className={`service-cat-tab ${activeCategoryIndex === idx ? 'active' : ''}`}
                              onMouseEnter={() => setActiveCategoryIndex(idx)}
                              onClick={() => {
                                setActiveCategoryIndex(idx)
                                if (onNavigate) onNavigate('services', cat.id)
                                setServicesDropdownOpen(false)
                              }}
                            >
                              <span>{cat.name}</span>
                              <ChevronRight size={14} className="cat-arrow" />
                            </button>
                          ))}
                        </div>

                        {/* Right Sub-Services Column */}
                        <div className="services-subitems-col">
                          <div className="subitems-header">
                            <span className="subitems-category-name">
                              {serviceCategories[activeCategoryIndex].name}
                            </span>
                            <span className="subitems-count">
                              {serviceCategories[activeCategoryIndex].items.length} Services
                            </span>
                          </div>
                          <div className="subitems-list">
                            {serviceCategories[activeCategoryIndex].items.map((subItem) => (
                              <a
                                key={subItem}
                                href="#/services"
                                className="service-subitem-link"
                                onClick={(e) => {
                                  e.preventDefault()
                                  if (onNavigate) onNavigate('services', serviceCategories[activeCategoryIndex].id)
                                  setServicesDropdownOpen(false)
                                }}
                              >
                                <span>{subItem}</span>
                                <ArrowRight size={13} className="subitem-arrow" />
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            }
            return (
              <a
                className={currentRoute === item.route ? 'active' : ''}
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  if (onNavigate) onNavigate(item.route)
                }}
              >
                {item.label}
              </a>
            )
          })}
        </nav>
        <a
          className="button button-primary nav-cta"
          href="#/contact"
          onClick={(e) => {
            e.preventDefault()
            if (onNavigate) onNavigate('contact')
          }}
        >
          Book a Consultation <ArrowRight size={15} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => {
            if (item.label === 'Services') {
              return (
                <div key={item.label} className="mobile-services-wrapper">
                  <button
                    type="button"
                    className="mobile-services-toggle"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    aria-expanded={mobileServicesOpen}
                  >
                    <span className={currentRoute === 'services' ? 'active-text' : ''}>Services</span>
                    <ChevronDown size={18} className={`dropdown-chevron ${mobileServicesOpen ? 'rotate' : ''}`} />
                  </button>

                  {mobileServicesOpen && (
                    <div className="mobile-services-accordion">
                      {/* Direct Link to main Services Overview Page */}
                      <a
                        href="#/services"
                        className="mobile-services-overview-card"
                        onClick={(e) => {
                          e.preventDefault()
                          if (onNavigate) onNavigate('services')
                          closeMobile()
                        }}
                      >
                        <span className="overview-icon-badge">
                          <Layers size={16} />
                        </span>
                        <div>
                          <strong>Explore All 45 Services</strong>
                          <small>Overview & Scope Estimator</small>
                        </div>
                        <ArrowRight size={14} className="overview-arrow" />
                      </a>

                      {/* 4 Interactive Collapsible Category Folders */}
                      <div className="mobile-category-list">
                        {serviceCategories.map((cat) => {
                          const isCatOpen = mobileActiveCategory === cat.id
                          return (
                            <div
                              key={cat.id}
                              className={`mobile-category-folder ${isCatOpen ? 'open' : ''}`}
                            >
                              <button
                                type="button"
                                className="mobile-category-folder-btn"
                                onClick={() =>
                                  setMobileActiveCategory(isCatOpen ? null : cat.id)
                                }
                                aria-expanded={isCatOpen}
                              >
                                <span className="cat-folder-name">{cat.name}</span>
                                <div className="cat-folder-meta">
                                  <span className="cat-count-badge">
                                    {cat.items.length}
                                  </span>
                                  <ChevronDown
                                    size={15}
                                    className={`cat-folder-chevron ${isCatOpen ? 'rotate' : ''}`}
                                  />
                                </div>
                              </button>

                              {isCatOpen && (
                                <div className="mobile-category-sublist">
                                  {cat.items.map((subItem) => (
                                    <a
                                      key={subItem}
                                      href="#/services"
                                      className="mobile-subitem-link"
                                      onClick={(e) => {
                                        e.preventDefault()
                                        if (onNavigate) onNavigate('services', cat.id)
                                        closeMobile()
                                      }}
                                    >
                                      <span>{subItem}</span>
                                      <ArrowRight size={12} className="mobile-subitem-arrow" />
                                    </a>
                                  ))}
                                  <a
                                    href="#/services"
                                    className="mobile-cat-all-link"
                                    onClick={(e) => {
                                      e.preventDefault()
                                      if (onNavigate) onNavigate('services', cat.id)
                                      closeMobile()
                                    }}
                                  >
                                    <span>View all {cat.name} ({cat.items.length})</span>
                                    <ArrowRight size={12} />
                                  </a>
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )
            }
            return (
              <a
                key={item.label}
                href={item.href}
                className={currentRoute === item.route ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  if (onNavigate) onNavigate(item.route)
                  closeMobile()
                }}
              >
                {item.label}
              </a>
            )
          })}
          <a
            className="button button-primary"
            href="#/contact"
            onClick={(e) => {
              e.preventDefault()
              if (onNavigate) onNavigate('contact')
              closeMobile()
            }}
          >
            Book a Consultation <ArrowRight size={15} />
          </a>
        </nav>
      )}
    </header>
  )
}

function Hero({ onNavigate }) {
  return (
    <section className="hero" id="home">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            <span>AUTOMATE YOUR ACCOUNTS • ACE YOUR FINANCES</span>
          </div>

          <h1 className="hero-title">
            Clarity in Numbers.<br />
            <span className="hero-title-highlight">Confidence in Every Decision.</span>
          </h1>

          <p className="hero-body">
            Automate your accounts and ace your finances with chartered accounting precision, proactive UAE FTA tax compliance, and automated financial workflows.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href="#/services"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault()
                  onNavigate('services')
                }
              }}
            >
              <span>Explore Our Services</span>
              <ArrowRight size={17} />
            </a>
            <a
              className="button button-outline"
              href="#/contact"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault()
                  onNavigate('contact')
                }
              }}
            >
              <span>Talk to Our Experts</span>
            </a>
          </div>

          <div className="hero-trust-metrics">
            <div className="hero-metric-item">
              <strong>500+</strong>
              <span>Enterprises Advised</span>
            </div>
            <div className="hero-metric-divider" aria-hidden="true" />
            <div className="hero-metric-item">
              <strong>99.8%</strong>
              <span>On-Time FTA Filings</span>
            </div>
            <div className="hero-metric-divider" aria-hidden="true" />
            <div className="hero-metric-item">
              <strong>Pan-UAE</strong>
              <span>Mainland & Freezones</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/images/hero-workspace.png"
            alt="Professional financial analysis workspace with laptop, calculator, and reports"
            className="hero-image"
          />
          <div className="hero-overlay" />
        </div>
      </div>
    </section>
  )
}

function TrustStrip() {
  return <section className="trust-strip"><div className="container trust-grid">{trustItems.map(({ icon: Icon, title, detail }) => <div className="trust-item" key={title}><span className="icon-badge"><Icon size={20} /></span><span><strong>{title}</strong><small>{detail}</small></span></div>)}</div></section>
}

function UAEPresence() {
  const [activeLocation, setActiveLocation] = useState(0)

  const locations = [
    {
      id: 'dubai',
      name: 'Dubai',
      flag: '🇦🇪',
      role: 'Commercial & Freezones Hub',
      jurisdiction: 'DMCC • DIFC • DAFZA • Mainland',
      desc: 'UAE Corporate Tax (9%), FTA VAT filings, and tailored mainland & freezone audit compliance.',
    },
    {
      id: 'abudhabi',
      name: 'Abu Dhabi',
      flag: '🇦🇪',
      role: 'Capital Advisory & ADGM',
      jurisdiction: 'ADGM & Abu Dhabi Mainland',
      desc: 'IFRS statutory audit, financial restructuring, and regulatory advisory for capital market entities.',
    },
    {
      id: 'sharjah',
      name: 'Sharjah',
      flag: '🇦🇪',
      role: 'Trade & Industrial Branch',
      jurisdiction: 'SAIF Zone • HFZA • Mainland',
      desc: 'Trade inventory valuation, cost accounting, and SME bookkeeping across the Northern Emirates.',
    },
    {
      id: 'india',
      name: 'India Delivery',
      flag: '🇮🇳',
      role: 'Global Offshore Center',
      jurisdiction: 'Dual-Shore Scalability',
      desc: 'Rapid backlog clearing, high-volume bookkeeping, and seamless dual-shore execution.',
    },
  ]

  const highlights = [
    { title: 'FTA Tax & VAT Compliant', detail: 'End-to-end UAE Corporate Tax (9%) & VAT filing support.' },
    { title: 'Mainland & Freezones', detail: 'Tailored accounting for DMCC, DIFC, ADGM, DAFZA & Mainland.' },
    { title: 'IFRS-Standard Reporting', detail: 'Audited financial reports adhering strictly to IFRS frameworks.' },
    { title: 'UAE & India Delivery', detail: 'Dual-shore agility with localized advisory and offshore scale.' },
  ]

  return (
    <section className="section uae-section" id="location">
      <span id="uae-presence" className="sr-only" />
      <div className="container uae-grid">
        <div className="uae-visual-col">
          {/* Interactive Hub Navigation Tabs */}
          <div className="uae-hub-nav" role="tablist" aria-label="Acetrix Regional Presence Hubs">
            {locations.map((loc, idx) => (
              <button
                key={loc.id}
                type="button"
                role="tab"
                aria-selected={activeLocation === idx}
                className={`uae-hub-tab ${activeLocation === idx ? 'active' : ''}`}
                onClick={() => setActiveLocation(idx)}
              >
                <span className="hub-flag" aria-hidden="true">{loc.flag}</span>
                <span className="hub-name">{loc.name}</span>
                {activeLocation === idx && <span className="hub-active-dot" aria-hidden="true" />}
              </button>
            ))}
          </div>

          {/* 3D UAE Map Showcase Card */}
          <div className="uae-map-card">
            <div className="uae-map-header-badges">
              <div className="uae-live-badge">
                <span className="uae-pulse-dot" aria-hidden="true" />
                <span>{locations[activeLocation].id === 'india' ? 'Live India Delivery Center' : 'Live UAE Advisory Hubs'}</span>
              </div>
              <div className="uae-fta-badge">
                <ShieldCheck size={13} />
                <span>{locations[activeLocation].id === 'india' ? 'Global Delivery Hub' : 'FTA Registered Tax Agency'}</span>
              </div>
            </div>

            <div className="uae-map-image-wrapper">
              <img
                src={locations[activeLocation].id === 'india' ? '/images/Neon Mumbai Maharashtra Map Infographic.png' : '/images/uae-presence-map-new.jpg'}
                alt={locations[activeLocation].id === 'india' ? 'Acetrix India Delivery Center - Mumbai & Maharashtra Map' : 'Acetrix 3D UAE Presence Map - Dubai, Abu Dhabi, Sharjah & India'}
                className="uae-map-image"
                loading="lazy"
              />
              <div className="uae-map-gradient-overlay" />
            </div>

            {/* Active Location Detail Callout */}
            <div className="uae-map-active-callout">
              <div className="callout-indicator">
                <MapPin size={16} />
                <span>{locations[activeLocation].flag} {locations[activeLocation].name} Hub — {locations[activeLocation].role}</span>
              </div>
              <p className="callout-desc">
                <strong>{locations[activeLocation].jurisdiction}:</strong> {locations[activeLocation].desc}
              </p>
            </div>
          </div>

          {/* Value Stats Strip */}
          <div className="uae-network-stats">
            <div className="uae-stat-pill">
              <span className="stat-number">7</span>
              <div>
                <strong>Emirates Coverage</strong>
                <small>Mainland & Freezones</small>
              </div>
            </div>
            <div className="uae-stat-pill">
              <span className="stat-number">100%</span>
              <div>
                <strong>FTA & IFRS Compliant</strong>
                <small>Certified Practice</small>
              </div>
            </div>
            <div className="uae-stat-pill">
              <span className="stat-number">Dual-Shore</span>
              <div>
                <strong>UAE + India Delivery</strong>
                <small>Local Advisory & Scale</small>
              </div>
            </div>
          </div>
        </div>

        <div className="uae-content-col">
          <div className="uae-pill-eyebrow">
            <span className="uae-flag" aria-hidden="true">🇦🇪</span>
            <span>AcEtrix Accounting & Automation Solutions, UAE</span>
          </div>

          <h2 className="uae-title">
            Looking For The Best Audit And Accounting Services In UAE?
          </h2>

          <p className="uae-lead">
            Our seasoned Chartered Accountants and financial specialists in the UAE bring their expertise across offices in <strong>Abu Dhabi, Dubai, Sharjah, and India</strong>. Whether you’re a bold startup or a seasoned MNC, Acetrix tailors its comprehensive accounting and financial advisory services to your journey.
          </p>

          <p className="uae-body">
            We provide full-spectrum support for UAE Corporate Tax registration and return filings, FTA VAT compliance, financial reporting, and backlog clearing. Our team of Auditors, Accountants, and Tax Specialists empowers you to navigate complex regulatory landscapes with total confidence, unlocking true potential across the dynamic Emirati market.
          </p>

          <div className="uae-highlights-grid">
            {highlights.map(item => (
              <div className="uae-highlight-item" key={item.title}>
                <span className="uae-check-icon"><Check size={14} /></span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="uae-actions">
            <a
              className="button button-primary"
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Schedule UAE Consultation <ArrowRight size={15} />
            </a>
            <a
              className="button button-secondary uae-call-btn"
              href="https://wa.me/971506535070"
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp (+971 50 653 5070)"
              aria-label="Chat on WhatsApp +971 50 653 5070"
            >
              <MessageCircle size={15} />
              <span>+971 50 653 5070</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ApprovedFreezones() {
  const freezoneLogos = [
    { name: 'UAQ Free Trade Zone', file: '/images/uaq.jpg', jurisdiction: 'Umm Al Quwain' },
    { name: 'Jebel Ali Free Zone (Jafza)', file: '/images/jafza.jpg', jurisdiction: 'Dubai' },
    { name: 'Dubai Airport Freezone (DAFZA)', file: '/images/dafza.jpg', jurisdiction: 'Dubai' },
    { name: 'Dubai Studio City', file: '/images/studio-city.jpg', jurisdiction: 'Dubai' },
    { name: 'International Free Zone Authority (IFZA)', file: '/images/IFZA.jpg', jurisdiction: 'Dubai' },
    { name: 'Abu Dhabi Global Market (ADGM)', file: '/images/abu-dhabi-global-market.jpg', jurisdiction: 'Abu Dhabi' },
    { name: 'Abu Dhabi Ports & Freezones', file: '/images/abudhabi-ports.jpg', jurisdiction: 'Abu Dhabi' },
  ]

  return (
    <section className="section freezones-section" id="freezones">
      <div className="container text-center">
        <div className="freezones-header">
          <div className="freezones-pill-eyebrow">
            <ShieldCheck size={14} />
            <span>Approved & Accredited Audit Practice</span>
          </div>
          <h2 className="freezones-title">
            Approved Auditors in Dubai & All Major Freezones in UAE
          </h2>
          <p className="freezones-subtitle">
            Backed by UAE FTA certification and approved by key government authorities in UAE and major banks, Acetrix is a trusted auditing firm delivering audits with integrity, precision, and complete regulatory compliance.
          </p>
        </div>

        {/* Logos Showcase Ribbon / Grid */}
        <div className="freezones-logo-grid" aria-label="Approved Freezone and Authority Logos">
          {freezoneLogos.map((item) => (
            <div className="freezone-logo-card" key={item.name} title={`${item.name} (${item.jurisdiction})`}>
              <img
                src={item.file}
                alt={item.name}
                className="freezone-logo-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Accreditation Trust Badges */}
        <div className="freezones-trust-pills">
          <div className="fz-trust-pill">
            <Check size={14} />
            <span>FTA Certified Tax Agency</span>
          </div>
          <div className="fz-trust-pill">
            <Check size={14} />
            <span>Approved by Tier-1 UAE Banks</span>
          </div>
          <div className="fz-trust-pill">
            <Check size={14} />
            <span>Mainland & Freezone Jurisdiction</span>
          </div>
          <div className="fz-trust-pill">
            <Check size={14} />
            <span>IFRS-Compliant Statutory Reporting</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function LeadershipVision() {
  return (
    <section className="section leadership-section" id="about">
      {/* Ambient Visual Glows & Dot Matrix */}
      <div className="leadership-glow leadership-glow-1" aria-hidden="true" />
      <div className="leadership-glow leadership-glow-2" aria-hidden="true" />
      <div className="leadership-grid-pattern" aria-hidden="true" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="leadership-header">
          <div className="leadership-pill-eyebrow">
            <Sparkles size={14} />
            <span>Acetrix Leadership & Corporate Vision</span>
          </div>
          <h2 className="leadership-title">
            A Vision for Financial Clarity, Integrity & Sustainable Growth
          </h2>
          <p className="leadership-subtitle">
            Founded on chartered accounting precision and driven by modern advisory agility, Acetrix bridges on-the-ground UAE regulatory authority with seamless cross-border delivery.
          </p>
        </div>

        {/* Two-Column Showcase: Executive Message + Acetrix Corporate Profile */}
        <div className="leadership-showcase-grid">
          {/* Column 1: Executive / CEO Message */}
          <div className="leadership-message-card">
            <div className="exec-badge-wrap">
              <span className="exec-quote-pill">
                <Quote size={13} />
                <span>Executive Leadership Message</span>
              </span>
              <span className="exec-since-badge">Est. In UAE & India</span>
            </div>

            <h3 className="exec-quote-headline">
              “True financial advisory must be more than compliance—it must be the compass that drives confident enterprise growth.”
            </h3>

            <div className="exec-body-content">
              <p>
                When we established Acetrix, our journey began with a clear purpose: to bridge the gap between traditional retrospective bookkeeping and forward-looking, high-precision financial stewardship.
              </p>
              <p>
                With roots in corporate finance and decades of collective experience across Big 4 accounting and banking advisory, we recognized the growing regulatory complexity modern businesses face in the UAE. Navigating the 9% UAE Corporate Tax, FTA VAT mandates, and multi-jurisdiction freezone audits in DIFC, ADGM, and DMCC requires more than standard data entry—it demands trusted, strategic financial leadership.
              </p>
              <p>
                Today, that vision has evolved into an agile cross-border practice operating across Dubai, Abu Dhabi, Sharjah, and our specialized delivery center in India. We empower businesses to operate with 100% regulatory confidence, streamlined cash flows, and institutional financial clarity.
              </p>
            </div>

            <div className="exec-signoff">
              <div className="exec-avatar-crest" aria-hidden="true">
                <span>AX</span>
              </div>
              <div className="exec-details">
                <strong>Executive Leadership & Partners</strong>
                <small>AcEtrix Accounting & Automation Solutions</small>
                <div className="exec-credentials-tags">
                  <span>FCA</span>
                  <span>FTA Certified Tax Specialists</span>
                  <span>IFRS Advisors</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Acetrix Corporate Profile & Impact Showcase (In place of personal photo) */}
          <div className="acetrix-details-card">
            <div className="profile-card-top">
              <div className="profile-title-group">
                <span className="profile-icon-badge">
                  <Building2 size={22} />
                </span>
                <div>
                  <h3>Acetrix At A Glance</h3>
                  <p>Licensed Accounting, Corporate Tax & Audit Practice</p>
                </div>
              </div>
              <span className="fta-verified-pill">
                <ShieldCheck size={14} />
                <span>FTA Registered</span>
              </span>
            </div>

            {/* Core Competencies 2x2 Grid */}
            <div className="acetrix-pillars-grid">
              <div className="pillar-item">
                <span className="pillar-bullet" aria-hidden="true" />
                <div>
                  <strong>FTA Tax & VAT Authority</strong>
                  <p>Full-cycle UAE Corporate Tax (9%), VAT returns, registrations & clarification filings.</p>
                </div>
              </div>
              <div className="pillar-item">
                <span className="pillar-bullet" aria-hidden="true" />
                <div>
                  <strong>Dual-Shore Delivery Agility</strong>
                  <p>On-the-ground UAE partner advisory backed by our high-capacity India offshore center.</p>
                </div>
              </div>
              <div className="pillar-item">
                <span className="pillar-bullet" aria-hidden="true" />
                <div>
                  <strong>Freezone & Mainland Mastery</strong>
                  <p>Expert compliance for DMCC, DIFC, ADGM, DAFZA, SAIF Zone & UAE Mainland entities.</p>
                </div>
              </div>
              <div className="pillar-item">
                <span className="pillar-bullet" aria-hidden="true" />
                <div>
                  <strong>IFRS Statutory Auditing</strong>
                  <p>Auditor-ready balance sheets, P&L statements, and board-level management reporting.</p>
                </div>
              </div>
            </div>

            {/* Metrics Strip */}
            <div className="acetrix-profile-stats">
              <div className="profile-stat">
                <strong>500+</strong>
                <small>Enterprises Stewarded</small>
              </div>
              <div className="profile-stat">
                <strong>99.8%</strong>
                <small>On-Time Filing Rate</small>
              </div>
              <div className="profile-stat">
                <strong>4 Hubs</strong>
                <small>Dubai • Abu Dhabi • Sharjah • India</small>
              </div>
            </div>

            <div className="profile-card-footer">
              <p>
                <Sparkles size={14} /> Empowering startups, growing SMEs, and MNCs across the UAE & GCC.
              </p>
              <a
                href="#contact"
                className="profile-action-link"
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById('contact')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Consult Our Advisory Team <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Three Strategic Foundation Cards: Mission, Vision, Goals */}
        <div className="strategic-foundation-grid">
          {/* Mission Card */}
          <div className="foundation-card foundation-mission">
            <div className="foundation-card-header">
              <span className="foundation-icon-wrap mission-icon">
                <Target size={22} />
              </span>
              <span className="foundation-pill">Strategic Purpose</span>
            </div>
            <h3>Our Mission</h3>
            <p>
              To empower businesses across the UAE and global markets with uncompromising accounting integrity, proactive tax compliance, and strategic financial insights that eliminate regulatory risk and accelerate sustainable profitability.
            </p>
            <ul className="foundation-list">
              <li><Check size={14} /> Flawless FTA Tax & VAT Compliance</li>
              <li><Check size={14} /> Transparent Real-Time Financial Reporting</li>
              <li><Check size={14} /> Agile Dual-Shore Books Clearance</li>
            </ul>
            <div className="foundation-bar mission-bar" aria-hidden="true" />
          </div>

          {/* Vision Card */}
          <div className="foundation-card foundation-vision">
            <div className="foundation-card-header">
              <span className="foundation-icon-wrap vision-icon">
                <Eye size={22} />
              </span>
              <span className="foundation-pill">Future Horizon</span>
            </div>
            <h3>Our Vision</h3>
            <p>
              To stand as the Middle East’s benchmark accounting and financial advisory practice, renowned for combining on-the-ground regulatory mastery with innovative dual-shore delivery that elevates our clients' enterprise value.
            </p>
            <ul className="foundation-list">
              <li><Check size={14} /> Regional Benchmark in Corporate Tax Advisory</li>
              <li><Check size={14} /> Digital-First Automated Financial Infrastructure</li>
              <li><Check size={14} /> Trusted Cross-Border Financial Partner</li>
            </ul>
            <div className="foundation-bar vision-bar" aria-hidden="true" />
          </div>

          {/* Goals Card */}
          <div className="foundation-card foundation-goals">
            <div className="foundation-card-header">
              <span className="foundation-icon-wrap goals-icon">
                <Rocket size={22} />
              </span>
              <span className="foundation-pill">Action Commitments</span>
            </div>
            <h3>Our Goals</h3>
            <p>
              To deliver measurable capital efficiency, safeguard enterprises against penalties, cultivate enduring client partnerships, and provide scalable financial frameworks that support growth at every stage.
            </p>
            <ul className="foundation-list">
              <li><Check size={14} /> 100% Zero-Penalty Regulatory Track Record</li>
              <li><Check size={14} /> Rapid 24/7 Turnaround on Financial Books</li>
              <li><Check size={14} /> Dedicated CFO-Level Growth Advisory</li>
            </ul>
            <div className="foundation-bar goals-bar" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Services({ onNavigate }) {
  return (
    <section className="section services-section" id="services">
      <div className="services-ambient-glow services-ambient-glow-1" aria-hidden="true" />
      <div className="services-ambient-glow services-ambient-glow-2" aria-hidden="true" />
      <div className="container relative z-10">
        <SectionIntro
          eyebrow="What We Do"
          title="Core Financial & Advisory Services"
        />

        <div className="services-grid">
          {mainServices.map(({ id, number, icon: Icon, title, badge, detail, subServices, count }) => (
            <article className="service-card glass-card" key={number}>
              <div className="service-card-header">
                <span className="service-icon-wrap">
                  <Icon size={24} />
                </span>
                <span className="service-index">{number}</span>
              </div>

              <div className="service-card-meta">
                <span className="service-pill-tag">{badge}</span>
              </div>

              <h3 className="service-card-title">{title}</h3>
              <p className="service-card-detail">{detail}</p>

              <div className="service-subservices-box">
                <span className="service-subservices-label">Key Capabilities</span>
                <ul className="service-features-list">
                  {subServices.map((sub, i) => (
                    <li key={i}>
                      <Check size={14} className="service-feature-check" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-card-footer">
                <button
                  type="button"
                  className="service-cta"
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('services', id)
                    } else {
                      window.location.hash = `#/services?cat=${id}`
                    }
                  }}
                  aria-label={`Explore ${title}`}
                >
                  <span className="service-cta-text">
                    Explore Services <span className="service-cta-count">({count})</span>
                  </span>
                  <span className="service-cta-arrow">
                    <ArrowRight size={14} />
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Practice Directory Banner */}
        <div className="services-bottom-banner">
          <div className="services-banner-content">
            <span className="services-banner-badge">Complete Practice Directory</span>
            <h4>Need specialized scope or custom accounting packages?</h4>
            <p>
              Explore our full directory of 45 specialized services across Accounting, Business Advisory, UAE Tax, Auditing, and Payroll.
            </p>
          </div>
          <button
            type="button"
            className="button button-primary services-banner-btn"
            onClick={() => {
              if (onNavigate) {
                onNavigate('services')
              } else {
                window.location.hash = '#/services'
              }
            }}
          >
            <span>Explore All 45 Services</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}

function WhyAcetrix({ onNavigate }) {
  const items = [
    ['01', 'Accuracy and Attention to Detail', 'Organized accounting processes designed to support accurate and consistent records.'],
    ['02', 'Flexible Service Options', 'Accounting support tailored to different operational needs and business stages.'],
    ['03', 'Clear Financial Information', 'Structured records and reporting that help you understand your financial position.'],
    ['04', 'A Business-Focused Approach', 'Practical accounting support that helps you focus on what matters most.'],
  ]
  return (
    <section className="why-section" id="why-us">
      <div className="container why-grid">
        <div className="why-copy"><p className="eyebrow eyebrow-light">Why Acetrix</p><h2>More Than Accounting.<br />A Clearer View of Your Finances.</h2><p>We combine dependable accounting expertise with a practical understanding of how businesses operate, so your numbers become a tool for confident decisions.</p><a className="button button-light" href="#/about" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('about') } }}>Learn More About Us <ArrowRight size={15} /></a></div>
        <div className="why-features">{items.map(([number, title, detail], index) => <div className="why-feature" key={number}><span className="why-feature-icon">{index === 0 ? <ShieldCheck size={20} /> : index === 1 ? <Sparkles size={20} /> : index === 2 ? <FileBarChart size={20} /> : <TrendingUp size={20} />}</span><span><small>{number}.</small><strong>{title}</strong><p>{detail}</p></span></div>)}</div>
      </div>
      <div className="why-building" aria-hidden="true"><div /></div>
    </section>
  )
}

function Industries({ onNavigate }) {
  return (
    <section className="section industries-section" id="industries">
      <div className="container">
        <SectionIntro eyebrow="Our Industries" title="Industries We Serve" />
        <div className="industry-grid">
          {industries.map(({ id, icon: Icon, badge, title, detail }) => (
            <article
              className="industry-card"
              key={title}
              onClick={() => {
                if (onNavigate) onNavigate('industries', id)
                else window.location.hash = '#/industries'
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  if (onNavigate) onNavigate('industries', id)
                  else window.location.hash = '#/industries'
                }
              }}
            >
              <div className="industry-card-header">
                <span className="industry-icon-wrap">
                  <Icon size={22} strokeWidth={2} />
                </span>
                <span className="industry-badge">{badge}</span>
              </div>

              <h3 className="industry-card-title">{title}</h3>
              <p className="industry-card-detail">{detail}</p>

              <div className="industry-card-footer">
                <span className="industry-cta-label">Explore Sector Advisory</span>
                <span className="industry-arrow-btn" aria-label={`Learn more about ${title}`}>
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Practice Banner */}
        <div className="industry-bottom-banner">
          <div className="industry-banner-copy">
            <span className="industry-banner-tag">Custom Industry Frameworks</span>
            <h4>Need specialized regulatory or industry accounting?</h4>
            <p>
              Explore our comprehensive sector playbooks covering Tech Startups, Healthcare, Contracting, Hospitality, and Retail.
            </p>
          </div>
          <button
            type="button"
            className="button button-primary industry-banner-btn"
            onClick={() => {
              if (onNavigate) onNavigate('industries')
              else window.location.hash = '#/industries'
            }}
          >
            <span>View All Industry Solutions</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  )
}

function Process({ onNavigate }) {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="process-header-wrap">
          <SectionIntro
            eyebrow="How We Work"
            title="A Straightforward Approach to Financial Precision"
          />
          <p className="process-section-lead">
            Our structured 4-phase methodology ensures zero regulatory surprises, rapid turnaround on historical books, and total fiduciary control from day one.
          </p>
        </div>

        <div className="process-cards-grid">
          {steps.map(({ number, stepTag, icon: Icon, title, detail, points }, index) => (
            <div className="process-card" key={number}>
              <div className="process-card-header">
                <span className="process-number-badge">{number}</span>
                <div className="process-icon-box">
                  <Icon size={20} strokeWidth={2} />
                </div>
              </div>

              <span className="process-phase-tag">{stepTag}</span>
              <h3 className="process-card-title">{title}</h3>
              <p className="process-card-text">{detail}</p>

              <ul className="process-card-bullets">
                {points.map((pt, i) => (
                  <li key={i}>
                    <Check size={13} className="process-bullet-check" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="process-card-footer">
                <span className="process-step-indicator">
                  {index < 3 ? `Phase 0${index + 1} of 04` : 'Final Phase • Ongoing'}
                </span>
                {index < 3 && (
                  <span className="process-next-arrow" aria-hidden="true">
                    <ArrowRight size={13} />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Process Trust Bar */}
        <div className="process-bottom-trust">
          <div className="process-trust-item">
            <span className="trust-icon-pill">
              <Clock3 size={17} />
            </span>
            <div>
              <strong>7–14 Days Turnaround</strong>
              <small>Rapid onboarding & ledger takeover</small>
            </div>
          </div>

          <div className="process-trust-item">
            <span className="trust-icon-pill">
              <ShieldCheck size={17} />
            </span>
            <div>
              <strong>Zero Disruption Guarantee</strong>
              <small>No downtime on your daily billing</small>
            </div>
          </div>

          <div className="process-trust-item">
            <span className="trust-icon-pill">
              <UsersRound size={17} />
            </span>
            <div>
              <strong>Dedicated UAE Partner</strong>
              <small>Direct CA oversight on all accounts</small>
            </div>
          </div>

          <a
            href="#contact"
            className="button button-primary process-trust-btn"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault()
                onNavigate('contact')
              }
            }}
          >
            <span>Start Your Onboarding</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const [active, setActive] = useState(0)
  return <section className="section testimonials"><div className="container"><SectionIntro eyebrow="What our clients say" title="Built Around Your Business Needs" /><div className="testimonial-controls"><button type="button" aria-label="Previous testimonial" onClick={() => setActive((active + testimonials.length - 1) % testimonials.length)}><ChevronLeft size={17} /></button><button type="button" aria-label="Next testimonial" onClick={() => setActive((active + 1) % testimonials.length)}><ChevronRight size={17} /></button></div><div className="testimonials-grid">{testimonials.map((item, index) => <article className={`testimonial-card ${index === active ? 'featured' : ''}`} key={item.name}><Quote size={24} className="quote-mark" /><p>{item.quote}</p><div className="testimonial-author"><span>{item.initials}</span><div><strong>{item.name}</strong><small>{item.company}</small></div></div></article>)}</div></div></section>
}

function FAQ() {
  const [active, setActive] = useState(0)

  const renderFaqItem = ([question, answer], originalIndex) => (
    <div
      className={`faq-item ${active === originalIndex ? 'open' : ''}`}
      key={question}
      style={{ order: originalIndex }}
    >
      <button
        type="button"
        onClick={() => setActive(active === originalIndex ? -1 : originalIndex)}
        aria-expanded={active === originalIndex}
      >
        <span>{question}</span>
        <ChevronDown size={16} />
      </button>
      {active === originalIndex && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )

  return (
    <section className="section section-mist faq-section">
      <div className="container">
        <div className="faq-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-grid">
          <div className="faq-col">
            {faqs.filter((_, i) => i % 2 === 0).map((item) => renderFaqItem(item, faqs.indexOf(item)))}
          </div>
          <div className="faq-col">
            {faqs.filter((_, i) => i % 2 !== 0).map((item) => renderFaqItem(item, faqs.indexOf(item)))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Insights() {
  return <section className="section" id="insights"><div className="container"><SectionIntro eyebrow="Latest insights" title="Insights for Better Financial Management" /><div className="insights-grid">{insights.map(article => <article className="insight-card" key={article.title}><img src={article.image} alt="" /><div className="insight-body"><span className="pill">{article.category}</span><h3>{article.title}</h3><p>{article.detail}</p><div className="insight-meta"><span>{article.time}</span><a href="#contact" aria-label={`Read ${article.title}`}><ArrowRight size={15} /></a></div></div></article>)}</div></div></section>
}

function Contact() {
  const [values, setValues] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '', privacy: false })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const update = (event) => {
    const { name, value, type, checked } = event.target
    setValues(current => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
    setErrors(current => ({ ...current, [name]: '' }))
    setSubmitted(false)
  }
  const submit = (event) => {
    event.preventDefault()
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.email.trim()) next.email = 'Please enter your email.'
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Please enter a valid email.'
    if (!values.phone.trim()) next.phone = 'Please enter your phone number.'
    if (!values.service) next.service = 'Please select a service.'
    if (!values.message.trim()) next.message = 'Please tell us a little about your requirements.'
    if (!values.privacy) next.privacy = 'Please accept the privacy policy.'
    setErrors(next)
    if (!Object.keys(next).length) setSubmitted(true)
  }
  return <section className="contact-section" id="contact"><div className="contact-backdrop" /><div className="container contact-grid"><div className="contact-copy"><p className="eyebrow eyebrow-light">Get in touch</p><h2>Let's Simplify Your Accounting</h2><p>Tell us about your accounting requirements in the UAE or India. Our team can help you explore tailored accounting, auditing, and corporate tax support.</p><div className="contact-list"><div><span><Mail size={16} /></span><p><strong>Email Address</strong>info@acetrix.com</p></div><div><span><Phone size={16} /></span><p><strong>Phone Numbers</strong>+971 50 653 5070 (UAE)<br />+91 77388 35070 (India)</p></div><div><span><MapPin size={16} /></span><p><strong>Our Offices</strong>Dubai, UAE<br />Kalyan (Thane), Maharashtra, India</p></div><div><span><Clock3 size={16} /></span><p><strong>Business Hours</strong>09:00 to 18:00 All Week / Sunday Off</p></div></div></div><div className="contact-form-wrap"><div className="form-heading"><span>Request a Consultation</span>{submitted && <em><Check size={14} /> Request received</em>}</div><form onSubmit={submit} noValidate><div className="form-row"><Field label="Full Name*" name="name" value={values.name} onChange={update} error={errors.name} placeholder="Enter your name" /><Field label="Business Email*" name="email" type="email" value={values.email} onChange={update} error={errors.email} placeholder="Enter your email" /></div><div className="form-row"><Field label="Phone Number*" name="phone" value={values.phone} onChange={update} error={errors.phone} placeholder="Enter your number" /><Field label="Company Name" name="company" value={values.company} onChange={update} placeholder="Enter company name" /></div><Field label="Service Required*" name="service" type="select" value={values.service} onChange={update} error={errors.service} options={['Select a service', ...services.map(item => item.title)]} /><Field label="Message" name="message" type="textarea" value={values.message} onChange={update} error={errors.message} placeholder="Tell us about your requirements..." /><label className={`check-label ${errors.privacy ? 'has-error' : ''}`}><input type="checkbox" name="privacy" checked={values.privacy} onChange={update} /><span>I agree to the Privacy Policy</span></label>{errors.privacy && <small className="field-error privacy-error">{errors.privacy}</small>}<button className="button button-primary form-submit" type="submit">Request a Consultation <ArrowRight size={15} /></button></form></div></div></section>
}

function Field({ label, name, type = 'text', value, onChange, error, placeholder, options }) {
  return <label className={`field ${error ? 'has-error' : ''}`}><span>{label}</span>{type === 'select' ? <select name={name} value={value} onChange={onChange}><option value="">{options[0]}</option>{options.slice(1).map(option => <option value={option} key={option}>{option}</option>)}</select> : type === 'textarea' ? <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} rows="3" /> : <input name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} />}{error && <small className="field-error">{error}</small>}</label>
}

function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo light onNavigate={onNavigate} />
          <p className="footer-tagline" style={{ fontWeight: 700, color: '#2dd4bf', marginTop: '12px', marginBottom: '8px', fontSize: '15px' }}>
            “Automate Your Accounts. Ace Your Finances.”
          </p>
          <p className="footer-description">
            AcEtrix Accounting & Automation Solutions helps businesses simplify accounting, automate workflows, ensure UAE FTA tax compliance, improve financial visibility, and manage regional operations with confidence.
          </p>
          <div className="socials" aria-label="Social media links">
            <a href="#/contact" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('contact') } }} aria-label="LinkedIn" className="social-link">in</a>
            <a href="#/contact" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('contact') } }} aria-label="Facebook" className="social-link">f</a>
            <a href="#/contact" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('contact') } }} aria-label="Instagram" className="social-link">◎</a>
            <a href="#/contact" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('contact') } }} aria-label="YouTube" className="social-link">▶</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links-list">
            {footerQuickLinks.map(item => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (onNavigate && item.route) {
                      e.preventDefault()
                      onNavigate(item.route)
                    }
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3>Our Services</h3>
          <ul className="footer-links-list">
            {footerServices.map(item => (
              <li key={item.label}>
                <a
                  href="#/services"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault()
                      onNavigate('services', item.category)
                    }
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h3>Get in Touch</h3>
          <div className="footer-contact-details">
            <a href="mailto:info@acetrix.ae" className="footer-contact-item">
              <Mail size={18} />
              <span>info@acetrix.ae</span>
            </a>
            <a href="tel:+971506535070" className="footer-contact-item">
              <Phone size={18} />
              <span>+971 50 653 5070 (UAE)</span>
            </a>
            <a href="tel:+917738835070" className="footer-contact-item">
              <Phone size={18} />
              <span>+91 77388 35070 (India)</span>
            </a>
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>Dubai, UAE & Kalyan (Thane), India</span>
            </div>
            <div className="footer-contact-item">
              <Clock3 size={18} />
              <span>09:00 to 18:00 All Week / Sunday Off</span>
            </div>
          </div>
          <a
            className="footer-cta-btn"
            href="#/contact"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault()
                onNavigate('contact')
              }
            }}
          >
            Book a Consultation <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <span className="copyright-text">
            © All Rights Reserved | Developed by{' '}
            <a
              href="https://mostech.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-developer-link"
            >
              Mostech Business Solutions
            </a>
          </span>
          <div className="legal-links">
            <a
              href="#/contact"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault()
                  onNavigate('contact')
                }
              }}
            >
              Privacy Policy
            </a>
            <span className="legal-dot" aria-hidden="true">•</span>
            <a
              href="#/contact"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault()
                  onNavigate('contact')
                }
              }}
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function getRouteFromHash() {
  const hash = window.location.hash.toLowerCase()
  if (hash.startsWith('#/about')) return { route: 'about', category: null }
  if (hash.startsWith('#/service')) {
    const match = hash.match(/cat=([a-z\-]+)/)
    return { route: 'services', category: match ? match[1] : 'accounting' }
  }
  if (hash.startsWith('#/location')) return { route: 'locations', category: null }
  if (hash.startsWith('#/industr')) return { route: 'industries', category: null }
  if (hash.startsWith('#/contact')) return { route: 'contact', category: null }
  return { route: 'home', category: null }
}

export default function App() {
  const [routeInfo, setRouteInfo] = useState(getRouteFromHash)

  useEffect(() => {
    const handleHashChange = () => {
      const next = getRouteFromHash()
      setRouteInfo(next)
      if (next.route === 'services' && next.category) {
        setTimeout(() => {
          const target = document.getElementById('services-main') || document.querySelector('.services-main-section')
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
        }, 80)
      } else if (window.location.hash.startsWith('#/')) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigateTo = (route, category = null) => {
    let newHash = `#/${route}`
    if (category) newHash += `?cat=${category}`
    window.location.hash = newHash
    setRouteInfo({ route, category })

    if (route === 'services' && category) {
      setTimeout(() => {
        const target = document.getElementById('services-main') || document.querySelector('.services-main-section')
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 80)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <Header currentRoute={routeInfo.route} onNavigate={navigateTo} />
      <main>
        {routeInfo.route === 'about' && <AboutPage onNavigate={navigateTo} />}
        {routeInfo.route === 'services' && (
          <ServicesPage
            key={routeInfo.category || 'services-default'}
            onNavigate={navigateTo}
            initialCategory={routeInfo.category || 'accounting'}
          />
        )}
        {routeInfo.route === 'locations' && <LocationsPage onNavigate={navigateTo} />}
        {routeInfo.route === 'industries' && <IndustriesPage onNavigate={navigateTo} />}
        {routeInfo.route === 'contact' && <ContactPage onNavigate={navigateTo} />}
        {routeInfo.route === 'home' && (
          <>
            <Hero onNavigate={navigateTo} />
            <TrustStrip />
            <UAEPresence />
            <ApprovedFreezones />
            <LeadershipVision />
            <Services onNavigate={navigateTo} />
            <WhyAcetrix onNavigate={navigateTo} />
            <Industries onNavigate={navigateTo} />
            <Process onNavigate={navigateTo} />
            <Testimonials />
            <FAQ />
            <Insights />
            <Contact />
          </>
        )}
      </main>
      <Footer onNavigate={navigateTo} />
      <a
        className="floating-chat"
        href="#/contact"
        onClick={(e) => {
          e.preventDefault()
          navigateTo('contact')
        }}
        aria-label="Contact Acetrix"
        title="Contact Us"
      >
        <MessageSquareText size={22} />
        <span className="floating-chat-tooltip">Contact Us</span>
      </a>
    </>
  )
}

