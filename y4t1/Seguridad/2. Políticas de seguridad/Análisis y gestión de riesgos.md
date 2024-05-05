![[_resources/Analisis_y_Gestion _de_Riesgos.pdf]]

---

# Fases del análisis
1. Identificación de objetivos y restricciones
2. Inventariado y valoración de activos
3. Identificación y valoración de las amenazas
4. Identificación de las medidas de seguridad existentes
5. Identificación y valoración de vulnerabilidades
6. Determinar el impacto
7. Determinar el riesgo
8. Identificación y selección de las medidas de protección

![[_resources/Pasted image 20230921163708.png]]

## Fase 1. Objetivos de riesgos y restricciones
- **Identificación de objetivos**.
- **Identificación de restricciones**: afectan y limitan las medidas de seguridad a implantar.
 
### Fase 2. Inventariado y valoración de activos
- **Relación con los principales tipos de activos**

- **Valoración de activos:** 
![[_resources/Pasted image 20230921164229.png]]

### Fase 3. Identificación y valoración de amenazas
> [!info] Amenaza
> Cualquier causa potencial que puede ocasionar daños en un SI provocando cualquier tipo de périddas a una organización.

**Identificación:** agentes externos/internos, averías y fallos, desastres y accidentes...
**Valoración:** identificar el origen y el actor, clasificar su importancia, analizar su probabilidad e impacto...

### Fase 4. Identificar la seguridad existente
Medidas organizativas, de seguridad física, de seguridad lógica, medidas legales

### Fase 5. Vulerabilidades
> [!info] Vulnerabilidad
> Cualquier debilidad de un activo o de un control que puede ser explotada por una amenaza causando daños y produciendo pédidas.

**Identificación de vulnerabilidades:** generales, específicas para cada activo, clasificación por categorías.

**Valoración de vulnerabilidades:** ![[_resources/Pasted image 20230921170346.png]]
### Fase 6. Evaluación del impacto
> [!info] Incidente de seguridad
> Cualquier evento que produce:
> - Pérdidas físicas de activos o financieras
> - La interrupción de los servicios suministrados por el SI
> Generalmente, un incidente es la materialización de una amenaza.

El impacto es la medición o valoración de las consecuencias que derivan de un incidente.
**Clasificación del impacto:** alto, medio y bajo
### Fase 7. Análisis de riesgos
> [!info] Riesgos (IMPORTANTE)
> Posibilidad de que una amenaza aproveche una vulnerabilidad del sistema causando un determinado impacto en la organización.

El nivel de riesgo depende de las amenazas, las vulnerabilidades y el impacto:
- Amenaza SIN vulnerabilidad NO IMPLICA riesgo
- Vulnerabilidad SIN amenaza NO IMPLICA riesgo
- Si una amenaza explotando una vulnerabilidad NO GENERA impacto NO ES NECESARIO mejorar las medidas de seguridad

<u>Tipo de estimaciones del riesgo</u>
1. *Inherente*
2. *Actual*
3. *Residual*

| Amenaza SIN vulnerabilidad                                                     | Vulnerabilidad SIN amenaza                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| Amenaza: destrucción de datos que deja indiposnible a un servidor.             | Amenaza: robo y revelación de datos contenidos en un portátil |
| Vulnerabilidad: fallo accidental del disco del servidor                        | Vulnerabilidad: el portátil no tiene contraseña de acceso.    |
| Salvaguarda: RAID1                                                             | PERO NO HAY AMENAZA                                                              |
| Vulnerabilidad: No existe y el sistema no quedará indisponible (o es muy baja) |                                                               |
| Riesgo: <mark style="background: #FF5582A6;">inexistente</mark>                |                                                               |

### Fase 8. Selección de medidas
> [!info] Medidas de seguridad
> Cualquier medio empleado para eliminar o reducir un riesgo.

**Clasificación**
- *Activas:* cualquier medida aplicada antes o durante el incidente (prevención o detección) para reducir el riesgo.
- *Pasivas:* cualquier medida utilizada para reducir el impacto de un incidente (corrección).

- *Físicas*
- *Lógicas*

**Proceso de selección de medidas**
**Reevaluar, considerar externalización**


# Ejercicio - análisis de riesgos
![[_resources/Pasted image 20230921170551.png]]

<mark style="background: #BBFABBA6;">Cada activo sufre N amenazas, ¿cuál es el riesgo total que sufre el activo?</mark>
Opción 1. Sumar todos los riesgos en cada dimensión
Opción 2. Quedarse con el mayor riesgo en cada dimensión