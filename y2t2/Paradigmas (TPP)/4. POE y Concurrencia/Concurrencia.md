---

Created at 2022-03-28T16:31:17+02:00
Last updated at 2022-05-15T11:08:25+02:00

Tagged: #4.-POE

---

# Concurrencia
## Hilos en Java

* Son objetos que ejecutan, en concurrencia con el resto del programa el código predefinido en el método run().
* Se pueden crear de dos formas
  * Heredando de la clase `Thread` .
  * Implementando la interfaz `Runnable` .



### Comienzo de ejecución

`start()`


### Terminación

* Retorno del método `run()` .
* Por lanzarse una excepción no capturada.



## Estados



## Exclusión mutua

Para garantizar la exclusión mutua, solo uno puede acceder a la variable compartida en un mismo instante.


### Interbloqueo

### Interbloqueo activo

Los hilos siguen corriendo, pero no hay progreso en el sistema.

### Inanición

Hay ciertos hilos que nunca llegan a la CPU.

[Tecnologías y Paradigmas de la Programación (CEX)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzamtjNWdqZ2UxbjZjcG1hZHI0Y29vamNwaGxjOWdtNmM5aTY0b2o4bzlwNzVoM2djcjY2dGgwIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Mon, Mar 28, 2022, 4:00 PM - 5:00 PM
Location:AS-1
Clase Expositiva

[Tecnologías y Paradigmas de la Programación (CEX)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzamtjNG82Y2NwbmNoajM4Y3BqNmRpamVkYjU2aGhtY29objY5aTM0cGhoNjRvamNkcG42b29nIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Mon, Apr 4, 2022, 4:00 PM - 5:00 PM
Location:AS-1
Clase Expositiva


