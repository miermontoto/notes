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
- Secuencia de comandos que se ejecutan en orden (equivalente a cola FIFO).
- Si no se especifica, los comandos van al stream por defecto, que siempre existe.
- Los streams se ejecutan concurrentemente entre sí.
- Cada hilo CPU puede tener su "stream por defecto" independiente (`nvcc --default-stream=perthread`).

![[_resources/Pasted image 20221129092105.png]]

```C
// Creando
cudaStream_t *streams=(cudaStream_t*)malloc(nstr*sizeof(cudaStream_t));
for (int i=0; i<nstr; i++)
	cudaStreamCreate(&(streams[i]));

// Lanzamiento asíncrono de los kernels cada uno con sus propios datos
for (int i=0; i<nstr; i++)
	kernel<<<blocks, threads, 0, streams[i]>>>(dA + (i*n/nstr), dB, niters);

// Lanzamiento asíncrono de las copias. No empiezan hasta el fin de su kernel
for (int i=0; i<nstr; i++)
	cudaMemcpyAsync(hA + (i*n/nstr), dA + (i*n/nstr), size/nstr, cudaMemcpyDeviceToHost, streams[i]);

// Liberar recursos
for (int i=0; i<nstr; i++)
	cudaStreamDestroy(streams[i]);
```


## Dinamismo
Los kernels pueden lanzar, a su vez, la ejecución de otros kernels.

## Reducción paralela en CUDA
<mark style="background: #FFB86CA6;">Importante que sea eficiente.</mark>

- Enfoque basado en divide y vencerás a nivel de bloque de hilo.
- Importante para poder lanzar múltiples bloques.
	- Poder procesar estructurase de datos muy grandes.
	- Para mantener ocupados todos los SMs de la GPU.
	- Cada bloque reduce una parte de la estructura.

## Conclusiones
- Las GPUs solo sirven en ciertos contextos, cuando hay muchos datos.
- Buscar en internet.
- Cuidado con las dependencias: calcular el propietario. `_syncthreads` si no.
- Grano fino a la GPU, grano grueso a la CPU.
- No es tan importante que los hilos tengan más o menos carga, lo que importa es tener a la GPU trabajando al 100%.
- Casi todos los programas son compute-bound, así que no hay que preocuparse por la memoria.
- Casi siempre hay que usar fuerza bruta.
- Como estrategia general, empezar por 256 hilos por bloque, luego ir subiendo y bajando en múltiplos de 32.