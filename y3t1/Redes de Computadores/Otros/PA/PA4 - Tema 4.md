
![[_resources/Redes de Computadores - PA4.pdf]]

---

### Ejercicio 1
- **R1**
	- **R1-A:** 192.168.45.1
	- **R1-R2:** 192.168.45.161
	- **R1-R3:** 192.168.45.165
- **R2**
	- **R2-B:** 192.168.45.129
	- **R2-R1:** 192.168.45.162
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
![[_resources/Tema 4 (PA4) 2022-11-28 13.14.02.excalidraw](_resources/Tema%204%20(PA4)%202022-11-28%2013.14.02.excalidraw.md)