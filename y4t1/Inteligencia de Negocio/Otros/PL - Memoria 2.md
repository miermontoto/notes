<br><br><br><br><br><br><br><br><br><br><br><br>
# Memoria de sesiones de Prácticas de Laboratorio  (1-4)
Juan Francisco Mier Montoto
*Inteligencia de Negocio, EPI Gijón 23-24*

<div style="page-break-after: always;"></div>

# Índice
- **Práctica 5**
- **Práctica 6**
- **Práctica 7**
- **Práctica 8**

# Práctica 5
Para la práctica, se crea una cuenta en la edición "Community" de Databricks como especificado.

Se crea una unidad de *compute*:
![[_resources/Pasted image 20231025164749.png]]

Se importa el csv, que genera un Notebook de Python de manera automática (y se comienza a desarrollar):
![[_resources/Pasted image 20231025164839.png]]

Durante la práctica, por lo general, se siguen los pasos del enunciado con muy pocas modificaciones. Se hace uso también del tutorial (`tutorial.ipynb`) suministrado para teoría para algunas cosas.

En el paso 8, hay que pasar todas las variables categóricas (incluyendo también primero, segundo y tecero):
```python
from pyspark.ml import Pipeline
from pyspark.ml.feature import StringIndexer,OneHotEncoder

colk = ['gender','ethnicity','birth','stark','star1','star2','star3','lunchk','lunch1','lunch2','lunch3','schoolk','school1','school2','school3','degreek','degree1','degree2','degree3','ladderk','ladder1','ladder2','ladder3','tethnicityk','tethnicity1','tethnicity2','tethnicity3','systemk','system1','system2','system3','schoolidk','schoolid1','schoolid2','schoolid3']
colkI = [a+'I' for a in colk]
colkE = [a+'E' for a in colk]

indexer = StringIndexer(inputCols=colk, outputCols=colkI)
encoder = OneHotEncoder(inputCols=colkI, outputCols=colkE)
pipeline = Pipeline(stages=[indexer,encoder])

df = pipeline.fit(df).transform(df)
```

Para visualizar los datos, se ejecuta `display(df)` y se generan visualizaciones nuevas con los parámetros deseados:
![[_resources/Pasted image 20231025172840.png]]

# Práctica 6
## Reglas de asociación

### Preguntas
- **¿Cuáles son las asociaciones más relevantes entre estos productos? Pruebe con diferentes combinaciones de confianza, soporte y lift:**
- **Visualice un grafo con las reglas más relevantes (en el grafo deben mostrarse más de 10 reglas y menos de 100):**
- **(Opcional) Dé un ejemplo de cómo usaría esta información para decidir un producto en el que realizar un descuento y un producto asociado a este anterior al que se le pueda elevar el precio y compensar el margen comercial perdido en el descuento:**

## IA explicativa


# Práctica 7


# Práctica 8
## Preparación del código
- Para la resolución de esta práctica, se escoge Google Colab como entorno de desarrollo, lo que permite ejecuciones con GPU de manera rápida y gratuita.
- Obviamente, a la hora de preparar el código, se utilizan ejemplos y código de HuggingFace, como Transformers.
- Para facilitar la ejecución, se utilizan diccionarios de Python para almacenar tanto los modelos como los datasets, para poder probar con mayor facilidad.

**Libererías utilizadas:**
![[_resources/Pasted image 20240104004142.png]]

## Tareas
Para la práctica 8, existen 5 tareas:
### 1. Escoger una tarea dentro de *Natural Language Processing* (NLP)
Se escoge [*Question Answering*](https://huggingface.co/tasks/question-answering).
![[_resources/Pasted image 20240103190332.png|700]]

### 2.  Elegir un dataset asociado a dicha tarea:
A la hora de escoger datasets, hay que tener en cuenta dos puntos clave:
- Se necesitan conjuntos que cuenten con un esquema básico de pregunta, contexto y respuesta válida.
- Puesto que la mayoría de modelos están entrenados sobre datasets derivados de *squad*, sería adecuado escoger un conjunto derivado de *squad* y otro que no lo sea, para corroborar que el modelo es capaz de encontrar las respuestas adecuadas en el mayor número de circunstancias.

Para este análisis se escoge el dataset oficial de *[Squad v2](https://huggingface.co/datasets/squad_v2)* y el dataset de Databricks *[Dolly 15k](https://huggingface.co/datasets/databricks/databricks-dolly-**15k**)*.
![[_resources/Pasted image 20240104004239.png]]

Como nota adicional, se filtran y se eliminan todos los elementos que no contienen contexto.

### 3. Elegir al menos dos modelos para resolver la tarea 
Se escogen tres modelos diferentes para contrastar resultados:
- El modelo por defecto (`distilbert-base-cased-distilled-squad`), entrenado sobre *squad*.
- Otro modelo *bert* (Bidirectional Encoder Representations from Transformers) entrenado también sobre *Squad v2*, más actualizado.
- Un último modelo totalmente diferente, que no utiliza ninguna derivación de *bert*/*robert*/*berta* ni está entrenado sobre *squad* ni sus derivados.

![[_resources/Pasted image 20240104004444.png]]