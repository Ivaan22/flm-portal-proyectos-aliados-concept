import Link from "next/link";
import { ConceptBadge } from "@/components/concept-badge";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Ir al inicio">
          <span className="brand-mark" aria-hidden="true">10</span>
          <span>
            <strong>Proyectos + Aliados</strong>
            <small>Concepto digital</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Navegación principal">
          <Link href="/presentar">Presentar proyecto</Link>
          <Link href="/panel">Panel demo</Link>
        </nav>
        <ConceptBadge />
      </div>
    </header>
  );
}
