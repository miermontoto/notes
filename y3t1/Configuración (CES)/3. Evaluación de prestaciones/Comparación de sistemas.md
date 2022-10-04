![[_resources/05_3_ComparacionSistemas.pdf]]

---

# Introducción
Se necesitan técnicas para determinar si las diferencias observadas en las métricas de prestaciones de dos sitemas son:
- debidas al ruido de las medidas.
- debidas a diferencias significativas.

Las técnicas se basan se basa en la "Prueba de la media cero". Consiste en usar intervalos de confianza para comprobar si la media de un conjunto de ovservaciones es significativamnete diferente de cero.

**Limitaciones de estas técnicas**
1. Solo sirven para comparar dos sistemas.
2. Las cargas de trabajo deben ser las mismas o muy similares.

# Técnicas de comparación

## Intervalo para comprobar si la media es cero
Consiste en calcular un intervalo de confianza para la media de las diferencias de las observaciones y comprobar si el intervalo incluye al cero.

### ¿Cuándo están las observaciones emparejadas?
Si se realizan n experimentos:
- cada uno de ellos con ambos sistemas.
- hay correspondencia uno-a-uno.

### Pasos para comprobar muestras de observaciones emparejadas
1. Obtener la muestra diferencia de las dos muestras disponibles.
2. Construir un intervalo de confianza para la muestra.
3. Si el intervalo incluye al 0, entonces las prestaciones de los sistemas no son significativamente diferentes.

 ### Pasos para comprobar muestras de observaciones desemparejadas
 1. Calcular las medias de las muestras
 2. Calculas las desviaciones estándar de las muestras
 3. Calcular la diferencia de las medias
 4. Calcular la desviación estándar de la diferencia de las medias
 5. Calcular el número efectivo de grados de libertad
 6. Calcular el intervalo de confianza de la diferencia de las medias.

Si el intervalo de confianza incluye al 0, la diferencia no es significativa con un nivel de confianza del 100(1-ɑ)%. De lo contrario, el signo de la diferencia de las medias indica el sistema que es mejor.

## Contraste de hipótesis
Proceso mediante el que se decide cuál de las hipótesis es correcta y se acepta (la otra se rechaza).

Se parte de una hipótesis:
- H<sub>0</sub>: hipótesis nula (que se desea contrastar)
- H<sub>1</sub>: hipótesis alternativa

| -                      | Acepto | Rechazo      |
| ---------------------- | ------ | ------------ |
| H<sub>0</sub> es cierta | Bien   | Error Tipo I |
| H<sub>0</sub> es falsa | Error Tipo II       | Bien             |
**Para contrastar la hipótesis:**
$$\begin{cases} H_0: \mu=\mu_0\\H_1:\mu\ne\mu_0\end{cases}$$
La región de aceptación es un intervalo de alrededor de μ<sub>0</sub>.
![[_resources/Pasted image 20221004132347.png]]

<u><b>p-valor de una prueba</b></u>: es el mínimo valor de ɑ con el que puede rechazarse H<sub>0</sub>.

- Si p-valor > 0.1, se permite aceptar H<sub>0</sub> con gran confianza.
- Si p-valor < 0.1, se permite rechazar H<sub>0</sub> con gran confianza.
- En el resto de casos, el resultado de la prueba es ambiguo y se necesita repetir la prueba con un mayor tamaño muestral.

### Herramientas y funciones Excel
Para muestras grandes (>30), usar `PRUEBA.Z(datos; media; desv)
Para muestras pequeñas, `PRUEBA.T(datosA; datosB; colas; tipo)`. El tipo depende del emparejamiento de las varianzas y de igualdad de las mismas.


## Comparación de más de dos sistemas mediante intervalos

> [!WARNING]- Poco relevante

