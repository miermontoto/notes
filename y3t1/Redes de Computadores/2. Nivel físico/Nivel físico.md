![[_resources/Tema 2 - Físico.pdf]]

## Índice
1. [[#Introducción]]
2. Señales en el dominio de la frecuencia
3. Capacidad del canal
4. Medios de transmisión
5. Esquemas de codificación y modulación
6. Multiplexación

---

# Introducción
**Funciones de la capa física:**
- Mover los bits por el enlace.
- Sincronizar la transmisión entre emisor y receptor.
- Especificar la naturaleza de las señales a enviar.
- Definir la codificación de los bits en señales.
- Especificar el tipo de transmisión. 
- Caracterizar el medio de transmisión.
- Definir el formato y las funciones de los pines de un conector.

## Tipos de datos

### Analógicos
Toman cualquier valor en un intervalo continuo.
Su intensidad varía suavemente en el tiempo, sin discontinuidades.

### Digitales
Toman valores discretos.
Su intensidad se mantiene constnate en el tiempo, tras el cual pasa a otro valor constante.


## Datos y señales
Cualquier tipo de dato se puede transmitir con cualquier tipo de señal.

## Tipos de transmisión

### Símplex
La transmisión se produce en un único sentido. (*ej: televisión, radio, etc*)

### Semidúplex
La transmisión se produce en ambos sentidos, pero no a la vez. (*ej: walkie-talkie*)

### Dúplex
La transmisión se produce en ambos sentidos a la vez. (*ej: teléfono, videoconferencia*)


## Ruido
Señales adicionales que se insertan entre el emisor y el receptor.

# Señales en el dominio de la frecuencia
## Concepto
### Métodos de análisis de una señal
#### Dominio del tiempo
- Variaciones temporales de la señal.
- Se analizan los paráemtros `amplitud`, `frecuencia` y `base`.

#### Dominio de la frecuencia
- Se descompone la señal en componentes sinusoidales de diferentes frecuencias (*Análisis de Fourier*)
- Se analiza la frecuencia y amplitud de las componentes.

### Características de la señal sinusoidal
- Amplitud de pico (A)
- Frecuencia (f)
- Fase (Φ)

## Análisis en el dominio de la frecuencia
### Análisis de Fourier
**- Cualquier señal periódica puede expresar como una suma (infinita) de señales sinusoidales, llamadas armónicos.**
- Cada armónico tiene una frecuencia múltiplo de la frecuencia de la señal original (frecuencia fundamental).
- A medida que aumenta la frecuencia de los armónicos, disminuye su amplitud.

Una vez se ha descompuesto la señal, se pueden enviar los armónicos por el medio de transmisión. Cuantos más armónicos se utilicen, más se aproximará la suma resultante a la señal original.

![[_resources/Pasted image 20220926134749.png]]