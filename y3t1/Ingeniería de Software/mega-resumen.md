# Apartados
## Intro
1. Análisis
2. Diseño
3. Codificación
4. Prueba
5. Mantenimiento

<b><u>Resumen</u></b>
**El software es un producto de Ingeniería. Debe construirse como tal.**
- Hay particularidades que hacen más difícil el proceso
- Suele infravalorarse la dificultad del proceso.
- Debe responder a las necesidades del cliente.
- Es muy importante entender el problema, comunicarse e involucrar al usuario.


## Métrica
### EVS
**Objetivo:** Analizar las necesidades del cliente/usuario (requisitos) para proponer una solución a corto plazo.
**Resultados:** definición/abandono de uno o más proyectos.

#### EVS1: Establecimiento del alcance
Comprender qué desea el cliente/usuario.

- Estudio de la solicitud.
- Identificación del alcance del SI actual y de EVS.
- Objetivos, primeros requisitos, restricciones.
- Sesiones de trabajo, entrevistas y actos.

#### EVS2: Estudio de la situación actual

#### EVS3: Definición de requisitos

#### EVS4: Estudio de alternativas

#### EVS5: Valoración de alternativas

#### EVS6: Selección de la solución

<b><u>Resumen</u></b>
- Delimitar lo que se precisa, plantear una solución.
- Imprescindible el díalogo con el usuario y conocer el funcionamiento actual del SI.
- El EVS decide lo que se contrata.
- Siempre hay alternativas técnicas y razonables. Evaluar cada una.

### ASI
**Objetivo:** Obtención de una especificación detallada del SI a través de un catálogo de requisitos y modelos del sistema.
**Resultados:** especificación de requisitos de software.
- Producto para la aprobación formal por parte del usuario de las especificaciones del sistema.
- Base para las peticiones de cambio de los requisitos inicialmente planteados.
**Importante:** Participación del cliente/usuario utilizando técnicas "interactivas".

#### ASI1: Definición del sistema
Efectuar una descripción del sistema, delimitando su alcance, interfaces con otros sistemas e identificando a los usuarios.

#### ASI2: Establecimiento de requisitos
##### ASI 2.1 Y 2.2: Obtención de requisitos
1. Identificar casos de uso
2. Definir objetivos de los casos de uso.
3. Identificar actores que participan en los casos de uso.
4. Diagrama de los casos de uso
5. Descripción de los CU (flujo principal)

##### ASI 2.3 Y 2.4: Análisis de requisitos
- Detectar inconsistencias, ambigüedades, duplicidad, escasez de info.
- Interacciones con otros sistemas.
- Contemplar cómo se debe responder en casos excepcionales (flujos alternativos).

#### ASI3: Identificación de subsistemas

#### ASI4: Análisis de los casos de uso
Identificar las clases cuyos objetos se necesitan para realizar un CU y describir su comportamiento mediante su interacción (se hace para cada uno)

→ modelo de dominio + modelo DTE

#### ASI5: Análisis de clases
Técnicas:
- Diagramas de paquetes
- Diagramas de interacción
- Diagramas de clases

#### ASI8: Definición de UI
Prototipos:
- Se parte de los flujos.
- Attención a los diálogos muy utilizados.
- Descripción y diccionario de datos facilita la tarea.

### ASI9: Análisis de consistencia y especificación de requisitos
**ASI9.1:** Verificación de los modelos
**ASI9.2:** Análisis de consistencia
**ASI9.3:** Valoración del modelo

<b><u>Resumen</u></b>
- Modelo funcional → CU
- Modelo de dominio → BBDD
- Modelo interacción con el usuario → prototipos de pantallas

- Todos los modelos debe representar al sistema.
- Análisis final:
	- ¿Se completa la especificación?
	- ¿Son consistentes los modelos?

### DSI
**Objetivos:**
- La arquitectura del software.
- El detalle de los subsistemas.
- Las estructuras de datos necesarias.

**Se parte de:**
- Los requisitos.
- Los modelos de análisis (funcional y de datos)
- Los diálogos y prototipos.

#### DSI1: Definición de la arquitectura del sistema (particionado físico → nodos, comms)

#### DSI2: Diseño de la arquitectura de soporte

#### DSI3: Diseño de casos de uso reales
- Identificación de las clases que intervienen en los CU.
- Detallar los CU teniendo en cuenta el entorno tecnológico.
- Detallar interacciones entres subsistemas (diagramas de interacción)

#### DSI4: Diseño de clases
- Atributos y operaciones necesarios para cada clase.
- Identificación de clases que completan el modelo del ASI 9.3

#### DSI5: Diseño físico de BBDD

#### DSI7: Verificación y aceptación de la arquitectura

#### DSI8: Generación de especificaciones de construcción
Definir detalladamente el entorno de desarrollo.

#### DSI9: Carga inicial de datos (si necesario)

#### DSI10: Especificación de la técnica del plan de pruebas

#### DSI11: Determinación de requerimientos para la construcción

### CSI
**Objetivos:**
- Generar el código de los componentes.
- Ejecutar las pruebas.
- Elaborar los procedimientos de operación y documentación.

**Se parte de:**
- Especificaciones de Construcción (DSI8)
- Diseño de módulos y datos.
- Plan de pruebas (DSI10)

## Ágiles


# Diccionario
## Arquitectura
La estructura interna del sistema.

Es necesario descubrir:
- Implementación de los datos
- Implementación del comportamiento
- Implementación del interfaz

Tipos:
- General: capas, repositorio compartido
- Distribuidos: cliente-servidor
- Interactivos
- Adaptable
- Otros

## Pruebas
**Objetivo:** detectar defectos no identificados en el código para mejorar la calidad del software, dentro de los límites de tiempo y dinero.

Características de calidad: funcionalidad, fiabilidad, usabilidad, eficiencia, mantenibilidad, portabilidad.

Pruebas unitarias → Pruebas de integración → Pruebas de validación → Pruebas de aceptación → Pruebas de instalación

**Modelo en V:** usado para regular el proceso del desarrollo del software para minimizar los riesgos del proyecto y garantizar la calidad.

**Técnica de prueba** es el procedimiento por el que se decide qué casos de prueba se deben ejecutar sobre el software para maximizar la posibilidad de encontrar fallos.
1. Desarrollo
2. Diseño de pruebas
3. Ejecución de pruebas
4. Comunicación de fallos
5. Detección y corrección de defectos
Al paso del estado 5 al 3 se le denomina "pruebas de regresión", donde se vuelve a probar un componente que se ha modificado para observar si se ha introducido o arreglado algún fallo.

## Requisitos
Un requisito determina una funcionalidad (incluyendo restricciones sobre la misma) del sistema.

### Tipos
- **Requisitos de usuario:** declaraciones en lenguaje natural que explican las restricciones bajo las que se debe operar el software.
- **Requisitos de sistema:** documento estructurado que determina las descripciones detalladas d elos servicios de sistema en forma de contrato.

- **Requisitos funcionales:** servicios que el sistema debe proporcionar.
- **Requisitos no funcionales:** restricciones que afectan a los servicios o funciones de sistema.

## Genéricos
**Software:** toda secuencia de instrucciones destinadas a ser utilizadas, directa o indirectamente en un sistema informático para realizar una función, tarea u obtención de resultados.
**Ingeniería del software:** es la aplicación sistemática de conocimientos científicos y tecnológicos para crear métodos y experiencias para el diseño de un software y que responda a las necesidades del cliente (pruebas y doc). Aplicación de un enfoque sistemático y cuantificado del desarrollo y operaciones de mantenimiento.

**Metodología:** conjunto de prácticas, técnicas, procedimientos y reglas usadas por quienes trabajan en una determinada disciplina.
**Proceso:** conjunto de actividades y productos obtenidos durante el desarrollo de un SI.
**Técnica:** procedimiento sistemático para un recurso humano con el objetivo de producir un resultado.
**Método:** enfoque determinado para un problema en específico.


