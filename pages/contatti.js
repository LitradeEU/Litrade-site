import Layout from "../components/Layout";

export default function Contatti() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Contatti</div>
          <h1>Parliamo della tua prossima fornitura.</h1>
          <p>
            Se la tua azienda è alla ricerca di un broker commerciale per celle al litio o soluzioni energetiche,
            Litrade è disponibile per un primo contatto diretto.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-wrap">
          <div className="contact-card">
            <div className="contact-row">
              <div className="contact-label">Email</div>
              <div className="contact-value">michelebenini03@gmail.com</div>
            </div>
            <div className="contact-row">
              <div className="contact-label">Telefono</div>
              <div className="contact-value">+39 339 697 4518</div>
            </div>
            <div className="contact-row">
              <div className="contact-label">Area operativa</div>
              <div className="contact-value">Italia / Europa</div>
            </div>
          </div>

          <div className="card">
            <h3>Approccio</h3>
            <p>
              Litrade facilita il contatto tra cliente e fornitore, supportando lo sviluppo della relazione commerciale
              e il coordinamento dei processi operativi collegati alla fornitura.
            </p>
            <p className="grid-note">
              Per richieste commerciali, partnership o approfondimenti sulle categorie prodotto, è possibile contattare direttamente via email o telefono.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}