

# Formas
Distintos niveles de redundancias, llamadas _formas normales_.

## Tipos

* 1ª forma normal
* 2ª forma normal
* 3ª forma normal
* Forma normal de Boyce-Codd


Se basan en dependencias funcionales.


# 1ª forma normal ("chorrada")

R que cumple F está en 1FN si todos sus atributos pertecen a un dominio simple.


# 2ª forma normal ("ya tiene un poco más de chicha")

R que cumple F está en 2FN si:

* Está en 1FN.
* Cada atributo no principal (no forma parte de la clave candidata) depende de manera completa de cada clave candidata.



## Calcular claves candidatas

### En ninguna CC estarán...

* Los atributos que siempre aparecen en los consecuentes de las dependencias funcionales.

### En todas las CC estarán...

* Los atributos que no aparezcan en ninguna dependencia funcional.
* Los atributos que siempre aparecen en el antecedente de las dependencias funcionales.

El resto de atributos estarán o no en las claves candidatas dependiendo si los atributos del punto anterior son suficientes o no.


## Propiedades de la 2FN

* Cualquier R cuyos atributos sean todos principales está en 2FN.
* Cualquier R cuyas claves candidatas sean todos simples está en 2Fn.
* Cualquier R formada por dos atributos está en 2FN.




### Ejemplo.

![[y2t2/Bases/4. Normalización/_resources/Sketch 4-19-2022 3-46 PM.png]]


### Ejemplo CC de la definición de 2FN.

![[y2t2/Bases/4. Normalización/_resources/Sketch 4-19-2022 3-56 PM.png]]![[y2t2/Bases/4. Normalización/_resources/Sketch 4-26-2022 3-50 PM.png]]

# huec

![[y2t2/Bases/4. Normalización/_resources/Sketch 5-3-2022 3-36 PM.png]]

# 3ª forma normal("siendo más restrictivos y poniendo más restricciones")

R que cumple F está en 3FN si cada dependencia cumple al menos una de las siguientes restricciones:

* Que el consecuente esté contenido en el antecedente. (trivial)
* Que el antecedente contiene una clave de R.
* Que cada atributo del (consecuente) menos (antecedente) pertenece a alguna clave candidata de R.


Existe otra definción que depende de la 2FN (peor)

* Que cumpla la 2FN.
* Que cada atributo no principal depende de manera directa de cada CC.



## Propiedades

* Si todos los atributos son principales, está en 3FN.
* Si está formada por dos atributos, está en 3FN.



### Ejercicio.

![[y2t2/Bases/4. Normalización/_resources/Sketch 4-21-2022 3-03 PM.png]]![[y2t2/Bases/4. Normalización/_resources/Sketch 4-21-2022 3-09 PM.png]]![[y2t2/Bases/4. Normalización/_resources/Sketch 4-26-2022 3-26 PM.png]]



# Forma normal de Boyce-Codd (FNBC) ("mucho más difícil")

R que cumple F está en FNBC si cada relación cumple al menos una de las siguientes condiciones:

* Que el consecuente contenga o sea igual al antecedente.
* Que el antecedente contiene una clave de R.



### Ejercicios.

![[y2t2/Bases/4. Normalización/_resources/Sketch 4-28-2022 3-03 PM.png]]![[y2t2/Bases/4. Normalización/_resources/Sketch 4-28-2022 3-38 PM.png]]![[y2t2/Bases/4. Normalización/_resources/Sketch 4-28-2022 3-50 PM.png]]


### Ejercicio TODAS LAS FORMAS.

![[y2t2/Bases/4. Normalización/_resources/Sketch 5-3-2022 3-49 PM.png]]![[y2t2/Bases/4. Normalización/_resources/Sketch 5-5-2022 2-37 PM.png]]


### Ejercicio extra :').

![[y2t2/Bases/4. Normalización/_resources/Sketch 5-5-2022 3-44 PM.png]]
