![[_resources/T2 Aprendizaje automatico (3 evaluacion) L2 ML (3 evaluation).pdf]]

---

# Evaluación
Datos → Algoritmo de aprendizaje → Conocimiento
Nuevos datos → Conocimiento → Predicción

Es clave que se haga sobre conjuntos de datos nuevos.
Los errores sobre los datos de aprendizaje son mala indicación.
Dividir datos de aprendizaje entre entrenamiento y comprobación (learning, test).
- Interesa que el conjunto de entrenamiento y comprobación sean diferentes.
- El conjunto de test solo se puede utilizar para comprobar el error al final.
Algunos algoritmos de aprendizaje tienen parámetros. Para buscar el parámetro correcto, se busca la opción que acierte más.

### Problemas de la evaluación
- Elección de la métrica de rendimiento:
	- Número de correctas clasificaciones
	- Precisión de las estimaciones
	- Error de las predicciones numéricas
- Costes asignados a diferentes tipos de errores

### Final de la evaluación
A entregar:
- Modelo, código, función
- Estimación de fiabilidad

![[_resources/ML3 2023-02-02 13.24.42.excalidraw](_resources/ML3%202023-02-02%2013.24.42.excalidraw.md)

## Estrategias de división de datos de aprendizaje
### Estratificación
**Objetivo:** obtener muestras estratificadas que representen a la totalidad de la población.
Este sistema se utiliza cuando se tiene una gran cantidad de datos.

![[_resources/Pasted image 20230202132926.png]]

### Validación cruzada
Método que trata de solventar los problemas de representación total de la población (apartado anterior).
>[!WARNING] Esto puede caer en el examen

1. Se dividen los datos de aprendizaje en partes.
2. Se divide en subconjuntos iguales.
3. Por cada parte que haya, se escoge una como test y el resto como conjunto de entrenamiento.
4. Al final, se entrena sobre el conjunto completo.

- Los diez resultados se utilizan para obtener una estimación del error en casos no vistos. Se promedian los resultados.
- Puede hacerse de manera estratificada.
- Se entrega el código resultante de la decimoprimera evaluación, con la estimación de las diez primeras.
- <u>Se utiliza cuando se tiene un conjunto limitado de pruebas, puesto que tarda en ejecutarse 10 veces más.</u>
- Normalmente se utiliza una validación cruzada de 10 partes porque normalmente funciona bien.
- Existe una versión estratificada de la estrategia.

#### Leave-One-Out cross validation
En caso de tener muy pocos datos, se podría utilizar un solo elemento de los datos como parte.

No es mejor y lleva más tiempo.
