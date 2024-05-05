

# Patrones de comportamiento
Encapsulan "lo que varía". Cuando un comportamiento varía con frecuencia se encapsula con un objeto.
¿Cómo interactúan los objetos entre sí?


# Command

## Propósito
* Se necesita invocar operaciones pero...
  * El objeto _(emisor)_ que crea la petición no es el que lo ejecuta.
  * El emisor pasa la solucitud a otro objeto _(receptor)_

![[y2t2/Paradigmas (TPP)/_resources/Patrones_de_comportamiento.resources/image.png]]

```Java
public class static void main() {
    Receptor x = new Receptor();
    Receptor y = new Receptor();

    // x.hazEsto();
    ICommand a1 = new Orden1(x);
    x.ejecutar();

    // y.hazAquello();
    ICommand a2 = new Orden2(y);
    y.ejecutar();

    // ejecutar varias acciones simultáneas
    List<ICommand> plan = new LinkedList<>();
    plan.add(a1);
    plan.add(a2);
    for(ICommand a : plan) a.ejecutar();
}
```


### UML
![[y2t2/Paradigmas (TPP)/_resources/Patrones_de_comportamiento.resources/image.1.png|1050]]


* * *

# Observer
Define una dependencia de 1:N entre objetos. Al cambiar un objeto se notifica a todos los objetos que dependen de él automáticamente (_sus_ **_observadores_**)


## Estructura

![[y2t2/Paradigmas (TPP)/_resources/Patrones_de_comportamiento.resources/image.2.png]]


## Consecuencias
* <mark style="background: #BBFABBA6;">✅ Observer permite modificar los sujetos y sus observadores de forma independiente.</mark>
  * Se puede añadir observadores sin modificar el sujeto.
  * Se puede reutilizar un mismo observador con otros sujetos.
* <mark style="background: #BBFABBA6;">✅ Comunicación por difusión.</mark>
  * Al sujeto le da igual cuántos observadores tiene a la hora de hacer cambios.
* <mark style="background: #FF5582A6;">❌ Actualizaciones inesperadas.</mark>
  * Los observadores pueden modificar al sujeto.
* <mark style="background: #FF5582A6;">❌ Sujetos complejos complican identificar "qué" cambió en ellos.</mark>
  * El protocolo solo indica que cambió el sujeto, pero no el qué.
