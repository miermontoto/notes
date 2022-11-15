![[_resources/Tema5-Transporte.pdf]]

## Índice
1. Introducción
2. Elementos de protocolos de transporte
3. Protocolo UDP
4. Protocolo TCP

---

# Introducción
Proporciona una comunicación lógica entre procesos que se ejecutan en hosts diferentes (de extremo a extremo, de origen a destino).

- Transporte asume que el resto de niveles se encarga de gestionar todo.
- <u>Host origen:</u> divide el mensaje en segmentos y se los pasa al nivel de red.
- <u>Host destino</u>: junta los segmentos en mensajes y se los pasa a la capa de aplicación.


![[_resources/Pasted image 20221115111716.png]]

- Abstracción mediante ***sockets***: utilización de primitivas para facilitar el diseño y la programación a través de interfaces.
- Se permite el intercambio de datos en abmos sentidos de forma simultánea: *full-dúplex*.
- Existen dos tipos de protocolos
	- Orientados a conexión: <u>segmentos</u>
	- No orientados a conexión: <u>datagramas</u>
- Comparación con la capa de red → hosts vs. procesos
- Redundancia de tareas de la capa de enlace
	- Control de flujo
	- Control de errores
	- Secuenciación

## Protocolos
### TCP
- Fiable
- Entrega de información ordenada
- Establecimiento de conexión
- Control de flujo meidante ventana deslizante
- Control de congestión explícita e implícita


### UDP
- No fiable
- Entrega de información no ordenada

# Elementos de protocolos de transporte
## Direccionamiento
Conocer el punto de acceso al servicio de transporte, que suele ser un número de puerto.

Si el puerto no pertenece a un protocolo conocido, es necesario "negociar" con el host el puerto de acceso: *portmapper*.

![[_resources/Pasted image 20221115113422.png]]

## Gestión de la conexión
### Establecimiento
Gestión de paquetes perdidos o que llegan con retardos.

***Three-way handshake***
Emisor y receptor acuerdan y confirman los números de inicio de secuencia.

![[_resources/Pasted image 20221115114622.png]]

#### Pérdida o retraso de los paquetes en el establecimiento
![[_resources/Pasted image 20221115114607.png]]


### Liberación de la conexión
- Asimétrica: línea telefónica tradicional
- Simétrica: evitar pérdidas abruptas de datos
![[_resources/Pasted image 20221115114721.png]]


#### Pérdida o retraso de los paquetes en la liberación
![[_resources/Pasted image 20221115114842.png]]