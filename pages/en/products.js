import Link from "next/link";
import LayoutEn from "../../components/LayoutEn";

function ProductVisual({ type = "cell" }) {
  if (type === "storage") {
    return (
      <svg viewBox="0 0 320 180" fill="none" aria-hidden="true">
        <rect x="32" y="42" width="256" height="96" rx="20" fill="rgba(58,109,240,0.12)" stroke="rgba(111,149,255,0.24)" />
        <rect x="58" y="68" width="86" height="14" rx="7" fill="rgba(111,149,255,0.75)" />
        <rect x="58" y="94" width="54" height="10" rx="5" fill="rgba(255,255,255,0.55)" />
        <rect x="232" y="68" width="22" height="44" rx="6" fill="rgba(111,149,255,0.65)" />
        <rect x="264" y="68" width="10" height="44" rx="5" fill="rgba(255,255,255,0.2)" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 180" fill="none" aria-hidden="true">
      <rect x="70" y="60" width="180" height="54" rx="27" fill="rgba(58,109,240,0.16)" stroke="rgba(111,149,255,0.26)" />
      <circle cx="92" cy="87" r="16" fill="rgba(255,255,255,0.08)" />
      <rect x="118" y="80" width="92" height="8" rx="4" fill="rgba(111,149,255,0.72)" />
      <rect x="118" y="94" width="58" height="6" rx="3" fill="rgba(255,255,255,0.38)" />
      <rect x="226" y="74" width="10" height="26" rx="5" fill="rgba(255,255,255,0.22)" />
    </svg>
  );
}

export default function ProductsEn() {
  return (
    <LayoutEn>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Products</div>
          <h1>Cylindrical lithium cells and energy solutions for B2B projects.</h1>
          <p>
            Technical pages are aligned with your current product catalog and include the exact models treated
            in 18650 and 32140 formats.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card product-card">
            <div className="product-visual">
              <ProductVisual type="cell" />
            </div>
            <h3>Lithium-ion cells</h3>
            <p>
              Dedicated pages for LFP, NMC, and LMFP with model list, key technical metrics, and cycle-life data.
            </p>
            <ul className="list">
              <li><Link href="/en/products/lfp">LFP (LiFePO4)</Link></li>
              <li><Link href="/en/products/nmc">NMC</Link></li>
              <li><Link href="/en/products/lmfp">LMFP</Link></li>
            </ul>
          </div>

          <div className="card product-card">
            <div className="product-visual">
              <ProductVisual type="storage" />
            </div>
            <h3>Finished products</h3>
            <p>
              Availability also includes finished systems related to storage and distributed energy applications.
            </p>
            <ul className="list">
              <li>Battery packs</li>
              <li>Energy storage systems (ESS)</li>
              <li>Photovoltaic panels</li>
              <li>Solar street lights</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          <div className="card">
            <div className="card-number">01</div>
            <h3>Current form factors</h3>
            <p>Cylindrical 18650 and 32140 configurations, differentiated by chemistry and discharge profile.</p>
          </div>

          <div className="card">
            <div className="card-number">02</div>
            <h3>Documentation package</h3>
            <p>UN38.3, SDS/MSDS, RoHS, REACH, and additional technical documents by model and destination market.</p>
          </div>

          <div className="card">
            <div className="card-number">03</div>
            <h3>Execution model</h3>
            <p>Fast requirement screening, model comparison, and supplier-side coordination through shipment.</p>
          </div>
        </div>
      </section>
    </LayoutEn>
  );
}
