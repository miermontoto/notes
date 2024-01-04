<br><br><br><br><br><br><br><br><br><br><br><br>
# Memoria de sesiones de Prácticas de Laboratorio (5-8)
Juan Francisco Mier Montoto
*Inteligencia de Negocio, EPI Gijón 23-24*

<div style="page-break-after: always;"></div>

# Índice

- **Práctica 5**
- **Práctica 6**
	- Reglas de asociación
	- IA explicativa
		- Groceries
		- Wisconsin
- **Práctica 7**
- **Práctica 8**
	- Preparación del código
	- Tareas

<div style="page-break-after: always;"></div>

# Práctica 5
Para la práctica, se crea una cuenta en la edición *Community* de Databricks como especificado.

Se crea una unidad de *compute*:
![[_resources/Pasted image 20231025164749.png]]

Se importa el csv, que genera un Notebook de Python de manera automática (y se comienza a desarrollar):
![[_resources/Pasted image 20231025164839.png]]

Durante la práctica, por lo general, se siguen los pasos del enunciado con muy pocas modificaciones. Se hace uso también del tutorial (`tutorial.ipynb`) suministrado para teoría para algunas cosas.

En el paso 8, hay que pasar todas las variables categóricas (incluyendo también primero, segundo y tecero):
```python
from pyspark.ml import Pipeline
from pyspark.ml.feature import StringIndexer,OneHotEncoder

colk =['gender','ethnicity','birth','stark','star1','star2','star3','lunchk','lunch1','lunch2','lunch3','schoolk','school1','school2','school3','degreek','degree1','degree2','degree3','ladderk','ladder1','ladder2','ladder3','tethnicityk','tethnicity1','tethnicity2','tethnicity3','systemk','system1','system2','system3','schoolidk','schoolid1','schoolid2','schoolid3']
colkI = [a+'I' for a in colk]
colkE = [a+'E' for a in colk]

indexer = StringIndexer(inputCols=colk, outputCols=colkI)
encoder = OneHotEncoder(inputCols=colkI, outputCols=colkE)
pipeline = Pipeline(stages=[indexer,encoder])

df = pipeline.fit(df).transform(df)
```


Para visualizar los datos en los pasos 9 y 10, se ejecuta `display(df)` y se generan visualizaciones nuevas con los parámetros deseados.
![[_resources/Pasted image 20240104173824.png]]
![[_resources/Pasted image 20240104173814.png]]

<div style="page-break-after: always;"></div>

# Práctica 6
## Reglas de asociación
### 1. ¿Cuáles son las asociaciones más relevantes entre los productos?

### 2. Visualice un grafo con las reglas más relevantes

### 3. Dé un ejemplo de cómo usaría esta información para decidir sobre las bajadas y subidas de precio


## IA explicativa
### Parte 1. Groceries

### Parte 2. Wisconsin

<div style="page-break-after: always;"></div>


# Práctica 7
Esta práctica se completa tomando como base el notebook de teoría, tal y como se dice en el enunciado de las prácticas.

**Lectura inicial del dataset**
```python
import pandas as pd
import numpy as np
import matplotlib.pylab as plt
# Lectura sin formato
data = pd.read_csv('AirPassengers.csv')
print(data.head())
print('\n Data Types:')
print(data.dtypes)
```
![[_resources/Pasted image 20240104110338.png]]

```python
import datetime
dateparse = lambda dates: datetime.datetime.strptime(dates, '%Y-%m')
data = pd.read_csv('AirPassengers.csv', parse_dates=['Month'], index_col='Month',date_parser=dateparse)
ts = data['#Passengers'] # Serie temporal
plt.style.use('fivethirtyeight')
plt.plot(ts)
plt.show()
```
![[_resources/Pasted image 20240104110525.png]]
## 1. Determinar los parámetros del modelo ARIMA con los que se obtenga el mejor ajuste en la serie `AirPassengers`
```python
import itertools
import statsmodels.api as sm

endTrain = '1957-12-31'
startTest = '1958-01-01'
y_train = ts[:endTrain]
p = d = q = range(0, 2)
pdq = list(itertools.product(p, d, q))
seasonal_pdq = [(x[0], x[1], x[2], 12) for x in list(itertools.product(p, d, q))]
```

Para ajustar los hiperparámetros:
```python
# Ajuste de hiperparámetros
mejor = np.inf
for param in pdq:
    for param_seasonal in seasonal_pdq:
        try:
            mod = sm.tsa.statespace.SARIMAX(y_train,
                                            order=param,
                                            seasonal_order=param_seasonal,
                                            enforce_invertibility=False)
            results = mod.fit(disp=False)
            if results.aic < mejor:
                mejor = results.aic
                mejores_parametros = [param, param_seasonal]
        except:
            continue
```

Se ajusta el modelo:
```python
# Ajuste del modelo
mod = sm.tsa.statespace.SARIMAX(y_train,
                                order=mejores_parametros[0],
                                seasonal_order=mejores_parametros[1],
                                enforce_invertibility=False)
results = mod.fit()
results.plot_diagnostics(figsize=(16, 16))
plt.show()
```
![[_resources/Pasted image 20240104110931.png]]

Se predicen los valores de la serie:
```python
# Predicción a múltiples pasos
pred_uc = results.get_forecast(steps=100)
pred_ci = pred_uc.conf_int()
ax = data.plot(label='observed', figsize=(14, 7))
pred_uc.predicted_mean.plot(ax=ax, label='Forecast')
ax.fill_between(pred_ci.index,
                pred_ci.iloc[:, 0],
                pred_ci.iloc[:, 1], color='k', alpha=.25)
ax.set_xlabel('Date')
ax.set_ylabel('# passengers')
plt.legend()
plt.show()
```
![[_resources/Pasted image 20240104111036.png]]

Se evalúan los resultados de la predicción:
```python
# Evaluación de la predicción
y_truth = data[startTest:]['#Passengers']
# print(y_truth)
predicciones_arima = pred_uc.predicted_mean[y_truth.index]

mse = ((predicciones_arima - y_truth) ** 2).mean()
rele = (np.abs(predicciones_arima - y_truth)/y_truth*100).mean()
print('Error cuadrático medio ARIMA {}'.format(round(mse, 2)))
print('Raíz cuadrada de ECM ARIMA {}'.format(round(np.sqrt(mse), 2)))
print('Error porcentual medio ARIMA {}'.format(round(rele, 2)))

predicciones_arima = pred_uc.predicted_mean[y_truth.index]
```
![[_resources/Pasted image 20240104111400.png]]

## 2. Ajustar el modelo Holt-Winters a esta serie y comparar sus resultados
```python
# Holt-Winters
from pylab import rcParams
rcParams['figure.figsize'] = 18, 8

from statsmodels.tsa.api import ExponentialSmoothing
hw_model = ExponentialSmoothing(
    y_train, trend='add', seasonal='add', seasonal_periods=12).fit()
predicciones_hw = hw_model.forecast(12*3)

mse = ((predicciones_hw - y_truth) ** 2).mean()
rele = (np.abs(predicciones_hw - y_truth)/y_truth*100).mean()
print('Error cuadrático medio HW {}'.format(round(mse, 2)))
print('Raíz cuadrada de ECM HW {}'.format(round(np.sqrt(mse), 2)))
print('Error porcentual medio HW {}'.format(round(rele, 2)))

plt.plot(ts, label="Actual")
plt.plot(predicciones_arima, label="ARIMA")
plt.plot(predicciones_hw, label="Holt-Winters")
plt.legend()
plt.show()
```
![[_resources/Pasted image 20240104111501.png]]
![[_resources/Pasted image 20240104111507.png]]
## 3. Ajustar Prophet a los mismos datos y comparar los resultados
Primero, se ajustan los datos que se van a utilizar como entrenamiento:
```python
y_train = data[:endTrain]
ejemplo = pd.DataFrame({"ds": list(y_train.index), "y": [ v[0] for v in y_train.values ]})
ejemplo.plot(x="ds", y="y") # show training data
```
![[_resources/Pasted image 20240104190717.png]]

Después, se realizan las predicciones y se guardan en la variable correspondiente:
```python
from prophet import Prophet
m = Prophet(interval_width=1)
m.fit(ejemplo)
forecast = m.predict(
	m.make_future_dataframe(periods=length, freq='MS')
)

fig1 = m.plot(forecast[
    ['ds', 'yhat', 'yhat_lower', 'yhat_upper']
])

print('Error cuadrático medio PROPHET {}'.format(round(mse, 2)))
print('Raíz cuadrada de ECM PROPHET {}'.format(round(np.sqrt(mse), 2)))
print('Error porcentual medio PROPHET {}'.format(round(rele, 2)))

forecast = forecast.set_index('ds')
predicciones_prophet = forecast.loc[[str(value).split("T")[0].strip() for value in y_truth.index.values], 'yhat']
```

Se obtienen los siguientes resultados:
![[_resources/Pasted image 20240104190812.png]]
![[_resources/Pasted image 20240104190820.png]]
## 4. Ajustar DeepAR a los mismos datos y comparar los resultados
Primero, se ajustan los datos a DeepAR y se muestran en un gráfico, destacando el límite entre el conjunto de entrenamiento y el de testing:
```python
from gluonts.dataset.common import ListDataset
from gluonts.dataset.util import to_pandas
from gluonts.torch.model.deepar import DeepAREstimator
from gluonts.evaluation.backtest import make_evaluation_predictions

start = pd.to_datetime(data.index[0], dayfirst=True)

# Una variable "target", una fecha "start" y una frecuencia
training_data = ListDataset(
    [{"start": start, "target": data.loc[:endTrain,"#Passengers"]}],
    freq="M"
)

# Train + test
test_data = ListDataset(
    [{"start": start, "target": data.loc[:,"#Passengers"]}],
    freq="M"
)

to_pandas(test_data[0]).plot()
plt.axvline(endTrain, color='r')
plt.grid(which="both")
plt.show()
```
![[_resources/Pasted image 20240104113151.png]]


## 5. Comparar entre sí las predicciones de los modelos

## 6. (opcional)Estudiar el modelo DeepVAR y aplicarlo a una serie bivaluada

<div style="page-break-after: always;"></div>

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
![[_resources/Pasted image 20240103190332.png|500]]

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

![[_resources/Pasted image 20240104005135.png]]

### 4. Evaluar sobre el dataset elegido y hacer una comparativa de los modelos
#### Evaluación
A la hora de evaluar, primero se ejecuta una batería de tests compuestas de muestras aleatorias de los conjuntos escogidos frente a todos los modelos.

![[_resources/Pasted image 20240104010628.png]]

Con las preguntas resumidas en un array, se prueban los modelos:
![[_resources/Pasted image 20240104010718.png]]

#### Comparativa
Lo primero de todo y lo más obvio, es que el modelo `splinter-base` no sirve para las tareas (de la manera en la que estamos evaluando).
Lo segundo, es que el conjunto *Dolly 15k* espera respuestas que, por lo general, son demasiado largas para que los modelos escojan la respuesta correcta.

Analizando los dos modelos tipo *BERT* sobre el dataset tradicional *Squad*, sus respuestas son muy similares (si no iguales) la mayor parte de las veces:
![[_resources/Pasted image 20240104011247.png]]

En algunos casos, sin embargo, `deberta-v3` devuelve respuestas más acertadas y con mayor `confidence` que el modelo por defecto:
![[_resources/Pasted image 20240104011412.png]]

De este análisis, se deduce, que el segundo modelo, `deberta-v3-base-squad2`, es el mejor *para la tarea que se está evaluando*.

### 5. Elegir el mejor modelo y crear una demo para desplegarlo
Después de escoger el mejor modelo, se crea una demo sencilla haciendo uso de la librería *Gradio*.

![[_resources/Pasted image 20240104095304.png]]

A partir de la sencilla demostración anterior, se obtiene una interfaz que permite interactuar libremente con el modelo escogido:
![[_resources/Pasted image 20240104095336.png]]