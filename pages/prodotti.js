import Link from "next/link";
import Layout from "../components/Layout";

export default function Prodotti() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Prodotti</div>
          <h1>Gamma prodotti per applicazioni battery ed energy storage.</h1>
          <p>
            Litrade supporta l’approvvigionamento di celle agli ioni di litio e di prodotti finiti
            collegati al settore accumulo ed energia, con focus su configurazioni industriali e B2B.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>Celle agli ioni di litio</h3>
            <p>
              Soluzioni basate su chimiche LFP, NMC e LMFP per applicazioni in cui contano sicurezza,
              densità energetica, durata ciclica e coerenza di fornitura.
            </p>
            <ul className="list">
              <li><Link href="/prodotti/lfp">LFP (LiFePO4)</Link></li>
              <li><Link href="/prodotti/nmc">NMC</Link></li>
              <li><Link href="/prodotti/lmfp">LMFP</Link></li>
            </ul>
          </div>

          <div className="card">
            <h3>Prodotti finiti</h3>
            <p>
              Oltre alle celle, Litrade tratta anche prodotti finiti e soluzioni integrate per sistemi energetici.
            </p>
            <ul className="list">
              <li>Battery packs</li>
              <li>Sistemi di accumulo</li>
              <li>Pannelli fotovoltaici</li>
              <li>Solar street lights</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
