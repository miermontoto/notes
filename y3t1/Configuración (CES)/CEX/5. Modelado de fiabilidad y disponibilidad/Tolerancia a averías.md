![[_resources/10_2_ToleranciaAverias.pdf]]

---

## Definición
Un sistema es tolerante a averías si puede enmascarar la presencia de averías en el sistema usando redundancia.


**Objetivo:** evitar que el sistema falle, incluso ante la presencia de averías en el mismo.

## Redundancia
Son las partes del sistema que son innecesarias para su correcto funcionamiento, si no se desea tener tolerancia a averías.

**Tipos:**
1. Hardware
2. Software
3. Tiempo
4. Información

# Fases en los mecanismos de tolerancia a averías
1. Detección del error
2. Confinamiento de los daños
3. Recuperación del error
4. Tratamiento de la avería y continuación del servicio

## Detección del error
Las averías y los fallos no se pueden observar directamente, sino que tienen que deducirse de la presencia de errores.

El error aparece en el estado del sistema. Hay que realizar pruebas sobre el estado para ver si hay error o no.

Una prueba ideal...
1. es determinada exclusivamente por las especificaciones del sistema, no por el diseño interno.
2. es completa y correcta: debe detectar todos los errores posibles en el sistema.
3. es independiente del sistema.

Las pruebas reales...
1. no se realizan en todos los estados/instantes posibles.
2. no suelen ser completas debido a coste, complejidad, prestaciones...
3. no son totalmente independientes de los sistemas.

Una prueba aceptable es una aproximación de la prueba ideal.

### Tipos de pruebas de detección de errores
1. De replicación
2. De temporización
3. Estructurales y de codificación
4. De razonabilidad
5. De diagnóstico

## Confinamiento y valoración de daños
Antes de corregir el estado, hay que determinar la parte del sistema que se ha dañado.

**Método**
1. Hacer suposiciones sobre la fuente y el evento del error.
2. Analizar todos los flujos de información entre los componentes del sistema para determinar hasta dónde se ha programado.

**Resultado**
- Se obtienen los límites del estado que puede estar afectado por el error.
- Los posibles daños quedan confinados a esos límites.

### Técnicas para obtener los límites

#### Dinámicas
Basadas en registrar y examinar todo el flujo de información (muy complejas)

#### Estáticas
Se asegura que el error no pueda propagarse.


## Recuperación del sistema
Se eliminan los errorres del estado del sistema restaurando el estado a unos valores consistentes.

### Recuperación hacia atrás
El estado del sistema es restaurado a un estado previo supuesto libre de errores.

1. *Checkpoint* el estado del sistema es controlado y almacenado periódicamente en algún almacenamiento que no es afectado por los fallos.
2. *Rollback:* cuando se detecta un error, el sistema es devuelto al último estado almacenado.


### Recuperación hacia adelante
No hay un estado previo libre de errores al que se pueda devolver el sistema. Se intenta ir hacia delante construyendo un estado libre de errores a base de hacer correcciones en el estado actual.


## Tratamiento del fallo y continuidad de servicio
Se determina si la avería es:

### Transitoria
Basta con continuar funcionando a partir del estado libre de errores. Como la avería ha desaparecido, no se producirán nuevos errores.

### Permanente
Si se continúa funcionando, la avería generará nuevos fallos. Es necesario reparar el componente averiado antes de seguir funcionando.

#### Permantente: Localización de la avería
Consiste en identificar el componente que se ha averiado.


#### Permanente: Reparación del sistema
Consiste en no utilizar el componente averiado o usarlo con una configuración diferente.

***La reparación se hace online sin intervención manual. De lo contrario, NO puede considerarse tolerante a averías.***


# Técnicas de tolerancia a averías
## Hardware
Tipos de redundancia hardware:
- **Estática**: se diseñan para tolerar averías enmascarándolas.
	- No requieren acciones específicas del propio sistema.
- **Dinámica**: se diseñan para tolerar averías detectándolas y reconfigurando el sistema. 
	- Sí que requieren acciones específicas del propio sistema.
- **Híbrida**: combinan las dos técnicas anteriores.

### Redundancia estática (NMR)
El fallo simultáneo de $n\over2$ módulos supone la destrucción del sistema. Con $n-1\over2$, el sistema es altamente inestable.

![[_resources/Pasted image 20221122134008.png]]


### Redundancia dinámica
- Se detectan los errores generados por las averías.
- Se sustituye online el módulo averiado por otro de repuesto.
![[_resources/Pasted image 20221122134309.png]]

Si se suponen ambos módulos activos, en caso del fallo de uno de ellos todo el servicio recae sobre el módulo superviviente.

Se detectan las averías mediante *heartbeats*.

