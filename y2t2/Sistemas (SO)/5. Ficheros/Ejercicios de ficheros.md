---

Created at 2022-05-09T13:50:38+02:00
Last updated at 2022-05-26T00:13:17+02:00

Tagged: #5.-Ficheros

---

# Ejercicios de ficheros

![[Ejercicios de ficheros.pdf]]

## Tres tipos de problemas

1. La parte de teoría, implementación de ficheros:
  * Lista enlazada
  * Lista enlazada con tabla
  * Asignación indexada
2. Calcular el tamaño máximo de un fichero
  * Asignación indexada
3. Explicar todo lo que hace el operativo desde que se abre un fichero hasta que se accede a la información.
  * Lista enlazada
  * Lista enlazada con tabla
  * Asignación indexada

### Ejercicio 3, lista enlazada.

![[y2t2/Sistemas (SO)/_resources/Ejercicios_de_ficheros.resources/image.png]]![[Sketch 5-9-2022 2-29 PM.png]]
**PROCESO PARA LEER LA INFORMACIÓN REQUERIDA:**

1. Calcular el bloque a leer.
2. Leer el BDF y obtener el primer bloque (101).
3. Leer el bloque 101 y obtener el siguiente (125).
4. Leer el bloque 125 y obtener el siguiente (102).
5. Leer el bloque 102 y obtener el siguiente, que es el que interesa (103).
6. Leer el byte nº 1071 dentro del bloque 103.



### Ejercicio 2, lista enlazada por tabla.

![[y2t2/Sistemas (SO)/_resources/Ejercicios_de_ficheros.resources/image.1.png]]![[Sketch 5-9-2022 2-41 PM.png]]
**PROCESO PARA LEER LA INFORMACIÓN REQUERIDA**

1. Calcular el bloque y desplazamiento dentro de él que se quiere acceder (arriba).
2. Acceder al BDF del fichero y obtener el primer bloque.
3. Acceder a la posición 101 en la tabla y obtener el siguiente bloque (102).
4. Acceder a la posición 102 en la tabla y obtener el siguiente bloque (103).
5. Acceder a la posición 103 en la tabla y obtener el siguiente bloque (104).
6. Leer el bloque 104 y acceder a la posición 842.



### Ejercicio 1, asignación indexada.

![[y2t2/Sistemas (SO)/_resources/Ejercicios_de_ficheros.resources/image.2.png]]

* 7 entradas directas
* 1 indirecta doble
* 2 indirectas triples


**¿Cuántos números de bloque puede almacenar un bloque?**
8192 / 6 = 1365 números de bloques

**Total de bloques**
7 + 1365² + 2*1365³ = 5088467482 bloques

**Total de tamaño**
5088467482 * 8192 bytes = 4,168472561×10¹³ bytes


### Ejercicio 4.

![[y2t2/Sistemas (SO)/_resources/Ejercicios_de_ficheros.resources/image.3.png]]
**En cada paso:** Si no lo encuentra, se acaba el proceso y error de ruta no válida.

1. Obtener el BDF del directorio raíz desde la RAM.
2. Leer la información del directorio raíz y busca en sus bloques de datos el nombre "home".
3. Cargar temporalmente el BDF de /home y acceder a sus datos.
4. Leer la información del directorio home y buscar en sus bloques de datos el nombre "usuario1".
5. Cargar temporalmente el BDF de /home/usuario1 y acceder a sus datos.
6. Leer la información del directorio usuario1 y buscar en sus bloques de datos el nombre "[practica.cc](http://practica.cc)".
7. Una vez obtenido el número de BDF del fichero que se quiere abrir y se carga en la tabla de BDFs en RAM (si no estuviera ya el contador, 1; si ya lo está, sumar 1)
8. Crear una entrada en la tabla de ficheros abiertos del sistema. Nº compartidos a -1, puntero de lectura a 0.
9. Crear una entrada nueva en la tabla de descriptores del proceso y retornar dicha entrada.



### Ejercicio random.

![[y2t2/Sistemas (SO)/_resources/Ejercicios_de_ficheros.resources/image.4.png]]![[Sketch 5-22-2022 6-21 PM.png]]
**En cada paso:** si no se encuentra, se acaba el proceso y error de ruta no válida.

1. Calcular el bloque y su desplazamiento a través de la posición que se quiere acceder.
2. Acceder al BDF del fichero y obtener el primer bloque (32).
3. Acceder a la posicion 32 en la tabla y obtener el siguiente bloque (18).
4. Acceder a la posición 18 en la tabla y obtener el siguiente bloque (17).
5. Acceder a la posición 17 en la tabla y obtener el siguiente bloque (5).
6. Acceder a la posición 5 en la tabla y obtener el siguiente bloque (20).
7. Acceder a la posición 20 en la tabla y obtener el bloque deseado (25).
8. Abrir el bloque 25 y leer la posición 149.



### Ejercicio 5, corrupción A.

![[y2t2/Sistemas (SO)/_resources/Ejercicios_de_ficheros.resources/image.5.png]]
**Nº bloq. dentro de un bloque:** 4KiB / 4 bytes = 2¹⁰
**Total bloques:** 5 + 2*2¹⁰ + 2²⁰ = 1050629
**Total tamaño:** 1050629 * 4*2¹⁰ = 4303376384 bytes
