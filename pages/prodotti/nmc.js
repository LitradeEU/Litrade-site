import Link from "next/link";
import Layout from "../../components/Layout";

export default function NmcPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Prodotti · NMC</div>
          <h1>Celle NMC per applicazioni ad alta densità energetica e ingombro ottimizzato.</h1>
          <p>
            Le celle NMC sono adottate in configurazioni dove densità energetica, compattezza e profilo prestazionale
            hanno un peso importante nella progettazione del sistema finale.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>Profilo tecnico</h3>
            <ul className="list">
              <li>Tensione nominale tipica: 3.6 V</li>
              <li>Buon rapporto tra energia specifica e volume disponibile</li>
              <li>Adatte a configurazioni compatte e ad alta energia</li>
              <li>Impiego frequente in battery packs prestazionali</li>
            </ul>
          </div>

          <div className="card">
            <h3>Gamma indicativa</h3>
            <ul className="list">
              <li>Formati riportati: 18650 e 21700</li>
              <li>Esempi serie: NCM18650P-2000, NCM18650P-2200, NCM18650-2500, NCM18650-2600</li>
              <li>Serie 21700 documentata: INR21700-4000, INR21700-4500, INR21700-5000</li>
              <li>Capacità e configurazioni definite in base a modello e applicazione</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>Applicazioni tipiche</h3>
            <ul className="list">
              <li>Battery packs ad alta densità energetica</li>
              <li>Mobilità elettrica leggera e sistemi compatti</li>
              <li>Applicazioni con vincoli su peso e volume</li>
              <li>Progetti che richiedono elevata energia specifica</li>
            </ul>
          </div>

          <div className="card">
            <h3>Conformità disponibile</h3>
            <ul className="list">
              <li>REACH Annex XVII</li>
              <li>RoHS 2011/65/EU e direttiva 2015/863</li>
              <li>Report materici e immagini campione di laboratorio</li>
              <li>Supporto documentale per valutazioni B2B</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container band">
          <h3>Supporto commerciale</h3>
          <p>
            Litrade supporta l’accesso a celle NMC tramite interlocuzione diretta con fornitori selezionati,
            favorendo l’allineamento tecnico-commerciale e logistico necessario alla fornitura.
          </p>
          <div className="actions">
            <Link href="/contatti" className="btn-primary">Richiedi contatto</Link>
            <Link href="/prodotti" className="btn-secondary">Torna ai prodotti</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
