import Link from "next/link";

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M13.2 2.5L5.9 13h4.9l-0.9 8.5L18.1 11h-4.8l-0.1-8.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function LayoutEn({ children }) {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <Link href="/en" className="brand" aria-label="Litrade Home">
            <div className="logo-mark">
              <BoltIcon />
            </div>
            <div>
              <div className="brand-kicker">LITRADE</div>
              <div className="brand-name">Lithium Trade Brokerage</div>
            </div>
          </Link>

          <nav className="nav" aria-label="Main navigation">
            <Link href="/en">Home</Link>
            <Link href="/en/products">Products</Link>
            <Link href="/en/services">Services</Link>
            <Link href="/en/contact">Contact</Link>
            <Link href="/" className="nav-lang">IT</Link>
          </nav>
        </div>
      </header>

      {children}

      <footer className="footer">
        <div className="container footer-inner">
          <div>© 2026 Litrade</div>
          <div className="footer-note">
            B2B trade brokerage for lithium cells and energy solutions across Italy and Europe.
          </div>
        </div>
      </footer>
    </>
  );
}
