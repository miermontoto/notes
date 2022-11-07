La <u>simulación</u> es una técnica de análisis de sistemas:
- útil cuando no existe un sistema para medir.
- permite mayor nivel de detalle que el modelado analítico.
- construido el modelo es fácil el estudio de alternativas.

Tiene una metodología propia.


## Selección de un lenguaje de simulación
- Lenguajes de propósito general
- Extensiones de lenguajes de propósito general
- Lenguajes de simulación (*QNAP, Cunapio*)
- Pquete de simulación (*MODLINE, JMT*)

Hacia arriba, flexibilidad total.
Hacia abajo, facilidad de construcción.


## Tipos de simulaciones
- **Simulación propia o autoconducida:** las entradas al modelo proceden de datos probabilísticos.
	- <mark style="background: #BBFABBA6;">Simplicidad</mark>, <mark style="background: #FF5582A6;">valores no independientes</mark>.
- **Simulación por rastreo o trazas:** las entradas al modelo proceden de valores de traza.
	- <u>Traza:</u> registro de eventos significativos del sistema.
	- <mark style="background: #BBFABBA6;">Credibilidad, fácil de validar, precisión</mark>, <mark style="background: #FF5582A6;">complejidad, representatividad, finitud</mark>.


Para simular el funcionamiento de un sistema se pueden usar diversos paquetes o lenguajes. Hay que distinguir entre el <u>modelo del sistema</u> y el <u>simulador del modelo</u>.

## Problemas básicos

### Validación
Asegurar que las suposiciones son raozonables y el modelo producirá resultados similares al sistema real.

### Verificación
Comprobar que el programa de simulación implementa correctamente las hipótesis hechas en el modelo.


# Eliminación del transitorio
## Métodos
- Simulaciones muy largas
- Inicialización apropiada
- Truncamiento

# Criterios de parada
Determinar cuándo debe detenerse la simulación. Hasta que el valor observado entre dentro de un intervalo de confianza dado.

## Replicaciones independientes

## Medias por lotes

## Método de Regeneración (Spectral)
Estudiar el sistema cuando en su evolución vuelve a las condiciones iniciales de partida.

