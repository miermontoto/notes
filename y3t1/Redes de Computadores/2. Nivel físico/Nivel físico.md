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


## Características principales
- **Espectro**
	- Conjunto de frecuencias que constituyen una señal.
- **Ancho de banda absoluto**
	- Anchura teórica del espectro.
- <u> <b>Ancho de banda efectivo</b></u>
	- Banda de frecuencas que contiene la mayor parte de la energía.
	- Cuando se habla de ancho de banda, se refiere a este.
- **Velocidad de transmisión**
	- Número de bits que se transmiten en un segundo por un medio de transmisión.
- **Relación entre el ancho de banda y la velocidad de transmisión**
	- A mayor ancho de banda, mayor es la velocidad con la que se puede transmitir.
	- Cuanto mayor sea la velocidad que se necesite, más ancho de banda hará falta.

# Capacidad de canal
<mark style="background: #ADCCFFA6;">Tasa máxima de información que se puede enviar por la línea.</mark> *bits/seg (bps)*

## Criterio de Nyquist
<mark style="background: #ADCCFFA6;">Capacidad del canal sin ruido.</mark> $$C=2\times B\times\log_2M$$ donde *B* es el ancho de banda en Hz del medio y *M* es el número de niveles de señal.

## Teorema de Shannon
<mark style="background: #ADCCFFA6;">Capacidad del canal con ruido térmico.</mark> $$C=B\times\log_2(1+SNR)$$ donde *B* es e ancho de banda del Hz en medio y *SNR* (signal to noise ratio) es S/N.

### SNR: signal-to-noise ratio
<mark style="background: #ADCCFFA6;">Relación entre la potencia de una señal y la potenica contenida en el ruido presente en un punto concreto de la transmisión.</mark>
<mark style="background: #FF5582A6;">No puede ser menor que cero.</mark>

Un valor elevado de SNR implica una alta calidad de la señal → serán necesarios menos repetidores. $$SNR_{dB}=10log_{10}\frac{S}{N}$$ donde *S* es la potencia de la señal y *N* es la potencia del ruido.

# Medios de transmisión
## Tipos de medios
- **Guiado:** (cable coaxial, par trenzado, fibra...)
- **No guiado:** (microondas, wifi...)

## Medios guiados
### Par trenzado
Hilos de cobre aislados y entrelazados.

- Apantallado (STP) o no apantallado (UTP).
- Capacidad del orden de decenas de Gbps en 1km de distancia.
- Barato, utilizado en redes de área local.

### Cable coaxial
- Hilo protector y malla separados por un aislante y protegidos por plástico.
- Capacidades de cientos de Mbps en distancias de kilómetros.
- Utilizado en televisión, enlaces de larga distancia, etc.

### Fibra óptica
- Núcleo y revestimiento de cristal/plástico con distintos índices de refracción.
- Está forrado con una cubierta aislante.
- Capacidades de Tbps en miles de kilómetros
- Tradicionalmente usado en enlaces de larga distancia aunque su uso está cada vez más extendido.


## Medios no guiados
#### Espectro electromagnético
$$Frecuencia\times Longitud\space de\space onda=c$$

### Ondas de radio
- Señales con frecuencias desde ~1MHz hasta ~1GHz.
- Se propaga en todas las direcciones.
- Proporcionan poco ancho de banda a gran distancia.
- Tienen un coste alto debido a las bajas frecuencias, pero es asumible por la gran cantidad de usuarios.
- Utilizado en la distribución de radio, televisión, telefonía móvil...

### Microondas
- Señales con frecuencias desde ~1GHz hasta ~300GHz.
- Se pueden utilizar antenas direccionales para propagar en forma de haz.
	- Mucho ancho de banda a gran distancia.
	- Se necesitan antenas orientadas tanto en transmisión como en recepción.
	- Pueden usarse con satélites (1-10GHz) o en la tierra (1-40GHz).
	- Utilizadas en enlaces de larga distancia, televisión por satélite, etc.
- También se pueden utilizar antenas omnidireccionales
	- Ancho de banda medio a media distancia.
	- Utilizado en WiFI, redes locales, etc.
	- No se necesitan antenas orientadas.
	- Bajo coste.

### Infrarrojos
- Señales con frecuencias desde ~300GHz hasta ~400THz.
- La señal se propaga en línea recta y es reflejada/absorbida por las paredes.
- Poco ancho de banda y a poca distancia.
- Utilizado en conexión de dispositivos, redes locales, etc.
- Bajo coste.

# Esquemas de codificación y modulación
## Codificación
- Enviar datos analógicos o digitales mediante señales digitales.
- Si es necesario, la señal se convierte a digital.
- Se puede hacer en banda base o paso banda.

### Datos digitales → Señal digital
- **Non Return to Zero (*NRZ*):** utiliza 0 para representar el 0 y un voltaje positivo para representar el 1.
- **Non Return to Zero Low (*NRZ-L*):** utiliza 0 para representar el uno y un voltaje positivo para representar el 0.
- **Non Return to Zero Inverted (*NRZI*):** cuando aparece un 1, el voltaje varía.
	- Más robusto ante el ruido, pero muy sensible a fallos.

- **Binario multinivel**
	- Utiliza más de dos niveles de señal.
	- <u>Bipolar-AMI (Alternate Mask Inversion)</u>
		- Se utiliza un voltaje nulo para representar el 0.
		- Se utiliza un voltaje  ±V de forma alterna para representar el 1.
		- No hay problemas de sincronización para detectar cadenas largas de 1.
		- Sigue existiendo dicho problema para detectar cadenas largas de 0s.
		- Ayuda a detectar posibles errores.

- **Códigos bifase**
	- <u>Manchester</u>
		- Transición en mitad del intervalo de duración del bit.
		- La transición sirve como procedimiento de sincronización y de transmisión de datos:
			- 0: transición de alto a bajo en mitad del intervalo.
			- 1: transición de bajo a alto en mitad del intervalo.
	- <u>Manchester diferencial</u>
		- La transmisión a mitad del intervalo se utiliza tan solo para proporcionar sincronización.
			- 0: transición al principio del intervalo del bit.
			- 1: ausencia de transición al principio del intervalo del bit.
		- Es un esquema de codificación diferencial.

## Modulación
- Envío de datos analógicos o digitales mediantes señales analógicas.
- Necesario adaptar a una señal analógica, generalmente en paso banda.

