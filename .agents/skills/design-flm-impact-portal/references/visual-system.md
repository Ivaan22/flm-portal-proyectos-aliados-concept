# Sistema visual del portal

## Idea rectora

**El campo se convierte en sistema.** La geometría deportiva deja de ser ilustración y pasa a ordenar proyectos, estados y decisiones. El resultado debe sentirse como una pieza editorial nocturna que revela un producto digital real.

## Paleta

| Uso | Token | Valor |
| --- | --- | --- |
| Noche | `--night` | `#020B16` |
| Noche elevada | `--night-raised` | `#071A2E` |
| Tinta | `--ink` | `#07192B` |
| Papel | `--paper` | `#F4F7F8` |
| Superficie | `--surface` | `#FFFFFF` |
| Señal | `--signal` | `#63D7FF` |
| Señal fuerte | `--signal-strong` | `#00A7D6` |
| Texto nocturno | `--night-copy` | `#C5D5E2` |
| Texto secundario | `--muted` | `#587083` |
| Línea | `--line` | `#CFDBE2` |
| Línea nocturna | `--night-line` | `rgba(136, 211, 239, 0.18)` |
| Éxito | `--success` | `#127657` |
| Atención | `--warning` | `#A66200` |
| Riesgo | `--danger` | `#B42318` |

El celeste comunica energía, selección o avance. Los colores semánticos se reservan para estados reales.

## Tipografía

- Geist Sans para lenguaje, títulos y navegación.
- Geist Mono para identificadores, cifras, estados y microdatos.
- Hero: `clamp(3.3rem, 8vw, 7.5rem)`, interlineado entre 0.84 y 0.94 y tracking negativo.
- Títulos de sección: `clamp(2.4rem, 5vw, 5.5rem)`.
- Texto de lectura: 16 a 20 px, máximo 62 caracteres.
- Contrastar palabras enormes con metadatos muy precisos; evitar un tamaño medio uniforme.

## Composición

### Página pública

- Cabecera delgada y oscura con aviso conceptual visible.
- Hero de alto de viewport con copy a la izquierda y escena de decisión a la derecha.
- Una sola escena producto, construida con capas y geometría; no una captura encerrada en una tarjeta.
- Franja de señales o resultados entre hero y proceso.
- Proceso contado con números grandes y una línea de recorrido, no con tres tarjetas iguales.
- Cambio de ritmo entre secciones oscuras y claras.

### Formulario

- Marco oscuro que aporta contexto y una superficie clara para responder.
- Progreso legible como secuencia, con el paso actual dominante.
- Una pregunta compleja por bloque y ayuda persistente.
- Confirmación con identificador ficticio y siguiente acción.
- La espectacularidad vive en el marco; los controles siguen siendo sobrios y claros.

### Panel

- Cabecera de comando oscura que integra contexto, cifras y filtros.
- Cola de trabajo como superficie dominante.
- Detalle de evaluación subordinado a la selección activa.
- Usar densidad, alineación y líneas antes que tarjetas con sombra.
- Mostrar por qué existe un puntaje y nunca decidir automáticamente.

## Forma y profundidad

- Radios grandes solo en contenedores principales; controles entre 8 y 12 px.
- Bordes finos, líneas de campo y recortes geométricos antes que sombras blandas.
- Una sombra profunda y tintada solo para la escena principal.
- Usar `overflow: clip`, pseudo-elementos y fondos CSS para producir profundidad sin imágenes pesadas.
- Los estados pueden usar píldoras; las etiquetas comunes no.

## Responsive

- 1440 px: composición asimétrica completa y escena lateral.
- 768 px: escena debajo del mensaje, métricas en franja compacta.
- 390 px: título legible en máximo cuatro líneas, CTA visible y escena simplificada.
- Ocultar capas ambientales secundarias en móvil; nunca esconder información funcional.
- Ningún elemento puede crear desplazamiento horizontal.

## Accesibilidad y límites

- Contraste WCAG AA y foco visible de 3 px separado del borde.
- Objetivos interactivos mínimos de 44 por 44 px.
- No depender solo del color para estados.
- Respetar `prefers-reduced-motion` y `prefers-contrast`.
- Mantener visible `Propuesta conceptual no oficial`.
- No usar logotipos, fotografías, firmas ni datos personales reales.
