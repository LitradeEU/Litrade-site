import Link from "next/link";
import Layout from "../components/Layout";

export default function Servizi() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Servizi</div>
          <h1>Brokeraggio specializzato per il settore lithium & energy.</h1>
          <p>
            Litrade opera come collegamento commerciale tra aziende europee e fornitori cinesi,
            agevolando il processo di sourcing e la gestione operativa delle forniture.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          <div className="card">
            <div className="card-number">01</div>
            <h3>Ricerca e accesso ai fornitori</h3>
            <p>
              Individuazione di partner produttivi affidabili per celle agli ioni di litio e prodotti finiti.
            </p>
          </div>
          <div className="card">
            <div className="card-number">02</div>
            <h3>Intermediazione commerciale</h3>
            <p>
              Gestione del contatto tra le parti e supporto nella fluidità della relazione commerciale.
            </p>
          </div>
          <div className="card">
            <div className="card-number">03</div>
            <h3>Supporto al coordinamento trasporti</h3>
            <p>
              Allineamento operativo con i fornitori per organizzazione logistica e spedizioni.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>Prodotti trattati</h3>
            <ul className="list">
              <li>Celle agli ioni di litio LFP</li>
              <li>Celle agli ioni di litio NMC</li>
              <li>Celle agli ioni di litio LMFP</li>
              <li>Pacchi batteria</li>
              <li>Sistemi di accumulo</li>
              <li>Pannelli fotovoltaici</li>
              <li>Solar street lights</li>
            </ul>
          </div>

          <div className="card">
            <h3>Posizionamento operativo</h3>
            <p>
              Litrade si propone come broker puro: connette le parti, facilita l’interazione,
              rende più efficiente il flusso operativo e supporta l’accesso a forniture conformi.
            </p>
            <p className="grid-note">
              Tutti i prodotti trattati sono supportati da certificazioni conformi agli standard richiesti.
            </p>
            <div className="actions">
              <Link href="/contatti" className="btn-primary">Richiedi un contatto</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}