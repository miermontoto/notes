

# Bases de Programación Funcional (ON→EN)

# Características generales
* Es programación declarativa. Se definen funciones y se utiliza lenguaje matemático. 
* Se centra en la _Evaluación._ 
* No presenta asignaciones. 
* Las variables son constantes con valor aún no fijado. 
* Funciones fácilmente paralelizables. 

# Conceptos fundamentales
* **Datos simbólicos**
  * Gran flexibilidad 
  * Listas y átomos 
  * _List Processing_ 
* **Composición funcional**
  * Función como principal bloque constructivo. 
  * Definición por composición de funciones. 
  * Sin asignaciones. 
* **Recursión**
* **Funciones de Orden Superior**
  * Funciones como argumento y resultado de otras funciones. 
  * Modificar y parametrizar tanto datos como código. 

# Lenguajes funcionales
* LISP (List Processing) 
  * Primer lenguaje funcional. 
  * Lenguaje híbrido (Funcional / imperativo) 
  * Nuevo estilo de programación 
* Scheme 
  * Derivado de LISP. 
  * Características híbridas -> se centra en las funcionales. 
  * Mucho más simple. 
  * Fácilmente implementable / empotrable / ampliable. 
* Lenguajes funcionales puros (ej. _Haskell_) 
  * No presentan características imperativas ni efectos laterales. 

# Funciones

Una regla de correspondencia que asocia a cada miembro de un dominio dado un único miembro en una imagen dada. 

## Tipos de función
* **Parcial** sobre su dominio, si hay al menos un valor en su dominio para el cual el valor de la imagen correspondiente está indefinido. 
* **Total** sobre su dominio, si está definida para todo él. 
* **Estricta**, si la imagen de un valor indefinido del dominio es indefinido. 

## Tipos de evaluación
* **Perezosa,** si se evalúa primero la función y posteriormente se evalúan los valores necesarios. 
* **Agresiva / Ansiosa,** si primero se evalúan todos los valores y por último la función. 

## Representación

Construcción por composición funcional. 
Solo una sentencia. 

Una expresión puede contener: 

* Nombres de otras funciones. 
* La propia función actual. 
* Expresiones condicionales. 

# Programas

**Característica esencial:** la Transparencia Referencial. 

* El valor de una función está determinado únicamente por el valor de sus argumentos. 
* Toda expresión en un lenguaje funcional puro obedece este principio. 
* Modularidad: cualquier función puede reemplazarse por otras que retornen el mismo conjunto de valores.
* Las funciones pueden tratarse como otro objeto del lenguaje.
* La evaluación de una función supone SIEMPRE la generación de objetos nuevos.
* Mayor tiempo de ejecución.
