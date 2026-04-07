import Link from "next/link";
import Layout from "../components/Layout";
import { ProductVisual } from "../components/ProductVisuals";

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
