![[_resources/ISOF - 2 - Metrica - ASI - 2.pdf]]

---

# ASI 3, 4, 5

## ASI 3: Identificación de subsistemas de análisis
Descomponer el sistema en subsistemas para facilitar el análisis.

## ASI 4: Análisis de los casos de uso
Identificar las clases cuyos objetos se necesitan para realizar un caso de uso y describir su comportamiento mediante interacción de dichos objetos.
*Se hace para cada uno de los casos de uso.*

### Modelo de dominio
- Ojo a GDPR: cómo eliminar datos.
- Revisar cardinalidades. *"algún cero"*
- Herencias: muy pocas, siempre al final de la creación del modelo de dominio
- ¿Hay casos de uso para todas las clases?
- Acompañar siempre el modelo con descripción detallada de los atributos: *diccionario de datos*.

### Modelo de comportamiento: diagramas de transición de estados (DTEs)
Grafo de estados. Cada nodo debe de tener al menos un caso de uso. Borrados y paso a históricos. Detallar transiciones.

## ASI 5: Análisis de clases
Describir cada una de las clases.

## Técnicas
- Diagramas de paquetes
- Diagramas de interacción
- Diagramas de clases

# ASI 8: Definición de Interfaces de Usuario

## Prototipos (pantallas)
- Definir criterios generales
- Para cada prototipo:
	- Se parte de la descripción de los casos de uso.
	- Atención a los diálogos muy usados e importantes.
	- Descripción del prototipo + <mark style="background: #FF5582A6;">incluir datos facilita la comprensión</mark>.


# Resumen
- **Tres modelos**
	- Modelo funcional → *casos de uso*
	- Modelo dominio → *bases de datos*
	- Modelo de interacción con usuario → *prototipos de pantallas*
- **Todos los modelos deben representar al sistema.**
- **Análisis final**
	- ¿Es completa la especificación?
	- ¿Son consistentes los modelos?
