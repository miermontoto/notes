---

Created at 2022-03-21T14:03:43+01:00
Last updated at 2022-05-21T20:01:26+02:00

Tagged: #4.-Memoria-principal

---

# Gestión de la Memoria Real
PDF:
![[04 Gestión de la memoria real - Transparencias.pdf]]


|     |     |
| --- | --- |
| Q   | A   |
| ¿Qué une la memoria pricinpal con la memoria secundaria referente a esta asignatura? | Carga de procesos. |
| ¿Qué une los registros de CPU con la memoria principal referente a esta asignatura? | La ejecución de la instrucción máquina en curso. |
|  | "Todo en esta vida, todo lo que se carga en la CPU es compilado". |
| ¿Para qué se inventó el direccionamiento? | Para que todos los programas sean reubicables. |


Índice

* Introducción
* Jerarquías de memoria
* Direccionamiento
* Direccionamiento dinámico
* Mecanismos de gestión de la memoria real



* * *



# Introducción

## Conceptos de gestión de memoria

_Eficiencia, transparencia, compartición entre hilos, protección contra accesos, ejecutar en cualquier posición._


* **Memoria principal**
  * Para que un programa se ejecute debe encontrarse en memoria principal, al menos una parte (la instrucción máquina en curso).
* **Gestor de memoria**
  * Componente del SO que se encarga de las tareas relacionadas con la administración de la memoria principal.
  * _Asignación, localización, aprovechamiento._



# Jerarquía de memoria

![[y2t2/Sistemas (SO)/_resources/Gestión_de_la_Memoria_Real.resources/image.png]]


## Principio de localidad

Garantiza que cuando la CPU accede a posiciones de la RAM, se acceda también a la siguiente posición en memoria. (Secuencialidad)
