

# Accesibilidad

![[T3-Accesibilidad.pdf]]

# WCAG
Web Content Accessibility Guidelines.

A (más bajo) - AAA (más alto)

**Propone cuatro principios:**
* Perceptibilidad
  * La información y los componentes de la interfaz de usuario deben presentarse a los usuarios de la manera en que puedan percibirlo.
* Operabilidad
  * Los componentes de la interfaz y la navegación serán totalmente operables teniendo en cuenta las restricciones de los usuarios.
* Comprensibilidad
  * La información y el manejo de la interfaz de usuario deben ser comprensibles.
* Robustez
  * El contenido debe ser lo suficientemente robusto como para confiarse en su interpretación.



## Perceptibilidad

### Pauta 1.1: Alternativas textuales
Proporcionar alternativas textuales para todo contenido no textual.


### Pauta 1.2: Contenido multimedia dependiente del tiempo
Proporcionar alternativas sincronizadas para contenidos multimedia sincronizados dependientes del tiempo.


### Pauta 1.3: Adaptabilidad
Crear contenidos que puedan presentarse de diversas maneras y orientaciones sin perder información ni estructura.


### Pauta 1.4: Distinguible
Hacer más fácil para los usuarios ver y oír el contenido, incluyendo la separación entre foreground y background.
No se ha de utilizar el color para separar o distinguir.
Mejorar contraste, tamaño letra, evitando scroll horizontal...



### <mark style="background: #BBFABBA6;">Actividad 1: Reconocimiento de pautas</mark>
**¿Qué pautas se pueden observar? Indicar cómo se aplican.**
Alternativa textual del tooltip a la flecha del desplegable. Distinguibilidad entre categorías mediante un separador.


### <mark style="background: #BBFABBA6;">Actividad 2: Reconocimiento de pautas</mark>
**Administrador de tareas de Windows 7**
Las gráficas son contenidos multimedia que dependen claramente del tiempo. Se distingue entre categorías de información de memoria física, sistema, etc mediante cajas.


## Operabilidad

### Pauta 2.1: Accesible a través del teclado
Toda operación ha de poderse realizar a través del teclado. En vez de combinaciones de teclas, se aconsejan secuencias de teclas.


### Pauta 2.2: Tiempo suficiente
Proporcionar a los usuarios el tiempo suficiente para leer y usar un contenido. Permitiendo ampliar un tiempo cuando sea necesario o no imponer restricciones temporales directamente.


### Pauta 2.3: Reacciones físicas
No diseñar un contenido de manera que se sepa que puede causar ataques o daño físico.


### Pauta 2.4: Navegable
Proporcionar medios que sirvan de ayuda a los usuarios a la hora de navegar, localizar contenido y determinar dónde se encuentran.


### Pauta 2.5: Otras entradas además de teclado



### <mark style="background: #BBFABBA6;">Actividad 2: operabilidad</mark>
¿Cómo conseguir una interfaz que permita seleccionar un rectángulo en una imagen usando solamente el teclado y sin combinaciones de teclas?
Permitir mover el cursor con las flechas del teclado.


### <mark style="background: #BBFABBA6;">Actividad 5: tiempo suficiente</mark>
Un cliente de correo muestra una ventana en primer plano (siempre sobre cualquier otra ventana) con los emails recibidos en los últimos 10 minutos. EL tiempo que se muestra es de 5 segundos.
Indicar qué problemas o ventajas pueden tener las siguientes modificaciones del interfaz con respecto a la pauta 2.2:


1. Ampliar el tiempo que se muestra según un parámetro definido por el usuario

Es correcto, pero el usuario sigue pudiendo perderse la notificación u olvidarse de lo que contenía.

2. Indicar en el icono de la aplicación el número de emails que no se han leído.

Quita información con respecto al enunciado original.

3. Mostrar una cola de notificaciones con esa información.

Muestra bien la cantidad de emails y no desaparece, pero puede llegar a abrumar al usuario por la cantidad de notificaciones.


### <mark style="background: #BBFABBA6;">Actividad 6. navegable</mark>
**<mark style="background: #BBFABBA6;">Indica los aspectos relacionados con la pauta 2.4 que cumple la interfaz de NetBeans y escribe uno que mejoraría dicha pauta.</mark>

Los paréntesis pintados (que indican entre que set de paréntesis te encuentras), la barra de navegación por métodos, el listado de ficheros abiertos, la línea en azul que indica dónde está el cursor.

Algo negativo es que el nombre del archivo no incluye el nombre del proyecto, por lo que no se pueden diferenciar clases que se llamen igual en proyectos diferentes.


## Comprensibilidad

### Pauta 3.1: Legible
Indicar el idioma, hacer el contenido textual legible y comprensible. Dar definiciones de palabras complejas, jerga, ...


### Pauta 3.2: Predecible
Crear interfaces cuya apariencia y operabilidad sean predecibles.


### Pauta 3.3: Ayuda a la entrada de datos
Ayudar a los usuarios a evitar y corregir errores. Cuatro niveles:


1. Dar información sobre el dato necesario.
2. Identificar el error.
3. Sugerir cambio para evitar el error.
4. Prevención de errores.



### <mark style="background: #BBFABBA6;">Actividad 3: Comprensibilidad</mark>
<mark style="background: #BBFABBA6;">Busca una expresión más legible para el siguiente texto:</mark>
<mark style="background: #BBFABBA6;">Seleccione el texto al que desea aplicar el formato de negrita y lleve el puntero hasta la minibarra de herramientas que aparece encima de la selección.</mark>
****
Seleccione el texto al que desea aplicar el formato de negrita y haga clic en el botón "N" en el menú que aparezca encima de la selección.


### <mark style="background: #BBFABBA6;">Actividad 8: Ayuda a la entrada de datos</mark>
Una interfaz pide a un estudiante de `uniovi.es` su login ([UOXXXX@uniovi.es](mailto:UOXXXX@uniovi.es)). Indicar para cada uno de los 4 niveles una acción que lo mejore.

1. **Información:** el nombre de usuario tiene que tener la forma [UOXXXXXX@uniovi.es](mailto:UOXXXXXX@uniovi.es) donde la X es un dígito.
2. **Identificar el error:** si el usuario no introduce un nombre que encaje con esa expresión, mostrar un error.
3. **Sugerir cambio para evitar el error:** mostrar qué partes del nombre de usuario no concuerdan con la expresión.
4. **Prevención de errores:** solo permitir introducir "UO", una secuencia de 6 dígitos y luego "@uniovi.es".

## Robustez
> [!WARNING]
> No relevante.

### Pauta 4.1: Compatible
