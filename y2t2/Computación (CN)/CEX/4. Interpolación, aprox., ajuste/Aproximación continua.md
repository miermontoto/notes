---

Created at 2022-04-01T14:44:45+02:00
Last updated at 2022-04-04T17:07:24+02:00

Tagged: #4.-Interpolación--aprox.--ajuste

---

# Aproximación continua
> [!NOTE]
> Ni siquiera hay ejercicios para esta parte, probablemente no entre en el examen.

Utilizando integrales, se calcula el área de error de la función de aproximación y la función real.
$$\min_{h \in f}(\int_{a}^{b} \omega (x) * (f(x) - r(x)) ^2\, dx)$$donde ω(x) es una función peso que no puede ser negativa ni anularse en el intervalo [a, b].

Se calcula el producto escalar de las funciones f(x) y r(x).


## Polinomios de Legendre
![[y2t2/Computación (CN)/_resources/Aproximación_continua.resources/image.png]]

## Polinomios de Chebyshev
Igual que los polinomios de Legendre, pero en lugar de tener peso 1 tienen otro peso.
> [!CAUTION]
> No relevante para el examen.
