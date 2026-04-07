import Link from "next/link";
import LayoutEn from "../../../components/LayoutEn";

const lfpVariants = [
  {
    model: "LFP-18650-2.0Ah-3C",
    format: "18650 cylindrical",
    nominalVoltage: "3.2 V",
    capacity: "2,000 mAh",
    maxDischargeRate: "3C",
    cycleLife: ">=1500 cycles (0.5C/1C, residual capacity >=80%)",
  },
  {
    model: "LFP-32140-15Ah-3C-A",
    format: "32140 cylindrical",
    nominalVoltage: "3.2 V",
    capacity: "15,000 mAh",
    maxDischargeRate: "3C",
    cycleLife: ">=1000 cycles (1.2C/2C, residual capacity >=80%)",
  },
  {
    model: "LFP-32140-15Ah-2C-B",
    format: "32140 cylindrical",
    nominalVoltage: "3.2 V",
    capacity: "15,000 mAh",
    maxDischargeRate: "2C",
    cycleLife: ">=500 cycles (1C/2C, residual capacity >=80%)",
  },
  {
    model: "LFP-32140-15Ah-2C-C",
    format: "32140 cylindrical",
    nominalVoltage: "3.2 V",
    capacity: "15,000 mAh",
    maxDischargeRate: "2C",
    cycleLife: ">=1000 cycles (0.5C/1.5C, residual capacity >=80%)",
  },
  {
    model: "LFP-32140-15Ah-1.5C-D",
    format: "32140 cylindrical",
    nominalVoltage: "3.2 V",
    capacity: "15,000 mAh",
    maxDischargeRate: "1.5C",
    cycleLife: ">=1500 cycles (0.5C/1C, residual capacity >=80%)",
  },
  {
    model: "LFP-32140-15Ah-HR5C",
    format: "32140 cylindrical",
    nominalVoltage: "3.2 V",
    capacity: "15,000 mAh",
    maxDischargeRate: "5C",
    cycleLife: ">=1000 cycles (2C/3C, residual capacity >=80%)",
  },
];

export default function LfpPageEn() {
  return (
    <LayoutEn>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Products · LFP</div>
          <h1>Cylindrical 18650 and 32140 LFP cells for safety and long cycle life.</h1>
          <p>
            The LFP lineup includes standard and high-rate variants designed for thermal stability,
            durable cycling performance, and storage integration.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>LFP technical variants</h2>
            <p>Values aligned with the official product brochure you shared.</p>
          </div>

          <div className="table-wrap">
            <table className="spec-table">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Format</th>
                  <th>Voltage</th>
                  <th>Capacity</th>
                  <th>Max discharge rate</th>
                  <th>Cycle life</th>
                </tr>
              </thead>
              <tbody>
                {lfpVariants.map((item) => (
                  <tr key={item.model}>
                    <td>{item.model}</td>
                    <td>{item.format}</td>
                    <td>{item.nominalVoltage}</td>
                    <td>{item.capacity}</td>
                    <td>{item.maxDischargeRate}</td>
                    <td>{item.cycleLife}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="tech-note">
            Shown values are intentionally high-level for first-pass B2B screening; detailed specifications are provided during quotation. In the brochure, cycle life is stated with test conditions (e.g. 0.5C/1C) and refers to residual capacity >=80% of the initial capacity.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>Typical B2B applications</h3>
            <ul className="list">
              <li>Commercial and industrial ESS</li>
              <li>Industrial packs with long-cycle targets</li>
              <li>PV-coupled storage systems</li>
              <li>Stationary systems with safety priority</li>
            </ul>
          </div>

          <div className="card">
            <h3>Compliance and docs</h3>
            <ul className="list">
              <li>UN38.3 and SDS/MSDS for transport/handling</li>
              <li>REACH and RoHS for EU material compliance</li>
              <li>Test reports and quality docs on request</li>
              <li>Pre-order technical-commercial dossier support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container band">
          <h3>LFP requests by specification</h3>
          <p>We support model selection by current profile, cycle target, and destination compliance package.</p>
          <div className="actions">
            <Link href="/en/contact" className="btn-primary">Request quotation</Link>
            <Link href="/en/products" className="btn-secondary">Back to products</Link>
          </div>
        </div>
      </section>
    </LayoutEn>
  );
}
