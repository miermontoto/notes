
# Actividades y situaciones
## Actividad 1

### Situación 3: Agregación, binarias o ternarias

1. Campeonatos, equipos, trajes...

![[y2t2/Bases/1. Modelo E-R/_resources/Sketch 2-10-2022 2-19 PM.png](_resources/Sketch%202-10-2022%202-19%20PM.png)![[y2t2/Bases/1. Modelo E-R/_resources/Sketch 2-10-2022 2-19 PM.1.png](_resources/Sketch%202-10-2022%202-19%20PM.1.png)


2. Empleados, cliente, establecimiento

![[y2t2/Bases/1. Modelo E-R/_resources/Sketch 2-10-2022 2-47 PM.png](_resources/Sketch%202-10-2022%202-47%20PM.png)


### Situación 4. Especialización o identidad

1. Aviones

![[y2t2/Bases/1. Modelo E-R/_resources/Sketch 2-10-2022 2-53 PM.png](_resources/Sketch%202-10-2022%202-53%20PM.png)

2. Profesores

![[y2t2/Bases/1. Modelo E-R/_resources/Sketch 2-10-2022 3-04 PM.png](_resources/Sketch%202-10-2022%203-04%20PM.png)


## Actividad 2

### Problema 1: Vacaciones de verano

![[y2t2/Bases/1. Modelo E-R/_resources/Sketch 2-10-2022 3-51 PM.png](_resources/Sketch%202-10-2022%203-51%20PM.png)


### Problema 2: Hospital

![[y2t2/Bases/1. Modelo E-R/_resources/Sketch 2-17-2022 3-01 PM.png](_resources/Sketch%202-17-2022%203-01%20PM.png)


### Problema 3: Comisaría

![[y2t2/Bases/1. Modelo E-R/_resources/Sketch 2-17-2022 3-28 PM.png](_resources/Sketch%202-17-2022%203-28%20PM.png)


### Problema 7: Conciertos

![[y2t2/Bases/1. Modelo E-R/_resources/Sketch 2-17-2022 3-48 PM.png](_resources/Sketch%202-17-2022%203-48%20PM.png)

### Problema 4: Senderismo

![[y2t2/Bases/1. Modelo E-R/_resources/Sketch 2-24-2022 2-58 PM.png](_resources/Sketch%202-24-2022%202-58%20PM.png)

### Problema 5: Camping

![[y2t2/Bases/1. Modelo E-R/_resources/Sketch 2-24-2022 3-11 PM.png](_resources/Sketch%202-24-2022%203-11%20PM.png)

### Problema 6: Playas

![[y2t2/Bases/1. Modelo E-R/_resources/Sketch 2-24-2022 3-45 PM.png](_resources/Sketch%202-24-2022%203-45%20PM.png)


### Problema 10: Biblioteca

![[y2t2/Bases/1. Modelo E-R/_resources/Sketch 3-15-2022 3-26 PM.png](_resources/Sketch%203-15-2022%203-26%20PM.png)


### Problema 8: Editoriales

![[y2t2/Bases/1. Modelo E-R/_resources/Sketch 3-17-2022 2-56 PM.png](_resources/Sketch%203-17-2022%202-56%20PM.png)


### Problema 9: Inserción laboral

![[y2t2/Bases/1. Modelo E-R/_resources/Sketch 3-17-2022 3-10 PM.png](_resources/Sketch%203-17-2022%203-10%20PM.png)


## Exámenes pasados

### Marzo2020

![[y2t2/Bases/1. Modelo E-R/_resources/Sketch 3-29-2022 3-40 PM.png](_resources/Sketch%203-29-2022%203-40%20PM.png)

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
