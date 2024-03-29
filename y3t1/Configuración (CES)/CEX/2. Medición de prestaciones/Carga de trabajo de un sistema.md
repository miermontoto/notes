# Carga de trabajo de un sistema
![[_resources/02_Cargas.pdf]]

---

--

 tags: #métrica
 
--

## Concepto
La **carga de trabajo**(workload) es el conjunto de peticiones de servicios que debe satisfacer el sistema.

---

## Tipos y clasificación de las cargas

### Carga de prueba (test workload)
Cualquier carga utilizada en un estudio de comportamiento, ya sea real o artificial.

### Carga real (real workload)
La carga observada durante el funcionamiento normal del sistema. No puede repetirse, por lo que no se puede utilizar como carga de prueba.

### Carga sintética (synthetic workload)
Una carga que se comporta igual que la carga real pero puede repetirse obteniendo los mismos resultados.

---

## Criterios que afectan a la elección de la carga
**Objetivo:** construir una carga que represente el uso real del sistema y pueda ser aplicada de forma repetida y controlable.
**Problema:** la elección de la carga es el punto más débil de cualquier proyecto de evaluación de comportamiento.

### Consideraciones importantes para la elección de carga
1. **Servicios utilizados**
	La mejor forma de iniciar el proceso de elección de la carga es:
		- Hacer una lista de los servicios suministrados por el sistema.
		- Definir métricas que dicten la calidad de los servicios prestados.
2. **Nivel de detalle**
	Cuanto más abajo, más detallado y más complejo:
	1. La petición más frecuente
	2. Lista de servicios con sus características y frecuencias
	3. Usar una traza de las peticiones de servicio
	
	También se tiene que tener en cuenta:
		- Demanda media de recursos
		- Distribución de la demanda de recursos
3. **Representatividad**
	1. Cadencia de peticiones de servicios: debe ser idéntica o proporcional a la de la carga real.
	2. Demanda de recursos: para cada uno de los recursos básicos debe ser igual o proporcional a los de la carga real.
	3. Perfil de utilización de recursos: debe ser similar en ambas carags.
4. **Dependencias temporales**
	Los usuarios cambian constantemente la forma en que usan los sistemas.
	La carga debe representar el último patrón de comportamiento observado.
5. **Nivel de carga**
	Existen tres niveles de nivel de carga:
	| Nivel                               | Caso   |
	| ----------------------------------- | ------ |
	| A su plena capacidad                | Óptimo |
	| Por encima de su capacidad          | Pésimo |
	| Similar al observado en la realidad | Típico |
	
	La elección del nivel depende del estudio a realizar:
		1. Adquisición de un sistema: analizarlo al nivel típico.
		2. Diseño de un equipo nuevo: analizarlo en todos los niveles.
		3. Análisis de algoritmos de descongestión de red: analizarlo al nivel pésimo.
6. **Impacto de componentes externos**
7. **Repetibilidad**

---

## Introducción al modelado y generación de cargas
![[../1. Introducción/_resources/Pasted image 20220915103319.png]]

--- 

## Técnicas de modelado y caracterización de cargas
La caracterización de la carga es el proceso que consiste en observar la carga real de un sistema y sacar conclusiones a partir de su análisis.

### Componentes de una carga
Usuarios que demandan servicios al nivel de interfaz de servicios del sistema bajo prueba. 
Cada componente debe representar un grupo lo más homogéneo posible.

### Parámetros de una carga
Cantidades medidas sobre demandas de servicios usadas para modelar o caracterizar la carga de trabajo.

### Técnicas estadísticas usadas en la caracterización de la carag

#### Modelado en base a parámetros
1. Resumir el comportamiento de cada parámetro
	- <mark style="background: #BBFABBA6;">Sencillo: promedios y desviaciones</mark> 
	- Más preciso: histogramas o distribuciones monovariables.
2. Caracterizar las interrelaciones entre parámetros
	- <mark style="background: #BBFABBA6;">Sencillo: covarianzas</mark> 
	- Más preciso: histograma multiparámetro o distribuciones multivariables

---

## Herramientas de inyección de cargas
Una vez que se dispone de una carga ejecutable, es necesario inyectarla en el sistema.

Técnicas de inyección de carga:
	
### 1. Usando cargadores internos (internal load drivers)
La carga se ejecuta y se recibe en el sistema que se está analizando.

#### <mark style="background: #BBFABBA6;">Ventajas</mark> 
Coste prácticamente nulo.

#### <mark style="background: #FF5582A6;">Desventajas</mark>
- La sobrecarga de comunicación con las terminales no es visible.
- La sobrecarga de acceso en disco para ejecutar la carga puede modificar el comportamiento del sistema.


### 2. Usando operadores reales (live operators)
Consiste en sentar a usuarios reales en las temrinales y ejecutar conjuntos predeterminados de comandos.

#### <mark style="background: #BBFABBA6;">Ventajas</mark> 
- Tiene en cuenta la sobrecarga ocasionada por las comunicaciones con los terminales.

#### <mark style="background: #FF5582A6;">Desventajas</mark> 
- El método es complejo y costoso de utilizar.
- El factor humano introduce errores y varianza de valores.



### 3. Usando emuladores de terminales remotas (remote terminal emulators: RTEs)
Consiste en utkilizar un computador para inyectar la carga en el sistema bajo evaluación.

#### <mark style="background: #BBFABBA6;">Ventajas</mark> 
- El computador puede emular fácilmente a muchos usuarios.
- Lo hace de forma controlada y repetible.

