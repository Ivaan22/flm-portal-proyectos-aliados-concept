---
name: design-flm-impact-portal
description: Diseña, implementa o revisa pantallas del Portal de Proyectos y Aliados conceptual de Fundación Leo Messi. Usar para landings, formularios multipaso, paneles de evaluación, fichas de proyectos y componentes React/Next.js de esta demo cuando se necesite una interfaz institucional, humana, accesible y visualmente consistente.
---

# Diseñar el FLM Impact Portal

Crear una demo que comunique en segundos qué hace el producto y permita recorrer un flujo real. Priorizar impacto, confianza y claridad antes que espectáculo.

## Leer antes de diseñar

Leer `references/visual-system.md` antes de crear o modificar UI. Aplicar sus tokens, patrones y límites legales.

## Flujo de trabajo

1. Declarar una lectura de diseño de una línea.
2. Identificar el trabajo principal de la pantalla y un único CTA primario.
3. Diseñar primero el estado exitoso y luego completar vacío, carga, error y foco cuando correspondan.
4. Implementar mobile-first con HTML semántico y componentes de servidor por defecto.
5. Aislar interactividad en componentes cliente pequeños.
6. Verificar teclado, foco visible, contraste WCAG AA, texto a 200% y `prefers-reduced-motion`.
7. Ejecutar lint y build antes de entregar.

## Reglas de producto

- Mantener siempre visible `Propuesta conceptual no oficial`.
- No usar logotipos, fotografías de Lionel Messi ni marcas registradas sin autorización.
- No mostrar datos reales de menores, salud, discapacidad, documentos o contactos.
- Usar datos ficticios claramente marcados como demostración.
- Explicar el estado de cada solicitud con lenguaje humano y una próxima acción.
- Hacer que presentar, revisar y decidir sean recorridos comprensibles sin capacitación.

## Reglas visuales

- Usar una base clara, tinta azul profundo y un único acento celeste.
- Mantener una jerarquía editorial sobria con Geist y cifras tabulares.
- Evitar gradientes púrpura, glassmorphism, fotos decorativas, dashboards falsos y filas de tres tarjetas idénticas.
- Usar asimetría moderada en páginas públicas y densidad funcional en el panel.
- Reservar píldoras para estados; usar radios suaves en superficies y radios menores en controles.
- Aplicar movimiento bajo: transiciones breves y funcionales, nunca scroll hijacking ni animación continua.

## Criterio de salida

No entregar una maqueta vacía. Cada pantalla debe incluir contenido de demostración creíble, una acción siguiente y un estado visible. Rechazar cualquier detalle visual que dificulte comprensión, accesibilidad o confianza institucional.

## Atribución

Esta skill adapta principios de disciplina visual de [Taste Skill](https://github.com/Leonxlnx/taste-skill) a un producto institucional accesible. No aplicar sus patrones cinematográficos o de landing cuando contradigan los flujos operativos del portal.
