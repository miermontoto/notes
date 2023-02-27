![[_resources/02-2-Formato-informacion.pdf]]

----

## Middleware
- Capa de software intermedio.
- Se ejecuta en servidor y en cliente.
- Accede a la API de sockets.
- Codifica la información antes de enviarla.
- Proporciona otros servicios de infraestructura que posibilitan implementar las RPC.

### XDR
Estándar de codificación binaria independiente de la arquitectura.
- Biblioteca de funciones "filtro"
- Lenguaje para declarar tipos nuevos
- Herramientas de generación automática de código

### Filtros XDR
- Convierten tipos de datos *nativos* a un formato independiente y viceversa.
- Todos usan la misma sintaxis:
```c
#include <rpc/types.h>
#include <rpc/xdr.h>
bool_t xdr_tipo(XDR *operacion, tipo, *dato)
```

![[_resources/La información (XDR) 2023-02-23 10.27.42.excalidraw]]

### Operación
Para generar variables XDR, es necesario generar una variable `operación` primero:
```c
XDR operacion;
int j = 2007;
// ...
xdrstdio_create(&operacion, fichero, XDR_ENCODE);
xdr_int(&operacion, &j);
//...
xdr_destroy(&operacion);
```