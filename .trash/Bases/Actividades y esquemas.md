---

Created at 2022-03-03T15:42:23+01:00
Last updated at 2022-03-17T15:50:08+01:00

Tagged: #2.-Modelo-relacional

---

# Actividades y esquemas

![[./_resources/Actividades_y_esquemas.resources/Actividad1_PasoATablas.pdf]]

### Esquema 1

![[./_resources/Actividades_y_esquemas.resources/image.png]]

```
A = (@cod, ...)
C = (@cod, ...)
AC = (@codA (FK A), codC (FK C) (UNIQUE)) // equivalente a (codA (FK A) (UNIQUE), @codC (FK C))

I = (@cod, ...)
J = (@(J, codI (FK I)) // atributo multivalorado de I

B = (@(cod, codI (FK I)), D*, ...) // entidad débil de I, D es derivado
E = (@(codB, codIB) (FK B), G, H, ...)

AB = (@(codA (FK A), (codB, codIB (FK I)) (FK B))) // ambas FK son PK
ABC = (@(codC (FK C), (codAAB, codBAB, codIBAB) (FK AB)))
```

<YARLE-EN-V10-TASK>08b7cca8-c963-40c4-babf-5fbb48e8cf3d</YARLE-EN-V10-TASK>

### Esquema 2

![[./_resources/Actividades_y_esquemas.resources/image.1.png]]

```
A = (@cod, ...)
C = (@cod, ...)

AC = (@codA (FK A), @codC (FK C)) // Relación N:N

E = (@cod, ...)
ACE = (@(codE (FK E), (codAAC, codCAC) (FK AC))) // Relación binaria de una relación binaria.ç


D = (@(D, codC (FK C))) // Atributo multivalorado de C

F = (@(cod, codC (FK C), H, I) // Entidad débil de C con atributos dependientes.

J = (@cod, codC (FK C))
K = (@codJ (FK J), ...) // K es tipo de J
EK = (@codE (FK E), codK (FK K) (UNIQUE)) // Relación 1:1

// También se puede combinar EK en K
K = (@codJ (FK J), codE (UNIQUE), ...)
```


### Esquema 3

![[./_resources/Actividades_y_esquemas.resources/image.2.png]]

```
A = (@cod, codA (FK A)) // Incluye relación 1:N consigo misma.
B = (@[cod, codA (FK A)]) // Entidad débil de A
C = (@cod)

BC = (@[(codB, codAB) (FK B), codC (FK C)])

D = (@cod)

H = (@codC (FK C), I*)
J = (@[J, codCH (FK H)])

K = (@cod)

DHK = (@[codD (FK D), codK (FK K), codCH (FK H)])
BCD = (@[codD (FK D), (codBBC, codABBC, codCBC) (FK BC)], G, F)
```


### Esquema 4

![[./_resources/Actividades_y_esquemas.resources/image.3.png]]

```
H = (@cod)

F = (@cod, B, A)
E = (@cod, (codG, codGH) (FK G))
D = (@[D, codE (FK E)])

EF = (@[codE(FK E), codF (FK F)], codH (FK H))

G = (@[cod, codH (FK H)])
GG = (@[(codG1, codHG1) (FK G), (codG2, codHG2) (FK G)])

I = (@codF (FK C), J*)
```



### Esquema 5.

![[./_resources/Actividades_y_esquemas.resources/image.4.png]]

```
A = (@cod, C, D, (codG, codHG) (FK G))
AA = (@[codA1 (FK A), codA2 (FK A)])

H = (@cod)

E = (@cod)
F = (@[F, codE (FK E)])
I = (@codE (FK E), K*)

G = (@[cod, codH (FK H)])

AEJ = (@[codA (FK A), codE (FK E)], codJ (FK J))
J = (@cod)
```


### Esquema 6.

![[./_resources/Actividades_y_esquemas.resources/image.5.png]]

```
A = (@cod, D, C)
E = (@cod)
F = (@codE (FK E))
G = (@[G, codF (FK F)])
I = (@cod)
H = (@[cod, codE (FK E)], (codH, codEH) (FK H), (codIIJ, cod JIJ) (FK IJ), codJ (FK J) (UNIQUE))

I = (@cod)
J = (@cod)
AEI = (@codE (FK E), (@codA (FK A), codI (FK I)) (UNIQUE))
JJ = (@[codJ (FK J), codJ (FK J)], D*)
IJ = (@[codI (FK I), codK (FK J)])
```



### Esquema 7.

![[./_resources/Actividades_y_esquemas.resources/image.6.png]]

```
A = (@cod, E, F)
C = (@cod)
I = (@cod)
II = (@[codI1 (FK I), codI2 (FK I)], K*)
CI = (@[codI (FK I), codC (FK C)])

J = (@[cod, codI (FK I)], (codICI, codCCI) (FK CI) (UNIQUE))
B = (@cod, (codJ, codIJ) (FK J))
G = (@codB (FK B))
H = (@[H, codBG (FK G)])

ABC = (@codA (FK A), (@codC (FK C), codB (FK B)) (UNIQUE))
```


[Bases de Datos (CEX)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2MHIzZ29wcDZncmphZGI1Nm9vajZkaG43NG82NGRqMzZkaTZhZTFsNnNzajJwOW42NWhnIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Thu, Mar 3, 2022, 2:00 PM - 4:00 PM
Location:AS-1
Clase Expositiva

[Bases de Datos (PA1)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzamtjOHM2MmRqM2NvcG0yZHBwNnNwMzJjcjFjZGhqaWRiNTc0b2owYzMzNmdzajJkcjRjb3NnIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Tue, Mar 8, 2022, 3:00 PM - 4:00 PM
Location:AS-1
Prácticas De Aula

[Bases de Datos (CEX)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzamtjNHJqaWNwa2M0cWpjcGhwNjhwM2FwMW82dGhqZWNobjY4cGoyY2IyYzRxbWNkMW03NG8wIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Thu, Mar 10, 2022, 2:00 PM - 4:00 PM
Location:AS-1
Clase Expositiva

[Bases de Datos (CEX)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzamtjNWdqY2MxZzZzcjNhb3BnY2dvMzJwOWk2MHJqYWQxajYxZ200ZDMzY2xoNjhjajNjOHJnIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Thu, Mar 17, 2022, 2:00 PM - 4:00 PM
Location:AS-1
Clase Expositiva

[Bases de Datos (CEX)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzamtjZ28zaW9oZ2NrcWo0Y3BwNnNvajhkMW42cGhtNm85cDZkaTY0cDFpNzRyamFvcGpjcGkwIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Thu, Mar 24, 2022, 2:00 PM - 4:00 PM
Location:AS-1
Clase Expositiva





