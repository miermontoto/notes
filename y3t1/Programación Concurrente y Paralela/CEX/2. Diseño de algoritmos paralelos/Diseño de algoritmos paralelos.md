MDI-X → Medium-dependent interface crossover.

Existen tres tipos prin
# Estrategias
- **Grafos de dependencias:** descomposición, análisis, optimización, asignación, ...
- **Esquemas algorítmicos**
	- Un esquema se puede aplicar a varios problemas y un problema puede requerir varios esquemas.
		- Árboles y grafos
		- Programación dinámica, ramificación y poda, ...
		- Algoritmos de relajación y Maestro-Esclavo (asíncronos).
		- Paralelismo segmentado (pipelining) y síncrono (sistólicos).
		- Granja de Procesos, <mark style="background: #FFB86CA6;">!</mark>

## Grafos de dependencias
Abstracción que expresa dependencia entre las tareas y su orden relativo de ejecución.

### Dependencias
Se puede conocer analizando los datos de entrada/salida.

### Características
- Grafo dirigido acíclico.
- Las tareas son círculos.
- Las aristas son comunicaciones.
- El valor de las tareas es su peso.

### Definiciones
- **Longitud de un camino** suma de los costes asociados a los nodos que lo componen.
- **Camino crítico** camino más costoso entre cualquier nodo inicial y cualquiera final.
- **Grafo medio de concurrencia** número medio de tareas que se pueden ejecutar en paralelo.
- **Máximo grado de concurrencia** número máximo de tareas cuya ejecución se puede realizar simultáneamente.


#### <mark style="background: #BBFABBA6;">Ejemplo</mark>

![[_resources/Diseño de algoritmos paralelos 2022-09-22 12.14.06.excalidraw]]

![[_resources/Diseño de algoritmos paralelos 2022-09-22 12.28.28.excalidraw]]

## Pipeline
Conjunto ordenado de segmentos tales que la salida de uno es la entrada del siguiente.

- Pueden ejecutarse simultáneamente varios segmentos si la salida de unos es irrelevante para la entrada de los otros.
- Útil cuando se puede ejecutar más de una instancia, cuando una serie de datos debe ser tratada con múltiples operaciones o cuando la información para el skguiente proceso está disponible antes de que la necesite.
- <mark style="background: #FFF3A3A6;">Importante: equidad en la granularidad de los segmentos.</mark>

#### <mark style="background: #BBFABBA6;">Ejemplo: resolver un sistema triangular con pipeline</mark>
![[_resources/Diseño de algoritmos paralelos 2022-09-22 12.36.22.excalidraw|600]]

## Enfoque metodológico
![[_resources/Pasted image 20220922124639.png|1050]]

### (1) Descomposición
Descomponer el problema original en el mayor número de subproblemas posibles.
Flexibilidad, considerar un computador ideal, sin limitaciones.

#### Interesa
- Obtener conjuntos disjuntos de computaciones y datos.
- Que el número de tareas escale con el tamaño del problema.
- Que el peso de las tareas sea similar y que compartan pocos datos.

#### Tipos
- **Generales:** dominio, funcional y recursiva.
- **Específicos:** explorativa, especulativa, ...
- **Mixtos:** combinación de los anteriores.

#### Descomposición del dominio
Fijarse en los datos del dominio, no en el cálculo.
![[_resources/Pasted image 20220922125731.png|1100]]

#### Descomposición Funcional
Lo contrario a [[#Descomposición del dominio]].

### (2) Comunicar
Las tareas creadas se pueden ejecutar concurrentemente, pero no de forma independiente.

Las comunicaciones, cuando es funcional, hay muchos nodos y pocas flechas.
Las comunicaciones, en el dominio, es justo lo contrario.

#### Tipos de comunicaciones
- **Locales:** cada tarea solo necesita interactuar con un conjunto pequeño de tareas vecinas. Sencillez en su definición:
	- Definir las aristas en la estructura de comunicación.
	- Definir las operaciones de envío/recepción o de sincronización (mem. compartida).
- **Globales:** múltiples tareas deben aportar datos para realizar un cálculo en paralrlo.

- **Estáticas:** para cada tarea son conocidas las tareas con las que se puede comunicar.
- **Dinámicas:** lo contrario.

> [!WARNING] No muy relevante
> No parece ser muy relevante para el examen, más allá de las locales. ("para nosotros son todas lo mismo")

#### <mark style="background: #BBFABBA6;">Ejemplo Comunicaciones Locales</mark>
![[_resources/Diseño de algoritmos paralelos 2022-09-27 09.27.36.excalidraw]]

#### <mark style="background: #BBFABBA6;">Ejemplo de problema de frente de onda</mark>
![[_resources/Pasted image 20220927094528.png|1000]]
| ![[_resources/Pasted image 20220927094636.png|700]] | ![[_resources/Pasted image 20220927094649.png|700]] | ![[_resources/Pasted image 20220927095003.png|700]] | ![[_resources/Pasted image 20220927095030.png|700]] |


#### <mark style="background: #BBFABBA6;">Ejemplo Globales</mark>
| ![[_resources/Pasted image 20220927095521.png|700]] | ![[_resources/Pasted image 20220927095547.png|700]] |


### (3) Agrupar
- Las prestaciones se degradan por dependencias, alto porcentaje de tiempo secuencial, comunucaciones, mala distribución de la carga...
- Aumenta la ganularidad de las tareas puede mejorar la eficiencia de los algoritmos paralelos.
- **Objetivo:** reducir costes, minimizar comunicaciones.

#### Qué maximizar / Qué minimizar
- Maximizar el tiempo de computación, la concurrencia.
- Minimizar el teimpo de comunicación.
- Minimizar el tiempo de ocio.

#### Estrategias
- **Minimizar volumen de datos transferidos**
- **Reducir la frecuencia de interacciones**

#### El problema al agrupar
- ¿Cómo mantener la flexibilidad respecto a la escalabilidad?
- ¿Cómo reducir el número de tareas (aumentar granularidad) reduciendo el coste de las comunicaciones?
- ¿Qué tareas a qué procesos?
- ¿Qué orden de ejecución de las tareas?
- ...

#### Algunas estrategias
- Relación superficie/volumen
- Replicación de datos / computación y comunicaciones.
- Tratamiento de tareas no concurrentes.
- Empezar por el grafo de dependencias.
- El análisis de la eficiencia de los algoritmos es una buena herramienta.

##### Relación superficie/volumen
El número de comunicaciones que requiere cada tarea es proporcional a la superficie de su dominio. La computación es proporcional al volumen de su dominio.
**Objetivo:** poca superficie y mucho volumen.

##### Replicar
- Datos en paso de mensajes
- Computación y/o comunicaciones

#### Agrupar: tareas no concurrentes y comunicaciones
- Agrupar tareas que no se pueden ejecutar concurrentemente disminuye el número de comunicaciones sin degradar el nivel de paralelismo.
- <mark style="background: #FFB86CA6;">!!!!</mark>

### (4) Asignar
Determinar dónde y en qué orden se debe ejecutar.
- En diseño: asignar o planificar tareas en procesos.
- En ejecución: asignar procesos a procesadores.

**Objetivo:** reducir el tiempo de ejecución.

> [!FAQ] Sobre el examen
> Este punto solo entra de manera teórica.

#### Estrategias Generales de Asignación
##### Asignación estática o planificación determinista
- Las decisiones de asignación se toman antes de la ejecución.
- Sencillo de usar y no añade sobrecarga.

##### Asignación dinámica
- Se realiza en tiempo de ejecución, de forma centralizada o distribuida.
- Sobrecarga debida a las transferencias entre los procesos por la toma de decisiones en tiempo de ejecución.
- Ventaja: son flexibles y aptos para arquitecturas homogéneas al no ser necesario conocer el comportamiento a priori.


