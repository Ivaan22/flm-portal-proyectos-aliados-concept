import type { Metadata } from "next";
import Link from "next/link";
import { calculateEvaluationScore, evaluationCriteria, hasBlockingReview } from "@/lib/evaluation";
import { projectFixtures } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Panel de evaluación",
  description: "Demo de la cola de propuestas y su evaluación.",
};

type PanelPageProps = {
  searchParams: Promise<{ project?: string; saved?: string }>;
};

export default async function PanelPage({ searchParams }: PanelPageProps) {
  const { project, saved } = await searchParams;
  const selected = projectFixtures.find((item) => item.id === project) ?? projectFixtures[0];
  const score = calculateEvaluationScore(selected.scores);
  const blocked = hasBlockingReview(selected);

  return (
    <main className="panel-page shell">
      <section className="panel-command">
        <div className="panel-heading">
          <div>
            <p className="section-index mono">02 / MESA DE EVALUACIÓN</p>
            <h1>Decidir con<br /><span>todo el contexto.</span></h1>
            <p>Revisar, pedir información y dejar una próxima acción sin perder el hilo.</p>
          </div>
          <Link className="button button-primary" href="/presentar">Nueva solicitud <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="panel-stats" aria-label="Resumen de la cola">
          <div><span>Activas</span><strong>12</strong><small>3 nuevas esta semana</small></div>
          <div><span>Requieren acción</span><strong>04</strong><small>Documentación o resguardo</small></div>
          <div><span>Tiempo medio</span><strong>06d</strong><small>Recepción a decisión</small></div>
        </div>
      </section>

      {saved === "1" ? (
        <div className="saved-notice" role="status">
          Evaluación de demostración registrada. La próxima acción quedó actualizada.
        </div>
      ) : null}

      <div className="workspace-grid">
        <section className="queue-panel" aria-labelledby="queue-title">
          <div className="section-heading">
            <div><p className="eyebrow">Cola priorizada</p><h2 id="queue-title">Solicitudes recientes</h2></div>
            <span className="mono">3 de 12</span>
          </div>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Proyecto</th><th>Área</th><th>Estado</th><th>Puntaje</th></tr></thead>
              <tbody>
                {projectFixtures.map((proposal) => {
                  const proposalScore = calculateEvaluationScore(proposal.scores);
                  return (
                    <tr key={proposal.id} className={proposal.id === selected.id ? "selected-row" : ""}>
                      <td>
                        <Link href={`/panel?project=${proposal.id}`}>
                          <strong>{proposal.name}</strong><span>{proposal.organization}<br /><span className="mono">{proposal.id}</span></span>
                        </Link>
                      </td>
                      <td>{proposal.area}</td>
                      <td><span className={`status ${proposal.status === "Falta información" ? "status-warning" : "status-review"}`}>{proposal.status}</span></td>
                      <td className="mono score-cell">{proposalScore}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <aside className="detail-panel" aria-labelledby="detail-title">
          <div className="detail-topline">
            <span className="status status-review">{selected.status}</span>
            <span className="mono">{selected.id}</span>
          </div>
          <h2 id="detail-title">{selected.name}</h2>
          <p className="detail-org">{selected.organization} · {selected.location}</p>
          <p>{selected.summary}</p>

          <div className="score-block">
            <div><strong>{score}</strong><span>Puntaje orientativo</span></div>
            <p>Apoya la conversación. No aprueba ni rechaza automáticamente.</p>
          </div>

          <div className="criteria-list">
            {evaluationCriteria.map((criterion) => (
              <div key={criterion.key}>
                <span>{criterion.label}<small>{criterion.weight}%</small></span>
                <strong>{selected.scores[criterion.key]}/5</strong>
              </div>
            ))}
          </div>

          {blocked ? (
            <div className="blocking-callout">
              <strong>Revisión pendiente</strong>
              <p>La decisión queda pausada hasta completar documentación o protección.</p>
            </div>
          ) : (
            <div className="ready-callout">
              <strong>Lista para decisión</strong>
              <p>La documentación mínima y la declaración de protección están completas.</p>
            </div>
          )}

          <div className="next-action"><strong>Próxima acción</strong><p>{selected.nextAction}</p></div>
          <Link
            className="button button-primary button-full"
            href={`/panel?project=${selected.id}&saved=1`}
          >
            Registrar evaluación
          </Link>
        </aside>
      </div>
    </main>
  );
}
