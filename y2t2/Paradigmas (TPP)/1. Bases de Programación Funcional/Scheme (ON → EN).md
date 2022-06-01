---

Created at 2022-03-11T11:53:44+01:00
Last updated at 2022-03-11T11:54:16+01:00

Tagged: #1.-Bases-de-Prg.-Func.

---

# Scheme (ON → EN)
# Semántica 

## Datos simbólicos 

Datos más genéricos que en Programación Imperativa. 

* Datos simples (**átomos**) 
* Datos simples y compuestos (**S-Expresiones**) 

## Átomos 

* Concatenación INDIVISIBLE de caracteres símbolo y alfanuméricos (excepto paréntesis y asterisco). 
* Simbólicos y numéricos. 
* **# t** para true, **#f** para false"

## S-expresiones 

* Un átomo es una S-Expresión. 
* Si x e y son S-expresiones, entonces el par (x . y) es una S-expresión 's'. 
* x: _car_ de 's', y: _cdr_ de 's' 

## Lista 

* Una secuencia de S-Expresiones que puede ser vacía, encerrada entre paréntesis, es una S-Expresión llamada lista. 
* Subconjunto de las S-Expresiones. 
* Definición recursiva: 
  * (): la lista vacía es una lista. 
  * (x . y): el par es una lista si 'y' es una lista. 
* Solo se puede obtener el primer elemento de la lista. 
* Todas las listas, excepto la lista vacía _()_, son pares. 

### _Representaciones_ 

* Árboles y grafos: '(a (e () ()) (b (c () ()) (d () ()))) 
* Expresiones algebraicas 
  * x+y ≡(+ x y) 
  * 2∗x+3∗y≡(+ (∗2 x)  (∗3 y)) 
* Funciones 
  f(x, g(y, z), h(a))≡(f x (g y z) (h a))  
  

# Funciones básicas 

* cons(x, y) ::= el par (x . y) 

Función totalmente definida sobre las S-exp. 
Inserta el elemento x al inicio de la lista y. 

* car(x) ::= el primer elemento de la S-expresión 

Función parcialmente definida sobre las S-exp. 
Devuelve el primer elemento de la lista x. 

* cdr(x) ::= el segundo elemento de la S-expresión 

Función parcialmente definida sobre las S-exp. 
Devuelve la lista x sin el primer elemento. 

* atom?(x) 
* list?(x) 
* pair?(x) 
* eq?(x,y) 

Para átomos. 

* null?(x) 
* equal?(x,y) 

Para expresiones.
