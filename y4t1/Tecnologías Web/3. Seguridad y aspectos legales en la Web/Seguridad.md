![[_resources/6_Seguridad.pdf]]

#autenticación #autorización #auditoría #seguridad #HTTP

---

# Conceptos

- **Autenticación:** Asegurar que el usuario es quien dice ser.
- **Autorización:** Verificar que tiene acceso al recurso que solicita.
- **Auditoría:** Registrar todos los accesos de usuarios a recursos.

## Autenticación
Para verificar que el usuario es quien dice ser, necesitamos:

- **Algo que el usuario sabe**, como un pin o una contraseña.
- **Algo que el usuario tiene**, como una llave de seguridad o un teléfono.
- **Algo que el usuario es**, como su huella digital o su retina.
- **Algo que el usuario hace**, como el port knocking.

Actualmente, es muy común la autenticación multiusuario (al menos 2 técnicas para verificar la identidad del usuario).

## Autorización
Dos niveles:
 - Servidor: puede implementar diferentes sistemas de control de accesos: *ACL, DAC, MAC, RAC...*
 - Aplicación: a nivel de aplicación, el control se hace sobre las vistas que puede ver un usuario. En JSF hay dos métodos para implementarla:
	 - Filtros servlet
	 - JSF Listeners

### Filtros
No es obligatorio establecer ningún parámetro para declarar el filtro, pero es común utilizar:
- **dispatcherType**, para establecer qué tipo de peticiones pasarán por el filtro. (*REQUEST, ERROR, FORWARD, INCLUDE*)
- **urlPatterns**, para definir qué direcciones URL provocan que se procese el filtro y cuáles están extentas. Por defecto, todas procesan el filtro.
- **initParams**, que permite reutilizar un filtro con diferentes parámetros. Si se usa, es obligatorio redefinir el método `init` que recibe los parámetros de inicio y definir cómo los almacena.

### JSF Listener
Clases que se ejecutan cuando sucede un evento. Hay listeners de Petición, Sesión y Contexto.


# HTTPS
- Los datos se encriptan de forma privada entre el servidor y el cliente.
- Para la encriptación, se utiliza un certificado SSL/TLS. Estos certificados pueden ser emitidos por cualquiera.
- Para reforzar la seguridad, los navegadores suelen marcar como no seguras las webs que no tengan un certificado válido emitido por una AC reconocida.

## Tipos de certificado
Dentro de los certificados emitidos por una entidad certificadora también hay 3 tipos:
- **Certificado con validación de dominio (DV SSL/TLS):** sólo se verifica que el usuario tenga acceso al dominio mediante un correo electrónico o llamada de verificación.
- **Certificado con validación de organización (OV SSL/TLS):** amplía la seguridad del anterior verificando con controles más estrictos la compra y derecho de uso del dominio, así como los datos de la organización o persona que los posee.
- **Certificado con validación extendida (EV SSL/TLS):** se verifica la organización, la dirección postal y el dominio exclusivo.