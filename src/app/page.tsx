import Link from "next/link";
import { calculateEvaluationScore } from "@/lib/evaluation";
import { projectFixtures } from "@/lib/projects";

const featured = projectFixtures[0];
const featuredScore = calculateEvaluationScore(featured.scores);

export default function Home() {
  return (
    <main>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Una puerta clara para cada iniciativa</p>
          <h1>Proyectos que llegan ordenados. Decisiones que dejan huella.</h1>
          <p className="hero-text">
            Un portal simple para recibir propuestas, completar documentación y
            evaluar oportunidades de salud, educación y deporte.
          </p>
          <div className="button-row">
            <Link className="button button-primary" href="/presentar">
              Presentar un proyecto
            </Link>
            <Link className="button button-secondary" href="/panel">
              Ver panel demo
            </Link>
          </div>
          <p className="demo-note">Recorrido con información ficticia y sin datos sensibles.</p>
        </div>

        <div className="preview-panel" aria-label="Vista previa del panel de evaluación">
          <div className="preview-topline">
            <span className="status status-review">{featured.status}</span>
            <span className="mono">{featured.id}</span>
          </div>
          <p className="preview-label">Próxima decisión</p>
          <h2>{featured.name}</h2>
          <p>{featured.organization}</p>
          <div className="preview-score">
            <strong>{featuredScore}</strong>
            <span>puntaje orientativo<br />sobre 100</span>
          </div>
          <div
            className="progress-track"
            role="progressbar"
            aria-label="Puntaje orientativo"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={featuredScore}
          >
            <span style={{ width: `${featuredScore}%` }} />
          </div>
          <dl className="preview-facts">
            <div><dt>Área</dt><dd>{featured.area}</dd></div>
            <div><dt>Alcance</dt><dd>{featured.beneficiaries} participantes</dd></div>
            <div><dt>Documentos</dt><dd>Completos</dd></div>
          </dl>
          <p className="next-action"><strong>Siguiente:</strong> {featured.nextAction}</p>
        </div>
      </section>

      <section className="journey-section">
        <div className="shell journey-grid">
          <div>
            <p className="eyebrow">Un recorrido, de punta a punta</p>
            <h2>Menos mensajes sueltos. Más contexto para decidir.</h2>
          </div>
          <ol className="journey-list">
            <li>
              <span>01</span>
              <div><h3>Presentar</h3><p>La organización carga su iniciativa y sabe qué información falta.</p></div>
            </li>
            <li>
              <span>02</span>
              <div><h3>Ordenar</h3><p>El equipo recibe cada propuesta con documentos, alcance y presupuesto.</p></div>
            </li>
            <li>
              <span>03</span>
              <div><h3>Evaluar</h3><p>Los criterios orientan la conversación sin reemplazar la decisión humana.</p></div>
            </li>
          </ol>
        </div>
      </section>

      <section className="closing-cta shell">
        <div>
          <p className="eyebrow">Demo lista para conversar</p>
          <h2>Una idea concreta, navegable y fácil de validar.</h2>
        </div>
        <Link className="button button-primary" href="/presentar">Recorrer la experiencia</Link>
      </section>
    </main>
  );
}
