

# Heurística / 8 reglas de oro
# Heurística

...


# 8 reglas de oro

## Consistencia
* Terminología
* Texto
* Excepciones
  * No mostrar texto en contraseñas
  * Mensajes de advertencia, errores

## Accesos directos
* La mayoría de acciones pero nunca en exclusiva.
* Abreviaturas, teclado, mapa de acciones.
* Permitir definirlos por el usuario.



## Retroalimentación de la interfaz
* Feedback
* La interfaz no tiene que esperar a que la tarea responda.



## Indicación de terminación de procesos de interfaz
* Cuando uno o varios procesos terminan hay que indicarlo.
* Sería conveniente indicar todo el progreso de dicha actividad.



### <mark style="background: #BBFABBA6;">Actividad. Busca inconsistencias</mark>
Abrir dentro / Abrir fuera tienen atajos de teclado sin relación entre sí.
Crear carpeta / Crear archivo tienen atajos de teclado sin relación entre sí.
Información / Propiedades se refieren a lo mismo.
CRC / Suma de verificación se refieren a lo mismo.



### <mark style="background: #BBFABBA6;">Actividad. Busca acceso directo</mark>
Para posicionar una Label y TextField a la izquierda o encima.
Crear un objeto TextLabel que incluya a ambos componentes y poder intercambiar su posición relativa mediante una combinación de teclas.
Se puede expandir a todos los objetos manteniendo la combinación de teclas al seleccionar con el ratón a dos elementos.


### <mark style="background: #BBFABBA6;">Actividad. Retroalimentación de una página de descarga</mark>

Barra de progreso en la propia web.
Si el navegador cuenta con un indicador del progreso de la descarga, no cuenta como retroalimentación de la página web.


### <mark style="background: #BBFABBA6;">Actividad. Indicación de terminación de procesos de interfaz</mark>
<mark style="background: #FFF3A3A6;">a)  ¿Cómo se puede indicar que el usuario ha terminado de dar la orden de mover todos los ficheros?</mark>
	- Añadir un icono que indiquen los ficheros movidos.
<mark style="background: #FFF3A3A6;">b) ¿Cómo se puede indicar que se han movido todos los ficheros para diferenciarlo de que no hay ficheros en origen?</mark>
	- Añadir una label al final que indique el estado actual.


## Prevención y manejor del error
* Impedir que el usuario cometa un error.
* Si el usuario comete un error, indicar una manera para poder arreglarlo sin tener que volver a realizar todo el proceso.
  * Se puede marcar dónde está el error en la entrada de usuario. (como sugerencia)
* Si el usuario comete un error no debe cambiar el estado de la aplicación.



## Permitir deshacer acciones
Toda acción debería permitirse deshacer.


## Control del proceso por parte del usuario
* El usuario es el que debe iniciar las acciones.
* El usuario tiene que poder parar las tareas.
* No debe haber acciones que impliquen una larga serie de interacciones con la interfaz sin que pueda haber una posible salida de la misma.
* La representación de una información debe servir también para su manipulación.



## Limitar la necesidad de memoria a corto plazo
* La memoria a corto plazo es la que permite almacenar instantáneamente la información que llega al cerebro para tomar medidas inmediatas. (conversaciones, conducción)
* Los humanos pueden recordar a corto plazo 7±2 elementos, por lo que si se presentan más opciones se deberían agrupar.



### <mark style="background: #BBFABBA6;">Actividad. Permitir deshacer las acciones</mark>
* Permitir deshacer la acción de 'cerrar pestaña'.
* Permitir deshacer la acción de 'cerrar ventana'.

* Hacer una interfaz que permita reabrir un enlace del historial reciente.
* Reabrir todas las pestañas de la ventana cerrada en una ventana nueva.



### <mark style="background: #BBFABBA6;">Actividad. Control de la interfaz por parte del usuario</mark>
* La tarea detecta un problema de puerta abierta.
* El interfaz muestra la puerta que ha pasado de cerrada a abierta.
* ¿Cómo le indica la interfaz al usuario que hay un problema y cúal es?
* ¿Cómo puede el usuario reaccionar (cerrar la puerta)?

* Indicar el nombre asociado a la puerta abierta en una notificación o de alguna otra manera emergente de llamar la atención del usuario.
* Que la notificación emergente se pueda clicar y que te lleve a otra interfaz diferente que explique más la situación y permita mostrar botones con contexto completo.



### <mark style="background: #BBFABBA6;">Actividad. Limitar la necesidad de memoria a corto plazo</mark>
* Se quiere diseñar una interfaz que permita seleccionar un aula de la Universidad de Oviedo
* Se quiere que sea mediante una búsqueda geográfica y de localización 3D en edificios.
* ¿Cómo tendrñia que ser la interfaz para que el usuario solo tuviera que decidirse entre unas pocas opciones?

`Ciudad > Campus > Facultad > Edificio > Planta > Aula`
