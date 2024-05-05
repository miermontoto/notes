

# Coordinación y sincronización de procesos (Intro)
PDF:
![[03 Coordinación y sincronización de procesos - Tra.pdf]]


| Q    | A    |
| --- | --- |
| ¿Si hay concurrencia hay paralelismo? | No. |
| ¿Si hay paralelismo hay concurrencia? | Sí. |
| ¿Un programador tiene que lidiar con el diseño concurrente aunque su programa no lo tenga si se ejecuta en un sistema operativo multiprogramado? | No, el SO lidia con los problemas de concurrencia en su lugar. |
| Una cosa ya estudiada que tiene que solucionar el SO para lidiar con la concurrencia. | Salvar y restaurar procesos. |
| Un SO tiene varios núcleos. Si se ejecutan muchos programas, ¿siempre ocurre que exista paralelismo? | No, depende del sistema operativo. |
| Los procesos tienen que ser multihilo para que haya paralelismo. | Falso. |
| ¿Hay algún sistema operativo en el que no exista la concurrencia? | Los monoprogramados.<br> |
| **¿Cuál es la mejor solución de los problemas de la concurrencia?** | Secuenciar el MÍNIMO código posible. |
| Si un proceso está en una sección crítica, ¿puede otro proceso estar en otra sección crítica? | Sí.<br><br> |
| Si al bloquear una sección crítica  se bloquean todas las secciones críticas, ¿funciona el programa? | Sí, pero de manera muy ineficiente. (estás quitando concurrencia) |
| Si existen n globales declaradas y se acceden durante el transcurso de los procesos, ¿cuántas secciones críticas hay como mínimo y como máximo? | Como mínimo n, no hay máximo. |
| Sean dos semáforos s1 y s2, un proceso está ejecutando s1.p: | * Ningún otro proceso puede estar utilizando otro semáforo: falso.<br>* Ningún otro proceso puede estar utilizando s2.p: falso.<br>* Ningún otro proceso puede estar utilizando una operación de s1: cierto. |

## Índice

1. Introducción
2. [[El problema de la exclusión mutua|El problema de la exclusión mutua]]
3. [[Soluciones hardware a la exclusión mutua|Soluciones hardware a la exclusión mutua]]
4. [[Semáforos|Semáforos]]



* * *

# Introducción


## Procesos concurrentes
Aquellos que intercalan y/o superponen sus ejecuciones en el tiempo.
_El día que se inventó la multiprogramación, se inventó la concurrencia._
Aún con tiempo compartido, existe concurrencia pero no paralelismo.


## Procesos paralelos
Aquellos que superponen sus ejecuciones en el tiempo.
Es necesario que haya varios núcleos para que exista paralelismo y que el sistema operativo lo soporte.


## Problemas de la concurrencia
Los problemas de la concurrencia ocurren cuando varios procesos desean acceder a algo a la vez en el tiempo.
**Solución:** secuenciar solo ESE acceso.


### Variables globales
El problema se da en la compartición de recursos **globales**, es decir variables globales. No parámetros de método, no variables locales, no constantes. `public static`


### Sincronización entre procesos
**¿Cómo cumplir que un proceso no ejecute una instrucción antes de que otro haga otra intstrucción?**
Mediante sincronicación, esperando uno a otro.


### Asignar los recursos de forma óptima
Posible uso ineficiente de los recursos. (que los procesos tengan que esperar a otros, etc)


### Dificultad para localizar errores de programación.
Las situaciones no son repetibles → Distintas ejecuciones dan lugar a distinto intercalado de instrucciones.


## Clasificación de interacción entre procesos
1. **Competencia entre procesos por recursos**
  * Procesos independientes que necesitan acceder a un periférico durante su ejecución.
  * Lo resuelve el sistema operativo, no es responsibilidad del programador.
2. **Cooperación entre procesos por compartición**
  * Gracias a variables globales.
  * Es responsabilidad del programador, que necesita llamadas al sistema para solucionarlo.
3. **Cooperación entre procesos por comunicación**
  * Los procesos se envían mensajes.
  * Es responsabilidad del programador.


El programador debe saber solucionar los últimos dos tipos.

Para solucionar el primer tipo, será suficiente con **garantizar el acceso exclusivo** a los recursos globales compartidos.
Para solucionar el segundo tipo, se utilizarán métodos de comunicación entre procesos y esperar por dicha comunicación.


### Ejercicio Productor-Consumidor
Se generan elementos al azar, se guardan en un vector circular y el consumidor los imprime por pantalla.   
