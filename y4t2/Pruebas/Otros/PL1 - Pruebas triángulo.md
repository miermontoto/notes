## Situaciones
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
		- Mayor
			- $a+b>c$
			- $b+c>a$
			- $c+a>b$
		- Igual
			- $a+b=c$
			- $b+c=a$
			- $c+a=b$
- Técnicas
	- Overflow
		- short
		- int
		- long
	- Underflow
		- short
		- int
		- long

![[Desigualdad_del_triángulo.svg|250]]
## Casos de prueba

| CASO | Naturales | Decimales | Decimales (separación) | Decimales (aproximación) | decimales (truncamiento) | Negativo | Letras | Raros | Vacío | Cero | Equilátero | Isósceles | Escaleno | Desigualdad  (3º lado) | Desigualdad (1º lado) | Desigualdad (2º lado) | UF short | UF int | UF long | OF short | OF int | OF long | esperada | resultado |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 2, 2, 3 | X |  |  |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  | isósceles | <mark style="background: #BBFABBA6;">ok</mark> |
| 2.2, 2.2, 2.2 |  | X |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  | equilátero | <mark style="background: #BBFABBA6;">ok</mark> |
| 2,2, 2,2, 2,2 |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | inválido | <mark style="background: #BBFABBA6;">ok</mark> |
| 2.9999999999999999, 3, 3 |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | isósceles | <mark style="background: #FF5582A6;">MAL</mark> (equilátero) |
| 2.0000000000000001, 2, 2 |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | isósceles | <mark style="background: #FF5582A6;">MAL</mark> (equilátero) |
| -1, 3, 4 |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | inválido | <mark style="background: #BBFABBA6;">ok</mark> |
| a, 2, 2 |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | inválido | <mark style="background: #FF5582A6;">MAL</mark> (crash) |
| ø, 3, 4 |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  | inválido | <mark style="background: #BBFABBA6;">ok</mark> |
| ., ,., ,., |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  | inválido | <mark style="background: #BBFABBA6;">ok</mark> |
| , 2, 3 |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  | inválido | <mark style="background: #BBFABBA6;">ok</mark> |
| , , |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  | inválido | <mark style="background: #BBFABBA6;">ok</mark> |
| 1, 0, 3 |  |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  | inválido | <mark style="background: #BBFABBA6;">ok</mark> |
| 2, 3, 4 |  |  |  |  |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  | escaleno | <mark style="background: #BBFABBA6;">ok</mark> |
| 1, 1, 3 |  |  |  |  |  |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  | inválido | <mark style="background: #BBFABBA6;">ok</mark> |
| 5, 1, 2 |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  | inválido | <mark style="background: #FF5582A6;">MAL</mark> (escaleno) |
| 1, 6, 2 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  | inválido | <mark style="background: #BBFABBA6;">ok</mark> |
| -33000, -33000, -33000 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |  |  |  |  |  | inválido | <mark style="background: #BBFABBA6;">ok</mark> |
| -2150000000, -2150000000, -2150000000 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |  |  |  |  | inválido | <mark style="background: #BBFABBA6;">ok</mark> |
| -10000000000000000000, -10000000000000000000, -10000000000000000000 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |  |  |  | inválido | <mark style="background: #BBFABBA6;">ok</mark> |
| 33000, 33000, 33000 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |  |  | equilátero | <mark style="background: #BBFABBA6;">ok</mark> |
| 2150000000, 2150000000, 2150000000 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |  | equilátero | <mark style="background: #BBFABBA6;">ok</mark> |
| 10000000000000000000, 10000000000000000000, 10000000000000000000 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X | equilátero | <mark style="background: #BBFABBA6;">ok</mark> |
