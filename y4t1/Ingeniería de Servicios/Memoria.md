# Tema 1. Introducción y servicios básicos
## Sesión 3. Programación de red con Python: UDP
Para esta práctica, se desarrollan módulos de Python que faciliten tareas básicas, como lecturas de hosts y puertos por argumentos:

- `ips.py`:
```python
def check_ip(ip: str) -> bool:
	"""
	Comprueba si una cadena es una dirección IP válida
	:param ip: cadena de texto
	:return: True si es una dirección IP válida, False en caso contrario
	"""
	...

def check_port(puerto: str) -> bool:
	"""
	Comprueba si una cadena es un puerto válido
	:param puerto: cadena de texto
	:return: True si es un puerto válido, False en caso contrario
	"""
	...
```
- `ips_args.py`:
```python
def servidor(argv):
    """
    Función que devuelve el puerto de apertura de un servidor según parámetros de entrada.
    :param argv: Array de argumentos de llamada al script
    :return: entero con el número del puero
    """
    ...

def cliente(argv):
    """
    Función que devuelve el host y el puerto de conexión de un cliente según parámetros de entrada.
    :param argv: Array de argumentos de llamada al script
    :return: Cadena y entero con el nodo y el puerto target del cliente
    """
    ...
```

### Ejercicio 1.
*Prueba de ejecución:* ![[_resources/Pasted image 20231031183509.png]]

### Ejercicio 2.
*Prueba de ejecución:* ![[_resources/Pasted image 20231031183729.png]]

### Ejercicio 3.
*Prueba de ejecución:* ![[_resources/Pasted image 20231031183833.png]]

### Ejercicio 4.
*Prueba de ejecución:* ![[_resources/Pasted image 20231031183944.png]]

### Ejercicio 5.


## Sesión 4. Programación de red con Python: TCP