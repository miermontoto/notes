

# Evolución histórica (ON → EN)
## Índice

1. **Sin sistema operativo.** 

No hay SO. No hay usuarios. 

2. **Procesamiento por lotes (monoprogramación).** 

Creación de un monitor. No hay SO. Usuarios programadores. 

3. **Sistemas multiprogramados.** 

Hay SOs y usuarios. 
Maximiza uso de CPU. 

4. **Sistemas de tiempo compartido.** 

Minimiza tiempo de respuesta. 
Construye sobre los sistemas multiprogramados. 

5. **Sistemas operativos modernos.** 

Integrados con la red. 
Dispositivos inteligentes. 
Soportan varias CPUs, varios hilos, varios usuarios simultáneos. 
Metodologías avanzadas (POOs) 

## Sin sistema operativo

* No hay usuarios, solo un operador que sabe manejar el ordenador. 
* Hay un operador que interactúa con el ordenador desde una consola, formada por conmutadores, e/s… 
* Los programas se escriben en código máquina. 
* Nivel de abstracción mínimo. 

## Procesamiento por lotes

* Secuenciación automática de programas (**monitor**) 
  * Antepasado de los sistemas operativos. 
  * Gran parte del programa está siempre en memoria (**programa residente**). 
* Ahora hay un operador y varios usuarios. 
  * Los usuarios no saben manejar la máquina, solo programar. 
  * Se programa en FORTRAN, se graba en una tarjeta perforada y se le da al operador. 
* El monitor ejecuta en serie, y de uno en uno, los trabajos. 
  * El trabajo se coloca en la zona del programa de usuario. 
  * El monitor cede todo el control al programa. 
  * Al terminar, el monitor vuelve a tener el control. 
    * Esto genera un problema de seguridad grave. 
* El lector de tarjetas perforadas es MUY lento. 
* Las cintas magnéticas de salida son MUY lentas. 
* **Los dispositivos son MUY lentos comparados con las CPUs.** 
  * Como  un programa no puede cargar en memoria hasta que no termina el  anterior, se consume más tiempo leyendo y cargando que ejecutando. 
  * Hay tiempos de espera sin usar el ordenador, simplemente cargando y grabando. 

## Sistemas multiprogramados

Esta técnica se sigue utilizando hoy en día. 

* Aparece multiprogramación y los primeros sistemas operativos. 
* En un momento dado un programa está usando la CPU o bien realizando una E/S. (todo lo que no sea CPU y RAM). 
* Los tiempos de E/S son muchos mayores que los tiempos de CPU. (_CPU ociosa_) 

Esta ineficiencia es superable (pero el problema persiste): **se ejecutan varios programas simultáneamente**. 
Esto complica considerablemente las cosas, en parte debido a la gestión de memoria. 
Esta técnica reduce el tiempo de CPU inactiva, NO para incluir varios programas en memoria. 
Cuantos más programas se carguen en memoria, menos tiempo va a estar la CPU inactiva y mejor va a ser el rendimiento. 

### Defectos

* Un programa muy intensivo en CPU va a monopolizar la CPU, con lo que otras tareas pueden tardar más en ejecutarse. 

Sistemas de tiempo compartido
Tiene como objetivo reducir el tiempo de respuesta. 

El tiempo de respuesta es el tiempo que tarda un programa desde que se carga hasta que se use la CPU. 
Esto solventa los defectos de los sistemas multiprogramados, pese a que sigue utilizándolo como base de funcionamiento. 

El SO limita el uso continuado de un programa, de modo que se reduce el tiempo de respuesta de los programas que estén cargados. 

La unidad de tiempo a la que está limitado un proceso es un _cuanto_. 

## Sistemas operativos modernos

Incorporan nuevas técnicas y elementos de diseño. 

### Sistemas operativos en tiempo real

* Extremizan el tiempo compartido. 
* Algunos procesos pueden tener tiempo de respuesta cercano a cero. 
* Sistemas de control, donde es importante el tiempo de respuesta. 

### Multiprocesamiento simétrico & Multihilo

Se gestionan varias CPUs. 
Depende del software que utilice todos los núcleos de la CPU (tanto OS como aplicaciones). 

### Sistemas operativos distribuidos

Permite distribuir el procesamiento de un programa, de modo que se ejecuten en varios equipos. 

### Diseño orientado a objetos (implementación)

Se organiza el código del sistema operativo para POO. 

Casi omnipresentes en todo tipo de dispositivos. (sistemas empotrados, coches, móviles, consolas…) 
Un dispositivo es inteligente si tiene un sistema operativo debajo.
