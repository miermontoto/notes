# Tema 1. Introducción y servicios básicos

### Sesión 0, 1, 2. ???
...

---
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


> [!error] EL RESTO NO ESTÁ HECHO (preguntar al duponeitor 19000)


---

## Sesión 4. Programación de red con Python: TCP
Se reutilizan los módulos de utilidad de la sesión anterior (`ips.py` y `ips_argv.py`) para realizar todos los ejercicios. Además, para los ejercicios "oche" se reutiliza el código usando otro módulo nuevo (`recibir_mensaje.py`):
```python
def uno(sock) -> str:
"""
Función que recibe bytes del socket hasta
detectar el fin de línea de uno en uno.
"""
...

def readline(sock) -> str:
"""
Función que recibe bytes del socket hasta
detectar el fin de línea en bloque utilizando
la función `readline()` de python.
"""
...
```

### Ejercicio 1.
*Prueba de ejecución:* ![[_resources/Pasted image 20231031184736.png]]

### Ejercicio 2.
```python
def recvall(sock, bytes) -> str:
"""
Recibe una cantidad de bytes determinada por el parámetro `bytes` del
socket `sock` y devuelve una cadena de texto con los datos recibidos.
"""

data = b""
while len(data) < bytes:
	paquete = sock.recv(bytes - len(data))
	if not paquete:
		return ""
	data += paquete

return data.decode("utf8")
```

*Prueba de ejecución:* ![[_resources/Pasted image 20231031185238.png]]


### Experimento.
- Con `tcp_servidor1_simple.py`: ![[_resources/Pasted image 20231031185413.png]]
- Con `tcp_servidor2_recvall.py`: ![[_resources/Pasted image 20231031185331.png]]
En este caso, no ocurren fallos de finalización en nignuno de las dos pruebas, al contrario de lo que dice el experimento. De hecho, ambos servidores funcionan de la misma manera para un cliente descordinado.

### Ejercicio 3 / Experimento.
*Prueba de ejecución:* ![[_resources/Pasted image 20231031185703.png]]

En este caso, ocurre justo el problema que se describe en el enunciado: por la congestión que genera el sleep, llegan dos mensajes juntos y el cliente nunca termina.

### Ejercicio 4 / Experimento.
*Las funciones que se piden están descritas en la introducción de esta sesión en un módulo separado.*

*Prueba de ejecución:* ![[_resources/Pasted image 20231031190158.png]]

Como se pruebe comprobar, aún con el sleep en posición se consigue evitar el problema anterior y todo funciona correctamente.

### Ejercicio 5.
*ídem con el ejercicio anterior*

*Prueba de ejecución:* 
> [!error] NO ME FUNCIONA!!! es el server el que está mal, el cliente funciona ok. (ticket)

### Ejercicio 6.
*Prueba de ejecución:* ![[_resources/Pasted image 20231031190832.png]]

### Ejercicio 7 (opcional).
*Prueba de ejecución:* ![[_resources/Pasted image 20231031190908.png]]

### Experimento + Ejercicio Docker.
*Prueba de ejecución:*
![[_resources/Pasted image 20231031191329.png]] + ![[_resources/Pasted image 20231031191443.png]]

---

# Tema 2. Servicios Web
## Sesión 2.1. Instalación de infraestructura web
Se ignora la primera parte de la sesión en esta práctica: la instalación local de `nginx`. Se realizó sobre la marcha y no se refleja en la memoria ya que el propio enunciado no lo considera relevante.

Respecto al resto del enunciado, se responden a las siguientes preguntas:
- Tras la ejecución del primer comando, `netstat -4tpl` no muestra a nadie escuchando en el puerto 80 porque el contenedor Docker solo tiene SUS puertos abiertos, no los del anfitrión.
- Para "averiguar" la IP del contenedor, se ejecuta el siguiente comando:
   ![[_resources/Pasted image 20231031192541.png]]
- Al hacer `wget` a dicha IP se obtiene lo siguiente:
   ![[_resources/Pasted image 20231031192617.png]]
- Se obtiene `50x.html`:
   ![[_resources/Pasted image 20231031192654.png]]
- Tras las siguientes modificaciones, se obtiene el siguiente respuesta (correcta), y se comprueba que se ven las modificaciones:
   ![[_resources/Pasted image 20231031192835.png]]
- En los logs del contenedor aparecen las peticiones del navegador:
   ![[_resources/Pasted image 20231031192925.png]]
- 

---

## Sesión 2.2. Aplicaciones web y HTTP