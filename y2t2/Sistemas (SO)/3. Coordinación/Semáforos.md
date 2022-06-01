---

Created at 2022-03-14T15:38:53+01:00
Last updated at 2022-03-15T16:44:02+01:00

Tagged: #3.-Coordinación

---

# Semáforos
Es la herramienta de más bajo nivel a partir de las instrucciones especiales, y funcionan gracias a ellas.


# Implementación de semáforos

Clase "Semáforo".


## Estructura de datos

```
struct sem {
    int cont;
    ColaPCB cola;
}
```


## Operaciones

* Las siguientes operaciones deben de ser ATÓMICAS.
* Si un proceso está haciendo una operación sobre un semáforo, NIGÚN otro proceso puede estar haciendo dicha operación en ese semáforo.
* En el momento inicial del programa, el semáforo debería inicializarse a VERDE (1).

```

/**
* Se ejecuta al inicializar el semáforo.
* Es NECESARIO inicializar el semáforo.
*/
void init(sem s, int valor) {
    s.cont = valor; // 1!!!
    cola = null;
}

/**
* Operación bloqueante, es decir, que el proceso es susceptible de que se duerma.
* Si está a 1, pasa a ejecutarse. Si no, se introduce en una cola.
*/
void P(sem s) {
    s.cont--;
    if(s.cont < 0) {
        insert(proceso, s.cola);
        bloquear(proceso);
    }
}

/**
* Operación no bloqueante.
* Si existe una cola, se ejecuta el siguiente en orden.
*/
void V(sem s) {
    s.cont++;
    if(s.cont <= 0) {
        otroproc = extrae(s.cola);
        desbloquear(otroproc);
    }
}
```


## Semáforos de cuenta / Semáforos generales

Son aquellos semáforos que pueden tomar cualquier valor entero.

Al permitir que el contador pueda ser cualquier valor, se pueden inicializar a más de 1, por lo que se deja entrar a varios procesos simultáneamente a las secciones críticas controladas por el semáforo general.


## Semáforos binarios

El contador solo puede tomar los valores 0, 1.
Solo permiten un proceso.


# Solución a problemas de sincronización

Utilizando V, P, se pueden sincronizar dos procesos.


## Ejercicios semáforos

```
init(s1, 1);

// ------------------- IF
P(s1);
bool check = glob1 == 3;
V(s1);

if(check) {
    ...
} else {
    ...
}

/* también */

P(s1);
if(glob1 == 3) {
    V(s1);
    ...
} else {
    V(s1);
    ...
}

// -*-*-*-*-*-*-*-*-*-* WHILE
P(s1);
while(glob1 < 3) {
    V(s1);
    ...
    P(s1);
}
V(s1);

// *-*-*-*-*-*-*-*-*-*-*- RET
P(s1);
val i = <expresión>;
V(s1);
ret i;

```


[Sistemas Operativos (CEX)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2NHJtMnBobmNncmoycDlwY2tybTRkOW03MG8zOGMxbDYwcW00Y3BsY29zM2dvaGc3MHEwIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Mon, Mar 14, 2022, 2:00 PM - 4:00 PM
Location:AS-1
Prácticas De Aula

[Sistemas Operativos (CEX)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2c3I2Y2QzNTZrcTNncDMxYzRyajBwOWxjZ28zY2QzNGNvb21jZTMzY29vMzJlMWs2NWdnIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Tue, Mar 15, 2022, 4:00 PM - 5:00 PM
Location:AS-1
Clase Expositiva


