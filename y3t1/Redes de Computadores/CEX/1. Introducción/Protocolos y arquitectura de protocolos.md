# Concepto
<mark style="background: #ADCCFFA6;">Conjunto de reglas que gobiernan el intercambio de información entre dos entidades.</mark>

Puntos clave:
- Mensajes enviados
- Acciones a realizar
- Respuestas a enviar
- Orden adecuado de los mensajes

Define:
- **Sintaxis:** tipos y formato de los mensajes intercambiados (PDUs)
- **Semántica:** significado de los mensajes y acciones a realizar cuando se transmita, reciba y ocurra algún evento.
- **Modelo de interacción:** orden de los mensajes intercambiados

<mark style="background: #FF5582A6;">!</mark> **Normalización:** garantiza la interoperabilidad, la gestiona corporaciones externas sin intereses.

***PDU:** Protocol Data Unit***

# Arquitectura de protocolos
<mark style="background: #ADCCFFA6;">Estructura formada por el conjunto de módulos o capas que realizan las funciones de comunicación entre entidades.</mark>

Cada capa:
- Está formada por un conjunto de tareas relacionadas.
- Proporciona servicios a la capa inmediatamente superior para que esta realice sus funciones.
- Incorpora su propia información de control (tiene sus propias PDUs)

![[_resources/Pasted image 20220919132255.png]]

## Protocolos y servicios
Cada protocolo ofrece una serie de servicios, que son conocidos por la capa superior.

Ejemplos de tipo de servicio:
- Fiable
- No fiable
- Orientado a conexión
- Datagramas

## <mark style="background: #BBFABBA6;">Ventajas</mark>
- Modularidad
- Facilidad en el mantenimiento y la actualización de componentes de la red.
- Asimilación de capas en componentes hw/sw.

## <mark style="background: #FF5582A6;">Inconvenientes</mark>
- Puede haber tareas duplicadas en varias capas
- Cada protocolo de cada capa añade información adicional a enviar por la red (sobrecarga).

## Arquitectura a estudiar
- **Aplicación:** el navegador se comunica con el servidor web.
- **Transporte:** todos los datos se comunican de un lado a otro.
- **Red:** los datos se encaminan a través de la red para que lleguen.
- **Enlace:** el PC y el servidor envían los datos dentro de su red local hasta el punto de salida.
- **Físico:** los bits fluyen de alguna manera por los enlaces.

### TCP/IP
- **Aplicación**
	- Aplicaciones de usuario
	- Unidad básica de información: mensaje
	- Protocolos: HTTP, FTP, SMTP, DNS, ...
- **Transporte**
	- Controla el flujo de datos entre los sistemas finales y los transporta.
	- Capa común para todas las aplicaciones de usuario
	- Direcciona las aplicaciones mediante puertos
	- Protocolos: TCP, UDP
	- Unidad básica de información: segmentos (TCP) o datagramas (UDP)
- **Internet**
	- Encamina los paquetes a través de varias redes
	- Controla la congestión de la red
	- Permite interconexión de redes de distinta naturaleza.
	- Direcciona las máquinas mediante direcciones IP
	- Unidad básica de información: datagrama
	- Protocolos: IP (IPv4 / IPv6), ICMP, ...?
- **Acceso a la red**
	- Gestiona cada salto de la información.
	- Controla el flujo de datos entre cada par de nodos de la ruta.
	- Encamina la información dentro de las redes LAN.
	- Direcciona las máquinas mediante direcciones físicas (MAC address)
	- Unidad básica de información: trama.
	- Protocolos: ethernet, wifi, token ring, ...
- **Físico**
	- Transporta la información
	- Envía los bits de manera analógica, de manera eléctrica o electromagnética.
	- Es dependiente del medio de transmisión.

## Modelo OSI
Modelo de capas ideado a principio de los 80. Por aquel entonces, el modelo OSI fue superado por el ya existente modelo TCP/IP.
Incluye capas separadas: sesión y presentación:
- **Presentación:** define el formato de datos a intercambiar (sintaxis y semántica). Compresión de datos, criptografía, ...
	- **Sesión:** tarea de sincronización para el intercambio de datos.  Establece puntos de restauración del sistema y recuperación de datos.

| ![[_resources/Pasted image 20220920110612.png]] | ![[_resources/Pasted image 20220920111309.png]] |


## Funcionamiento de la arquitectura de protocolos
| ![[_resources/Pasted image 20220920111848.png]] \| ![[_resources/Pasted image 20220920111939.png\|800]] |

### Elementos de interconexión en la arquitectura
- **Router:** encamina datagramas examinando su dirección IP.
	- Cada puerto del router pertenece a una red física diferente y tiene su propia dirección IP  y dirección MAC.
- **Switch:** encamina tramas examinando su dirección MAC.
	- Todos los puertos del switch peretenecen a la misma red física y cada uno de ellos tiene su propia dirección MAC.
- **Hub:** transmite bits por todos los puertos.

### Ejemplo final
- **Aplicación:** Get \<url\> HTTP
- **Transporte:**
	- **Cabecera del segmento:** Puerto origen (3250, navegador), puerto destino (80, servidor web)
	- **Cuerpo del segmento:** mensaje
- **Internet:**
	- **Cabecera del datagrama:** IP origen (PC), IP destino (servidor)
	- **Cuerpo del datagrama:** segmento TCP
- **Acceso a la red:** 
	- **Cabecera de la trama:** MAC origen (PC), MAC destino (mi router)
	- **Cuerpo de la trama:** datagrama IP
- Ciclar entre la capa Internet y la capa Enlace hasta llegar a la IP destino.