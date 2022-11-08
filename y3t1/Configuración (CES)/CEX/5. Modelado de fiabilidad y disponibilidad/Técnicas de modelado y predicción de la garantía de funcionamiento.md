
![[_resources/08_2_PrediccionDependability.pdf]]


---
- Modelado combinacional
- Modelado markoviano


# Diagramas de bloques serie-paralelo
Un diagrama de bloques serie-paralelo representa la estructura lógica de un sistema para mostrar cómo afecta la fiabilidad de susu componentes a la fiabilidad del sistema.

Tres configuraciones:
- Serie
- Paralelo
- K de N

## Estructura de bloques en serie
Funciona si funcionan todos sus componentes (no reparables).

![[_resources/Pasted image 20221108135202.png]]

## Estructura de bloques en paralelo
Funciona si al menos un componente lo hace (no reparable).

![[_resources/Pasted image 20221108140215.png]]

## Combinaciones serie-paralelo
Un diagrama de un sistema real es una mezcla de estructuras.

Los diagramas se reducen sistemáticamente hasta obtener un único elemento que es equivalente al sistema real.

![[_resources/Pasted image 20221108140933.png]]

## Modelado de disponibilidad con diagramas de bloques serie paralelo
Se presupone:
1. Cada componente puede repararse después de un fallo.
2. El comportamiento de cada componente NO depende del de los otros componentes.
3. Hay suficientes recursos para reparar todos los componentes simultáneamente.

**Se puede usar el diagrama de bloques de fiabilidad para modelar y evaular la disponibilidad**, porque la estructura de los diagramas de bloques serie-paralelo expresa la misma relación entre componente cuando se modela fiabilidad o disponibilidad.

# Sistemas reparables
![[_resources/Pasted image 20221108141236.png]]

![[_resources/Pasted image 20221108141252.png]]

# Árboles de fallo
Un árbol de fallo representa todas las secuancias de fallos de componentes individuales que causa la parada del sistema en una estructura de tipo árbol.

- Raíz (fallo del sistema global)
- Un evento en el nivel *i* se obtiene como combinación de eventos del nivel inferior por medio de puertas lógicas.
- El descenso por el árbol termina cuando se alcanzan los eventos básicos:
	- Fallos de componentes básicos/indivisibles
	- Interacción con humanos
	- Condiciones externas

Los eventos básicos son mútuamente independientes.
Para modelar su ocurrencia se conocerá al menos su proabilidad, su tasa de ocurrencia o su función de distribución

## Puertas de un árbol de fallos
Cada puerta tiene varias entradas y una salida.

| Puerta | Su salida es 1 si...          | Similitud |
| ------ | ----------------------------- | --------- |
| AND    | Todas sus entradas son 1      | Paralelo  |
| OR     | Una o más entradas son 1      | En serie  |
| K de N | K o más de sus entradas son 1 | K de N    |


## Análisis de árboles de fallo
### Sin eventos repetidos
![[_resources/Pasted image 20221108141820.png]]

### Con eventos repetidos
![[_resources/Pasted image 20221108141929.png]]
![[_resources/Pasted image 20221108142102.png]]


#### Técnica de factorización
Elegir el componente repetido y descomponer el árbol en dos casos:
- Suponer que el componente ha fallado.
- Suponer que el componente no ha fallado.
![[_resources/Pasted image 20221108142133.png]]

