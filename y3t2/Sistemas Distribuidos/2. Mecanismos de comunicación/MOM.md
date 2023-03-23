![[_resources/02-4-MOM.pdf]]

---

## Concepto
Desacoplar clientes y servidores, productores y consumidores.
- Las RPCs son como llamadas telefónicas (el otro extremo debe estar activo)
- La mensajería es como el SMS (el mensaje se almacena hasta que pueda ser entregado)
- Útil cuando la función requerida tarda.

## Elementos de la mensajería
- **Procesos** (se comunican por canales)
	- Productor
	- Consumidor
- **Mensajes**
	- Cabecera
	- Contenido (paquete de datos más o menos grande)
- **Elementos intermedios** (*broker*)
	- Exchanges (*centralitas*): recibe mensajes del productor, los envía a una cola
	- Colas: almacenan mensajes y los envían a consumidores
	- *Bindings*: asocian exchanges con colas

![[_resources/Pasted image 20230323101302.png]]

### Broker
Intermediario entre las partes del sistema que queremos comunicar.

Se ocupa de:
- Transformar la información (mensajes): agrupar, partir, etc.
- Enrutarla a sus destinos
- Permitir diferentes patrones de reparto (1to1, broadcast, suscripciones)
- Asegurar la llegada (almacenamiento persistente)
![[_resources/Pasted image 20230323101221.png]]

## Problemas
- Modelo de programación asíncrono y orientado a eventos.
- El broker es un punto único de fallo.
- Difícil de adaptar a un punto único de fallo, y cuello de botella.
- Rendimeinto peor que RPCs.
- Un subscriptor lento puede afectar a los demás, al causar que el broker limite la velocidad del productor.