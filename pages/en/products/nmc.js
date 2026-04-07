import Link from "next/link";
import LayoutEn from "../../../components/LayoutEn";

const nmcVariants = [
  {
    model: "NCM18650-2000BG",
    format: "18650 cylindrical",
    nominalVoltage: "3.7 V",
    capacity: "2,000 mAh",
    energy: "7.40 Wh",
    chargeCurrent: "2 A (≤1C)",
    dischargeCurrent: "6 A (≤3C)",
  },
  {
    model: "NCM18650-2000BD",
    format: "18650 cylindrical",
    nominalVoltage: "3.7 V",
    capacity: "2,000 mAh",
    energy: "7.40 Wh",
    chargeCurrent: "4 A (≤2C)",
    dischargeCurrent: "20 A (≤10C)",
  },
  {
    model: "NCM18650-2500DC",
    format: "18650 cylindrical",
    nominalVoltage: "3.7 V",
    capacity: "2,500 mAh",
    energy: "9.25 Wh",
    chargeCurrent: "4 A (≤1.6C)",
    dischargeCurrent: "25 A (≤10C)",
  },
  {
    model: "NCM18650-2600EA",
    format: "18650 cylindrical",
    nominalVoltage: "3.7 V",
    capacity: "2,600 mAh",
    energy: "9.62 Wh",
    chargeCurrent: "2.6 A (≤1C)",
    dischargeCurrent: "7.8 A (≤3C)",
  },
  {
    model: "INR21700-4000",
    format: "21700 cylindrical",
    nominalVoltage: "3.7 V",
    capacity: "4,000 mAh",
    energy: "14.80 Wh",
    chargeCurrent: "8 A (≤2C)",
    dischargeCurrent: "20 A (≤5C)",
  },
  {
    model: "INR21700-4500",
    format: "21700 cylindrical",
    nominalVoltage: "3.7 V",
    capacity: "4,500 mAh",
    energy: "16.65 Wh",
    chargeCurrent: "To be confirmed",
    dischargeCurrent: "To be confirmed",
  },
  {
    model: "INR21700-5000",
    format: "21700 cylindrical",
    nominalVoltage: "3.7 V",
    capacity: "5,000 mAh",
    energy: "18.50 Wh",
    chargeCurrent: "5 A (≤1C)",
    dischargeCurrent: "15 A (≤3C)",
  },
  {
    model: "NCM26700-5000",
    format: "26700 cylindrical",
    nominalVoltage: "3.7 V",
    capacity: "5,000 mAh",
    energy: "18.50 Wh",
    chargeCurrent: "5 A (≤1C)",
    dischargeCurrent: "10 A (≤2C)",
  },
  {
    model: "NCM32140-18000",
    format: "32140 cylindrical",
    nominalVoltage: "3.7 V",
    capacity: "18,000 mAh",
    energy: "66.60 Wh",
    chargeCurrent: "18 A (≤1C)",
    dischargeCurrent: "54 A (≤3C)",
  },
];

export default function NmcPageEn() {
  return (
    <LayoutEn>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Products · NMC</div>
          <h1>NMC cells for high energy density and compact footprint.</h1>
          <p>
            Suitable for projects where specific energy, packaging efficiency, and performance are primary design
            constraints.
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
                {nmcVariants.map((item) => (
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
            Note: final selection should also include discharge curves, internal resistance, operating temperature,
            and BMS integration constraints.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>Typical B2B applications</h3>
            <ul className="list">
              <li>High-energy battery packs</li>
              <li>Light mobility and compact systems</li>
              <li>Projects with strict weight/volume limits</li>
              <li>Use cases prioritizing energy density</li>
            </ul>
          </div>

          <div className="card">
            <h3>Compliance and docs</h3>
            <ul className="list">
              <li>UN38.3, SDS/MSDS, and transport documentation</li>
              <li>RoHS and REACH for EU market compliance</li>
              <li>Technical sheets and material reports on request</li>
              <li>Support for technical qualification before purchase</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container band">
          <h3>NMC requests by project target</h3>
          <p>We can quickly filter models by energy target, current profile, and required compliance package.</p>
          <div className="actions">
            <Link href="/en/contact" className="btn-primary">Request quotation</Link>
            <Link href="/en/products" className="btn-secondary">Back to products</Link>
          </div>
        </div>
      </section>
    </LayoutEn>
  );
}
