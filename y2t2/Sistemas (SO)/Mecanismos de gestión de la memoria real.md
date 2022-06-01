---

Created at 2022-03-25T14:15:38+01:00
Last updated at 2022-04-05T16:03:27+02:00

Tagged: #4.-Memoria-principal

---

# Mecanismos de gestión de la memoria real
# Asignaciones

## Asignación contigua

La asignación contigua de memoria carga los procesos completos y contiguos, sin dividirlos y en orden.
La MMU de suma simple es solo válida en este sistema.


## Asignación no contigua

La asignación no contigua de memoria carga los procesos divididos y sin orden, de manera "desorganizada".


# Tipos de memoria

## Memoria real

* Los procesos se cargan completos en memoria principal → menor grado de multiprogramación.
* Medianamiente complejo de implementar.

## Memoria virtual

* Los procesos se cargan PARCIALMENTE en memoria principal → mayor grado de multiprogramación.
* La mínima parte de un proceso que debe de estar en memoria es la instrucción máquina en curso, aunque normalmente se carga más que eso.
* Muy complejo de implementar.



# Introducción

De cada esquema hay que saber:

* **Organización física de la memoria RAM**
  * Cómo trocea el sistema operativo la memoria.
* **Estructuras de datos que necesita el operativo para poder decir cómo está dividida la memoria RAM..**
  * Las necesita para poder determinar qué zonas de la memoria principal está en uso.
* **Traducción de direcciones lógicas a direcciones físicas**
* **Estrategias de asignación**
  * Cómo se asigna memoria principal a los procesos.
* **Ventajas e inconvenientes**
