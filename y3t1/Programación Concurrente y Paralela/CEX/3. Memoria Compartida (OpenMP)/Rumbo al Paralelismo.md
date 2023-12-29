![[_resources/Modelos Memoria Compartida_OpenMP.pdf]]

---

# Modelos para Memoria Compartida
**Paralelismo de Datos:** tener muchas tareas en número sobre una estructura muy sencilla.
**Paralelismo de Tareas:** pocas divisiones del problema, cada una de ellas con mucha computación.

### fork/join

### Hilos: retos
- *Race Condition:* el orden de acceso de los hilos no es siempre el mismo, por lo que el resultado final varía y es incorrecto.
- Exclusión mútua
	- Operaciones atómicas
- Sección crítica
	- Deadlocks
- Sincronización

## Detalles de Arquitectura relevantes: la memoria y su acceso
1. **Jerarquías de Memoria**
2. **Arquitectura de Memoria**
	- **UMA (*Uniform Memory Access*):** el tiempo de acceso a memoria es constante.
	- **NUMA (*Non-Uniform Memory Access*):** el tiempo de acceso a los datos depende de dónde estén almacenados.
3. **Coherencia y Consistencia de la Información (CC):** un espacio accesibles por varios hilos o procesos concurrentes es una fuente de problemas, que depende del hw/sw y del programador de resolver.
4. **Contención:** se accede a datos comunes o datos que están en el mismo bloque de memoria. Si son lecturas, puede no haber problemas.
5. **False Sharing:** en sistemas con CC, si un hilo modifica un dato que está en el mismo bloque de caché con datos necesarios para otros hilos, para mantener la coherencia se invalida todo el bloque.

# OpenMP
## Modelos de ejecución de OpenMP
- OpenMP no destruye los hilos inactivos, los deja en estado de espera para ser reutilizados en la siguiente región paralela.
- Los hilos creados por una directiva forman un equipo (*team*).
- Memoria compartida con ***relaxed-consistency:*** la visión temporal de la información que tienen los hilos puede no ser consistente con la información almacenada en memoria.
- La programación se basa en el uso de directivas (`#pragma`), en el uso de la API (`funciones`) y en el uso de variables de entorno.
	- Facilita la migración.
	- Permite la paralelización incremental.
	- Tanto para paralelismo de grano fino como grueso.
	- Permite optimizaciones provenientes del compilador.

## Recursos de programación

### Variables de entorno
- **OMP_NUM_THREADS** fija el número de hilos para regiones paralelas.
- **OMP_NESTED** determina el paralelismo anidado.

### Directivas
Órdenes para el compilador.
`#pragma omp <directiva> [ckausula [...]]`

### Compilación condicionada
```c
#ifdef_OPENMP
...
#endif
```

### Funciones
`#include <omp.h>`

- int **omp_get_dynamic**(void): devuelve 0 si no está activado el ajuste dinámico de hilos.
	- void **omp_set_dynamic**(int)
- int **omp_get_nested**(void): devuelve 0 si no está activado el paralelismo anidado.
	- void **omp_set_nested**(int)
- int **omp_in_parallel**(void): devuelve 0 si es llamada fuera de una región paralela.
- int **omp_get_num_procs**(void)
- int **omp_get_max_threads**(void)
- int **omp_get_num_threads**(void)
	- void **omp_set_num_threads**(void)
- int **omp_get_thread_num**(void)

### Constructor Parallel
```c
#pragma omp parallel [cláusulas]
{
	// código
}
```

- La tarea del hilo maestro de la región secuencial que ejecuta la directiva es crear un grupo de hilos (*team*).
- Durante la directiva, el número de hilos en el *team* no cambia.
- El hilo maestro es el *0*. El resto de hilos se numeran de 1 a n-1.
- Creadao el *team*, el hilo maestro crea implícitamente tantas tareas como hilos tenga el equipo.
- A cada tarea se le asigna una fracción del código.
- Cada tarea es asignada a un hilo diferente del team en modo "**tied**".
- Suspende la ejecución de la tarea creadora y cada hilo inicia la ejecución de su tarea.
- No hay sincronismo implícito del los hilos dentro de la región.
- Hay sincronismo implícito de salida. El maestro continúa y el resto se destruyen o se dejan inactivos.
- Los hilos pueden ejecutar diferentes sentencias mediante comprobaciones lógicas.

## Worksharing Constructs (WC)
### Propiedades
- Un WC es un constructor de trabajo compartido.
- No hay sincronismo de entrada pero sí de salida, salvo uso de `nowait`.
- Los WC no implican ejecución paralela.

### Tipos
De bucles, de secciones y single.

### Cláusulas
- `private`, `firstprivate`, `reduction`, `shared`, `nowait`.
- `lastprivte(lista)`: el valor final de las variables de la lista es el que tendrían al final de la ejecución del secuencial equivalente.
- `ordered`: ordena secuencialmente las iteraciones entre los hilos.
- `collapse(valor)`: número de bucles léxicamente consecutivos que serán asociados al WC.
- `schedule(tipo, [chunk_size])`: controla cómo se distribuye el trabajo entre los hilos.
	- Tipo ***static***
		- Por defecto. Antes de iniciar la ejecución divide el trabajo en un número de bloques.
	- Tipo ***dynamic***
		- Cada hilo recibe un bloque y, al terminar, solicita más.
		- Más sobrecarga pero mejor balanceo.
	- Tipo ***guided***
		- Como *dynamic*, pero el tamaño va decreciendo exponencialmente, proporcional a la carga de trabajo que falte por realizar y al número de hilos, desde un valor inicial hasta un final.
	- Tipo ***runtime***
		- Se decide en tiempo de ejecución, en función de la variable de entorno `OMP_SCHEDULE`.
	- Tipo ***auto***

### WC FOR
```c
#pragma omp for [cláusulas]
	for loop
```
- Útil en descomposiciones de datos "regulares": paralelismo de datos.
- No implica ejecución paralela, simplemente la ejecución de las iteraciones por los hilos del equipo (team).
- Por defecto, la variable de control ecs privada.
- Si se usa `collapse(n)`, los espacios de iteración de los *n* primeros *for* se fusionarán en uno mayor.

`schedule([modificador [, modificador]: ] ...)
**modificador** puede ser *monotonic*, *nonmonotonic* o *simd*.

`linear(list [: step list])

### WC SECTIONS
```c
#pragma omp sections [cláusulas]
{
	[#pragma omp section]
		structured block
	#pragma omp section
		structured block
	...
}
```
- Útil en descomposiciones funcionales: constructor no iterativo.
- Si el número de hilos es menor alguno ejecutará varias seciones. Si es mayor, algunos no ejecutarán nada.
- La política de asignación de las secciones a los hilos depende de la implementación. Sincronismo implícito al final salvo que se use `nowait`.
- Todos los *structured block* deben ir precedidos por la directiva *section* excepto el primero, que es opcional.

### WC SINGLE
```c
#pragma omp single [cláusulas]
	structured block
```
Garantiza que solo el hilo que alcance el constructor ejecute el código.


## Combined Constructors (CC)
Combinan constructores de paralelismo con otro tipo de constructores (WC, SIMD, TASK, ...)

Las cláusulas admisibles para cada CC serán las de los mecanismos representados.

### CSIMD
*No vectoriza si no se usa junto a `inline`.*


### CTASK
Útil para paralelismo no estructurado (ej: bucles con condición de parada dependiente de los datos, tamaños no conocidos inicialmente, ...)

**Definiciones previas**
- <u>Explicit task</u>, tarea generada por el constructor *task*.
- <u>Implicit task</u>, tarea gneerada por el constructor parallel, regiones de paralelismo implícito.
- <u>Tied task</u>, tarea cuya ejecución (suspendida previamente) solo puede ser reanudada por el hilo que suspendió su ejecución. Por defecto.
- <u>Untied task</u>, cualquier hilo puede reaundar la tarea.
- <u>Undeferred task</u>, tarea que suspende su ejecución para crear y ejecutar una nueva. Reanuda su ejecución cuando termine la nueva.
- <u>Included task</u>, lo mismo que undeferred, ejecución inmediata por el hilo.

**Filosofía**
- Los *Task Scheduling Points (TSP)*  permiten reanudar y suspender la ejecución de tareas. Son "barreras".
	- Cuando un hilo alcanza un TSP, puede conmutar, iniciar o reanudar cualquier tarea pendiente.
- La terminación correcta de las tareas se garantiza con los constructores de sincronización explícitos o por los implícitios existentes en algunas directivas/constructores.
- Las variables *threadprivate* pueden tener su contenido modificado por cualquier tarea ejecutada por el mismo hilo.
- El comportamiento *shared* por defecto no es aplicable a *task*.


#### taskyield
Suspende la ejecución de la tarea.

#### taskwait
Es un *TSP*. Suspende la ejecución de la tarea hasta que todas las tareas creadas en la misma región concluyan.

#### taskgroup
Un grupo de tareas con un *TSP* al final.

#### Taskloop
Las iteraciones del bucle, o bucles si se usa `collapse`, se ejecutarán en paralelo usando *tasks*. por defecto, *taskloop* crea de forma implícita un *taskgroup*.

## Synchronizing Constructors (SC)

### master
Solo el hilo maestro ejecuta el código. No hay esperas implícitas para el resto de los hilos.

### barrier
Espera o sincronización explícita para todos los hilos.

### critical
Delimitador de secciones críticas.

### atomic
Asegura la ejecución de varios hilos paralelos de forma atómica. Es más eficiente que critical.

| # hilos   | no bloq.        | si bloq.         |
| --------- | --------------- | ---------------- |
| 1, master | `master`        | `master barrier` |
| 1, cq     | `single nowait` | `single`         |
| todos     | `atomic`        | `critical`       |

## Funciones de bloqueo
Cerrojos explícitos. Semáforos.

`void omp_init_lock(omp_lock_t *lock)`
Crear una llave o cerrojo. Se crea en estado *unlocked*.

`void omp_destroy_lock(omp_lock_t *lock)`
Destruye una llave o cerrojo.

`void omp_set_lock(omp_lock_t *lock)`
Bloquea una llave o cerrojo.

`void omp_unset_lock(omp_lock_t *lock)`
Desbloquea una llave o cerrojo.

`int omp_test_lock(omp_lock_t *lock)`
Devuelve el estado de una llave o cerrojo. *No bloqueante*

Al usar las funciones con `_nest_`, se pueden utilizar múltiples veces por tarea.

## Otros
### flush
Actualiza la visión temporal de memoria de las variables contenidas en la lista del hilo que la ejecuta.

### threadprivate
Variables a replicar a cada hilo. 
Convierte variables globales en locales y persistentes a los hilos a través de las múltplies reigones paralelas.
Solo se inicializan al principio.

- **copyin**
- **copyprivate**

### declare reduction
Permite definir nuevos operadores de reducción para ser usados en la cláusula *reduction*.

> [!INFO]- Poco relevante
> "No va a caer en el examen."

### ordered
Los hilos ejecutan el *structured block* siguiendo el orden natural de las iteraciones del bucle secuencial.


