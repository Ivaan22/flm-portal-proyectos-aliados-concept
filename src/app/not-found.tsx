import Link from "next/link";

export default function NotFound() {
  return (
    <main className="empty-page shell">
      <p className="eyebrow">Página no encontrada</p>
      <h1>Esta ruta todavía no forma parte de la demo.</h1>
      <p>Volvé al inicio para recorrer el formulario y el panel de evaluación.</p>
      <Link className="button button-primary" href="/">Volver al inicio</Link>
    </main>
  );
}
