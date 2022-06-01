---

Created at 2022-04-08T14:15:15+02:00
Last updated at 2022-05-23T14:12:34+02:00

Tagged: #4.1-Memoria-virtual

---

# Memoria virtual

ivideen bloque
![[04 Gestion de la memoria virtual - Transparencias.pdf]]
**Objetivo:** aumentar el grado de multiprogramación.
_Nota:_ solo se va a ver mem. virtual con paginación.

|     |     |
| --- | --- |
| La memoria es aplicable... | ... con cualquier técnica que separe al proceso en partes, es decir, con cualquier técnica de asignación no contigua. |
| Cuando la CPU generó su dirección lógica, el proceso estaba en estado... | ... en ejecución.<br><br><br> |
| Si ocurre una excepción por fallo de página... | ... la instrucción máquina no se completa y se reinicia. |
| Si hago reemplazo local, ¿cuántas tablas de páginas modifico? | Una. |



* * *

Además de aumentar el grado de multiprogramación, la memoria virtual también permite cargar y ejecutar procesos más grandes que el tamaño de memoria principal.

# Estrategias de carga

## Paginación por demanda

Solo se cargan las paginas que se requieran, sin embargo, se mantienen en memoria para evitar repetir la carga de las mismas páginas.


## Paginación por anticipación

Se cargan las páginas próximas a la de la instrucción en curso.



# Funcionamiento

Muchos marcos dentro de las tablas de páginas de cada proceso no van a tener valores, ya que no van a estar cargadas en memoria principal.
Por eso, para cada página va a haber un **bit de presencia**, que indique si está cargada o no.
Si el bit de presencia está a uno (la página está), todo funciona exactamente igual que en paginación simple.
También va a existir una columna con la ubicación en disco de la página.

En mem. virtual, la MMU puede generar dos excepciones:

* Que la página no esté en memoria (fallo de página).
* Que la dirección no sea válida (fallo de protección).



### Ante un fallo de página...

El sistema operativo:

1. Consulta la ubicación en disco.
2. Carga la página.
  Se pone al proceso en E/S.
  Pasado un tiempo, la página se carga en MP.
  
3. Se pone a uno el bit de presencia.
4. Se pone al proceso a listo.
5. Se reinicia la instrucción que generó el fallo.


Si existe una instrucción que tiene más cargas en marcos diferentes que números de marcos se mantienen en memoria por proceso, generará fallos de página eternamente, por lo que tiene que existir un número mínimo de marcos por proceso.



# Reemplazo

El reemplazo ocurre cuando no hay marcos suficientes para la carga de páginas nuevas que estén en memoria virtual.


### Motivos

* No hay marcos libres.
* Cuando la cantidad de páginas en memoria de un proceso supera su cantidad de marcos asignados.



## Nuevo funcionamiento

1. Ocurre un fallo de página
2. El SO toma el control.
3. El proceso pasa a E/S
4. ¿Hay sitio en mem. principal para las páginas?
5. NO: reemplazo.
6. Elegir una página víctima.
7. ¿Del mismo o de otro proceso? depende del algoritmo que escoge la página víctima en el paso anterior
  * Reemplazo local / global
8. ¿Ha de guardarse en memoria secundaria?
  * Se guarda siempre / Se guarda solo si el bit de modificación está a 1. depende del sistema operativo, hoy en día se utiliza la segunda opción.
9. Se pone el bit de presencia de la víctima a 0.
10. Se libera el marco de la página.

A partir de aquí, se continúa con el esquema sin reemplazo.


|     |     |     |
| --- | --- | --- |
| Bit | 0   | 1   |
| Presencia | El sistema operativo al descargar una página tras ser seleccionada como víctima de un reemplazo. | El sistema operativo al cargar una página en un marco.<br> |
| Modificación | El sistema operativo al cargar una página de memoria secundaria. | La MMU al realizar una operación de escritura sobre la página. |


