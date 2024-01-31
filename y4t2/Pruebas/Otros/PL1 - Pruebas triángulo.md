## Agrupación de pruebas
- **Validación de datos**
	- Números
		- Naturales
		- Decimales
			- Separación
			- Por aproximación
			- Por truncamiento
		- Negativos
	- Letras
	- Caracteres raros
	- Campo vacío
	- Ceros
- **Tipología triángulo válido**
	- Equilátero
	- Isósceles
	- Escaleno
	- Inválido
		- $a+b>c$
		- $b+c>a$
		- $c+a>b$
- Técnicas
	- Overflow
		- short
		- int
		- long
	- Underflow
		- short
		- int
		- long
	- Números grandes

![[Desigualdad_del_triángulo.svg|250]]
## Casos de prueba

| CASO | Naturales | Decimales | Decimales (separación) | Decimales (aproximación) | decimales (truncamiento) | Negativo | Letras | Raros | Vacío | Cero | Equilátero | Isósceles | Escaleno | Desigualdad  (3º lado) | Desigualdad (1º lado) | Desigualdad (2º lado) | UF short | UF int | UF long | OF short | OF int | OF long | resultado |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 2, 2, 3 | X |  |  |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  | ok |
| 2.2, 2.2, 2.2 |  | X |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  | ok |
| 2,2, 2,2, 2,2 |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ok (inválido) |
| 2, 3, 4 |  |  |  |  |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  | ok |
| 1, 0, 3 |  |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  | ok (inválido) |
| a, 2, 2 |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ø, 3, 4 |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| ., ,., ,., |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| , 2, 3 |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| , , |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| -1, 3, 4 |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 1, 1, 3 |  |  |  |  |  |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |
| 5, 1, 2 |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |
| 1, 6, 2 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |
| -33000, -33000, -33000 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |
| -2150000000, -2150000000, -2150000000 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |  |  |  |  |  |
| -10000000000000000000, -10000000000000000000, -10000000000000000000 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |  |  |  |  |
| 33000, 33000, 33000 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |  |  |  |
| 2150000000, -2150000000, 2150000000 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |  |  |
| 10000000000000000000, 10000000000000000000, 10000000000000000000 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |  |
| 2.9999, 3, 3 |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 2.0001, 2, 2 |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
