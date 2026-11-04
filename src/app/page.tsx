const phases = [
  { name: "Concept", detail: "Early project definition" },
  { name: "Studies", detail: "Options and scope" },
  { name: "Pre-FEED", detail: "Preparing the next decision" },
  { name: "FEED", detail: "Front-end engineering design" },
  { name: "EPCI", detail: "Execution and delivery" },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export default function Home() {
  return <>
    <div className="preview-banner">First concept preview · Content and contact details are subject to approval</div>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Baderin Energies Consulting, back to top">
        <span className="brand-symbol" aria-hidden="true"><i /><i /><i /></span>
        <span>Baderin <strong>Energies</strong><small>CONSULTING</small></span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#scope">Scope</a>
        <a href="#lifecycle">Project lifecycle</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> OIL · GAS · ENERGY</p>
          <h1 id="hero-title">From first concept<br />to <em>project delivery.</em></h1>
          <p className="hero-description">Consulting across the energy project lifecycle: concept, studies, pre-FEED, FEED, EPCI and project management.</p>
          <a className="primary-link" href="#scope">Explore the scope <Arrow diagonal /></a>
        </div>
        <div className="hero-graphic" role="img" aria-label="Abstract diagram of the project lifecycle, from concept to delivery">
          <div className="graphic-grid" />
          <div className="graphic-top"><span>PROJECT PATH</span><span>CONCEPT → DELIVERY</span></div>
          <div className="graphic-core"><span className="graphic-orbit orbit-one" /><span className="graphic-orbit orbit-two" /><span className="graphic-orbit orbit-three" /><span className="graphic-axis" /><span className="graphic-node node-one" /><span className="graphic-node node-two" /><span className="graphic-node node-three" /></div>
          <div className="graphic-bottom"><span>Define</span><span>Develop</span><span>Deliver</span></div>
        </div>
      </section>

      <section className="statement" id="scope" aria-labelledby="scope-title">
        <div className="section-label">THE SCOPE</div>
        <div className="statement-content">
          <h2 id="scope-title">Support where projects change shape.</h2>
          <p>Energy projects move through a series of decisions: defining the idea, developing the technical basis and carrying it through execution. Baderin Energies Consulting works across these connected stages.</p>
        </div>
      </section>

      <section className="lifecycle" id="lifecycle" aria-labelledby="lifecycle-title">
        <div className="lifecycle-heading"><div><p className="section-label">PROJECT LIFECYCLE</p><h2 id="lifecycle-title">One view across the stages.</h2></div><p>From early study to engineering and execution, each stage has its own questions and decisions.</p></div>
        <ol className="phase-list">{phases.map((phase) => <li key={phase.name}><span className="phase-bar" aria-hidden="true" /><div><h3>{phase.name}</h3><p>{phase.detail}</p></div><Arrow /></li>)}</ol>
        <div className="management-line"><span className="management-dot" /><div><strong>Project management</strong><p>Supporting the work across the project lifecycle.</p></div><span className="management-rule" /></div>
      </section>

      <section className="about" aria-labelledby="about-title"><div className="about-rail"><span>ABOUT THE BUSINESS</span><span className="rail-mark" aria-hidden="true">B / E</span></div><div><h2 id="about-title">Baderin Energies Consulting</h2><p>A Norwegian sole proprietorship focused on oil, gas and energy consulting. The business covers work from early project definition through engineering phases and execution.</p></div></section>

      <section className="contact" id="contact" aria-labelledby="contact-title"><div className="contact-intro"><p className="section-label">CONTACT</p><h2 id="contact-title">Discuss a project.</h2><p>Once the preferred public contact details are confirmed, they can appear here. The form is shown only to illustrate how an enquiry could work.</p><div className="contact-note"><span>CONTACT DETAILS</span><strong>To be confirmed before launch</strong></div></div><div className="form-card"><h3>Your message</h3><p>This form is a preview and cannot send messages yet.</p><form aria-label="Contact form preview"><label htmlFor="name">Name</label><input id="name" name="name" type="text" placeholder="Your name" autoComplete="name" /><label htmlFor="email">Email</label><input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" /><label htmlFor="message">Message</label><textarea id="message" name="message" rows={4} placeholder="Tell us about your enquiry …" /><button type="button" disabled>Send message</button><small>Sending will be enabled only after the recipient and contact service have been approved.</small></form></div></section>
    </main>
    <footer><span>Baderin Energies Consulting</span><span>Concept preview · Not the final published website</span></footer>
  </>;
}
