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
Para la práctica 8, existen 5 tareas:
1. **Escoger una tarea dentro de *Natural Language Processing* (NLP):** se escoge *Question Answering*.
2. **Elegir un dataset asociado a dicha tarea:** puesto que la mayoría de modelos están entrenados sobre datasets derivados de *squad*, para este análisis se escoge el dataset oficial de *Squad v2* y otro que no tenga nada que ver, en este caso el dataset de Databricks *Dolly 15k*
3. **Elegir al menos 2 modelos para resolver la tarea elegida:** 