

# Asignación contigua
## Reglas generales

* **Protección / Traducción**
  * Traducción
    * Paso de direcciones lógicas a físicas.
    * Es una simple suma.
    * No es obligatorio una MMU, el operativo lo puede hacer en ejecución o en carga.
  * Protección
    * Hay otro registro en la MMU que es el registro límite (junto al registro base).
    * Tiene el tamaño en bytes del proceso en ejecución.
    * _Si la dirección lógica es mayor o igual que el valor del registro límite, se produce una excepción hardware._
    * Se hace para que un proceso nunca pueda acceder a un espacio de memoria que no sea suyo.
  * La MMU realiza primero la protección.
  * Si no da error, en una segunda fase se realiza la traducción.
* **Estrategias de asignación**
  * Primer ajuste
    * El primer hueco en el que entra.
  * <mark style="background: #BBFABBA6;">Mejor ajuste</mark>
    * De todos los huecos en el que entra, se elige el más pequeño.
  * <mark style="background: #FF5582A6;">Peor ajuste</mark>
    * De todos los huecos en el que entra, se elige el más grande.
  * Siguiente ajuste
    * Por primer ajuste, pero empezando a buscar desde el último que se colocó, en vez de desde 0.


# Particiones fijas
* **Organización física de la memoria principal**
  * División de la memoria en varios trozos (particiones)
  * No hay limitación en cuanto al número de ellas, ni al tamaño.
  * No se puede variar su tamaño una vez arrancado el SO.
* **Asignación de particiones a procesos**
  * Por cada partición, un único proceso.
  * No se puede meter un proceso que sea más grande que la partición.
  * **¿Y si no hay particiones libres?**
    * Que espere.
* **Estrategias de asignación**
  * El mejor es el mejor ajuste.
  * El peor es el peor ajuste.
* **Estructuras de datos**
  * Tabla de descripción de particiones.
  * Una entrada por partición.
  * Estado (libre/asignada), Base de la partición, Tamaño de la partición.
  * Cola  de entrada de procesos a memoria principal.
    * Una única cola parra todas las particiones.
* **Ventajas / desventajas**
  * **❌** <mark style="background: #FF5582A6;">Tamaño de proceso limitado al de la mayor partición.</mark>
  * ❌ <mark style="background: #FF5582A6;">El grado de multiprogramación máximo de este sistema es el número de particiones menos uno.</mark>
  * ❌❌  <mark style="background: #FF5582A6;">Fragmentación interna</mark>
    * Se pierde espacio en cada partición debido a que el proceso es más pequeño que la partición.
  * ✅ <mark style="background: #BBFABBA6;">Sencilla implementación</mark>



# Particiones variables

* **Organización física de la memoria principal**
  * No se hace un particionado previo, simplemente se anota dónde termina el SO.
  * El particionado varía dependiendo de los procesos que se introduzcan.
  * Al entrar un proceso, se crea una partición cuyo tamaño es el mismo que el del proceso inmediatamente posterior al proceso anterior.
* **Asignación de particiones a procesos**
  * Se escoge un hueco de la lista de huecos que tenga un tamaño mayor que el tamaño del proceso que se quiere asignar.
  * Se genera una partición que comience donde empiece el hueco y de tamaño del proceso.
  * Se guarda un no hueco a la lista con la información pertinente.
  * Se modifica el hueco que se ha utilizado, restando el tamaño del proceso al tamaño del hueco y comenzando donde termina el proceso.
  * **Al terminar un proceso:**
    * Añadir un elemento nuevo a la lista de huecos con la información del proceos que haya terminado.
    * Eliminar el elemento de la lista de no huecos.
* **Estructuras de datos**
  * Lista de huecos:
    * Se guarda el inicio y el tamaño de cada hueco.
  * Lista de no huecos:
    * Se guarda el inicio, el tamaño y el PID del proceso que lo ocupa.
* **Estrategias de asignación**
  * _Se utilizan las estrategias clásicas de asignación._
  * Si se utiliza el primer o siguiente ajuste, se ordena la lista de huecos por el comienzo de manera descendente.
  * Si se utiliza el mejor ajuste, se ordena la lista de huecos por el tamaño de manera ascendente.
  * Si se utiliza el peor ajuste, se ordena la lista de huecos por el tamaño de manera descendente.
* **Ventajas / desventajas**
  * ✅ <mark style="background: #BBFABBA6;">No hay límite de tamaño de los procesos.</mark>
  * ✅ <mark style="background: #BBFABBA6;">El grado de multiprogramación no está tan limitado (pueden caber más programas en RAM en un momento dado).</mark>
  * ❌ <mark style="background: #FF5582A6;">Fragmentación externa.</mark>
    * Tiene soluciones.
      * Condensación: solución parcial, se hace siempre. (O(1))
        * Se fusionan huecos que estén juntos.
      * Compactación: solución óptima, se hace cada cierto tiempo. (O(n2))
        * Todos los procesos van al principio de la memoria.
        * Solo queda un hueco, al final de la memoria.
  * ❌ <mark style="background: #BBFABBA6;">Más complicado de programar.</mark>
