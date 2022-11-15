![[_resources/09_01_Config_Dimensionado.pdf]]

---

# Introducción a la configuración de un SI
La configuración (diseño) de un SI es una probabilidad de optimización. 

![[_resources/Pasted image 20221115131139.png]]

# Fase 1: establecer objetivos y restricciones

Es necesario buscar la configuración óptima:
- Máximas prestaciones, fiabilidad, disponibilidad
- Mínimo coste económico

Sin un presupuesto máximo se pueden cambiar los objetivos: maximizar la relación prestaciones/coste.

# Fase 2: predicción del comportamiento del SI
Es necesario disponer de modelos que permitan predecir (de forma aproximada) el impacto de los cambios de componentes y/o la arquitectura del sistema en las métricas de comportamiento.

Hay que disponer de un modelo de costes, incluyendo mantenimiento.

# Fase 3: método de selección de una nueva configuración
Un proceso de configuración con múltiples objetivos es complejo. Conviene dividir el proceso en dos fases separadas:

- **Paso 1:** dimensionar la capacidad que debe tener el sistema para soportar a los usuarios requeridos con la QoS requerida.
- **Paso 2:** añadir la redundancia precisa para dar el servicio con la fiabilidad y disponibilidad requeridas.
	- Generalmente, al añadir redundancia se modifica la capacidad del servicio del sistema, y por tanto su métricas de comportamiento. En una config. aproximada pueden ignorarse estos cambios.


## Dimensionado
Hay que usar un método para ir seleccionando nuevos valores de los parámetros de configuración hasta cumplir los objetivos.


### Problemas a resolver
- **Selección del componente sobre el que hay que actuar**: observar cómo contribuye cada componente del sistema a los valores obtenidos de las métricas de prestaciones del sistema.


- **Decisión de la forma de actuar**: mejorar el componente o replicar el componente.
	- **Para reducir R**, depende de la la descomposición del tiempo agregado de respuesta del componente.
	- **Para aumentar X,** ambas opciones son válidas.

- **Estimación de la magnitud de la actuación**: dos opciones:
	- Ir probando configuración a configuración, ver el dispositivo cuello de botella.
	- Preveer los requerimientos

### Integración de un nuevo componente en el modelo
Para integrar en el modelo a un componente nuevo hay que estimar su tiempo de servicio a partir del tiempo del componente base.
Generalmente, la potencia o capacidad de un componente se expresa mediante un índice de productividad máxima IP. (depende del tipo de componente)

#### <mark style="background: #BBFABBA6;">Ejemplo</mark>
![[_resources/Pasted image 20221115133403.png]]
$$Ip_m={\mu_n \over \mu_b} \rightarrow {14.2\over 1/0.2}= 11.36 \approx12$$
Luego tanto el D4 como el E5 valen. Se escoge D4 $S_{D4}={4 \over 12} \times = 0.0\overline6$

#### <mark style="background: #BBFABBA6;">Ejercicio blazing fast</mark>
Una empresa ha de contratar un servicio de empaquetado de regalos. La empresa estima sus necesiadades en 167 paquetes a la hora.

Los empaquetadores están clasificados por un índice de prestaciones, proporcional a su capacidad. En la anterior campaña han contratado a Pablo, que con un índice de 10, empleaba 1 minuto en preparar un paquete.

Rellenar la tabla y di a quién debería contratar la empresa
| Empaquetador                          | Índice | Tiempo/paq. y persona | X (paq/hora) | Coste €/día |
| ------------------------------------- | ------ | --------------------- | ------------ | ----------- |
| Pablo                                 | 10     | 1 minuto              | 60           | 20          |
| Raúl                                  | 20     | 0.5                   | 120          | 30          |
| Equipo alpha (Pedro y Rosa)           | 20     | 1 minuto              | 120          | 50          |
| Equipo beta (Rafa, Sara, Pepe e Inés) | 40     | 1 minuto              | 240          | 100         |
| Equipo lambda (Rodrigo y Raquel)      | 40     | 0.5                   | 240          | 65          | 

#### Particularización para servidores múltiples (CPU)
Se multiplica la inversa del tiempo de servicio por el número de núcleos.

### Estimación de potencia necesaria en un componente
#### Para reducir el tiempo de respuesta (sistemas abiertos)
1. Repartir la reducción total de tiempo necesaria entre los componentes
2. Estimar el nuevo μ o tiempo de servicio para los componentes
3. Selecicionar el nuevo componente a usar

#### Aumentar la productividad (sistemas abiertos → no interactivos)
1. Estimar el nuevo μ o tiempo de servicio para los componentes $X\times D_i=U_i\rightarrow\mu_i\geq V_i\lambda / 0.9$
2. Evaluar si el tiempo de respuesta es acpetable
3. Seleccionar el nuevo componente a usar

#### Aumentar la productividad (sistemas cerrados → interactivos)
1. Estimar el nuevo μ o tiempo de servicio para los componentes, que deben superar $X\geq N / (R_{max}+Z) \leftarrow R=(N/x)-Z\leq R_{max}$
2. Evaluar si el tiempo de respuesta es aceptable.
3. Seleccionar el nuevo componente a usar

## Costes
Dos opciones:
- Hay un presupuesto concreto que no se debe superar
- NO hay un presupuesto concreto

### Con presupuesto
Dos opciones:
- Realizar todo el proceso de diseño y, solo al final, comprobar si se supera el presupuesto.
- En cada paso de configuración, analziar el coste de la mejora.

### Sin presupuesto
Ir incrementando progresivamente la capacidad del sistema mientras el incremento mantenga la relación prestaciones/coste hasta que se obtenga la productividad deseada o se soporten los *n* usuarios.