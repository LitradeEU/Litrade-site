import Link from "next/link";
import Layout from "../../components/Layout";

const lfpVariants = [
  {
    model: "LFP18650-2000BA",
    format: "18650 cilindrica",
    nominalVoltage: "3.2 V",
    capacity: "2,000 mAh",
    maxDischargeRate: "3C",
    cycleLife: "≥1500 cicli (0.5C/1C)",
  },
  {
    model: "LFP32140-15000LA",
    format: "32140 cilindrica",
    nominalVoltage: "3.2 V",
    capacity: "15,000 mAh",
    maxDischargeRate: "3C",
    cycleLife: "≥1000 cicli (1.2C/2C)",
  },
  {
    model: "LFP32140-15000LB",
    format: "32140 cilindrica",
    nominalVoltage: "3.2 V",
    capacity: "15,000 mAh",
    maxDischargeRate: "2C",
    cycleLife: "≥500 cicli (1C/2C)",
  },
  {
    model: "LFP32140-15000LC",
    format: "32140 cilindrica",
    nominalVoltage: "3.2 V",
    capacity: "15,000 mAh",
    maxDischargeRate: "2C",
    cycleLife: "≥1000 cicli (0.5C/1.5C)",
  },
  {
    model: "LFP32140-15000LD",
    format: "32140 cilindrica",
    nominalVoltage: "3.2 V",
    capacity: "15,000 mAh",
    maxDischargeRate: "1.5C",
    cycleLife: "≥1500 cicli (0.5C/1C)",
  },
  {
    model: "LFP32140-15000LL",
    format: "32140 cilindrica",
    nominalVoltage: "3.2 V",
    capacity: "15,000 mAh",
    maxDischargeRate: "5C",
    cycleLife: "≥1000 cicli (2C/3C)",
  },
];

export default function LfpPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Prodotti · LFP</div>
          <h1>Celle LFP cilindriche 18650 e 32140 per sicurezza e lunga durata.</h1>
          <p>
            La gamma LFP include varianti standard e high-rate con forte focus su stabilità termica,
            ciclicità elevata e integrazione in sistemi storage e industriali.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Scheda tecnica varianti LFP</h2>
            <p>Dati allineati al catalogo prodotti ufficiale condiviso.</p>
          </div>

          <div className="table-wrap">
            <table className="spec-table">
              <thead>
                <tr>
                  <th>Modello</th>
                  <th>Formato</th>
                  <th>Tensione</th>
                  <th>Capacità</th>
                  <th>Scarica max</th>
                  <th>Vita ciclica</th>
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
            Nota: i dati mostrati sono volutamente sintetici per una prima valutazione B2B; i dettagli completi sono condivisi in fase di proposta.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>Applicazioni B2B tipiche</h3>
            <ul className="list">
              <li>Energy storage systems C&I</li>
              <li>Battery pack industriali ad alta vita ciclica</li>
              <li>Sistemi integrati con fotovoltaico</li>
              <li>Applicazioni stazionarie con priorità sicurezza</li>
            </ul>
          </div>

          <div className="card">
            <h3>Conformità e documenti</h3>
            <ul className="list">
              <li>UN38.3 e SDS/MSDS per trasporto e handling</li>
              <li>REACH e RoHS per conformità materica UE</li>
              <li>Test report e documenti qualità su richiesta</li>
              <li>Supporto per dossier tecnico-commerciale pre-ordine</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container band">
          <h3>Richieste LFP su specifica</h3>
          <p>
            Gestiamo richieste per profilo corrente, ciclo vita target e requisiti documentali del mercato di destinazione.
          </p>
          <div className="actions">
            <Link href="/contatti" className="btn-primary">Richiedi quotazione</Link>
            <Link href="/prodotti" className="btn-secondary">Torna ai prodotti</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
