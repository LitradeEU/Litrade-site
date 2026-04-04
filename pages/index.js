import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Lithium trade brokerage</div>
            <h1>Intermediazione commerciale per forniture nel settore batterie al litio.</h1>
            <p className="lead">
              Litrade supporta aziende in Italia e in Europa nell’accesso a celle agli ioni di litio
              e prodotti energetici finiti, attraverso una rete consolidata di fornitori cinesi selezionati.
            </p>
            <p className="hero-sublead">
              L’attività è focalizzata sulla connessione tra cliente e fornitore, sulla fluidità dell’interazione
              commerciale e sul coordinamento operativo delle fasi di approvvigionamento e trasporto.
            </p>

            <div className="actions">
              <Link href="/servizi" className="btn-primary">Visualizza servizi</Link>
              <Link href="/prodotti" className="btn-secondary">Gamma prodotti</Link>  
              <Link href="/contatti" className="btn-secondary">Richiedi contatto</Link>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-label">Ambito operativo</div>

            <div className="metric">
              <div className="metric-title">Mercato di riferimento</div>
              <div className="metric-value">B2B · Italia · Europa</div>
              <div className="metric-note">
                Attività orientata a rapporti commerciali tra aziende, con interlocuzione diretta con i fornitori.
              </div>
            </div>

            <div className="metric">
              <div className="metric-title">Tecnologie trattate</div>
              <div className="metric-value">LFP · NMC · LMFP</div>
              <div className="metric-note">
                Celle agli ioni di litio per applicazioni industriali, energetiche e storage.
              </div>
            </div>

            <div className="metric">
              <div className="metric-title">Prodotti correlati</div>
              <div className="metric-value">Battery packs · Storage · PV · Solar lighting</div>
              <div className="metric-note">
                Supporto anche per prodotti finiti collegati al settore energia e accumulo.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Una struttura operativa pensata per semplificare il sourcing.</h2>
            <p>
              Litrade opera come collegamento commerciale tra aziende clienti e produttori,
              agevolando il flusso informativo e operativo lungo le principali fasi della fornitura.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div className="card-number">01</div>
              <h3>Accesso a fornitori selezionati</h3>
              <p>
                Rete consolidata di partner produttivi cinesi nel settore celle al litio e prodotti energetici.
              </p>
            </div>

            <div className="card">
              <div className="card-number">02</div>
              <h3>Interazione commerciale più fluida</h3>
              <p>
                Supporto nella relazione tra le parti per velocizzare contatto, allineamento e avanzamento operativo.
              </p>
            </div>

            <div className="card">
              <div className="card-number">03</div>
              <h3>Coordinamento della logistica</h3>
              <p>
                Allineamento con i fornitori nelle attività legate a organizzazione dei trasporti e spedizioni.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="band">
            <h3>Tecnologie e gamma prodotto</h3>
            <p>
              Celle agli ioni di litio LFP, NMC e LMFP, oltre a battery packs, sistemi di accumulo,
              pannelli fotovoltaici e solar street lights.
            </p>
            <div className="actions">
              <Link href="/servizi" className="btn-secondary">Approfondisci</Link>
            </div>
          </div>

          <div className="band">
            <h3>Contatto diretto</h3>
            <p>
              Il sito è strutturato per offrire una presentazione chiara dell’attività e facilitare il primo contatto commerciale.
            </p>
            <div className="actions">
              <Link href="/contatti" className="btn-primary">Vai ai contatti</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
