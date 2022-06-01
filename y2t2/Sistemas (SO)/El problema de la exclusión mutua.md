---

Created at 2022-03-14T14:18:32+01:00
Last updated at 2022-03-14T15:05:51+01:00

Tagged: #3.-Coordinación

---

# El problema de la exclusión mutua
# Introducción

Decir que se garantiza acceso exclusivo a los recursos <=> Exclusión mutua de dichos recursos.
Toda herramienta que consigue la exclusión mutua sigue unas pautas. Es lo que más entra en el examen.


# Secciones críticas del código

1. Resolver el programa sin tener en cuenta los problemas de la concurrencia.
2. **Detectar los puntos del programa que sean conflictivos**
  * Cuando haya varias líneas conflictivas seguidas que accedan al mismo recurso, se considera como UNA sola sección crítica.
  * Se separan las secciones críticas dependiendo del recurso al que accedan.
3. Añadir un código a TODAS las secciones críticas.
  * La sección de entrada antes de la sección crítica.
  * La sección de salida después de la sección crítica.
  * Se evita el acceso de más de un proceso a cada recurso global.


El hardware debe siempre proporcionar algún mecanismo de exclusión.



[Sistemas Operativos (CEX)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2NHJtMnBobmNncmoycDlwY2tybTRkOW03MG8zOGMxbDYwcW00Y3BsY29zM2dvaGc3MHEwIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Mon, Mar 14, 2022, 2:00 PM - 4:00 PM
Location:AS-1
Prácticas De Aula


