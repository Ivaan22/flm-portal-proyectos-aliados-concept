import Link from "next/link";
import { calculateEvaluationScore } from "@/lib/evaluation";
import { projectFixtures } from "@/lib/projects";

const featured = projectFixtures[0];
const featuredScore = calculateEvaluationScore(featured.scores);

export default function Home() {
  return (
    <main className="home-page">
      <section className="impact-hero">
        <div className="field-geometry" aria-hidden="true">
          <span className="field-circle" />
          <span className="field-line" />
          <span className="signal-beacon signal-beacon-one" />
          <span className="signal-beacon signal-beacon-two" />
        </div>

        <div className="shell hero-stage">
          <div className="hero-copy">
            <p className="hero-kicker"><span>01</span> Concepto para Fundación Leo Messi</p>
            <h1>Del proyecto<br /><span>a la decisión.</span></h1>
            <p className="hero-text">
              Una puerta digital para presentar, ordenar y evaluar iniciativas de salud,
              educación y deporte.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/presentar">
                Presentar proyecto <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button button-ghost" href="/panel">
                Explorar panel
              </Link>
            </div>
            <p className="demo-note"><span aria-hidden="true">●</span> Demo navegable · Información ficticia</p>
          </div>

          <div className="decision-scene" aria-label="Vista previa de una propuesta en evaluación">
            <div className="scene-halo" aria-hidden="true" />
            <div className="scene-card">
              <div className="scene-topline">
                <span className="status status-review">{featured.status}</span>
                <span className="mono">{featured.id}</span>
              </div>
              <div className="scene-context">
                <p className="preview-label">En mesa de decisión</p>
                <h2>{featured.name}</h2>
                <p>{featured.organization}</p>
              </div>
              <div className="scene-score">
                <strong>{featuredScore}</strong>
                <span>Puntaje<br />orientativo</span>
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
                <div><dt>Alcance</dt><dd>{featured.beneficiaries}</dd></div>
                <div><dt>Documentos</dt><dd>Completos</dd></div>
              </dl>
              <p className="next-action"><strong>Siguiente</strong><span>{featured.nextAction}</span></p>
            </div>
            <span className="scene-index scene-index-top mono" aria-hidden="true">IMPACT / 01</span>
            <span className="scene-index scene-index-side mono" aria-hidden="true">SALUD · EDUCACIÓN · DEPORTE</span>
          </div>
        </div>
      </section>

      <section className="foundation-band" aria-label="Referencia conceptual a Fundación Leo Messi">
        <div className="shell foundation-band-grid">
          <div className="foundation-lockup">
            <span className="foundation-ten mono" aria-hidden="true">10</span>
            <span>
              <small>Concepto digital para</small>
              <strong>Fundación <em>Leo Messi</em></strong>
            </span>
          </div>
          <p>Una puerta común para iniciativas que buscan mejorar oportunidades para niñas, niños y adolescentes.</p>
          <ul className="foundation-pillars" aria-label="Áreas de trabajo">
            <li><span className="mono">01</span> Salud</li>
            <li><span className="mono">02</span> Educación</li>
            <li><span className="mono">03</span> Deporte</li>
          </ul>
        </div>
      </section>

      <section className="journey-section">
        <div className="shell journey-heading">
          <p className="section-index mono">02 / RECORRIDO</p>
          <h2>Menos ruido.<br /><span>Más contexto para decidir.</span></h2>
        </div>
        <div className="shell journey-grid">
          <p className="journey-lead">
            Una experiencia continua para que cada iniciativa llegue completa y cada
            decisión conserve su contexto.
          </p>
          <ol className="journey-list">
            <li><span>01</span><div><h3>Presentar</h3><p>La organización entiende qué cargar y qué información falta.</p></div></li>
            <li><span>02</span><div><h3>Ordenar</h3><p>El equipo recibe alcance, presupuesto y documentos en un solo lugar.</p></div></li>
            <li><span>03</span><div><h3>Evaluar</h3><p>Los criterios orientan la conversación sin reemplazar la decisión humana.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="closing-section">
        <div className="shell closing-cta">
          <p className="section-index mono">03 / DEMO NAVEGABLE</p>
          <h2>Una propuesta<br />que ya se puede probar.</h2>
          <Link className="button button-primary" href="/presentar">Recorrer experiencia <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}
