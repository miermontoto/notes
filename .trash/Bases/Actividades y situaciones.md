---

Created at 2022-02-10T14:08:10+01:00
Last updated at 2022-03-17T15:10:39+01:00

Tagged: #1.-Modelo-E/R

---

# Actividades y situaciones
## Actividad 1

### Situación 3: Agregación, binarias o ternarias

1. Campeonatos, equipos, trajes...

![[./_resources/Actividades_y_situaciones.resources/Sketch 2-10-2022 2-19 PM.png]]![[./_resources/Actividades_y_situaciones.resources/Sketch 2-10-2022 2-19 PM.1.png]]


2. Empleados, cliente, establecimiento

![[./_resources/Actividades_y_situaciones.resources/Sketch 2-10-2022 2-47 PM.png]]


### Situación 4. Especialización o identidad

1. Aviones

![[./_resources/Actividades_y_situaciones.resources/Sketch 2-10-2022 2-53 PM.png]]

2. Profesores

![[./_resources/Actividades_y_situaciones.resources/Sketch 2-10-2022 3-04 PM.png]]


## Actividad 2

### Problema 1: Vacaciones de verano

![[./_resources/Actividades_y_situaciones.resources/Sketch 2-10-2022 3-51 PM.png]]


### Problema 2: Hospital

![[./_resources/Actividades_y_situaciones.resources/Sketch 2-17-2022 3-01 PM.png]]


### Problema 3: Comisaría

![[./_resources/Actividades_y_situaciones.resources/Sketch 2-17-2022 3-28 PM.png]]


### Problema 7: Conciertos

![[./_resources/Actividades_y_situaciones.resources/Sketch 2-17-2022 3-48 PM.png]]

### Problema 4: Senderismo

![[./_resources/Actividades_y_situaciones.resources/Sketch 2-24-2022 2-58 PM.png]]

### Problema 5: Camping

![[./_resources/Actividades_y_situaciones.resources/Sketch 2-24-2022 3-11 PM.png]]

### Problema 6: Playas

![[./_resources/Actividades_y_situaciones.resources/Sketch 2-24-2022 3-45 PM.png]]


### Problema 10: Biblioteca

![[./_resources/Actividades_y_situaciones.resources/Sketch 3-15-2022 3-26 PM.png]]


### Problema 8: Editoriales

![[./_resources/Actividades_y_situaciones.resources/Sketch 3-17-2022 2-56 PM.png]]


### Problema 9: Inserción laboral

![[./_resources/Actividades_y_situaciones.resources/Sketch 3-17-2022 3-10 PM.png]]


## Exámenes pasados

### Marzo2020


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

