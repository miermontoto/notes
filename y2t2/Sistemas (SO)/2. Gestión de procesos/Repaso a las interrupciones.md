---

Created at 2022-02-08T16:38:52+01:00
Last updated at 2022-02-14T15:11:34+01:00

Tagged: #2.-Gestión-de-procesos

---

# Repaso a las interrupciones
* **Las interrupciones son las únicas que pueden echar a un proceso de la CPU.**
* El proceso se va al terminar la instrucción máquina que se esté ejecutando.
* Por cada interrupcion que hay, existe una rutina que indica dónde hay que buscar el código a ejecutar para la interrupción.
* El vector de interrupciones (que inicializa el SO) es donde se encuentran todas las rutinas de interrupción. Está en zonas bajas de memoria principal.
* Si un SO dirige todas las interrupciones a sí mismo a través del vector de interrupciones, cada vez que hay una interrupción entra el SO.
  * El SO suele mantener el control de esta manera.
* Las rutinas manejadoras de interrupción deben realizar un _retorno de interrupción_ (iret) para finalizar. Esto devuelve la CPU al modo usuario. y recupera los registros.



## Funcionamiento

Hay muchas interrupciones y se distinguen entre sí con un número entero (_de interrupción_). La interrupción 0 SUELE ser la interrupción referente al reloj.

Lleguan siempre a la CPU para interrumpir la ejecución del código actual:

1. La CPU finaliza la instrucción actual.
2. Se salvan todos los registros de la CPU a la pila.
3. La CPU se pone en **_modo supervisor_**.
4. Se carga el registro PC de la posición del vector de interrupciones correspondiente a la interrupción actual.



## Tipos de interrupciones

* **Interrupciones hardware  ⚠️** más prioritarias
  * Señales eléctricas generadas por los periféricos.
  * Dispositivo finalizó E/S.
  * No interviene el software.
  * Son imprescindibles para la multiprogramación.
* **Interrupciones software**
  * Generadas por los procesos.
  * Se dividen en dos tipos:
    * Llamadas al sistema (voluntarias)
      * Solo las llamadas al sistema pueden llamar al hardware.
      * Siempre se ejecutan en modo privilegiado.
      * Solo una interrupción se dedica a hacer llamadas al sistema. (TRAP)
    * Excepciones (involuntarias)
      * No son generadas expresamente por los procesos.
      * Pueden ser más de una interrupción diferente.
      * Supone un error en el código.
      * Pueden ser controladas para intentar solucionar el error.
      * En última instancia, si no se soluciona o no se captura la excepción, el SO finaliza el proceso.




[Sistemas Operativos (CEX)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2c3EzZW9waWM0cjY0b3BuY2NvbWFkcG83MHBqMGUxbmNvcTMwYzFsYzhwM2VwMWxjcGlnIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Tue, Feb 8, 2022, 4:00 PM - 5:00 PM
Location:AS-1
Clase Expositiva

[Sistemas Operativos (CEX)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzamtja3EzMGQxa2NrcjYyZDlwY2NxbTRjMWpjZ3FqaWNqNjZvb20yZGI0Y2tyNjRwajI3MHBnIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Mon, Feb 14, 2022, 2:00 PM - 4:00 PM
Location:AS-1
Clase Expositiva



