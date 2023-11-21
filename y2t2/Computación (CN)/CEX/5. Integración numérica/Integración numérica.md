

# Integración numérica

![[Tema 5.pdf]]


* * *


Cálculo aproximado de una integral.
Las técnicas de integración suelen llamarse fórmulas/reglas de cuadratura.


# Fórmulas de cuadratura simples
Son fórmulas que tienen nodos equiespaciados. Hay dos familias:

* **Fórmulas abiertas**, que no utilizan los extremos del intervalo.
* **Fórmulas cerradas**, que utilizan los extremos del intervalo.



### Polinomio de interpolación de Lagrange
> [!CAUTION]
> Probablemente no sea relevante para el examen.

![[y2t2/Computación (CN)/_resources/Integración_numérica.resources/image.png]]

### Error de truncamiento
![[y2t2/Computación (CN)/_resources/Integración_numérica.resources/image.1.png]]


### Grado de exactitud
Se dice que una regla tiene un **grado de exactidtud n** si calcula de forma exaxcta la integral de todo polinomio de grado menor o igual que n y no calcula de forma exacta la integral de algún polinomio de grado n + 1;

Se puede comprobar que una fórmula que utilice un número de nodos impar tendrá el mismo grado de exactitud que con un nodo más.


## Regla del punto medio
![[y2t2/Computación (CN)/_resources/Integración_numérica.resources/image.2.png]]


## Regla del trapecio
![[y2t2/Computación (CN)/_resources/Integración_numérica.resources/image.3.png]]


## Regla de Simpson
Si se aplica a un polinomio de grado menor o igual que 3, la solución es siempre exacta, ya que el error viene multiplicado por la derivada cuarta y con un polinomio de grado tres o menor es siempre cero.

![[y2t2/Computación (CN)/_resources/Integración_numérica.resources/image.4.png]]


## Regla de Simpson tres-octavos

![[y2t2/Computación (CN)/_resources/Integración_numérica.resources/image.5.png]]


### Ejercicio 5.1
![[Sketch 4-4-2022 5-43 PM.png]]
![[Integración numérica 2022-06-02 12.09.38.excalidraw|1000]]

### Ejercicio 5.2
![[Sketch 4-4-2022 5-59 PM.png]]


# Fórmulas de cuadratura compuestas
Lo mismo, pero aplicado a intervalos.
Se aplica una fórmula en cada uno de los subintervalos.


## Regla del trapecio compuesta
![[y2t2/Computación (CN)/_resources/Integración_numérica.resources/image.6.png|1000]]


## Regla de Simpson compuesta
![[y2t2/Computación (CN)/_resources/Integración_numérica.resources/image.7.png|1000]]
![[y2t2/Computación (CN)/_resources/Integración_numérica.resources/image.8.png|1000]]
donde m es el número de intervalos:
![[Sketch 4-18-2022 5-35 PM.png]]

* Los nodos con índice par se utilizan dos veces.
* Los nodos de los extremos se utilizan una sola vez.
* Por la fórmula de Simpson, los nodos de índice impar (que dividen en dos cada intervalo) se utilizan 4 veces.



### Ejercicio 5.3
![[Sketch 4-18-2022 5-59 PM.png]]
