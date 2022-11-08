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
- Combinar la carag de la línea con la dirección preferida de envío.
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

### De ciclo cerrado o activos