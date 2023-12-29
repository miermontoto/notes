c
## Ejercicio 1
### En modo interactivo
> **Ejecutar “./VecAdd1 –2000 32 2000 21”. No olvidar el signo menos del primer 2000. ¿Qué observas?**
> El tiempo que obtiene CUDA es dos ordenes de magnitud superior al de la CPU. El error no se devuelve correctamente (NaN). Seguramente tenga algo que ver el hecho de que *n* es un número negativo.

> **Editar VecAdd1. Busque el comentario “Paso 1º”. Borrar las 4 líneas que siguen al comentario “Paso 1º” y quitar los comentarios a las 4 líneas que siguen a las borradas. Compilar de igual forma que en el punto 1. Ejecutar en las mismas condiciones que en el punto 2. ¿Qué observas?**
> Al reservar otra vez espacio en memoria, se cuadruplica el tiempo de ejecución.

> **Ahora, ejecutar “./VecAdd1 2000 32 2000 21”. ¿Qué observas?**
> Ahora, *n* ya no es un número negativo. Los tiempos de ejecución de la CPU se incrementan del orden de 3 unidades de magnitud, por lo que pasa menos tiempo en el kernel de CUDA. El error retorna valores cercanos a 1.

> **Editar VecAdd1. Buscar el comentario “Paso 2º”. Quitar el comentario para habilitar las 7 líneas que le siguen. Compilar de igual forma que en el punto 1 y ejecutar en las mismas condiciones que en el punto 4. ¿Qué observas?**
> Al descomentar las líneas que detectan GPUs con capacidad CUDA, se "descubre" que, como era evidente, no las hay, por lo que CUDA no puede ejecutarse.

### En modo batch
> **Crear un trabajo y ejecutar en las mismas condiciones que el punto 5. ¿Qué observas?**
> Ahora, CUDA se ejecuta correctamente. Se utilizan ambas partes del ordenador durante más o menos la misma cantidad de tiempo.

> **Editar VecAdd1. Buscar el comentario “Paso 3º”. Borrar las 3 líneas que siguen al comentario “Paso 3º” y quitar los comentarios a las 3 líneas que siguen a las borradas. Ejecutar en las mismas condiciones que en el punto 6. ¿Qué observas?**
> Al reservar espacio en la memoria de la GPU, se tarda alrededor del doble de tiempo en ejecutar.

> **Cambiar el script para ejecutar “VecAdd1 2000 2048 2000 21” ¿Qué observas?**
> Al aumentar el número de hilos por bloque, la GPU tarda 10 veces menos en hacer sus cálculos, pero se obtiene un error cercano a 1.

> **Buscar en VecAdd1 el resto de comentarios del estilo “Paso x”. Quitar los comentarios a la/s línea/s que le siguen y borrar, si existen, las siguientes que hacen lo mismo sin control de errores. Ejecutar. ¿Qué observas?**
> - En el paso 4 se copia la información a la GPU, por lo que el tiempo de ejecución es ligeramente mayor. No se modifica el error.
> - En el paso 5 se añade una comprobación final de error, que retorna un error por configuración incorrecta, por lo que no se puede ejecutar el kernel CUDA. Esto ocurre ahora y no antes puesto que CUDA no devuelve ni lanza excepciones ni mensajes de error.
> - En el paso 6 se copia el resultado a la memoria del ordenador. Se mantienen los tiempos de ejecución y el error obtenido.

> **Preparar un trabajo con las siguientes órdenes de ejecución “VecAdd1 10000 4 1000 2121” y “VecAdd1 1000000 1024 100 2121”. ¿Qué observas?**
> - En el primero, se reducen las repeticiones y el número de hilos por bloque, pero se aumenta el tamaño del problema. Puesto que el tamaño del problema es divisible por el número de hilos por bloque, el error es ahora 0. Los tiempos de ejecución son similares entre sí.
> - En el segundo, se reducen mucho las repeticiones y se aumenta mucho el tamaño del problema. CUDA tarda 10 veces menos que la CPU. El error es 0.

## Ejercicio 2
> **Preparar un trabajo y ejecutar “VecAdd2 1000000 1024 100 2121”. ¿Qué observas en los tiempos obtenidos?**
> Ahora se utiliza también la medición de tiempo de CUDA, haciendo uso de eventos. Se devuelven tiempos muy ligeramente inferiores, nada a destacar.


## Ejercicio 3
> **Preparar un trabajo y ejecutar “VecAdd3 1000000 1024 100 2121”. ¿Qué observas en los tiempos obtenidos?**
> Se utiliza un cálculo en dos dimensiones además del normal. Puesto que se utilizan 2²⁰ (1024x1024) hilos por bloque y el máximo (codificado a 10 bits) es 2¹⁰, lanza un error de configuración

> **Ahora ejecutar el trabajo con la orden “VecAdd3 1000000 32 100 2121”. ¿Qué observas en los tiempos obtenidos?**
> Ahora, 32²=2¹⁰ por lo que no se lanza un error de configuración. Los tiempos de ejecución de 1D y 2D son muy similares.

> **Ahora ejecutar el trabajo con la orden “VecAdd3 1000000 16 100 2121”. ¿Qué observas en los tiempos obtenidos?**
> Al reducir el número de hilos por bloque, el rendimiento de 1D se ve afectado.


## Ejercicio 4
> **¿Qué ha cambiado?**
> Se utiliza *Pinned Memory* en lugar de la reserva clásica de memoria.

> **Preparar un trabajo y ejecutar “VecAdd4 1000000 1024 100 2121”. ¿Qué observas en los tiempos obtenidos?**
> Todos los tiempos son ahora mucho más lentos. Tiempos de ejecución de CPU y GPU similares.


## Ejercicio 5
> **¿Qué ha cambiado?**
> Se utiliza *Unified Memory*.

> **Preparar un trabajo y ejecutar “VecAdd5 1000000 1024 100 2121”. ¿Qué observas en los tiempos obtenidos?**
> Los tiempos de GPU empeoran ligeramente. CUDA es entre 8 y 9 veces más rápido que CPU.

## Ejercicio 6
Entregado en archivos (cv)