# Conclusiones de la segunda práctica
*Entregado por: Juan Francisco Mier Montoto, UO283319, 07-10-2022.*

---

## Índice
1. Introducción
2. Procedimiento
3. Concluisones sobre tiempos entre fases
	1. Fase 1, 2 y 3
	2. Fase 4, 5, 6 y 7
	3. Fase 8 y 9
	4. Diferencias entre las dos primeras fases
4. Conclusiones sobre tiempos entre compilaciones
	1. Entre GCC e ICC
	2. Entre `-O0` y `-O3`
5. Conclusiones sobre tiempos entre servidores de ejecución


---

## Introducción
Este documento trata sobre la realización y las conclusiones extraídas de la segunda práctica de laboratorio de Programación Concurrente y Paralela.

## Procedimiento
Después de la explicación del profesor, la práctica ha sido realizada utilizando Visual Studio Code conectado al servidor dedicado de la asignatura, `di119`.

Al terminar de rellenar correctamente las fases con código, se ha enviado el script de ejecución a las tres categorías de servidores que hay disponibles: I3, Xeon y GPU.
Se ha modificado el script de lanzamiento original para que incluya información sobre el servidor en el que se está ejecutando, para lo cuál se han utilizado los comandos `lshw`  y `lscpu`.
El script de ejecución compila el programa (a través del Makefile) de cuatro maneras:
- Utilizando el compilador GCC sin flags de optimización (`-O0`).
- Utilizando el compildaor GCC con flags de optimización (`-O3`).
- Utilizando el compilador ICC de Intel sin flags de optimización (`-O0`).
- Utilizando el compilador ICC de Intel con flags de optimización (`-O3`).

Este documento está escrito en formato Markdown utilizando Obsidian en Linux.


## Conclusiones sobre tiempos entre fases

### Fase 1, 2 y 3
La diferencia entre la primera y la segunda fase es sencilla de analizar: al utilizar una variable donde acumular la suma, se evita tener que acceder constantemente a la posición del vector que sea, por lo que la segunda fase es más rápida que la primera.

La diferencia entre la segunda y la tercera fase es, obviamente, que la matriz se almacena en un vector utilizando *row-order*. Esto implica que se sigue iterando utilizando dos variables (`i` y `j`) pero utilizando la longitud de una fila para saltar entre cada una. Al existir una localidad espacial muy clara, y teniendo en cuenta que el vector se carga en memoria por bloques, ocurrirán menos fallos de página por lo que la ejecución será más rápida. Sin embargo, para tamaños de vector menores, la diferencia de tiempo es peor, llegando incluso a significar una diferencia negativa respecto a la segunda fase, por lo que habría que analizar a priori los tamaños con los que se va a trabajar para decidir entre la implementación de esta técnica.

### Fase 4, 5, 6 y 7
En estas cuatro fases se utiliza OpenMP para paralelizar el código y mejorar el rendimiento. 

Lo primero de todo, entre la fase 5 y 6 no hay apenas diferencias de tiempo claras, por lo que utilizar variables locales frente a globales no supone ninguna mejoría en el rendimiento del código.
La diferencia entre el resto de fases es más clara, pero ninguna implica una mejoría de tiempo muy grande.

La diferencia entre la cuarta y la quinta fase ya está tratada en el apartado anterior. Utilizando una variable donde acumular el resultado en vez de actualizar el valor en el vector supone menos esfuerzo.
De igual manera, la diferencia entre la sexta y séptima fase también está tratada en el apartado anterior, donde también se obtiene una pequeña mejora de tiempo al operar sobre la matriz en forma de vector (en *row-order*).

### Fase 8 y 9
La diferencia entre las dos últimas fases no está clara y depende del compilador, del tamaño de los vectores y de la máquina en la que se esté trabajando. No obstante, la fase secuencial "suele" funcionar más rápido, seguramente debido a la reducción, el llamado "enemigo del paralelismo".


### Diferencias entre las dos primeras fases
El uso de OpenMP para parelizar mejora significativamente el rendimiento de la tarea, por lo que las tres primeras fases son bastante más lentas que las cuatro siguientes. Esta diferencia se mantiene para todas las pruebas, sin importar el servidor ni el compilador ni ninguna otra variable. Además, es bastante significativa, por lo que es muy importante para el rendimiento final del programa.

## Conclusiones sobre tiempos entre compilaciones

### Entre GCC e ICC
Al analizar los resultados obtenidos entre ambos compiladores, se puede observar que GCC es significativamente más lento que ICC excepto en las últimas dos fases, donde GCC obtiene mejores resultados al utilizar la suma por reducción en paralelo e ICC obtiene mejores resultados en secuencial excepto en la máquina con AMD, donde el método secuencial es mucho mejor en todos los casos.

### Entre `-O0` y `-O3`
La diferencia de rendimiento entre estos dos modos de compilación es evidente, como era de esperar. `-O3` ayuda muchísimo a mejorar el tiempo de ejecución en todos los casos, sin importar los tamaños de la información con los que se esté trabajando, el compilador o la máquina que lo ejecute. La diferencia es tan grande que, en la mayoría de casos, es más importante para el rendimiento la flag de optimización que cualquier cambio que se haga en el código, aunque obviamente sean importantes ambas partes.


## Conclusiones sobre tiempos entre servidores de ejecución
El servidor I3 es, sorprendentemente, más rápido que el servidor Xeón, salvo en algunos casos en fases que utilizan paralelismo para tamaños pequeños de matriz. Esto puede ser debido a la diferencia de frecuencia a la que operan los núcleos, pese a que el procesador Xeón tenga más núcleos. Esta diferencia puede darse también debido al tiempo de comunicación entre sockets del Xeón, que es inexistente en el I3 porque solo hay uno.

El servidor GPU es muchísimo más rápido que los otros dos, principalmente por su procesador, un Ryzen 7 3700X que tiene más frecuencia, más memoria caché, los mismos núcleos que el Xeón y un solo socket. Todo esto provoca un rendimiento mucho mejor en todas las mediciones.




