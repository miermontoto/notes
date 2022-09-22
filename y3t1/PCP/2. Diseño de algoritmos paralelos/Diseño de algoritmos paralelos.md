# Fundamentos del Diseño de Algoritmos
**Paralelizar.** Dividir el problema en subproblemas susceptibles de resolverse a la vez (concurrente).

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
![[Diseño de algoritmos paralelos]]