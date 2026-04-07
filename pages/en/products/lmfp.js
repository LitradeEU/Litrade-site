import Link from "next/link";
import LayoutEn from "../../../components/LayoutEn";

const lmfpVariants = [
  {
    model: "LMFP33140",
    format: "33140 cylindrical",
    nominalVoltage: "3.7 V",
    capacity: "15,000 mAh",
    energy: "55.50 Wh",
    chargeCurrent: "15 A (≤1C)",
    dischargeCurrent: "45 A (≤3C)",
  },
];

export default function LmfpPageEn() {
  return (
    <LayoutEn>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Products · LMFP</div>
          <h1>LMFP cells balancing phosphate stability and higher energy output.</h1>
          <p>
            LMFP is suitable for projects seeking an energy upgrade over standard LFP while preserving robust
            safety-oriented behavior for industrial and ESS use.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Available technical variant</h2>
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
                {lmfpVariants.map((item) => (
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
            Note: LMFP programs are typically handled on project demand; availability and lead time should be aligned
            during commercial qualification.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>When to consider LMFP</h3>
            <ul className="list">
              <li>Energy upgrade over conventional LFP setups</li>
              <li>Advanced storage projects with specific technical targets</li>
              <li>Applications requiring safety-performance balance</li>
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
          <p>We support early LMFP qualification based on your technical and commercial objectives.</p>
          <div className="actions">
            <Link href="/en/contact" className="btn-primary">Request quotation</Link>
            <Link href="/en/products" className="btn-secondary">Back to products</Link>
          </div>
        </div>
      </section>
    </LayoutEn>
  );
}
