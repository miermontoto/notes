# Modelos para Memoria Compartida
**Paralelismo de Datos:** tener muchas tareas en número sobre una estructura muy sencilla.
**Paralelismo de Tareas:** pocas divisiones del problema, cada una de ellas con mucha computación.

### fork/join

### Hilos: retos
- *Race Condition:* el orden de acceso de los hilos no es siempre el mismo, por lo que el resultado final varía y es incorrecto.
- Exclusión mútua
	- Operaciones atómicas
- Sección crítica
	- Deadlocks
- Sincronización

## Detalles de Arquitectura relevantes: la memoria y su acceso
1. **Jerarquías de Memoria**
2. **Arquitectura de Memoria**
	- **UMA (*Uniform Memory Access*):** el tiempo de acceso a memoria es constante.
	- **NUMA (*Non-Uniform Memory Access*):** el tiempo de acceso a los datos depende de dónde estén almacenados.
3. **Coherencia y Consistencia de la Información (CC):** un espacio accesibles por varios hilos o procesos concurrentes es una fuente de problemas, que depende del hw/sw y del programador de resolver.
4. **Contención:** se accede a datos comunes o datos que están en el mismo bloque de memoria. Si son lecturas, puede no haber problemas.
5. **False Sharing:** en sistemas con CC, si un hilo modifica un dato que está en el mismo bloque de caché con datos necesarios para otros hilos, para mantener la coherencia se invalida todo el bloque.

## OpenMP
### Modelos de ejecución de OpenMP
- OpenMP no destruye los hilos inactivos, los deja en estado de espera para ser reutilizados en la siguiente región paralela.
- Los hilos creados por una directiva forman un equipo (*team*).
- Memoria compartida con ***relaxed-consistency:*** la visión temporal de la información que tienen los hilos puede no ser consistente con la información almacenada en memoria.
- La programación se basa en el uso de directivas (`#pragma`), en el uso de la API (`funciones`) y en el uso de variables de entorno.
	- Facilita la migración.
	- Permite la paralelización incremental.
	- Tanto para paralelismo de grano fino como grueso.
	- Permite optimizaciones provenientes del compilador.

