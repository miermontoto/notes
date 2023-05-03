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

#### Grupos
**Definición:** conjunto de discos que funciona colaborativamente.
**Implementación:** mediante un nivel de RAID.
**Requisitos:** discos del mismo tipo (HDD/SDD) y (recomendable) del mismo tamaño.

#### Volúmenes
**Definición:** <u>entidad lógica de almacenamiento</u> exportada a la SAN por el sistema de almacenamiento.
**Implementación:** medainte una partición geométricamente idéntica en todos los discos de un grupo.
**Direccionamiento:** mediante una LUn (*Logical Unit Number*) que es un número entero.
**Visibilidad:** todos los volúmenes configurados en una cabina conectada a una red de almacenamiento son visibles a todos los servidores conectados

#### Consola de administración
**Definición:** aplicación gráfica que permite administrar cabinas de almacenamiento y se ejecuta en un ordenador cliente.
**Mecanismo de conexión:** red de administración
**Protocolo de la red:** habitualmente HTTP/HTTPS

### Bandejas de discos

### Pilas de sistemas

## SAN

## NAS

# Tema 6
## Tipos de equipos informáticos

## Características de los servidores

## Tipos de servidores según su factor