![[_resources/T6 Busqueda local L6 Local search.pdf]]

---

# Algoritmos de búsqueda locales
En muchos problemas (problemas de configuración: n-reinas, diseño de circuitos integrados, organización de factorías...), el camino al objetivo es irrelevante.
Los algoritmos de búsqueda locales operan utilizando un solo nodo y tratan de mejorarlo de manera iterativa.
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

# Algoritmos genéticos
Tienen múltiples parámetros para determinar cómo funcionan y son algoritmos que buscan optimizar una función.
- Se necesita probabilidad de cruce, tamaño de población, probabilidad de mutación
Utilizan *cromosomas*.

## Terminología
- Función objetivo → función de adaptación (*fitness*)
	- Función a optimizar.
- *Esquema de codificación*: manera de transcribir un objeto en una cadena de símbolos (transcripción genética)
	- Se necesita saber cómo transformar de objeto a cadena y de cadena a objeto.
- *Genotipo* y *fenotipo*: descripción genética como cadena de símbolos, valor de la función que se quiere maximizar.
- *Elitismo*: los mejores individuos de la población se conserva en la siguiente iteración.
- <u>Operaciones:</u> selección, crossover, mutación, remplazo
- *Roulette wheel* 

## Proceso
1. Decidir cuántos individuos hay en la población
2. Decidir los mejores individuos para cruzar
3. Decidir hasta qué punto se va a cruzar
4. Decidir sobre las mutaciones


# Algoritmos de estimación de distribuciones (EDA)
Son muy similares a los algoritmos genéticos, pero se diferencian en la manera de iterar poblaciones.

Para conseguir una nueva generación:
- Estimar la distribución de los mejores individuos
- Generar una muestra de la generación aprendida

Se utiliza para optimización discreta.

