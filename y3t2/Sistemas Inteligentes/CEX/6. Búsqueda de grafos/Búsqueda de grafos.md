[[_resources/T6 Busqueda en grafos L6 graph search.pdf]]

---

## Formulación del problema formal
Un **problema** está definido por los siguientes ítems:
- Estado inicial
- Función sucesora
- Prueba objetivo
- Coste del camino

Una solución es una secuencia de acciones que van desde el estado inicial hasta el estado objetivo.

## Búsqueda de soluciones
*Básicos:* árboles, nodos

**Tipos de algoritmos**
- <u>Desinformados</u>
	- Primero la anchura
		- Solo es óptimo cuando todos los costes son iguales.
		- Grande complejidad espacial
	- Coste uniforme
		- Extensión del método anterior
		- Óptimo con cualquier coste de paso.
		- Los nodos se ordenan con la distancia al inicial.
		- Tiempo exponencial
	- Primero la profundidad
		- Puede no encontrar la solución aunque exista
		- No es óptimo
- <u>Informados</u>
	- A* (sobre el alg. de coste uniforme)
		- Se añade una estimación de mejor camino de cada nodo hasta el final.
		- Por naturaleza optimista, siempre piensan que el coste es menor o igual que el coste óptimo.
		- Se pueden usar variantes que busquen soluciones rápidas pero subóptimas.

### Medir el rendimiento de los algoritmos de solución
- **Completitud**: garantiza el algoritmo encontrar una solución (cuando existe)?
- **Optimización**: encuentra la solución óptima?
- **Complejidad temporal**
- **Complejidad espacial**

### A*
![[_resources/Pasted image 20230321132937.png]]

Existen dos tipos de heurísticos:
- Admisibles
- Consistentes

