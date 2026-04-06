import { useState } from "react";
import Layout from "../components/Layout";

export default function Contatti() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const buildMailto = () => {
    const subject = encodeURIComponent(`Richiesta contatto sito Litrade - ${form.company || form.name || "Azienda"}`);
    const body = encodeURIComponent(
      `Azienda: ${form.company}
` +
      `Nome: ${form.name}
` +
      `Email: ${form.email}
` +
      `Telefono: ${form.phone}
` +
      `Interesse: ${form.interest}

` +
      `Messaggio:
${form.message}`
    );

    window.location.href = `mailto:michelebenini03@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Contatti</div>
          <h1>Contatto diretto per richieste commerciali e sourcing B2B.</h1>
          <p>
            Se la tua azienda è interessata a celle agli ioni di litio, battery packs o soluzioni collegate al settore storage,
            puoi inviare una richiesta compilando il form qui sotto.
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

          <div className="card form-card">
            <h3>Invia una richiesta</h3>
            <div className="form-grid">
              <input name="company" placeholder="Azienda" value={form.company} onChange={handleChange} />
              <input name="name" placeholder="Nome e cognome" value={form.name} onChange={handleChange} />
              <input name="email" placeholder="Email aziendale" value={form.email} onChange={handleChange} />
              <input name="phone" placeholder="Telefono" value={form.phone} onChange={handleChange} />
              <input name="interest" placeholder="Prodotto di interesse" value={form.interest} onChange={handleChange} className="full" />
              <textarea name="message" placeholder="Descrivi brevemente la richiesta" value={form.message} onChange={handleChange} className="full" rows="6" />
            </div>
            <div className="actions">
              <button type="button" className="btn-primary button-reset" onClick={buildMailto}>Invia via email</button>
            </div>
            <p className="grid-note">
              Il form apre un messaggio email precompilato indirizzato direttamente a Litrade.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
