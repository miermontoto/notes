![[_resources/08_1_Dependability.pdf]]

---

# Definición
Conjunto de propiedades que permiten a sus usuarios depositar una confianza justificada en el servicio proporcionado por el equipo.

# Propiedades
## Fiabilidad (reliability)
Capacidad para funcionar correctamente a lo largo de un periodo de tiempo.

$\begin{cases}t=0 & R(0)=1, F(0)=0 \\ t=\infty & R(\infty )=0, F(\infty )=1\end{cases}$

### Tasa de fallos
Frecuencia con la que se avería un componente o sistema. $\text{fallos}\over\text{tiempo}$

### Curva de mortalidad
Representación de la tasa de fallos como una función del tiempo.
*la curva de la bañera*

![[_resources/Pasted image 20221108133313.png]]

$$F(t)=1- e^{-\lambda t}\text{ y }R(t)=1-F(t)=e^{-\lambda t}$$

### Tasa de fallos variante en el tiempo
- **Fallos del hardware (aleatorios)**: el uso de una tasa constante de fallos es apropiado.
- **Fallos del software (sistemáticos):** generalmente de diseño. Se debería modelar con una distribución Weibull.

### Métrica MTTF
Tiempo medio hasta el fallo.
$$MTTF={1\over\text{tasa constante de fallos del sistema}}$$


## Mantenibilidad (mantainabilty/servieability)
Rapidez con la que se puede reparar o sustituir un equipo averiado.

### Métrica MTTR
Tiempo medio empleado para reparar un sistema.

### Combinación con fiabilidad: MTBF
Tiempo medio entre fallos.

$$MTBF=MTTF+MTTR$$

Como en la mayoría de sistemas el tiempo necesario para reparar es muy inferior al tiempo en el que el sistema funciona, $MTBF\approx MTTF$


### Tasa de reparabilidad
Número de reparaciones que pueden realizarse en un período de tiempo (generalmente reparaciones/hora). $$MTTR={1\over\mu}$$

## Disponibilidad (availabilty)
Cantidad de tiempo que mide el tiempo que esté disponible para ser utilizado.

### Disponibilidad instantánea
Probabilidad de que el sistema esté funcionando en el instante *t* independientemente del número de veces que el sistema haya fallado y sido reparado.

### Disponibilidad estacionaria
Valor límite de la disponibilidad instantánea A(t) cuando *t* tiende a infinito.

## Seguridad (safety)
Prevención de consecuencias catastróficas sobre el entorno.

## Impenetrabilidad (security)
Prevención del acceso no autorizado y/o la manipulación del sistema.

# Impedimentos
- **Fallo:** el equipo no se comporta según sus especificaciones.
	- No es una propiedad del estado del equipo.
- **Error:** estado del sistema que provoca un fallo.
- **Avería:** la causa hipotética de un error del sistema.


![[_resources/Pasted image 20221108132028.png]]

## Clasificación
![[_resources/Pasted image 20221108132056.png]]

## Aplicabilidad del análisis estadístico en función de la naturaleza de las averías

### Fallos causados por averías de naturaleza aleatoria
Análisis estadístico.

### Fallos causados por averías de naturaleza sistemática

#### Enfoque 1
Averías predecibles → se reparan.

#### Enfoque 2
Debido a la complejidad del sistema, no se pueden predecir (naturaleza pseudo aleatoria) → se utilizan análisis estadísticos.

