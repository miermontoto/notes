![[_resources/02-3-RPC.pdf]]

---

# Middleware
**Concepto:** ocultar el paso de mensajes subyacentes.

<u>Problemas</u>
- Codificación de la información
- Espacio de direcciones
- Son dos procesos independientes (sincronización)
- Erorres en la red, servidor apagado...

## Invocación remota
- El proceso *llamador* envía los parámetros en un mensaje por la red.
- El proceso *llamador* se bloquea esperando el mensaje de respuesta. (en RPC síncronos)
- Cuando se recibe una conexión, se lee el mensaje y parámetros.
- Se ejecuta el código de la función solicitada, pasándole los parámetros.
- Envía el resutado `r` en un mensaje de respuesta.
- El proceso *llamador* recibe el mensaje de respuesta y se desbloquea.
- Asigna el dato recibido a la variable `z`.

***Problemas***
- En la RPC hay dos procesos.
- No se conoce dónde está el procedimiento remoto.
- La comprobación de tipos en la llamada.
- El paso por referencia.

## Extremos (stub)
![[_resources/Pasted image 20230309102931.png]]
![[_resources/Pasted image 20230309103408.png]]

### Ejecuciones asíncronas
Se utilizan *callbacks* para avisar al cliente del proceso de la información.
![[_resources/Pasted image 20230309103425.png]]

# ONC RPC
