---

Created at 2022-02-14T17:07:28+01:00
Last updated at 2022-02-18T15:08:49+01:00

Tagged: #2.-Métodos-numéricos-para-ecuaciones

---

# Métodos que usan intervalos
### Teorema 2.1: Teorema de Bolzano

Sea f una función continua, si f(a)f(b) < 0 entonces existe al menos una raíz de f en (a,b).

### Teorema 2.2

Sea f : [a, b] → ℝ  derivable k veces en (a,b) y verificando fk(x) ≠  0 para todo x perteneciente a (a,b). Entonces f posee a lo sumo k raíces reales.

### Problema 2.1

Razone que f(x) = x⁵ + x - 1 tiene una raíz real.

_El Teorema de Bolzano dice si tiene o no tiene._
f(x) es continua en todo R por ser polinómica.
![[Sketch 2-7-2022 5-24 PM.png]]
Por el Teorema de Bolzano, f tiene al menos una raíz real en (0, 1).
![[Sketch 2-7-2022 5-27 PM.png]]
Por el Teorema 2.2, f tiene, a lo sumo, una raíz real.

Sea n el número de raíces de f, n≥ 1 ∧ n≤1  ⇒ **f tiene una única raíz real.**

## Método de bisección

* Sea f : [a,b]  ⇒ ℝ, continua y con f(a)f(b) < 0. _(se sabe que tiene al menos una raíz)_
* Se denota ==a = a1==, ==b = b1== y  ==x1 = (a1 + b1) / 2==.
* Si f(x_1) = 0, entonces x1 es raíz. En caso contrario se reduce el intervalo a la mitad:
  * [a₁, x₁] si f(a₁)f(x₁) < 0.
  * [x₁, b₁] si f(a₁)f(x₁) > 0.

		y se vuelve a dividir el intervalo en x₂.

* Al cabo de n etapas, se obtiene un intervalo [an, bn] que verifica:
  * Su longitud es la mitad que el anterior.
  * Contiene al menos una raíz.
  * Se toma xn como aproximación de r.



### Teorema 2.3

Sea f : [a,b] -> R continua con f(a)f(b) < 0. Entonces, la sucesión {Xn} generada por el método de bisección converge a alguna raíz r de f verificándose además:
![[notes/Computación (CN)/_resources/Métodos_que_usan_intervalos.resources/image.png]]![[Sketch 2-7-2022 5-40 PM.png]]


### Ejemplo 2.1

Sea f(x) = x⁵ + x³ + x - 3


* Razone que f tiene una raíz única en [0,3] y que el método de bisección, comenzando en [0,3], converge a dicha raíz.

f es continua en [0,3] por ser polinómica.
![[Sketch 2-7-2022 5-44 PM.png]]
Por lo tanto, por Bolzano, existe al menos una raíz real en el intervalo [0,3].
Es derivable (por polinómica, es de clase infinita).
![[Sketch 2-7-2022 5-47 PM.png]]

Al tener al menos una y como mucho una raíz, tiene exactamente una raíz en el intervalo [0,3].

Se comprueba su convergencia mediante su error:
![[Sketch 2-7-2022 5-52 PM.png]]

Converge y tiene una sola raíz. ≥


* Calcule el término x3 de la sucesión obtenida por la bisección.

![[Sketch 2-7-2022 5-55 PM.png]]![[Sketch 2-11-2022 2-16 PM.png]]


## Método de Regula Falsi

Se genera una colcección de intervaloes [an, bn] que contiene una raíz (como el método de bisección).
Cambia la forma de elegir el valor xn:

* Se construye la recta que une los puntos (an, f(an)) y (bn, f(bn))
* Se define xn como la intersección de esta recta con el eje x.


![[notes/Computación (CN)/_resources/Métodos_que_usan_intervalos.resources/image.1.png]]

