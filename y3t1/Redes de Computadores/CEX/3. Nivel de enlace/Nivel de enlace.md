![[_resources/Tema 3 - Enlace.pdf]]
 
## Índice
1. Introducción
2. Delimitación de tramas
3. Control de flujo
4. Control de errores
5. Técnicas ARQ
6. Redes de área local
7. Coontrol de acceso al medio
8. Modelo de referencia IEEE 802

---

# Introducción
**Funciones de la capa de enlace:**
- Realizar un transporte de datos libre de errores <mark style="background: #FFB86CA6;">salto a salto</mark> entre dos nodos unidos por un enlace.
- Proporcionar una interfaz bien definiida a la capa de red.
- [[#Delimitación de tramas]]
- Detectar y corregir los errores de transmisión.
- Controlar el flujo para no saturar a los receptores.
- Controlar el acceso al medio cuando este sea compartido.
	- Decidir cuándo se puede transmitir información o está ocupado.
- Gestionar el envío de las tramas de forma directa por el enlace.
	- Direcciones MAC

# Delimitación de tramas
La unidad básica de transmisión a nivel de enlace son las *tramas*.
*No coinciden necesariamente con el tamaño de los paquetes de nivel superior.*


## Ténicas de delimitación
Es necesario acotar del alguna forma el inicio y el final de la trama. Las técnicas más habituales son:
- Relleno de bytes o inserción de caracteres
- Inserción de bits
- Violaciones de código

### Inserción de caracteres
- Se emplean uno o más caracteres para indicar el comienzo o el fin de la trama.
- Suelen ser caracteres ASCII.
- Si alguno de los caracteres aparece en la propia, se inserta un caracter de escape, para indicar que no es el final de la trama.
	- En caso de que apareciera un caracter de escape, se añadiría otro previamente.

### Relleno de bits
- Se utiliza una secuencia de bits para marcar el inicio o fin de la trama.
- Ejemplo HDLC (*High-level Data Link Control*)
	- Tramas delimitadas por 01111110
	- Si aparecen cinco 1s consecutivos en la trama, se añade un 0 a continuación.
	- El receptor elimina los ceros en el destino.

### Violaciones de código
- Funciona de forma conjunta con la capa física.
- Se aprovechan elementos no utilizados de la capa física como señales de limitación de trama.
	- Voltajes diferentes a los utilizados para enviar la señal.
	- Variaciones sin asignar en la codificación.


# Control de flujo
**Evitar que el emisor sature al receptor.**
- Si la velocidad de envío es demasiado elevada, el receptor puede empezar a descartar tramas.
	- Se puede solicitar el emisor que no envíe más tramas.
	- Indicar que envíe más despacio.
	- Preguntar por la cantidad de memoria libre al receptor.
- Esta tarea puede llevarse a cabo también en capas superiores, como TCP en el nivel de transporte.

## Parada y espera
- Protocolo sencillo válido en un medio sin errores.
- Cuando el emisor mande una trama, ha de esperar al asentimiento para transmitir la siguiente.
- Uso del canal muy bajo.

## Ventana deslizante
- Mismo funcionamiento que en el caso de TCP en el nivel de transporte.
- Las tramas se etiquetan con un número de secuencia.
- Es la base del funcionamiento de las técnicas ARQ, que se estudiarán más adelante.
- Permite una utilización mucho más elevada del canal.

# Control de errores
**Transmitir por un medio ruidoso degrada las tramas**
- Se pueden producir dos situaciones
	- *Corrupción* de bits: la trama llega, pero algunos bits no son correectos.
	- *Pérdida* de bits: no llega nada de la trama.
- Es necesario controlar los posibles errores y corregirlos cuando sea posible.
- Dependiendo del medio de transmisión utilizado, puede ser más interesante detectar y retransmitir que corregir.

## Numeración de tramas
- El transmisor etiqueta cada trama con un número de secuencia.
- El receptro comprueba los números de trama recibidos.
- Permite detectar tramas perdidas.

## Códigos de redundancia
- Se añaden una serie de bits obtenidos a partir de una operación sobre los datos.
- Permite detectar tramas corruptas e incluso corregir bits erróneos.

### Bit de paridad
- Se añade un 1 si el número de 1s en el mensaje es par, y lo contrario.
- Si solo cambia un bit, el destino puede darse cuenta de que ha ocurrido un error.
- *Distancia de Hamming:* número de bits diferentes en dos palabras.

### Algoritmos de detección
- *Suma de verificación*: la suma de diferentes partes de la trama permite tener un campo que ayuda a corregir.
- *Códigos de redundancia cíclica (CRC)*: se calcula un polinomio que se divide por diferentes partes de la trama.

### Algoritmos de corrección
- Códigos de Hamming
- Códigos de Reed-Salomon

# Técnicas ARQ
## Solicitud de repetición automática
Conjunto de técnicas para la transmisión de datos a través de un enlace que combinan distintos mecanismos de control de flujo y control de errores.

Técnicas más comunes:
- ARQ de parada y espera
- ARQ de ventana deslizante con rechazo simple
- ARQ de ventana deslizante con rechazo selectivo


## ARQ de parada y espera
- Basado en la técnica de parada y espera estudiada previamente.
- Se utilizan temporizadores para el reenvío de las tramas no asentidas.
- Eliminación de duplicados.
- 
![[_resources/Pasted image 20221010132204.png]]


## ARQ con ventana deslizante y rechazo simple
- Basado en control de flujo mediante ventana deslizante.
- Receptor solicita retransmisión de trama dañada o perdida.
- Emisor repite trama solicitada y las que había enviado tras ella.
- Eliminación de duplicados.
- Las tramas fuera de orden se descartan.
- Se puede solicitar el reenvío de confirmaciones.

![[_resources/Pasted image 20221010132230.png]]

### Limitaciones en el tamaño de la ventana
Si se utilizan *k* bits para el número de secuencia, el tamaño máximo de la ventana es 2<sup>k</sup> -1.


### ARQ con ventana deslizante y rechazo selectivo
- Basado en control de flujo mediante ventana deslizante.
- Receptor solicita retransmisión de trama dañada o perdida.
- Emisor solo repite la trama solicitada.
- Las tramas fuera de orden pueden almacenarse.
- Se puede solicitar el reenvío de confirmaciones.
- Eliminación de duplicados.

![[_resources/Pasted image 20221010134435.png]]

### Limitaciones en el tamaño de la ventana
Si se utilizan *k* bits para el número de secuencia, el tamaño máximo de la ventana es 2<sup>k-1</sup>.

# Redes de área local
[[../1. Introducción/Clasificación de las redes#Redes LAN|Redes LAN]]


## Hubs y switches

### Hub (concentrador)
Retransmite la señal a todas las salidas.

### Switch (conmutador)
- Retransmite la señal solo por la salida adecuada.
- Utiliza una tabla de direccionamiento para conocer las MACs de los dispositivos.
- Conmutador lento: comprueba el CRC de la trama.
- Conmutador rápido: retransmite la trama en cuanto se identifica la dirección de salida.

# Control de acceso al medio
## Utilización del medio compartido
- Las estaciones transmiten de forma independiente.
- Se utiliza un mismo medio de transmisión.
- Cuando dos estaciones transmiten a la vez, se produce una colisión: es necesario retransmitir.
- La gestión se realiza en una subcapa conocida como MAC.
- Se busca optimizar el uso del canal sin saturarlo.

## Clasificación técnicas MAC
### Centralizadas
Una sola gestión getsiona el acceso.

- Lógica de acceso sencilla.
- No es necesario coordinarse entre estaciones.

### Descentralizadas
Varias estaciones gestionan el acceso.

- Más robustas ante fallos.
- No se produce cuello de botella en la gestión.


### Síncronas
- Se pre-asigna una capacidad para cada conexión.
- No adecuado para LANs: cantidad muy variable de elementos conectados y tráfico a ráfagas.
- Se utilizan técnicas de multiplexación.
- Casos de uso: radio, tv, ...

### Asíncronas / dinámicas
Se consigue en cada trama la capacidad necesaria para ella.

## Modelado del tráfico
- Tráfico fuente (**I**): tráfico que las máquinas intentan transmitir.
- Tráfico cursado (**S**): tráfico que la red consigue entregar.
- Tráfico en la red (**G**): tráfico que circula por la red.


![[_resources/Pasted image 20221011104915.png]]

- En todos los casos, `S = G · Probabilidad éxito`.
- Si no se producen colisiones, `S = G = I`, de lo contrario, `G > S` y `G > I`.
- Si la red está saturada, `S < I`, de lo contrario `I = S`.

## Tipos de técnicas asíncronas
### Contienda
- Las estaciones compiten por transmitir.
- Gestión distribuida.
- Bueno si la carga es baja y el tráfico a bajas.

### Rotación
- Las estaciones transmiten de acuerdo a una serie de turnos.
- Puede ser centralizada o distribuida.
- Adecuado si hay muchas estaciones y mucha carga.

### Reserva
- Las estaciones reservan parte de la capacidad del canal.
- Puede ser centralizada o distribuida.
- Bueno si hay pocas estaciones y mucha carga.

## Técnicas de contienda
- Cuando se tienen datos, las estaciones intentan transmitir.
- Se tiene que escuchar el medio de transmisión.
- Es posible que se produzcan colisiones.
- En caso de colisión, es necesario:
	- Detectar la colisión.
	- Decidir cuándo retransmitir.

### ALOHA
- Protocolo muy sencillo que transmite cuando se tienen datos.
- Si hay colisión, se espera un tiempo aleatorio y se vuelve a transmitir.
- Rendimiento con fuentes infinitas y llegadas exponenciales.
- Rendimiento: $S=G\times e^{-2G}$

- Para transmitir una trama con éxito, no se puede solapar con niguna otra trama.- 
- Si hay alguna otra trama en el canal, ambas se pierden, aunque coincidan mínimamente.
- Con tramas de tamaño constante *t*, una trama es culnerable durante 2t.


### ALOHA ranurado
- El tiempo se divide en ranuras de tamaño *t*.
- Solamente se puede comenzar a transmitir al comienzo de cada ranura.
- La probabilidad de colisión es menor, solo si hay otra transmisión en la misma ranura.
- Rendimiento: $S=G\times e^{-G}$

### CSMA (*Carrier Sense Multiple Access*)
- Las estaciones están escuchando el medio de transmisión.
- Esperan a que el canal esté libre para empezar a transmitir.
- Motivos para las colisiones:
	- Dos estaciones empiezan a transmitir a la vez al acabar otra.
	- Debido al retardo de propagación.

> [!FAQ]- Para el test
> Es importante diferenciar entre los tipos.

#### Persistente-1
**Funcionamiento**
- Si está ocupado, se espera hasta que esté libre.
- Si está vacío, se transmite.
- Si hay colisión:
	- Se espera un tiempo aleatorio.
	- Se vuelve al primer paso.

**Problema**
Se suelen producir colisiones al final de los envíos de las tramas.

#### No persistente
- Si está ocupado:
	- Se espera un tiempo aleatorio.
	- Se vuelve al primer paso.
- Si está vacío, se transmite.
- Si hay colisión:
	- Se espera un tiempo aleatorio.
	- Se vuelve al primer paso.

**Problema**
Medio desaprovechado justo tras el fin de una transmisión.

#### persistente-p
**Funcionamiento**
- Si está ocupado, espera hasta que quede libre.
- Si está vacio:
	- Transmiten con probabilidad p.
	- Se vuelve al primer paso con probabilidad (1-p).
- Si hay colisión:
	- Se espera un tiempo aleatorio.
	- Se vuelve al primer paso.

Se busca un equilibrio entre reducir el número de colisiones y el tiempo de desocupación.

### CSMA/CD
El problema común de las técnicas CSMA es que el medio permanece inutilizable durante el tiempo que dos tramas colisionan.

CSMA/CD detecta las colisiones y abortan el envío de las tramas cuando ocurren.

### MACA (*Multiple Access with Collision Avoidance*)
Las técnicas CSMA no son adecuadas para redes inalámbricas, puesto que es difícil detectar colisiones, puede haber estaciones ocultas, etc.

- No se escucha el medio para detectar clisiones.
- Evita colisiones entre estaciones que no se ven.

**Problemas**
- Las colisiones no son detectadas por la capa MAC.
- Se reenvían cuando lo detectan las capas superiores, mucho después de la colisión.

**Funcionamiento**
- Se utilizan RTS (*Request to send*) y CTS (*Clear to send*) para bloquear el medio.
- Si se produce colisión durante el envío, se espera durante un tiempo aleatorio antes del reintento.

## Técnicas de rotacíon
- Las máquinas transmiten en orden → no se producen colisiones.

### Técnicas basadas en sondeo (centralizadas)
- Una estación controladora da el turno al resto de estaciones.
- Las estaciones informan a la controladora al acabar.

### Técnicas basadas en el paso de testigo (distribuidas)
- Existe una trama que hace de testigo.
- La estación que tiene el testigo puede transmitir.
- El testigo se pasa al acabar de transmitir o pasar un tiempo distribuido.

### Token ring
- Utiliza una topología en anillo.
- Se basa en el uso de un testigo para efectuar la transmisión.
- Una estación espera a tener el testigo para enviar sus tramas.
- Cuando la trama pasa por la estación de destino, esta la copia y la mantiene en el anillo.
- Una vez que las tramas vuelven a la estacióin de origen, esta libera el testigo y lo pone de nuevo en el anillo.
- ![[_resources/Pasted image 20221017131341.png]]

## Tećnicas de reserva
El tiempo se divide en diferentes instantes:
- Periodos de contención
	- Las estaciones indican que quieren transmitir.
- Periodos de transmisión
	- Las estaciones transmiten los datos en los instantes que han reservado previamente.

No se producen colisiones, ya que no se transmite a la vez.

### Mapa de bits
- El periodo de contención se divide en ranuras de reserva. 
	- Cuando tiene datos para transmitir, rellena su ranura con un "1".
- En el peridodo de transmisión:
	- Se espera tanto tiempo como tramas fueron reservadas.
	- Las tramas se transmiten en orden.

# Estándares IEEE 802
Se encargan de definir los estándares más utilizados hoy en día.

- 802.3 (Ethernet)
- 802.11 (WiFi)
- 802.15 (WPAN - Bluetooth, Zigbee)
- 802.16 (WiMax)

Se utiliza en los niveles más bajos del modelo OSI.
![[_resources/Pasted image 20221017133347.png]]

## Subcapas específicas
### Subcapa de control de enlace lógico
- Tiene que comunicarse con la capa de red y la capa MAC.
- Se encarga de la gestión de flujo, unificar diferentes especificaciones de la capa MAC, agrupación de bits, etc.
- Ofrece tres tipos de servicios:
	- No orientado a conexión sin confirmación
	- No orientado a conexión con confirmación
	- Orientado a conexión con confirmación
- En IEE 802.2 se implementa el protocolo *Logic Link Control* (LLC).

### Subcapa de control de acceso al medio
- Gestiona el acceso al medio compartido.
	- Dicha gestión cambia en función del estándar 802 utilizado.
- Direcciona las MACs de origen y destino en el propio medio compartido.
- Detecta errores de entramado o interferencias en los bits.
- Justo por encima del nivel físico.

## 802.3 Ethernet
### Formato de trama
![[_resources/Pasted image 20221017133523.png]]
- **Preámbulo**: siete veces seguidas la cadena `10101010`
	- Permite sincronización.
	- ***Start of Frame* o comienzo de trama**
		- La última secuencia del preámbulo `10101011`, para indicar que se inicia la trama
		- Direcciones de origen y destino: direcciones MAC de las máquinas que emiten y reciben.
- **Direcciones de destino y origen**: las dos direcciones MAC del destino y el origen.
- **Longitud**: tamaño del campo de datos LLC.
- **Datos**: información recibida de la capa LLC.
- **Relleno:** bytes añadidos por si la trama no tiene el tamaño mínimo para evitar colisiones.
- **Suma de verificación**: se utiliza para calcular el CRC y comprobar que no ha ocurrido ningún error en la transmisión.
	- Se utilizan todos los campos excepto el preámbulo y la propia suma de verificación.

### Intervalo de contención
Tiempo mínimo necesario para que una estación que empieza a transmitir se de cuenta de una colisión mientras está transmitiendo.

El intervalo de contención es dos veces el tiempo de propagación del canal, de modo que se asegura que si se produce una colisión, el emisor sigue escuchando el medio y la detecta sin importar en qué punto del camino ocurra.

### CSMA/CD con retroceso exponencial binario
Sirve para determinar el tiempo de espera después de una colisión.

- Tras *k* colisiones, con $k\leq 10$ se espera $n\times t_{prop}$ con *n* elegido entre 0 y 2<sup>k</sup>-1.
- Tras *k* colisiones, con $10\lt k\leq 16$, se espera $n\times t_{prop}$ con *n* elegido entre 0 y 1023.
- Si hay más de 16 colisiones, se desiste.

### Direcciones MAC
- Cada tarjeta tiene asociada una dirección MAC.
- Está compuesta por 48 bits representados en hexadecimal en grupos de 8.
- Los tres primeros octetos identifican al fabricante.
- Cada tarjeta tiene una dirección de red única.

### Ethernet conmutada - Switches
Originalmente se colocaban repetidores y concentradores para aumentar el tamaño de la red, conocidos como *hubs*. Aunque cada máquina estuviera conectada a un cable diferente, el *hub* repetiría la señal por todos los cables, por lo que realmente las estaciones estarían compartiendo el medio.

Los *switches* repiten la trama solo por la salida correspondiente.

- Son una solución más compleja y cara, aunque se han abaratado y son los más utilizados actualmente.
- Los *switches* permiten separar dominios de colisión, mejorando el rendimiento de la red.
- Poseen tablas en las que relacionan las interfaces de salida con direcciones MAC.
- En el caso de enviarse una dirección de difusión, la retransmitiría por todas las salidas.

### ARP (*Address Resolution Protocol*)
Se encarga de obtener las direcciones MAC de las máquinas, a partir de una dirección IP.

- Se implementa en equipos que también poseen nivel de red.
- Almacenan unas tablas que relacionan MACs con IP.
- Su variante inversa es RARP (*Reverse Address Resolution Protocol*), que asigna direcciones IP a partir de las MAC.
	- En desuso, principalmente sustituido por DHCP.

### Actualizaciones
- *Fast Ethernet* - 802.3u
	- Aumenta la velocidad hasta 100Mbps
	- Incluye autonegociación para facilitar la retrocompatibilidad.
- *Gigabit Ethernet* - 802.3ab
	- Alcanza 1Gbps
	- Extensión de portadora y ráfagas de trama para ampliar el rango de alcance de la red.
- *X Gigabit Ethernet* y *Terabit Ethernet*
	- Mejoras sucesivas que amplían la velocidad y el alcance de las redes de tipo Ethernet.
	- Utiliza fibra óptica en lugar de par trenzado.

## 802.11 WiFi
Define un estándar de comunicaciones inalámbrico de corto alcance.

- Es necesario utilizar bandas del espectro electromagnético que estén libres.
- Requiere de diferentes técnicas de acceso al medio que Ethernet u otros estándares cableados.
- Al igual que otros estándares, divide el nivel de enlace en dos subcapas, buscando aislar al nivel de red.
- Puede utilizarse para conectarse a la red de Internet o para crear una red local.
	- Elemento clave: *access point* (AP).

### Servicios
- **Asociación**: permite a una estación conectarse a un AP o a otra estación.
- **Disociación**: permite que una estación notifique su intención de abandonar una celda.
- **Reasociación**: cambiar de un AP a otro sin necesidad de desasociarse.
- **Autenticación:** identificar a una estación para saber si puede o no conectarse a la red.
	- WEP (*Wired Equivalent Privacy*)
	- WPA (*WiFi Protected Access*)

### Capa física
- Utiliza los espectros de 2.4GHz y 5GHz.
- Ha evolucionado utilizando canales con anchos de banda desde 20 hasta 160 MHz.
- *Multiple Input - Multiple Output* (MIMO)
- Multiplexación por división de frecuencias ortogonales (OFDM - *Orthogonal frequency-division multiplexing*)
- Mejoras en la eficiencia y el alcance, usado también en redes de telefonía móvil.

### Capa acceso al medio
- No se puede escuchar y transmitir a la vez.
	- Señal de llegada mucho más débil que la de la transmitida.
- Se utilizan confirmaciones de recepción.

#### CSMA/CA - CSMA con evitación de colisiones (*Collision Avoidance*)
- Cuando se tiene una trama para transmitir, se escucha el medio y, si está libre, se transmite.
- Si está ocupado, se espera a que acabe y se espera un tiempo aleatorio para transmitir.
- Si durante la espera aleatoria alguien transmite, el tiempo de espera se pausa.

- CSMA/CA se complementa con NAV(*Network Allocation Vector*)
- Permite evitar el problema de las estaciones ocultas.

### Formato de trama
![[_resources/Pasted image 20221018131934.png]]

#### Control de trama
- **Versión**: ahora mismo 00.
- **Tipo**: gestión (00), control (01), datos (10).
- **Subtipo**: RTS (1011), CTS (1100), ACK (1101) ...
- **Para/De**: definen si el envío es entre estaciones, APs o viceversa.
- **Más fragmentos**: indica si la trama se ha partido para enviarse.
- **Reintentar**: especifica si la trama es un reenvío.
- **Administración de energía**: utilizada por el emisor para indicar que va a entrar en modo de ahorro de energía.
- **Protegida**: especifica si la trama está cifrada.
- **Orden**: indica al receptor que la capa superior espera que la secuencie llegue en riguroso orden.

#### Otros parámetros
- **Duración**: tiempo de espera de las demás estaciones antes de comprobar el canal (NAV).
- **Direcciones**: origen, destino y desitno fuera de la red local.
- **Secuencia**: numera las tramas para detectar duplicados.
- **Datos**: información pasada por la capa superior.
- **Suma de verificación**: comprobación de llegada correcta de la trama.









