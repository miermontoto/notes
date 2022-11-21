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
