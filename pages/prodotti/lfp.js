import Link from "next/link";
import Layout from "../../components/Layout";

export default function LfpPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Prodotti · LFP</div>
          <h1>Celle LFP per applicazioni dove contano sicurezza, stabilità e lunga vita ciclica.</h1>
          <p>
            Le celle Lithium Iron Phosphate sono particolarmente adatte a sistemi di accumulo, applicazioni stazionarie,
            battery packs industriali e progetti nei quali la stabilità termica e la durata nel tempo sono parametri centrali.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>Profilo tecnico</h3>
            <ul className="list">
              <li>Tensione nominale tipica: 3.2 V</li>
              <li>Chimica orientata a sicurezza, stabilità e robustezza operativa</li>
              <li>Buona coerenza per sistemi storage e applicazioni energetiche</li>
              <li>Particolarmente indicata per impieghi con ciclicità elevata</li>
            </ul>
          </div>

          <div className="card">
            <h3>Gamma indicativa</h3>
            <ul className="list">
              <li>Formati cilindrici LFP come 18650 e 32140</li>
              <li>Modello documentato LFP32140-15000: 3.2 V, 15000 mAh, 48.00 Wh</li>
              <li>Serie riportata in documentazione: LFP18650-2000</li>
              <li>Possibile integrazione in battery packs e sistemi storage</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>Applicazioni tipiche</h3>
            <ul className="list">
              <li>Sistemi di accumulo residenziali e industriali</li>
              <li>Integrazione con impianti fotovoltaici</li>
              <li>Backup power e storage stazionario</li>
              <li>Battery packs per applicazioni energetiche dedicate</li>
            </ul>
          </div>

          <div className="card">
            <h3>Documenti rilevanti</h3>
            <ul className="list">
              <li>UN38.3 per trasporto</li>
              <li>SDS per gestione e movimentazione</li>
              <li>RoHS e REACH per conformità materica</li>
              <li>Battery Regulation test report su metalli pesanti</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container band">
          <h3>Supporto commerciale</h3>
          <p>
            Litrade facilita il contatto con fornitori di celle LFP, supportando l’allineamento commerciale,
            la raccolta documentale e il coordinamento operativo della fornitura.
          </p>
          <div className="actions">
            <Link href="/contatti" className="btn-primary">Richiedi contatto</Link>
            <Link href="/prodotti" className="btn-secondary">Torna ai prodotti</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
