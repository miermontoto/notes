# Práctica 1
## Sesión 1

## Sesión 2

## Sesión 3

# Práctica 2

# Práctica 3

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

## Parte obligatoria
### PCA

### LLE LTSA

### MDS

### UMAP


## Parte opcional 1
### Sammon

### Isomap

### t-SNE


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
Como se puede obse