const sectionHref = (sectionId: string) => `#${sectionId}`;

const services = [
  {
    title: "Early project work",
    text: "Support with project definition, technical option studies and preparation of the basis for further work.",
  },
  {
    title: "Engineering phase support",
    text: "Advisory and coordination support during pre-FEED, FEED and engineering phases.",
  },
  {
    title: "Execution phase support",
    text: "Project coordination and project management support during engineering and EPCI activities.",
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Baderin Energies Consulting",
  legalName: "BADERIN ENERGIES CONSULTING",
  description: "Independent technical consultancy providing project support for oil, gas and energy work.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Randaberg",
    addressCountry: "NO",
  },
};

export default function Home() {
  return (
    <>
      <div className="preview-banner">
        Preliminary website preview · Company profile and contact details are being reviewed
      </div>

      <header className="site-header">
        <a className="brand" href={sectionHref("top")} aria-label="Baderin Energies Consulting, back to top">
          <span className="brand-symbol" aria-hidden="true"><i /><i /><i /></span>
          <span>Baderin <strong>Energies</strong><small>CONSULTING</small></span>
        </a>

        <div className="header-actions">
          <nav aria-label="Main navigation">
            <a href={sectionHref("services")}>Services</a>
            <a href={sectionHref("consultant")}>Consultant</a>
            <a href={sectionHref("contact")}>Contact</a>
          </nav>
          <label className="language-select">
            <span>Language</span>
            <select defaultValue="en" disabled aria-label="Language selection, available later">
              <option value="en">English</option>
              <option value="no">Norwegian</option>
            </select>
          </label>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">INDEPENDENT TECHNICAL CONSULTANCY · RANDABERG</p>
            <h1 id="hero-title">Project support for oil, gas and energy.</h1>
            <p className="hero-description">
              Baderin Energies Consulting is a sole proprietorship providing technical consultancy,
              project coordination and project management support.
            </p>
            <a className="primary-link" href={sectionHref("services")}>
              See the preliminary service scope <span aria-hidden="true">↓</span>
            </a>
          </div>

          <aside className="profile-status" aria-label="Current business profile">
            <p className="section-label">CURRENT PROFILE</p>
            <dl>
              <div><dt>Business</dt><dd>Independent technical consultancy</dd></div>
              <div><dt>Sector</dt><dd>Oil, gas and energy</dd></div>
              <div><dt>Support</dt><dd>Technical consultancy, coordination and project management</dd></div>
            </dl>
            <p className="status-note">
              The professional profile, qualifications, detailed services and selected experience
              are being reviewed before publication.
            </p>
          </aside>
        </section>

        <section className="services" id="services" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="section-label">PRELIMINARY SERVICE SCOPE</p>
            <h2 id="services-title">Defined at a preliminary level.</h2>
            <p>
              The final service description will be based on the consultant&apos;s documented background
              and the types of assignments the business intends to accept.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>

          <p className="scope-clarification">
            References to EPCI describe support within the client&apos;s project phase. They do not imply
            that the business delivers a complete EPCI contract.
          </p>
        </section>

        <section className="consultant" id="consultant" aria-labelledby="consultant-title">
          <div>
            <p className="section-label">THE CONSULTANT</p>
            <h2 id="consultant-title">Adetoyese Ifedayo Baderin</h2>
          </div>
          <div className="consultant-copy">
            <p>
              Adetoyese Ifedayo Baderin is the registered proprietor of Baderin Energies Consulting,
              an independent consultancy based in Randaberg, Norway.
            </p>
            <div className="pending-profile">
              <h3>Professional profile in preparation</h3>
              <p>
                A concise account of relevant education, roles, disciplines, project experience and
                qualifications will be published after the information has been confirmed. No client
                names, project claims or credentials are presented in this preview.
              </p>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact-intro">
            <p className="section-label">CONTACT</p>
            <h2 id="contact-title">Contact</h2>
            <p>
              The public email address and telephone number will be added after they have been confirmed.
            </p>
            <div className="contact-note">
              <span>CONTACT DETAILS</span>
              <strong>To be confirmed before launch</strong>
            </div>
          </div>

          <div className="form-card">
            <h3>Project enquiry</h3>
            <p>This preview form cannot send messages.</p>
            <form aria-label="Contact form preview">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" placeholder="Your name" autoComplete="name" />

              <label htmlFor="email">Your email</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />

              <label htmlFor="message">Project or question</label>
              <textarea id="message" name="message" rows={4} placeholder="Describe the project or question …" />

              <button type="button" disabled>Send message</button>
              <small>The form remains disabled until the recipient and contact service have been approved.</small>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <span>Baderin Energies Consulting</span>
        <span>Temporary concept preview</span>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
