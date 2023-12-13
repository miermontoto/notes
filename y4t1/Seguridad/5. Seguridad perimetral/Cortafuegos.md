[[_resources/Cortafuegos.pdf]]

---

# Introducción
> [!info] Definición
> Elemento de control ubicado entre la red local corporativa e Internet

**Sirve para**
- Consolidar mecanismos de seguridad
- Implementar alarmas y monitorizar los elementos
- Implementar VPN basadas en IPsec

**No protege frente a**
- Ataques que eluden los cortafuegos
- Amenazas internas
- Accesos vía WLAN
- Malware importado
- Transferencia de archivos infectados

# Tipos
**Según el modo de funcionamiento**
- Filtros de paquetes
- Filtros de paquetes con inspección de estados
- Pasarela (*gateway*) a nivel de aplicación == Proxy de aplicación
- Pasarela (*gateway*) a nivel de circuito

**Según la ubicación o lo que protegen**
- Hosts bastión
- Cortafuegos basados en host
- Cortafuegos personales

## Filtros de paquetes
Routers que filtran paquetes a nivel de red = capa IP de red.

- Aplica un conjunto de reglas a cada paquete IP entrante o saliente para reenviar o descartar el paquete.
- Se basa en IPs (red), puertos (transporte) y MACs (enlace).
- Cuando no se puede aplicar ninguna regla a un paquete hay que aplicar una acciónn por defecto (descartar o enviar).

- <mark style="background: #BBFABBA6;">Rápidos, transparentes, escalables</mark>
- <mark style="background: #FF5582A6;">No pueden prevenir vulnerabilidades de aplicaciones, registros limitados, no soportan mecanismos de autenticación sofisticados, pueden crearse brechas con configuraciones incorrecta</mark>

**Ataques que soportan**
- Suplantación de direcciones IP (*spoofing*)
- Ataque de encaminamiento de origen
- Ataque de fragmentación de cabeceras


## Filtros de paquetes con inspección de estados
Cortafuegos que revisan la información de las cabeceras de los paquetes y además mantienen y usan la información sobre las conexiones TCP → *Stateful Packet Filters*

- **Simple:** permite el tráfico entrante con puertos elevados (>1024).
- **Con estado:** solo permite tráfico entrante con puertos altos que correspondan a una entrada del directorio