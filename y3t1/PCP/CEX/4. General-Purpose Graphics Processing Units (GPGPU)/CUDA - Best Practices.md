![[_resources/Best Practices.pdf]]

---

## Saltos divergentes
- La importancia de los saltos divergentes es a nivel de ***warp***: grupo de 32 hilos (también half y quarter warps)
- Todos los hilos de un warp comienzan en la misma dirección de programa pero tienen su propio contador de direcciones de instrucción, por lo que tienen independencia de ejecución.
- Un arp ejecuta una instrucción común a cada instante de tiempo.
	- La mayor productividad se alcanza cuando todos los hilos del warp ejecutan el camino programado.
	- Si los hilos divergen, el warp ejecuta secuencialmente todos los caminos.
	- En cada camino, los hilos que no estén en él son deshabilitados.
	- Ejecutados todos los posibles caminos, los hilos convergen en su ejecución.
- Evitar saltos divergentes por la pérdida de rendimiento que implican.


## Coalescencia
La coalescencia es la localidad espacial de la GPU.

- Localidad espacial CPU: orientada a reducir el número de accesos a memoria central a nivel de hilo.
- El enfoque de la localidad en CPU no funciona bien en GPU.

- Localidad espacial GPU: orientada a reducir el número de accesos a nivel de *warp*.
- Cuando un *warp* accede a memoria global junta los accesos de los hilos dentro del *warp* (**Coalescencia**)
- Una operación de acceso a memoria global puede tener que repetirse múltiples veces dependiendo de la distribución de datos entre los hilos del *warp*.

- El acceso a memoria global se realiza en transacciones de 32, 64 o 128 bytes.
- Los segmentos de memoria que estén alineados pueden ser leídos o escritos por transacciones de memoria.
- Esto afecta al rendimiento en función del tiempo de memoria al que se esté accediendo.
- A mayor dispersión de las direcciones, mayor pérdida de rendimiento.
- Se debe maximizar la coalescencia para un mayor rendimiento en los accesos a memoria global.

- Un acceso se traduce en una sola instrucciónd e acceso a memoria global si y solo si el tamaño del tipo es 1, 2, 4, 8 o 16 bytes y los datos están alineados de forma natural.
- Los requisitos de alineación se cumplen para los tipos incorporados.
- Para que estos accesos sean totalmente coalescentes, la anchura de bloque de hilos y de la estructura de datos debe ser múltiplos de warp.
- Un patrón de acceso a memoria global para una matriz 2D adecuado es aquel donde un hilo genérico (tx, ty) usa `BaseAddress+width*ty+tx` para acceder a su elemento, siendo `width` la anchura de la matriz.

## Warp-level primitives (operaciones a nivel de warp)
- Permiten hacer reducciones a nivel de warp.
- Sincronizaciones (barreras) a nivel de warp.

## Streams