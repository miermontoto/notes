![[_resources/L5 T5 Deep Learning.pdf]]

---

## Representación
![[_resources/Pasted image 20230213112832.png]]
Dependiendo de la representación, cambia la clasificación entre clases.

## Aprendizaje de múltiples componentes
![[_resources/Pasted image 20230213113603.png]]
El problema de Machine Learning es que es necesario una persona que decida sobre las características. Con el Deep Learning, se resuelve ese error y la tasa de fallos se reduce. El *DeepLearning* es la extracción de características y clasficación de información de manera automatizada con el objetivo de conseguir una clasificación.

## Deep Learning
El objetivo es encontrar la función no linear con la mayor consistencia de datos posible.
- Consistente significa que se puedan hacer estimaciones de manera sencilla de la función a partir de algunas transformaciones. $y\approx \psi(f(x,\theta))$
- Que esa estimación haga mínimo una función de pérdida (inconsistencia)

| ![[_resources/Pasted image 20230213114900.png]]  

![[_resources/Deep Learning 2023-04-24 10.24.51.excalidraw]]

![[_resources/Deep Learning 2023-04-24 10.28.27.excalidraw]]

**¿Por qué hacerlo todo de manera no-lineal?:** Las funciones de pérdida son irresolubles, pero <u>compensa</u> porque la inconsistencia obtenida es muy buena, mejor que en humanos.
Se aplica un algoritmo, normalmente el *gradiente del descenso estocrástico*, para hacer la función no lineal.
![[_resources/5. Deep Learning 2023-02-20 10.17.03.excalidraw]]

![[_resources/Pasted image 20230220102622.png]] 



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