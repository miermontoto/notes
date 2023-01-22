![[_resources/Tema 4 - Red - Parte 2.pdf]]

---

# Algoritmos de encaminamiento
**Encaminamiento**: encontrar la ruta óptima para interconectar diferentes redes.

Los diferentes nodos toman decisiones basándose en su conocimiento de la red.
Se utilizan protocolos de encaminamiento para obtener la mejor ruta posible.
- Estáticos
- Dinámicos


## Encaminamiento estático
- Se configuran las rutas de forma permanente por cada par de nodos origen-destino.
- Las rutas son fijas.
- Solo cambian cuando hay un cambio en la topología.
- Los costes de enlace no pueden estar basados en datos dinámicos, pero pueden estar basados en volúmenes estimados de tráfico o en la capacidad de cada enlace.

### <mark style="background: #BBFABBA6;">Ventajas</mark>
- Carga de procesamiento mínima.
- Fácil de configurar

### <mark style="background: #FF5582A6;">Desventajas</mark>
- Configuración y mantenimiento prolongados y laboriosos.
- Configuración propensa a errores.
- Se requiere la intervención de un administrador para le mantenimiento.
- No se adapta bien a las redes en crecimiento.
- Requiere un conocimiento completo de la red.

## Encaminamiento dinámico
- Las rutas pueden cambiar para adaptarse a las variaciones de las condiciones en el conjunto de las redes.
- Principales condiciones que afectan a las decisiones de encaminamiento:
	- Fallo de un encaminador: no se utilizará como parte de la ruta.
	- Congestión: encaminar evitando la zona congestionada.
	- Añadir nuevos nodos: comprobar si los nuevos nodos permiten rutas más óptimas que las existentes.

### <mark style="background: #BBFABBA6;">Ventajas</mark>
- Los protocolos se adaptan de forma automática cuando se produce un cambio en los nodos.
- Es flexible ante fallos en la red.
- Pueden ayudar a controlar la congestión del tráfico.
- Si está bien diseñado, es menos propenso a errores.
- Escala con facilidad.

### <mark style="background: #FF5582A6;">Desventajas</mark>
- Los nodos necesitan un mayor tiempo de procesamiento por paquete.
- Es necesario intercambiar información sobre el estado de la red entre routers: mayor carga de tráfico para la red.
- Difícil equilibrio en la velocidad de adaptación a los cambios.

### Clasificación basada en la fuente de información
- **Local:**
	- Los nodos toman las decisiones basándose únicamente en la información que ellos mismos posean.
	- Algoritmos de la patata caliente, aprendizaje hacia atrás e inundación.
- **Descentralizado:**
	- Los nodos utilizan la información recibida de los nodos adyacentes.
	- Algoritmos de vector distancia (DS)
- **Global:**
	- Los nodos utilizan la información recibida de todos los nodos.
	- Algoritmos de estado del enlace (LS)

### Algoritmo de camino más corto
- Busca encontrar la distancia más corta entre dos puntos.
- Los diferentes nodos almacenan información de por dónde tienen que enrutar el tráfico.
- Las métricas de la distancia pueden ser variables: retardo, velocidad, distancia...
- Algoritmo de Dijkstra

### Algoritmo de la patata caliente
- Enviar los datagramas por la cola de la menor longitud.
- Combinar la carga de la línea con la dirección preferida de envío.
- Equilibra las cargas entre las redes.

### Algoritmo de aprendizaje hacia atrás
- Cada paquete tiene un contador que se incrementa cada vez que se da un salto.
- Si un nodo recibe un paquete por la línea k de H y tiene un 4 en el contador, sabe que enviando por esa línea estará como mucho a 4 saltos.

### Algoritmo de inundación
- Cada nodo envía el paquete por todas las líneas excepto por la que llegó.
- Los paquetes enviados cuentan con un contador que se decrementa por cada salto que da.
- Se pueden implementar mejoras para evitar reenviar paquetes repetidos.
- El emisor necesita conocer la distancia al receptor, o al menos el tamaño máximo de la red.

#### <mark style="background: #BBFABBA6;">Ventajas</mark>
- Extremadamente robusto.
- Al menos una copia ha llegado por el camino más corto posible. Útil para establecer un circuito virtual.
- Se recorren todos los nodos de la red.

#### <mark style="background: #FF5582A6;">Inconvenientes</mark>
- Se genera demasiado tráfico.

### Algoritmo de vector de distancias
- Todos los enrutadores de la red mantienen una tabla con el resto de nodos de la red, el siguiente nodo de envío y una métrica que indicas cuánto tardan en alcanzarlos.
- Se pretende encontrar el camino más corto entre todos los nodos de la red.
- Al inicio del algoritmo, los nodos solo conocen la métrica con sus vecinos, mientras que la métrica con el resto se considera infinita.
- Los nodos vecinos intercambian información de forma periódica.
- Después de varias iteraciones, todos los nodos completan una tabla con información de toda la red.
- Es necesario ajustar la frecuencia de los intercambios.
- El algoritmo se adapta muy bien a las mejoras en las redes.
- Tiene una convergencia muy lenta en el caso de caída de algún nodo - tiende a infinito.

### Algoritmo de estado de enlace
- Es el más utilizado en Internet a día de hoy.
- Sigue cinco pasos:
	1. Descubrir a los nodos vecinos y conocer su dirección.
	2. Establecer el coste hasta cada uno de ellos.
	3. Crear un paquete para transmitir esa información.
	4. Difundir ese paquete por todas las interfaces.
	5. Calcular la ruta más corta utilizando la información recibida.
- Todos los nodos reciben todos los paquetes.
- Es un elemento clave decidir cuando se reenvía.

## Encaminamiento jerárquico
- Para redes de gran tamaño, no es viable que todos los nodos conozcan a todos → Encaminamiento mediante sistemas jerárquicos.
- Existen una serie de nodos, que conectan redes entre sí.
- Puede poseer múltiples niveles y cada uno de ellos utilizar un mecanismo de encaminamiento diferente.
	- Interior Routing Protocol (IGP)
	- Exterior Routing Protocol (EGP)

# Control de congestión
**Congestión:** se produce cuando el tráfico enviado a la red, se aproxima a su capacidad máxima.
- Elevados tiempos de entrega de paquetes.
- Paquetes perdidos o descartados.
- Se produce en un nodo y se propaga hacia atrás.

## Causas
- Las diferentes nodos no tienen capacidad de procesar todo el tráfico.
- Las líneas no tienen capacidad para enviar todos los paquetes.
- Las colas de los nodos poseen memoria limitada.
- Es necesario realizar un control que no sature la red y provoque elevadas pérdidas de rendimiento.
- Diferente a control de flujo.
	- Afecta a a toda la red, no solo a extremos.
	- Controlar el flujo puede ayudar a controlar la congestión.

## Métodos de control de congestión
### De ciclo abierto o pasivos
- Realizar un buen diseño de la red
- Seleccionar a priori qué trafico aceptar y descartar
- Regular el tráfico para que sea predecible

### De ciclo cerrado o activos
- Las decisiones se toman cuando aparece la congestión
- Consta de tres fases:
	- **Monitorización**: controlar diferentes parámetros de la red.
		- Longitud promedio de las colas
		- Nº de paquetes para los que vencen los temporizadores
		- Retardo promedio de los paquetes
		- Porcentaje de paquetes descartados por falta de memoria o capacidad de red.
	- **Envío de información**: informar a todos los nodos afectados que se produce congestión.
		- El nodo que detecta la congestión envía un paquete especial notificando del problema al origen del tráfico.
		- Utiliza un campo (bit) del paquete para que los encaminadores avisen de la congestión a sus vecinos.
		- Host o encaminadores envían periódicamente paquetes de sondeo preguntando por el estado de la congestión.
		- Importante controlar el tiempo de reacción
			- Demasiado pronto: el sistema oscilará y nunca convergerá.
			- Demasiado tarde: el aviso ya no será útil.
	- **Ajuste del sistema**: introducir diferentes cambios en el sistema para reducir la congestión.
		- **Alternativas**
			- Balancear el tráfico entre rutas
			- Utilizar encaminadores de respaldo, utilizados para la tolerancia a fallos, para encaminar el tráfico
			- Reducir la inyección de paquetes en la red
			- Negación de servicio a usuarios
			- Descartar paquetes

#### Detección temprana aleatoria
*Random Early Detection (RED)*

- Se aprovecha de la reducción del flujo de datos de TCP cuando se pierden paquetes.

**Opciones:**
- Cuando se reciben señales de congestión en el propio nodo, se empiezan a descartar paquetes de forma aleatoria.
- Al reducirse el tamaño de la ventana de transmisión, se reduce el flujo.
	-  Supone una mejora respectoa  descartar paquetes cuando se llena el buffer, aunque requiere un mayor ajuste.

#### Regulación de tráfico
Mantener una tasa de encolamiento baja.
- Es dependiente del tipo de tráfico que se tenga.
- Si se pasa de un determinado umbral, se toman medidas.

- Envío de paquetes reguladores, que controlen la cantidad de tráfico que se genera.
	- Puede ser hasta el nodo origen o salto a salto.
- Notificación explícita de congestión (bit *ECN* en cabecera IP)

#### Control de admisión - Circuitos virtuales
- No se establecen nuevas rutas hasta que la red pueda trabajar con el tráfico que ya tiene.
- Puede ser complejo estimar la cantidad de tráfico que la red puede manejar, especialmente en el tráfico a ráfagas.
- Se pueden buscar rutas alternativas no congestionadas.
![[_resources/Pasted image 20221115104823.png]]


#### Desprendimiento de carag
- Es la técnica más agresiva, ya que descarta paquetes completos.
- Se aprovecha de la señalización de los paquetes para saber qué tráfico descartar.
	- En algunos casos es interesante descarar los paquetes más nuevos y en otros los más viejos.
- Los paquetes suelen formar parte de categorías de transmisión: normal, urgente, no descartar...

# Calidad de servicio (QoS)
- No todas las aplicaciones pueden utilizar un servicio sin garantía alguna.
- La mejor forma de proporcionar una QoS alta es mediante *sobreprovisionamiento*, que es demasiado caro.
- La capa de red puede proporcionar algunas mejoras extra que aumenten la QoS.

**Parámetros principales**
- Ancho de banda
- Retardo 
- Variación del retardo (*jitter*)
- Pérdidas

## Modelado de tráfico
Garantizar un tráfico estable pese a las variaciones en la red.

**Leaky Bucket** y **Token Bucket**
![[_resources/Pasted image 20221115110433.png]]

## Gestión de paquetes en cola
### Método FIFO
- Muy sencillo de implementar
- Utilizar en el descarte RED
- No es muy útil para proporcionar una buena QoS

### Método LIFO
- Casi tan simple como FIFO y poco óptimo
- Permite priorizar el tráfico más reciente, interesante para aplicaciones de tiempo real.

### Sistemas con prioridad
- Cada nodo posee varias colas con diferentes prioridades.
- Los paquetes van a cada una de las diferentes colas, en función de la prioridad que tenga.
- Las colas de mayor prioridad se vacían primero.
- *Problema: es posible que las colas con menos prioridad no sean atendidas nunca.*

### Encolamiento circular (*Round Robin*)
- Todas las tareas van recibiendo el mismo tiempo de procesamiento
- Una de las implementaciones más comunes
- Pueden utilizarse variaciones con prioridades, con apropiación, ...
- Es el que tiene una implementación más compleja.

## Garantía de QoS
- Es necesario combinar todas las técnicas estudiadas previamente.
- Los algoritmos de encaminameinto basarán sus decisiones según los parámetros que posean los diferentes nodos.
	- Teoría de colas: proporciona los retardos promedio en cada nodo en función de la carga.
- Si la red considera que puede gestionar el tráfico y proporcionar la QoS pedida, aceptará la conexión. De lo contrario, puede rechazarla.

