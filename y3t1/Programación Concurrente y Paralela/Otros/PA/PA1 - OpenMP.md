![[_resources/PA1 2022-11-10 11.13.53.excalidraw](_resources/PA1%202022-11-10%2011.13.53.excalidraw.md)
![[_resources/PA1 2022-11-10 11.29.19.excalidraw](_resources/PA1%202022-11-10%2011.29.19.excalidraw.md)

### Problema 4
El `schedule(static)` en cada bucle hace que cada hilo calcule la misma cantidad de información de manera fija, de modo que en el siguiente bucle el hilo contiene justo la información que necesita. En caso de tener otra estructuración, o si los bucles tuvieran distintos tamaños, esto no funcionaría. El `nowait` hace que los bucles hagan la ejecución del tirón y sin esperar unos por los otros, que no es necesario porque todos tienen la información que necesitan gracias a la directiva anterior.

### Problema 5
#### Primera versión
No compila.

#### Segunda versión
Diez ejecuciones del `print`, solo trabajan dos hilos de los cuatro indicados. Cada hilo ejecuta un solo bucle de *j*.

#### Tercera versión
Con el collapse, trabajan todos los hilos en vez de solo dos.

#### Cuarta versión
Solo entran dos hilos, renombrados a 0. No hay anidamiento, por lo que no se generan hilos nuevos en el "segundo nivel".

Al incluir el nested, sí que hay cuatro hilos.