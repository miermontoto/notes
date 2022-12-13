![[_resources/Tema 6 - Aplicación.pdf]]

---

# Introducción
La capa de aplicaciones está formada por un conjunto de protocolos:
- Cada uno de ellos se utiliza para un propósito específico.
- Cada uno de los protocolos es independiente.
- Pueden convivir varios dentro de una red y dispositivo.
- Son utilizados por aplicaciones a las que se denomina *servicios*.
- Utilizan servicios extremo a extremo del nuvel de transporte.

![[_resources/Pasted image 20221212134124.png]]


## Protocolos

### Protocolos de servicios orientados al usuario
#### HTTP
- Protocolo para la transferencia de ficheros de hipertexto.
- Base para los servicios web.
- Sobre una capa de cifrado se le conoce como HTTPS.

#### SMTP, POP3, IMAP
Protocolos para el envío de mensajes de correo electrónico.

#### TELNET y SSH
- Protocolos para el trabajo mediante terminal remota.
- Permiten trabajar desde una localización remota con la consola de un controlador.

#### FTP
Protocolo utilizado para la transferencia de archivos entre máquinas remotas.

#### SIP
- Protocolo de control y señalización para la creación, modificacióno y finalización de sesiones de uno o más participantes.
- Sesión: llamada de VoIP, mensajería, videoconferencia...

#### RTSP
Protocolo para el control de servicio multimedia en streaming.

#### DNS
- Protocolo para la resolución de nombres.
- A partir del nombre lógico de una máquina resuelve su dirección IP.

#### DHCP
Protocolo para el reparto de direcciones IP de forma dinámica.

#### NTP
Permite el acceso y la distribución de señales de reloj precisas.

#### LDAP
- Implementa un servicio de directorio.
- Altamente optimizado para lectura de datos

#### SNMP
Protocolo para la gestión de red.

### Protocolos de servicios básicos

## Modelos

### Modelo cliente/servidor
- Programa servidor: ofrece un servicio y acepta peticiones de clientes.
	- Host siempre disponible.
	- Dirección IP y puerto conocidos.
	- Su ejecución debe comenzar antes que la ejecución de los clientes.
	- Puede atender a varios clientes.
- Programa cliente: se comunican con el servidor para solicitar un servicio.
	- Es el que inicia la comunicación con el servidor.
	- Puede tener dirección IP dinámica y puerto aleatorio.
	- No se comunica directamente con otro cliente.

#### Gestión de servidores
- Habitualmente los servidores no son nada sencillos
	- Procesamiento de peticiones de forma concurrente.
	- Aspectos relacionados con la seguridad
- Los servidores suelen tener dos partes:
	- Un proceso *maestro* sencillo, responsable de aceptar nuevas peticiones.
	- Varios *esclavos*, responsables de manejar cada una de las peticiones.

#### Técnicas de gestión de esclavos
- <u>Esclavos por petición</u>: cada vez que llega una petición, se crea un esclavo para procesarla.
- <u>Esclavos por sesión</u>: cada vez que se inicia una sesión, se crea un esclavo para gestionarla.
- <u>Conjunto de esclavos</u>: el servidor tiene inicialmente un conjunto de esclavos activos inicialmente que va repartiendo según llegan las peticiones. Cuando estas terminan, los esclavos se liberan.

#### Problemas de seguridad
- Protección del sistema y de los recursos
	- Deben mantener reglas de autorización y protección.
	- Restringir el acceso a ciertas zonas.
- Integridad
	- Deben protegerse contra peticiones formadas equivocadamente y contra peticiones que causen la interrupción del programa.

- Las arquitecturas de los servicios pueden ser complejas.
	- Reducir el consumo de recursos.
	- Garantizar la disponibilidad del servicio.
	- Garantizar la escalabilidad del servicio.
	- Incrementar la seguridad del servicio.
- Otros elementos:
	- Cachés
	- Proxies
	- Repartidores de carga
	- Firewalls, IDS e IPS

#### Servicios en la nube
 - El cliente puede delegar parte de sus funciones en el servidor.
- La mayoría de servicios se trasladan al servidor.
- Mayor necesidad de recursos y escalabilidad - Computación en la nube

- <mark style="background: #BBFABBA6;">Ventajas</mark>
	- Facilidad de escalado
	- Posible ahorro económico
	- Delegación de problemas técnicos: *PaaS* (Platform as a Service)
- <mark style="background: #FF5582A6;">Inconvenientes</mark>
	- No se tiene acceso físico a los servidores.
	- Cesión la información del servidor a terceras empresas.

### Modelo P2P
Distribuye la información en vez de concentrarla en un servidor.

- Se consideran todos los nodos iguales a la hora de compartir la información
	- Todos los nodos pueden dar y recibir.
	- No existe un proveedor centralizado.
	- Las comunicaciones son simétricas.

- <mark style="background: #BBFABBA6;">Ventajas</mark>
	- <u>Escalabilidad</u>: es muy fácil unir nuevos nodos.
	- <u>Descentralización</u>: la información no se almacena únicamente en un servidor.
	- <u>Coste</u>: el gasto se reparte entre los diferentes nodos.
	- <u>Robustez</u>: no hay único punto de fallo.
- <mark style="background: #FF5582A6;">Inconvenientes</mark>
	- La información está distribuida entre múltiples nodos que, a priori, desconocemos.
	- Un nodo malicioso puede causar grandes problemas a toda la red.

#### Funcionamiento básico
- Se localizan otros pares que tengan la información deseada (proveedores)
- Se descarga la información (se divide en porciones)
- Se cede la información tan pronto como se tenga