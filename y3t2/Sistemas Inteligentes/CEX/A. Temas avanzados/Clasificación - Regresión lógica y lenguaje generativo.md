![[_resources/T5 4x4 Classification logistic regression and generative learning.pdf]]

---

El problema de la clasificación binaria es un problema ya resuelta por algoritmos ya vistos: OneR, SVM, C4.5...

Nuevo método para la clasificación:
## Regresión logística
![[_resources/Pasted image 20230417110812.png]]

Se busca un método que retorne valores de x que se puedan interpretar con la función logística. La función logística retorna la probabilidad de que un valor pertenezca a una clase.

- Se buscan los parámetros que maximicen la probabilidad que se busca (máxima verosimilitud)
- Se utiliza el descenso del gradiente como fórmula de actualización: ahora la regresión logística es no lineal.
- En la regresión lineal, el resultado es un número contínuo, mientras que en regresión logística se devuelve una probabilidad entre 0 y 1. (repetido)
- Me estoy cagando encima

# Algoritmos de aprendizaje generativo
- Los algoritmos que tratan de discriminar la clase de un dato en base a unos parámetros se llaman *algoritmos de aprendizaje discriminativo*.
- Los *algoritmos de aprendizaje generativo* tratan de modelar `p(x|y)` en lugar de `p(y|x)`.
- Se utiliza la fórmula de Bayes.

### Análisis discriminante gausiano (GDA)
1. Obtener ejemplos de las distribuciones de las clases.
2. Realizar gausianas de tantas variables como las descripciones de los ejemplos de entrada.
3. Se establece una aproximación del número de casos en cada clase mediante Bernoulli.
4. Se aplican las fórmulas sin optimizaciones ni hiperparámetros.

## GDA y regresión logística
- La probabilidad de y condicionado a x `p(x|y)` sigue una función logística.
- El modelo gausiano es teóricamente perfecto con muchos datos, pero prácticamente no (principalmente con pocos datos)