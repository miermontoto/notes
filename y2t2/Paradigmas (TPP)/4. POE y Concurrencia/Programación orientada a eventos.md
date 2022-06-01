---

Created at 2022-03-14T16:06:25+01:00
Last updated at 2022-03-28T16:22:43+02:00

Tagged: #4.-POE

---

# Programación orientada a eventos

![[POE.pdf]]


# Índice

* Introducción
* SBE
* El paradigma de POE
* Diseño de programas orientados a eventos
* Infraestructura de eventos
* Concurrencia



* * *



# Introducción

## Flujo de ejecución

Formado por la secuencia de sentencias que componen el programa.
En SOE, no existe un único flujo de ejecución.


## Estado del programa

Definido por el punto del programa en que se encuentra la ejecución.
En POE, es más difícil de determinar que en un programa secuencial.


# Eventos

Un evento es una ocurrencia observable.


## Tipos de eventos

### Externos

Pulsación de una tecla, movimiento de ratón, etc.


### Internos

Vencimiento de un cronómetro, datos en líneas de comunicaciones...


## Respondiendo a eventos

Si un observador se interesa por un evento, puede responder a este de alguna forma. A este observador se le llama "manejador" de evento.


## Fuentes de eventos

Algunos eventos ocurren porque algún agente fue responsable de provocarlos.
Los eventos no se autolanzan, los agentes hacen que se "disparen" o "lancen" los eventos.


# Sistemas basados en eventos (SBE)

Si A queda esperando por la respuesta, es una petición bloqueante o síncrona. De lo contrario, es asíncrona.

## Tipos de iteraciones

### Petición-Respuesta / Cliente-Servidor / Client-Server / Master-Slave

Una interacción petición-respuesta se encuentra entre dos agentes. La petición incluye detalles.
![[y2t2/Paradigmas (TPP)/_resources/Programación_orientada_a_eventos.resources/image.png]]
En estos casos se producen cuatro eventos:

1. Petición de A
2. Espera de petición B
3. Respuesta de B a A
4. Recogida de la respuesta por A

### Paso de mensaje

![[y2t2/Paradigmas (TPP)/_resources/Programación_orientada_a_eventos.resources/image.1.png]]


### Publicación - Subscripción

Implica mútliples agentes. Los agentes B1...Bn se suscriben a cierto tipo de mensajes, que envían A1...Ak.


## Estado del sistema

El estado del sistema es la descripción completa del dicho sistema en un momento dado.


## SBE

Es un sistema en el que las interacciones entre agentes se rigen por eventos.


## Sistemas discretos

Un sistema es discreto si cada estado del sistema se puede describir mediante una cantidad finita de memoria y si, en cualquier intervalo de tiempo finito, el estado del sistema cambia un número finito de veces.


## Sistemas completamente cerrados

Un sistema está completamente cerrado si se puede predecir el compartamiento del sistema en el futuro a partir de un estado en un momento dado SIN modificación externo. Estos sistemas son _deterministas_.
Estos SBEs no son prácticos, y existen muy pocos en la realidad. Por lo tanto, los SBEs no son deterministas.


## Características

* Basados en estados
  * Estado de datos
  * Estado de control
* No deterministas
* Acoplamiento débil
* Control descentralizado



# El paradigma de POE

La POE es un paradigma, proporciona abstracciones. El modelo de evento es su abstracción principal.


## El modelo de evemto

El núcleo del paradigma POE está en el concepto de evento.

Hay tres tipos de objetos asociados a cada evento:


### Fuentes de eventos

Es el creador del evento.

### Objetos de eventos

Encapsula los datos críticos asociados con el evento.

### Manejadores de eventos

Responden a eventos llevando a cabo las acciones especificadas por el programador.


# Eventos vs. Llamadas de funciones



# Diseño de POE

## Respuesta ante eventos

### Programas de algoritmo de respuesta único



### Programas de respuesta según el estado

* Basados en grafos
* Basados en máquina de pila


Grafo de estado / Grafo de estado en formato tabular
Estado de datos, tabla de acciones


# Infraestructura de eventos

* Infraestructura de servicios de eventos que incluyen los lenguajes de programación y las bibliotecas que admiten la POE para facilitar el desarrollo.
* **Bucle de eventos**

****

## Requisitos de la infraestructura

### Requisitos de manejo de eventos



### Requisitos de tiempo



### Manejo concurrente de eventos

Los eventos se procesan en lapsos de tiempos superpuestos.


## Bucle de eventos

![[y2t2/Paradigmas (TPP)/_resources/Programación_orientada_a_eventos.resources/image.2.png]]


## Registro de eventos

* Un manejador o controlador de eventos registra su interés en un evento particular con la fuente del evento.
* La fuente del evento realiza un seguimiento del controlador hasta que se elimina el registro o la aplicación finaliza.


**Monodifusión / unidifusión:** un controlador por evento.
**Multidifusión:** múltiplies controladores por evento.


## Distribuidor de eventos



## Cola de eventos





