import Link from "next/link";
import Layout from "../../components/Layout";

export default function LmfpPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Prodotti · LMFP</div>
          <h1>Celle LMFP per progetti che richiedono stabilità fosfato e miglioramento energetico.</h1>
          <p>
            Le celle LMFP rappresentano una tecnologia di interesse per applicazioni in cui si ricerca un equilibrio
            tra profilo di sicurezza tipico delle chimiche fosfato e incremento prestazionale rispetto alla LFP tradizionale.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>Profilo tecnico</h3>
            <ul className="list">
              <li>Chimica orientata a bilanciare sicurezza e resa energetica</li>
              <li>Interesse crescente per storage evoluto e battery packs di nuova generazione</li>
              <li>Adatta a progetti che ricercano un upgrade rispetto a LFP standard</li>
              <li>Possibile impiego in formati cilindrici ad alta capacità</li>
            </ul>
          </div>

          <div className="card">
            <h3>Gamma indicativa</h3>
            <ul className="list">
              <li>Il sito Xiaolu mostra una linea LMFP 33140</li>
              <li>Applicabile a scenari storage e sistemi energetici evoluti</li>
              <li>Utilizzabile in configurazioni dedicate su base progetto</li>
              <li>Disponibilità e specifiche da confermare in funzione del modello richiesto</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>Applicazioni tipiche</h3>
            <ul className="list">
              <li>Sistemi di accumulo con requisiti evoluti</li>
              <li>Battery packs di nuova generazione</li>
              <li>Progetti che richiedono bilanciamento tra stabilità e densità</li>
              <li>Soluzioni in cui il criterio tecnico prevale sulla standardizzazione di massa</li>
            </ul>
          </div>

          <div className="card">
            <h3>Approccio di fornitura</h3>
            <ul className="list">
              <li>Verifica disponibilità con il produttore in funzione del progetto</li>
              <li>Allineamento tecnico-commerciale preliminare</li>
              <li>Supporto documentale e logistico a valle del contatto</li>
              <li>Gestione B2B orientata a richiesta specifica</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container band">
          <h3>Supporto commerciale</h3>
          <p>
            Litrade facilita il contatto con fornitori in grado di offrire soluzioni LMFP,
            supportando lo sviluppo dell’interazione commerciale e l’organizzazione operativa della fornitura.
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
