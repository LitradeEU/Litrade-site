import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Broker commerciale B2B</div>
            <h1>Accesso diretto a forniture affidabili nel settore litio.</h1>
            <p className="lead">
              Litrade mette in contatto aziende europee e fornitori cinesi selezionati,
              facilitando l’interazione commerciale e il coordinamento operativo per celle
              agli ioni di litio, battery packs e soluzioni energetiche finite.
            </p>

            <div className="actions">
              <Link href="/servizi" className="btn-primary">Scopri i servizi</Link>
              <Link href="/contatti" className="btn-secondary">Contatta Litrade</Link>
            </div>
          </div>

          <div className="hero-card">
            <div className="stat">
              <div className="stat-label">Posizionamento</div>
              <div className="stat-value">Intermediazione pura e orientata al risultato</div>
            </div>
            <div className="stat">
              <div className="stat-label">Mercato</div>
              <div className="stat-value">Italia ed Europa</div>
            </div>
            <div className="stat">
              <div className="stat-label">Prodotti trattati</div>
              <div className="stat-value">LFP, NMC, LMFP, storage, fotovoltaico</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Un broker che semplifica il rapporto tra cliente e fornitore.</h2>
            <p>
              Il valore di Litrade non è la consulenza strategica, ma la capacità di creare
              connessioni commerciali concrete, affidabili e rapide tra le parti, riducendo attriti
              nelle fasi di contatto, negoziazione e organizzazione operativa.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div className="card-number">01</div>
              <h3>Rete consolidata</h3>
              <p>
                Accesso a una rete stabile di fornitori cinesi selezionati nel settore batterie ed energia.
              </p>
            </div>
            <div className="card">
              <div className="card-number">02</div>
              <h3>Interazione facilitata</h3>
              <p>
                Supporto diretto nello scambio tra aziende e produttori per rendere la trattativa più fluida.
              </p>
            </div>
            <div className="card">
              <div className="card-number">03</div>
              <h3>Coordinamento logistico</h3>
              <p>
                Supporto nell’organizzazione dei trasporti e nel raccordo operativo con i fornitori.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}