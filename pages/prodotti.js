import Link from "next/link";
import Layout from "../components/Layout";

function ProductVisual({ type = "cell" }) {
  if (type === "storage") {
    return (
      <svg viewBox="0 0 320 180" fill="none" aria-hidden="true">
        <rect x="32" y="42" width="256" height="96" rx="20" fill="rgba(58,109,240,0.12)" stroke="rgba(111,149,255,0.24)" />
        <rect x="58" y="68" width="86" height="14" rx="7" fill="rgba(111,149,255,0.75)" />
        <rect x="58" y="94" width="54" height="10" rx="5" fill="rgba(255,255,255,0.55)" />
        <rect x="232" y="68" width="22" height="44" rx="6" fill="rgba(111,149,255,0.65)" />
        <rect x="264" y="68" width="10" height="44" rx="5" fill="rgba(255,255,255,0.2)" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 180" fill="none" aria-hidden="true">
      <rect x="70" y="60" width="180" height="54" rx="27" fill="rgba(58,109,240,0.16)" stroke="rgba(111,149,255,0.26)" />
      <circle cx="92" cy="87" r="16" fill="rgba(255,255,255,0.08)" />
      <rect x="118" y="80" width="92" height="8" rx="4" fill="rgba(111,149,255,0.72)" />
      <rect x="118" y="94" width="58" height="6" rx="3" fill="rgba(255,255,255,0.38)" />
      <rect x="226" y="74" width="10" height="26" rx="5" fill="rgba(255,255,255,0.22)" />
    </svg>
  );
}

export default function Prodotti() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Prodotti</div>
          <h1>Celle agli ioni di litio e soluzioni collegate al settore storage ed energia.</h1>
          <p>
            Litrade opera nel sourcing B2B di celle cilindriche e di prodotti finiti collegati ai sistemi di accumulo,
            con focus su continuità di fornitura, documentazione tecnica e coordinamento commerciale tra cliente e produttore.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card product-card">
            <div className="product-visual">
              <ProductVisual type="cell" />
            </div>
            <h3>Celle agli ioni di litio</h3>
            <p>
              Fornitura di celle in tecnologie LFP, NMC e LMFP, con orientamento a impieghi industriali,
              battery packs, accumulo energetico e configurazioni custom su base progetto.
            </p>
            <ul className="list">
              <li><Link href="/prodotti/lfp">LFP (LiFePO4)</Link></li>
              <li><Link href="/prodotti/nmc">NMC</Link></li>
              <li><Link href="/prodotti/lmfp">LMFP</Link></li>
            </ul>
          </div>

          <div className="card product-card">
            <div className="product-visual">
              <ProductVisual type="storage" />
            </div>
            <h3>Prodotti finiti</h3>
            <p>
              Oltre alle celle, la gamma comprende anche prodotti finiti per applicazioni storage e integrazione energetica.
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

      <section className="section">
        <div className="container grid-3">
          <div className="card">
            <div className="card-number">01</div>
            <h3>Formati cilindrici</h3>
            <p>
              La gamma Xiaolu include diversi formati cilindrici e big cylindrical cells, con famiglie 18650, 21700,
              26700, 32140 e 32700 in funzione della chimica e dell’applicazione.
            </p>
          </div>

          <div className="card">
            <div className="card-number">02</div>
            <h3>Documentazione tecnica</h3>
            <p>
              Per le forniture vengono valorizzati documenti come UN38.3, SDS, RoHS, REACH e report di conformità,
              utili nei processi di valutazione tecnica e logistica.
            </p>
          </div>

          <div className="card">
            <div className="card-number">03</div>
            <h3>Approccio applicativo</h3>
            <p>
              La proposta è orientata a progetti B2B in cui contano affidabilità di sourcing, coerenza documentale,
              supporto commerciale e gestione del flusso operativo con il produttore.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
