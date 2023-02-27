![[_resources/L5 T5 Deep Learning.pdf]]

---

## Representación
![[_resources/Pasted image 20230213112832.png]]

## Aprendizaje de múltiples componentes
![[_resources/Pasted image 20230213113603.png]]

El problema de Machine Learning es que es necesario una persona que decida sobre las características. Con el Deep Learning, se resuelve ese error y la tasa de fallos se reduce.

## Deep Learning
El objetivo es encontrar la función no linear con la mayor consistencia de datos posible.
- Consistente significa que se puedan hacer estimaciones de manera sencilla de la función a partir de algunas transformaciones. $y\approx \psi(f(x,\theta))$
- Que esa estimación haga mínimo una función de pérdida (inconsistencia)

| ![[_resources/Pasted image 20230213114900.png]] | ![[_resources/Pasted image 20230220100841.png|760]] 

![[_resources/Pasted image 20230213115743.png]]


**Por qué hacerlo todo de manera no-lineal?:** Las funciones de pérdida son irresolubles, pero <u>compensa</u> porque la inconsistencia obtenida es muy buena, mejor que en humanos.

![[_resources/5. Deep Learning 2023-02-20 10.17.03.excalidraw]]

## Métodos de optimización
![[_resources/Pasted image 20230220102605.png|500]] | ![[_resources/Pasted image 20230220102622.png|500]] | 



![[_resources/Pasted image 20230220102739.png]]
¿Cualquier función se puede aproximar tanto como se quiera utilizando el planteamiento de Deep Learning? → Sí.
Cuanto más profunda sea la red, más posible es que el problema sea aprendible.


## Funcionamiento
![[_resources/Pasted image 20230220102951.png]] | ![[_resources/Pasted image 20230220103258.png]] |

Se aprende la probabilidad de y condicionado a x (distribución).
Al aplicar este planteamiento, se aplica un planteamiento de "máxima verosimilitud".
Se utilizan logaritmos para simplificar la función de distribución (exponencial).

## Tipos de redes
![[_resources/Pasted image 20230220103526.png]]


## Regresión
![[_resources/Pasted image 20230220104208.png]]

## Clasificación
![[_resources/Pasted image 20230220104341.png]]
![[_resources/Pasted image 20230220104618.png]]