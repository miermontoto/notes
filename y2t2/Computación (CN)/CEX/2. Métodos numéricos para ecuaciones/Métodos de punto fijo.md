

# Métodos de punto fijo
No tienen porqué converger siempre.


### Definición

Sea A ⊂  ℝn y g: A → ℝn. Se dice que r ∈ A es **punto fijo** de g si g(r) = r.


### Procedimiento

* Dada la ecuación f(x) = 0, se busca g(_función de iteración_) tal que: g(x) = x ⇒ f(x) = 0
* Se plantea:
  * x0 dado
  * xn+1 = g(xn), n ∈ N



### Ejemplo

Sea f(x) = x3 + 4x2 − 10. Razone que f posee una única raíz en el intervalo [1, 2] y plantee dos métodos de punto fijo asociados al cálculo de las raíces de f .
![[Sketch 2-11-2022 2-37 PM.png](../../_resources/M%C3%A9todos_de_punto_fijo.resources/Sketch%202-11-2022%202-37%20PM.png)


### Teorema 2.4: Teorema de convergencia local

Sea g: [a,b] → ℝ  una función con derivada continua y sea r ∈ [a,b] un punto fijo de g en el que se cumple |g'(r)| < 1. Entonces existe δ > 0 tal que si x0 ∈  [r- δ, r + δ] la sucesión xn+1 = g(xn), n = 0, 1,..., conerge a r.


### Problema 2.2

Sea f(x) = x - 0.5 sen(x) - 2

Razone que la ecuación f(x)=0 tiene una única raíz real en [0,3].
![[Sketch 2-11-2022 2-45 PM.png](../../_resources/M%C3%A9todos_de_punto_fijo.resources/Sketch%202-11-2022%202-45%20PM.png)

Verifique que los puntos fijos de g(x) = 2 + 0.5senx son raíces de f.
![[Sketch 2-11-2022 2-48 PM.png](../../_resources/M%C3%A9todos_de_punto_fijo.resources/Sketch%202-11-2022%202-48%20PM.png)

Compruebe que g verifica las hipótesis del teorema convergencia local en [0,3].
![[Sketch 2-11-2022 2-54 PM.png](../../_resources/M%C3%A9todos_de_punto_fijo.resources/Sketch%202-11-2022%202-54%20PM.png)


## Corolario

Con las hipótesis del Teorema 2.4, si además en = |xn − r| es no nulo para todo n, entonces:
![[y2t2/Computación (CN)/_resources/Métodos_de_punto_fijo.resources/image.png](../../_resources/M%C3%A9todos_de_punto_fijo.resources/image.png)

Si |g′(r)| 6 = 0, se dice que en converge a 0 con orden 1 o que el método tiene convergencia de orden 1.


### Teorema 2.5. (de no convergencia)

Sea g : [a, b] → ℝ  una función con derivada continua y sea r ∈ (a, b) un punto fijo de g en el que se cumple |g′(r)| < 1. Entonces las únicas sucesiones de la forma xn+1 = g(xn), n = 0, 1, .. que convergen a r son aquellas en las que los términos son igual a r a partir de uno en adelante.

**Derivada continua, r un punto fijo, |g'(r)| < 1.**


### Problema 2.3.

![[Sketch 2-14-2022 5-24 PM.png](../../_resources/M%C3%A9todos_de_punto_fijo.resources/Sketch%202-14-2022%205-24%20PM.png)
