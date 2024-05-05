![[_resources/IRD_WLAN_v3_notas 2023.pdf]]

---

# Introducción
- Redes cableadas
- Redes no cableadas

![[_resources/Pasted image 20230327123313.png]]

## Nivel de acceso al medio
![[_resources/Redes WLAN 2023-04-10 12.09.19.excalidraw](_resources/Redes%20WLAN%202023-04-10%2012.09.19.excalidraw.md)

- *Tramas **beacon***
	- Transmitidas por el AP
	- Anuncian la existencia de una red
	- Transmitidas a intervalos regulares
	- Estaciones móviles pueden encontrar e identificar a la red
	- Ajustan parámetros de conexión
- *Estados de asociación*
	- **Estado 1:** se detectó la red
	- **Estado 2:** se autenticó en la red
	- **Estado 3:** se asoció a la red y puede transmitir
- *Escaneo*
	- **Pasivo**
		- No requiere transmisión
		- La estación se mueve por los canales esperando por tramas beacon.
	- **Activo**
		- Para cada canal envía tramas esperando la respuesta de una red.
		- <u>Es un proceso de búsqueda de una red concreta.</u>
		- Escucha el canal:
			- Cuando está vacío utiliza DCF y envía una trama *Probe Request*.
			- Si recibe respuesta, procesa la trama *Probe Response*.
- *Informe de escaneo*: genera una lista con los BSS encontrados.
- *Roaming*
	- No definido en el estándar
	- Contempla escaneo y reasociación


## Nivel físico
![[_resources/Pasted image 20230417123217.png]]
![[_resources/Redes WLAN 2023-04-17 12.41.09.excalidraw](_resources/Redes%20WLAN%202023-04-17%2012.41.09.excalidraw.md)

- La velocidad de transmisión depende del rango.
- Variación en la modulación
	- Más bits en el mismo intervalo de tiempo
	- Más susceptible a errores, por lo que se utiliza con buenas SNR.

### IEEE 802.11n (WiFi 4)
- Interoperabilidad con 802.11a/g
- Aumenta throughput con nuevas estrategias
	- Velocidad de transmisión en la capa física
	- Cambios en capa física
	- Aumenta velocidad útil a protocolos por encima de la capa MAC
		- Aplicaciones de usuario
		- Velocidad útil mayor a 100Mbps
		- Reducir sobrecarga de procedimientos MAC
- Soporta canales de 20MHz y 40MHz
	- 40MHz solo recomendad para 5GHz
		- Constan de un canal primario y un canal secundario
			- Canal de extensión
			- Debe ser un canal adyacente
- Mediante la *agregación de paquetes*, se reduce la sobrecarga de las cabeceras.
![[_resources/Pasted image 20230417125654.png]]

