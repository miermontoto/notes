## Introducción
La coordinación incluye problemas como:
- exclusión mútua en el acceso a recursos
- Algoritmos de elección (acuerdo)
- Multidifusión en grupos de procesos
- Consenso

# Exclusión mútua
Cada proceso en diferentes máquinas tiene una "sección crítica", que no puede ser accedido por varios procesos a la vez.

### Propiedades que se deben cumplir
1. **Exclusión mútua:** un proceso como máximo puede estar en su sección crítica.
2. **Pervivencia:** ningún proceso "muere de hambre" → todo el que pida entrar en su sección crítica debe hacerlo en algún momento.
3. **Ordenación:** se respeta el orden de las peticiones (opcional)

## Soluciones
### Solución con servidor-árbitro


### Soluciones sin servidor
#### Token ring
- Se asigna a cada proceso un número de forma que puedan ser ordenados.
- Cada nodo conoce la IP y puerto de su nodo siguiente.
- Mediante mensajes punto a punto, se transmite un token.
- El que tenga el token puede entrar en su sección crítica.
- Al salir de la sección crítica, si se necesitaba, ha de retransmitir el token.

##### <mark style="background: #FFF3A3A6;">Ventajas</mark>
- Garantiza las dos primeras propiedades
- Sencillo de implementar, sin procesos extra

##### <mark style="background: #FF5582A6;">Desventajas</mark>
- Consume ancho de banda continuamente
- Si el testigo se pierde, debe ser regenerado
- 

#### Algoritmos P2P basadas en hash tables distribuidas

#### Algoritmos de votación


# Consenso
Varios nodos de un sistema distribuido deben tomar una decisión, y es necesario que todos tomen la misma decisión.

## Problemas
Los **nodos** pueden fallar:
- Pueden parar de funcionar
- Pueden parar y luego volver a funcionar (perdiéndose información)
- Pueden enviar mensajes erróneos o contradictorios (*fallo bizantino*)

La  puede fallar:
- Datos corruptos o fuera de orden (no con TCP)
- Partición de la red (nodos inalcanzables)
	- Difícil distinguir esta situación de "nodo caído"