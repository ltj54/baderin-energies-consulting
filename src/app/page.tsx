import LifecycleSection from "./LifecycleSection";
import Link from "next/link";

const businessDetails = [
  { label: "Organisation number", value: "938 732 078" },
  { label: "Legal form", value: "Sole proprietorship" },
  { label: "Industry code", value: "71.129 · Other technical consultancy activities" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Baderin Energies Consulting",
  legalName: "BADERIN ENERGIES CONSULTING",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Norwegian organisation number",
    value: "938732078",
  },
  description:
    "Norwegian engineering and technical consultancy supporting oil, gas and energy projects across the project lifecycle.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Skiftesvikveien 25",
    postalCode: "4072",
    addressLocality: "Randaberg",
    addressCountry: "NO",
  },
};

function Arrow({ diagonal = false }: Readonly<{ diagonal?: boolean }>) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export default function Home() {
  return <>
    <div className="preview-banner">Early website preview · Content and contact details are still being reviewed</div>
    <header className="site-header">
      <Link className="brand" href={{ pathname: "/", hash: "top" }} aria-label="Baderin Energies Consulting, back to top">
        <span className="brand-symbol" aria-hidden="true"><i /><i /><i /></span>
        <span>Baderin <strong>Energies</strong><small>CONSULTING</small></span>
      </Link>
      <div className="header-actions">
        <nav aria-label="Main navigation">
          <Link href={{ pathname: "/", hash: "scope" }}>Scope</Link>
          <Link href={{ pathname: "/", hash: "lifecycle" }}>Project lifecycle</Link>
          <Link href={{ pathname: "/", hash: "business" }}>Business</Link>
          <Link href={{ pathname: "/", hash: "contact" }}>Contact</Link>
        </nav>
        <label className="language-select">
          <span>Language</span>
          <select defaultValue="en" disabled aria-label="Language selection, available later" title="More languages will be available later">
            <option value="en">English</option>
            <option value="no">Norwegian</option>
          </select>
        </label>
      </div>
    </header>
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> ENGINEERING · ENERGY · PROJECTS</p>
          <h1 id="hero-title">Oil, gas and energy <em>project consultancy.</em></h1>
          <p className="hero-description">Baderin Energies Consulting provides technical consultancy, project coordination and project management support for oil, gas and energy projects.</p>
          <Link className="primary-link" href={{ pathname: "/", hash: "lifecycle" }}>View the project stages <Arrow diagonal /></Link>
        </div>
        <div className="hero-note">
          <p className="note-kicker">HOW PROJECT WORK DEVELOPS</p>
          <p className="note-quote">Support can be provided from early project definition through engineering and execution phases.</p>
          <ul aria-label="Project development">
            <li><div><strong>Understand</strong><p>Define the need, objectives and constraints.</p></div></li>
            <li><div><strong>Develop</strong><p>Compare options and define the technical solution.</p></div></li>
            <li><div><strong>Support delivery</strong><p>Coordinate decisions, interfaces and project activities.</p></div></li>
          </ul>
        </div>
      </section>

      <section className="statement" id="scope" aria-labelledby="scope-title">
        <div className="section-label">WHAT THE WORK COVERS</div>
        <div className="statement-content">
          <h2 id="scope-title">Technical consultancy and project coordination.</h2>
          <p>Support may include early project definition, studies of technical options, development of the technical basis, execution planning and coordination across project phases. During engineering and EPCI, the role is advisory or coordinative and may include project management support.</p>
        </div>
      </section>

      <LifecycleSection />

      <section className="about" id="business" aria-labelledby="about-title">
        <div className="about-rail"><span>ABOUT THE BUSINESS</span><span className="rail-mark" aria-hidden="true">B / E</span></div>
        <div className="about-content">
          <h2 id="about-title">Baderin Energies Consulting</h2>
          <p className="about-lead">Baderin Energies Consulting is an independent technical consultancy based in Randaberg, Norway. The business provides consultancy and project management support for oil, gas and energy project work.</p>
          <dl className="business-details">
            {businessDetails.map((detail) => <div key={detail.label}><dt>{detail.label}</dt><dd>{detail.value}</dd></div>)}
          </dl>
          <div className="registered-office">
            <div><span>Registered proprietor</span><strong>Adetoyese Ifedayo Baderin</strong></div>
            <address><span>Business address</span><strong>Skiftesvikveien 25<br />4072 Randaberg, Norway</strong></address>
          </div>
          <p className="registry-note">Registered in the Norwegian Register of Legal Entities.</p>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title"><div className="contact-intro"><p className="section-label">CONTACT</p><h2 id="contact-title">Contact</h2><p>The public email address and telephone number will be added after they have been confirmed.</p><div className="contact-note"><span>CONTACT DETAILS</span><strong>To be confirmed before launch</strong></div></div><div className="form-card"><h3>Project enquiry</h3><p>This preview form cannot send messages.</p><form aria-label="Contact form preview"><label htmlFor="name">Your name</label><input id="name" name="name" type="text" placeholder="Your name" autoComplete="name" /><label htmlFor="email">Your email</label><input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" /><label htmlFor="message">Project or question</label><textarea id="message" name="message" rows={4} placeholder="Describe the project or question …" /><button type="button" disabled>Send message</button><small>The form remains disabled until the recipient and contact service have been approved.</small></form></div></section>
    </main>
    <footer><span>Baderin Energies Consulting · Org. no. 938 732 078</span><span>Concept preview · Not the final published website</span></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
  </>;
}
