![[_resources/PA - Sesión 2 - Enunciado.pdf]]

---

### Ejercicio 1
Primero se envía una petición ARP del equipo 1 a su router, de modo que se conocen entre sí y se rellenan las tablas MAC. Luego, se envía la petición en sí. Puesto que el primer router conoce al segundo router, el mensaje se envía directamente. Al llegar al segundo router, puesto que no conoce al Equipo 2, se envía una petición ARP y se rellenan las tablas de nuevo. Por último, el mensaje llega al equipo 2. Para la vuelta, puesto que ya se conocen las parejas equipo-router, el mensaje pasa de dispositivo en dispositivo directamente hasta llegar al equipo original.

| Tipo de mensaje | Origen   | Destino  | MAC origen  | MAC destino |
| --------------- | -------- | -------- | ----------- | ----------- |
| ARP             | Equipo 1 | Router 1 | 1A:2B:3C... | FF:FF:FF... |
| ARP (respuesta) | Router 1 | Equipo 1 | 11:22:33... | 1A:2B:3C... |
| ICMP            | Equipo 1 | Router 1 | 1A:2B:3C... | 11:22:33... |
| ICMP            | Router 1 | Router 2 | 11:22:33... | AA:BB:CC... |
| ARP             | Router 2 | Equipo 2 | AA:BB:CC... | FF:FF:FF... |
| ARP (respuesta) | Equipo 2 | Router 2 | 1A:2B:3C... | AA:BB:CC... |
| ICMP            | Router 2 | Equipo 2 | AA:BB:CC... | 1A:2B:3C... |
| ICMP            | Equipo 2 | Router 2 | ...         |             |
| ICMP            | Router 2 | Router 1 | ...         |             |
| ICMP            | Router 1 | Equipo 1 | ...         |             | 

### Ejercicio 2
| Tipo de mensaje | Origen | Destino | MAC origen | MAC destino |
| --------------- | ------ | ------- | ---------- | ----------- |
| RTS             | A      | R1      | ::AA...    | ::11...     |
| CTS             | R1     | A       | ::11...    | FF:FF...    |
| Datos           | A      | R1      | ::AA...    | ::11....    |
| CONF            | R1     | A       | ::11...    | ::AA...     |
| mismo funcionamiento...                |        |         |            |             |
