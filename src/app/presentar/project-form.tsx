"use client";

import { useState } from "react";
import Link from "next/link";

const stepNames = ["Organización", "Proyecto", "Revisión"];

type FormValues = {
  organization: string;
  contact: string;
  name: string;
  area: string;
  location: string;
  beneficiaries: string;
  summary: string;
  budget: string;
  safeguarding: boolean;
};

const initialValues: FormValues = {
  organization: "Asociación Puentes del Sur",
  contact: "equipo@ejemplo.org",
  name: "Club abierto Rosario Sur",
  area: "Deporte",
  location: "Rosario, Argentina",
  beneficiaries: "180",
  summary: "Entrenamiento inclusivo y acompañamiento escolar para niñas y niños de 8 a 14 años.",
  budget: "28500",
  safeguarding: true,
};

export function ProjectForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [submitted, setSubmitted] = useState(false);

  function updateValue<Key extends keyof FormValues>(key: Key, value: FormValues[Key]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  if (submitted) {
    return (
      <section className="success-panel" aria-live="polite">
        <span className="success-mark" aria-hidden="true">✓</span>
        <p className="eyebrow">Solicitud de demostración recibida</p>
        <h2>Tu proyecto ya tiene un lugar claro.</h2>
        <p>
          Código <strong className="mono">FLM-DEMO-015</strong>. En un portal real, la
          organización recibiría la confirmación y podría seguir el estado desde acá.
        </p>
        <div className="button-row">
          <Link className="button button-primary" href="/panel?project=FLM-2026-014">
            Ver cómo se evalúa
          </Link>
          <button className="button button-secondary" type="button" onClick={() => setSubmitted(false)}>
            Volver al resumen
          </button>
        </div>
      </section>
    );
  }

  return (
    <form className="project-form">
      <ol className="stepper" aria-label="Progreso del formulario">
        {stepNames.map((name, index) => (
          <li
            key={name}
            className={index === step ? "active" : index < step ? "complete" : ""}
            aria-current={index === step ? "step" : undefined}
          >
            <span>{index < step ? "✓" : index + 1}</span>
            <strong>{name}</strong>
          </li>
        ))}
      </ol>

      <div className="form-surface">
        <p className="step-caption">Paso {step + 1} de {stepNames.length}</p>

        {step === 0 && (
          <fieldset>
            <legend>¿Quién presenta el proyecto?</legend>
            <p className="fieldset-help">Datos ficticios precargados para recorrer la demo.</p>
            <label>
              Nombre de la organización
              <input value={values.organization} onChange={(event) => updateValue("organization", event.target.value)} required />
            </label>
            <label>
              Correo de contacto
              <input type="email" value={values.contact} onChange={(event) => updateValue("contact", event.target.value)} required />
              <small>En producción se verificará este correo antes de continuar.</small>
            </label>
          </fieldset>
        )}

        {step === 1 && (
          <fieldset>
            <legend>¿Qué iniciativa quieren impulsar?</legend>
            <div className="field-grid">
              <label className="field-wide">
                Nombre del proyecto
                <input value={values.name} onChange={(event) => updateValue("name", event.target.value)} required />
              </label>
              <label>
                Área
                <select value={values.area} onChange={(event) => updateValue("area", event.target.value)}>
                  <option>Salud</option><option>Educación</option><option>Deporte</option>
                </select>
              </label>
              <label>
                Ubicación
                <input value={values.location} onChange={(event) => updateValue("location", event.target.value)} required />
              </label>
              <label>
                Participantes estimados
                <input type="number" min="1" value={values.beneficiaries} onChange={(event) => updateValue("beneficiaries", event.target.value)} required />
              </label>
              <label>
                Presupuesto estimado (USD)
                <input type="number" min="0" value={values.budget} onChange={(event) => updateValue("budget", event.target.value)} required />
              </label>
              <label className="field-wide">
                Resumen
                <textarea rows={4} value={values.summary} onChange={(event) => updateValue("summary", event.target.value)} required />
                <small>Describí el problema, la propuesta y el resultado esperado.</small>
              </label>
              <label className="check-field field-wide">
                <input type="checkbox" checked={values.safeguarding} onChange={(event) => updateValue("safeguarding", event.target.checked)} />
                <span>La organización cuenta con políticas de protección de niñas, niños y adolescentes.</span>
              </label>
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset>
            <legend>Revisá antes de enviar</legend>
            <p className="fieldset-help">No se enviará información real desde esta demostración.</p>
            <dl className="review-list">
              <div><dt>Organización</dt><dd>{values.organization}</dd></div>
              <div><dt>Proyecto</dt><dd>{values.name}</dd></div>
              <div><dt>Área y lugar</dt><dd>{values.area} · {values.location}</dd></div>
              <div><dt>Alcance</dt><dd>{values.beneficiaries} participantes</dd></div>
              <div><dt>Presupuesto</dt><dd>USD {Number(values.budget || 0).toLocaleString("es-AR")}</dd></div>
              <div><dt>Protección</dt><dd>{values.safeguarding ? "Política declarada" : "Requiere información"}</dd></div>
            </dl>
            <div className="privacy-callout">
              <strong>Privacidad desde el inicio</strong>
              <p>No solicitamos nombres, diagnósticos ni información individual de menores.</p>
            </div>
          </fieldset>
        )}

        <div className="form-actions">
          {step > 0 ? (
            <button className="button button-secondary" type="button" onClick={() => setStep((current) => current - 1)}>
              Atrás
            </button>
          ) : <span />}
          {step < stepNames.length - 1 ? (
            <button className="button button-primary" type="button" onClick={() => setStep((current) => current + 1)}>
              Continuar
            </button>
          ) : (
            <button
              className="button button-primary"
              type="button"
              onClick={() => setSubmitted(true)}
            >
              Enviar demo
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
