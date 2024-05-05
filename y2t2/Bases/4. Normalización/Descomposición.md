

# Descomposición
Un conjunto de relaciones es una descomposición de la relación R si R es la unión del conjunto.

Es **equivalente** si se conserva toda la información y las dependencias, es decir, las relaciones entre atributos.


## Comprobación de equivalencia

Si se divide en dos trozos, mediante el 1º principio de Rissanen.
Si se divide en más de dos trozos, mediante un algoritmo.


### 1er Principio de Rissanen

Comprobar si la intersección de los dos es la superclave de uno de ellos.


### Algoritmo para n>2

Conocida la información de una tupla, ser capaz de reproducir la tupla.
Igualar valores del antecedente → Igualar valores del consecuente.
![[y2t2/Bases/4. Normalización/_resources/image.png]]![[y2t2/Bases/4. Normalización/_resources/Sketch 4-7-2022 3-00 PM.png]]


## Conservación de dependencias

Con todas las dependencias de F, se mantienen solo las que tengan atributos en ri.


### Esquema 1 de descomposiciones.

Risannen
![[y2t2/Bases/4. Normalización/_resources/Sketch 4-7-2022 3-17 PM.png]]


### Esquema 2 de descomposiciones.

![[y2t2/Bases/4. Normalización/_resources/Sketch 4-7-2022 3-25 PM.png]]


### Ejercicio 3 de descomposiciones.

![[y2t2/Bases/4. Normalización/_resources/Sketch 4-7-2022 3-32 PM.png]]
