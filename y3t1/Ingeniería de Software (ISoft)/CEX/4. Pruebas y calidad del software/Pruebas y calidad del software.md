![[_resources/ISOF - 4 - Pruebas y calidad.pdf]]

---

### <mark style="background: #BBFABBA6;">Ejercicio previo</mark>
- Resultado con algún lado igual a cero (triángulo no válido)
- Resultado con algún lado negativo (triángulo no válido)
- Resultado con lados iguales (triángulo equilátero)
- Resultado con dos lados iguales (triángulo isósceles)
- Resultado con lados desiguales (triángulo escaleno)
- Resultado con lados inválidos (triángulo no válido)
- Resultado con permutaciones del último caso (triángulo no válido)

## Características de calidad
- Funcionalidad
- Fiabilidad
- Usabilidad
- Eficiencia
- Mantenibilidad
- Portabilidad

## Objetivo
El objetivo de una prueba es detectar defectos en el código no identificado hasta entonces.

### Fallos y defectos
- Un fallo es la diferencia entre el comportamiento esperado en el software y el observado
- Para corregir un fallo debe encontrarse el defecto que lo causa (depuración).
- Detectar un defecto no es una tarea trivial.

## Proceso
![[_resources/Pasted image 20221121123221.png]]ç


# Procesos de desarrollo y prueba
![[_resources/Pasted image 20221128121146.png]]

## Diseño de pruebas: técnicas y criterios
- No es factible ejercitar el software de todas las formas posibles: se debe seleccionar un conjunto razonable de casos.
- Una técnica/criterio de prueba es un procedimiento por el que se decide qué casos de prueba se deben ejecutar sobre el software.
	- Maximizar probabilidad de encontrar fallos.
	- Cumplir límites de tiempo y coste.
- Pueden diseñarse casos de prueba a partir de diferentes fuentes.
	- Especificación
	- Documentos de diseño
	- Código
	- Otros