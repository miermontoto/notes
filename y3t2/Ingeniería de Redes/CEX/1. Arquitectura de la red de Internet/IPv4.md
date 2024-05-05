
![[_resources/IRD_Arquitectura de la red Internet 2023.pdf]]																										

---
# Gestión de Internet
**Internet**: Red de redes conectadas por encaminadores / enrutadores (routers).
|Capas TCP/IP| |
|-------| ---|
|Aplicación | |
|Transporte |Puertos| 
|Internet |Direcciones IP| 
|Enlace |Acceso a la red (MAC)|
|Física |Medios físicos|

Internet es un conjunto de redes, a esas redes se les llama "Sistemas autónomos".  Cada sistema autónomo está formado por redes y routers administrados por un operador. Los diferentes sistemas autónomos están conectados entre ellos por otros enrutadores.

La IANA supervisa la asignación de direcciones IP. Otorga a cada ISP las direcciones IP que puede asignar a los equipos de su Sistema autónomo.
La IETF se encarga de generar protocolos y estándares.
La ICANN coordina el sistema de resolución de nombres DNS.

**Regional Internet Registries (RIR)**: Registros Regionales de Internet.
La IANA asigna al RIR de cada continente la direcciones IP que se pueden asignar. El RIR asigna a los ISP de su continente las direcciones IP que cada ISP puede asignar.
IANA → RIR → ISP → Equipos


## Jerarquía
|Tier|Op.|Tipo|
|---|---|---|
|1|Acceso a cualquier punto de internet gratuitamente |ISP|
|2|Acceso a cualquier punto de internet con pago a los Tier 1|IP Backbone|
|3|Tier 2 con contratos a varios Tier 1|Multi-homed ISP|
|Usuarios|Acceso limitado, contrata los servicios de un ISP para acceder a internet | Usuario|

![[_resources/Pasted image 20230202111859.png]]


# Protocolo TCP/IP
![[_resources/Pasted image 20230202114841.png]]

### Procesado de paquetes TCP/IP
![[_resources/Pasted image 20230202113719.png]]

## Física (L1)
Dada una interfaz (RJ-45) la capa física se encarga de decidir la codificación de la señal, el número de niveles y sus correspondientes significados para señales digitales. En el caso de señales analógicas, define otros aspectos como la amplitud de la señal y la frecuencia.

Un <u>hub</u> trabaja a nivel de capa física.

## Enlace (L2)
- Se encarga de enviar los datos a dispositivos conectados a la red.
- Necesita conocer las características de la red para poder realizar el envío: formato del paquete de datos, direccionamiento físico, etc.
- Encapsula los datagramas IP dentro del formato de trama utilizado por la red y traduce la dirección IP en una dirección física.

En este nivel, se utilizan las direcciones MAC. Por lo tanto, no hay acceso a las direcciones IP. Una dirección MAC tiene 48 bits (MAC-48) o 64 bits (EUI-64).
En las MAC-48, los 3 primeros bytes pertenecen al fabricante y los otros 3 al IEEE
Para la MAC: 00:19:0E:0A:45:63 => 02:19:0E:FF:FE:0A:45:63

Un <u>switch</u> trabaja a nivel de enlace.

![[_resources/1. Arquitectura de la red de Internet 2023-02-02 11.22.14.excalidraw](_resources/1.%20Arquitectura%20de%20la%20red%20de%20Internet%202023-02-02%2011.22.14.excalidraw.md)

### MAC
La capa de enlace MAC se encarga de monitorizar el acceso al medio. Se deben evitar en la medida de lo posible las colisiones entre comunicaciones y en caso que suceda una colisión, controlar la situación.
CSMA/CD → Carrier Sense Medium access / Collision Detection.
El tiempo se divide en ranuras. Si el medio no está ocupado al inicio de una ranura, se transmite, si hay una colisión se detiene la transmisión. Tras la detención, se espera un tiempo aleatorio y se repite el algoritmo.

### LLC
Control de enlace. Controla el flujo y los errores. El control de flujo consiste en **evitar** que un emisor que emite con una alta frecuencia inunde el medio, haciendo que otros emisores no emitan.

## Red (L3)
### Protocolo ARP
- Traduce direcciones IP a MAC.
- Los hosts manejan una tabla ARP donde figuran las traducciones realizadas.

![[_resources/Pasted image 20230202115140.png]]

### Protocolo IP
- **Datagrama IP:** unidad básica de información.
- **No orientado a conexión:** cada datagrama se trata de forma independiente, pudiendo seguir caminos distintos.
- **No fiable**
- **Inseguro**

![[_resources/Pasted image 20230302192525.png]]

#### Direccionamiento IP
- **Dirección IP**
- **Máscara de red**
- **Direcciones especiales**
	- Únicas para cada red.

##### IP enmascarada
- **NAT/PAT**
- Uso de direcciones IP virtuales dentro de la red LAN
- Solo se utiliza la IP pública para el exterior.

##### DHCP: configuración de un host
- Protocolo para obtener parámetros de configuración automáticamente desde la red.
- Modelo cliente-servidor.
- Modelos:
	- Dinámico: direcciones disponibles con plazo limitado.
	- Automático: direcciones disponibles con plazo ilimitado.
	- Estático: preasignación manual.

### Encaminamiento

## Transporte (L4)


