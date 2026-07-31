# Portal de Proyectos y Aliados

Demo conceptual para mostrar cómo una fundación puede recibir, ordenar y evaluar iniciativas de salud, educación y deporte en un único recorrido.

> **Propuesta conceptual no oficial.** Este repositorio no está afiliado, aprobado ni publicado por Fundación Leo Messi. No incluye logotipos, fotografías ni datos reales.

## Qué se puede recorrer

- `/`: propuesta de valor y vista previa.
- `/presentar`: formulario multipaso con resumen y confirmación ficticia.
- `/panel`: cola de solicitudes, criterios ponderados, alertas y próxima acción.

## Inicio rápido

Requisitos: Node.js 20.9 o superior y pnpm 11.

```bash
pnpm install
pnpm dev
```

Abrir `http://localhost:3000`. Para validar antes de publicar:

```bash
pnpm check
```

## Arquitectura

- Next.js App Router y TypeScript estricto.
- Componentes de servidor por defecto; interactividad aislada en el formulario.
- Fixtures y reglas de evaluación en `src/lib`, listos para reemplazar por persistencia real.
- CSS nativo con tokens y accesibilidad en `src/app/globals.css`.
- Skill visual local en `.agents/skills/design-flm-impact-portal`.

## Documentación

- [Visión de producto](docs/PRODUCT_VISION.md)
- [Alcance del MVP](docs/MVP_SCOPE.md)
- [Roles y flujos](docs/ROLES_AND_FLOWS.md)
- [Modelo de datos](docs/DATA_MODEL.md)
- [Criterios de evaluación](docs/EVALUATION_CRITERIA.md)
- [Seguridad y privacidad](docs/SECURITY_AND_PRIVACY.md)
- [Backlog](docs/BACKLOG.md) y [roadmap](docs/ROADMAP.md)
- [Decisiones técnicas](docs/TECHNICAL_DECISIONS.md)

## Estado

Primera demo visual. No tiene autenticación, base de datos, almacenamiento ni envíos reales. Esas capacidades requieren validación institucional antes de implementarse.
