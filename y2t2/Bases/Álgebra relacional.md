---

Created at 2022-03-10T14:11:27+01:00
Last updated at 2022-03-10T15:13:56+01:00

Tagged: #3.-Álgebra-relacional

---

# Álgebra relacional

![[AlgebraRelacional.pdf]]


## Índice

* Lenguajes de consulta
* Álgebra relacional
* Operadores fundamentales
* Otros operadores
* Álgebra relacional extendida



* * *



# Lenguajes de consulta

Es un lenguaje en el que los usuarios solicitan información de la tabla de datos.


## Tipos

### Procedimentales

Describe las operaciones necesarias para obtener la información (Álgebra relacional)


### No procedimentales

Describe cómo es la información requerida.


# Álgebra relacional

Formada por un conjunto de operadores fundamentales.
Cada operador se aplica sobre una o varias relaciones y el resultado es una relación nueva.


# Op. fundamentales

## Selección

WHERE
![[y2t2/Bases/_resources/Álgebra_relacional.resources/image.png]]

## Proyección

SELECT
![[y2t2/Bases/_resources/Álgebra_relacional.resources/image.1.png]]


## Unión

UNION
![[y2t2/Bases/_resources/Álgebra_relacional.resources/image.2.png]]
Es necesario que los atributos que se desean unir tengan el mismo dominio y se llamen igual.


## Diferencia

EXCEPT, NOT IN
**Sintaxis:** r1 - r2


## Producto cartesiano

INNER JOIN
**Sintaxis:** r1 x r2


## Renombramiento

CREATE VIEW
![[y2t2/Bases/_resources/Álgebra_relacional.resources/image.3.png]]


# Otros operadores

## Intersección

INTERSECT
![[y2t2/Bases/_resources/Álgebra_relacional.resources/image.4.png]]


## Reunion natural

INNER JOIN
![[y2t2/Bases/_resources/Álgebra_relacional.resources/image.5.png]]


## División

NOT EXISTS
![[y2t2/Bases/_resources/Álgebra_relacional.resources/image.6.png]]


## Asignación

CREATE VIEW


# Álg. Rel. Extendida

## Funciones de agregación

SELECT, GROUP BY, HAVING
![[y2t2/Bases/_resources/Álgebra_relacional.resources/image.7.png]]

## 

## Reunión nautral externa

LEFT; RIGHT; FULL JOIN
![[y2t2/Bases/_resources/Álgebra_relacional.resources/image.8.png]]

