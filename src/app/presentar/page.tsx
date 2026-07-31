import type { Metadata } from "next";
import { ProjectForm } from "./project-form";

export const metadata: Metadata = {
  title: "Presentar un proyecto",
  description: "Demo del recorrido para presentar una iniciativa social.",
};

export default function PresentProjectPage() {
  return (
    <main className="form-page shell">
      <div className="page-intro compact-intro">
        <p className="eyebrow">Presentar una iniciativa</p>
        <h1>Contanos qué quieren hacer y a quiénes puede ayudar.</h1>
        <p>Podés guardar un borrador en cualquier momento. En esta demo no se envían datos.</p>
      </div>
      <ProjectForm />
    </main>
  );
}
