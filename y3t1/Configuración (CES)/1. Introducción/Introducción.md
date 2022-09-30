# Introducción
![[_resources/01_IntroEvaluacion.pdf]]

---

## Evaluación de prestaciones
Objetivo: estudiar el comportamiento de un sistema dando un servicio.

**Configuración:** cómo es el sistema?
**Carga/Workload**: cuál es el servicio? (cantidad, intensidad, propiedades...)
**Fiabilidad y rendimiento:** qué comportamiento tiene? (calidad, capacidad)
**Métricas:** cómo se representa el rendimiento?
**Aplicación:** cómo se aplica? (análisis, comparación, diseño, planificación)
**Técnicas:** cómo se evalúa?
**Diseño de experimentos/análisis de datos:** cómo se obtienen resultados?



## Método sistemático de evaluación (análisis)
Cada proyecto de análisis o diseño de un sistema es único. No obstante, hay una serie de pasos comunes:

1. Establecer objetivos del proyecto y definir el sistema objeto de análisis o diseño
	- Elección de los límites del sistema.
2. Enumerar los servicios que suministra el sistema y los reusltados de cada servicio
	- Útil para seleccionar métricas y cargas de trabajo.
3. Seleccionar métricas
	- Velocidad
	- Precisión
	- Disponibilidad
4. Hacer una lista de parámetros
5. Seleccionar los factores a estudiar
6. Seleccionar la técnica de evaluación
	- Modelado analítico
	- Simulación
	- **Medición**
7. Selecionar la carga de trabajo (*Workload*)
| Técnica    | Carga                                                           |
| ---------- | --------------------------------------------------------------- |
| Analítica  | Probabilidades de las distintas peticiones                      |
| Simulación | Traza de peticiones medidas en un sistema real                  |
| Medición   | Scripts de usuarios para ser ejecutados por los sistemas reales |
8. Diseño de experimentos
	- Se planfica en dos fases:
		1. Análisis "grueso": más número de factores, menos niveles.
		2. Análisis "fino": menos número de factores, más niveles.
9. Análisis e interpretación de los datos
10. Presentación de resultados
	- Con el conocimiento adquirido sobre el sistema, se decide si hacer otro proceso de evaluación.


## Objetivo del análisis de Sistemas
1. Comparar sistemas (*benchmarking*)
2. Dimensionar sistemas
3. Sintonizar sistemas
4. Planificación de capacidad
	- ¿Vale la pena el sistema actual?; ¿Planifica uno nuevo?; ¿Cómo responderá a la evolución en el tiempo?


## Técnicas de evaluación
3 técnicas de evaluación principales:
	- Modelo analítico
	- Simulación
	- Medición

![[_resources/Pasted image 20220913133027.png|1000]]

## Selección de métricas de comportamiento
Si el servicio se realiza...
- <mark style="background: #BBFABBA6;">Correctamente</mark> 
	- **Tiempo de respuesta:** tiempo que transcurre entre una petición y la respuesta del sistema.
	- **Productividad:** cantidad de respuestas que el sistema puede devolver por segundo.
		- **Capacidad:** valor de la productividad máximo.
	- **Uso de rescursos:** porcentaje o valor total de recursos que se utiliza al generar una respuesta.
- <mark style="background: #FF5582A6;">Incorrectamente</mark> 
	- Probabilidad
	- Tiempo entre fallos
- <mark style="background: #FFB86CA6;">No se realiza</mark> 
	- Duración del evento
	- Tiempo entre servicios

![[_resources/Pasted image 20220913134749.png]]

### Métricas asociadas a fallos del servicio
- **Fiabilidad:** probabilidad de que el sistema de el servicio sin ningún fallo durante un periodo de tiempo. Medible por:
	1. La probabilidad del tiempo hasta el primer fallo.
	2. <mark style="background: #FF5582A6;">MTTF:</mark> Mean Time To Failure 

### Métricas asociadas a la falta de servicio
- **Disponibilidad:** porcentaje de tiempo en el que el sistema puede responder a peticiones.
	- <mark style="background: #BBFABBA6;">Uptime:</mark>  tiempo durante el cual el sistema está disponible.
	- <mark style="background: #FF5582A6;">Downtime:</mark>  tiempo durante el cual el sistema NO está disponible.
	- Fórmula: $$Disponibilidad = \frac{uptime}{uptime + downtime}$$



