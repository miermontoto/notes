<mark style="background: #ADCCFFA6;"></mark>![[_resources/02-4-MOM.pdf]]

---

## Concepto
Desacoplar clientes y servidores, productores y consumidores.
- Las RPCs son como llamadas telefónicas (el otro extremo debe estar activo)
- La mensajería es como el SMS (el mensaje se almacena hasta que pueda ser entregado)
- Útil cuando la función requerida tarda.

### Broker
Intermediario entre las partes del sistema que queremos comunicar.

Se ocupa de:
- Transformar la información (mensajes): agrupar, partir, etc.
- Enrutarla a sus destinos
- Permitir diferentes patrones de reparto (1to1, broadcast, suscripciones)
- Asegurar la llegada (almacenamiento persistente)