![[_resources/T6 Busqueda local L6 Local search.pdf]]

---

## Concepto
En muchos problemas (problemas de configuración: n-reinas, diseño de circuitos integrados, organización de factorías...), el camino al objetivo es irrelevante.
Los algiritmos de búsqudad locales operan utilizando un solo nodo y tratan de mejorarlo de manera iterativa.
La idea es empezar con una estimación inicial e ir iterando.

![[_resources/Pasted image 20230321134013.png]]

<mark style="background: #BBFABBA6;">Ventajas</mark>
- Solo usa un nodo.
- Encuentra soluciones razonables.

### Hill-climbing
La búsqueda más básica. Se busca el mayor crecimiento (mayor derivada).
Termina cuando encuentra un pico.
Es *greedy*.

Se mejora con **Random-restart hill climbing**.
![[_resources/Pasted image 20230321135307.png]]

