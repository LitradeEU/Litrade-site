import Link from "next/link";
import LayoutEn from "../../../components/LayoutEn";

const nmcVariants = [
  {
    model: "NCM18650-2000BC",
    format: "18650 cylindrical",
    nominalVoltage: "3.6 V",
    capacity: "2,000 mAh",
    maxDischargeRate: "5C",
    cycleLife: ">=300 cycles (0.5C/5C)",
  },
  {
    model: "NCM18650-2000BF",
    format: "18650 cylindrical",
    nominalVoltage: "3.6 V",
    capacity: "2,000 mAh",
    maxDischargeRate: "10C",
    cycleLife: ">=300 cycles (1C/10C)",
  },
  {
    model: "NCM18650-2000BG",
    format: "18650 cylindrical",
    nominalVoltage: "3.6 V",
    capacity: "2,000 mAh",
    maxDischargeRate: "3C",
    cycleLife: ">=400 cycles (0.5C/3C)",
  },
  {
    model: "NCM18650-2500DC",
    format: "18650 cylindrical",
    nominalVoltage: "3.6 V",
    capacity: "2,500 mAh",
    maxDischargeRate: "10C",
    cycleLife: ">=300 cycles (1C/10C)",
  },
  {
    model: "NCM18650-2600EA",
    format: "18650 cylindrical",
    nominalVoltage: "3.6 V",
    capacity: "2,600 mAh",
    maxDischargeRate: "3C",
    cycleLife: ">=500 cycles (0.5C/3C)",
  },
  {
    model: "NCM18650-2600EB",
    format: "18650 cylindrical",
    nominalVoltage: "3.6 V",
    capacity: "2,600 mAh",
    maxDischargeRate: "3C",
    cycleLife: ">=400 cycles (0.5C/3C)",
  },
  {
    model: "NCM18650-2600ED",
    format: "18650 cylindrical",
    nominalVoltage: "3.6 V",
    capacity: "2,600 mAh",
    maxDischargeRate: "3C",
    cycleLife: ">=400 cycles (0.5C/3C)",
  },
];

export default function NmcPageEn() {
  return (
    <LayoutEn>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Products · NMC</div>
          <h1>Cylindrical 18650 NMC cells for high specific energy applications.</h1>
          <p>
            The current NMC portfolio is based on cylindrical 18650 cells, including high-rate options
            for power-oriented use cases.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>NMC technical variants</h2>
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
                {nmcVariants.map((item) => (
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

          <p className="tech-note">Shown values are intentionally high-level for first-pass B2B screening; detailed specifications are provided during quotation.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>Typical B2B applications</h3>
            <ul className="list">
              <li>High-energy battery packs</li>
              <li>Light e-mobility and power tools</li>
              <li>Weight/volume constrained systems</li>
              <li>Projects requiring high-rate options</li>
            </ul>
          </div>

          <div className="card">
            <h3>Compliance and docs</h3>
            <ul className="list">
              <li>UN38.3, SDS/MSDS, and transport docs</li>
              <li>RoHS and REACH for EU market</li>
              <li>Technical sheets and reports on request</li>
              <li>Pre-purchase technical qualification support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container band">
          <h3>NMC selection by project target</h3>
          <p>We can map the best-fit model by current profile, cycle-life target, and use conditions.</p>
          <div className="actions">
            <Link href="/en/contact" className="btn-primary">Request quotation</Link>
            <Link href="/en/products" className="btn-secondary">Back to products</Link>
          </div>
        </div>
      </section>
    </LayoutEn>
  );
}
