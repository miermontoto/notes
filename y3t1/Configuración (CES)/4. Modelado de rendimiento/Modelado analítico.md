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

# Leyes operacionales
Los problemas de análisis de prestaciones de los computadores pueden resolverse empleando relaciones sencillas que no requieran hipótesis sobre distribuciones.

Considerando el sistema como una caja negra, durante un tiempo *T* podemos medir:
- Número de tareas que han llegado al sistema: A<sub>i</sub>
- Número de tareas que han recibido servicio: C<sub>i</sub>
- Intervalo de tiempo durante el cual el sistema está ocupado: B<sub>i</sub>

A partir de estas cuatro medidas se pueden definir las siguientes relaciones:
- **Cadencia de llegada**: $\lambda_i={A_i\over T}\space\frac{\text{Nº de llegadas}}{\text{Periodo de medida}}$
- **Productividad**: $X_i={C_i\over T}\space\frac{\text{Nº tareas completadas}}{\text{Periodo de medida}}$
- **Utilización**: $U_i={B_i\over T}\space\frac{\text{Tiempo de ocupación}}{\text{Periodo de medida}}$
- **Tiempo medio de servicio**: $S_i={B_i\over C_i}\space\frac{\text{Tiempo de ocupación}}{\text{Nº tareas completadas}}$

## 1ª Ley de Utilización
Permite establecer una relación alternativa para la utilización:
$$U_i={B_i\over T}={C_i\over T}\times{B_i\over C_i}\rightarrow U_i=X_i\times S_i$$

## 2ª Ley de flujo forzado
Relaciona la productividad del sistema con las productividades de los dispositivos individuales.

Considerando:
- que existe un balance o equilibrio de flujo ($A_i=C_i$)
- que se define la *razón de visitas*, V<sub>i</sub>, como la relación entre el número de tareas que entran y el número de veces que las tareas pasa n por un dispositivo concreto, es decir:
$$V_i={C_i\over C_0}\space\frac{\text{Nº tareas por el dispositivo}}{\text{Nº tareas del exterior}}$$
- Se define la productividad global del sistema: $$X={C_0\over T}\space\frac{\text{Nº tareas completadas}}{\text{Tiempo total}}$$

Teniendo en cuenta lo anterior, la productividad de un dispositivo puede escribirse como:
$$X_i={C_i\over T}={C_i\over C_0}\times{C_0\over T}\rightarrow X_i=V_i\times X$$
Teniendo en cuenta la relación anterior en la ley de utilización:
- $U_i=X_i\times S_i$
- $U_i=X\times V_i\times S_i$
- $U_i=X\times D_i$

Al término $D_i=V_i\times S_i$ se le denomina **demanda total de servicio** del dispositivo *i* para una tarea.
El elemento con mayor <i>D<sub>i</sub></i> será el más utilizado y se denomina **cuello de botella**.

### <mark style="background: #BBFABBA6;">Problema</mark>
<mark style="background: #BBFABBA6;">En un sistema de tiempo compartido, se registra el
siguiente perfil de los programas de usuario. Cada programa
requiere 5 segundos de tiempo de CPU y hace 80 peticiones de
E/S al disco A y 100 peticiones E/S al disco B. El tiempo
promedio de reflexión de los usuarios fue de 18 segundos. De las
especificaciones de los dispositivos sabemos que el disco A
emplea 50 milisegundos para satisfacer una petición de E/S y el
disco B emplea 30 milisegundos por petición. Con 17 terminales
activas, se observó que la productividad del disco A es de 15.70
peticiones E/S por segundo. Queremos calcular la productividad
del sistema y la utilización de los dispositivos.
Nota: cada paso por un dispositivo de E/S implica un paso por la
CPU.</mark>
![[_resources/Modelado analítico 2022-10-18 13.24.08.excalidraw]]

## 3ª Ley de Little
Permite establecer una relación entre elementos y tiempo. La única consideración es que exista flujo equilibrado de las tareas.

> [!WARNING]- Poco relevante

## 4ª Ley general del tiempo de respuesta
El tiempo de respuesta total de un sistema es: $$R=\sum^M_{i=1}R_i\times V_i$$

## 5ª Ley del tiempo de respuesta interactivo
En un sistema interactivo (terminales conectadas a un servidor), se cumple que:
- el usuario envía una petición y el sistema *R* tarda en responder.
- el usuario piensa durante un tiempo *Z* (tiempo de reflexión) antes de enviar otra petición. Tiempo por petición (R+Z).
- cada usuario hace $T\over R+Z$ peticiones.
- existen *N* usuarios (# terminales).

La productividad del sistema será: $$X={\text{Nºtotal de peticiones}\over\text{Tiempo total}}={N\times[T/(R+Z)]\over T}={N\over (R+Z)}$$
Despejando el tiempo de respuesta: $R=(N/X)-Z$

### Análisis de cuellos de botella
El *bottleneck* es el elemento con mayor demanda y el que limita el rendimiento del sistema.
Se pueden establecer unos límites asintóticos tanto para la productividad como para el tiempo de respuesta del sistema.

![[_resources/Pasted image 20221018134135.png]]