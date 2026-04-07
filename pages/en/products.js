import Link from "next/link";
import LayoutEn from "../../components/LayoutEn";
import { ProductVisual } from "../../components/ProductVisuals";

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
