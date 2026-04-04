import Link from "next/link";
import Layout from "../../components/Layout";

export default function LfpPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Prodotti · LFP</div>
          <h1>Celle LFP per applicazioni dove contano sicurezza, stabilità e durata.</h1>
          <p>
            Le celle Lithium Iron Phosphate rappresentano una soluzione particolarmente adatta per energy storage,
            sistemi stazionari, applicazioni industriali e progetti in cui affidabilità termica e ciclo di vita
            sono fattori prioritari.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>Caratteristiche principali</h3>
            <ul className="list">
              <li>Elevata stabilità termica e chimica</li>
              <li>Buona sicurezza operativa</li>
              <li>Lunga vita ciclica</li>
              <li>Adatte a sistemi storage e applicazioni stazionarie</li>
            </ul>
          </div>

          <div className="card">
            <h3>Applicazioni tipiche</h3>
            <ul className="list">
              <li>Sistemi di accumulo residenziali e industriali</li>
              <li>Battery packs per utilizzi energetici</li>
              <li>Backup power e integrazione con fotovoltaico</li>
              <li>Progetti dove la sicurezza è un requisito centrale</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container band">
          <h3>Approccio commerciale</h3>
          <p>
            Litrade facilita il sourcing di celle LFP attraverso una rete consolidata di fornitori,
            supportando il contatto commerciale e il coordinamento operativo lungo il processo di fornitura.
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
