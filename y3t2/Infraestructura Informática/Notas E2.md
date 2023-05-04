
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

*Una bandeja de discos no puede operar en solitario: funciona siempre de manera subordinada a una cabina con controlador.*

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

- Instalaciones críticas o de gran tamaño → **FC**
- Instalaciones pequeñas o medianas → **iSCSI**

## NAS
### Sistema de ficheros en red
**Concepto:** servidor que <u>expone</u> su sistema de ficheros local a través de una red de datos, de modo que es accesible a otros ordenadores conectados a la red.

**Protocolos**
- **SMB:** estándar en Windows.
- **NFS:** estándar en Linux.

**Servidor de ficheros:** servidor que proporciona la funcionalidad de sistema de ficheros en red.

### Sistemas NAS
**Concepto:** servidores diseñados y configurados específicamente para proporcionar la funcionalidad de servidor de ficheros.

*NAS frente a servidor genérico*
- SO optimizado para servir ficheros
- Totalmente preconfigurado
- Disponibilidad de sistemas de gran capacidad y prestaciones

*Doble funcionalidad NAS/Cabina de almacenamiento*: la cabinas de almacenamiento equipadas con puertos Ethernet, además de exportar volúmenes a una SAN, pueden también funcionar como dispositivos NAS.

# Tema 6
## Tipos de equipos informáticos
### Clientes
Utilizan los servicios proporcionados por servidores.
- **Orientados a** interacción con el usuario.
- Desktop, laptop, portables...
- **SO:** poteniian la interfaz con el usuario y las características multimedia.

### Servidores
Proporcionan servicios al resto de ordenadores de la red.
- **Orientados a** dar soporte a aplicaciones o servicios que son accedidos a través de la red.
- **SO:** potencian la estabilidad, fiabilidad, seguridad y capacidad para proporcionar servicios de manera concurrente.

## Características de los servidores
### Elevada capacidad de cómputo
#### Múltiples CPU de elevada velocidad
1. Mayor número de núcleos
2. Memorias caché de mayor tamaño
3. Mecanismo que posibilitan el trabajo colaborativo entre 2 o más procesadores
4. Soporte para mayores tamaños de memoria RAM

#### Elevada capacidad de memoria
- *Objetivo:* proporcionar el soporte necesario para algunos tipos de aplicaciones que requieren grandes cantidades (big data, entornos de consolidación)
- *Tecnología:* DDR4
- *Implementación física:* DIMM-DDR4
- *Capacidad máxima teórica:* 512GB mediante "shockets"
#### Almacenamiento de alta velocidad
- *Uso de tecnología RAID:* eleva las prestaciones mediante la técnica de la fragmentación de datos (data stripping)
- *Uso de dispositivos SSD:* eleva mucho las prestaciones respecto a los dispositivos HDD, sobre todo en acceso aleatorio.

### Elevada capacidad de almacenamiento
- *Diseños con múltiples bahías:* espacio de tamaño estandarizado cuyo objetivo es albergar un dispositivo hardware (habitualmente de almacenamiento) (2.5", 3.5")
- *Uso de controladoras RAID SAS con capacidad para múltiples discos*
- *Uso de expansores SAS*

### Elevada disponibilidad
#### Uso de componentes de alta fiabilidad
##### Fiabilidad
**Concepto:** probabilidad de que el componente funcione correctamente hasta un determinado momento.
- **Parámetro indicativo:** tiempo
- **MTBF:** tiempo medio esperado entre los fallos de un componente (en horas)
- El uso de los componentes de alta fiabilidad disminuye la probabilidad de los mismos, lo que supone una mejora de la disponibilidad.
- Componentes con mayores problemas de fiabilidad: discos duros, fuentes de alimentación y ventiladores (debido a las características electromecánicas y la presencia de elementos móviles)

##### Memorias RAM
###### Tipos de errores
- **Errores duros:** debidos a defectos o roturas del software. Hacen que el chip dañado devuelva siempre datos erróneos.
- **Errores blandos:** errores aleatorios causados por perturbaciones eléctricas que alteran el estado de carga de las celdas, variando su estado lógico.
	- Se denominan blandos porque no son debidos a un mal funcionamiento del hardware.

###### RAM ECC
- Palia los efectos de los errores blandos.
- Establece mecanismos de detección y corrección de errores en las memorias RAM.
- Una ECC básica puede corregir un bit y detectar un fallo en dos bits en cada bloque de 64 bits.
- *Checksum:* código de 8 bits que se calcula y almacena para cada bloque 64 bits de mrmoria y que se utiliza para detectar y corregir los posibles errores ocurridos en el bloque.
	- Lo calcula el controlador de memoria de la placa base, mediante un circuito EDAC (Error Detection and Correction)
	- El checksum se genera y almacena cada vez que se escrie un bloque de 64 bits. Cuando se lee del bloque, el checksum se vuelve a calcular y se compara con el almacenado. En caso de error, el checksum se utiliza para realizar la corrección del error.
- Los servidores suelen utilizar memorias ECC salvo algunos servidores de muy bajo coste.

#### Redundancia de componentes
**Objetivo:** proporcionar un mecanismo de tolerancia a fallos de modo que, aunque se produzca el fallo de un componente, pueda seguir el funcionamiento gracias a un componente redundante.
Incrementa la disponibilidad del servidor.

##### Redundancia de memoria
###### Online spare memory
Capacidad de configurar un canal como "spare", lo que hace que no esté disponible para el funcionamiento normal. SI la memoria en el otro canal rebasa un umbral de errores corregibles, el contenido de la memoria de dicho canal se copia en la memoria del canal "spare", que se convierte en el activo.

- Se reduce la capacidad (en un sistema de doble canal, 50%)
- Se reducen las prestaciones debido a la pérdida de paralelismo en el acceso a la RAM.

###### Mirrored memory
La información se escribe en la memoria de dos canales simultáneamente. Para las lecturas, un canal se comporta como activo y el otro como backup. Si en una lectura se detecta un error no corregible, se utiliza el canal de backup para para completar la operación.

Mismas consecuencias que con la spare memory.

#### Componentes conectables en caliente
**Concepto:** capacidad de un servidor de permitir la conexión de dispositivos mientras se encuentra en pleno funcionamiento.
**Beneficio:** se incrementa la disponibilidad del servidor debido a que se facilitan las tareas de manenimiento.

### Gestión fuera de línea
#### Comparativa con la gestión en línea
*in-band y out-of-band*
En ambos casos, el objetivo es la gestión remota de un sistema aprovechando la infraestructura de red.

- **Gestión in-band**
	- *Concepto:* gestión remota cuando el SO se encuentra arrancado y en pleno funcionamiento. Permite usar los recursos proporcionados por el SO para las tareas de gestión.
	- *Hardware de soporte:* el sistema principal, que es sobre el que se ejecuta el sistema operativo.
- **Gestión out-of-band**
	- *Concepto:* gestión remota utilizada sin el concurso del sistema operativo.
	- *Hardware de soporte:* subsistema hardware adicional al sistema principal específico para la gestión fuera de línea.

##### Gestión en línea en Windows
- **API de gestión remota:** infraestructura de sw que permite gestionar un sistema Windows mediatne aplicaciones o scripts ejecutados remotamente.
- **Escritorio remoto:** capacidad de la plataforma Windows de exportar la pantalla a un ordenador cliente, que se conecta al sistema a través de la red, utilizando una aplicación cliente de escritorio.

**Elementos de soporte a la API de gestión remota**
- *WMI/CIM (Windows Management Instrumentation):* infraestructura sw que proporciona una plataforma para obtener información y gestionar sistemas Windows de manera estandarizada, con especial énfasis en la gestión remota.
- *WinRM (Windows Remote Management):* protocolo orientado a la gestión remota de la plataforma Windows, basado en SOAP (HTTP) y que proporciona el mecanismo para acceder de forma remota a la infraestructura WMI/CIM.

#### Circuitos de energía de un equipo informático

#### Sistema de gestión fuera de línea

## Tipos de servidores según su factor
