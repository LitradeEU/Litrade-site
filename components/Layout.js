import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <div>
            <div className="brand-kicker">LITRADE</div>
            <div className="brand-name">Lithium Trade Brokerage</div>
          </div>

          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/servizi">Servizi</Link>
            <Link href="/contatti">Contatti</Link>
          </nav>
        </div>
      </header>

      {children}

      <footer className="footer">
        <div className="container footer-inner">
          <div>© 2026 Litrade</div>
          <div>Brokeraggio B2B per batterie al litio e soluzioni energetiche</div>
        </div>
      </footer>
    </>
  );
}