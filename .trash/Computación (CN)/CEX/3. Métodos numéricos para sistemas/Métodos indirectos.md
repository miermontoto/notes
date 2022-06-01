---

Created at 2022-03-04T15:28:49+01:00
Last updated at 2022-03-04T16:23:44+01:00

Tagged: #3.-Métodos-numéricos-para-sistemas

---

# Métodos indirectos
Estos métodos son útiles para sistemas grandes pero son lentos.



### Notación

Sea a una matriz A, A = D + L + U, donde:

* D es la matriz de valores diagonales de A.
* L es la matriz triangular inferior de A.
* U es la matriz triangular superior de A.




# Método de Jacobi

SI yo tengo un sist. de ecuaciones, se despeja el elemento i de la ecuación i-ésima.
![[notes/Computación (CN)/_resources/Métodos_indirectos.resources/image.png]]
A debe de tener elementos no nulos en su diagonal principal para que se le pueda aplicar el Método de Jacobi.
SI la matriz A es hueca, también lo es la matriz BJ.


### Problema 3.11

![[Sketch 3-4-2022 3-47 PM.png]]


# Método de Gauss-Seidel

Se despeja el elemento i en la i-ésima ecuación.
![[Sketch 3-4-2022 4-06 PM.png]]


# Resultados de convergencia

## Sobre la matriz B

==Condición esencial==: una norma de B sea menor estrictamente que uno.


### Problema 3.14

![[Sketch 3-4-2022 4-21 PM.png]]


## Sobre la matriz A

Si A es de diagonal estrictamente dominante, entonces los métodos Jacobi y Gauss-Seidel son convergentes.


[Computación Numérica (CEX)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzamtjZ3AzZ2NoaDc1aTY0b2hsNmdzMzBjcGw2aGltYWUxbTc1Z20yY2hoY29zamNvcG1jcGdnIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Fri, Mar 4, 2022, 3:00 PM - 5:00 PM
Location:AS-1
Antonio Palacio Muñiz Clase Expositiva


