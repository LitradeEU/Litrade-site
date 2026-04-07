import LayoutEn from "../../components/LayoutEn";

export default function ServicesEn() {
  return (
    <LayoutEn>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Services</div>
          <h1>Commercial and operational support for lithium battery sourcing.</h1>
          <p>
            We operate as a B2B interface between European buyers and selected Chinese manufacturing partners,
            with a structured process focused on technical accuracy and execution speed.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          <div className="card">
            <div className="card-number">01</div>
            <h3>Qualified vendor access</h3>
            <p>Direct access to reliable industrial partners for lithium cells and related energy products.</p>
          </div>

          <div className="card">
            <div className="card-number">02</div>
            <h3>Technical-commercial brokerage</h3>
            <p>Alignment across specifications, documentation, and negotiation phases.</p>
          </div>

          <div className="card">
            <div className="card-number">03</div>
            <h3>Supply coordination</h3>
            <p>Operational follow-up from order alignment through shipment and delivery milestones.</p>
          </div>
        </div>
      </section>
    </LayoutEn>
  );
}
