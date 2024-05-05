![[_resources/Problema_Errores_CBC_y_OFB.pdf]]

---

# CBC
![[_resources/Problemas de propagación de errores en Cifradores Simétricos 2023-10-19 16.06.29.excalidraw](_resources/Problemas%20de%20propagaci%C3%B3n%20de%20errores%20en%20Cifradores%20Sim%C3%A9tricos%202023-10-19%2016.06.29.excalidraw.md)

# OFB
a) Se constriñe al bloque en el que se está trabajando.
b) Resultaría en una serie totalmente distinta de bloques descifrados.


![[_resources/Problema_Relleno_Cifradores_Simetricos.pdf]]

# Problema: Rellenar el mensaje final
Respuesta: no utilizar ningún tipo de cabezera ni metadato para indicar si el mensaje está completo o no.

# Problema: El modo CBC-Pad
Respuesta: como el software siempre va a coger el último byte para leer el relleno, no puede encontrar un 0, el mínimo debe de ser 1 (AES utiliza 16)

# Problema: El relleno para AES en .NET
Respuesta: es imposible discernir entre el final del mensaje y el comienzo del padding si el mensaje puede terminar en cero.

---

![[_resources/Ejercicio CadenaCerts.pdf]]

![[_resources/Problemas de propagación de errores en Cifradores Simétricos 2023-10-19 16.27.06.excalidraw](_resources/Problemas%20de%20propagaci%C3%B3n%20de%20errores%20en%20Cifradores%20Sim%C3%A9tricos%202023-10-19%2016.27.06.excalidraw.md)


## Otro problema del esquema de teoría de resumen y cifrado
![[_resources/Problemas de propagación de errores en Cifradores Simétricos 2023-10-19 16.41.12.excalidraw](_resources/Problemas%20de%20propagaci%C3%B3n%20de%20errores%20en%20Cifradores%20Sim%C3%A9tricos%202023-10-19%2016.41.12.excalidraw.md)