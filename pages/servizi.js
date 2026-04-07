import Layout from "../components/Layout";

export default function Servizi() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Servizi</div>
          <h1>Supporto commerciale e operativo per il sourcing batterie al litio.</h1>
          <p>
            Operiamo come interfaccia B2B tra aziende europee e produttori cinesi selezionati,
            con metodo orientato a precisione tecnica, tempi chiari e continuità di fornitura.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          <div className="card">
            <div className="card-number">01</div>
            <h3>Vendor scouting qualificato</h3>
            <p>
              Accesso a produttori affidabili per celle e soluzioni energia con verifica preliminare della compatibilità.
            </p>
          </div>

          <div className="card">
            <div className="card-number">02</div>
            <h3>Allineamento tecnico-commerciale</h3>
            <p>
              Supporto su varianti prodotto, documentazione e negoziazione per accelerare le decisioni d'acquisto.
            </p>
          </div>

          <div className="card">
            <div className="card-number">03</div>
            <h3>Coordinamento fornitura</h3>
            <p>
              Gestione dei passaggi operativi con i partner industriali fino a spedizione e consegna della commessa.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
