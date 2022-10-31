![[_resources/ISOF - 3 - Diseño.pdf]]

---


## Objetivos del proceso
- La arquitectura del sistema.
- El detalle de los subsistemas.
- Las estructuras de datos necesarias.


## Relación con otros procesos
Para conseguir esos objetivos, se debe de partir de:
- Los requisitos
- Los modelos del análisis (funcional y de datos)
- Los diálogos y prototipos
Se debe conseguir que los productos obtenidos puedan utilizarse en la fase posterior de construcción del sistema (codificar).


## Fundamentos de diseño
- Debe estudiarse el entorno tecnológico.
- Debe dividirse el sistema en partes.
- Debe detallarse la forma de cada parte.
	- Que los módulos finales sean suficientemente pequeños.
	- Que las partes sean independientes.
	- Que la especificación de las interfaces entre las partes del diseño sea completa.
	- Que sean mantenibles, entendibles, testeables y optimizadas.
- Deben deocumentarse las estructuras de datos necesarias y el acceso a las mismas debe optimizarse.

## Actividades
![[_resources/Pasted image 20221031122235.png]]

- **DSI1: Definfición de la arquitectura del sistema**
	- Particionar el sistema desde el punto de vista físico.
		- Qué nodos se usarán.
		- Qué comunicaciones deben establecerse entre los nodos.
	- Asignar subsistemas a nodos.
- **DSI2: Diseño de la arquitectura de soporte**
	- Diseñar los subsistemas de soporte.
	- Identificar mecanismos genéricos de diseño (ejemplo: validaciones mediante controles)
- **DSI3: Diseño de casos de uso reales**
	- Identificación de las clases que intervienen en los casos de uso.
	- Partiendo de los escenarios del ASI, detallarlos teniendo en cuenta el entorno tecnológico.
	- Detallar las interacciones entre subsistemas de diseño a través de diagramas de interacción.
- **DSI4: Diseño de clases**
	- Identificación de las clases que completan el modelo de clases obtenido en ASI 9.3
	- Conocido el entorno de desarrollo, se incorporan los atributos necesarios y las operaciones que den cobertura a las necesidades de cada clase.
- **DSI6: Diseño físico de datos (BD)**
	- Desarrollo de las bases de datos, conversión clases a tablas, incorporación de claves en la base de datos.
- **DSI7: Verificación y aceptación de la arquitectura**
	- Asegurar la calidad del diseño comprobando las normas, estándares y técnicas.
	- Asgurar consistencia.
	- Obtener aprobación de la empresa.
- **DSI8: Generación de especificaciones de construcción**
	- Definir detalladamente el entorno (hw, sw, comms, restricciones, tools, security...)
	- Para cada componente, especificación
	- Elaboración de especificaciones en lenguaje de la base de datos.
- **DSI9: Diseño de migración y carga inicial de datos**
	- Solo cuando es necesaria una carga inicial de datos o la migración de los existentes.
	- Se define el entorno tecnológico propio del proceso de migración y carga.
- **DSI10: Especificación de la técnica del plan de pruebas**
	- Se detalla el entorno necesario para la realización de las pruebas del sistema.
- **DSI11: Establecimiento de requisitos de implantación**
	- Información necesaria para la documentación del usuario (incl. soporte, estructura, formatos...)
	- Determinación de conocimiento y aptitudes.
	- Determinación del equipamiento necesario para la instalación.

