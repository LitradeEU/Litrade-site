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
          <h1>Celle litio cilindriche e soluzioni energia per progetti B2B.</h1>
          <p>
            Le schede tecniche sono allineate al catalogo prodotti condiviso e includono le varianti realmente trattate
            in formato 18650 e 32140.
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
              Schede tecniche dedicate per LFP, NMC e LMFP con modelli, parametri chiave e dati di ciclicità.
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
              Disponibilità anche per soluzioni complete correlate al mondo storage ed energia, su richiesta progetto.
            </p>
            <ul className="list">
              <li>Battery packs</li>
              <li>Sistemi di accumulo (ESS)</li>
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
            <h3>Formati a portfolio</h3>
            <p>Configurazioni cilindriche 18650 e 32140, differenziate per chimica e profilo di scarica.</p>
          </div>

          <div className="card">
            <div className="card-number">02</div>
            <h3>Pacchetto documentale</h3>
            <p>UN38.3, SDS/MSDS, RoHS, REACH e documentazione tecnica in funzione del modello e del mercato.</p>
          </div>

          <div className="card">
            <div className="card-number">03</div>
            <h3>Metodo operativo</h3>
            <p>Qualifica rapida della richiesta, confronto varianti e coordinamento commerciale fino alla spedizione.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
