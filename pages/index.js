import Link from "next/link";
import Layout from "../components/Layout";

const certifications = [
  {
    code: "ISO",
    title: "ISO 9001",
    note: "Sistema qualità per processi industriali strutturati.",
  },
  {
    code: "UN",
    title: "UN38.3",
    note: "Test di trasporto batterie al litio per spedizioni internazionali.",
  },
  {
    code: "RE",
    title: "REACH",
    note: "Conformità sostanze chimiche per filiere UE.",
  },
  {
    code: "RH",
    title: "RoHS",
    note: "Limitazione sostanze pericolose in prodotti elettrici/elettronici.",
  },
  {
    code: "MS",
    title: "SDS / MSDS",
    note: "Schede di sicurezza per gestione, stoccaggio e trasporto.",
  },
  {
    code: "CE",
    title: "CE (prodotti finiti)",
    note: "Marcatura applicabile a sistemi completi quando richiesta dalla destinazione d'uso.",
  },
  {
    code: "IE",
    title: "IEC 62133 / IEC 62619",
    note: "Standard spesso richiesti in ambito industriale e storage B2B.",
  },
  {
    code: "EU",
    title: "Battery Regulation UE",
    note: "Supporto documentale per requisiti del Reg. (UE) 2023/1542 su base prodotto.",
  },
];

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Lithium Trade Brokerage</div>
            <h1>Forniture batterie al litio per aziende in Italia e in Europa.</h1>
            <p className="lead">
              Litrade collega buyer B2B europei e produttori cinesi selezionati per celle LFP, NMC e LMFP,
              con un approccio orientato a continuità di fornitura, documentazione tecnica e gestione operativa.
            </p>
            <p className="hero-sublead">
              Focus su relazioni commerciali stabili, tempi decisionali più rapidi e coordinamento concreto
              tra team acquisti, qualità e logistica.
            </p>

            <div className="actions">
              <Link href="/prodotti" className="btn-primary">Esplora prodotti</Link>
              <Link href="/contatti" className="btn-secondary">Richiedi contatto</Link>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-label">Ambito operativo</div>

            <div className="metric">
              <div className="metric-title">Mercato</div>
              <div className="metric-value">B2B · Italia · Europa</div>
              <div className="metric-note">
                Forniture tra aziende con interlocuzione diretta su aspetti tecnico-commerciali.
              </div>
            </div>

            <div className="metric">
              <div className="metric-title">Tecnologie principali</div>
              <div className="metric-value">LFP · NMC · LMFP</div>
              <div className="metric-note">
                Celle cilindriche per storage, battery packs e applicazioni industriali.
              </div>
            </div>

            <div className="metric">
              <div className="metric-title">Gamma correlata</div>
              <div className="metric-value">Battery pack · ESS · PV · Solar lighting</div>
              <div className="metric-note">
                Supporto anche su prodotti finiti legati ad accumulo ed energia.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Processo snello, controllo documentale, comunicazione diretta.</h2>
            <p>
              Strutturiamo il sourcing per ridurre attriti tra richiesta tecnica, quotazione, conferma fornitura e spedizione.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div className="card-number">01</div>
              <h3>Accesso a produttori qualificati</h3>
              <p>
                Network consolidato nel settore litio con focus su qualità costante e affidabilità industriale.
              </p>
            </div>

            <div className="card">
              <div className="card-number">02</div>
              <h3>Allineamento tecnico-commerciale</h3>
              <p>
                Supporto su specifiche, varianti prodotto, documenti richiesti e avanzamento della trattativa.
              </p>
            </div>

            <div className="card">
              <div className="card-number">03</div>
              <h3>Coordinamento operativo</h3>
              <p>
                Monitoraggio dei passaggi chiave tra produzione, preparazione spedizione e consegna.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Certificazioni e conformità rilevanti per il mercato europeo.</h2>
            <p>
              Documentazione disponibile in funzione di chimica, modello e applicazione finale.
            </p>
          </div>

          <div className="cert-grid">
            {certifications.map((item) => (
              <article key={item.title} className="cert-card">
                <div className="cert-badge" aria-hidden="true">{item.code}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="band">
            <h3>Schede tecniche per chimica</h3>
            <p>
              Ogni pagina prodotto include varianti principali e specifiche di riferimento per una prima valutazione B2B.
            </p>
            <div className="actions">
              <Link href="/prodotti" className="btn-secondary">Vai alle schede</Link>
            </div>
          </div>

          <div className="band">
            <h3>Richieste su progetto</h3>
            <p>
              Possiamo supportare richieste con target specifici su capacità, corrente, formato e requisiti documentali.
            </p>
            <div className="actions">
              <Link href="/contatti" className="btn-primary">Parla con Litrade</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
