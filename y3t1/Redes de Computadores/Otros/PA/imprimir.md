## PA1 - Tema 2
### Ejercicio 1
![[_resources/(PA) Tema 2 (PA1) 2022-11-07 13.13.04.excalidraw]]

### Ejercicio 2
![[_resources/(PA) Tema 2 (PA1) 2022-11-07 13.23.55.excalidraw]]

### Ejercicio 3
![[_resources/(PA) Tema 2 (PA1) 2022-11-07 13.26.19.excalidraw]]

### Ejercicio 4
![[_resources/(PA) Tema 2 (PA1) 2022-11-07 13.29.08.excalidraw]]

### Ejercicio 5
![[_resources/(PA) Tema 2 (PA1) 2022-11-07 13.36.46.excalidraw]]

### Ejercicio 6
![[_resources/(PA) Tema 2 (PA1) 2022-11-07 13.43.41.excalidraw]]

### Ejercicio 7
![[_resources/(PA) Tema 2 (PA1) 2022-11-07 13.48.06.excalidraw]]

### Extra
![[_resources/Tema 2 - Extra (PA3) 2022-11-14 13.09.05.excalidraw]]

---

## PA2 - Tema 3
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
| CTS             | R1     | Todos       | ::11...    | FF:FF...    |
| Datos           | A      | R1      | ::AA...    | ::11....    |
| CONF            | R1     | A       | ::11...    | ::AA...     |
| mismo funcionamiento...                |        |         |            |             |

---

## PA4 - Tema 4
### Ejercicio 1
- **R1**
	- **R1-A:** 192.168.45.1
	- **R1-R2:** 192.168.45.161
	- **R1-R3:** 192.168.45.165
- **R2**
	- **R2-B:** 192.168.45.129
	- **R2-R1:** 192.168.45.162jercicio 3
- **R3**
	- **R3-C:** 192.168.45.145
	- **R3-D:** 192.168.45.153
	- **R3-R1:** 192.168.45.166

| Sala | ID destino | Máscara destino | Siguiente salto |
| ---- | ---------- | --------------- | --------------- |
| A    | -          | -               | -               |
| B    | 45.128     | 28              | 45.162          |
| C    | 45.144     | 29              | 45.166          |
| D    | 45.152     | 29              | 45.166          |

### Ejercicio 2
No cabe, con solo las dos primeras subredes no habría hueco para otra más.

### Ejercicio 3
- 64+1 → 7 bits → /25
- 15+1 → 5 bits → /27
- 9+1 → 4 bits → /28
- 4+1 → 3 bits → /29
- 4 → 3 bits → /29
- 2 → 2 bits → /30

- 10.0.0.0/25 (A)
- 10.0.0.128/27 (B)
- 10.0.0.160/28 (C)
- 10.0.0.176/29 (D)
- 10.0.0.184/29 (Switch)
- 10.0.0.192/30 (R1-R2)

### Ejercicio 4
- A-B → 300 ← 300+3 < 512 ← 9 bits (/23)
- C → 100 ← 100 + 3 < 128 ← 7 bits (/25)
- Sala C → 14 ← 14 + 3 < 32 ← 5 bits (/27)
- Routers → 3 ← 3 + 2 < 8 ← 3 bits (/29)

- 156.35.128.0/23
- 156.35.130.0/25
- 156.35.130.128/27
- 156.35.130.160/29

Nº dir. malgastadas
- 209
- 25
- 15
- 3

### Ejercicio 5
![[_resources/Tema 4 (PA4) 2022-11-28 13.14.02.excalidraw]]

---

## PA3 - Tema 4
### Ejercicio 1
![[_resources/PA3 - T4 2022-10-31 13.11.57.excalidraw]]

### Ejercicio 2
![[_resources/PA3 - T4 2022-10-31 13.17.55.excalidraw]]

### Ejercicio 3
![[_resources/PA3 - T4 2022-10-31 13.28.22.excalidraw]]

### Ejercicio 4
![[_resources/PA3 - T4 2022-10-31 13.36.31.excalidraw]]

### Ejercicio 5
![[_resources/PA3 - T4 2022-10-31 13.50.25.excalidraw]]

### Ejercicio 5 al revés
![[_resources/PA3 - Tema 4 2023-01-23 14.01.13.excalidraw]]

---

## PA5 - Tema 5
### Ejercicio 3
![[_resources/Tema 5 (PA5) 2022-11-28 13.48.45.excalidraw]]

---

## Entregable 1
### Ejercicio 1
![[_resources/Entregable1 2022-11-28 10.09.52.excalidraw]]

![[_resources/Entregable1 2022-11-28 10.28.57.excalidraw]]

### Ejercicio 2
![[_resources/Entregable1 2022-11-27 14.05.50.excalidraw]]

### Ejercicio 4
![[_resources/Entregable1 2022-11-28 09.21.56.excalidraw]]

---

## Entregable 2
### Ejercicio 1
![[_resources/Entregable2 2022-12-11 16.48.50.excalidraw]]

### Ejercicio 2
![[_resources/Entregable2 2022-12-08 18.56.16.excalidraw]]