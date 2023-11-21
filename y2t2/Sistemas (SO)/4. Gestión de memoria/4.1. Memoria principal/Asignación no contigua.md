

# Asignación no contigua
## Reglas generales

* Todas las categorías anteriores.
* **Organización lógica de los procesos**
* **Estructuras de datos necesarias para la org. lógica de los procesos.**
* **Organización de las direcciones físicas y de las direcciones lógicas.**

****

# Paginación

Funciona en base al particionamiento fijo.
![[y2t2/Sistemas (SO)/_resources/Asignación_no_contigua.resources/image.png]]


* ### **Organización física de la memoria principal**
  * La memoria se divide en trozos fijos, como en particiones fijas, llamados **_marcos_**.
* ### **Organización lógica de los procesos**
  * La paginación divide en trozos a los procesos, llamados **_páginas_**.
* ### **Estructuras de datos para la organización física**
  * #### _Tabla de marcos_
    * Solo existe una en el sistema operativo.
    * Decir si están o no ocupados cada marco, con un valor booleano.
    * El índice es el número de marco.
* ### **Estructuras de datos para la organización lógica**
  * #### _Tabla de páginas_
    * Una por proceso.
    * Guarda el marco en el que está cada página, los bits de protección, y otros campos.
    * El índice es el número de página.
* ### Traducción de posiciónes lógicas a posiciones físicas
  * A partir de una posición `L` , se obtiene el número de página dividiendo por el tamaño de página.
  * Con ese número de página, se accede a la tabla de marcos y se obtiene el número de marco donde se encuentra la dirección `L` .
  * Por último, con el número de marco, se vuelve a multiplicar por el tamaño de marco para obtener la dirección final.
  * Una vez se tiene la dirección final, se le suma la diferencia entre la posición `L` original y el comienzo de su página, el desplazamiento.
    * El desplazamiento es el resto de la primera división realizada.
  * ##### Explicación "pro"
    * Las direcciones lógicas son del tamaño del bus de direcciones.
    * Si el tamaño de página es de 32 bytes, se necesitan 5 bits.
    * Por lo tanto, los 5 bits de la derecha es el desplazamiento, el resto de bits es el número de página.
    * Al obtener el número de página, se saca el comienzo del marco en el que se encuentra la dirección y se le añade el desplazamiento.
    * ![[Sketch 4-4-2022 3-09 PM.png]]
    * Se añaden tantos ceros a la izquierda para que el tamaño de la dirección física sea igual.
    * ![[y2t2/Sistemas (SO)/_resources/Asignación_no_contigua.resources/image.1.png]]
* **Compartición / protección**
  * Compartición
    * Dos o más páginas apuntan a un solo marco (se comparte, sin duplicar).
  * Protección
    * Poner una flag de protección a cada página (R/RW, etc).
    * ❌ <mark style="background: #FF5582A6;">No se puede llevar a cabo porque las páginas (al ser de tamaño fijo) pueden contener más de un trozo de proceso y afectar o no afectar correctamente.</mark>
* **Ventajas / desventajas**
  * **✅** <mark style="background: #BBFABBA6;">La paginación no es visible al usuario del SO.</mark>
  * ✅ <mark style="background: #BBFABBA6;">Se elimina la fragmentación externa.</mark>
  * ✅ <mark style="background: #BBFABBA6;">La fragmentación interna solo se puede producir en la última página de cada proceso.</mark>
  * ✅ <mark style="background: #BBFABBA6;">Es fácil permitir que se comparta memoria entre procesos.</mark>
  * ❌ <mark style="background: #FF5582A6;">No se puede proteger las páginas efectivamente.</mark>

# Segmentación

Funciona en base al particionamiento variable.

* **Organización lógica de los procesos**
  * Los procesos se dividen de forma natural como lo necesiten, es decir, según sus datos, sus códigos, su pila...
  * Tienen distinto tamaño.
  * Cada segmento utiliza una zona contigua en memoria.
* **Organización física de la memoria**
  * Los segmentos de los procesos se cargan dispersos y en cualquier orden.
  * Se divide la memoria como en particionamiento variable, con el mismo funcionamiento.
* **Estructuras de datos de la organización lógica**
  * Una tabla de segmentos por proceso.
    * Campo 'límite', el tamaño en bytes del segmento.
    * Campo 'base', la dirección _física_ donde empieza el segmento.
    * Bits de protección, igual que en paginación.
* **Estructuras de datos de la organización física**
  * Tablas de huecos, tablas de no huecos.
* **Traducción de posiciónes lógicas a posiciones físicas**

  * _Metodología similar al de paginación._

  1. Se genera una dirección lógica, se divide en dos.
    * Segmento | desplazamiento
  2. Obtiene el campo base mediante el segmento.
  3. Al campo base, se le suma el desplazamiento. **_FIN_**

* **IMPORTANTE:** los segmentos no comienzan uno después que otro, por lo que la obtención del segmento no es sencilla.

* **Protección, validación de direcciones**
  1. Comprobar que el segmento sea válido. (que exista el índice del segmento)
  2. Comprobar que el desplazamiento sea menor estricto que el límite del segmento.
* **Ventajas / Inconvenientes**
  * **✅** <mark style="background: #BBFABBA6;">Bueno para compartir y proteger.</mark>
  * ✅ <mark style="background: #BBFABBA6;">Bueno dividiendo a los procesos.</mark>
  * ❌❌ <mark style="background: #FF5582A6;">Muy malo en aprovechamiento de memoria.  </mark>



# Segmentación paginada

* ### **Organización física de la memoria**
  * Paginación de la memoria.
* ### **Organización lógica de los procesos**
  * División en segmentos naturales de los procesos.
  * División de cada segmento en páginas, de manera que encaje con el esquema de la memoria principal.
* ### **Estructuras de datos de la organización física**
  * Igual que en paginación.
* ### **Estructuras de datos de la organización lógica**
  * Cada proceso tiene una tabla de segmentos y tantas tablas de páginas como segmentos haya.
  * Cada tabla de segmentos tiene un nuevo campo que reemplaza al campo 'base', que es `RBTP` , que indica la dirección de la tabla de páginas de cada segmentos.
  * Las tablas de páginas funcionan igual que en paginación.
* ### **Protección y traducción**
  * #### Protección
    * _Igual que en segmentación._
    1. Validar el número de segmento.
    2. Comprobar que el desplazamiento sea menor que el límite del segmento.
  * #### Traducción
    * _Igual que en paginación._
    1. Dividir el desplazamiento en `p`  y `d'` .
    2. Acceder al marco número `p`.
    3. Obtener su dirección base y sumarle `d'` .
* ### **Ventajas / desventajas**
  * **✅** <mark style="background: #BBFABBA6;">Fácil compartición</mark>
  * **✅** <mark style="background: #BBFABBA6;">Fácil protección</mark>
  * **✅** <mark style="background: #BBFABBA6;">Fácil ampliación de las estructuras de datos</mark>
  * **✅** <mark style="background: #BBFABBA6;">Visión del proceso tal y como lo ve el usuario</mark>
  * <mark style="background: #FFF3A3A6;">~  Solo hay fragmentación interna en la última página de cada proceso.</mark>
  * ❌ <mark style="background: #FF5582A6;">Bastante complejo.</mark>
