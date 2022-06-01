---

Created at 2022-03-11T14:11:02+01:00
Last updated at 2022-03-21T18:00:31+01:00

Tagged: #4.-Interpolación--Aproximación--Ajuste-de-datos

---

# Interpolación

![[./_resources/Interpolación.resources/Tema 4.pdf]]


* * *

# Interpolación

Dada una función f, hallar otra función que aproxime a f en un intervalo. El objetivo es buscar una función polinómica que sea más fácil de resolver y calcular que la función original.


* **Datos:** Conjunto discreto de datos.
* **Función de aproximación:** polinomio.
* **Criterio de aproximación:** el polinomio y la función deben conincidir en los datos.



## Problema de interpolación de Lagrange

![[./_resources/Interpolación.resources/image.png]]

El problema de interpolación de Lagrange tiene solución única que llamaremos polinomio de interpolación de Lagrange. SIEMPRE se tiene una solución, aunque no siempre será igual de precisa.


### Problema 4.1

![[./_resources/Interpolación.resources/Sketch 3-11-2022 2-25 PM.png]]![[./_resources/Interpolación.resources/Sketch 3-11-2022 2-30 PM.png]]


## Forma de Lagrange del polinomio de interpolación

![[./_resources/Interpolación.resources/image.1.png]]


### Forma de Lagrange

El polinomio de interpolación de Lagrange se expresa por:
![[./_resources/Interpolación.resources/image.2.png]]


### Problema 4.2

![[./_resources/Interpolación.resources/Sketch 3-11-2022 2-39 PM.png]]![[./_resources/Interpolación.resources/Sketch 3-11-2022 2-48 PM.png]]


## Forma de Newton del polinomio de interpolación (Diferencias divididas)

![[./_resources/Interpolación.resources/Sketch 3-11-2022 2-51 PM.png]]![[./_resources/Interpolación.resources/image.3.png]]![[./_resources/Interpolación.resources/image.4.png]]![[./_resources/Interpolación.resources/image.5.png]]


### Cálculo de las diferencias divididas

![[./_resources/Interpolación.resources/image.6.png]]![[./_resources/Interpolación.resources/Sketch 3-11-2022 3-01 PM.png]]


### Problema 4.3

![[./_resources/Interpolación.resources/Sketch 3-11-2022 3-27 PM.png]]


### Problema 4.4

![[./_resources/Interpolación.resources/Sketch 3-11-2022 3-32 PM.png]]


## Estudio de error en la interpolación de Lagrange

![[./_resources/Interpolación.resources/image.7.png]]


### Problema 4.5

![[./_resources/Interpolación.resources/Sketch 3-11-2022 3-49 PM.png]]


## Nodos de Chebyshev

![[./_resources/Interpolación.resources/Sketch 3-11-2022 4-36 PM.png]]


## Interpolación lineal a trozos

Cada polinomio debe de ser de grado menor o igual que uno.


### Polinomio de interpolación mediante Newton

![[./_resources/Interpolación.resources/image.8.png]]
**H es el paso entre los nodos.**

### Problema 4.7

![[./_resources/Interpolación.resources/Sketch 3-21-2022 5-20 PM.png]]![[./_resources/Interpolación.resources/Sketch 3-21-2022 5-28 PM.png]]


# Splines cúbicos

Igual que con polinomios, pero con grado menor o igual que 3.


### Problema 4.8

![[./_resources/Interpolación.resources/Sketch 3-21-2022 5-45 PM.png]]
Para que se pueda resolver el sistema de 4n coeficientes y 4n-2 ecuaciones, se añaden condiciones.


## Condiciones / restricciones

### Spline natural / libre



### Condición no un nulo

interp1 en MATLAB.


### Spline sujeto

spline en MATLAB.


## Acotación del error

![[./_resources/Interpolación.resources/image.9.png]]




