

# Direccionamiento
Hay varios tipos de direccioens:

1. Direcciones **simbólicas**
2. Direcciones **relativas**
3. Direcciones **lógicas**
4. Direcciones **físicas**


Se haga lo que se haga, la CPU solo entiende las direcciones lógicas si la arquitectura tiene una MMU, o las direcciones físicas si la CPU se comunica directamente con la RAM.


# Pasos

## Paso 0. Escritura del código fuente (dir. simbólicas)

**Se genera el código fuente.**

* Lo más alejado que hay de lo que maneja el operativo y el procesador.
* Nombres de variables, etc.
* Facilita la programación en lenguajes de medio/alto nivel.


De las variables simbólicas, solo las globales se transforman. Las variables normales, van a pila.
También hay que traducir las llamadas a funciones.


## Paso 1. Compilación

**Se genera el código objeto.**

* Pasa a código binario.
* Se transforman direcciones simbólicas a direcciones numéricas.
* Estas direcciones pueden ser relativas o físicas. (Programa reubicable / Programa no reubicable)
* Se aplica a cada fichero fuente resultando en un fichero objeto.


Traducir direcciones simbólicas a direcciones físicas directamente es un error porque genera programas no reubicables, lo cual es un problema excepto en sistemas monoprogramados.

Si un programa carga datos, código y demás información de manera secuencial, tan solo hay que sumarle la posición de inicio donde se quiere cargar para hacerlo reubicable. Esto es traducir direcciones simbólicas a **direcciones relativas**, que al sumarle la posición inicial se convierten en **direcciones físicas**.

Todas las direcciones relativas comienzan en 0, y todo el programa se carga de manera secuencial en memoria.
Hay un elemento hardware, la MMU, que suma a todas las posiciones del programa la posición inicial en memoria.
Si no hay MMU, se recorre todo el programa para sumarle la posición inicial para pasarlas a direcciones físicas.


## Paso 2. Enlazado

**Se genera el programa, el ejecutable.**
Se unen todos los ficheros objetos necesarios y se resuelven las llamadas con direcciones aún no calculadas.
No se transforma el tipo de direcciones.


## Paso 3. Carga del programa ejecutable en MEMP → PLP

**Se genera el proceso**
Si hay direcciones físicas, el PLP carga directamente el programa a memoria, pero no tiene libertad para decidir dónde se carga.

Si hay direcciones relativas:

* Se pueden mantener las direcciones lógicas (relativas).  Proceso reubicable.
* Se pueden convertir a relaciones físicas. Proceso no reubicable.

De todas formas, se carga el programa a memoria.


## Paso 4. MMU

Traduce sobre la marcha las direcciones relativas que no hayan sido transformadas aún a direcciones físicas.
La MMU tiene un registro de la dirección física de inicio del proceso en ejecución. Este registro se suma a todas las direcciones relativas para poder acceder a la memoria principal.

#

## Esquema general

![[Sketch 3-25-2022 2-13 PM.png]]


## Programa / Proceso no reubicable

* Que un programa sea no reubicable significa que no se puede variar la posición en memoria donde se carga.
* Que un proceso sea no reubicable significa que no se puede variar la posición en memoria una vez cargado, lo que lo hace no compatible con la suspensión y restauración de procesos.
