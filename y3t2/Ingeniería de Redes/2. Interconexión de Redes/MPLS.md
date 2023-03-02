![[_resources/IRD_MPLS 2023.pdf]]

---

## Concepto
Diseñado para enviar paquetes basándose en etiquetas (en lugar de L3).

- Diseñado para soportar diferentes protocolos L3 (*multiprotocol*)
- Disminuye la sobrecarga de reenvío en los routes core (*mayor eficiencia*)
- Eficiente y flexible
- Proporciona diferentes servicios, como unicast routing, multicast routing, VPN, *Traffic Engineering*, QoS, *Any Transport Over MPLS*.

![[_resources/Pasted image 20230302192619.png]]

## Componentes
- Label Distribution Protocol *(LDP)*
- Label Switching Paths *(LSP)*
- Label Switching Routers *(LSR)*
- Edge label switching routers *(ELSR)*
- **MPLS labels** and **label stacking**
	- Etiquetas MPLS y formato
	- Label stacking
		- Permite la creación de túneles
		- Ilimitado número de apilamiento de etiquetas

## Funcionamiento
![[_resources/Pasted image 20230220123618.png]]

## Etiquetas
![[_resources/Pasted image 20230220123631.png]]

### Penultimate Hop Popping (PHP)
El penúltimo router elimina la etiqueta antes de enviar el paquete al último router con el objetivo de eliminar esa carga de trabajo del router frontera.

## MPLS L3 VPN
**Objetivo:** proporcionar conectividad peer-to-peer entre redes privadas de clientes (C-network) a través de redes públicas compartidas de proveedores (P-network).

- Hacer una única ruta para que los clientes no puedan ver las rutas de los otros (diferenciar entre redes locales).
- Convierte rutas IPv4 en rutas VPNv4. (VPNv4=RD:IPv4)
- Se requiere apilar etiquetas (*label stack*) para enviar tráfico a través del dominio MPLS. Son necesarias dos etiquetas:
	- Una para identificar la VPN.
	- Etiquetas LPD para transportar el tráfico a través del dominio MPLS.
- Solo los routers frontera conocen las etiquetas de VPN. Los routers intermedios conocen las etiquetas LDP.
![[_resources/Pasted image 20230227121442.png]]
![[_resources/Pasted image 20230227122825.png]]

## Conclusiones
- Combina el rendimiento y capacidades de la conmutación L2 con la escabilidad del routing L3
- Permite a los proveedores de servicios cumplir con los desafíos del crecimiento en uso de la red, además de posibilitar la diferenciación de servicios manteniendo la infraestructura existente.
- La arquitectura es flexible y puede utilizarse con cualquier combinación de tecnologías L2.
- Proporciona transporte para todos los protocolos L3
- Soporta la creación de rutas diferentes entre un origen y un destino en un backbone de routers Internet.