# Introducción
El modelado analítico construye mediante una representación del sistema real mediante técnicas que son resolubles matemáticamente, dando lugar a un conjunto de ecuaciones.

- Las ecuaciones pueden tener solución exacta o aproximada, dependiendo del método de resolución.
- Son sencillas y baratas de ejecutar, pero tienen baja precisión.

**Métodos empleados**
- <u>Grafos</u>
	- Se emplean para estudiar el comportamiento de programas o procesos.
	- Permiten analizar casos en los que existe concurrencia y/o saltos probabilísticos.
- <u>Teoría de Colas</u>
	- Útil para estudiar las prestaciones globales a nivel de sistema.
	- Se considera la competencia por recursos.
	- Cada recurso se representa mediante una cola.
- <u>Modelos de Markov</u>
	- Permite una represnetación más complicada de la interacción entre componentes.
	- Cada nodo del modelo de Markov representa un posible estado del sistema, el estado futuro depende solo del presente y no del pasado.
- <u>Redes de Petri</u>
	- Se utilizan cuando los estados que toma el sistema son elevados o tiene una complejidad alta.
	- Las redes de Petri están formadas por *places*, transiciones, arcos y *tokens*.
	- Los *tokens* residen en los *places* y se mueven a través de un *place* a otro según indiquen los arcos a través de las transiciones.

# Teoría de Colas
## Notación en las colas
1. Proceso de llegada
2. Distribución del tiempo de servicio
3. Número de servidores
4. Posiciones de espera
5. Población de clientes
6. Disciplina de servicio

### Notación Kendall
Cada cola se representa por una tupla de 6 elementos:
![[_resources/Pasted image 20221013103758.png]]

Para capacidad infinita, población infinita y disciplina FIFO, la notación se queda en **A/S/m**.

### Servidores infinitos
Existe unos elementos que se conocen como *servidores infinitos* (IS), también llamados *centros de retardo* (delay centers).

En estos centros, se supone que el usuario no tiene que esperar en la cola para recibir el servicio, por tanto todo el tiempo que pasa en el centro de servicio es tiempo recibiendo servicio.
Por ejemplo, las terminales conectadas a un sistema multiusuario.

![[_resources/Modelado analítico 2022-10-13 10.43.43.excalidraw]]


## Parámetros
![[_resources/Pasted image 20221013104630.png]]

## Propiedades de los procesos estocásticos

### Relaciones entre variables
#### 1. Condición entre estabilidad
$$\lambda<m-\mu$$
El sistema es inestable si la cantidad de tareas que le llegan es superior a la que puede atender. No aplicable a sistemas con capacidad finita.


#### 2. Número de elementos en el sistema
$$n=n_q+n_s$$
El número de elementos o tareas en el sistema es siempre igual a la suma de tareas que están esperando para recibir el servicio y las tareas que están recibiendo servicio.

#### 3. Relación entre nº de elementos y el tiempo (ley de litte)
Si no se pierden tareas (por capacidad limitada), se cumple la relación:
$$\text{Nº de elementos sistema = Razón de llegada x Tiempo de respuesta}$$
$$n=\lambda\times r$$
Esta relación es aplicable a cualquier parte del sistema donde se cumpla la conservación de tareas, así: $n_q=\lambda\times w$

#### 4. Distribución de tiempos en el sistema
$$r=w+s$$
El tiempo de respuesta es la suma del tiempo de espera más el tiempo de servicio.

>[!WARNING]- Importante

# Redes de Colas
Las colas se combinan para dar un servicio complejo a una tarea.

- No existe una notación generalizada para las redes de colas.
- No todas las redes de colas tienen solución exacta ni aproximada.

**Tipos de redes**
- Redes abiertas
- Redes cerradas
- Redes mixtas

## Redes abiertas
Una red de colas abierta tiene comunicación con el exterior.

> [!FAQ] Ejemplo
> ![[_resources/Pasted image 20221013105509.png]]


## Redes cerradas
Una red de colas cerrada no tiene comunicación con el exterior.

> [!FAQ] Ejemplo
> ![[_resources/Pasted image 20221013105715.png]]


## Redes mixtas
Una combinación de las dos anteriores.

>[!FAQ] Ejemplo
>![[_resources/Pasted image 20221013105547.png]]

## Redes de tipo producto (BCMP)
Este tipo de colas tiene resolución matemática exacta.

Son redes de este tipo las que cumplen:
- Disciplinas de servicio: FCFS, PS, IS o LCFS-PR.
- Las tareas no cambian de tipo mientras reciben servicio.
- Distribución de servicio exponencial para FCFS.
- El tiempo de servicio solo depende del estado de la cola.
- En redes abiertas, las llegadas están distribuidas exponencialmente. NO se permiten llegadas en grupo.