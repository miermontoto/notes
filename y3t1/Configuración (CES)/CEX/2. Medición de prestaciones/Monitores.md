# Monitores de sistemas informáticos
![[_resources/03_Monitores.pdf]]

---

## Concepto
<mark style="background: #ADCCFFA6;">Herramienta utilizada para observar las actividades de un sistema informático en su funcionamiento habitual.</mark> 

## Terminología usada en monitorización
- **Evento:** cambio de estado en el sistema.
- **Traza:** registro de todo los eventos que llegan al sistema (suele ser un fichero).
- **<mark style="background: #FF5582A6;">⋆</mark> Sobrecarga:** porcentaje de recursos consumido por el monitor.
- **Dominio:** conjunto de actividades observables por un monitor.
- **Cadencia de entrada:** máxima frecuencia de captura de eventos que puede observar un monitor correctamente.
	- **Modo ráfaga:** cadencia soportable durante un periodo de tiempo limitado.
	- **Modo sostenido:** cadencia soportable constantemente.


## Clasificación de los monitores
### Criterio 1: Tecnología de implementación
1. Hardware
2. <mark style="background: #FFF3A3A6;">Software</mark> 
3. Híbrido

### Criterio 2: Activación del mecanismo de captura
1. Guiado por eventos (event-driven)
2. Guiado por tiempos (timer-driven)

### Criterio 3: Instante de visualización de resultados
1. On-line
2. Batch

## Monitores software
Cada activación implica la ejecución de varias instrucciones - programa.
Los monitores software son adecuados si la cadencia de entrada es moderada.

#### <mark style="background: #BBFABBA6;">Ejercicios sobrecarga</mark> 
![[_resources/Monitores 2022-09-19 11.28.08.excalidraw]]

La monitorización es aceptable si **NO** se altera:
- El camino de ejecución del programa.
- La frecuencia de instrucciones.

Condiciones casi imposibles de cumplir si:
- El programa es multiproceso.
- La CPU dispone de cachés.

### Aspectos importantes en el diseño de monitores software

#### Cómo activar la rutina de captura de datos
##### 1. Instrucción TRAP
Consiste en instrumentar el software del sistema con interrupciones software.

##### 2. Cambiar la CPU a modo traza
Muchas CPUs soportan este modo. La sobrecarga es muy alta.

##### 3. Interrupción de temporización
El SO activa periódicamente la rutina de captura de eventos.
Se denomina muestreo (*sampling*).
La sobrecarga es independiente de la cadencia de generación de eventos.

#### Cómo implementar los buffers de almacenamiento de datos
##### 1. Tamaño
- ↑ Para minimizar la frecuencia de escritura de disco1.
- ↓ Para que cada escritura en disco no consuma mucha CPU y para que no se limite la RAM disponible para aplicaciones.

##### 2. Número

##### 3. Desbordamiento
<mark style="background: #FFB86CA6;">!!!!!</mark> 


## Monitores hardware
<mark style="background: #ADCCFFA6;">Son equipos que se acoplan al sistema a monitorizar mediante sondas.</mark> 

- No hay sobrecarga.
- Permiten una cadencia de entrada de eventos muy alta.
- Hoy en día son equipos complejos basados en microprocesadores.

![[_resources/Pasted image 20220919114514.png]]

## Monitores para sistemas distribuidos
Se organizan en varias capas:

1. Captura de datos en cada subsistema.
2. Recolección de datos en uno o varios sitios.
	*Problemas de sincronización.*
3. Reducción y análisis de datos capturados.
4. Presentación de los resultados. Interfaz de usuario.

## Monitores de la ejecución de programas
<mark style="background: #ADCCFFA6;">Monitores software diseñados para observar el software de aplicaciones.</mark> 

<mark style="background: #FFB86CA6;">!!!</mark> 

## Monitores para la contabilización del uso del sistema
<mark style="background: #ADCCFFA6;">Monitores diseñados originariamente para facturar a los usuarios por el uso del sistema informático.</mark> 

Los registros generados se denominan ***accounting logs***.
Suelen mostrar el uso de recursos a varios niveles.

<mark style="background: #FFB86CA6;">leer anexo raro</mark> 
$$Bytes \space ocupados= Bytes\space instalados-\space Bytes\space disponibles-\space Bytes\space de\space caché$$
	$$\%Utilización = \frac{}{}$$