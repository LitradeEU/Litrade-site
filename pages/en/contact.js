import { useState } from "react";
import LayoutEn from "../../components/LayoutEn";

export default function ContactEn() {
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
    const subject = encodeURIComponent(`Litrade contact request - ${form.company || form.name || "Company"}`);
    const body = encodeURIComponent(
      `Company: ${form.company}\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Interest: ${form.interest}\n\n` +
      `Message:\n${form.message}`
    );

    window.location.href = `mailto:michelebenini03@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <LayoutEn>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Contact</div>
          <h1>Direct contact for B2B sourcing requests.</h1>
          <p>
            Share your technical and commercial requirements and we will prepare a first product/documentation
            qualification path for Italy and Europe.
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
              <div className="contact-label">Phone</div>
              <div className="contact-value">+39 339 697 4518</div>
            </div>
            <div className="contact-row">
              <div className="contact-label">Coverage</div>
              <div className="contact-value">Italy / Europe</div>
            </div>
          </div>

          <div className="card form-card">
            <h3>Send a request</h3>
            <div className="form-grid">
              <input name="company" placeholder="Company" value={form.company} onChange={handleChange} />
              <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} />
              <input name="email" placeholder="Business email" value={form.email} onChange={handleChange} />
              <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
              <input name="interest" placeholder="Chemistry / model of interest" value={form.interest} onChange={handleChange} className="full" />
              <textarea name="message" placeholder="Volume, technical specs, timing, destination" value={form.message} onChange={handleChange} className="full" rows="6" />
            </div>
            <div className="actions">
              <button type="button" className="btn-primary button-reset" onClick={buildMailto}>Send by email</button>
            </div>
            <p className="grid-note">The form opens your email client with a pre-filled draft.</p>
          </div>
        </div>
      </section>
    </LayoutEn>
  );
}
