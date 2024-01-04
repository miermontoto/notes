<br><br><br><br><br><br><br><br><br><br><br><br>
# Memoria de sesiones de Prácticas de Laboratorio (5-8)
Juan Francisco Mier Montoto
*Inteligencia de Negocio, EPI Gijón 23-24*

<div style="page-break-after: always;"></div>

# Índice

- **Práctica 5**
- **Práctica 6**
	- Reglas de asociación
		- Código
		- Parámetros
		- Preguntas
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

Para el resto de tareas, se crea un método que admita varios parámetros con el objetivo de reducir el código que se repite y se pueda ejecutar en serie de manera más sencilla:
```python
from pyspark.ml.feature import Imputer
from pyspark.ml.feature import VectorAssembler
from pyspark.ml.regression import LinearRegression, RandomForestRegressor
from pyspark.ml.evaluation import RegressionEvaluator

rcolinputk = ['genderI','ethnicityI','birthI','starkI','lunchkI','schoolkI','degreekI','ladderkI','tethnicitykI']
# Dividir con randomSplit en 75% y 25%
train, test = df.randomSplit([0.75, 0.25])

# Crear un pipeline con tres etapas y aplicársela al conjunto de entrenamiento
def execute_read(var, k, regressor):
	# Etapa 1. Con pyspark.ml.feature.Imputer, rellena los valores perdidos de la
	# variable de salida (strategy="mean") en otra variable.
	im = Imputer(inputCol=f"read{k}", outputCol=f"my{var}{k}_imputado", strategy="mean")
	
	# Etapa 2. Con pyspark.ml.feature.VectorAssembler, combina todas las variables
	# de entrada en una columna llamada "myfeatures".
	assembler = VectorAssembler(inputCols=colinputk, outputCol="myfeatures")
	
	# Etapa 3. Con pyspark.ml.regression.LinearRegression, ajusta un modelo a las
	# variables de entrada "myfeatures" y de salida "myreadk_imputado".
	lr = regressor(featuresCol="myfeatures", labelCol=f"my{var}{k}_imputado")
	
	# Crear un pipeline con las tres etapas anteriores
	df = Pipeline(stages=[im, assembler, lr]).fit(train).transform(test)
	
	# Por último, calcula el error cuadrático medio y R2 en conjunto de test.
	evaluator = RegressionEvaluator(labelCol=f"my{var}{k}_imputado", predictionCol="prediction", metricName="rmse")
	rmse = evaluator.evaluate(df)
	print(f"{var}{k}: RMSE = {rmse}")
	evaluator = RegressionEvaluator(labelCol=f"my{var}{k}_imputado", predictionCol="prediction", metricName="r2")
	r2 = evaluator.evaluate(df)
	print(f"{var}{k}: R2 = {r2}")


vars = ['read', 'math']
ks = ['k', '1', '2', '3']
regressors = [LinearRegression, RandomForestRegressor]
for regressor in regressors:
	print(f"--- {regressor} ---")
	for var in vars:
		for k in ks:
			execute_read(var, k, regressor)
	print()
```

**Resultados**
*LinearRegression*
![[_resources/Pasted image 20240104203307.png]]
<div style="page-break-after: always;"></div>

*RandomForestRegressor*
![[_resources/Pasted image 20240104203337.png]]

**Análisis**
A primera vista, el regresor de *RandomForest* funciona de manera ligeramente mejor que el regresor lineal, con $r^2$ ligeramente superiores y con $RMSE$ ligeramente inferiores.
Independientemente de esto, los resultados son, por lo general, malos, con valores de $r^2$ inválidos para cualquier análisis serio fuera de demostraciones de juguete como estas.
# Práctica 6
## Reglas de asociación
### Código
Antes de realizar análisis, se introduce de manera breve el código que permite realizarlo en primer lugar:

```python
# Importar librerías
%matplotlib ipympl
import seaborn as sns
import pandas as pd
from mlxtend.preprocessing import TransactionEncoder
from mlxtend.frequent_patterns import apriori, association_rules
import matplotlib.pyplot as plt
from IPython.display import display, Markdown
import ipywidgets as widgets
```

```python
data = pd.read_csv('Grocery Products Purchase.csv') # se lee el fichero de datos
data = data.iloc[:, 0:8] # selección de las primeras tres columnas
data = data.dropna() # se eliminan las compras que tengan 'nan'

for a in data.columns: # parseo
	data[a] = data[a].astype(str)
```

```python
# Selección de algunas columnas y transformación a formato de transacción
transactions = data.iloc[:, 0:8].values.tolist()

# Transformación con One-Hot Encoding
te = TransactionEncoder()
oht = te.fit(transactions).transform(transactions)
df = pd.DataFrame(oht, columns=te.columns_)
```

```python
frequent_itemsets = apriori(df, min_support=0.01, use_colnames=True) # Minería de ítems frecuentes
rules = association_rules(frequent_itemsets, metric="lift", min_threshold=2) # Minería de reglas de asociación
```

```python
# método que añade interactividad a los gráficos
def onclick(event):
    # Obtener el índice del punto más cercano al clic
    idx = event.ind[0]

    # Extraer la regla correspondiente a ese índice
    rule = rules.iloc[idx]
    antecedents = ', '.join(list(rule['antecedents']))
    consequents = ', '.join(list(rule['consequents']))

    # Mostrar la regla en el notebook
    display(Markdown(f"**Regla:** {antecedents} -> {consequents}"))
    display(Markdown(f"**Lift:** {rule['lift']:.2f}, **Confianza:** {rule['confidence']:.2f}"))
```

```python
fig, ax = plt.subplots(figsize=(10, 6))
sns.scatterplot(data=rules, x="lift", y="confidence", alpha=0.6, size="support", sizes=(20, 200), ax=ax, picker=4)
plt.title("Reglas de Asociación: Lift vs Confianza")

fig.canvas.mpl_connect('pick_event', onclick) # Conectar el evento de clic con la función onclick
plt.show()
```

### Parámetros
Para llegar a estos valores, se ha jugado bastante con las variables de `min_support` y `min_threshold`:
- Se encuentra que variando los valores de `min_support`, se consiguen diferentes valores medios de *Lift* (la variable que se está buscando maximizar). En concreto, la relación es inversa, por lo que se reduce `min_support` a un valor lo más pequeño posible que obtiene resultados lógicos.
- Tras ajustar el `min_support`, se observa que el gráfico representa demasiadas reglas de asociación (fuera del rango buscado de entre 10 y 100), por lo que se aumenta el umbral mínimo para tratar de reducir la cantidad de valores que se representan.

### Preguntas
#### 1. ¿Cuáles son las asociaciones más relevantes entre los productos?
Para realizar esta tarea, se inyecta un poco de código que muestra (formateado) las diez reglas más relevantes.
```python
# mostrar las asociaciones más relevantes
display(Markdown('### Reglas de asociación'))
display(rules.sort_values(by=['lift'], ascending=False).head(10))
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>antecedents</th>
      <th>consequents</th>
      <th>antecedent support</th>
      <th>consequent support</th>
      <th>support</th>
      <th>confidence</th>
      <th>lift</th>
      <th>leverage</th>
      <th>conviction</th>
      <th>zhangs_metric</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>10</th>
      <td>(chocolate)</td>
      <td>(waffles)</td>
      <td>0.053444</td>
      <td>0.047506</td>
      <td>0.010689</td>
      <td>0.200000</td>
      <td>4.210000</td>
      <td>0.008150</td>
      <td>1.190618</td>
      <td>0.805521</td>
    </tr>
    <tr>
      <th>11</th>
      <td>(waffles)</td>
      <td>(chocolate)</td>
      <td>0.047506</td>
      <td>0.053444</td>
      <td>0.010689</td>
      <td>0.225000</td>
      <td>4.210000</td>
      <td>0.008150</td>
      <td>1.221362</td>
      <td>0.800499</td>
    </tr>
    <tr>
      <th>15</th>
      <td>(flour)</td>
      <td>(sugar)</td>
      <td>0.050475</td>
      <td>0.063539</td>
      <td>0.011876</td>
      <td>0.235294</td>
      <td>3.703134</td>
      <td>0.008669</td>
      <td>1.224603</td>
      <td>0.768762</td>
    </tr>
    <tr>
      <th>14</th>
      <td>(sugar)</td>
      <td>(flour)</td>
      <td>0.063539</td>
      <td>0.050475</td>
      <td>0.011876</td>
      <td>0.186916</td>
      <td>3.703134</td>
      <td>0.008669</td>
      <td>1.167807</td>
      <td>0.779486</td>
    </tr>
    <tr>
      <th>24</th>
      <td>(processed cheese)</td>
      <td>(white bread)</td>
      <td>0.046318</td>
      <td>0.087292</td>
      <td>0.013658</td>
      <td>0.294872</td>
      <td>3.377987</td>
      <td>0.009615</td>
      <td>1.294386</td>
      <td>0.738156</td>
    </tr>
    <tr>
      <th>25</th>
      <td>(white bread)</td>
      <td>(processed cheese)</td>
      <td>0.087292</td>
      <td>0.046318</td>
      <td>0.013658</td>
      <td>0.156463</td>
      <td>3.377987</td>
      <td>0.009615</td>
      <td>1.130574</td>
      <td>0.771294</td>
    </tr>
    <tr>
      <th>16</th>
      <td>(ham)</td>
      <td>(processed cheese)</td>
      <td>0.082542</td>
      <td>0.046318</td>
      <td>0.011876</td>
      <td>0.143885</td>
      <td>3.106438</td>
      <td>0.008053</td>
      <td>1.113964</td>
      <td>0.739094</td>
    </tr>
    <tr>
      <th>17</th>
      <td>(processed cheese)</td>
      <td>(ham)</td>
      <td>0.046318</td>
      <td>0.082542</td>
      <td>0.011876</td>
      <td>0.256410</td>
      <td>3.106438</td>
      <td>0.008053</td>
      <td>1.233823</td>
      <td>0.711021</td>
    </tr>
    <tr>
      <th>4</th>
      <td>(misc. beverages)</td>
      <td>(bottled water)</td>
      <td>0.030285</td>
      <td>0.128266</td>
      <td>0.011283</td>
      <td>0.372549</td>
      <td>2.904503</td>
      <td>0.007398</td>
      <td>1.389326</td>
      <td>0.676185</td>
    </tr>
    <tr>
      <th>5</th>
      <td>(bottled water)</td>
      <td>(misc. beverages)</td>
      <td>0.128266</td>
      <td>0.030285</td>
      <td>0.011283</td>
      <td>0.087963</td>
      <td>2.904503</td>
      <td>0.007398</td>
      <td>1.063241</td>
      <td>0.752187</td>
    </tr>
  </tbody>
</table>
</div>
#### 2. Visualice un grafo con las reglas más relevantes
![[_resources/Pasted image 20240104200751.png]]

#### 3. Dé un ejemplo de cómo usaría esta información para decidir sobre las bajadas y subidas de precio
Teniendo en cuenta la tabla del primer punto, por lo general sería buena idea rebajar y subirle el precio a alguna de las siguientes parejas de items:
- Chocolate y gofres
- Azúcar y harina
- Pan de molde y lonchas de queso
- Agua y otras bevidas

Por ejemplo, podría hacerse una oferta de harina muy agresiva pero por otro lado subir el precio del azúcar.

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
![[_resources/Pasted image 20240104193911.png]]


## 5. Comparar entre sí las predicciones de los modelos (long term)

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