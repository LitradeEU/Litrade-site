import Link from "next/link";
import Layout from "../../components/Layout";

const lmfpVariants = [
  {
    model: "LMFP33140",
    format: "33140 cilindrica",
    nominalVoltage: "3.7 V",
    capacity: "15,000 mAh",
    energy: "55.50 Wh",
    chargeCurrent: "15 A (≤1C)",
    dischargeCurrent: "45 A (≤3C)",
  },
];

export default function LmfpPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Prodotti · LMFP</div>
          <h1>Celle LMFP per bilanciare stabilità fosfato e maggiore energia.</h1>
          <p>
            La tecnologia LMFP è adatta a progetti che cercano un profilo evoluto rispetto alla LFP standard,
            mantenendo un approccio robusto per impieghi storage e industriali.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Scheda tecnica variante disponibile</h2>
            <p>Dati di riferimento raccolti da linee prodotto industriali qualificate.</p>
          </div>

          <div className="table-wrap">
            <table className="spec-table">
              <thead>
                <tr>
                  <th>Modello</th>
                  <th>Formato</th>
                  <th>Tensione nominale</th>
                  <th>Capacità nominale</th>
                  <th>Energia nominale</th>
                  <th>Corrente carica max</th>
                  <th>Corrente scarica max</th>
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
            Nota: la linea LMFP è tipicamente gestita su richiesta progetto; disponibilità e lead time vanno verificati
            in fase di allineamento commerciale.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>Quando valutare LMFP</h3>
            <ul className="list">
              <li>Upgrade energetico rispetto a configurazioni LFP tradizionali</li>
              <li>Applicazioni storage evolute con target tecnici specifici</li>
              <li>Progetti dove sicurezza e performance devono coesistere</li>
              <li>Programmi pilota e industrializzazione su volumi progressivi</li>
            </ul>
          </div>

          <div className="card">
            <h3>Approccio di fornitura</h3>
            <ul className="list">
              <li>Verifica disponibilità e roadmap su base progetto</li>
              <li>Allineamento tecnico-commerciale pre-ordine</li>
              <li>Raccolta documentale in base al mercato di destinazione</li>
              <li>Supporto operativo su logistica e spedizione internazionale</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container band">
          <h3>Richieste LMFP su progetto</h3>
          <p>
            Ti supportiamo nella qualifica preliminare della chimica LMFP in base a requisiti tecnici e commerciali.
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
