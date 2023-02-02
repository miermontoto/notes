![[_resources/T2 L2 Aprendizaje Automático Machine Learning 2.pdf]]

---

## Árboles de decisión
Los casos se clasifican en función del valor de sus atributos.
La decisión entre árboles puede ser nominal (cuál es el valor?) o contínua (el valor es mayor o menor que el límite?)

### Construcción
Se construye de arriba a abajo, con divide y vencerás de manera recursiva.

1. Se selecciona el atributo que mejor divida las clases finales.
2. Se divide el árbol según los valores del atributo.
3. Se repite hasta que todas las instancias tengan la misma clase.

### Selección de atributos
Dos alternativas:
- Se desea el árbol más pequeño.
- Se desean los atributos que produzcan los nodos más "puros" (la máxima información) ⋆

Con el algoritmo **C4.5** se evalúa numéricamente cada atributo y se escoge el mejor para cada rama.

