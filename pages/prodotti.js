import Link from "next/link";
import Layout from "../components/Layout";

export default function Prodotti() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Prodotti</div>
          <h1>Gamma prodotti nel settore batterie ed energia.</h1>
          <p>
            Celle agli ioni di litio e soluzioni energetiche per applicazioni industriali,
            storage e integrazione energetica.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">

          <div className="card">
            <h3>Celle agli ioni di litio</h3>
            <ul className="list">
              <li><Link href="/prodotti/lfp">LFP (LiFePO4)</Link></li>
              <li><Link href="/prodotti/nmc">NMC</Link></li>
              <li><Link href="/prodotti/lmfp">LMFP</Link></li>
            </ul>
          </div>

          <div className="card">
            <h3>Prodotti finiti</h3>
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