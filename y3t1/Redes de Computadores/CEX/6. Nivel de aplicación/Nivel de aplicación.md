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

#### DNS
- Protocolo para la resolución de nombres.
- A partir del nombre lógico de una máquina resuelve su dirección IP.

### Protocolos de servicios básicos