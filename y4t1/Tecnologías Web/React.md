> [!info] Definición
> Librería de desarrollo web orientado a componentes. Fue desarrollado por Facebook en 2013 para facilitar el desarrollo de single-page webapps (SPA)

Se suele utilizar junto con:
- Next.js
- Expo
- Remix
- Gatsby

## Componentes
- Las interfaces de React se forman combinando componentes.
- Los componentes son piezas que integran lógica y apariencia.
- Para desarrollar los componentes hay que declarar una función que devuelva lenguaje de marcado.
- Por defecto, y de forma habitual, las aplicaciones de React están configuradas para que ese lenguaje de marcado que se devuelve sea JSX.
- JSX es un lenguaje de marcado similar a HTML, que de hecho utiliza las mismas etiquetas pero permite incluir código JS.
- Una vez creado un componente, ese estará disponible para utilziar en JSX como si fuese una etiqueta más.

## Hooks
> [!info] Definción
> Característica de React que permite definir de forma fácil con una llamada a una función elementos para los que haría falta crear clases personalizadas.

El Hook más utilizado es el Hook de estado, que permite definir atributos sin crear clases.
- Se invoca llamando a la función `useState` y pasándole el valor inicial.
- `useState` devuelve dos funciones: el getter y el setter del atributo.
- Internamente, gestiona el atributo para que, cuando se modifique su valor, se rendericen los componentes que sean necesarios para mostrar su valor.

Otros hooks muy utilizados son el Hook de efecto para desencadenar eventos secundarios, o el Hook de contexto para acceder a variables de contexto como el tema o la localización.