export type ProjectArea = "Salud" | "Educación" | "Deporte";

export type ProjectStatus =
  | "Recibido"
  | "En revisión"
  | "Falta información"
  | "En evaluación"
  | "Aprobado";

export type ProjectRole =
  | "Organización solicitante"
  | "Analista"
  | "Evaluador"
  | "Administrador";

export type ProjectProposal = {
  id: string;
  name: string;
  organization: string;
  area: ProjectArea;
  location: string;
  beneficiaries: number;
  budgetUsd: number;
  status: ProjectStatus;
  submittedAt: string;
  summary: string;
  nextAction: string;
  documentsComplete: boolean;
  safeguardingReady: boolean;
  scores: {
    impact: number;
    alignment: number;
    feasibility: number;
    safeguarding: number;
    sustainability: number;
  };
};

export const projectFixtures: ProjectProposal[] = [
  {
    id: "FLM-2026-014",
    name: "Club abierto Rosario Sur",
    organization: "Asociación Puentes del Sur",
    area: "Deporte",
    location: "Rosario, Argentina",
    beneficiaries: 180,
    budgetUsd: 28500,
    status: "En evaluación",
    submittedAt: "28 jul 2026",
    summary:
      "Entrenamiento inclusivo, acompañamiento escolar y formación de entrenadores para niñas y niños de 8 a 14 años.",
    nextAction: "Completar evaluación técnica antes del 7 de agosto.",
    documentsComplete: true,
    safeguardingReady: true,
    scores: {
      impact: 5,
      alignment: 5,
      feasibility: 4,
      safeguarding: 4,
      sustainability: 3,
    },
  },
  {
    id: "FLM-2026-013",
    name: "Aulas que acompañan",
    organization: "Red Horizonte",
    area: "Educación",
    location: "Santa Fe, Argentina",
    beneficiaries: 95,
    budgetUsd: 14200,
    status: "Falta información",
    submittedAt: "25 jul 2026",
    summary:
      "Tutorías y herramientas digitales para fortalecer la continuidad educativa en tres escuelas rurales.",
    nextAction: "Solicitar presupuesto desglosado y carta de la escuela asociada.",
    documentsComplete: false,
    safeguardingReady: true,
    scores: {
      impact: 4,
      alignment: 5,
      feasibility: 3,
      safeguarding: 4,
      sustainability: 4,
    },
  },
  {
    id: "FLM-2026-012",
    name: "Chequeos que llegan",
    organization: "Fundación Trama Salud",
    area: "Salud",
    location: "Córdoba, Argentina",
    beneficiaries: 240,
    budgetUsd: 43000,
    status: "En revisión",
    submittedAt: "22 jul 2026",
    summary:
      "Jornadas de detección temprana y derivación pediátrica articuladas con centros comunitarios.",
    nextAction: "Validar convenio con la institución sanitaria ejecutora.",
    documentsComplete: true,
    safeguardingReady: false,
    scores: {
      impact: 5,
      alignment: 4,
      feasibility: 3,
      safeguarding: 2,
      sustainability: 3,
    },
  },
];
