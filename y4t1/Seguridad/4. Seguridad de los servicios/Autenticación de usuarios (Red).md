![[_resources/Autenticacion_Usuarios_Red.pdf]]

---

# Kerberos
> [!info] Definición
> Kerberos es un protocolo de autenticación de usuarios para sistemas distribuidos.


Kerberos implementa una estrategia centralizada para autenticar los clientes a los servidores (y opcionalmente los servidores a los clientes)
- En vez de gestionar independientemente la autenticación de cada cliente con cada uno de los servidores,.
- La gestión independiente es muy engorrosa si hay muchos clientes/servidores.

Actualmente, se utiliza la versión 5 que se actualiza un par de veces al año.

## Visión general
![[_resources/Pasted image 20231109160652.png]]

> [!warning] NO HAY QUE SABERSE EL INTERCAMBIO DE MENSAJES

## Autenticación entre dominios
- Un **dominio** es un conjunto de nodos gestionados por el mismo servidor.
- Un **principal** es cualquier usuario o servicio conocido. Se identifican por el nombre del principal.

Cada servidor Kerberos...
- comparte una clave secreta
- está registrado
... con los otros servidores.


## Inicio de Sesión Único (SSO)
> [!info] Definición
> Propiedad o característica de un sistema o procedimiento de control de acceso que permite a un usuario acceder a múltiples aplicaciones/sistemas/recursos autenticándose una sola vez.

![[_resources/Pasted image 20231109161914.png]]

> [!faq] Web SSO
> El usuario se autentica en un sitio web que le proporciona una cookie (~token) de autenticación con la que puede acceder a múltiples sitios web que aceptan la cookie sin re-autenticarse.
> 
> El concepto Web SSO es lo mismo que SSO para aplicaciones. El otro SSO se conoce como Entreprise SSO.


### Ejemplo de SSO (CAS)
![[_resources/Pasted image 20231109162053.png]]

# Gestión de identidades digitales
La gestión de identidad (*IdM*) es la tarea de controlar la información sobre los usuarios de los computadores de una o múltiples organizaciones.

Esta información incluye:
- La que autentica la identidad del usuario
- La que indica qué información y acciones está autorizado el usuario
- La que describe al usuario
- La que describe quién y cómo puede modificarla

Además de usuarios, también se gestionan identidades de dispositivos, aplicaciones, servicios, etc. En general se gestiona la identidad de "entidades" → múltiples identidades digitales.
## Proveedores de identidad digital 

### Corporativos
Para gestionar de forma centralizada las identidades digitales de los miembros de una corporación, es necesario usar un sistema de gestión de identidades.

![[_resources/Pasted image 20231109163011.png]]

### Globales
El login de google, reddit, twitter, steam, etc.

## Gestión de identidades federadas
> [!info] Definición
> Conjunto de tecnologías, estándares, procedimientos, etc, que permiten la portabilidad de las identidades digitales.
> **Objetivo:** permitir a los usuarios de un dominio de seguridad acceder a los datos y servicios de otros dominios de forma transparente.
> 

**Ejemplos**
- Federación basada en enlaces de cuentas: ![[_resources/Pasted image 20231109163722.png]]
- Federación basada en roles: ![[_resources/Pasted image 20231109163731.png]]
- Servicios web en cadena: ![[_resources/Pasted image 20231109163738.png]]

### Funcionamiento actual
1. El usuario proporciona su identidad y atributos al proveedor de identidad (*en su mismo dominio*)
2. Un administrador (*en el mismo dominio*) añade roles y otra información a la identidad de ese usuario.
3. Cuando el usuario quiera acceder a un servidor de dominios diferente, el nuevo proveedor de servicios le pregunta al proveedor de identidad.
4. El proveedor de servicios proporciona al usuario los servicios a los que está autorizado.

# Estándar SAML

# Estándar OpenID
> [!info] Definición
> Estándar abierto para autenticar usuarios (usando navegadores web) en múltiples sitios web utilizando un Proveedor de Identidad.

**Mecanismos de autenticación**
OpenID NO especifica ningún mecanismo concreto para la autenticación.
Se pueden usar contraseñas, tokens, biometría (o combinarlos)

**Entidades**
![[_resources/Pasted image 20231109164405.png]]

- **End User**
- **Relaying Party**
- **OpenID provider**
- **User Agent**

**Registro de usuarios en el Proveedor**
El usuario deve crear una cuenta den un proveedor de identidad que use OpenID.
El proveedor asigna al usuario un Identificador OpenID:
- URL
- XRI

El usuario obtiene del proveedor un URL habilitado para OpenID que puede usar en los sitios web habilitados para OpenID.

**Protocolo de autenticación**
OpenID Connect (basado en OAuth)

# Estándar OAuth
> [!info] Definición
> Proporciona un método para que un cliente acceda a un recurso SIN compartir sus credenciales.

## Roles
> [!error] HAY QUE SABÉRSELO

![[_resources/Pasted image 20231109164743.png]]

## Aplicación cliente
### Registro
Antes de usar el protocolo, el cliente tiene que registrarse con el servidor de atuorización.

Al registrar un cliente, el desarrollador o responsable DEBE:
- Especificar el tipo del cliente.
- Proporcionar los URIs de redirección del cliente.

### Tipos
- Cliente confidencial → capaz de mantener confidencialidad
- Cliente público → incapaz de mantener confidencialidad

### Perfiles
- **Aplicación web**
- **Aplicación basada en el agente del usuario**
- **Aplicación nativa**

### Interacciones
![[_resources/Pasted image 20231109165423.png]]

### Flujos
> [!warning] Hay que sabérse los flujos?
> "Sí y no", "hay que saber colocar las flechas".

