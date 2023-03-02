![[_resources/02-2-Formato-informacion.pdf]]

----

# Middleware
- Capa de software intermedio.
- Se ejecuta en servidor y en cliente.
- Accede a la API de sockets.
- Codifica la información antes de enviarla.
- Proporciona otros servicios de infraestructura que posibilitan implementar las RPC.

## XDR
Estándar de codificación binaria independiente de la arquitectura.
- Biblioteca de funciones "filtro"
- Lenguaje para declarar tipos nuevos
- Herramientas de generación automática de código

![[_resources/Pasted image 20230302093634.png]]

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

### Arrays de longitud variable
```c
/* ejemplo.x */
typedef int VariosEnteros<100>;
```

```c
/* ejemplo.h, converitdo por rpcgen a tipo "struct" */
typedef struct {
	u_int VariosEnteros_len;
	int *VariosEnteros_val;
} VariosEnteros;
typedef struct VariosEnteros VariosEnteros;
```

4 bytes por entero, 4 bytes para longitud (mín 4).

- En **codificación**, es necesario hacer `malloc` para declarar `v.VariosEnteros_val`.
- En **decodificación**, el filtro XDR reserva la memoria de manera automática.
	- Es necesario llamar a `xdr_free()` al terminar.

### Cadenas (string)
```c
/* ejemplo.x */
typedef string Texto<500>; // 500 como máx.
```

```c
/* ejemplo.h, convertido por rpcgen a tipo "struct" */
char * Texto;
```

1 byte por caracter, 4 bytes por longitud (mín 4, máx 504)