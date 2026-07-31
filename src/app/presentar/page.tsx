import type { Metadata } from "next";
import { ProjectForm } from "./project-form";

export const metadata: Metadata = {
  title: "Presentar un proyecto",
  description: "Demo del recorrido para presentar una iniciativa social.",
};

export default function PresentProjectPage() {
  return (
    <main className="form-page">
      <div className="form-intro-frame">
        <div className="shell page-intro compact-intro">
          <p className="section-index mono">01 / PRESENTAR</p>
          <h1>Una buena iniciativa merece llegar <span>completa.</span></h1>
          <p>Contanos qué quieren hacer y a quiénes puede ayudar. En esta demo no se envían datos.</p>
        </div>
      </div>
      <div className="shell form-workspace">
        <ProjectForm />
      </div>
    </main>
  );
}
