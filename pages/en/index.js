import Link from "next/link";
import LayoutEn from "../../components/LayoutEn";

const certifications = [
  {
    code: "ISO",
    title: "ISO 9001",
    note: "Quality management framework for consistent industrial processes.",
  },
  {
    code: "UN",
    title: "UN38.3",
    note: "Mandatory lithium battery transport test for international shipping.",
  },
  {
    code: "RE",
    title: "REACH",
    note: "Chemical substance compliance for EU supply chains.",
  },
  {
    code: "RH",
    title: "RoHS",
    note: "Restriction of hazardous substances in electrical/electronic products.",
  },
  {
    code: "MS",
    title: "SDS / MSDS",
    note: "Safety data sheets for handling, storage, and transport.",
  },
  {
    code: "CE",
    title: "CE (finished systems)",
    note: "Applicable to complete products where destination regulations require it.",
  },
  {
    code: "IE",
    title: "IEC 62133 / IEC 62619",
    note: "Standards often required in industrial and ESS projects.",
  },
  {
    code: "EU",
    title: "EU Battery Regulation",
    note: "Documentation support aligned with Regulation (EU) 2023/1542 when applicable.",
  },
];

export default function HomeEn() {
  return (
    <LayoutEn>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Lithium Trade Brokerage</div>
            <h1>Lithium battery supply solutions for B2B clients in Italy and Europe.</h1>
            <p className="lead">
              Litrade connects European B2B buyers with selected Chinese manufacturing partners for LFP, NMC,
              and LMFP cells, with a strong focus on continuity, documentation, and execution reliability.
            </p>
            <p className="hero-sublead">
              We streamline communication between procurement, technical, quality, and logistics teams to reduce
              friction and accelerate sourcing decisions.
            </p>

            <div className="actions">
              <Link href="/en/products" className="btn-primary">Explore products</Link>
              <Link href="/en/contact" className="btn-secondary">Request contact</Link>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-label">Operating scope</div>

            <div className="metric">
              <div className="metric-title">Market</div>
              <div className="metric-value">B2B · Italy · Europe</div>
              <div className="metric-note">
                Business-to-business supply programs with direct technical-commercial alignment.
              </div>
            </div>

            <div className="metric">
              <div className="metric-title">Core chemistries</div>
              <div className="metric-value">LFP · NMC · LMFP</div>
              <div className="metric-note">
                Cylindrical lithium-ion cells for ESS, battery packs, and industrial applications.
              </div>
            </div>

            <div className="metric">
              <div className="metric-title">Adjacent categories</div>
              <div className="metric-value">Battery pack · ESS · PV · Solar lighting</div>
              <div className="metric-note">
                Support also available for finished energy products connected to storage projects.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Lean process, controlled documentation, faster execution.</h2>
            <p>
              We structure sourcing workflows to align technical requirements, quotation, confirmation, and shipment.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div className="card-number">01</div>
              <h3>Qualified supply access</h3>
              <p>Established network of manufacturing partners with industrial-grade product consistency.</p>
            </div>

            <div className="card">
              <div className="card-number">02</div>
              <h3>Technical-commercial alignment</h3>
              <p>Support on models, specs, compliance documents, and negotiation flow.</p>
            </div>

            <div className="card">
              <div className="card-number">03</div>
              <h3>Operational coordination</h3>
              <p>Monitoring of key steps from production planning to shipment readiness and delivery.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Compliance framework for European B2B requirements.</h2>
            <p>Document sets are selected based on chemistry, model, and destination use case.</p>
          </div>

          <div className="cert-grid">
            {certifications.map((item) => (
              <article key={item.title} className="cert-card">
                <div className="cert-badge" aria-hidden="true">{item.code}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="band">
            <h3>Technical pages by chemistry</h3>
            <p>Each chemistry page includes main variants and key metrics for rapid B2B screening.</p>
            <div className="actions">
              <Link href="/en/products" className="btn-secondary">Open product pages</Link>
            </div>
          </div>

          <div className="band">
            <h3>Project-based requests</h3>
            <p>We support custom requests for capacity, current, form factor, and compliance targets.</p>
            <div className="actions">
              <Link href="/en/contact" className="btn-primary">Talk to Litrade</Link>
            </div>
          </div>
        </div>
      </section>
    </LayoutEn>
  );
}
