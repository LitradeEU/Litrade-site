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

export default function Layout({ children }) {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="Litrade Home">
            <div className="logo-mark">
              <BoltIcon />
            </div>
            <div>
              <div className="brand-kicker">LITRADE</div>
              <div className="brand-name">Lithium Trade Brokerage</div>
            </div>
          </Link>

          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/servizi">Servizi</Link>
            <Link href="/prodotti">Prodotti</Link>    
            <Link href="/contatti">Contatti</Link>
          </nav>
        </div>
      </header>

      {children}

      <footer className="footer">
        <div className="container footer-inner">
          <div>© 2026 Litrade</div>
          <div className="footer-note">
            Intermediazione commerciale B2B per celle agli ioni di litio e soluzioni energetiche.
          </div>
        </div>
      </footer>
    </>
  );
}
