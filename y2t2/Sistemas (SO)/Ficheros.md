---

Created at 2022-04-26T15:57:53+02:00
Last updated at 2022-05-24T17:56:47+02:00

Tagged: #5.-Ficheros

---

# Ficheros

![[05 Gestión de ficheros - Transparencias.pdf]]


## Índice

* Estructuras del SO para gestión de ficheros
* Implementación de ficheros (Cómo organiza el disco)
* Implementación de directorios (Qué almacena un directorio)
* Gestión del espacio libre en disco

* * *

# Intro

Módulo del SO encargado del manejo y organización de ficheros.

### En nivel superior

Implementa operaciones.

### En nivel inferior

Administra la memoria secundaria.


# Ficheros

Secuencia estructurada de bytes. El SO solo ve bytes, no puede interpretarlo.


## Tipos de ficheros

* Regulares
  * Texto
  * Binario
* Directorios
* Especiales (UNIX)
  * De carácter
  * De bloque



## Acceso a ficheros

* **Acceso secuencial**
  * La información se procesa en orden.
  * Se puede rebobinar.
* **Acceso directo**
  * La longitud de cada línea de bytes es conocida.
* **Acceso indexado**
  * Construido sobre el acceso directo.
  * Típico de bases de datos.



# Directorios

Un directorio es un fichero que se puede abrir y que contiene datos.

El sistema de directorios es jerárquico, diferente en UNIX y en Windows.


# Estructuras de datos para la gestión de ficheros



## Bloque descriptor de fichero (BDF)

Estructura de datos que contiene todo lo que se necesita saber sobre un fichero:

* Identificador interno
* Número de nombres
* Tipo
* **_Ubicación en el dispositivo de almacenamiento de sus datos_**
  * Es un puntero a la posición donde empiezan los bloques de datos del fichero.
  * No contiene a los datos en sí.
* Tamaño
* Protección (flags)
* Instantes de creación, última modificación, último uso...
* Propietarios



## Tabla única de ficheros abiertos del sistema

Almacena:

* Los BDFs de cada fichero abierto en memoria.
* Los punteros de lectura/escritura a modo de offset.
* Shared:
  * El número de veces que se comparte la entrada (-1 si no).
  * Cuántas veces se ha abierto.


Es la operación 'open' la que carga entradas nuevas en la tabla de ficheros abiertos del sistema.


## Tabla de BDFs en RAM (opcional)

Mantiene una copia de los BDFs de fichero. Solo hay una en el sistema y es opcional.

**Objetivo:** evitar que se cargue varias veces el BDF en memoria.
Tiene dos campos:

* El BDF del fichero.
* Un contador de referencias a la entrada.


Si esta tabla no existe, la tabla de ficheros abiertos del sistema carga un BDF por entrada.


## Tabla de descriptores por proceso / Tabla de ficheros por proceso

Contiene punteros a entradas de la Tabla de Ficheros Abiertos del sistema.
Es la tabla de ficheros abiertos por proceso.

Al iniciar un proceso, se crean tres entradas para la entrada, salida y error estándar.



# Implementación del sistema de ficheros

Un sistema de ficheros es un modo de organización de la información (ficheros) en memoria secundaria.

## Estructura del sistema de ficheros

Cada partición de un dispositivo de almacenamiento puede contener un sistema de ficheros.
Para ello, es necesario dar formato a la partición.


## Tamaño de bloque de datos

* La mediana del tamaño de ficheros varía entre 1KB y 4KB (en función del sistema de ficheros).
  * Bloque grande
    * Fragmentación interna grande
  * Bloque pequeño
    * Más accesos al disco para acceder al fichero
    * Mayor tamaño de las estructuras de datos

## Implementación de ficheros

Los datos de los ficheros se almacenan en memoria secundaria en los bloques de datos.

Los bloques de datos de un fichero no tienen porqué estar seguidos ni en orden. (_se necesitan obtener en orden al acceder al fichero_)

### Asignación por lista enlazada

* Una parte del bloque de datos contiene el nº del siguiente.
* **El BDF solo tiene el primer número de bloque.**



### Asignación por lista enlazada utilizando una tabla

* Existe una tabla por partición en memoria principal que contiene el número del siguiente bloque con respecto a cada bloque de la partición
* **BDF contiene el primer número de cada fichero.**
* Para leer secuencialmente, una vez accedido al primer bloque se lee el siguiente accediendo a su entrada en la tabla.



### Asignación indexada

* **El BDF contiene un cierto nº fijo de nº de bloques.**
* Existen entradas:
  * Directas

				Tiene tanto números de enteros que representan los tantos primeros números de bloque del fichero.

* Indirectas

				Una entrada indirecta significa que hay que ir al bloque de datos que represente la entrada, y dentro de él están todos los datos siguientes a él.

* Nivel de anidamiento

						El nivel de anidamiento informa de la cantidad de niveles de bloques que hay que aniden los bloques que hay que leer.

* Simple
* Doble
* Triple
* ...

## Consistencia del sistema de archivos

Tiene que haber técnicas que permitan comprobar la consistencia del sistema para evitar la degradación y la pérdida de información:


### fsck

Dos tablas:

**De bloques:**
Coge todos los ficheros y obtiene todos los bloques. Con cada bloque, se rellenan dos tablas, anotando si están usados o no.
Al comparar ambas tablas, se obtienen inconsistencias.

## Implementación de directorios

Un directorio es una tabla ordenada, que contiene el nombre de los ficheros que contiene y su BDF, directa o indirectamente.
A través de esta información, se consiguen los BDFs de los ficheros. Además, esto permite el acceso relativo a ficheros.

Hay dos opciones para guardar siempre el BDF de la raíz (que permite obtener el resto de ficheros):

* tenerlo siempre en memoria.
* que el directorio raíz empiece en una zona exacta.



## Gestión de bloques libres

### Lista enlazada

Los bloques libres se encadenan en una lista enlazada. Se utilizan los propios bloques para almacenar la información.
En memoria se almacena solo el primer elemento de la lista.


### Mapa de bits

Para sistemas de archivos pequeños.


* Partición de N bloques usa un mapa de N bits.
* 1 = libre, 0 = ocupado.
* Usa mucho espacio si hay pocos bloques libres.
* Fñacil encontrar M bloques consecutivos.
* El mapa podría ser paginado.
