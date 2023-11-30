Normalmente, las redes inalámbricas se basan en el estándar IEEE 802.11

## Componentes
![[_resources/Pasted image 20231130150705.png]]

- **BSS**
- **IBSS** (*independient*)
- **ESS**
## Capas
![[_resources/Pasted image 20231130150847.png]]

### Capa PHY
Especifica la codificación de los bits a nivel físico: frecuencias de trabajo, técnicas de modulación en el aire...

### Capa MAC
Se comunica con la capa superior mediante bloques de datos denominados **MSDU** (*MAC Service Data Unit*) con el que:
- *en transmisión* → ensambla los datos en tramas (MPDU)
- *en recepción* → desensambla tramas, reconoce direcciones y detecta errores
- Siempre controla el acceso al medio

![[_resources/Pasted image 20231130151052.png]]

## Servicios
> [!faq] Lo que "más nos interesa"


9 servicios: 6 de transferencia de datos, 3 de seguridad en la red.

### Servicios de transferencia de datos
- *Distribution Service* → utilizado por estaciones BSS para enviar datos a otras estaciones BSS usando el DS en un mismo ESS.
- *Integration Service* → transfiere datos entre una estación LAN 802.11 y otra LAN 
- *MSU Delivery* → servicio básico para enviar datos

### Servicios relacionados con asociaciones
Antes de que el DS pueda comunicarse con una estación, esta debe estar *asociada* → concepto relacionado con las transiciones que se producen al moverse.

- SIN transición
- Transición BSS
- Transición ESS

### Servicio de Asociación

### Servicio de Reasociación
Una STA usa la reasociación al moverse de un BSS a otro BSS dentro de un ESS.

# Estándares de seguridad
- WEP
- WPA
- WPA2
- WPA3

## IEEE 802.11i
Integrado en 802.11 2020, servicios básicos de seguridad → 
- Control de acceso mediante autenticación
- Confidencialidad e integridad de los mensajes

## Fases de operación de una RSN
> [!error] ESTA DIAPOSITIVA HAY QUE SABÉRSELA
> "Es la clave de todo"

![[_resources/Pasted image 20231130152545.png]]

### Fase 1. Descubrimiento
**Propósito:** que una STA y un AP <u>se reconozcan</u> mutuamente, <u>acuerden las capacidades de seguridad</u> y <u>establezcan una asociación</u>.

![[_resources/Pasted image 20231130153618.png]]

<u>Capacidades de seguridad</u>
1. Autenticación y gestión de claves
2. Confidencialidad e integridad de tramas

**Interacciones**
1. a
2. b
3. c


### Fase 2. Autenticación
> [!warning] Incompleto
> Desde el protocolo EAP hasta abajo, todo entra dentro de esta fase.

### Fase 3. Gestión de claves
Se generan claves y se distribuyen.
Esta fase comienza si la fase previa de autenticación terminó satisfactoriamente → *la STA, el AP y el AS disponen de la misma PMK.*

**Tipos de claves**
- <u>Claves de parejas</u>: usadas para la comunicación entre una STA y un AP
- <u>Claves de grupos</u>: usadas para la comunicación multicast

**Claves de parejas**
![[_resources/Pasted image 20231130155210.png]]

**Claves de grupos**
![[_resources/Pasted image 20231130155223.png]]


**Distribución de claves**
![[_resources/Pasted image 20231130155301.png]]
### Fase 4. Transferencias de datos protegida
**Técnicas de protección de datos transmitidos**
- TKIP *obsoleta*
- <u>CCMP</u>
	- *Integridad* → Se calcula un MAC aplicando AES a cada bloque y se encadenan los cifradores en modo CBC.
	- *Confidencialidad* → Utiliza AES para cifrar la información y se encadenan los cifradores en modo CTR.

> [!note] La fase 5 no tiene información referente a seguridad.
## Protocolo EAP
### Introducción
> [!info] Definición
> Proporciona un servicio de transporte genérico para intercambiar información de autenticación entre un cliente y un servidor de autenticación.

Extensible → soporta múltiples protocolos de autenticación.

![[_resources/Pasted image 20231130153839.png]]

### Métodos de autenticación
- EAP-TLS: define la encapsulación del protocolo TLS en EAP
- EAP-TTLS: igual que el anterior, pero solo el servidor tiene certificado.
- EAP-GPSK: define la autenticación mutua y la derivación de una clave de sesión a partir de claves pre-compartidas.
- EAP-IKEv2: define la autenticacion mutua y el establecimiento de claves de sesión usando el protocolo IKE.

### Entorno típico de utilización
![[_resources/Pasted image 20231130153729.png]]

### Formato de los mensajes
Código → Identificador → Longitud → Datos

### Intercambio de mensajes
![[_resources/Pasted image 20231130154043.png]]

## IEEE 802.1X
### Introducción
Se diseñó para proporcionar funciones de control de acceso para LANs basadas en puertos

**Entidades**
![[_resources/Pasted image 20231130154409.png]]

> [!warning] Muy importante el concepto de "puerto"
> *Puerto* → canal lógico de comunicación que se mapea a una conexión física.

**Tipos de puertos**
- Puerto NO controlado → permite el intercambio de PDUs entre el suplicante y el autenticador independientemente del estado de autenticación del suplicante.
- Puerto controlado → permite el intercambio de PDUs entre el suplicante y el autenticador solo si el suplicante ha sido convenientemente autenticado.

### Bloqueo de puertos
> [!error] Todo esto es bastante importante
> Porque es la clave de el paso/no paso de información.


![[_resources/Pasted image 20231130154537.png]]

### EAP over LAN - Paquetes
**Paquetes más comunes**
- <u>EAPOL-EAP</u> → contiene un paquete EAP encapsulado.
- <u>EAPOL-Start</u> → suplicante puede enviar este paquete en vez de esperar por un *challenge* de un autenticador.
- <u>EAPOL-Logoff</u> → usado para devolver el esatdo del puerto no autorizado cuando el suplicante termina de usar la red.
- <u>EAPOL-Key</u> → usado para intercambiar claves criptográficas.

**Formato del paquete EAPOL**
![[_resources/Pasted image 20231130154636.png]]

#### EAP over LAN - Intercambio de mensajes
![[_resources/Pasted image 20231130154742.png]]