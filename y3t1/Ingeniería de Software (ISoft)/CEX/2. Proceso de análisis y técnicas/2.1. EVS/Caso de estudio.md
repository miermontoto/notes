## EVS1 - Objetivos, alcance, primeros requisitos
**Objetivo general del cliente:** construcción de software para la gestión del ciclo completo (inscripción, pago, cronometraje, resultados) relativo al control de participantes en carreras populares y trail.

**Carrera:**
- Competición de carrera a pie con participantes no profesionales que puede ser por asfalto o montaña.
- Organizadas por: clubes, federaciones, entidades...
- Abiertas a cualquier participante (>= 16 años).
- Diferentes tipos y distancias.
- Los participantes abonan una cuota de inscripción.

## EVS2 - Situación actual, sistema actual, información manejada, partes interesadas
Varios pasos.

### Análisis parcial
Se incluyen actores, procesos e información inicial.

### Análisis completo
Visión completa del sistema actual, con comentarios.
Actores para todos los procesos, cómo se obtienen y se utilizan los datos...

### Clasificación general
Orientación a bases de datos.

### Análisis de stakeholders
- Atleta
- Club de atletismo
- Entidad bancaria
- Sistema cronometraje
- Organización

### Diagnóstico final
- Facilitar el proceso de inscripción a los participantes a diferentes competiciones.
- Mantenimiento actualizado del registro de inscripciones.
- Mejora del proceso de pago y control de inscripción tanto para el participantes como el organizador.
- Integración de sistemas automáticos de cronometraje que faciliten la toma y el registro de tiempos.
- Generación de clasificaciones de forma rápida y exacta que eviten posteriores reclamaciones.

## EVS3 - Requisitos
- Principales procesos identificados (inicial)
- Análisis de los requisitos para completarlos, deshecharlos, y expandirlos.
- Requisitos funcionales
- Requisitos no funcionales
	Cómo el sistema va a ejecutar una función:
	- Rendimiento
	- Volúmen
	- Frecuencia
	- Seguridad
	- etc...

Un buen catálogo de requisitos tiene todos los requisitos identificados únicamente.

## EVS 4, 5, 6
### Descripción / valoración de alternativas
- Sistemas similares
	- Posibilidad de integración de nuevas funcionalidades.
	- Cuántos requisitos cubren las alternativas.
- Posibilidad de contratación de servicios
	- Cronometraje, estudiar integración y coste
	- Pagos, estudiar integración y coste
		- Transferencia bancaria
		- Pasarela bancaria
		- Otros medios (PayPal, ...)

### Descripción de la solución
- Desarrollo completo para inscripciones individuales y clubes
- Integración con
	- cronometraje, chip de registro de tiempos
	- Banco para pagos
- Implantación incremental
	- Fase 1. Inscripciones y pagos
	- Fase 2. Cronometraje y resultados
	- Fase 3. Geolocalización (en el futuro)
