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