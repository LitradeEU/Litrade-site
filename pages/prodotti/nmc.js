import Link from "next/link";
import Layout from "../../components/Layout";

export default function NmcPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Prodotti · NMC</div>
          <h1>Celle NMC per applicazioni ad alta densità energetica.</h1>
          <p>
            Le celle Nickel Manganese Cobalt sono generalmente utilizzate in progetti in cui peso,
            compattezza ed energia specifica assumono particolare importanza, mantenendo un profilo prestazionale elevato.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>Caratteristiche principali</h3>
            <ul className="list">
              <li>Maggiore densità energetica rispetto a soluzioni più conservative</li>
              <li>Buon equilibrio tra prestazione e ingombro</li>
              <li>Adatte a configurazioni dove volume e peso incidono sul progetto</li>
              <li>Impiego diffuso in applicazioni power-oriented</li>
            </ul>
          </div>

          <div className="card">
            <h3>Applicazioni tipiche</h3>
            <ul className="list">
              <li>Battery packs ad alta energia</li>
              <li>Mobilità elettrica e sistemi compatti</li>
              <li>Soluzioni con focus su autonomia o densità</li>
              <li>Applicazioni professionali con requisiti di performance elevati</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container band">
          <h3>Approccio commerciale</h3>
          <p>
            Litrade supporta l’accesso a celle NMC tramite interlocuzione diretta con fornitori selezionati,
            facilitando l’allineamento commerciale e logistico necessario alla fornitura.
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
