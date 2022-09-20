# Evaluación de prestaciones

## Antecedentes
- **Tiempo de Ejeución Secuencial:** tiempo que tarda en ejeuctarse el programa en una sola unidad de proceso.
	- El análisis se hace en [[#FLOPs]] (operaciones flotantes por segundo).
>[!ERROR]- No relevante
>No es importante para el análisis, es más importante el tiempo de ejec. paralelo.

- La medición del **rendimiento** de un problema se realiza utilizando solo el tamaño del problema y el número de procesadores.
- Se tienen en cuenta mediciones empíricas, en combinaciones con el modelo teórico.

### Parámetros absolutos
- Representan el coste real de los algoritmos.
- Importantes en problemas de tiempo real.
- No permiten conocer el comportamiento del algoritmo.
***- ej: tiempo de ejecución.***

### Parámetros relativos
- Se obtienen de los parámetros absolutos.
- Permiten comparar algoritmos entre sí.
- Estiman la efectividad con la que los algoritmos utilizan los recursos.
***- ej: coste, overhead, eficiencia, speedup y escabilidad.***

---

## Tiempo de Ejecución Paralelo
<mark style="background: #ADCCFFA6;">Tiempo transcurrido desde que empieza el primer procesador hasta que termina el último.</mark> 

**T<sub>sol</sub>(n, p):** tiempo de solapamiento entre T<sub>ar</sub> y T<sub>co</sub>.
**T<sub>ov</sub>(n, p):** tiempo de sobrecarga (esperas, creación de procesos, etc)

T<sub>sol</sub> y T<sub>ov</sub> son difíciles de estimar.

### T<sub>ar</sub>
<mark style="background: #ADCCFFA6;">Tiempo que el algoritmo emplea realizando el cálculo.</mark> 
- Se expresa en flop (en segundos en el modelo empírico).
- Se estima teóricamente como $$ T_{ar}(n,p) = nt_c$$ siendo *n* el número de flop y *t<sub>c</sub>* el tiempo por flop.

### T<sub>co</sub>
<mark style="background: #ADCCFFA6;">Tiempo que el algoritmo emplea enviando mensajes o en operaciones de sincronización.</mark> 
- Se usa el mismo modelo para comunicaciones externas e internas.
- Se usa el mismo modelo para memoria compartida o memoria distribuida.
- El intercambio de información entre dos procesos o procesadores vecinos (P2P) se estima con: $$T_{co}(n,p) = t_s + nt_w$$
	donde t<sub>s</sub> es la latencia (startup time) y t<sub>w</sub> el ancho de banda.
- La latencia suele ser mucho mayor que el ancho de banda, por lo que es mejor enviar una sola comunicación a varias vecinos que hacer varias comunicaciones a un vecino cada una.
- En memoria compartida, se supone que la sincronización es un mensaje de tamaño 1 (n=1).

### Flop
<mark style="background: #ADCCFFA6;">Coste de una operación básica en coma flotante (suma, resta, multiplicación, división).</mark> 
- El coste de otras operaciones se expresan en término de su número de flop.
- En este tipo de enfoques el resto de operaciones (arimétrica entera, ...) no se suelen contablizar.

#### FLOPs
<mark style="background: #ADCCFFA6;">Número de flops por segundo.</mark> 
- Es una velocidad.
- **TPP<sub>dp</sub>** o *Theoretical Peak double precision* se expresa en GFLOPs. Es una estimación optimista: $$ TPP_{dp} = chasis \times nodos_{chasis} \times sockets_{nodo} \times cores_{socket} \times clock_{GHz} \times (\frac{nº flop}{ciclo})^{**}$$ $$ TPP_{dp} = sockets \times cores_{socket} \times clock_{GHz} \times (AVX|FMA)^*$$
	\*\*4x, 8x, 16x, según el procesador
	\* spec.org u otras fuentes para obtener la tecnología del procesador

---

## Coste y sobrecarga

### Coste
$$C(n,p) = pT(n,p)$$
- Un algoritmo es de coste óptimo si C es proporcional a T.

### Sobrecarga / Overhead
<mark style="background: #ADCCFFA6;">Expresa el coste añadido con respecto al algoritmo secuencial, es decir, el tiempo extra que los procesadores colectivamente consumen respecto al tiempo del algoritmo secuencial óptimo.</mark> 
$$T_0(n,p) = C(n,p) - T(n)$$
---

## Speedup y Eficiencia
### Speedup
<mark style="background: #ADCCFFA6;">Expresa la ganancia de velocidad del paralelo al secuencial.</mark> 
$$S(n,p) = \frac{T(n)}{T(n,p)}$$
- Todo algoritmo paralelo se puede simular en una máquina secuencial ejecutando en serie los pasos paralelos. **Por lo tanto, S(n,p) está acotada por:** $$T(n,1) \leq pT(n,p) → 0 \leq S(n,p) \leq p$$
- Si vale *p*, **speedup lineal**. La carga está balanceada, las comunicaciones no penalizan, perfecto.
- Si vale menos que *p*, **speedup sublineal.** Hay dependencia de datos, no siempre es posible dividir el problema en p subproblemas concurrentes...
- Si vale más que *p*, **speedup superlienal.** El algoritmo secuencial no es óptimo, se ha incurrido en un error de cálculo o hay efectos colaterales(caché...)

### Eficiencia
<mark style="background: #ADCCFFA6;">El speedup partido por p, para que se acote entre 0 y 1.</mark> $$0 \leq E(n,p) = \frac{S(n,p)}{p} \leq 1$$
### [[Ejemplos y ejercicios]]

## Modelos de rendimiento
### Ley de Amdahl
- Mide el incremento de velocidad máximo de los algoritmos paralelos (speedup).
- El tiempo de ejecución de un algoritmo se expresa como $$t(n) = \alpha(n) + \beta(n)$$ donde ɑ(n) es el tiempo de la parte secuencial, no paralelizable y β(n) es el tiempo de la parte paralelizable.
- El tiempo paralelo se puede definir como $$t(n,p) = \alpha(n) + \frac{\beta(n)}{p}$$

Sea ɑ(n) + β(n) = 1, entonces $$S(n,p) = \frac{T(n)}{T(n,p)} = \frac{p}{(p-1)\alpha(n)+1} \leq \frac{1}{\alpha(n)} $$

Aplicando esto, si el algoritmo es: 
	- paralelizable en un 90%: $$S(n,p) = \frac{p}{(p-1)0.1 + 1} \lt \frac{1}{0.1} = 10$$
	- paralelizable en un 50%: $$S(n,p) = \frac{p}{(p-1)0.5 + 1} \lt \frac{1}{0.5} = 2$$
![[_resources/Pasted image 20220915125305.png]]

Haciendo manipulaciones algebráicas: $$S(n,p) = \frac{1}{(1-FP)+\frac{PF}{p}}$$donde PF es el % de fracción paralela (en tanto por uno).
Se define como **rendimiento efectivo** (RE) de un algoritmo paralelo como:
$$RE_{dp}=\frac{1}{(1-PF)+\frac{PF}{p}}\times clock_{GHz}\times (AVX|FMA)$$
$$RE_{dp}=\frac{1}{(1-PF)+\frac{PF}{p}}\times clock_{GHz}\times\frac{nºflop}{ciclo}$$

### Resumen
- La eficiencia decrece monótonamente al aumentar el número de procesadores y mantener constante el tamaño del problema.
- El tiempo de ejecución puede aumentar al crecer el valor de *p*.
- No es productivo usar más procesadores que una cantidad determinadad para un problema fijo.
- Los conceptos de speedup y eficiencia permiten conocer la mejora y el grado de aprovechamiento que un algoritmo paralelo hace de una determinada configuración.
- No obstante, ambos parámetros son dependientes de *n* y *p*. Las conclusiones pueden no ser las mismas cuando algunos de estos parámetros cambie, es decir, cuando escala *n* junto a *p*.

## Modelos de Isorendimiento
<mark style="background: #ADCCFFA6;">Muestran cómo se adapta el algoritmo cuando crecen <i>n</i> y <i>p</i>.</mark>

### Función de Isotiemo
**Métrica/prestaciones:** tiempo.
**Recursos:** número de procesadores.

### Función de Isoeficiencia
**Métrica/prestaciones:** eficiencia.
**Recursos:** número de procesadores.

¿Cómo debe crecer el tamaño del problema (ω) en función de p para mantener la eficiencia constante?

#### Algoritmo Escalable
<mark style="background: #ADCCFFA6;">Aquel cuya función de isoeficiencia es lineal respecto al número de procesadores.</mark>

### Escalabilidad
#### Procedimiento de cálculo #1:
- Fijar la eficiencia a un valor deseado y despejar la carga computacional ω.
- A menor aumento de ω al aumentar *p*, mayor escalabilidad.


##### <mark style="background: #BBFABBA6;">Ejemplo</mark>
![[_resources/Pasted image 20220920092201.png|1050]]
![[_resources/Pasted image 20220920092245.png|1050]]

#### Procedimiento de cálculo #2:
![[_resources/Pasted image 20220920092539.png|1050]]


##### <mark style="background: #BBFABBA6;">Ejercicios</mark>
![[_resources/Evaluación de prestaciones 2022-09-20 09.44.21.excalidraw]]
![[_resources/Evaluación de prestaciones 2022-09-20 09.54.24.excalidraw]]

### Eficiencia escalable
Como el objetivo es mantener la eficiencia constante, se hacen crecer a las dos variables en la misma proporción.
Si la eficiencia es constante, esacala. $$E_{scl}(W,r) = \frac{T_{paralelo}(W,1)}{T_{paralelo}(rW,r)} o \frac{T(W)}{T_{paralelo}(rW,r)}$$
Es buena estrategia multiplicar por dos.

## Sistemas híbridos / heterogéneos
<mark style="background: #ADCCFFA6;">Sistemas confirmados por ítems de distinta naturaleza.</mark>
Cada ítem tiene su propia constante.

#### <mark style="background: #BBFABBA6;">Ejemplo</mark>
Sea un clúster con 𝑝 ordenadores iguales conectados a una red, con T𝑠 la constante de establecimiento y T𝑤
la inversa del ancho de banda. Cada ordenador tiene una CPU con 𝑘 núcleos, con T𝑐 la constante de cálculo.
Cada ordenador tiene la misma GPU de apoyo, siendo T𝑐<sub>FPU</sub> , T𝑠<sub>GPU</sub> y T𝑤<sub>GPU</sub> las constantes de cálculo y de
comunicaciones CPU/GPU, respectivamente. La GPU es 9x más potente que la CPU. Sea T𝑛 = 𝑛<sup>2</sup>T𝑐 y un
diseño paralelo sin dependencias externas donde todos los elementos realizan la misma computación. Se
pide: 
	A) tiempo de ejecución paralelo de cada ordenador
	B) tiempo de ejecución del sistema si el coste de las comunicaciones CPU/GPU es 0
	C) análisis de la Escalabilidad y Eficiencia Escalada desde b).

Se envía y se recibe la misma cantidad de datos de la GPU, no hay dependencias externas y reparto balanceado de tiempo de cálculo entre CPU y GPU.<sup>*</sup>

![[_resources/Evaluación de prestaciones 2022-09-20 10.12.07.excalidraw]]
