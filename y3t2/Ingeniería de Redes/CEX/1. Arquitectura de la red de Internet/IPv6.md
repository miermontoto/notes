![[_resources/IRD_IPv6_v2.pdf]]

---

## Motivación
- Direcciones IPv4 agotadas
- Alternativas solo alargan la situación
- IPv4 desfasado y no adecuado para uso actual.

## Concepto
- Una nueva versión de IP
- Mucho más espacio de direccionamiento (128 vs. 32)
- Soporta de manera nativa autoconfiguración, mobile IP, IPsec, anycast...
- Claridad de diseño
	- Mayor velocidad de procesamiento
	- Disminución de complejidad de cabecera

## Visión
Es necesario y el estándar es maduro, pero todavía no está extendido su uso.
La predicción del futuro es incierta.

## Coexistencia IPv6/IPv4
- **Dispositivos *dual-stack*:** despliegue de IPv6/IPv4 sobre la misma infraestructura.
- **Túneles:** nodos o redes IPv6 se comunican sobre las redes IPv4.
- **Mecanismos de traducción:** para comunicar nodos exclusivos IPv4 con nodos exclusivos IPv6.

| ![[_resources/Pasted image 20230206123005.png]] | ![[_resources/Pasted image 20230206123022.png]] |

## Terminología IPv6
![[_resources/Pasted image 20230206123316.png]]
**MTU Ethernet:** 1500B

## Cabecera IPv6
![[_resources/IPv6 2023-02-06 12.37.04.excalidraw]]
- Cabecera mejor organizada
- 8 campos diferentes
- Inclusión de *flow label*
- 16B de direcciones
- Longitud fija de 40B
- Soporta cabeceras de extensión
- No hay campo de checksum

### Cabeceras de extensión
- Después de cabecera IPv6
- Antes de cabecera de transporte
![[_resources/Pasted image 20230206124038.png]]

#### Tipos de extensiones
- hop-by-hop
- destination options
- routing
- fragmentation
- IPsec auth header
- IPsec encapsulating sec payload

## Direccionamiento IPv6
![[_resources/IPv6 2023-02-06 12.42.20.excalidraw]]

### Espacio de direccionamiento
128 bits en campo de direcciones
![[_resources/IPv6 2023-02-09 11.52.14.excalidraw]]*

### Ámbito de direccionamiento
- link-local
- site-local *(deprecated)*
- global

### Tipos de direcciones
- **Unicast:** identificador de una interfaz. Un paquete enviado a una dirección unicast es entregado en la interfaz identificada por esa dirección.
- **Anycast:** identificador de un conjunto de interfaces. Un paquete enviado a una dirección anycast es entregado a una de las intefaces identificadas por esa dirección.
- **Multicast:** identificador de un conjunto de interfaces. Un paquete enviado a una dirección anycast es entregado a todas las interfaces identificadas por esa dirección.

### Notación de direcciones
- 8 agrupaciones de 16 bits en hexadecimal
- x:x:x:x:x:x:x:x
- xxxx:xxxx::
- `::` indica múltiples grupos de 16 bits cero
	- Solo puede aparecer una vez.
- Los ceros a la izquierda se pueden suponer.


### Autoconfiguración
En el momento que se conecta un equipo a una red:
- Ya se obtiene una dirección local. `fe80::<mac>`
- Tras un RA (que porta los prefijos del router), obtiene una dirección global. `<prefijo>:<mac/random>`
