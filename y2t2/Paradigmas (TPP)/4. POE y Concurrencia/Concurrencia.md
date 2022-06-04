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


