

# Patrones creacionales
Crear un objeto es una toma de decisión.
Separar los procesos de creación de objeto y de uso de un objeto.

# Singleton
Garantiza que una clase tenga una sola instancia y proporciona un punto global de acceso a ella.


## Aplicabilidad
* Se necesita exactamente una sola instancia de una clase.
* Es deseable una inicialización perezosa de la instancia.
* Necesario un acceso global a la instancia.


![[y2t2/Paradigmas (TPP)/_resources/Patrones_creacionales.resources/image.png|900]]


## Consecuencias
* Acceso controlado a la única instancia por la clase.
* Evita inundar el código con variables globales.
* Permite el refinamiento mediante herencia.
* Permite un número variable de instancias.
* Son más flexibles que usar directamente la clase con métodos.

* * *

# Factory Method

## Propósito y aplicabilidad
* Define una interfaz para crear un objeto pero permite a sus subclases decidir qué clase instanciar.
* Permite a una clase delegar la instanciación en sus subclases.
* Define un constructor virtual.


![[Sketch 2-18-2022 5-59 PM.png]]


## Factory Method Parametrizado

![[y2t2/Paradigmas (TPP)/_resources/Patrones_creacionales.resources/image.1.png|900]]


## Consecuencias
* Permite variar la representación interna de un producto.
* Aisla el código de la construcción y representación.
* Proporciona un control más fino sobre el proceso de construcción.
* Pueden devolver la misma instancia varias veces (prototype)
* (Parametrizado) el método del producto abstracto puede devolver objetos de diferentes subclases.

* * *

# Abstract Factory
Proporciona una interfaz para crear familias de objetos, sin especificar clases concretas.


## Aplicabilidad
* Responde a la necesidad de diferentes tipos de objetos que colaboren.
* Configura un sistema seleccionando una familia de productos, entre varias opciones.
* Separa la creación, composición y representación de los productos de cómo se utilizan.
* Solo se quiere revelar las interfaces, no las implementaciones.


![[Sketch 2-22-2022 2-19 PM.png]]

## Consecuencias
* Aisla las clases concretas del cliente que las usa.
* Facilita el intercambio de familias de productos.
* Promueve la consistencia entre productos: familias.
* Es difícil dar cabida a nuevos tipos de productos.
