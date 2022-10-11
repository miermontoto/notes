![[_resources/05_5_DiseñoAnalisisExperimentos.pdf]]

---

# Introducción
**Problema:** las prestaciones dependen de más de un factor. ¿Cuál es el más importante? ¿Cuál es la influencia de cada a uno?
**Objetivo:** obtener la máxima información con el mínimo número de experimentos.




## Terminología
- **Variable respuesta:** resultado del experimento. Normalmente es una medida de prestaciones del sistema.
- **Factores:** cada variable que afecte a la variable respuesta y tenga varias alternativas.
- **Niveles:** son los valores que puede tomar un factor.

- **Factores primarios:** aquellos factores cuyos efectos necesitan cuantificarse. (*ej: procesador, tamaño de la memoria*)
- **Factores secundarios:** factores que afectan a las prestaciones, pero no estamos interesados en cuantificar.

- **Replicación:** la repetición de todos o algunos experimentos se denomina replicación. (*ej: si todos los experimentos se repiten tres veces, tres replicaciones.*)
- **Diseño:** el número de experimentos, las combinaciones de factores y el número de replicaciones.
- **Interacción:** dos factores A y B interactúan si el efecto de uno depende del nivel del otro.


## Errores frecuentes
- **Variación debida al error experimental
- **Controlar los parámetros importantes**
- **Aislar los efectos de los diferentes factores
- **Ignorar las interacciones**
- **Realizar demasiados experimentos**

# Tipos de Diseños Experimentales
## Diseño simple
Se comienza con una configuración típica y se va variando un factor de cada vez para obtener los efectos en las prestaciones producidos por ese factor.

### <mark style="background: #BBFABBA6;">Ventajas</mark>
- Número reducido de experimentos

### <mark style="background: #FF5582A6;">Desventajas</mark>
- No es estadísticamente eficiente.
- No considera los efectos de las interacciones.

## Diseño Factorial Completo
Un diseño factorial completo utiliza todas las combinaciones en todos los nivels de todos los factores.

### <mark style="background: #BBFABBA6;">Ventajas</mark>
- Examina todas las posibles configuraciones

### <mark style="background: #FF5582A6;">Desventajas</mark>
- Coste elevado por el gran número de experimentos a realizar

## Diseño Factorial Fracional
Se usa este tipo de diseño cuando el número de experimentos requerido por un diseño factorial completo es demasiado grande.

### <mark style="background: #FF5582A6;">Desventajas</mark>
- Se obtiene menos información.
- Faltan interacciones entre factores.

## Diseño Factorial 2<sup>k</sup>
Se utiliza un diseño experimental de tipo 2<sup>k</sup> para determinar los efectos de *k* factores, cada uno de los cuales tiene <u>dos niveles</u>.

### Método de la tabla de signos
Muy similar a Símplex.
> [!FAQ]- De esto cae uno en el examen

### Asignación de la variación
Sirve para determinar el porcentaje de influencia de cada factor.
Se basa en: $Varianza\space muestral\space de\space y=s²_y={\sum^{2^2}_{i=1}(y_1-\overline y)^2\over 2^2-1}$

### Ejemplo (de la pizarra)
![[_resources/Pasted image 20221011134606.png]]
![[_resources/Pasted image 20221011134617.png]]

## Diseño Factorial con Replicaciones 2<sup>k</sup>r
Cada uno de los 2<sup>k</sup> experimentos se repite *r* veces.

### Estimación de los Errores Experimentales

### Asignación de la Variación


## Diseño Factorial Fracional 2<sup>k-p</sup>
Requiere un número considerablemente menor de experimentos.
- Elección de *k-p* factores y preparación de una tabla de signos completa para un análisis factorial completo con k-p factores.

### Ejemplo
![[_resources/Pasted image 20221011135538.png]]


### Indeterminaciones
Puesto que algunos efectos no pueden calcularse, se genera una "confusión". 


## Experimentos con un factor
Otro tipo de análisis de experimentos con un objetivo distinto. En lugar de obtener la influencia de cada uno de los factores, se obtiene la influencia de un solo factor.