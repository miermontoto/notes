---
author: Juan Francisco Mier Montoto
date: 2023-02-12
info: SI @ GIITIN, EPI Gijón, 22-23
---
*Juan Francisco Mier Montoto, EPI Gijón 22-23*

## 1. Realizar un `merge` de una rama de trabajo en `master` (sin conflictos) cuando `master` ha sido modificado después de hacer el branch
### Estado de la rama `master` previo a los merges
![[_resources/Screenshot from 2023-02-12 14-24-57.png]]
El commit `Clase Master`  es posterior a la creación de la branch `trabajo`.

### Estado de la rama `trabajo` previo a los merges
![[_resources/Screenshot from 2023-02-12 14-25-07.png]]

### Merge de la rama `trabajo` en `master`
![[_resources/Screenshot from 2023-02-12 14-26-31.png]]
Al hacer este merge, se incorporan los cambios en la rama `trabajo` en `master`.
Puesto que no hay conflictos, el merge hace `fast-forward` y se realiza de manera limpia y sin perder información.

## 2. Realizar un `merge` de `master` en una rama de trabajo, cuando `master` ha sido modificado después de hacer el branch y hay una línea que ha cambiado en ambas ramas (resolver conflicto)
Mismo esquema que el ejercicio anterior. Al crear dos ramas y combinarlas, aparece este mensaje:
![[_resources/Pasted image 20230212202422.png]]

Se resuelven los conflictos:
![[_resources/Pasted image 20230212202811.png]]

Ahora, tan solo hace falta hacer `merge` con la rama `master` igual que en el ejercicio anterior y todos los cambios estarán actualizados:
![[_resources/Pasted image 20230212202703.png]]


## 3. Utilizar `rebase` en vez de `merge` para lo anterior
En la misma situación que en el ejercicio anterior, al hacer `rebase` se obtiene la siguiente pantalla:
![[_resources/Pasted image 20230212204807.png]]

Tras arreglar los conflictos a través del `Merge Tool`, se continúa con el rebase y se finaliza:
![[_resources/Pasted image 20230212205403.png]]

En este caso, todos los cambios quedan rebasados en la rama `trabajo`. En caso de querer guardar todos los cambios en la rama `master`, se debería hacer rebase en el otro sentido.
Puesto que es un rebase, no se aprecian las ramas de las que vienen los cambios y la vista resultante es sencilla.

## 4. Realizar varios commits en una rama de trabajo y usar rebase interactivo para agruparlos en uno solo
Sobre la misma estructura anterior, se realizan varios commits de prueba (en la rama `trabajo`):
![[_resources/Pasted image 20230212210544.png]]

Al hacer el rebase interactivo, se hace `squash` sobre todos los commits excepto el primero:
![[_resources/Pasted image 20230212210853.png]]

Al final, se colapsan todos los commits en el primero, en este caso en `Print`:
![[_resources/Pasted image 20230212210944.png]]


