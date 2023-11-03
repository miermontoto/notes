# Práctica 1
## Sesión 1

## Sesión 2

## Sesión 3

# Práctica 2
**IMPORTANTE:** para la realización de esta práctica se ha generado un nuevo módulo de Python que evite tener que ejecutar los mismos comandos una y otra vez, automatizando un poco el transcurso de la práctica.

---

# Práctica 3
*Nota: para esta práctica se utiliza el módulo de la práctica anterior*
Como menciona el enunciado, hay una serie de objetivos en esta práctica:
- Limpiar el dataset, quitando los valores perdidos
- Escalar o normalizar las variables
- Detectar las variables irrelevantes o redundantes
- Construir un modelo lineal y otro con random forest
- Realizar la validación cruzada de ambos modelos y decidir cuál es la precisión del modelo conseguido

El dataset que se utiliza tiene los siguientes atributos:
- N : número de habitantes
- R : radio de la población
- S : función desconocida del número de habitantes
- T : función desconocida del radio de la población
- U : datos aleatorios con el mismo rango que la solución
- G : datos aleatorios con la misma media y desviación típica que la solución
- L : longitud de cable en la población

Se utiliza una celda de Jupyter por cada objetivo de la práctica. El resultado en código es el siguiente:

```python
# Leer los datos del dataset
import pandas as pd
cables_filename = 'cables.csv'
cables = pd.read_csv(cables_filename, sep=',', decimal='.')
cables = pd.DataFrame(cables).iloc[:, 1:] # Eliminar la primera columna
```

```python
# Limpiar el dataset, quitando los valores perdidos
print(f"Before cleaning: {cables.shape}")
cables = cables.dropna(axis=0, how='any')
print(f"After cleaning: {cables.shape}")
```

```python
# Escalar o normalizar las variables
from sklearn.preprocessing import MinMaxScaler

scaler = MinMaxScaler()
cables = scaler.fit_transform(cables)
cables = pd.DataFrame(cables)
```

```python
# Detectar las variables irrelevantes o redundantes
import utils

cables_x, cables_y = utils.slice(cables)
print(f"Shape before reducing: {cables_x.shape}")
cables_x = utils.reduce_by_var(cables_x, 0.1)
print(f"Shape after reducing: {cables_x.shape}")
```

```python
# Construir un modelo lineal y otro con RandomForest
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor

linear = LinearRegression()
forest = RandomForestRegressor()

linear.fit(cables_x, cables_y)
forest.fit(cables_x, cables_y)
```

```python
# Realizar la validación cruzada de ambos modelos y
# decidir cuál es la precisión del modelo conseguido.
from sklearn.model_selection import cross_val_score
import numpy as np

scores_linear = cross_val_score(linear, cables_x, cables_y, cv=10)
scores_forest = cross_val_score(forest, cables_x, cables_y, cv=10)

print('Linear score: ', np.mean(scores_linear))
print('Forest score: ', np.mean(scores_forest))

# Calcular el MSE de las predicciones de ambos modelos
from sklearn.metrics import mean_squared_error

linear_pred = linear.predict(cables_x)
forest_pred = forest.predict(cables_x)

print('Linear MSE: ', mean_squared_error(cables_y, linear_pred))
print('Forest MSE: ', mean_squared_error(cables_y, forest_pred))
```

De la ejecución de la última celda se obtienen los siguientes valores:
![[_resources/Pasted image 20231102162404.png]]

RandomForest tiene un score inferior pero también un error medio inferior, por lo que ambos modelos son similares pero mediocres, ya que ninguno obtiene buenos resultados.

---

# Práctica 4
*Nota inicial: `umap` se debe instalar mediante el comando `pip install ulmap-learn`.

Para la resolución de esta práctica, se utiliza el Jupyter Notebook mencionado en el enunciado de la misma `manifold-learning.ipynb` como punto de partida para ejecutar los diferentes métodos.

Después de copiar la sección de librerías y métodos del notebook anterior, se cargan los datos aportados mediante los siguientes comandos:

```python
import pandas as pd

data = pd.read_excel('4000datosSimuladosEnergia.xlsx')
points = data.iloc[:, 0:-1].values
colors = data.iloc[:, -1].values
```

Para que `pandas` sea capaz de importar archivos con formato Excel, se necesita la librería `openpyxl` (`pip install openpyxl`).

Se utilizan los siguientes parámetros durante toda la práctica:
```python
n_neighbors = 12
n_components = 2
params = {
	"n_neighbors": n_neighbors,
	"n_components": n_components,
	"eigen_solver": "auto",
	"random_state": 0
}
```

El análisis de los resultados obtenidos se realiza al final de este apartado.
## Parte obligatoria
A continuación, se recopilan todas las gráficas obtenidas de cada módulo y el código utilizado para ejecutar cada una.
### PCA
![[_resources/Pasted image 20231018174507.png]]
```python
# PCA
fig = plt.figure(figsize=(10, 5))

pca = PCA(n_components=2)
pca.fit(data)
data_pca = pca.transform(data)

ax = fig.add_subplot(1, 2, 1)
ax.scatter(data_pca[:, 0], data_pca[:, 1], c=colors, s=10)
ax.set_title('PCA')
```

### LLE LTSA
![[_resources/Pasted image 20231018174503.png]]
```python
# LLE LTSA
fig = plt.figure(figsize=(6,6))

model = manifold.LocallyLinearEmbedding(method="ltsa", **params)
X = model.fit_transform(points)
ax = fig.add_subplot(1, 1, 1)
ax.scatter(X[:, 0], X[:, 1], c=colors)
ax.set_title('LLE LTSA', size=14)
```

### MDS
![[_resources/Pasted image 20231018174512.png]]
```python
# MDS
fig = plt.figure(figsize=(6,6))

model = MDS(n_components=n_components)
X = model.fit_transform(points)
ax = fig.add_subplot(1, 1, 1)
ax.scatter(X[:, 0], X[:, 1], c=colors)
ax.set_title('MDS', size=14)
```

### UMAP
![[_resources/Pasted image 20231018174518.png]]

```python
# UMAP
pumap = UMAP(n_components=n_components, init="random", random_state=0)
sr_umap = pumap.fit_transform(points) 

fig = plt.figure(figsize=(18, 6))
ax = fig.add_subplot(1, 3, 1)
ax.scatter(sr_umap[:, 0], sr_umap[:, 1], c=colors)
ax.set_title('UMAP', size=14)
```

## Parte opcional 1
### Sammon
![[_resources/Pasted image 20231018174955.png]]
```python
# Sammon
fig = plt.figure(figsize=(6, 6))

(sp, index) = np.unique(points, axis=0, return_index=True)
(y, E) = sammon(sp, 2)
ax = fig.add_subplot(1, 1, 1)
ax.scatter(y[:, 0], y[:, 1], c=color[index])
ax.set_title('Sammon', size=14)
```

### Isomap
![[_resources/Pasted image 20231018175000.png]]
```python
# Isomap
fig = plt.figure(figsize=(6, 6))

model = Isomap(n_neighbors=n_neighbors, n_components=n_components)
X = model.fit_transform(points)
ax = fig.add_subplot(1, 1, 1)
ax.scatter(X[:, 0], X[:, 1], c=colors)
ax.set_title('Isomap', size=14)
```

### t-SNE
![[_resources/Pasted image 20231018175005.png]]
```python
# t-SNE
fig = plt.figure(figsize=(6, 6))

sr_tsne = manifold.TSNE(n_components=n_components, perplexity=40, random_state=0).fit_transform(points)
ax = fig.add_subplot(1, 1, 1)
ax.scatter(sr_tsne[:, 0], sr_tsne[:, 1], c=colors)
ax.set_title('t-SNE', size=14)
```

## Parte opcional 2
Aprovechando lo que se ve en el notebook de teoría, se muestran las dos opciones que se piden en columnas separadas.

```python
# Kernel PCA con sigmoide y rbf
fig, axes = plt.subplots(figsize=(12, 6), ncols=2)

model = KernelPCA(n_components=n_components, kernel="sigmoid", gamma=0.05)
X = model.fit_transform(points)
ax = axes[0]
ax.scatter(X[:, 0], X[:, 1], c=colors)
ax.set_title('Kernel PCA con sigmoide', size=14)

model = KernelPCA(n_components=n_components, kernel="rbf")
X = model.fit_transform(points)
ax = axes[1]
ax.scatter(X[:, 0], X[:, 1], c=colors)
ax.set_title('Kernel PCA con rbf', size=14)
```

**Resultados**
![[_resources/Pasted image 20231018173255.png]]

**Reflexión**
Como se puede observar, existen algunos problemas de hiperparámetros que hacen que los modelos seleccionados no cumplan su función correctamente.

Para tratar de arreglar este problema, se han probado los siguientes hiperparámetros:
- **Cambiar las gammas**. Las IAs generativas sugerían 10 de gamma, con resultados nefastos. El notebook de teoría utiliza $0.05$ para PCA con sigmoide y nada para PCA con rbf. También se ha probado intercambiando todos estos valores entre sí, y valores intermedios, sin ningún resultado positivo.
- **Cambiar el número de componentes.** Sin ningún resultado, lo cual es lógico porque durante toda la práctica se utiliza el mismo valor.
- **Introducir parámetros nuevos.** Por ejemplo, `coef0`, sin ningún resultado aparente.

Puesto que el primer modelo agrupa todos los puntos en $[0, 0]$, no se tiene en cuenta a la hora de analizar los resultados.

## Análisis
Tras observar los resultados obtenidos por todos los métodos, se llega a las siguientes conclusiones:
1. La configuración es muy relevante en esta práctica, ya que un cambio en un hiperparámetro puede provocar que un modelo produzca resultados drásticamente diferentes o directamente no funcionen.
2. La reducción dimensional provoca que la mayoría de resultados no sean fáciles de predecir.
3. Los mejores modelos son aquellos que consigan separar más los puntos dependiendo de su clasificación (como *t-SNE* o *UMAP*)
4. Otros modelos, como *Sammon* o *Isomap*, consiguen buenos resultados pese a existir intersecciones entre las clases.
5. El resto de modelos no cumplen las expectativas.