import Link from "next/link";
import Layout from "../../components/Layout";

export default function LmfpPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Prodotti · LMFP</div>
          <h1>Celle LMFP come soluzione intermedia tra stabilità e incremento energetico.</h1>
          <p>
            Le celle Lithium Manganese Iron Phosphate rappresentano una tecnologia di interesse per applicazioni
            che richiedono un equilibrio tra sicurezza, durata e un miglioramento prestazionale rispetto alla chimica LFP tradizionale.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>Caratteristiche principali</h3>
            <ul className="list">
              <li>Profilo di sicurezza vicino alle chimiche fosfato</li>
              <li>Potenziale miglioramento della densità energetica rispetto a LFP</li>
              <li>Interesse crescente per storage e mobilità</li>
              <li>Adatte a progetti che cercano un bilanciamento tecnico avanzato</li>
            </ul>
          </div>

          <div className="card">
            <h3>Applicazioni tipiche</h3>
            <ul className="list">
              <li>Sistemi di accumulo evoluti</li>
              <li>Battery packs di nuova generazione</li>
              <li>Applicazioni dove sono richieste stabilità e maggiore resa energetica</li>
              <li>Progetti orientati a tecnologie emergenti e upgrade prestazionali</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container band">
          <h3>Approccio commerciale</h3>
          <p>
            Litrade segue il contatto con fornitori in grado di offrire soluzioni LMFP,
            facilitando lo sviluppo dell’interazione commerciale e il coordinamento operativo della fornitura.
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
