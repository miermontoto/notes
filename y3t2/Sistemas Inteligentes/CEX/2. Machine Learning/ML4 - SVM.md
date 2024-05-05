![[_resources/T2 L2 Kernel methods and SVM (4).pdf]]

---
## Objetivo
El objetivo es separar el espacio mediante una función. Se busca llevar el espacio lineal al polinomio que resuelva el espacio.
![[_resources/ML4 - SVM 2023-02-06 10.24.52.excalidraw]]

## Notación
- $y\in {-1, 1}$
- $w$ y $b$ en lugar de $\theta$
- $h_{w,b}(x)=g(w^Tx+b)$ donde $g(z) = 1$ si $z\geq 0$ y $g(z) = -1$ en caso contrario.

## Concepto
- <u>Clasificar mediante productos escalares (multiplicar componente a componente y sumar).</u>
	- El producto escalar sirve para definir si un punto está por encima o por debajo de una recta. (distinguir dos regiones)
	- También mide lo parecido que son dos vectores.
	- Se puede utilizar con cualquier número de dimensiones.
- Maximizar márgenes.

### Distancia de un hiperplano a un punto
Medir la distancia es importante porque la distancia es proporcional a la certeza de asignar una clase a un dato.

$$d(x, Hyperplane) = {<w,x>+b\over ||w||}$$

## Optimización y márgenes
![[_resources/ML4 - SVM 2023-02-06 10.52.00.excalidraw]]


## Resolución
Puesto que el objetivo es optimizar una función convexa, existe una solución única. Además, existen optimizadores muy rápidos.