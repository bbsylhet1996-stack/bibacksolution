import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Asterisk, Check, CheckCheck, ChevronDown, Code2, Globe2, MapPin, Menu, Search, Sparkles, Target, TrendingUp, X } from 'lucide-react'

export const Route = createFileRoute('/')({ component: HomePage })

const services = [
  { icon: MapPin, title: 'Local SEO', label: 'OWN YOUR NEIGHBORHOOD', description: 'Be the business people find when they’re ready to buy. Build a stronger presence in your local market.', details: ['Google Business Profile optimization', 'Local landing pages and citations', 'Location-specific keyword strategy'], color: 'peach' },
  { icon: Code2, title: 'Technical SEO', label: 'BUILD A STRONG FOUNDATION', description: 'Give search engines a clear path to your content. Turn technical roadblocks into opportunities.', details: ['Crawlability and indexing reviews', 'Site structure and internal linking', 'Performance and page experience'], color: 'mint' },
  { icon: Search, title: 'Content & on-page SEO', label: 'TURN SEARCHES INTO CUSTOMERS', description: 'Connect what your customers are searching for with content that’s genuinely worth finding.', details: ['Search intent and keyword research', 'Content planning and optimization', 'Titles, descriptions, and page structure'], color: 'lavender' },
  { icon: Globe2, title: 'International SEO', label: 'GO BEYOND BORDERS', description: 'Reach the right audience in the right market. Grow internationally without losing local relevance.', details: ['Country and language targeting', 'International site architecture', 'Market-specific content planning'], color: 'yellow' },
]

const markets = {
  USA: { title: 'Big market. Local understanding.', description: 'From a neighborhood business to a nationwide brand, build a search strategy around the way your American customers actually look for you.', tags: ['Local & national search', 'Competitive market research', 'US-focused content'], cities: 'NEW YORK · AUSTIN · LOS ANGELES · AND BEYOND', code: 'US' },
  Canada: { title: 'A strategy that feels closer to home.', description: 'Connect with customers across Canada through location-aware search strategies, regional content, and a technical foundation built for growth.', tags: ['Canadian search intent', 'Regional visibility', 'English & French planning'], cities: 'TORONTO · VANCOUVER · MONTRÉAL · AND BEYOND', code: 'CA' },
  Worldwide: { title: 'Your next customer could be anywhere.', description: 'Expand into new markets with a thoughtful approach to languages, country targeting, and the searches that matter to each audience.', tags: ['Multi-market strategy', 'Language & country targeting', 'Localized content'], cities: 'LOCAL RELEVANCE. GLOBAL POSSIBILITY.', code: 'GL' },
}

const faqs = [
  ['Do you work with businesses outside the USA and Canada?', 'Yes. Our focus is the USA and Canada, but our services are available worldwide. Your strategy is tailored to your target countries, languages, and customers—not simply copied from one market to another.'],
  ['How long does SEO take?', 'SEO is a long-term investment. The timeline depends on your website, competition, and starting point. We begin with the most important opportunities and agree on realistic milestones rather than promising overnight rankings.'],
  ['What’s included in the free SEO review?', 'Share your website and goals, and we’ll review your inquiry to identify an appropriate starting point. The initial review focuses on your search presence, potential technical issues, and opportunities to discuss. It’s a human review, not an instant automated score.'],
  ['Can you guarantee a number-one ranking?', 'No. Search rankings are influenced by factors no agency fully controls. We focus on sound practices, transparent work, and the business outcomes that matter—not guaranteed positions.'],
  ['Do I need a new website to get started?', 'Usually, no. We work with your existing website wherever possible. If your platform or site structure is holding you back, we’ll explain the issue and help you prioritize a practical solution.'],
]

function Brand({ light = false }: { light?: boolean }) {
  return <a className={`brand${light ? ' brand-light' : ''}`} href="/" aria-label="Northstar SEO home"><Asterisk size={36} strokeWidth={2.7} /><span>northstar<span className="brand-suffix">seo</span></span></a>
}

function GrowthVisual() {
  return <div className="growth-visual" aria-label="Illustration of a search strategy connecting visibility to growth">
    <div className="orbit orbit-one" /><div className="orbit orbit-two" />
    <div className="visual-corner"><span className="live-dot" /> A CLEARER PATH TO GROWTH</div>
    <div className="search-preview"><Search size={19} /><span>your business, discovered.</span><span className="search-enter"><ArrowRight size={17} /></span></div>
    <div className="growth-card"><div className="growth-card-top"><span><span className="mini-dot" /> ORGANIC OPPORTUNITY</span><TrendingUp size={20} /></div><div className="growth-heading">Small steps.<br /><strong>Greater reach.</strong></div>
      <div className="bar-chart" aria-hidden="true">{[23, 32, 28, 43, 39, 55, 63, 58, 77, 90].map((height, index) => <div className={index > 6 ? 'bar bar-accent' : 'bar'} key={index} style={{ height: `${height}%` }} />)}<svg className="chart-line" viewBox="0 0 340 125"><path d="M8 109 C40 109 50 89 75 91 S113 81 135 74 S164 78 185 55 S217 54 238 37 S278 41 330 8" /><path d="m318 9 12-1-2 12" /></svg></div>
      <div className="chart-labels"><span>THE STARTING POINT</span><span>WHAT’S NEXT ↗</span></div><div className="illustration-note">Concept illustration · not client performance data</div>
    </div>
    <div className="visibility-note"><span className="note-icon"><CheckCheck size={21} /></span><div><strong>More than rankings.</strong><span>Real business momentum.</span></div></div>
    <div className="globe-badge"><Globe2 size={31} strokeWidth={1.2} /><span>LOCAL EXPERTISE<br /><strong>GLOBAL REACH</strong></span></div>
    <Asterisk className="visual-star" size={65} strokeWidth={1.3} />
  </div>
}

function AuditForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'sending') return
    const form = event.currentTarget
    const fields = new FormData(form)
    const body = new URLSearchParams()
    fields.forEach((value, key) => { if (typeof value === 'string') body.append(key, value) })
    setStatus('sending')
    try {
      const response = await fetch('/__forms.html', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() })
      if (!response.ok) throw new Error('Submission failed')
      setStatus('success')
      form.reset()
    } catch { setStatus('error') }
  }
  if (status === 'success') return <div className="form-success" role="status"><span className="success-icon"><Check size={32} /></span><h3>You’re on the right path.</h3><p>Your request has been received. We’ll use the email you provided to get in touch about your website and next steps.</p><button className="text-link" onClick={() => setStatus('idle')}>Send another inquiry <ArrowUpRight size={17} /></button></div>
  return <form name="seo-review" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="audit-form">
    <input type="hidden" name="form-name" value="seo-review" />
    <p hidden><label>Leave this field empty<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
    <div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="Alex Morgan" required maxLength={120} /></label><label>Work email<input name="email" type="email" autoComplete="email" placeholder="alex@company.com" required maxLength={254} /></label></div>
    <label>Website URL<input name="website" type="url" autoComplete="url" placeholder="https://yourwebsite.com" required maxLength={500} /></label>
    <label>Where do you want to grow?<select name="market" defaultValue="USA"><option>USA</option><option>Canada</option><option>USA & Canada</option><option>Worldwide</option></select></label>
    <label>What would you like to achieve? <span className="optional">(optional)</span><textarea name="goals" rows={3} placeholder="More local customers? A new market? Tell us a little about your goals." maxLength={3000} /></label>
    <label className="consent"><input name="consent" type="checkbox" value="yes" required /><span>I agree to be contacted about my request and have read the <a href="#privacy" onClick={() => { const notice = document.getElementById('privacy'); if (notice instanceof HTMLDetailsElement) notice.open = true }}>privacy notice</a>.</span></label>
    {status === 'error' && <p className="form-error" role="alert">Your request couldn’t be sent. Please try again. Your details are still here.</p>}
    <button className="button button-orange" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending your request…' : 'Request my free SEO review'}<ArrowUpRight size={19} /></button>
    <p className="form-footnote">No obligation. No automated sales pitch. Just a conversation.</p>
  </form>
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [market, setMarket] = useState<keyof typeof markets>('USA')
  const currentMarket = markets[market]
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="container header-inner"><Brand /><nav id="main-navigation" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">{[['Services', 'services'], ['Our approach', 'approach'], ['Where we work', 'markets']].map(([label, anchor]) => <a key={anchor} href={`#${anchor}`} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="mobile-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <ArrowUpRight size={16} /></a></nav><a className="button button-outline header-cta" href="#contact">Let’s talk <ArrowUpRight size={17} /></a><button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div></header>
    <main id="main">
      <section className="hero container"><div className="hero-copy"><div className="hero-eyebrow"><span className="live-dot" /> YOUR NEXT CHAPTER STARTS IN SEARCH</div><h1>Get found.<br />Grow <span className="headline-accent">beyond.<svg viewBox="0 0 450 20" aria-hidden="true"><path d="M4 13 Q205 -2 444 10" /></svg></span></h1><p className="hero-description">You do great work. Let’s make sure the world finds it. Thoughtful SEO for ambitious businesses in the <strong>USA, Canada, and beyond.</strong></p><div className="hero-actions"><a className="button button-orange" href="#contact">Get a free SEO review <ArrowUpRight size={19} /></a><a className="hero-secondary" href="#services">Explore our services <ArrowDown size={17} /></a></div><div className="hero-reassurance"><span><Check size={14} /> Strategy, not shortcuts</span><span><Check size={14} /> Built around your business</span></div></div><GrowthVisual /></section>
      <div className="principles-strip"><div className="container principles-inner"><span className="strip-caption">A BETTER WAY TO GROW</span><span><Target size={20} /> Intent-led strategy</span><Asterisk className="strip-star" size={15} /><span><TrendingUp size={20} /> Sustainable growth</span><Asterisk className="strip-star" size={15} /><span><Globe2 size={20} /> Local to global</span><Asterisk className="strip-star" size={15} /><span><Sparkles size={20} /> No smoke. No mirrors.</span></div></div>
      <section id="services" className="section container"><div className="section-top"><div><span className="eyebrow">01 / WHAT WE DO</span><h2>Search is complicated.<br />Your next move shouldn’t be.</h2></div><p>From the foundations to the big picture, we connect the dots so your business can move forward.</p></div><div className="services-grid">{services.map((service, index) => <article className="service-card" key={service.title}><div className="service-card-top"><span className={`service-icon ${service.color}`}><service.icon size={25} strokeWidth={1.6} /></span><span className="service-number">0{index + 1}</span></div><span className="service-label">{service.label}</span><h3>{service.title}</h3><p>{service.description}</p><details className="service-details"><summary>What’s included <span className="details-plus">+</span></summary><ul>{service.details.map(detail => <li key={detail}><Check size={13} />{detail}</li>)}</ul><a href="#contact">Let’s discuss your project <ArrowUpRight size={15} /></a></details></article>)}</div></section>
      <section id="approach" className="approach-section"><div className="container approach-inner"><div className="approach-intro"><span className="eyebrow">02 / THE NORTHSTAR APPROACH</span><h2>Less guesswork.<br />More direction.</h2><p>There’s no one-size-fits-all playbook. Just a clear process, honest conversations, and a strategy that starts with you.</p><a className="text-link" href="#contact">Find your starting point <ArrowUpRight size={18} /></a><div className="compass-art" aria-hidden="true"><div className="compass-ring" /><Asterisk size={145} strokeWidth={0.8} /><span className="compass-n">N</span><span className="compass-e">E</span><span className="compass-s">S</span><span className="compass-w">W</span><span className="compass-label">YOUR GOALS. OUR DIRECTION.</span></div></div><div className="process-list">{[{ title: 'Understand before we optimize.', text: 'We get to know your business, your customers, and what growth actually means to you. Then we audit where you stand.' }, { title: 'Make a plan that makes sense.', text: 'We prioritize the opportunities that matter. You get a clear roadmap, practical recommendations, and a shared definition of progress.' }, { title: 'Build. Measure. Keep improving.', text: 'We put the strategy to work and report on what matters. As your business evolves, your search strategy evolves with it.' }].map((step, index) => <div className="process-step" key={step.title}><span className="step-number">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></div>)}<div className="approach-note"><CheckCheck size={19} /><span>Clear priorities. Transparent reporting. No ranking guarantees.</span></div></div></div></section>
      <section id="markets" className="section container markets-section"><div className="section-top"><div><span className="eyebrow">03 / CLOSE TO HOME. OPEN TO THE WORLD.</span><h2>Different markets.<br />The same ambition.</h2></div><p>Rooted in the USA and Canada.<br />Ready for wherever you’re headed.</p></div><div className="market-panel"><div className="market-content"><div className="market-tabs" role="tablist" aria-label="Service markets">{(Object.keys(markets) as Array<keyof typeof markets>).map(region => <button id={`tab-${region}`} key={region} role="tab" aria-selected={market === region} aria-controls="market-details" tabIndex={market === region ? 0 : -1} className={market === region ? 'active' : ''} onClick={() => setMarket(region)} onKeyDown={event => { const regions = Object.keys(markets) as Array<keyof typeof markets>; const position = regions.indexOf(region); let next = position; if (event.key === 'ArrowRight') next = (position + 1) % regions.length; else if (event.key === 'ArrowLeft') next = (position + regions.length - 1) % regions.length; else if (event.key === 'Home') next = 0; else if (event.key === 'End') next = regions.length - 1; else return; event.preventDefault(); setMarket(regions[next]); document.getElementById(`tab-${regions[next]}`)?.focus() }}>{region}</button>)}</div><div id="market-details" role="tabpanel" aria-labelledby={`tab-${market}`} tabIndex={0}><h3>{currentMarket.title}</h3><p>{currentMarket.description}</p><div className="market-tags">{currentMarket.tags.map(tag => <span key={tag}><Check size={13} />{tag}</span>)}</div><a className="text-link" href="#contact">Let’s grow in {market === 'Worldwide' ? 'your next market' : market === 'USA' ? 'the USA' : 'Canada'} <ArrowUpRight size={17} /></a></div></div><div className="market-visual"><div className="globe-lines" aria-hidden="true"><Globe2 size={235} strokeWidth={0.6} /><span className="location-dot location-one" /><span className="location-dot location-two" /><span className="location-label">{currentMarket.code} <ArrowUpRight size={12} /></span></div><span className="market-cities">{currentMarket.cities}</span></div></div></section>
      <section className="faq-section container" id="faq"><div><span className="eyebrow">A LITTLE MORE CLARITY</span><h2>Good questions.<br />Straight answers.</h2><p>No jargon required.</p></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={20} /></summary><p>{answer}</p></details>)}</div></section>
      <section id="contact" className="contact-section"><div className="container contact-inner"><div className="contact-copy"><span className="eyebrow">YOUR NEXT MOVE</span><h2>Let’s put your<br />business on<br /><span>the map.</span></h2><p>Tell us a little about your website. We’ll help you see where you are—and where you could go next.</p><div className="contact-benefits"><span><Check size={17} /> A fresh perspective on your website</span><span><Check size={17} /> A conversation about your goals</span><span><Check size={17} /> A practical starting point</span></div><span className="contact-world"><Globe2 size={19} /> USA & Canada focused. Worldwide welcome.</span></div><div className="form-card"><h3>Your growth starts here.</h3><p className="form-intro">Request your complimentary SEO review.</p><AuditForm /></div></div></section>
    </main>
    <footer className="site-footer"><div className="container"><div className="footer-top"><div><Brand light /><p>Good work deserves to be found.</p></div><div className="footer-links"><a href="#services">Services</a><a href="#approach">Our approach</a><a href="#markets">Our markets</a><a href="#faq">FAQs</a><a href="#contact">Let’s talk <ArrowUpRight size={14} /></a></div></div><details className="privacy-notice" id="privacy"><summary>Privacy notice <ChevronDown size={14} /></summary><p>When you request a review, Northstar SEO collects the name, email address, website, target market, and optional goals you submit, along with your consent. This information is stored through Netlify Forms and used to review and respond to your inquiry. Do not submit passwords, credentials, or sensitive personal information. We do not use this form to subscribe you to marketing emails. You can reply to our follow-up to request access to or deletion of your submission. Netlify may process technical request information for security and spam prevention.</p></details><div className="footer-bottom"><span>© {new Date().getUTCFullYear()} Northstar SEO. All rights reserved.</span><span>Made for a more discoverable world. <Asterisk size={16} /></span></div></div></footer>
  </>
}
