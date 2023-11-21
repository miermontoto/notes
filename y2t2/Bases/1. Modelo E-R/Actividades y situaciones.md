
# Actividades y situaciones
## Actividad 1

### Situación 3: Agregación, binarias o ternarias

1. Campeonatos, equipos, trajes...

![[Sketch 2-10-2022 2-19 PM.png]]![[Sketch 2-10-2022 2-19 PM.1.png]]


2. Empleados, cliente, establecimiento

![[Sketch 2-10-2022 2-47 PM.png]]


### Situación 4. Especialización o identidad

1. Aviones

![[Sketch 2-10-2022 2-53 PM.png]]

2. Profesores

![[Sketch 2-10-2022 3-04 PM.png]]


## Actividad 2

### Problema 1: Vacaciones de verano

![[Sketch 2-10-2022 3-51 PM.png]]


### Problema 2: Hospital

![[Sketch 2-17-2022 3-01 PM.png]]


### Problema 3: Comisaría

![[Sketch 2-17-2022 3-28 PM.png]]


### Problema 7: Conciertos

![[Sketch 2-17-2022 3-48 PM.png]]

### Problema 4: Senderismo

![[Sketch 2-24-2022 2-58 PM.png]]

### Problema 5: Camping

![[Sketch 2-24-2022 3-11 PM.png]]

### Problema 6: Playas

![[Sketch 2-24-2022 3-45 PM.png]]


### Problema 10: Biblioteca

![[Sketch 3-15-2022 3-26 PM.png]]


### Problema 8: Editoriales

![[Sketch 3-17-2022 2-56 PM.png]]


### Problema 9: Inserción laboral

![[Sketch 3-17-2022 3-10 PM.png]]


## Exámenes pasados

### Marzo2020

![[Sketch 3-29-2022 3-40 PM.png]]

```
aeropuero = (@nombre, provincia)
tripulación = (@cod, nombre, nombreAeropuerto (FK aeropuerto))
piloto = (@codTripulación (FK tripulación), codTripulaciónPiloto (FK piloto), numHoras)
azafata = (@codTripulación (FK tripulación), centro)
vuelo = (@número, duración, nombreDestino (FK aeropuerto), nombreOrigen (FK aeropuerto))
avión = (@matrícula, modelo, capacidad)
compañías = (@[compañías, matrículaAvión (FK avión)])
instancia = (@[día, mes, año, númVuelo (FK vuelo)], horaInicio, horaFin, díaSemana*, matrículaAvión (FK avión), codTripulaciónPiloto (FK piloto), codTripulaciónCopiloto (FK piloto))
incidencia = (@código, minuto, descripción, (
día, mes, año, númVuelo (FK vuelo)], horaInicio, horaFin, díaSemana*, matrículaAvión (FK avión), codTripulaciónPiloto (FK piloto), codTripulaciónCopiloto (FK piloto)) (FK instanciaVuelo))

instanciaAzafata = (@[codTripulaciónAzafata (FK azafata), (díaInstancia, mesInstancia, añoInstancia, númVueloInstancia) (FK instancia)])
```
