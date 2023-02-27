![[_resources/IRD_MPLS 2023.pdf]]

---

## Concepto
Diseñado para enviar paquetes basándose en etiquetas (en lugar de L3).

- Diseñado para soportar diferfentes protocolos L3 (*multiprotocol*)
- Disminuye la sobrecarga de reenvío en los routes core (*mayor eficiencia*)
- Eficiente y flexible
- Proporciona diferentes servicios, como unicast routing, multicast routing, VPN, *Traffic Engineering*, QoS, *Any Transport Over MPLS*.

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

## MPLS L3 VPN
**Objetivo:** proporcionar conectividad peer-to-peer entre redes privadas de clientes (C-network) a través de redes públicas compartidas de proveedores (P-network).

- Hacer una única ruta para que los clientes no puedan ver las rutas de los otros (diferenciar entre redes locales).
- Convierte rutas IPv4 en rutas VPNv4. (VPNv4=RD:IPv4)
- Se requiere apilar etiquetas (*label stack*) para enviar tráfico a través del dominio MPLS. Son necesarias dos etiquetas:
	- Una para identificar la VPN.
	- Etiquetas LPD para transportar el tráfico a través del dominio MPLS.
![[_resources/Pasted image 20230227121442.png]]
- Cuando un paquete IP llega al router PE, 