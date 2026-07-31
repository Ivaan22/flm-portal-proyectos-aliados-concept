import Link from "next/link";
import Image from "next/image";
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

      <section className="foundation-profile" aria-labelledby="foundation-profile-title">
        <div className="foundation-profile-orbit" aria-hidden="true" />
        <div className="shell foundation-profile-head">
          <div className="foundation-year">
            <span className="mono">Desde</span>
            <strong className="mono">2007</strong>
            <small>Argentina · Alcance internacional</small>
          </div>
          <div>
            <p className="section-index mono">02 / LA FUNDACIÓN EN CONTEXTO</p>
            <h2 id="foundation-profile-title">Una misión.<br /><span>Tres formas de abrir oportunidades.</span></h2>
            <p className="foundation-mission">
              La Fundación Leo Messi es una entidad sin fines de lucro que actúa en favor de
              niñas, niños y adolescentes en situación de riesgo, junto a instituciones que
              desarrollan proyectos de salud, educación y deporte.
            </p>
          </div>
        </div>

        <div className="shell foundation-profile-body">
          <ol className="pillar-ledger">
            <li>
              <span className="mono">01</span>
              <div><p>Salud</p><h3>Una prioridad de todos.</h3></div>
              <p>Fortalecer sistemas sanitarios, capacitar especialistas y acompañar investigación sobre enfermedades prevalentes de la infancia.</p>
              <figure className="pillar-visual">
                <Image
                  src="/media/foundation/health-research.png"
                  alt="Representación conceptual de investigación sanitaria pediátrica"
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1120px) 36vw, 220px"
                />
              </figure>
            </li>
            <li>
              <span className="mono">02</span>
              <div><p>Educación</p><h3>Un derecho fundamental.</h3></div>
              <p>Impulsar conocimientos, competencias, actitudes y valores que permitan construir un futuro sostenible y más igualitario.</p>
              <figure className="pillar-visual">
                <Image
                  src="/media/foundation/education-kits.png"
                  alt="Representación conceptual de materiales educativos preparados para una actividad"
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1120px) 36vw, 220px"
                />
              </figure>
            </li>
            <li>
              <span className="mono">03</span>
              <div><p>Deporte</p><h3>Una herramienta de inclusión.</h3></div>
              <p>Promover actividad física, infraestructura y formación como caminos de integración, compañerismo y respeto por las diferencias.</p>
              <figure className="pillar-visual">
                <Image
                  src="/media/foundation/inclusive-sport.png"
                  alt="Representación conceptual de una práctica de fútbol inclusivo"
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1120px) 36vw, 220px"
                />
              </figure>
            </li>
          </ol>

          <aside className="foundation-proof" aria-labelledby="proof-title">
            <p className="mono">ACCIONES PUBLICADAS</p>
            <h3 id="proof-title">Impacto que ya tiene nombre propio.</h3>
            <div className="proof-list">
              <article><span className="mono">SALUD · 2022</span><h4>SJD Pediatric Cancer Center Barcelona</h4><p>Participación como donante fundador del centro monográfico de oncología pediátrica.</p></article>
              <article><span className="mono">EDUCACIÓN · 2020</span><h4>UNICEF · Siria</h4><p>Kits educativos distribuidos para 50.630 niñas y niños en nueve provincias.</p></article>
              <article><span className="mono">INCLUSIÓN · 2021</span><h4>Special Olympics Catalunya</h4><p>Deporte, aprendizaje y desarrollo para jóvenes con discapacidad intelectual.</p></article>
            </div>
          </aside>
        </div>

        <div className="shell foundation-portal-bridge">
          <div>
            <p className="mono">POR QUÉ ESTE PORTAL</p>
            <h3>Cada acción empieza con una propuesta y crece con aliados.</h3>
          </div>
          <p>El portal ordena instituciones, objetivos, documentación, alcance y próxima acción para convertir una oportunidad en un proyecto evaluable.</p>
          <a href="https://messi.com/fundacion-leo-messi/" target="_blank" rel="noreferrer">Consultar información institucional <span aria-hidden="true">↗</span></a>
        </div>

        <div className="shell public-partners" aria-label="Partners publicados en el sitio de Fundación Leo Messi">
          <p className="mono">PARTNERS PUBLICADOS</p>
          <ul>
            <li>
              <Image className="partner-logo partner-logo-adidas" src="/partners/adidas.png" alt="adidas" width={148} height={100} />
            </li>
            <li>
              <Image className="partner-logo partner-logo-unicef" src="/partners/unicef.png" alt="UNICEF" width={184} height={46} />
            </li>
            <li>
              <Image className="partner-logo partner-logo-fcb" src="/partners/fundacio-fc-barcelona.png" alt="Fundació FC Barcelona" width={174} height={69} />
            </li>
            <li>
              <Image className="partner-logo partner-logo-sancor" src="/partners/grupo-sancor-seguros.png" alt="Grupo Sancor Seguros" width={184} height={67} />
            </li>
          </ul>
          <small>Referencias públicas de partners de la Fundación · uso visual dentro de una propuesta conceptual no oficial.</small>
        </div>
      </section>

      <section className="journey-section">
        <div className="shell journey-heading">
          <p className="section-index mono">03 / RECORRIDO</p>
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
          <p className="section-index mono">04 / DEMO NAVEGABLE</p>
          <h2>Una propuesta<br />que ya se puede probar.</h2>
          <Link className="button button-primary" href="/presentar">Recorrer experiencia <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}
