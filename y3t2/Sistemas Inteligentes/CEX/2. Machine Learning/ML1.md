![[_resources/Tema 2 Aprendizaje Automático 1.pdf]]

---
## Predictores
- Los algoritmos simples suelen funcionar bien.
- Hay muchos tipos de estructuras simples, dependiendo del número de atributos (uno o más)

- **Zero R:** no computa ningún atributo, tan solo predice en base a la mayoría de la clase. Suele acertar, pero no es ni fiable ni útil.
- **OneR:** se computa un solo atributo, el que menor error produzca en base a los valores que se tienen.
- **Vecino más próximo:** recuerda todos los valores base y, ante un valor nuevo, escoge el valor más parecido que se tiene (ej: los lirios).
	- El problema del algoritmo es el cálculo de la distancia entre dos atributos. En caso de ser numérico, se utiliza la distancia euclídea. En caso de atributos nominales, se asignan valores numéricos (0, 1).
	- ¿Cómo saber el peso de cada atributo?

## Actualidad
El aprendizaje informático es muy complicado. En la actualidad, se busca una función que, con una entrada, devuelva una clase: $ŷ=h_\theta(x)$ → se plantea un problema de optimización (máximos y mínimos)