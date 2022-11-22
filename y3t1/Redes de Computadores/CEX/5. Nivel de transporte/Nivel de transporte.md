![[_resources/Tema5-Transporte.pdf]]

## Índice
1. [[#Introducción]]
2. [[#Elementos de protocolos de transporte]]
3. [[#Protocolo UDP]]
4. [[#Protocolo TCP]]

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

## Control de congestión
- Evitar la saturación del sistema por enviar una cantidad de paquetes mayor de la que admite.
- Tarea compartida por las capas de red y de transporte.
- Principales causas:
	- Ancho de banda y fiabilidad de la red
	- Capacidad del receptor

### Parada y espera
- El emisor envía un paquete y espera la confirmación del receptor para enviar el siguiente.
- No son necesarios buffers y únicamente se almacena el último paquete enviado.

### Ventana deslizante
- El emisor mantiene una lista con los *W* números de secuencia de los paquetes que puede transmitir → *Ventana emisora de tamaño W*
- El receptor mantiene una lista con los *W* números de secuencia de los paquetes que está autorizado a recibir → *Ventana receptora de tamaño W*
- Como los paquetes pueden perderse, el emisor guarda una copia de todos los paquetes que están enviados pero no asentidos por si hay que reenviarlos.

#### Asentimientos
- Cada asentimiento puede asentir a un grupo de paquetes o hacerlo de forma individual.
- Controlan el flujo y notifican el resultado de la transmisión de un paquete.
- Indican el número de paquete que se espera en la siguiente transmisión.

# Protocolo UDP
*User Datagram Protocol*

- Protocolo no orientado a conexión.
	- Cada segmento se trata de forma independiente de los demás.
- Es un protocolo no fiable → ofrece un servicio "best effort".
	- Sus mensajes pueden llegar fuera de secuencia o perderse.
- No se envían asentimientos: se reduce el tráfico de la red.
- No controla la congestión.
- Reduce la información suplementaria a enviar.

- Proporciona interfaz intermedia entre la capa de aplicación y la de red.
	- <u>Gestión del uso de los puertos.</u>
	- Puede proporcionar control de errores.
- Adecuado para situaciones con requisitos de conexión bajos
	- Servicio DNS
	- Vídeo bajo demanda
	- Radio por internet
	- VoIP
	- Modelos cliente-servidor

## Cabecera
![[_resources/Pasted image 20221122103048.png]]

- **Punto de origen:** contiene el número de puerto por si es necesario responder al origen.
- **Puerto de destino:** contiene el número de puerto del destino.
- **Longitud:** longitud de los datos del datagrama IP.
- **Suma de comprobación:** asegura la integridad del datagrama. Se calcula utilizando la cabecera UDP y el campo de todos.

## Remote Procedure Call (RPC)
Hacer que una llamada a un procedimiento remoto sea parecida a un procedimiento local.

![[_resources/Pasted image 20221122104023.png]]


## Real-time Transport Protocol (RTP)
- Ubicado justo encima de UDP en la capa de transporte.
- Se suele utilizar en la transmisión de paquetes de audio y vídeo en tiempo real.
- Puede ser unidifusión o multidifusión.
- Los números de paquetes son incrementales, consecutivos y únicos.

- Puede transmitir información relacionada a través de varios flujos.
- Utiliza las estampas de tiempo (*timestamping*) para sincronizar los diferentes flujos y reducir el *jitter*.
- Empleo de *buffers* para el control del tráfico.



# Protocolo TCP
*Transmission Control Protocol*

>[!warning]- Importante



- Protocolo orientado a conexión:
	- 3 fases: establecimiento de conexión, transferencia, cierre de conexión.
- Proporciona una capa fiable por encima del protocolo IP:
	- Se utilizan asentimientos (ACK)
	- Solicita reenvíos
- Se encarga de fragmentar la información que recibe del nivel superior
	- Tamaños máximos de 64KB.
	- Habitualmente 1460 bytes.

- Emplea puertos que son llamados a través de *sockets*.
- Utiliza un sistmea de ventana deslizante para el control de flujo a este nivel.
- Utiliza *buffers* para la transferencia, haciéndola más eficiente.
	- Acumula datos hasta que tiene suficientes para llenar un datagrama.
	- También se puede forzar el envío.
- Se intercambian flujos de bytes, dividos en segmentos.
- Realiza control de la congestión a nivel de transporte. Se necesitan algoritmos diferentes a los utilizados en niveles más bajos.

> [!FAQ]- Tamaño de ventana (ARP?) para el test

## Cabecera
![[_resources/Pasted image 20221122111350.png]]

- **Puerto de origen y destino:** contiene los números de los puertos de envío y recepción.
- **Número de secuencia:** identifica el número de secuencia del primer byte de datos del segmetno. Si es un segmento *SYN*, es el número de secuencia inicial.
- **Nº confirmación de recepción:** indica el número del siguiente byte que se desea recibir, no el último byte recibido.
- **Longitud encabezado:** cantidad de palabras de 32 bits incluídas en el encabezado.
- **Otros bits de utilidad**
	- **CWR (*congestion window reduced*)**: bit para indicar reducción del tamaño de la ventana.
	- **ECN (*explicit congestion notification*):** identificador que se utilizar para indicar que se está congestionando la red.
	- **URG (*urgente*):** utilizado para indicar que el valor del campo "apuntador de urgente" es válido.
	- **ACK (*acknowledgment*):** se utiliza para indicar que la respuesta también confirma datos recibidos.
	- **PSH (*pushed data*):** indica la entrega inmediata de los datos al nivel superior. No se espera a que se llene el buffer.
	- **RST (*reset*):** empleado para reiniciar la conexión.
	- **SYN (*synchronize*):** se utiliza para establecer la conexión. Únicamente los primeros mensajes tendrían este bit a 1.
	- **FIN:** corta la conexión y es el último mensaje enviado por cada transmisor.
- **Tamaño de ventana**
- **Suma de verificación**
- **Apuntador de urgente:** es un *offset* que permite conocer el valor del último byte de los datos urgentes.
- **Options:** permite definir nuevas opciones que no estén entre las incluidas por defecto en la cabecera.

## Establecimiento de conexión
### Handshake de triple vía
![[_resources/Pasted image 20221122114715.png]]

### Handshake de cuatro vías
![[_resources/Pasted image 20221122115241.png]]


## Fiabilidad
### Pérdida de segmentos
- Los segmentos tienen número de secuencia.
- Se responderá a la llegada de segmentos correctos mediante asentimientos.
- Los asentimientos hacen referencia al flujo de bytes recibidos, no a segmentos individuales.
- Se utilizarán temporizadores para controlar la pérdida de tramas: *retransmisión*.


### Duplicados
- Cuando TCP considera que se ha perdido un segmento enviará un duplicado.
- El receptor detectará el doble envío gracias al número de secuencia y descartará la trama.


### Eficiencia y control de flujo

