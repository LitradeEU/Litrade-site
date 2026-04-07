import Link from "next/link";
import Layout from "../../components/Layout";

const lmfpVariants = [
  {
    model: "LMFP32140-12500MA",
    format: "32140 cilindrica",
    nominalVoltage: "3.7 V",
    capacity: "12,500 mAh",
    maxDischargeRate: "3C",
    cycleLife: "≥1500 cicli (0.5C/1C, capacità residua ≥80%)",
  },
  {
    model: "LMFP32140-15000NA",
    format: "32140 cilindrica",
    nominalVoltage: "3.7 V",
    capacity: "15,000 mAh",
    maxDischargeRate: "3C",
    cycleLife: "≥1500 cicli (0.5C/1C, capacità residua ≥80%)",
  },
  {
    model: "LMFP32140-15000NB",
    format: "32140 cilindrica",
    nominalVoltage: "3.7 V",
    capacity: "15,000 mAh",
    maxDischargeRate: "3C",
    cycleLife: "≥1000 cicli (0.5C/1C, capacità residua ≥80%)",
  },
];

export default function LmfpPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Prodotti · LMFP</div>
          <h1>Celle LMFP cilindriche 32140 per bilanciare stabilità e incremento energetico.</h1>
          <p>
            La linea LMFP disponibile è in formato cilindrico 32140 ed è pensata per progetti che richiedono
            migliore resa energetica mantenendo un profilo di sicurezza robusto.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Scheda tecnica varianti LMFP</h2>
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

          <p className="tech-note">
            Nota: i dati mostrati sono volutamente sintetici per una prima valutazione B2B; i dettagli completi sono condivisi in fase di proposta. Nel catalogo la vita ciclica è espressa con condizioni di test (es. 0.5C/1C) e fa riferimento a capacità residua ≥80% della capacità iniziale.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>Quando valutare LMFP</h3>
            <ul className="list">
              <li>Upgrade energetico rispetto a setup LFP tradizionali</li>
              <li>Storage evoluto con target tecnici specifici</li>
              <li>Applicazioni con equilibrio sicurezza/performance</li>
              <li>Programmi pilota e scale-up industriale</li>
            </ul>
          </div>

          <div className="card">
            <h3>Approccio di fornitura</h3>
            <ul className="list">
              <li>Verifica disponibilità e roadmap su base progetto</li>
              <li>Allineamento tecnico-commerciale pre-ordine</li>
              <li>Raccolta documentale per mercato di destinazione</li>
              <li>Supporto operativo su logistica internazionale</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container band">
          <h3>Richieste LMFP su progetto</h3>
          <p>
            Ti supportiamo nella qualifica preliminare LMFP in base a requisiti tecnici, ciclicità e profilo applicativo.
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
