# 2. Clasificación de las redes

## Criterios de clasificación
- **[[#Por topología]]** (disposición de los enlaces)
- **[[#Por tecnología de transmisión]]**
	- Redes de difusión
	- Redes punto a punto
- **[[#Por escala]]**
	- Redes PAN
	- Redes LAN
	- Redes MAN
	- Redes WAN
**[[#Por transmisión de la información]]**
	- Redes de comunicación de circuitos
	- Redes de comunicación de paquetes
	- Redes de comunicación de mensajes


## Por topología
### Redes de topología regular
![[_resources/Pasted image 20220913113421.png|1000]]
### Redes de topología irregular
![[_resources/Pasted image 20220913113512.png]]

---

## Por tecnología de transmisión
### Redes de difusión (*broadcast*)
- Medio compartido por varios dispositivos
- La información viaja acompañada de la dirección de destino
- ***Red en bus, de anillo.*

### Redes de punto a punto
- Conexiones entre pares de dispositivos
- Para alcanzar el destino, la información debe pasar por dispositivos intermedios.
- Almacenamiento temporal de los paquetes en los nodos intermedios.
- ***Red en estrella, irregular, árbol*

---


## Por escala
| Red                                 | Localización           |
| ----------------------------------- | ---------------------- |
| Red de área personal (**PAN**)      | Habitación, domicilio  |
| Red de área local (**LAN**)         | Domicilio, campus, etc |
| Red de área metropolitana (**MAN**) | Ciudad o similares     |
| Red de área amplia (**WAN**)        | Región o país          |
| Internet                            | Mundo                       |

### Redes PAN
- Zona geográfica muy pequeña.
- Normalmente pertenece a un usuario que desea conectar distintos dispositivos.
- Normalmente se utilizan tecnologías inalámbricas y sistemas de difusión.
- Se necesita un mecanismo de control de acceso al medio compartido.
- No mucha capacidad de transmisión de datos.

### Redes LAN
- Zona geográfica de tamaño moderado.
- Normalmente pertenece a la entidad propietaria de los dispositivos conectados a la red.
- Utilización de sistemas de difusión.
- Se necesita un mecanismo de control de acceso al medio compartido.
- Mayor capacidad de transmisión de datos.

### Redes MAN/WAN
- Suelen hibridarse, la separación entre ambas es muy difusa.
- Interconectan a las redes locales.
- **IMP:** elementos de conmutación que toman decisiones de encaminamiento mediante diversos algoritmos.

---

## Por transmisión de la información
### Redes de conmutación de circuitos
- Se tiene un cable dedicado entre usuario origen y usuario destino para transmitir información.
- Todos los datos siguen el mismo camino.

### Redes de conmutación de mensajes
- No establece una ruta dedicada, se decide de forma dinámica con cada transmisión.
- Cada nodo recibe el mensaje completo, decide el siguiente nodo y realiza el reenvío.

### Redes de conmutación de paquetes
- Misma filosofía que la conmutación de mensajes.
- Se pone límite al tamaño de los datos: se fraccionan los mensajes en unidades pequeñas llamadas *paquetes*.
- Cada paquete puede seguir un camino diferente.