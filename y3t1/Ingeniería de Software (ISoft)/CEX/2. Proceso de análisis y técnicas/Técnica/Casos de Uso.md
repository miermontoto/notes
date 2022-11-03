# Casos de Uso
![[../2.1. EVS/_resources/ISOF - 2 - Tecnica - CUs.pdf]]

---

# Introducción
La técnica de casos de uso permite hacer un modelo del comportamiento desde el punto de vista del usuario.
Determinan los requisitos funcionales, lo que hace el software.

# Casos de Uso
Secuencia de acciones que describen una tarea que realiza uno o varios actores dentro del sistema.
>[!WARNING] Importante
> No se incluyen procesos relativos a aspectos no funcionales, consultas no relevantes, mantenimiento de maestros...

Deben especificarse textualmente mediante uno o varios flujos:
- Flujo principal
- Flujos alternativos

## Flujos

**Caso de uso:** título.

**Objetivo:** acción del caso de uso.

**Flujo (primer borrador):**
1. Paso uno.
2. Paso dos.
3. Paso tres.
	1. Condición uno.
	2. Condición dos.

*Excepciones:* excepciones.

### Requisitos
- Las acciones deben de ser sencillas.
- Las acciones representan:
	- Algo que hace un actor.
	- Algo que hace el sistema.
- Analizar el orden en que se ejecutan las acciones, numerarlas.
- Los flujos deben ser completos: indicar todas las acciones necesarias para llevar a cabo el caso de uso.
- Centrarse en lo esencial, evitar referencias a diseño detallado de pantallas.

### Extra
- Flujo principal y flujos alternativos
	- Especificar en el flujo principal lo que sucederá normalmente al ejecutar el caso de uso.
	- En flujos alternativos: variantes o tratamientos excepcionales.
- Especificar claramente los flujos
	- Al finalizar un flujo alternativo, el caso de uso puede volver al flujo principal o puede terminar, indicarlo.
	- Especificar en qué momentos el usuario puede cancelar un caso de uso. Algunas cancelaciones requerirán la ejecución de acciones compensatorias.
- Si es necesario, indicar precondiciones y postcondiciones.

## Actores
Representan a las partes que interactúan con el sistema o un tipo de usuario del sistema.

- No siempre son humanos.
- Clasificación
	- Iniciador
	- Participante
- La misma entidad puede interpretar varios papeles como actores distintos.

## Relaciones
Asociación entre caso de uso y actores.

- El actor interactúa con el sistema para llevar a cabo el caso de uso.
- Se representan por una línea no dirigida y sin etiqueta.

# Concluisiones
- Técnica para modelar funcionalmente el sistema.
- Modelar lo esencial, independientemente de la implementación.
- <mark style="background: #FFF3A3A6;">Las descripciones de los casos de uso es lo fundamental.</mark>
- Completar con prototipos, revisar con stakeholders y contrastar con requisitos de usuario.