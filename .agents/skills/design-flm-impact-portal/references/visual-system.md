# Sistema visual del portal

## Lectura de diseño

Producto institucional para organizaciones sociales y un equipo evaluador. Lenguaje humano, confiable y deportivo-editorial; inspirado en el propósito público de Fundación Leo Messi, sin presentarse como material oficial.

## Tokens

| Uso | Token | Valor |
| --- | --- | --- |
| Fondo | `--canvas` | `#F4F8FB` |
| Superficie | `--surface` | `#FFFFFF` |
| Tinta | `--ink` | `#0B2239` |
| Texto secundario | `--muted` | `#52677A` |
| Acento | `--accent` | `#5BC0E6` |
| Acento oscuro | `--accent-strong` | `#067392` |
| Borde | `--line` | `#D8E4EC` |
| Éxito semántico | `--success` | `#187A57` |
| Atención semántica | `--warning` | `#9A5B00` |
| Error semántico | `--danger` | `#B42318` |

Usar estados semánticos solo cuando comuniquen estado real. El celeste es el único acento de marca.

## Tipografía y espacio

- Familia: Geist Sans; Geist Mono solo para identificadores y cifras.
- Escala: 14, 16, 20, 28, 44 y 64 px con `clamp()` en títulos.
- Ancho de lectura: 62 caracteres.
- Escala espacial: 4, 8, 12, 16, 24, 32, 48, 72.
- Títulos de hero: máximo tres líneas en móvil y dos en escritorio.

## Forma

- Superficies: radio de 18 px.
- Controles: radio de 10 px.
- Estados: radio completo.
- Sombras: una sola sombra azul muy suave; usar bordes antes que elevación.

## Patrones

### Página pública

- Cabecera de una línea con aviso conceptual visible.
- Hero asimétrico: promesa a la izquierda y una vista real del flujo a la derecha.
- Dos acciones como máximo; una primaria.
- Explicar el recorrido con pasos numerados, no con tres tarjetas genéricas.

### Formulario

- Progreso explícito con nombre del paso.
- Una pregunta compleja por bloque.
- Ayuda contextual debajo del campo.
- Resumen antes de enviar y confirmación con identificador ficticio.

### Panel

- Priorizar cola de trabajo, estado, documentación y puntaje.
- Tabla en escritorio; lista semántica en móvil.
- Mostrar por qué existe un puntaje y nunca decidir automáticamente.
- Mantener una acción siguiente clara para cada solicitud.

## Accesibilidad

- Contraste WCAG AA mínimo.
- Foco de 3 px visible y separado del borde.
- Área interactiva mínima de 44 por 44 px.
- No depender solo del color.
- Respetar `prefers-reduced-motion` y `prefers-contrast`.
- Usar lenguaje simple, etiquetas persistentes y errores asociados al campo.

## Límites de marca y privacidad

- No descargar ni incorporar logos, firmas, fotos o tipografías propietarias.
- No insinuar aprobación oficial.
- No usar datos personales reales; los fixtures deben indicar que son ficticios.
- No incluir diagnósticos médicos ni información individual de menores.
