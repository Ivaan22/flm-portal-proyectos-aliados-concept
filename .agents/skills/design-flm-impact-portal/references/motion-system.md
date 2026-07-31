# Sistema de movimiento

## Principio

El movimiento debe dar sensación de sistema vivo y dirección. Los textos, controles y CTA permanecen estables; se animan la entrada, la profundidad y las señales de actividad.

## Página pública

- Revelado inicial del hero: 700 a 900 ms, con opacidad y desplazamiento vertical corto.
- Deriva ambiental: 16 a 22 s sobre geometría de fondo, con amplitud mínima.
- Máximo dos señales luminosas simultáneas.
- Barrido de luz: 9 a 13 s, sutil y no continuo en toda la página.
- Profundidad ligada al puntero solo en dispositivos con puntero fino y sin afectar acciones.

## Superficies operativas

- Hover y foco: 140 a 180 ms.
- Cambio de estado o paso: 180 a 220 ms.
- No animar tablas completas, inputs mientras se escribe ni contenido que cambie de tamaño inesperadamente.
- Los estados de carga deben reservar espacio para evitar saltos de layout.

## Implementación

- Priorizar `transform`, `opacity` y `filter`.
- Las escalas deben permanecer entre 1.02 y 1.07.
- Evitar animar `top`, `left`, `width` y `height`.
- Resolver la escena inicial con CSS nativo; no añadir dependencias de movimiento sin una necesidad repetida.
- Mantener los keyframes cerca del sistema visual global y usar nombres semánticos.

## Movimiento reducido y móvil

- Con `prefers-reduced-motion: reduce`, detener deriva, barridos y órbitas; conservar únicamente cambios instantáneos de estado.
- En móvil, reducir capas ambientales y eliminar profundidad ligada al puntero.
- Ningún contenido puede depender de que una animación finalice para ser legible o accionable.
