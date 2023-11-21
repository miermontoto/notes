

# Soluciones hardware a la exclusión mutua
# Deshabilitación de instrucciones

Mala solución, solo válida cuando hay UNA CPU y un solo núcleo. Además, el proceso tendría control total del procesador, por lo que NADIE podría habilitar código.


# Instrucciones máquina especiales

Las soluciones por software funcionan gracias a estas instrucciones.

La concurrencia funciona porque solo un núcleo puede acceder a una posición de memoria.

Una operación atómica es una operación ininterrumpible que siempre se ejecuta del todo.


## Protocolo entrada

Se utilizan instrucciones máquina INDIVISIBLES (atómicas), Test&Set, con lo que se comprueba el estado de cada celda de memoria y, de no estar ocupada, se comienza a utilizar.
Si se utiliza espera activa, se pregunta constantemente si una posición de memoria está libre hasta que lo esté. Esto utiliza mucha CPU y es ineficiente.

Se necesita una posición de memoria donde se almacene el semáforo **_por cada_** recurso global que genere problemas.



[Sistemas Operativos (CEX)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2NHJtMnBobmNncmoycDlwY2tybTRkOW03MG8zOGMxbDYwcW00Y3BsY29zM2dvaGc3MHEwIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Mon, Mar 14, 2022, 2:00 PM - 4:00 PM
Location:AS-1
Prácticas De Aula
