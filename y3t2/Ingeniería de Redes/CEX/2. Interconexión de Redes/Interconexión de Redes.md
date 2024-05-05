![[_resources/IRD_Interconexion Redes v2.pdf]]

---

## Sistema autónomo (SA)
Conjunto de redes y routers administrados por una única organización.

- Se suele intercambiar información mediante un protocolo de encaminamiento común.
- Varios protocolos de encaminamiento, desde el exterior del SA debe mostrarse con un plan de encaminamiento interior coherente.
- Al menos una ruta entre cada par de nodos.

PE (*Provider Edge*): el nodo de la red que sirve de enlace entre otras redes, que pueden utilizar protocolos de encaminamiento diferente.

El protocolo de routing externo (*ERP*) más utilizado es BGP.

## Tablas de routing
![[_resources/2. Interconexión de redes 2023-02-10 12.27.28.excalidraw]]

## Tiempo de convergencia
La convergencia se produce cuando todos los routers de la red operan con el mismo conocimiento.

- Siempre que la topología de una red cambia, se deben recalcular las tablas de encaminamiento de tal forma que reflejen la nueva topología.
- La convergencia rápida es deseable, ya que reduce la latencia de decisiones incorrectas.
- EL proces y tiempo necesarios para alcanzar al convergencia dependen del protocolo.

# Protocolos de routing
## Interior
Definen el conjunto de reglas que utiliza un router para compartir información con sus vecinos.

- Los mensajes de los protocolos se intercambian entre routers.
- Un protocolo describe: (RIP/OSPF)
	- Cómo enviar actualizaciones (TCP/UDP, nº saltos/coste enlace)
	- Qué información contienen (nº saltos/coste enlace)
	- Cuándo enviar (periódicamente/cambio)
	- Cómo localizar a los destinatarios de las actualizaciones (vecinos/global)
	- Qué algoritmo se debe aplicar a la información (Bellman-Ford/Dijkstra)

## Dinámico
![[_resources/Pasted image 20230210123255.png]]

### Vector-distancia
Cada nodo intercambia un vector de costes de enlace para cada red y los vectores de distancia para cada destino con los nodos vecinos.

#### RIP 
Algoritmo de encaminamiento original de ARPANET, utiliza el algoritmo de Bellman-Ford.

- Métrica: nº saltos (máx 15)
- Actualizaciones:
	- Cada 30 segundos o al arrancar la red
	- Se propagan a través de la red
- Convergencia finita proporcional al número de routers
	- Problemas al fallar enlaces, incremento exponencial.
- Máximo 180seg hasta eliminación
- UDP
- Routers no conocen topología
- v1→ sin seguridad, no VLSM → v2

#### Problemas de los protocolos vector-distancia
**Los bucles de enrutamiento**
Los provoca un tiempo de convergencia excesivo. Cuando falla un enlace, la información que contienen las tablas de encaminamiento de los routers puede no ser coherente desde que se produce el fallo hasta que se alcanza la convergencia, lo que puede producir bucles en el proceso de encaminamiento de los paquetes

**Cuenta al infinito**
Se deriva del problema anterior. Actualizaciones erróneas continuarán generando bucles hasta que algún otro proceso lo detenga.
Para evitar esto, se limita la distancia máxima de saltos de la red.

![[_resources/2. Interconexión de redes 2023-02-13 12.14.07.excalidraw]]

#### Soluciones para el problema de la cuenta al infinito
- **Horizonte dividido**
	- Consiste en no enviar información sobre una ruta por el mismo enlace por el que ha llegado, para que quien envía la información esté más cerca del destino que quien la recibe.
	- La ruta errónea se elimina en un periodo de 180 segundos (fin de temporización de las actualizaciones).
	- Evita los bucles y disminuye el tiempo de convergencia.
- **Actualizaciones inversas envenenadas**
	- Consiste en enviar actualizaciones hacia los vecinos con una métrica de valor 16 para todas las rutas aprendidas a través de esos vecinos.
	- Si dos rotuers tienen rutas apuntando uno al otro, el anuncio de una ruta inversa con métrica 16 deshace el bucle.
- **Actualizaciones desencadenadas**
	- Cuando un rotuer cambia el coste de una ruta, envía la tabla de vectores distancia modificada a los dispositivos vecinos.
	- Las notificaciones de cambios en la topología se propagan rápidamente, sin esperar al intervalo periódico normal.


### Protocolos de estado de enlace
Representan la segunda generación de RP.

Los routers mantienen una base de datos compleja, con la información de la topología de la red completa, que incluye a routers lejanos y cómo están interconectados.
Se basan en:
- **Mensajes LSA (Link State Advertisements):** mensajes de pequeño tamaño que comunican los cambios en la topología.
- Cada router genera una base de datos topológica con todos los LSA generados.
- Con esta base de datos se construye un árbol, en cuya raíz estará situado él mismo, y que contendrá todas las rutas posibles hacia cualquier red de destino. Entonces, clasifica las rutas en busca del camino más corto, utilizando un algoritmo SPF *(Shortest Path First)* que suele ser el algoritmo de Dijkstra.
- Una tabla de encaminamiento.

**Árbol SPF aplicando Dijkstra**
![[_resources/2. Interconexión de redes 2023-02-13 12.42.33.excalidraw]]

#### OSPF: Áreas
Para gestionar una interconexión de redes muy grandes, se divide la red en áreas más una red troncal.


### VD vs. LS
**Visión de la red**


**Requerimientos de memoria**
Los protocolos de estado enlace requieren más memoria por las bases de datos que manejan.

**Ancho de banda**
El tráfico en el inicio de la red es mayor en LS, pero se reduce, mientras que en VD es constante.

## Exterior
- No usan métricas.
- Proporcionan información sobre las redes que puede alcanzar un router y los [[#Sistema autónomo (SA)]] que hay que atravesar.
- Cada bloque de información que se intercambia contiene todos los SA visitados a lo largo del camino.

### BGP
- Se utiliza en redes TCP/IP.
- Es el protocolo de encaminamiento exterior estándar.
- TIpos de mesajes que se envían:
	- Open
	- Update
	- Keepalive
	- Notification
- Procedimientos
	- Adquisición de vecino
	- Detección de vecino alcanzable
	- Detección de red alcanzable

### eBGP
*External BGP Peering*: entre routers de diferentes AS

**Next hop:** 

### iBGP
*Internal BGP Peering*: entre routers del mismo AS

### Local preference
- Local en un AS, inicialmente toma el valor 100 cuando recibe notificación de un AS vecino.

### Multi-exit Discriminator (MED)
- Inter-AS
- Detemrina el mejor *path* para el tráfico entrante
- Usado para transmitir la preferencia relativa de los puntos de entrada