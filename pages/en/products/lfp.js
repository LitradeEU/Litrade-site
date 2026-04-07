import Link from "next/link";
import LayoutEn from "../../../components/LayoutEn";

const lfpVariants = [
  {
    model: "LFP32140-12500",
    format: "32140 cylindrical",
    nominalVoltage: "3.2 V",
    capacity: "12,500 mAh",
    energy: "40.00 Wh",
    chargeCurrent: "12.5 A (≤1C)",
    dischargeCurrent: "25 A (≤2C)",
  },
  {
    model: "LFP32140-15000",
    format: "32140 cylindrical",
    nominalVoltage: "3.2 V",
    capacity: "15,000 mAh",
    energy: "48.00 Wh",
    chargeCurrent: "15 A (≤1C)",
    dischargeCurrent: "30 A (≤2C)",
  },
  {
    model: "LFP32140-17500",
    format: "32140 cylindrical",
    nominalVoltage: "3.2 V",
    capacity: "17,500 mAh",
    energy: "56.00 Wh",
    chargeCurrent: "17.5 A (≤1C)",
    dischargeCurrent: "35 A (≤2C)",
  },
  {
    model: "LFP26700-4000",
    format: "26700 cylindrical",
    nominalVoltage: "3.2 V",
    capacity: "4,000 mAh",
    energy: "12.80 Wh",
    chargeCurrent: "4 A (≤1C)",
    dischargeCurrent: "12 A (≤3C)",
  },
];

export default function LfpPageEn() {
  return (
    <LayoutEn>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Products · LFP</div>
          <h1>LFP cells for high safety margins and long cycle life.</h1>
          <p>
            Recommended chemistry for stationary ESS, industrial packs, and projects where thermal stability and
            operational durability are critical.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Main technical variants</h2>
            <p>Reference values from qualified industrial product lines.</p>
          </div>

          <div className="table-wrap">
            <table className="spec-table">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Format</th>
                  <th>Nominal voltage</th>
                  <th>Nominal capacity</th>
                  <th>Nominal energy</th>
                  <th>Max charge current</th>
                  <th>Max discharge current</th>
                </tr>
              </thead>
              <tbody>
                {lfpVariants.map((item) => (
                  <tr key={item.model}>
                    <td>{item.model}</td>
                    <td>{item.format}</td>
                    <td>{item.nominalVoltage}</td>
                    <td>{item.capacity}</td>
                    <td>{item.energy}</td>
                    <td>{item.chargeCurrent}</td>
                    <td>{item.dischargeCurrent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="tech-note">
            Note: final availability, complete discharge curves, operating temperature, and final dimensions should be
            confirmed at quotation stage.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>Typical B2B applications</h3>
            <ul className="list">
              <li>Commercial and industrial ESS</li>
              <li>Industrial battery packs with long cycle targets</li>
              <li>PV-coupled storage systems</li>
              <li>Stationary systems with strict safety requirements</li>
            </ul>
          </div>

          <div className="card">
            <h3>Compliance and docs</h3>
            <ul className="list">
              <li>UN38.3 and SDS/MSDS for transport and handling</li>
              <li>REACH and RoHS for EU material compliance</li>
              <li>Test reports and quality documents on request</li>
              <li>Support for pre-order technical-commercial files</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container band">
          <h3>LFP requests by specification</h3>
          <p>We handle requests by voltage, capacity, current profile, and destination documentation package.</p>
          <div className="actions">
            <Link href="/en/contact" className="btn-primary">Request quotation</Link>
            <Link href="/en/products" className="btn-secondary">Back to products</Link>
          </div>
        </div>
      </section>
    </LayoutEn>
  );
}
