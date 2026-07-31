import type { ProjectProposal } from "@/lib/projects";

export const evaluationCriteria = [
  { key: "impact", label: "Impacto esperado", weight: 30 },
  { key: "alignment", label: "Alineación con la misión", weight: 25 },
  { key: "feasibility", label: "Viabilidad", weight: 20 },
  { key: "safeguarding", label: "Protección de la infancia", weight: 15 },
  { key: "sustainability", label: "Continuidad", weight: 10 },
] as const;

export function calculateEvaluationScore(
  scores: ProjectProposal["scores"],
): number {
  const weightedTotal = evaluationCriteria.reduce(
    (total, criterion) => total + scores[criterion.key] * criterion.weight,
    0,
  );

  return Math.round(weightedTotal / 5);
}

export function hasBlockingReview(proposal: ProjectProposal): boolean {
  return !proposal.documentsComplete || !proposal.safeguardingReady;
}
