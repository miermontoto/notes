

# Algoritmos de planificación a corto plazo, ejercicios, parámetros
**Sea cual sea el criterio de desempate, si al final existe un empate se escoge el proceso con el menor PID.**
Estos ejercicios definen cómo de bueno es el algoritmo PCP.

![[y2t2/Sistemas (SO)/_resources/Algoritmos_de_planificación_a_corto_plazo,_ejercicios,_parámetros.resources/image.png](../_resources/Algoritmos_de_planificaci%C3%B3n_a_corto_plazo,_ejercicios,_par%C3%A1metros.resources/image.png)


# FIFO
![[Sketch 2-28-2022 2-45 PM.png](../_resources/Algoritmos_de_planificaci%C3%B3n_a_corto_plazo,_ejercicios,_par%C3%A1metros.resources/Sketch%202-28-2022%202-45%20PM.png)

# Prioridades estáticas sin requisamiento
Sin requisamiento = no se puede eliminar a un proceso de la CPU durante su ráfaga.

![[Sketch 2-28-2022 3-34 PM.png](../_resources/Algoritmos_de_planificaci%C3%B3n_a_corto_plazo,_ejercicios,_par%C3%A1metros.resources/Sketch%202-28-2022%203-34%20PM.png)

# Prioridades estáticas con requisamiento
![[Sketch 2-28-2022 3-44 PM.png](../_resources/Algoritmos_de_planificaci%C3%B3n_a_corto_plazo,_ejercicios,_par%C3%A1metros.resources/Sketch%202-28-2022%203-44%20PM.png)


# Round-Robin + FIFO
Diseñado para sistemas con tiempo compartido → existe _quantum_.

**_quantum = 3ud_**
![[Sketch 2-28-2022 4-04 PM.png](../_resources/Algoritmos_de_planificaci%C3%B3n_a_corto_plazo,_ejercicios,_par%C3%A1metros.resources/Sketch%202-28-2022%204-04%20PM.png)


# Colas multinivel SIN realimentación
![[Sketch 3-4-2022 2-05 PM.png](../_resources/Algoritmos_de_planificaci%C3%B3n_a_corto_plazo,_ejercicios,_par%C3%A1metros.resources/Sketch%203-4-2022%202-05%20PM.png)
- Cada cola va a utilizar un algoritmo diferente. Los procesos NO pueden cambiar de cola.
- **Antes de que un proceso se ejecute, hay que decidir a qué cola va a ir.**
- Cuanto más arriba esté una cola, más prioritaria con respecto a las otras es.
- Los procesos que no interactúen con el usuario irán en las colas inferiores.
- Existe requisamiento entre colas.


# Colas multinivel CON realimentación
![[Sketch 3-4-2022 2-15 PM.png](../_resources/Algoritmos_de_planificaci%C3%B3n_a_corto_plazo,_ejercicios,_par%C3%A1metros.resources/Sketch%203-4-2022%202-15%20PM.png)
A medida que se ejecutan los procesos, se observa su comportamiento y se mueve a la cola correspondiente.


### Criterio de bajadas
Frase que define cuándo un proceso baja en la cadena de colas.
Todas las colas, menos la última, tienen criterio de bajada.

**Cuando un proceso baja de cola, sus estadísticas referidas al criterio de bajada se reinician.**

Los más habituales son:
* Si un proceso ha hecho un quantum completo.
* Si un proceso ha hecho X unidades de CPU o E/S (seguidas / no seguidas).



### Ejercicio.

![[y2t2/Sistemas (SO)/_resources/Algoritmos_de_planificación_a_corto_plazo,_ejercicios,_parámetros.resources/image.1.png](../_resources/Algoritmos_de_planificaci%C3%B3n_a_corto_plazo,_ejercicios,_par%C3%A1metros.resources/image.1.png)

![[Sketch 3-4-2022 2-52 PM.png](../_resources/Algoritmos_de_planificaci%C3%B3n_a_corto_plazo,_ejercicios,_par%C3%A1metros.resources/Sketch%203-4-2022%202-52%20PM.png)![[Escáner - 2022-03-07 11_38_57.pdf](../_resources/Algoritmos_de_planificaci%C3%B3n_a_corto_plazo,_ejercicios,_par%C3%A1metros.resources/Esc%C3%A1ner%20-%202022-03-07%2011_38_57.pdf)


## Con varias CPUs
Si hay más de una CPU, hay que decidir qué hacer cuando hay dos CPU libres.
****

### **Asignación de prioridades**
* Si hay dos, se escoge una CPU prioritaria.
* Si hay más de dos, tiene que existir una lista de prioridad de CPUs.


### **Por turnos**
Por turnos, se asigna el desempate.
- Solo hay desempate cada vez que quedan CPUs libres, no constantemente.


* * *

# Parámetros estadísticos

## Parámetros generales

### Instante de llegada _$t_i$_
El instante de tiempo en el que el proceso se crea.

### Tiempo de servicio _$t_s$_
El tiempo mínimo que necesita un proceso para ejecutarse. _(es la suma de ráfagas de CPU y espera de E/S)_


### Tiempo de fin _$t_f$_
El tiempo en el que el proceso pasa a estado "finalizado".

$$t_f = t_i + t_r$$
### Tiempo de retorno _$t_r$_
El tiempo total que un proceso ha estado en el sistema.


### Tiempo de espera _$t_e$_
Tiempo total que un estado está en estado "listo". _(esperando)_
Cuanto más alto sea el tiempo de espera, peor ha tratado el algoritmo al proceso.


### Tiempo de respuesta _$t_{resp}$_
Es el lapso de tiempo entre que el proceso se crea hasta que usa la CPU por primera vez.


### Tiempo de retorno normalizado _$t_{rn}$_
Proporción de tiempo entre lo que tarda el proceso en ejecutarse y el tiempo ideal en que se debería haber ejecutado.

$$t_{rn} = t_r / t_s$$
### Tiempo de retorno normalizado medio _$t_{rn_m}$_
Permite comparar distintos algoritmos de planficación con el mismo grupo de procesos.

## Estadísticas de multiprogramación

### Ociosidad de la CPU
%CPUlibre = tlibre / ttotal

### Ocupación de la CPU
%CPUocupada = tocupado / tlibre

---

[Sistemas Operativos (PA)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2Y3MzY2U5amM4c2phZDlpYzloajRjcjNja3IzZ2MxbTZzc20yY3BwNzVnbWNjMWpjb3NnIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Mon, Feb 28, 2022, 2:00 PM - 4:00 PM
Location:AS-1
Clase Expositiva

[Sistemas Operativos (CEX)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2bGdtYW9qMTY4bzM0cGIyNmNyamVlOWs2NHBtOGNiNWNsaTY4YzMzNmtzNjRvcHBja29nIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Fri, Mar 4, 2022, 2:00 PM - 3:00 PM
Location:AS-1
Clase Expositiva

[Sistemas Operativos (PA)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzamtjb3BtNGRiMzZnbzY0cDMzNmtvNmFjcjE2c3AzYXAzNGM1aDMycGhuNzRybTRjOW5jb3JnIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Mon, Mar 7, 2022, 2:00 PM - 4:00 PM
Location:AS-1
Prácticas De Aula
