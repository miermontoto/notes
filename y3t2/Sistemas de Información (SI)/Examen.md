# Tema 1: Scrum
## Definiciones
- **Sprints**
	- No más de 4 semanas.
	- Implementar requisitos acordados para este periodo.
	- El producto debe poder ser entregado al cliente.
- **Backlog**
	- Relación con usuarios a través del PO.
	- *Elaboración de requisitos a través del backlog*
		- Necesidades del PO
		- Requisitos cambian de prioridad
		- Las características comienzan en el PB.
		- En cada sprint, se escogen las características más prioritarias para el SB.
- **Historias de usuario:** descripciones claras de la funcionalidad en términos del valor que aporta al usuario final del producto.
	- Características independientes, criterios suficientes para implementar.
	- Pequeñas, se pueden estimar y probar.
	- *Tipos:* epic, técnicas.
- **Proceso**
	- Evolución contínua del PB.
	- Sprints
- **Objetivos**
	- *MVP:* obtener lo antes posible el mínimo producto viable.
	- *ÁGIL:* responder a los cambios e imprevistos.
	- *VALOR:* en caso de problemas, siempre disponer de funcionalidad.
	- *LEAN:* evitar el desperdicio que no aporte valor.

## Reuniones
### Comienzo del sprint
#### Reunión 1 (medio día)
- Definir <u>qué</u> se va a hacer, qué quiere el DP
- PO + equipo discuten PB.
- Scrum Master presta asistencia
- Compromiso de lo que se realizará en el sprint
	- PO decide las prioridades
	- Equipo decide el esfuerzo

#### Reunión 2 (medio día)
- Definir <u>cómo</u> se va a hacer.
- Selección de elementos para el SB.
- Refinamiento y planificación detallada de tareas.
- PO no asiste, pero debe estar disponible en caso de negociación de esfuerzo.

### Durante el sprint: scrum diario
- **Stand-up meeting**
- Cada miembro informa de qué ha hecho, qué tiene planificado e impedimentos.
- No hay discusiones
- Solo el equipo

#### Backlog grooming
- Facilita la planficación de sprints futuros.
- Típicamente el 5-10% del sprint, normalmente cerca del final (aunque también puede ser semanal)

### Al final del sprint
#### 1. Sprint Review
- Demo y conversación en profundidad del PO + equipo.
- Obtener feedbback, inspeccionar el producto.

#### 2. Retrospective
- NO hace falta PO.
- Inspeccionar y adaptar el proceso.
- Cosas a mejorar, cosas a evitar (estrella de mar)

##### Otras
- Actualización del PB.
- Burndown Chart

# Tema 2: Requisitos
**Concepto:** definen las <u>capacidades</u>, <u>características</u> y <u>restricciones</u> del software a desarrollar.

- **Características**
	- *Identificables* (numeración y jerarquía)
	- *Singulares* (solo una idea)
	- *Inequívocos* (sin ambigüedades)
	- *Verificables* (mediante pruebas)
	- *Trazables* (RS respecto a RU)

![[_resources/Pasted image 20230515194948.png]]

- Fundamental definir stakeholders a la hora de definir requisitos.
- Siempre existen alternativas a valorar.

# Tema 3
## Pruebas
### Caso de prueba
Conjunto de entradas, condiciones de ejecución y resultados esperados desarrollados para un objetivo particular.

- **Condición de entrada**
- **Clases de equivalencia:** conjunto de datos para los que se supone que el programa tiene un comportamiento similar.

## Calidad, revisiones, configuración
### Calidad
Grado en el que el programa desarrollado cumple con los requisitos especificados y con las expectativas del cliente.

La calidad tiene un coste, hay que buscar la optimización del mismo.

### Revisiones
- **Formales:** inspecciones realizadas por un equipo de inspectores que representan distintas perspectivas.
	- Analista que ha elaborado los requisitos (autor)
	- Usuario/Cliente
	- Personal de diseño/código
- **Informales**
	- *Walk-through*
	- *Peer review*
	- *Revisión técnica*

#### Roles y participantes
- Director - Responsable - Jefe
- Moderador
- Autor
- Revisor
- Secretario 