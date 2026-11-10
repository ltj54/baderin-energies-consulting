import Image from "next/image";
import profilePhoto from "./toyese-baderin.jpeg";
import installationPhoto from "./offshore-installation.jpeg";
import offshorePhoto from "./toyese-offshore.jpeg";

const sectionHref = (sectionId: string) => `#${sectionId}`;

const services = [
  {
    title: "Project leadership",
    text: "Project planning, interface coordination, technical follow-up and delivery support across multidisciplinary teams.",
  },
  {
    title: "Installation engineering",
    text: "Engineering support for subsea pipelines and flowlines, subsea and topside structures, and IMR activities.",
  },
  {
    title: "Offshore energy systems",
    text: "Technical consultancy for offshore installation work, including power and fibre-optic cable systems.",
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Baderin Energies Consulting",
  legalName: "BADERIN ENERGIES CONSULTING",
  description: "Independent oil, gas and energy consultancy led by Toyese Baderin, a project lead and installation engineer with 15 years of industry experience.",
  email: "rinenergies@gmail.com",
  telephone: "+47 97376046",
  founder: {
    "@type": "Person",
    name: "Toyese Baderin",
    jobTitle: "Project Lead and Installation Engineer",
    sameAs: "https://www.linkedin.com/in/toyese-baderin-25ab0b21",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Skiftesvikveien 25",
    postalCode: "4072",
    addressLocality: "Randaberg",
    addressCountry: "NO",
  },
};

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href={sectionHref("top")} aria-label="Baderin Energies Consulting, back to top">
          <span className="brand-symbol" aria-hidden="true"><i /><i /><i /></span>
          <span>Baderin <strong>Energies</strong><small>CONSULTING</small></span>
        </a>

        <div className="header-actions">
          <nav aria-label="Main navigation">
            <a href={sectionHref("services")}>Services</a>
            <a href={sectionHref("consultant")}>Profile</a>
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
            <p className="eyebrow">PROJECT LEADERSHIP · INSTALLATION ENGINEERING</p>
            <h1 id="hero-title">Subsea engineering and offshore project support.</h1>
            <p className="hero-description">
              Independent oil, gas and energy consultancy led by Toyese Baderin, with 15 years of
              industry experience across engineering, offshore installation and project delivery.
            </p>
            <a className="primary-link" href={sectionHref("services")}>
              View services <span aria-hidden="true">↓</span>
            </a>
          </div>

          <figure className="hero-profile">
            <Image
              src={profilePhoto}
              alt="Portrait of Toyese Baderin"
              sizes="(max-width: 900px) 100vw, 36vw"
              placeholder="blur"
            />
            <figcaption>
              <strong>Toyese Baderin</strong>
              <span>Project Lead · Installation Engineer · Oil &amp; Gas Consultant</span>
            </figcaption>
          </figure>
        </section>

        <section className="services" id="services" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="section-label">SERVICES</p>
            <h2 id="services-title">Specialist support from concept to close-out.</h2>
            <p>
              Support for defined work packages, project phases and coordination needs within the
              client&apos;s organisation.
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
            Project lifecycle experience: Concept · Studies · Pre-FEED · FEED · EPCI execution · Project close-out
          </p>
        </section>

        <section className="consultant" id="consultant" aria-labelledby="consultant-title">
          <div>
            <p className="section-label">THE CONSULTANT</p>
            <h2 id="consultant-title">Toyese Baderin</h2>
            <p className="consultant-role">Project Lead · Installation Engineer · Oil &amp; Gas Consultant</p>
          </div>
          <div className="consultant-copy">
            <p>
              Toyese Baderin has 15 years of industry experience, specialising in subsea pipelines and
              flowlines, subsea and topside structures, inspection, maintenance and repair (IMR), and
              power and fibre-optic cables.
            </p>
            <p>
              His experience spans the full project lifecycle, from concept development and studies
              through pre-FEED, FEED and EPCI execution to project management and final close-out.
            </p>
            <a className="linkedin-link" href="https://www.linkedin.com/in/toyese-baderin-25ab0b21" target="_blank" rel="noreferrer">
              View LinkedIn profile <span aria-hidden="true">↗</span>
            </a>

            <div className="credentials" aria-label="Education and certifications">
              <article>
                <p className="credential-label">EDUCATION</p>
                <h3>MSc, Maritime Operations</h3>
                <p>HVL Norway &amp; Hochschule Emden/Leer, Germany · 2021–2023</p>
              </article>
              <article>
                <p className="credential-label">EDUCATION</p>
                <h3>BEng, Mechanical Engineering</h3>
                <p>Federal University of Technology Akure, Nigeria · 2004–2009</p>
                <p>Second Class Upper</p>
              </article>
              <article>
                <p className="credential-label">CERTIFICATIONS</p>
                <h3>Offshore and worksite safety</h3>
                <p>BOSIET Certificate · Work at Height Certificate</p>
              </article>
            </div>
          </div>
        </section>

        <section className="offshore-work" aria-labelledby="offshore-work-title">
          <div className="offshore-heading">
            <p className="section-label">OFFSHORE WORK</p>
            <h2 id="offshore-work-title">Engineering in the field.</h2>
            <p>Photographs shared by Toyese Baderin from offshore work environments.</p>
          </div>
          <div className="offshore-gallery">
            <figure>
              <Image src={installationPhoto} alt="Offshore crew working with lifting equipment and a pipeline assembly on deck" sizes="(max-width: 650px) 100vw, 46vw" placeholder="blur" />
              <figcaption>Offshore installation work</figcaption>
            </figure>
            <figure>
              <Image src={offshorePhoto} alt="Toyese Baderin wearing offshore safety equipment on a vessel deck" sizes="(max-width: 650px) 100vw, 46vw" placeholder="blur" />
              <figcaption>Toyese Baderin offshore</figcaption>
            </figure>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact-intro">
            <p className="section-label">CONTACT</p>
            <h2 id="contact-title">Contact</h2>
            <p>Contact Toyese Baderin directly to discuss an assignment or project requirement.</p>
            <address className="contact-details">
              <div>
                <span>Email</span>
                <a href="mailto:rinenergies@gmail.com">rinenergies@gmail.com</a>
              </div>
              <div>
                <span>Mobile</span>
                <a href="tel:+4797376046">+47 973 76 046</a>
              </div>
              <div>
                <span>Cellphone</span>
                <a href="tel:+4790414653">+47 904 14 653</a>
              </div>
              <div>
                <span>Address</span>
                <p>Skiftesvikveien 25<br />4072 Randaberg<br />Stavanger area, Norway</p>
              </div>
            </address>
          </div>

          <div className="form-card">
            <h3>Project enquiry</h3>
            <p>Please use the email address or telephone numbers for now.</p>
            <form aria-label="Contact form preview">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" placeholder="Your name" autoComplete="name" />

              <label htmlFor="email">Your email</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />

              <label htmlFor="message">Project or question</label>
              <textarea id="message" name="message" rows={4} placeholder="Describe the project or question …" />

              <button type="button" disabled>Send message</button>
              <small>Online enquiries are not yet active.</small>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Baderin Energies Consulting · Org. no. 938 732 078</span>
        <span>All website content and images are protected by copyright.</span>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
