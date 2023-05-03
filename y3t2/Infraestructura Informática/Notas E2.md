# Tema 5
## Tipos de arquitectura
1. **Elemento estructural**
2. **Disponibilidad de los dispositivos de almacenamiento**
3. **Método de conexión a los dispositivos de almacenamiento**

### Arquitecturas centradas en los servidores
1. El servidor es el elemento estructural.
2. Los dispositivos de almacenamiento son locales a los servidores, por lo que solo son accesibles a través de su servidor.
3. Los dispositivos de almacenamiento se conectan a través de un bus interno SATA o SAS.

- <mark style="background: #FF5582A6;">El almacenamiento libre en un servidor no puede asignarse a otro.</mark>
- <mark style="background: #FF5582A6;">La asignación de nuevo almacenamiento requiere la instalación de un nuevo dispositivo, lo que conlleva paradas.</mark>

### Arquitecturas centradas en el almacenamiento
1. El almacenamiento en red es el centro de los servicios de la organización (servidores son meros procesadores)
2. Disponibilidad de almacenamiento en red independiente de os servidores.
3. Uso de redes de almacenamiento para conectar a los dispositivos de almacenamiento en red. 

- <mark style="background: #BBFABBA6;">Total aprovechamiento del almacenamiento disponible.</mark>
- <mark style="background: #BBFABBA6;">Flexibilidad en la asignación de almacenamiento a servidores.</mark>
- <mark style="background: #BBFABBA6;">Desacoplamiento entre almacenamiento de las MV y los servidores en las que se ejecutan.</mark>

## Sistemas de almacenamiento
### Cabinas de almacenamiento
**Definición:** dispositivos informáticos diseñados para contener discos duros y dispositivos SSD proporcionando <u>mecanismos de gestión</u> para los mismos, así como <u>puertos de comunicación</u> para acceder al espacio de almacenamiento que generan.

- **Controlador:** el dispositivo que gestiona los discos físicos proporcionando funcionalidad RAID. Genera discos virtuales a partir de los físicos y los presenta a través de los puertos del sistema.
- **Cache:** memoria de almacenamiento intermedio, utilizada para acelerar las operaciones R/W realizadas sobre los discos.
- **Bus interno:** sistema de conexión entre el controlador y los discos físicos. *En los sistemas actuales, se implementa siguiendo el estandar SAS.*
- **Puertos de datos:** elementos de conexión de la cabina a la red de almacenamiento (normalmente FibreChannel, Ethernet, SAS)
- **Puerto de administración:** elemento de conexión del sistema de almacenamiento a una consola de administración (Ethernet).

**Cabinas de almacenamiento tolerante a fallos con elementos redundados:** requieren discos con doble puerto (SAS)

#### Configuración
##### Grupos
**Definición:** conjunto de discos que funciona colaborativamente (*de manera solidaria*)
**I<sub></sub>mplementación:** mediante un nivel de RAID.
**Requisitos:** discos del mismo tipo (HDD/SDD) y (recomendable) del mismo tamaño.

##### Volúmenes
**Definición:** <u>entidad lógica de almacenamiento</u> exportada a la SAN por el sistema de almacenamiento.
**Implementación:** medainte una partición geométricamente idéntica en todos los discos de un grupo.
**Direccionamiento:** mediante una LUN (*Logical Unit Number*) que es un número entero.
**Visibilidad:** todos los volúmenes configurados en una cabina conectada a una red de almacenamiento son visibles a todos los servidores conectados a la misma red. Los servidores ven a los volúmenes como si fueran discos internos del mismo.
**Vinculación:** proceso de registro de un volúmen por parte del SO de un servidor. Una vez registrado, el volúmen se comporta como un disco interno.

##### Consola de administración
**Definición:** aplicación gráfica que permite administrar cabinas de almacenamiento y se ejecuta en un ordenador cliente.
**Mecanismo de conexión:** red de administración
**Protocolo de la red:** habitualmente HTTP/HTTPS

#### Funcionalidades
- **Snapshots:** capacidad de realizar copias de solo lectura de los volúmenes. Se realizan de forma instantánea, independientemente de tamaño del disco. Solo se copian bloques cuando resultan modificados en el volumen original.
- **Copias completas:** creación de copias R/W de un volumen en otro.
- **Enmascaramiento de LUN:** capacidad de establecer los volúmenes (identificados por LUN) que serán visibles a cada servidor de la red. Facilita las tareas de configuración de los servidores y evita errores innecesarios.
- **Replicación remota:** se trata de la capacidad de mantener permanentemente replicados volúmenes de una cabina de almacenamiento en otra cabina remota. La replicación entre volumen origen y remoto es coordinada por las cabinas. (*objetivo: contingencia*)

### Bandejas de discos
**Definición:** contenedor de discos gestionado por uno o dos expansores SAS.
**Objetivo:** proporcionar un sistema de expansión para las cabinas de almacenamiento, de modo que se pueda incrementar el número de discos gestionados por un controlador.

**<u><b>Tipos</b></u>
- **Básico:** un único expansor.
- **Tolerante a fallos:** dos expansores y el resto de sus componentes redundados. 

*Una bandeja de discos no opuede operar en solitario: funciona siempre de manera subordinada a una cabina con controlador.*

### Pilas de sistemas
**Concepto:** sistema formado por un controlador y bandejas de discos interconectados mediante un bus SAS simple o múltiple.
**Objetivo:** implementar infraestructuras de almacenamiento escalables en capacidad, permitiendo alcanzar capacidades de almacenamiento muy elevadas.

## SAN
### Fiber Channel
Tecnología de comunicación de red tipo serie y bidireccional que utiliza como medio físico de transmisión canal de fibra (fibra óptica).

#### Fiber Channel Protocol (FCP)
Protocolo de la capa de interfaz FC4 encargado de mapear el protocolo SCSI sobre la infraestructura de comunicación (*FC*).

#### Estructura de red
Utilización de switches FC para la interconexión de dispositivos FC.
Los switches FC pueden interconectarse para formar topologías de interconexión.
*Malla Fiber Channel:* conjunto de switches y cables FC que forman una red FC.
*Transceptores:* dispositivos que transforman las señales eléctricas manejadas en los puertos de los switches FC en las señales de luz enviadas a través de los canales de fibra. SFP = small form factor pluggable, SFP+ = enhanced SFP
*HBA:* permiten conectar los servidores a los switches FC mediante PCIe.

##### Direccionamiento
Conecta a los servidores con los volúmenes de los sistemas de almacenamiento.

- **Roles**
	- **Initiator:** inicia el proceso de comunicación con un target y gobierna el proceso de acceso al mismo (desde un HBA)
	- **Target:** atiende a las solicitudes de acceso del iniciador que corresponde. (desde una cabina de almacenamiento
- **Identificación de puertos FC:** mediante números de 64 bits, únicos a nivel mundial (World Wide Name)
- **LUN:** identificador numérico para identificar cad avolumen dentro de un target.

### iSCSI
Transmisión del protocolo SCSI sobre el protocolo TCP/IP y, por lo tanto, sobre infraestructura física de tipo Ethernet.

- <mark style="background: #BBFABBA6;">Igual tecnología que la usada en redes de datos</mark>
- <mark style="background: #BBFABBA6;">Más personal formado en redes IP</mark>
- <mark style="background: #BBFABBA6;">Disponibilidad de más herramientas de gestión de red</mark>
- <mark style="background: #BBFABBA6;">Menor coste</mark>
- <mark style="background: #FF5582A6;">Mayor uso de CPU para gestión del tráfico</mark>
- <mark style="background: #FF5582A6;">TCP/IP genera sobrecarga de tráfico</mark>
- <mark style="background: #FF5582A6;">La latencia de los switches es elevada</mark>

- Instalaciones críticas o de gran tamaño

## NAS

# Tema 6
## Tipos de equipos informáticos

## Características de los servidores

## Tipos de servidores según su factor
