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
/* ejemplo-var.x */
typedef int VariosEnteros<100>;
```

```c
/* ejemplo-var.h, converitdo por rpcgen a tipo "struct" */
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
/* ejemplo-string.x */
typedef string Texto<500>; // 500 como máx.
```

```c
/* ejemplo-string.h, convertido por rpcgen a tipo "struct" */
char * Texto;
```

1 byte por caracter, 4 bytes por longitud (mín 4, máx 504)

### Estructuras
```c
/* ejemplo-struct.x */
struct Persona {
	int edad;
	string nombre<>;
	string apellidos<>;
}
```

```c
/* ejemplo-struct.h */
struct Persona {
	int edad;
	char *nombre;
	char *apellidos;
};
typedef struct Persona Persona;
```

### Uniones
- Sus campos se almacenan en la misma dirección.
- No puede usarse más de uno.
- Es como una variable con varios tipos.

XDR implementa la idea de *unión con un discriminante*.
```c
/* ejemplo-union-x */
union Resultado switch(int tipo) {
	case 1: int entero;
	case 2: double real;
	default string error<>;
};
```

```c
/* Parte de ejemplo-union.h */ 
struct Resultado { 
	int tipo; 
	union { 
		int entero; 
		double real; 
		char *error; 
	}
	Resultado_u; 
}; typedef struct Resultado Resultado;
```


### Punteros
- Los punteros no se pueden transmitir, ya que pierden su significado.
- XDR no puede transmitir punteros, pero puede transmitir la lista.
	- Basta con transmitir cada dato, y un booleano indicando si hay más.
	- En destino, la lista se reconstruye a base de `malloc()`.
	- Concepto de **serialización**.
- XDR define un nuevo tipo: <u>datos opcionales</u>.
	- Un dato opcional puede tener valor asignado o no. (`FALSE` si no lo tiene, `TRUE`de lo contrario)


***Lista enlazada***
XDR no puede transmitir punteros, pero puede transmitir la lista.
- Basta con transmitir cada dato, y un booleano indicando si hay más.
- En destino, la lista se reconstruye a base de `malloc()`.
- Concepto de **serialización**.
```c
struct Elemento {
	int dato;
	struct Elemento *siguiente;
};
```

```c
e.dato = 35;
e.siguiente = malloc(sizeof(struct Elemento));
e.siguiente -> dato = 70;
e.siguiente -> siguiente = malloc(...);
e.siguiente -> siguiente -> dato ) 15;
//...
```


***Datos opcionales***
XDR define un nuevo tipo: <u>datos opcionales</u>.
- Un dato opcional puede tener valor asignado o no. (`FALSE` si no lo tiene, `TRUE`de lo contrario)

```c
/* ejemplo-lista-enlazada.x */
struct ListaEnlazada {
	int dato;
	ListaEnlazada *siguiente;
};
```

### XDR y sockets
XDR fue creado para usarse con ONC RPC.
Pero puede usarse "por separado" para: 
- Convertir datos de formato nativo a un formato independiente
- Volcar esos datos a disco 
- Enviarlos por la red

### Manejadores : `int` vs `FILE*`
- `int` es el usado por la API del operativo
	- `open()`, `read()`, `write()`, `close()`, `dup()`
	- Bajo nivel
	- Usada también por los sockets
- `FILE*` está implementada en la biblioteca estándar C
	- `fopen()`, `fread()`...
	- Alto nivel
	- Usada por XDR
- Convertir uno en otro
	- `FILE* fdopen()`