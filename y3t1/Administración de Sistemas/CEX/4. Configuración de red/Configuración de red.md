# IPv4

# Interfaces de red

# iptables
Todos los paquetes inspeccionados por iptables pasan por una secuencia de colas en las que son procesados. Cada una de esas colas está asociada a un tipo de actividad y está controlada por una cadena de filtrado de paquetes.

## Colas de filtrado

### mangle table
Responsable de alterar los bits de calidad de servicio en la cabecera TCP.

### filter table
Tabla de filtrado genérico.

Tiene tres cadenas:
- **Forward chain**: filtra paquetes a servidores protegidos por el firewall.
- **Input chain**: filtra paquetes destinados al firewall.
- **Output chain**: filtra paquetes originados en el firewall.

### NAT
Responsable de la traducción de direcciones de red.

Tiene dos cadenas:
- **pre-routing chain**: paquetes NAT cuando la dirección de destino del paquete tiene que cambiarse.
- **post-routing chain**: paquetes NAT cuando la dirección de origen del paquete tiene que cambiarse.

## Flujo de paquetes
![[_resources/Pasted image 20221020093719.png]]

## Objetivos de las reglas
- `ACCEPT`
- `DROP`
- `LOG`
- `REJECT`: bloquea el paquete pero devuelve un mensaje de error.
- `DNAT`: traducción de la red de destino.
- `SNAT`: traducción de la red de origen.
- `MASQUERADE`: enmascarar la red de origen.


## Criterios
- `-A <chain>`
- `-s <source_ip>`
- `-d <target_ip>`
- `-p <TCP/UDP> [port]`
- `--sport <port_range>`
- `--dport <port_range>`
- `-j <objective>`

# arp

# utilidades

`ping`, `netstat`, `netlookup`

## firewalld


