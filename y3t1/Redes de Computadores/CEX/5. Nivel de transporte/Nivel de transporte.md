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
- Se utiliza un sistema de ventana deslizante para gestionar el flujo.
- Se utiliza un tamaño de ventana variable controlado por el receptor.
- Se utiliza el sistema de superposición para el ahorro de ancho de banda consumido por los ACKs.

### Control de errores
- Entrega los datos sin errores.
- Suma de comprobación.

### Control del flujo mediante ventana deslizante
- La ventana es de tamaño variable y está controlada por el receptor.
- No controla el número de segmentos recibidos, sino el número de bytes.
- Ventana del emisor: número de bytes que puede enviar sin recibir asentimiento.
- Ventana del receptor: número de bytes que peude aceptar.
- Las respuestas transportan el número de bytes recibidos correctamente y el tamaño de la ventana receptora, que puede aumentar o disminuir.
- <u>Se pueden realizar asentimientos acumulativos con el objetivo de reducir el ancho de banda utilizado.</u>

![[_resources/Pasted image 20221129103519.png]]

- Los datos con el flag URG siempre pueden enviarse.
- Si la ventana está llena, puede enviarse un segmento de tamaño 1 byte.
- **Algoritmo de Naggle**: adecuado para situaciones de envío con paquetes pequeños.
	- Se envía el primer segmento de información que llegue.
	- La nueva información se almacena en un buffer hasta que llegue la confirmación.
	- Reducir el gasto de ancho de banda por culpa de las cabeceras.

## Control de la congestión
- El **reloj de confirmación de recepción** (*ack clock*)
	- La velocidad de la red por la que se emite está limitada a su nodo más lento.
	- El emisor necesita adaptar su velocidad a la máxima permitida por dicho enlace.
	- ![[_resources/Pasted image 20221129105058.png]]
- Utilización de **temporizadores** para evitar sobrecarga de la red.
	- <u><i>Retransmission Time Out</i> (RTO)</u>
		- Tiempo que se espera antes de reenviar un segmento.
		- ![[_resources/Pasted image 20221129105912.png]]
	- <u>Temporizador de Persistencia</u>
		- El receptor envía un ACK con tamaño de ventana 0.
		- Cuando actualiza el tamaño de ventana, el paquete se pierde.
		- El emisor envía un mensaje de sondeo para forzar que el receptor le confirme el tamaño de ventana.
	- <u>Temporizador <i>Keep Alive</i></u>
		- Después de tiempo sin mensajes, una de las partes envía un mensaje vacío para confirmar que el otro extremo sigue activo.
- **Ventana de congestión**
	- Máximo número de bytes que el emisor puede poner en la red.
	- Funciona en paralelo con la ventana deslizante del control de flujo - el valor más pequeño de ambas se corresponde con el valor de la ventana que se vaya a utilizar.
	- Hay que obtener su valor óptimo para evitar saturar la red.
	- El valor ideal puede variar y es necesario que la ventana se adapte a dicho tamaño.
	- Se intentan utilizar reglas *AIMD*.
- **Algoritmos de control**
	- <u>Inicio lento</u>
		- Al inicio de la transmisión, se envía un único segmento.
		- Una vez que llega corretamente la confirmación, se envían dos segmentos.
		- Cuando llegan nuevamente las confirmaciones, se duplica de nuevo el tamaño de ventana - cuatr segmentos.
		- La operación se repite hasta que ocurra algún evento que indique que hay congestión en la red.
		- Incremento exponencial - la ventana de congestión puede crecer muy rápido.
		- Un crecimiento excesivamente rápido hace que sea muy difícil encontrar el tamaño de ventana ideal.
		- Se puede establecer un umbral de inicio lento, a partir del cual el incremento pasa a ser lineal y no exponencial.
		- Cada vez que llegan todas las confirmaciones, el tamaño de la ventana se incrementa en un solo segmento en lugar de duplicarse.
		- Este umbral va aumentando cada vez que aumenta el tamaño de la ventana.
		- Esto permite encontrar de una forma más precisa el tamaño ideal de la ventana.
	- Retransmisión rápida
	- <u>Recuperación rápida</u>
		- Se detecta que hay congestión en la red.
		- El valor de la ventana de congestión se reinicia.
		- No se utiliza una ventana de tamaño uno, sino una nueva ventana con la mitad del tamaño que la actual.
	- <u>Asentimiento selectivo</u>
		- El campo ACK de la cabecera indica el último paquete que se ha recibido en orden y correctamente.
		- Mediante el campo `options` se pueden hacer asentimientos selectivos de tramas que llegan fuera de ordne.
		- Se pueden graupar paquetes consecutivos que puedan haber llegado fuera de orden.
		- Ayuda en la velocidad de recuperación ante pérdidas, pero es un complemento a las técnicas anteriores.
		- ![[_resources/Pasted image 20221129115626.png]]

### Pérdida de paquetes
**¿Cómo detectar que se pierde un paquete?**
- Salta uno de los temporizadores RTO - se considera que el paquete se ha perdido o que llegará demasiado tarde.
- Se reciben tres asentimientos repetidos.

**¿Cómo actuar cuando se pierde un paquete?**
- Reiniciar el valor de la ventana de congestión.
- Dividir entre dos el valor del umbral de inicio lento.
- Repetir el proceso para ir aumentando el valor de la ventana hasta que peuda volver a aparecer congestión.

### TCP Tahoe
- Implementa inicio lento.
- Utiliza umbral de inicio lento.
- Detecta pérdida de paquetes mediante RTO y ACKs repetidos.
- Cuando se pierde un paquete, reinicia el valor de la ventana de congestión de un segmento y el umbral de inicio lento a la mitad del valor actual.

## Problemas y futuro
- Desarrollado en los 80 y apenas ha sufrido cambios significativos.
- El aumento de las velocidades de las redes ha supuesto un problema muy importante.
- Debido a su amplia implementacióin, es muy complicado cambiarlo por nuevos protocolos.
- El control de la congestión aún debe ser mejorado.