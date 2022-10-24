![[_resources/Tema 4 - Red - Parte 1.pdf]]

## Índice
1. Introducción
2. Protocolo IP
3. Redes de datagramas y circuitos virtuales
4. Algoritmos de encaminamiento
5. Control de congestión
6. Calidad de servicio (QoS)

---

# Introducción
Encaminamiento de paquetes desde el origen hasta el destino.
- Proporciona una interfaz de red al nivel de transporte.
- Decide nodo a nodo por dónde se envían los mensajes.
- Una de sus funciones es buscar la ruta más apropiada.
- Utiliza tablas de encaminamiento.
	- Almacenan información sobre los destinos conocidos.
	- Indican cuál es el siguiente nodo al que enviar la información para seguir con la ruta.

- **Control de la congestión**
	- Evitar la sobrecarga de las líneas.
	- Tarea compartida con el nivel de transporte.
	- Control a lo largo de la red, no solo entre extremos.
- **Calidad de servicio (QoS)**
	- Ancho de banda
	- Retardo y variación del retardo
	- Pérdida

# Protocolo IP
## Características
- <u>No orientado a conexión:</u> cada datagrama se trata de forma independiente, pudiendo seguir caminos distintos.
- <u>No fiable</u>: si se produce algún error, los datagramas se pierden.
- <u>Inseguro</u>: la entrega de los datagramas no está garantizada: entrega fuera de orden, pérdida, duplicación...
- No incluye técnicas para la gestión de errores.
- La unidad básica de información se llama *datagrama IP*.

## Funciones más importantes
- **Direccionamiento**: identificar a las máquinas mediante direcciones lógicas → direcciones IP.
- **Encaminamiento**: analizar los datagramas para encaminarlos por los nodos intermedios desde el origen hasta el destino.
- **Fragmentación y reensamblado**: partición de los datagramas demasiado grandes para poder retransmitirlos por la red.

## Cabecera IP
![[_resources/Pasted image 20221018134640.png]]

- **Versión**: indica la versión del protocolo a la que pertenece el datagrama.
- **Internet Header Length (IHL)**: tamaño total de la cabecera en palabras de 8 bytes. El tamaño mínimo es 5 y el máximo es 15.
- **Servicios diferenciados**: sirve para distinguir entre distintos tipos de servicios. Incluyen bits sobre la clase de servición y congestión.
- **Longitud total**: tamaño total del datagrama incluida la cabecera. El máximo es 2<sup>16</sup> bits.
- **Identificación**: identifica el fragmento de un paquete recién llegado. Todos los fragmentos de un paquete tienen el mismo identificador.
- **Don't Fragment (DF)**: bit utilizado para comunicar al enrutador que no fragmente el paquete. Se puede utilizar para descubrir el tamaño máximo posible en una ruta concreta.
- **More Fragments (MF)**: indica que van a llegar más fragmentos de un mismo datagrama. Salvo el último, todos los fragmentos tienen este bit a 1.
- **Desplazamiento del fragmento**: indica a qué parte del paquete pertenece el fragmento. Los fragmentos excepto el último deben ser múltiplos de 8 bytes.
- **Tiempo de vida (TtL)**: contador que indica cuál es el protocolo de la capa superior al que pasar el paquete.
- **Suma de verificación:** asegura que la cabecera no ha llegado corrompida por el camino. Es necesario recalcularla en cada salto.
- **Direcciones IP de origen y destino**.
- **Opciones**: permite añadir nuevas características no incluidas en la cabecera original.
	- Seguridad: evitar enrutar paquetes a través de ciertas redes.
	- Enrutamiento estricto: indicar todos los saltos desde el origen al destino.
	- Registrar ruta: almacenar las IPs de todos los saltos realizados.

## Direccionamiento IP
![[_resources/Pasted image 20221024131509.png]]

> [!WARNING]- Un ejercicio garantizado en el examen.


### Tipos de direcciones
- **Unicast**: dirección que identifica a un interfaz de red de una máquina.
- **Multicast**: dirección que identifica a un grupo de interfaces de red en distintas máquinas.
- **Broadcast**: dirección que identifica a todas las interfaces de una determinada red.
	- Nunca aparecerá como dirección origen.
- **Públicas**: direcciones visibles en Internet.
- **Privadas**: direccioens que no son visibles en Internet.
- **Estáticas**: direcciones que no cambian en cada conexión.
- **Dinámicas**: direcciones que pueden cambiar en cada conexión.

### Clases de direccionamiento
![[_resources/Pasted image 20221024133213.png]]

- Dirección base de red: dirección que identifica a la red
	- Tiene todos los bits de la parte de host a 0.
	- Se obtiene realizando un AND bit a bit entre la dirección IP y la máscara de subred.
- Dirección de broadcast
	- Tiene todos los bits de la parte de host a 1.
	- Se obtiene realizando un OR bit a bit entre la dirección IP y el complemento a 1 de la máscara.
- El resto de direcciones libres se peuden asignar a los diferentes hosts.
- Direcciones libres para *n* bits → 2<sup>n</sup>-2

Para generar subredes, se puede expandir la máscara:
| ![[_resources/Pasted image 20221024135221.png|560]] | ![[_resources/Pasted image 20221024135235.png|560]] | 