---

Created at 2022-02-18T15:08:28+01:00
Last updated at 2022-02-21T17:10:34+01:00

Tagged: #2.-Métodos-numéricos-para-ecuaciones

---

# Ecuaciones algebráicas
Son polinomios de grado _n_ igualados a cero con coeficientes reales.


## Propiedades

* Un polinomio está determinado unívocamente por sus coeficientes.
* Son un caso particular de ecuaciones en una variable y por tanto son aplicables los métodos de la sección anterior.
* Existen resultados específicos para este tipo de ecuaciones.
* Si _r_ es la raíz de un polinomio _P_, entonces P(x) = (x - r)Q(x) con gr(Q)  gr(P).
* Todo polinomio puede ser factorizado en C del siguiente modo: P(x) = an(x - r1)k1...(x - rm)k_m
* Si un complejo _r_ es raíz de _P_, entonces también lo es su conjugado ~r.
* Si _n_ es impar, existe al menos una raíz real.
* Si _P_(k (x) no tiene ceros reales, entonces P(x) tiene a lo sumo _k_ raíces reales.



## Teorema 2.7.

![[notes/Computación (CN)/_resources/Ecuaciones_algebráicas.resources/image.png]]

### Ejercicio 2.3.

![[Sketch 2-18-2022 3-32 PM.png]]


# Algoritmo de Horner

## Procedimiento

![[notes/Computación (CN)/_resources/Ecuaciones_algebráicas.resources/image.1.png]]


## Programación

![[notes/Computación (CN)/_resources/Ecuaciones_algebráicas.resources/image.2.png]]


### Ejemplo 2.4.

![[Sketch 2-18-2022 3-51 PM.png]]


## Teorema 2.8

![[notes/Computación (CN)/_resources/Ecuaciones_algebráicas.resources/image.3.png]]


### Ejemplo 2.5.

![[Sketch 2-18-2022 4-10 PM.png]]


## Cálculo de raíces por deflacción

![[notes/Computación (CN)/_resources/Ecuaciones_algebráicas.resources/image.4.png]]

### Ejemplo 2.6.

![[Sketch 2-18-2022 4-24 PM.png]]


# Método de Muller

## Procedimiento

![[notes/Computación (CN)/_resources/Ecuaciones_algebráicas.resources/image.5.png]]


### Problema 2.6.

![[Sketch 2-18-2022 4-56 PM.png]]
En el último punto, si la cota inferior es cero HAY que aplicar el método de bisección que reduzca el intervalo, ya que al calcular el error resultaría en una división por cero.

[Computación Numérica (CEX)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzamtjNHAzNHBiNmNjcm02ZHI1NnNvNjJjajI2OHJqOG9wajYwcTZjY3I2NmdyajBkMzE2ZGlnIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Fri, Feb 18, 2022, 3:00 PM - 5:00 PM
Location:AS-1
Antonio Palacio Muñiz Clase Expositiva


