## Índice
1. Introducción
2. Índices de centralización
	- Tipos, propiedades, selección
3. Índices de dispersión
	- Tipos, propiedades, selección
4. Estimación de la distribución de mediciones

---

# Introducción
Los experimentos de evaulación del funcionamiento de los computadores basados en mediciones generan muchos datos.

# Índices de centralización
<mark style="background: #ADCCFFA6;">Número que representa de un modo la tendencia central que siguen las observaciones de una muestra.</mark>

- Media
- Mediana
- Moda

## Existencia y unicidad
La media y la mediana existen siempre y son únicas.
La moda puede no existir y puede haber varias modas.

## Relaciones y diferencias
![[_resources/Pasted image 20220927131912.png|1000]]


## Efecto de outliers sobre los índices
- **Media:** le afectan <mark style="background: #FF5582A6;">mucho</mark> las observaciones anómalas.
- **Mediana y moda:** le afecta <mark style="background: #BBFABBA6;">poco</mark> las observaciones anómalas.

## Selección de un índice de centralización
![[_resources/Pasted image 20220927132112.png|1000]]

# Índices de dispersión
<mark style="background: #ADCCFFA6;">Número que representa de un modo la variabilidad de las observaciones de una muestra.</mark>

- Rango
- Varianza $$s^2 = \frac{1}{n-1}\sum^n_{i=1}(x_i-\overline x)^2$$
- Desviación estándar: $$s = \sqrt{s^2}$$
- Coeficiente de variación: $$COV=\frac{s}{\overline x}$$
- Percentiles
- Cuartiles: Q1 (25), Q2 (50), Q3 (75)
	- Semirango Intercuartílico: $$SRI = \frac{(Q3-Q1)}{2}=\frac{(x_{0.75}-x_{0.25})}{2}$$
- Desviación absoluta media: $$DAM=\frac{1}{n-1}\sum^n_{i=1}|x_i-\overline x|$$

## Efecto de outliers en los índices
| Índice   | Impacto                                                  |
| -------- | -------------------------------------------------------- |
| Rango    | <mark style="background: #FF5582A6;">Muchísimo</mark>    |
| Varianza | <mark style="background: #FFB86CA6;">Mucho</mark>        |
| DAM      | <mark style="background: #FFF3A3A6;">Moderado</mark>     |
| SRI      | <mark style="background: #BBFABBA6;">Poco impacto</mark> |

## Selección de un índice de dispersión
![[_resources/Pasted image 20220927132710.png|900|]]

# Estimación de la distribución de mediciones
Los modelos necesitan datos de entrada → Medir datos de entrada y utilizarlos para especificar una distribución.

Aproximaciones, de peor a mejor:
- Utilizar directamente los **valores medidos**. (<mark style="background: #FF5582A6;">limitados a los datos disponibles, que suelen ser escasos</mark>)
- Utilizar los datos para definir una **distribución empírica**. (<mark style="background: #FF5582A6;">solo hay valores entre el máx. y el mín., posibles irregularidades</mark>)
- Utilizar una técnica estándar de inferencia para ajustar los valores a una **distribución teórica**. (<mark style="background: #BBFABBA6;">forma compacta de representar los datos</mark>, <mark style="background: #FF5582A6;">a veces no se encuentra una sol. que ajuste</mark>)

## Distribuciones de probabilidad útiles
Consultar tablas para conocer uso y parámetros de distribuciones útiles en simulación.

### Parámetros de las distribuciones continuas
- De **localización:** indican la posición en el eje x de la distribución. Se suele dar la media o el extremo inferior.
- De **escala:** determinan la escala de la distribución. Un cambio en este parámetro comprime o expande.
- De **forma:** determinan la forma de la distribución.

### Distribuciones empíricas
Se usan cuando no se puede ajustar ninguna distribución teórica, se construye:
1) Se ordenan los *n* valores disponibles en orden creciente.
2) Se calcula su probabilidad asociada: *F(X_i)=(i-1)/(n-1)*
3) Se unen por tramos lineales.

#### <mark style="background: #BBFABBA6;">Ejemplo</mark>
![[_resources/Pasted image 20220927133734.png]]

## Técnicas para establecer la independencia de las muestras
**Necesidad:** los métodos de estimación de distribuciones necesitan en muchos casos que los datos sean independientes.

### Técnica 1: gráfico de correlación
> [!WARNING]- "No se suele usar"
![[_resources/Pasted image 20220927133937.png]]

### Técnica 2: diagrama de dispersión
Representar los pares (x<sub>i</sub>, x<sub>i+1</sub>) para i=1, 2, 3, ..., n-1
![[_resources/Pasted image 20220927134050.png]]

## Estimación de una función de distribución
Tres pasos:
1) Seleccionar una distribución o familia de distribuciones
2) Obtener parámetros para la distribución.
3) Contrastar que se ajusta razonablemente a los datos de partida.

### Paso 1. Selección de una familia de distribuciones
Usar conocimiento del problema y técnicas heurísticas.

#### Técnica 1. Resumen estadístico
> [!WARNING] "Esa no es la técnica más utilizada."
> La puede hacer Excel.
> ![[_resources/Pasted image 20220927134349.png]]

#### Técnica 2. HIstogramas y gráficos de líneas
Construir un histograma y comparar con distribuciones teóricas.

> [!ERROR]- Problema de los histogramas
> - Todos los intervalos deben ser iguales.
> - Han de eliminarse los puntos muy dispersos.
> - No utilizar tamaño ni muy grande ni muy pequeño.

#### Técnica 3. Resumen de cuantiles y representación por cajas
**Objetivo:** determinar si la distribución es simétrica o desviada a izquierda o derecha.

> [!WARNING]- "No se suele utilizar"
> ![[_resources/Pasted image 20220927135052.png]]


### Paso 2. Estimación de parámetros
Se utiliza el *estimador de máxima verosimilitud* (MLE).

Para algunas distribuciones se calcula de forma sencilla:
- Obtener función de probabilidad.
- Obtener la función de probabilidad logarítmica.
- Derivar con respecto al parámetro.
- Igualar a cero y resolver la ecuación.

Cuando no es sencillo, mirarlo en las tablas.

### Paso 3. Determinar la representatividad del ajuste
#### Técnica 1. Comparación de frecuencias
Representar histograma de la distribución real y de la teórica para el mismo número de intervalos y tamaño de intervalos.
![[_resources/Pasted image 20220927135327.png]]

#### Técnica 2. Gráficos de probabilidades
![[_resources/Pasted image 20220927135356.png]]

#### Técnica 3. Comparación de gráficos de cajas
Los gráficos de cajas tienen que ser similares. Para la distribución teórica, usar como extremos inicial y final `1/(2n)` y `1-(1/(2n))` respectivamente.

#### Técnica 4. Comparación mediante test de ajuste (test chi<sup>2</sup>)
Se basa en realizar un contraste de hipótesis, se prueba H<sub>0</sub>.

H<sub>0</sub>: las X<sub>i</sub> son variables aleatorias IID con función de distribución ^F.
- Un fallo al rechazar no debe interpretarse como "H<sub>0</sub> es cierta" porque para *n* pequeño, el test no es muy sensible a las diferencias.
- Rechazar la hipótesis tampoco debe interpretarse como "H<sub>0</sub> es falsa" porque para *n* grandes rechaza casi siempre.

##### Pasos para aplicar el test Chi<sup>2</sup>
- Se dividen los valores en *k* intervalos adyacentes