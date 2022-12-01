## Ejercicio 12
$$
	MTTF_{RAID}={MTTF_{disco}^2\over N(N+1)MTTR}
$$
$$
	N^2+N={MTTF_{disco}^2\over MTTF_{RAID}\times MTTR}
$$

$$
	N^2+N-{MTTF_{disco}^2\over MTTF_{RAID}\times MTTR} = 0
$$

***¿Cuál es la probabilidad de que se registre algún tipo de incidencia que afecte al
funcionamiento del centro de datos durante un periodo de trabajo ininterrumpido de una
semana? Para obtenerlo es necesario completar previamente el archivo cd1.will.***
Están pidiendo la probabilidad de que el sistema falle, es decir, la infiabilidad ($Infiabilidad=1-fiabilidad$).

***¿Cuál es la disponibilidad del centro de datos?***
Puesto que es reparable, la disponibilidad es estacionaria independientemente del tiempo.

***¿Qué elemento es el que más influye en la fiabilidad del centro de datos?***
Se calcula la fiabilidad no reparable o la fiabilidad equivalente reparable de todos los componentes.

***Virtualización de los sistemas 2 y 3***
Añadir tantos sistemas operativos como se eliminen y añadir un sistema operativo de virtualización, normalmente con mucho MTTF.<mark style="background: #ADCCFFA6;"></mark>