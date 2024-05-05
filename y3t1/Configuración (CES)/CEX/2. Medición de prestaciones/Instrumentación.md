# Instrumentación
![[_resources/04b_Instrumentacion.pdf]]
## Índice


---
### Prácticas
![[_resources/Instrumentación 2022-09-22 10.06.27.excalidraw]]

## Tecnologías de medición de tiempos
Dos problemas a resolver:

1. Contar ciclos o eventos:
	- `BOOL QueryPerformanceCounter(LARGE_INTEGER *target);`
2. Obtener la equivalencia entre ciclo y tiempo:
	- `BOOL QueryPerformanceFrequency(LARGE_INTEGER *target);`

## Transitorios de arranque y terminación
El tranisitorio de entrada y el transitorio de salida afectan a todas las mediciones.

## Control del intervalo de medición
Se desprecian los intervalos de transitorio de salida y entrada, por lo que solo se obtienen medidas durante el intervalo de medición.

## Mecanismo de captura de datos
Dos alternativas para referirse a los eventos del experimento:
- **Ciclos:** obtenidos de las funciones `QueryPerformanceCounter`, ...
- **Tiempos:** transformando los ciclos a tiempos ...

![[_resources/Pasted image 20220922103051.png]]

## Almacenamiento de los datos capturados
Dos métodos:

1) Almacenamiento en moemria durante el intervalo de medición.
2) Volcado a disco al terminar el experimento de carga.

## Coordinación con el monitor de Windows
