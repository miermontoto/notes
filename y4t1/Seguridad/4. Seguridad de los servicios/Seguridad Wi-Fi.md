Normalmente, las redes inalámbricas se basan en el estándar IEEE 802.11

## Componentes
![[_resources/Pasted image 20231130150705.png]]

- **BSS**
- **IBSS** (*independient*)
- **ESS**
## Capas
![[_resources/Pasted image 20231130150847.png]]

### Capa PHY
Especifica la codificación de los bits a nivel físico: frecuencias de trabajo, técnicas de modulación en el aire...

### Capa MAC
Se comunica con la capa superior mediante bloques de datos denominados **MSDU** (*MAC Service Data Unit*) con el que:
- *en transmisión* → ensambla los datos en tramas (MPDU)
- *en recepción* → desensambla tramas, reconoce direcciones y detecta errores
- Siempre controla el acceso al medio

![[_resources/Pasted image 20231130151052.png]]

## Servicios
> [!faq] Lo que "más nos interesa"


9 servicios: 6 de transferencia de datos, 3 de seguridad en la red.

### Servicios de transferencia de datos
- *Distribution Service* → utilizado por estaciones BSS para enviar datos a otras estaciones BSS usando el DS en un mismo ESS.
- *Integration Service* → transfiere datos entre una estación LAN 802.11 y otra LAN 
- *MSU Delivery* → servicio básico para enviar datos

### Servicios relacionados con asociaciones
Antes de que el DS pueda comunicarse con una estación, esta debe estar *asociada* → concepto relacionado con las transiciones que se producen al moverse.

- SIN transición
- Transición BSS
- Transición ESS