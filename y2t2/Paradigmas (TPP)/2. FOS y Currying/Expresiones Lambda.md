---

Created at 2022-02-07T16:10:05+01:00
Last updated at 2022-02-07T19:15:11+01:00

Tagged: #2.-FOS-y-Currying

---

# Expresiones Lambda
```scheme
; combina :: Number x Number x(Number x Number -> Number) -> Number
(define (combina a b c)
    (b a c))

(combina 6 - 2) => 4
```


## Ejemplo de F.O.S. con sumatorios
``` python
sum(term, a, next, b):
    if a > b: return 0;
    else: return term(a) + sum(term, next(a), next, b);
```
``` scheme
; sum :: (Number -> Number) x Int x (Number -> Number) x Int -> Number
(define (sum term a next b)
    (if (> a b) 0
        (+ (term a) (sum term (next a) next b))))
```

Esta función de orden superior convierte:
```scheme
(define (f1 a b)
    (if (> a b) 0
        (+ a (f1 (+ a 1) b))))

(define (g1 a b)
    (if (> a b) 0
        (+ (* a (* a a)) (f1 (+ a 1) b))))
```
...en...
```scheme
(define (f2 a b) (sum id a add1 b))

(define (g2 a b) (sum (lambda(n) (* n n n)) a add1 b))
```


# Expresiones Lambda

## Forma general
~~~scheme
(lambda(par1 ...) <expresión>) => función lambda`
~~~

## Definición con nombre
~~~scheme
(define <nombre-función> <expr-lambda>) => función <nombre-función>
~~~
