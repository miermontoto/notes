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

