---

Created at 2022-02-07T16:10:05+01:00
Last updated at 2022-02-07T19:15:11+01:00

Tagged: #2.-FOS-y-Currying

---

# Expresiones Lambda

```
; combina :: Number x Number x(Number x Number -> Number) -> Number
(define (combina a b c)
    (b a c))

(combina 6 - 2) => 4
```


[Tecnologías y Paradigmas de la Programación (CEX)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2a3NqNHAxazZoaTZjZGoxY2dvajBlMWg2c3JtY3AxbTYxaW00cGo0Y2NvM2VkMWw2b28wIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Mon, Feb 7, 2022, 4:00 PM - 5:00 PM
Location:AS-1
Clase Expositiva

## Ejemplo de F.O.S. con sumatorios

```
# Python
sum(term, a, next, b):
    if a > b: return 0;
    else: return term(a) + sum(term, next(a), next, b);

# Scheme
; sum :: (Number -> Number) x Int x (Number -> Number) x Int -> Number
(define (sum term a next b)
    (if (> a b) 0
        (+ (term a) (sum term (next a) next b))))
```

Esta función de orden superior convierte:
```
(define (f1 a b)
    (if (> a b) 0
        (+ a (f1 (+ a 1) b))))

(define (g1 a b)
    (if (> a b) 0
        (+ (* a (* a a)) (f1 (+ a 1) b))))
```
...en...
```
(define (f2 a b) (sum id a add1 b))

(define (g2 a b) (sum (lambda(n) (* n n n)) a add1 b))
```


# Expresiones Lambda

## Forma general

`(lambda(par1 ...) <expresión>) => función lambda`


## Definición con nombre

`(define <nombre-función> <expr-lambda>) => función <nombre-función>`

