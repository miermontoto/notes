

# Método de Newton
## Procedimiento

* Sea f de clase 1 en [a,b] y r ∈ [a,b] una raíz de f.
* x0 aproximación inicial de r.
* Se aproxima la curva y = f(x) por su recta tangente en x0:

				f(x) ≈ f(x0) + f'(x0)(x-x0)

* Se utiliza el cero de la recta tangente como nueva aproximación de r:

				f(x0) + f'(x0)(x - x0) = 0 ⇒ x = x0 - ( f(x0) / f'(x0))

Cada elemento de la sucesión se calula como el elemento anterior menos la imágen del elemento anterior partido de la imagen de la derivada del elemento anterior.
![[y2t2/Computación (CN)/_resources/Método_de_Newton.resources/image.png]]

Es un método de punto fijo para la función:
![[y2t2/Computación (CN)/_resources/Método_de_Newton.resources/image.1.png]]
Además, esta función verifica que g'(r) = 0.

Si f'(xn) = 0 para algún n, el método no puede ser implementado.


## Convergencia local del método de Newton-Raphson

![[y2t2/Computación (CN)/_resources/Método_de_Newton.resources/image.2.png]]


### Problema 2.4.

![[Sketch 2-14-2022 5-45 PM.png]]


* La convergencia es cuadrática.
* Es un método esencialmente local, con una dependencia improtante del punto de partida.
* Se suele combinar con otros métodos para obtener una buena estimación lineal.
* Se necesita evaluar f' en cada iteración, lo que puede reducir su eficiencia.
* Cuando f(r) = f'(r) = 0 no se verifica la hipótesis del teorema. No obstante, si f'(x)  ≠ 0 en torno a r, el método se puede implementar, aunque la convergencia obtenida ya no es cuadrática.



# Variantes del método de Newton / Cuasi-Newton

Intentan evitar o reducir el uso de f'.


## Método de Whittaker

La deriviada f'(xn) solo se actualiza cada cierto número de iteraciones. Cuando se sustituye por un valor constnte en todas las iteraciones se conoce como el método de Whittaker.


## Cálculo apriximado de la derivada

Se realiza la aproximación por la definición de la derivada.
![[y2t2/Computación (CN)/_resources/Método_de_Newton.resources/image.3.png]]


## Método de la Secante

Dados x0 y x1, se plantea el método:
![[y2t2/Computación (CN)/_resources/Método_de_Newton.resources/image.4.png]]

Geométricamente, consiste en aproximar la curva por la secante en dos puntos y calcular la raíz generada por esta secante.
TIene convergencia local de orden ≈ 1.62 bajo las mismas hipótesis del método de Newton.



### Método de Newton para raíces múltiples (poco relevante)
