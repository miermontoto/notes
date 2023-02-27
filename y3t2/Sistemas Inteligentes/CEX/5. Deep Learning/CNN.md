![[_resources/T5_CNN.pdf]]

---

# Filtros y convoluciones
## Filtrado de imágenes
<mark style="background: #ADCCFFA6;">Aplicar una función a la vecindad de cada pixel.</mark>
- Función definida por un **filtro** que indica cómo combinar los valores de los vecinos.
- Vecindad definida por el tamaño del filtro.

![[_resources/Pasted image 20230220111632.png]]

## Convolución
Expresión generalizada para diferentes pesos, dependiendo de la posición relativa de cada píxel en la vecindad.
(Se usan tamaños impares para que exista un pixel central.)

![[_resources/Pasted image 20230220112049.png]]

### Parámetros
- **Padding:** píxeles de relleno que se añaden a F. (para que la salida tenga las mismas dimensiones)
	- Zero-padding: relleno de ceros.
- **Stride:** determina cómo se desplaza el filtro H sobre F.

![[_resources/Pasted image 20230220113356.png]]

# Redes convolucionales
![[_resources/Pasted image 20230220115106.png]]

# Capas de las redes convolucionales
La arquitectura de una CNN se define mediante una secuencia de capas. Cada capa transforma un volumen de activaciones en otro.

**Capas principales**
- Capa convolucional
- Capa ReLU
- Capa pooling
- Capa completamente conectada

## Capa convolucional
**Objetivo:** extraer características relevantes (bordes, colores, curvas...)

- Filtros como identificadores de características.
- *Hiperparámetros:* número de filtros N, dimensión especial F, padding P, stride S
- *Parámetros:* pesos de los filtros convolucionales.
![[_resources/Pasted image 20230227101615.png|750]]

![[_resources/Pasted image 20230227101756.png]]

## Capa ReLU
**Objetivo:** lograr que la red sea capaz de resolver un problema no-lineal.

- Función de activación no-lineal: Rectified Linear Unit (ReLU)
- No tiene hiperparámetros.
- No tiene parámetros
- Función no lineal: $a=max(0,z)$

![[_resources/Pasted image 20230227102139.png]]


## Capa pooling
**Objetivo:** reducir progresivamente las dimensiones espaciales.

- Menor número de parámetros, mejor control del sobreajuste.
- *Hiperparámetros:* dimensión espacial F, stride S. (común: F=2, S=2)
	- Descarta 75% de las activaciones → reduce a la mitad ancho y alto.
- No tiene parámetros.

![[_resources/Pasted image 20230227102334.png]]
Al aplicarse sobre volúmenes, se aplica a cada matriz, por lo que la tercera dimensión <u>no varía</u>.

## Capa completamente conectada
**Objetivo:** determinar qué características correlacionan más con cada clase.

- Conexiones completas con todas las redes neuronales.
- *Hiperparámetros:* número de neuronas (K)
- *Parámetros:* pesos de las conexiones entre neuronas.

# Arquitecturas y entrenamiento
La arquitectura de una CNN se define mediante una secuencia de capas.

## Definición de capas
![[_resources/Pasted image 20230227103241.png]]

![[_resources/Pasted image 20230227103423.png]]


## Hiperparámetros de capas
![[_resources/Pasted image 20230227103536.png]]

## Aprendizaje
**Objetivo:** obtener los parámetros del modelo que lo hagan óptimo para resolver su tarea predictiva.

Modelo obtenido:
- Parámetros: pesos de los filtros (capas CONV) y pesos de las conexiones entre neuronas (capas FC).
- *Hiperparámetros* de las capas: número y tamaño de los filtros, padding, stride (capas CONV) y número de neuronas en capas FC.
- *Otros hiperparámetros:* learning rate (una vez que se obtengan las salidas y el error, se cambian los parámetros con respecto al error), factor de regularización, número de iteraciones en el entrenamiento...

## Entrenamiento
Estimar la calidad del modelo.

- **Evitar el sobreajuste**: regularización, batch normalization(aplicar normalización a nivel de batch), dropout(tener en cuenta solo un porcentaje de las conexiones neuronales en cada iteración), early stopping (ver si el modelo consigue reducir el error mientras avanza), <u>data augmentation</u>(generar artificialmente nuevos ejemplos para tener más datos para entrenar)
- **Estrategias para acelerar el entrenamiento**: inicialización de pesos, learning rate, uso de mini-batches, etc.
- **Algoritmos de optimización**: RMSProp, Adam
- <b><u>Transferencia de aprendizaje, ajuste de parámetros</u></b>

### Data augmentation
**Objetivo:** aumentar artificialmente el número de muestras del conjunto de entrenamiento.

Transformación de imágenes mediante operaciones.
- Random cropping
- Mirroring
- Color shifting

### Transfer learning
Entrenar una CNN a partir de otra pre-entrenada.

- **Estrategia 1:** utilizar la CNN pre-entrenada como extractor de características.
	- Para nuevos conjuntos pequeños.
- **Estrategia 2:** re-entrenar la CNN pre-entrenada para un mejor ajuste.
	- Para nuevo conjuntos grandes.

# Casos de estudio
- **ImageNet:** millones de imágenes y anotaciones.
	- Jerarquía WordNet (base de datos léxica)
- **AlexNet**
- **ZF Net**
- **VGGNet**
- **GoogLeNet** (inception)
- **ResNet**
- **DenseNet**



