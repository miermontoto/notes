

# Recursión (ON → EN)
La recursión como patrón de resolución. 
Análisis de casos: BASE y RECURRENCIA = Hipótesis + Tesis 

* Soluciones más compactas → más legibles
* Sin necesidad de variables → menos posibilidad de errores
* Curva de aprendizaje
* Limitaciones de memoria de pila

## ¿Cuándo utilizarla?

* No hay otra opción más simple/eficiente. 
  * ¿Composición funcional y/o F.O.S? 
* Problemas de naturaleza recursiva. 

# Funciones recursivas sobre Listas

Definición recurrente del dominio: 

* Base: el átomo '()' es una lista. 
* Recurrencia: Si S es una S-exp y L una lista, cons(S, L) es una nueva lista L2 tal que car(L2) = S y cdr(L2) = L 

Definición recurrente de una función f(L): 

* Base: conocido f(L), donde L es (). 
* Recurrencia: L es una lista no vacía: 
  * Hipótesis 
  * Tesis 

### Definición de longitud de una Lista:

* Base:  
  length( () ) = 0 

* Recurrencia: 
  * Hipótesis: 
    conocido length(cdr(x)) 

  * Tésis: 
    length(x) = 1 + length(cdr(x)) 


### Definición de member():

* Base: 
  member(x, ()) = #f 

* Recurrencia: 
  * Hipótesis 
    member(x, cdr(y)) es conocido 

  * Tesis 
    y si car(y) = x, si no member(x,cdr(y)) 


### Definición de reverse()

* Base: 
  reverse( () ) = () 

* Recurrencia: 
  * Hipótesis: 
    reverse(cdr(x)) es conocida 

  * Tesis: 
    reverse(x) = append(reverse(cdr(x), car(x)) 


# Funciones recursivas sobre S-Expresiones

Definición recurrente del dominio 

* Base: Un átomo es una S-exp. 
* Recurrencia: Si s1 y s2 son S-exp, cons(s1, s2) es una nueva S-exp 's' tal que 
  car(s) = s1 
  cdr(s) = s2 


Definición recurrente de una función f(s) 

* Base: conocido f(s), donde s es un átomo. 
* Recurrencia: s es S-exp no atómica 
  * Hipótesis: conocido f(car(s)) y f(cdr(s)) 
  * Tesis 

### Definición de equal()

* Base 
  if(atom? x ^ atom? y) (eq? x y) ( 
  if(atom? x o atom? y) #f) 

* Recurrencia 
  * Hipótesis: conocido equal? (car x) (car y) y equal? (cdr x) (cdr y) 
  * Tesis… 

### Definición de palíndromo()

(equal? (reverse x) x)
