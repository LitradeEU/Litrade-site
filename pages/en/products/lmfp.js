import Link from "next/link";
import LayoutEn from "../../../components/LayoutEn";

const lmfpVariants = [
  {
    model: "LMFP-32140-12.5Ah-3C-A",
    format: "32140 cylindrical",
    nominalVoltage: "3.7 V",
    capacity: "12,500 mAh",
    maxDischargeRate: "3C",
    cycleLife: "≥1500 cycles (0.5C/1C, residual capacity ≥80%)",
  },
  {
    model: "LMFP-32140-15Ah-3C-A",
    format: "32140 cylindrical",
    nominalVoltage: "3.7 V",
    capacity: "15,000 mAh",
    maxDischargeRate: "3C",
    cycleLife: "≥1500 cycles (0.5C/1C, residual capacity ≥80%)",
  },
  {
    model: "LMFP-32140-15Ah-3C-B",
    format: "32140 cylindrical",
    nominalVoltage: "3.7 V",
    capacity: "15,000 mAh",
    maxDischargeRate: "3C",
    cycleLife: "≥1000 cycles (0.5C/1C, residual capacity ≥80%)",
  },
];

export default function LmfpPageEn() {
  return (
    <LayoutEn>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Products · LMFP</div>
          <h1>Cylindrical 32140 LMFP cells balancing stability and higher energy output.</h1>
          <p>
            The available LMFP line is in cylindrical 32140 format, designed for projects that need
            energy improvement while retaining robust safety behavior.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>LMFP technical variants</h2>
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
                {lmfpVariants.map((item) => (
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

          <p className="tech-note">Shown values are intentionally high-level for first-pass B2B screening; detailed specifications are provided during quotation. In the brochure, cycle life is stated with test conditions (e.g. 0.5C/1C) and refers to residual capacity at least 80% of the initial capacity.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>When to consider LMFP</h3>
            <ul className="list">
              <li>Energy upgrade over conventional LFP setups</li>
              <li>Advanced ESS projects with specific requirements</li>
              <li>Applications needing safety-performance balance</li>
              <li>Pilot-to-scale industrialization programs</li>
            </ul>
          </div>

          <div className="card">
            <h3>Supply approach</h3>
            <ul className="list">
              <li>Project-based availability and roadmap check</li>
              <li>Pre-order technical-commercial alignment</li>
              <li>Destination-driven document package setup</li>
              <li>Operational support for international logistics</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container band">
          <h3>LMFP requests by project</h3>
          <p>We support LMFP qualification based on technical targets, cycle-life, and application profile.</p>
          <div className="actions">
            <Link href="/en/contact" className="btn-primary">Request quotation</Link>
            <Link href="/en/products" className="btn-secondary">Back to products</Link>
          </div>
        </div>
      </section>
    </LayoutEn>
  );
}
