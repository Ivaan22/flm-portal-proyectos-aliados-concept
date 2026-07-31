# Modelo de datos preliminar

| Entidad | Campos clave |
| --- | --- |
| `Organization` | id, nombre legal, país, contacto, estado de verificación |
| `User` | id, organización, rol, estado, último acceso |
| `ProjectProposal` | id, organización, área, resumen, ubicación, alcance, presupuesto, estado |
| `Document` | id, propuesta, tipo, versión, estado, almacenamiento, revisión |
| `InformationRequest` | id, propuesta, mensaje, responsable, vencimiento, respuesta |
| `Evaluation` | id, propuesta, evaluador, puntajes, fundamento, recomendación |
| `Decision` | id, propuesta, resultado, fundamento, aprobador, fecha |
| `AuditEvent` | id, actor, acción, entidad, fecha, metadatos mínimos |

## Relaciones

- Una organización tiene usuarios y propuestas.
- Una propuesta tiene documentos, solicitudes y evaluaciones.
- Una propuesta puede tener una decisión final.
- Toda mutación sensible genera un evento de auditoría.

El modelo evita datos individuales de beneficiarios; solo almacena cifras agregadas.
