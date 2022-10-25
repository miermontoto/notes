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
