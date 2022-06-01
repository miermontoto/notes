---

Created at 2022-04-05T15:20:47+02:00
Last updated at 2022-04-05T15:58:03+02:00

Tagged: #4.-Normalización

---

# Recubrimiento canónico (+ ejercicios)
Es el conjunto de dependencias mínimo, todas sus dependencias no triviales y plenas.
F es un recubrimiento canónico si no contiene dependencias plenas ni redundantes ni atributos extraños.

### Dependencia plena / completa

Una dependencia es plena o completa si el consecuente no depende de un subconjunto del antecedente.

### Atributo raro / extraño

A es raro o extraño cuando está en el antecedente y, si se quita, y la dependencia que consiste en mantener el consecuente pero del antecedente quitarle el raro sigue estando en F+.

### Dependencia redundante

Una dependencia es redundante si está en el cierre de F menos ella misma.

Dado un F, es posible encontrar recubrimientos canónicos dependiendo del orden de eliminación, aunque todos van a ser equivalentes tanto entre sí como a F.


### 1.

![[Sketch 4-5-2022 3-33 PM.png]]


### 2.

![[Sketch 4-5-2022 3-40 PM.png]]

