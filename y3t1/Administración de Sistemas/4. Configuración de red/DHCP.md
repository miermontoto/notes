# Protocolo DHCP
1. El cliente DHCP envía un paquete **DHCPDISCOVER** a la dirección `255.255.255.255` desde la dirección `0.0.0.0` (difusión amplia o broadcast). El cliente establece contacto con todos los integrantes de la red con el objetivo de localizar servidores DHCP disponibles.
2. Todos los servidores DHCP que escuchan peticiones en el puert 67 responden a la solicitud del cliente con un paquete **DHCPDOFFER**, que contiene una dirección IP libre, la dirección MAC del cliente y la máscara de subred, así como la dirección IP y la ID del servidor.
3. El cliente DHCP escoge un paquete y contacta con el servidor correspondiente con **DHCPREQUEST**. El resto de servidores también reciben este mensaje de forma que quedan informados de la elección. Con esta notificación, el cliente también solicita al servidor una confirmación de los datos que la ha ofrecido.
4. Para finalizar, el servidor confirma los paráemtros *TCP/IP* y los envía de nuevo al cliente con el paquete **DHCPACK**. Este paquete contiene otros datos guardados (servidores DNS, SMTP, POP3, ...). El cliente DHCP guarda localmente los datos que ha recibido y se conecta con la red.
	-  SI el servidor no contara con ninguna dirección más que ofrecer o durante el proceso la IP fuera asignada a otro cliente, entonces respondería con **DHCPNAK**.

## Asignación
La direcicón asignada se guarda en la base de datos del servidodr junto con la dirección MAC del cliente.

### Asignación dinámica
Los parámetros de configuración son válidos para un periodo determinado. Este indica cuánto tiempo puede acceder un dispositivo a la red con esta dirección.

Antes de que se agote (sobre la mitad), los clientes han de solicitar una prolongación de la concesión enviando una nueva **DHCPREQUEST**. Si no lo hace, no tiene lugar el refresh y, en consecuencia, el servidor la libera.

### Asignación manual (DHCP estático, reservas)
Las direcciones IP se asignan "a mano" con ayuda de las direcciones MAC definidas por el servidor DHCP sin limitación temporal.
Interesante para servidores que han de estar permanentemente disponibles en la misma dirección.


## DHCP + DNS

## DHCP + Seguridad
El DHCP puede ser manipulado fácilmente. Como el cliente hace un llamamiento a discreción a todos los servidores DHCP, un atacante podría hacerse pasar por uno de ellos, un *DHCP rogue*. Dicho atacante podría entonces enviar parámetros manipulados o inservibles.

# Implementación de DHCP
## Planificación de servidores DHCP y reenvío
Como los mensajes DHCP son mensajes de difusión, los enrutadores no los reenvían entre subredes. Si se tiene varias subredes y se desea proporcionar el servicio para cada subred, existen dos opciones:
- Instalar un servidor DHCP en cada subred.
- Configurar los enrutadores para reenviar los mensajes de difusión DHCP entre subredes y configurar múltiples ámbitos en el servidor DHCP, un ámbito por subred.

## Ámbito
Cada subred debe tener su propio intervalo de direcciones IP únicas. En un servidor DHCP, dichos intervalos se representan con **ámbitos**:

Un **ámbito** es una agrupación administrativa de direcciones IP para equipos de una subred que usa el servicio DHCP. El administrador crea primero un ámbito para cada subred.

### Propiedades

## Planificaciones
- Planificación de máscaras subred
- Planificación de intervalos de exclusión
- Planificación de la configuración TCP/IP

# DHCP + IPv6


