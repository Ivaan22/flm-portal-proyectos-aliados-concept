---
name: design-flm-impact-portal
description: Diseña, eleva, implementa o audita el frontend del Portal de Proyectos y Aliados conceptual de Fundación Leo Messi. Usar cuando la landing, el formulario, el panel, las fichas de proyecto o los componentes React/Next.js de esta demo necesiten una dirección visual de alto impacto, deportiva-editorial, cinematográfica, accesible y claramente no oficial.
---

# Diseñar el FLM Impact Portal

Convertir una demo funcional en una experiencia que un decisor recuerde después de verla una vez. Mantener la utilidad del producto y rechazar cualquier resultado que parezca una plantilla SaaS genérica.

## Leer antes de diseñar

Leer `references/visual-system.md` y `references/motion-system.md` antes de crear o modificar UI. Aplicar sus tokens, patrones, límites de marca y reglas de rendimiento.

## Lectura predeterminada

- Varianza visual: 8/10 en páginas públicas y 6/10 en formularios y panel.
- Movimiento: 7/10 en páginas públicas y 4/10 en superficies operativas.
- Densidad: 4/10 en la landing y 7/10 en el panel.
- Lenguaje: deportivo-editorial, nocturno, preciso y humano.
- Dispositivo visual: un campo abstracto convertido en sistema mediante líneas, señales celestes y cifras de tablero.

## Flujo de trabajo

1. Auditar primero por qué la pantalla se siente genérica, plana o decorativa.
2. Declarar una lectura de diseño de una línea y un único CTA primario.
3. Construir una escena dominante; no una colección de tarjetas equivalentes.
4. Resolver el primer viewport completo antes de extender la página.
5. Implementar con componentes de servidor por defecto y aislar interactividad cliente.
6. Preservar un recorrido real: presentar, revisar y decidir.
7. Verificar 390, 768 y 1440 px; teclado; contraste; texto al 200 % y movimiento reducido.
8. Ejecutar lint, tipos y build antes de entregar.

## Reglas de alto impacto

- El primer viewport debe explicar el producto sin necesidad de desplazarse.
- Usar un contraste radical entre noche y papel, con celeste eléctrico como señal.
- Crear profundidad con geometría de campo, cifras, capas, luz y escala; no con muchas tarjetas.
- Usar tipografía grande, compacta y asimétrica. El subtítulo del hero no debe superar 24 palabras.
- Mostrar el producto real como pieza visual principal.
- Hacer que cada sección tenga una composición reconocible y distinta.
- Tratar el panel como una mesa de decisión, no como un dashboard decorativo.
- Mantener textos y CTA estables; usar movimiento para entrada, profundidad y foco.

## Prohibiciones

- No usar fondo celeste pálido, tarjeta blanca y sombra suave como lenguaje dominante.
- No usar gradientes púrpura, glassmorphism generalizado, blobs, emojis ni iconos aleatorios.
- No centrar todo ni colocar un eyebrow sobre cada título.
- No esconder el CTA principal debajo del primer viewport.
- No añadir una librería de movimiento para resolver una sola escena.
- No sacrificar accesibilidad, rendimiento o navegación por espectáculo.

## Producto, marca y privacidad

- Mantener visible `Propuesta conceptual no oficial`.
- No usar logotipos, firmas, fotografías de Lionel Messi ni marcas propietarias sin autorización.
- No mostrar datos reales de menores, salud, discapacidad, documentos o contactos.
- Usar fixtures ficticios claramente identificados.
- Explicar cada estado con lenguaje humano y una próxima acción.
- Nunca convertir un puntaje en una decisión automática.

## Criterio de salida

Rechazar una pantalla si se siente prefabricada, carece de un momento dominante o utiliza animación puramente decorativa. Entregar una interfaz navegable, responsive, accesible y compilable con contenido de demostración creíble.

## Atribución

Esta skill adapta la disciplina antiplantilla, la inferencia del brief y el enfoque audit-first de [Taste Skill](https://github.com/Leonxlnx/taste-skill) al contexto institucional del portal.
