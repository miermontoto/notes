---

Created at 2022-02-22T15:00:55+01:00
Last updated at 2022-03-22T11:50:55+01:00

Tagged: #3.-Patrones-de-Diseño

---

# Patrones estructurales
# Adapter

## Esquemas [Herencia | Composición]

![[Sketch 2-22-2022 3-19 PM.png]]![[Sketch 2-22-2022 3-26 PM.png]]

## Definiciones y consecuencias

### De clases (por herencia)

* Un Adapter solo sirve para adaptar una clase adaptable concreta, no todas las subclases de Adaptable.
* Adaptador, como subclase de Adaptable, puede redefinir parte de la clase heredada.
* Introduce un solo objeto, no necesita ninguna referencia a un objeto por composición.

![[y2t2/Paradigmas (TPP)/_resources/Patrones_estructurales.resources/image.2.png]]


### De objetos (por composición)

* Un mismo Adaptador puede funcionar con varios Adaptables.
* Adaptador puede añadir funcionalidad a todos los adaptables, y oculta el objeto adaptado.
* Introduce un objeto aparte del Adaptable.


![[y2t2/Paradigmas (TPP)/_resources/Patrones_estructurales.resources/image.3.png]]


* * *

# Facade

Proporciona una interfaz unificada a un conjunto de interfaces en un subsistema. Es una intrefaz de alto nivel que facilita el uso del subsistema.
Puede haber facades dentro del subsistema que a su vez manejen subsistemas dentro.
![[y2t2/Paradigmas (TPP)/_resources/Patrones_estructurales.resources/image.png]]


* * *

# Composite

Compone objetos en estructuras de árbol para representar jerarquías parte-todo. Permite que los clientes traten de manera uniforme a los objetos individuales y a los compuestos.
![[y2t2/Paradigmas (TPP)/_resources/Patrones_estructurales.resources/image.1.png]]![[y2t2/Paradigmas (TPP)/_resources/Patrones_estructurales.resources/image.4.png]]

## Consecuencias

* Define jerarquías de clases formadas por objetos primitivos y compuestos.
* Simplifica el cliente.
* Facilita añadir nuevos tipos de componentes.
* Riesgo de excesiva generalidad en el diseño.



