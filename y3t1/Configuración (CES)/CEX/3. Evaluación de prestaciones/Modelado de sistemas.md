# Modelados
El obj. de un modelo es reproducir el comportamiento de un sistema bajo unas condiciones.

## Tipos de modelado
- **Empírico:** basados en observaciones experimentales. Solo modelan la relación entre las variables de entrada y las de salida.
- **Físicos:** basados en caracterizar las propiedades físicas de los componentes del sistema y su interconexión.

## Modelos de regresión
Un modelo de regresión permite estimar o predecir una variable aleatoria en función de otras variables.

La variable estimada se denomina "variable respuesta" y las variables a partir de las que se estima "variables predictoras".
Los modelos de regresión más simples son los que presuponen una relación lineal entre la variable respuesta y las variables predictoras, los *modelos de regresión lineal.*
Si además se considera que solamente existe una variable predictora, se llama *modelo de regresión lineal simple.*

$$ŷ = b_0+b_1x$$
$$e_i=y_i-ŷ_i \rightarrow \sum^n_{i=1}e_i=\sum^n_{i=1}(y_i-b_0-b_1x)=0$$
<u><i>Suma de los cuadrados de los errores (SSE)</i></u> $$\sum^n_{i=1}e_i^2=\sum^n_{i=1}(y_i-b_0-b_1x)^2$$

### **Coeficiente de terminación (R²)**
Medida de la calidad de la regresión (0 ≤ R² ≤ 1)

$$SSE=\sum^n_{i=1}E_i^2=\sum^n_{i=1}(y_i-ŷ_i)^2$$
Suma total de cuadrados: $$SST=\sum^n_{i=1}(y_i-\overline y)^2=(\sum^n_{i=1}y_i^2)-n\overline y^2=SSY-SS0$$
$$SST=SSR+SSE$$$$R^2=\frac{SSR}{SST}=\frac{SST-SSE}{SST}$$

### Intervalos de confianza para las predicciones
Se define la desviación estándar de los errores: $$s_e=\sqrt{SSE\over n-2}$$
Se calcula la desviación estándar para las predicciones de m observaciones futuras:
$$s_{ŷmp}=s_e[{1\over m}+{1\over n}+{(x_p-\overline x)^2\over \sum x^2-n\overline x^2}]$$

$$Intervalo = ŷ_p\pm t_{1-\alpha/2;n-2}\times s_{ŷmp}$$

![[_resources/Pasted image 20221006103505.png]]
