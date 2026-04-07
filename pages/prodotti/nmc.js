import Link from "next/link";
import Layout from "../../components/Layout";

const nmcVariants = [
  {
    model: "NMC-18650-2.0Ah-Power5C",
    format: "18650 cilindrica",
    nominalVoltage: "3.6 V",
    capacity: "2,000 mAh",
    maxDischargeRate: "5C",
    cycleLife: "≥300 cicli (0.5C/5C, capacità residua ≥80%)",
  },
  {
    model: "NMC-18650-2.0Ah-Power10C",
    format: "18650 cilindrica",
    nominalVoltage: "3.6 V",
    capacity: "2,000 mAh",
    maxDischargeRate: "10C",
    cycleLife: "≥300 cicli (1C/10C, capacità residua ≥80%)",
  },
  {
    model: "NMC-18650-2.0Ah-Energy3C",
    format: "18650 cilindrica",
    nominalVoltage: "3.6 V",
    capacity: "2,000 mAh",
    maxDischargeRate: "3C",
    cycleLife: "≥400 cicli (0.5C/3C, capacità residua ≥80%)",
  },
  {
    model: "NMC-18650-2.5Ah-Power10C",
    format: "18650 cilindrica",
    nominalVoltage: "3.6 V",
    capacity: "2,500 mAh",
    maxDischargeRate: "10C",
    cycleLife: "≥300 cicli (1C/10C, capacità residua ≥80%)",
  },
  {
    model: "NMC-18650-2.6Ah-LongLife3C-A",
    format: "18650 cilindrica",
    nominalVoltage: "3.6 V",
    capacity: "2,600 mAh",
    maxDischargeRate: "3C",
    cycleLife: "≥500 cicli (0.5C/3C, capacità residua ≥80%)",
  },
  {
    model: "NMC-18650-2.6Ah-LongLife3C-B",
    format: "18650 cilindrica",
    nominalVoltage: "3.6 V",
    capacity: "2,600 mAh",
    maxDischargeRate: "3C",
    cycleLife: "≥400 cicli (0.5C/3C, capacità residua ≥80%)",
  },
  {
    model: "NMC-18650-2.6Ah-LongLife3C-C",
    format: "18650 cilindrica",
    nominalVoltage: "3.6 V",
    capacity: "2,600 mAh",
    maxDischargeRate: "3C",
    cycleLife: "≥400 cicli (0.5C/3C, capacità residua ≥80%)",
  },
];

export default function NmcPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Prodotti · NMC</div>
          <h1>Celle NMC cilindriche 18650 per applicazioni ad alta energia specifica.</h1>
          <p>
            Le varianti NMC a portfolio sono in formato cilindrico 18650 e coprono configurazioni da 2.0 Ah a 2.6 Ah,
            con opzioni ad alta scarica per applicazioni power-oriented.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Scheda tecnica varianti NMC</h2>
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

          <p className="tech-note">
            Nota: i dati mostrati sono volutamente sintetici per una prima valutazione B2B; i dettagli completi sono condivisi in fase di proposta. Nel catalogo la vita ciclica è espressa con condizioni di test (es. 0.5C/1C) e fa riferimento a capacità residua ≥80% della capacità iniziale.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>Applicazioni B2B tipiche</h3>
            <ul className="list">
              <li>Battery pack ad alta densità energetica</li>
              <li>E-mobility leggera e power tools</li>
              <li>Applicazioni con vincoli su peso/volume</li>
              <li>Sistemi che richiedono versioni high-rate</li>
            </ul>
          </div>

          <div className="card">
            <h3>Conformità e documenti</h3>
            <ul className="list">
              <li>UN38.3, SDS/MSDS e documentazione trasporto</li>
              <li>RoHS e REACH per mercato UE</li>
              <li>Schede tecniche e report su richiesta</li>
              <li>Supporto a qualifica tecnica pre-acquisto</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container band">
          <h3>Richieste NMC su progetto</h3>
          <p>
            Possiamo selezionare il modello più adatto in base a corrente richiesta, vita ciclica target e condizioni di utilizzo.
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
