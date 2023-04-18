![[_resources/04-1-Sincronizacion.pdf]]

---

## Introducción
En los algoritmos de algunos sistemas distribuidos, se necesita conocer la hora exacta o comparar las horas entre eventos. *Los sistemas distribuidos no tienen un reloj global.*

# Relojes físicos
La hora de un computador se obtiene de las oscilaciones de un cristal de cuarzo e interrupciones del sistema. Estas oscilaciones son dieferentes en cada sistema.

**Problemas**
- ¿Cada cuánto se sincronizan?
- ¿Cómo tener en cuenta el retardo de la red?
- ¿Cómo actualizar la hora local?

## 1. Frecuencia de sincronización
Sea $C(t)$ el valor del reloj de la máquina en el instante $t$:
- Para un reloj exacto, $dC/dt=1$
- Para un reloj que adelanta, $dC/dt>1$
- Para un reloj que atrasa, $dC/dt<1$

**Problema:** no se conoce $dC/dt$, pero sí un margen de tolerancia $\rho$ de modo que $dC/dt=1 ± \rho$. $\rho$ es el *ratio máximo de deriva*, suministrado por el fabricante del reloj.

![[_resources/Pasted image 20230413101856.png]]

Pasado un tiempo $\Delta$, un reloj se habrá alejado de la hora exacta $t \pm \rho\Delta$.
Dos relojes con un mismo $\rho$ se habrán alejado entre sí $\delta=2\rho\delta$.

**Conclusión:** para evitar una discrepancia mayor que $\delta$ segundos entre dos relojes, deben sincronizarse cada $t_{sincr} \leq \frac{\delta}{2\rho}$.

## 2. Retardo de la red
Para obtener la hora de un servidor:
- $t_1$: envío un mensaje pidiendo la hora.
- $t_2$: llega el mensaje al servidor.
- $t_3$: se envía la hora real del servidor.
- $t_4$: recibo el mensaje con su hora.

![[_resources/Pasted image 20230413102356.png]]

> [!INFO] Método de Christian
> En la ausencia de más información, se considera que $t_x=\frac{(t_2-t_1)}{2}$ (*punto medio*)


## 3. Actualizar reloj local
> [!ERROR] El reloj nunca debería retroceder
> Podría estropear aplicaciones (ej: `make`)

**Solución:**
- Hacerlo ir más lento hasta que la hora real le alcance.
- Manipular la frecuencia con la que se generan interrupciones de reloj.

> [!FAQ] Método de Marzullo
> - En lugar de preguntar a un servidor, pregunta a varios.
> - La respuesta incluye un "margen de error"

*¿Cómo estimar la hora exacta a partir de las respuestas?*
![[_resources/Pasted image 20230413103136.png]]

se obtiene el intervalo con el máximo número de solapamientos y se escoge el punto medio →

![[_resources/Pasted image 20230413103347.png]]

> [!NOTE] Observación
> Variaciones muy ligeras pueden suponer respuestas muy diferentes.

# Relojes lógicos
No marcan la hora exacta que es, sirven como método de ordenación de eventos. Son contadores que no están relacionados con la hora real.

El contador de interrupciones (si es monótono creciente) sirve como reloj lógico.

## Eventos en máquinas separadas
Cuando una máquina envía un mensaje a otra, hay una relación entre los eventos `enviar` y `recibir`: $t_b > t_a \rightarrow N_b < N_a$

> [!INFO] Algoritmo de Lamport
> - El reloj lógico es el contador que mantiene cada máquina.
> - El reloj debe actualizarse con cada recepción de mensaje.
> - Cuando `A` envía un mensaje a `B`, incluye como parte del mensaje el valor de su reloj lógico.

![[_resources/Pasted image 20230417140700.png]]
