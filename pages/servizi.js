import Layout from "../components/Layout";

export default function Servizi() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Servizi</div>
          <h1>Supporto operativo per il sourcing nel settore batterie al litio.</h1>
          <p>
            Litrade opera come intermediario commerciale tra aziende europee e fornitori cinesi,
            facilitando le fasi di contatto, allineamento e gestione operativa delle forniture.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          <div className="card">
            <div className="card-number">01</div>
            <h3>Accesso a fornitori selezionati</h3>
            <p>
              Collegamento diretto con produttori cinesi affidabili nel settore celle al litio e sistemi energetici.
            </p>
          </div>

          <div className="card">
            <div className="card-number">02</div>
            <h3>Intermediazione commerciale</h3>
            <p>
              Gestione della comunicazione tra cliente e fornitore per rendere più efficiente il processo commerciale.
            </p>
          </div>

          <div className="card">
            <div className="card-number">03</div>
            <h3>Coordinamento operativo</h3>
            <p>
              Supporto nelle attività legate a logistica, trasporto e allineamento con i fornitori.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}