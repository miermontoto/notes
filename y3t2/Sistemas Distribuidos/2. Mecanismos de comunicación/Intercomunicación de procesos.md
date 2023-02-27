![[_resources/02-1-Intercomunicacion.pdf]]

---

# A1. Comunicación orientada a mensajes
## A1.1. Sockets
### Definición
- Abstracción software
- Representa un extremo de una conexión `IP:puerto`
- Permite ignorar los detalles de las capas de transporte y red

- <u>TCP: orientado a conexión</u>
- UDP: sin conexión

### Conceptos importantes
- El paso de mensajes a través de TCP garantiza el orden de llegada, no la atomicidad de los mensajes.
- La API de sockets es el mecanismo de más bajo nivel que se va a utilizar, por debajo de esto está la implementación de los protocolos TCP/IP.
- La API de sockets proporciona llamadas al sistema operativo que permiten crear sockets, conectarlos y enviar y recibir mensajes a través de ellos.

### Pasos en la comunicación TCP
1. Dos procesos quieren comunicarse.
2. El servidor crea un socket de escucha.
3. El cliente crea un socket de datos.
4. El cliente intenta una conexión
5. El servidor acepta la conexión
	- Se crea un nuevo socket de datos en el servidor
	- Se establece un canal por el que pueden dialogar
6. El socket de escucha queda libre. Otros procesos pueden intentar conexión.
7. Cuando termina el diálogo, los sockets de datos se destruyen.

![[_resources/2. Intercomunicación de procesos 2023-02-02 09.36.00.excalidraw]]

### Orden de funciones de la API
![[_resources/Pasted image 20230202095524.png]]

- `socket` crea el socket.
- `bind` asigna IP y puerto a un socket.
- `listen` prepara el socket para aceptar conexiones (lo convierte en socket de escucha)
- `accept` bloquea el proceso hasta que llegue una conexión (escucha)
- `connect` intenta una conexión con un socket pasivo.
- `send` envía datos por la conexión.
- `recv` recibe datos de la conexión.
- `close` cierra un extremo de la conexión.

En UNIX, existe `write` y `read` para enviar o recibir datos.
En UDP, se utiliza `sendto` y `recvfrom` y se reduce el número de funciones que se utilizan.

Para detectar errores, se detectan los valores que devuelven las funciones. En caso de ser `-1`, se comprueba la variable global `ERRNO` que aporta más información sobre el fallo.

Ambas entidades cuentan con buffers en caso de que no se pueda enviar o recibir la información en dicho momento.