Exacto y preciso; exacto, pero no preciso; preciso, pero no exacto; impreciso e inexacto

# Análisis de la precisión de mediciones

## Exactitud, precisión y resolución de errores
El nivel de incertidumbre de las mediciones afecta a la fiabilidad de las conclusiones que se pueden extraer de ellas.

## Características que definen la calidad de una muestra
**Exactitud:** diferencia absoluta entre el valor medio medido y el valor real.
**Precisión:** grado de concenctración obtenido al hacer múltiples medidas de una misma variable.
**Resolución:** el menor incremento que puede ser detectado.


## Tipos de errores y su cuantificación
### Errores sistemáticos
- Introducen sesgo en las mediciones.
- Afectan a la exactitud.
- Constante en todas las mediciones.
- Debido a fallos de experimentación.
- *Solución: calibrar y controlar el proc. experimental*

### Errores aleatorios
- NO introducen sesgo en las mediciones.
- Afectan a la precisión.
- Debido a múltiples causas.
- *Solución: "la estadística"*

## Concepto de Intervalo de Confianza para la media
![[_resources/Pasted image 20220929102510.png]]


**Para un número de observaciones grande (n ≥ 30):**

### Teorema Central del Límite (TCL)
Si las observaciones de una muestra son independientes y provienen de la misma población, *<u><i>entonces la media se aproxima a una Normal.</i></u> $$\overline x\approx N(\mu, \frac{\sigma}{\sqrt n})$$

Error estándar = desviación estándar de la media muestral $$Err=\frac{\sigma}{\sqrt n}$$
![[_resources/Pasted image 20220929102933.png]]

![[_resources/Pasted image 20220929102955.png]]

**Para un número de observaciones pequeño (n < 30):**
### Distribución *t* de Student
Con n-1 grados de libertad.
$$x_1=\overline x-t_{1-\alpha/2;n-1}\frac{s}{\sqrt n}$$
$$x_2=\overline x+t_{1-\alpha/2;n-1}\frac{s}{\sqrt n}$$

### Interpretación del intervalo de confianza
Si se calcula un intervalo usando un nivel de confianza, la media poblacional está en el intervalo con una probabilidad de ese nivel de confianza.

### Cálculo de número de observaciones necesarias
![[_resources/Pasted image 20220929104300.png]]
> [!WARNING] Cuidado con las fórmulas
> Dependiendo del número de muestras, se utiliza una fórmula u otra.


## Estimación de la precisión de medias obtenidas de observaciones correladas con intervalos de confianza
### Método de las réplicas independientes
Las réplicas se obtienen repitiendo las secuencias de mediciones.
Cada secuencia de mediciones debe usar números aleatorios distintos.

Realizar *m* réplicas de tamaño n<sub>0</sub>+n y calcular:
![[_resources/Pasted image 20220929104528.png]]

### Método de las medias por lotes
Obtener una muestra muy larga de n<sub>0</sub>+N observaciones.
Descartar las n<sub>0</sub> observaciones de intervalo transitorio inicial.
Dividir las *N* observaciones restantes en M=N/n lotes de n observaciones cada uno.

Comenzando por un valor pequeño de n, como por ejemplo 1, calcular:
![[_resources/Pasted image 20220929104711.png]]

## Cálculo de Intervalos de Confianza con Excel
**Solo para menos de 30 medidas:**
![[_resources/Pasted image 20220929105321.png]]
![[_resources/Pasted image 20220929105347.png]]

### <mark style="background: #BBFABBA6;">Ejemplo de intervalos de confianza para ɑ=0,1</mark>
![[_resources/Pasted image 20220929105441.png]]