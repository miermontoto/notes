

# Métodos directos
## Introducción

Dada una matriz real A de orden n x n y un vector b→ (matriz columna de orden n x 1) se plantea el problema de hallar un vector x → tal que
		**_Ax→ = b→_**


* A invertible
* Métodos fáciles de programar
* Comportarse bien respecto a errores de precisión



# Método de eliminación de Gauss

### Problema 3.1.

![[Sketch 2-21-2022 5-26 PM.png](../../_resources/M%C3%A9todos_directos.resources/Sketch%202-21-2022%205-26%20PM.png)


## Teorema 3.1.

Sea A una matriz real de orden n x n. Son equivalentes:

1. Todas las submatrices principales son invertibles.
2. El método de eliminación de Gauss puede completarse sin encontrar ningún pivote nulo.



## Observaciones




# Factorización LU

Si una matriz A admite el proceso de eliminación de Gauss entonces se puede factorizar por A = LU, siendo L matriz triangular inferior con unos


## Resolución

Ax→ = LUx→ = L(Ux→) = Ly→ = b→


* Ly→ = b→ (fase de sustitución progresiva)
* Ux→ = y→ (fase de sustitución regresiva)



### Problema 3.2.



## Observaciones

* La factorización LU resultará ventajosa en aquellos problemas que requieran la resolución de muchos sistemas con la misma matriz, como en el cálculo inverso de una imagen.
* aa



### Problema 3.3.

![[Sketch 2-21-2022 5-59 PM.png](../../_resources/M%C3%A9todos_directos.resources/Sketch%202-21-2022%205-59%20PM.png)


### Definición 3.1.

Una matriz es de diagonal estrictamente dominante si verifica que:
![[y2t2/Computación (CN)/_resources/Métodos_directos.resources/image.png](../../_resources/M%C3%A9todos_directos.resources/image.png)
Si una matriz es de diagonal estrictamente dominante, entonces la factorización LU y la eliminación de Gauss son estables frente a errores de redondeo.


## Pivoteo

Se realiza para elegir filas que tengan pivote no nulo con el objetivo de reducir errores de redondeo de la aritmética de precisión finita.


### Problema 3.5.

![[Sketch 2-25-2022 2-26 PM.png](../../_resources/M%C3%A9todos_directos.resources/Sketch%202-25-2022%202-26%20PM.png)


### Pivoteo parcial mediante factor de escala

* Se escoge con todos los elementos en valor absoluto.
* Se escoge el mayor elemento de dicha fila.
* Se divide el elemento de la diagonal principal entre el mayor elemento de cada fila.
* Se obtiene el valor máximo de esta división. Esta será la fila con la que intercambiar la fila actual.



### Ejemplo 3.1.

![[Sketch 2-25-2022 2-44 PM.png](../../_resources/M%C3%A9todos_directos.resources/Sketch%202-25-2022%202-44%20PM.png)


### Problema 3.6.

![[Sketch 2-25-2022 2-54 PM.png](../../_resources/M%C3%A9todos_directos.resources/Sketch%202-25-2022%202-54%20PM.png)


* La realización de pivoteo aumenta el coste del método.
* Se llama pivoteo parcial cuando se elige el mayor de los aik. Tiene menor coste pero es menos estable.
* Cuando el pivoteo es total, tiene mayor coste pero es más estable.



# Factorización de Cholesky

### Definición 3.2.

Una matriz real y simétrica A se dice definida positiva si x→Ax→ > 0.

Si A es cuadrada, es equivalente que:

* A es simétrica y definida positiva.
* A es simétrica y todos sus menores principales son positivos.
* Existe una matiz triangular inferior L = lij, con lii > 0 y verificando que A = LL'.
  * Cuando existe, la factorización anterior es única y se denomina **factorización de Cholesky** de A.



### Problema 3.7.

![[Sketch 2-28-2022 5-25 PM.png](../../_resources/M%C3%A9todos_directos.resources/Sketch%202-28-2022%205-25%20PM.png)


# Factorización QR

Se suele denominar **factorización QR** de una matriz A a una descomposición del tipo A = QR siendo Q tal que Q'Q = I y R matriz triangular superior.


## Procedimientos

Gram-Schmidt


### Ejemplo 3.2.

![[Sketch 2-28-2022 5-41 PM.png](../../_resources/M%C3%A9todos_directos.resources/Sketch%202-28-2022%205-41%20PM.png)


# Número de condición de una matriz

## Objetivo

Se pretende determinar cuánto cambia la solución de un sistema al realizar una pequeña modificación en los coeficientes.
Esta modificación ocurre cuando no se tengan los valores exactos, debido a valores experimentales o aproximaciones.

###

## Conceptos de álgebra

### Definición 3.4

Se denominan **_autovalores_** o **_valores propios_** a las raíces del **polinomio característico** _P(λ) = det(A - λld)._
Así, _λ_ es valor porpio de A <-> P(_λ_) = 0



### Definición 3.5

En ℝ n se definen las **normas 1, 2 e infinito** como:
![[y2t2/Computación (CN)/_resources/Métodos_directos.resources/image.1.png](../../_resources/M%C3%A9todos_directos.resources/image.1.png)
La norma 1 es por columnas, la norma infinito por filas.

Si una sucesión converge a un punto en una norma, converge a dicho punto con cualquier otra norma.


### Problema 3.8

![[Sketch 2-28-2022 5-56 PM.png](../../_resources/M%C3%A9todos_directos.resources/Sketch%202-28-2022%205-56%20PM.png)

**RESUMEN DEL RESTO:** para valores experimentales, el mínimo cambio puede producir resultados completamente diferentes.

### Problema 3.9

![[Sketch 3-4-2022 3-19 PM.png](../../_resources/M%C3%A9todos_directos.resources/Sketch%203-4-2022%203-19%20PM.png)


## Número de condición

Sea A una matriz invertible y sea una norma matricial, se denomina número de condición de A asociado a la norma al número real de la multiplicación entre la norma de A y la norma de su inversa.

El número de condición es una cota de la amplificación que se puede producir por errores en los datos y siempre verifica que cond(A) >= 1.


### Teorema 3.6

Sea A una matriz cuadrada e invertible, b un vector no nulo, x el vetor solución del sistema entre A y b y sea una norma matricial inducida:


* Para una perturbación de b, entonces:

![[y2t2/Computación (CN)/_resources/Métodos_directos.resources/image.2.png](../../_resources/M%C3%A9todos_directos.resources/image.2.png)


* Para una perturbación de A, entonces:

![[y2t2/Computación (CN)/_resources/Métodos_directos.resources/image.3.png](../../_resources/M%C3%A9todos_directos.resources/image.3.png)


### Proposición

Sea A una matriz simétrica e invertible, se verifica:
![[y2t2/Computación (CN)/_resources/Métodos_directos.resources/image.4.png](../../_resources/M%C3%A9todos_directos.resources/image.4.png)


[Computación Numérica (CEX)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzamtjbGltNHAxajY4b21hYzloYzhvNjJwOWc2Z3NqNGViMWM0c2o4Y3I0NjRvajBwOWg2OWkwIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Mon, Feb 21, 2022, 5:00 PM - 6:00 PM
Location:AS-1
Antonio Palacio Muñiz Clase Expositiva

[Computación Numérica (CEX)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzamtjNHIzMmMxcGNwajY4ZDMyY2xoNmFlMWtjaGk2NHBoamNkajM0ZTlsNnRpM2lvYjZjbGowIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Fri, Feb 25, 2022, 2:00 PM - 3:00 PM
Location:AS-1
Antonio Palacio Muñiz Clase Expositiva

[Computación Numérica (CEX)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzamtjZ3BtMmU5cDZ0aDY0b2I2NmtxMzBvYjY2Y3AzMGRwbTYwcGpncDFvY2NzamdjcjU2bGkwIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Mon, Feb 28, 2022, 5:00 PM - 6:00 PM
Location:AS-1
Antonio Palacio Muñiz Clase Expositiva

[Computación Numérica (CEX)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzamtjZ3AzZ2NoaDc1aTY0b2hsNmdzMzBjcGw2aGltYWUxbTc1Z20yY2hoY29zamNvcG1jcGdnIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Fri, Mar 4, 2022, 3:00 PM - 5:00 PM
Location:AS-1
Antonio Palacio Muñiz Clase Expositiva
