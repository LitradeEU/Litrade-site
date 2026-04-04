import React from "react";

export default function Home() {
  return (
    <div style={{background:"#09090b",color:"white",minHeight:"100vh",fontFamily:"Arial",padding:"40px"}}>
      <h1>LITRADE</h1>
      <h2>Lithium Trade Brokerage</h2>

      <section style={{marginTop:"40px"}}>
        <h3>Broker commerciale B2B</h3>
        <p>
          Collegamento diretto tra aziende europee e fornitori di batterie al litio.
        </p>
        <p>
          Litrade opera come intermediario commerciale facilitando l’incontro tra
          domanda e offerta attraverso fornitori cinesi affidabili.
        </p>
      </section>

      <section style={{marginTop:"40px"}}>
        <h3>Servizi</h3>
        <ul>
          <li>Ricerca fornitori</li>
          <li>Intermediazione commerciale</li>
          <li>Coordinamento trasporti</li>
        </ul>
      </section>

      <section style={{marginTop:"40px"}}>
        <h3>Prodotti</h3>
        <ul>
          <li>Celle litio LFP, NMC, LMFP</li>
          <li>Pacchi batteria</li>
          <li>Sistemi di accumulo</li>
          <li>Fotovoltaico e illuminazione solare</li>
        </ul>
      </section>

      <section style={{marginTop:"40px"}}>
        <h3>Contatti</h3>
        <p>Email: michelebenini03@gmail.com</p>
        <p>Telefono: +39 339 697 4518</p>
        <p>Area: Italia / Europa</p>
      </section>
    </div>
  );
}
