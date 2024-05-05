[[_resources/11_GestionCapacidad 1.pdf]]

---

# Gestión de Sistemas Informáticos
![[_resources/Pasted image 20221129131017.png]]

## Sintonización
Modificar los paráemtros del sistema para mejorar las prestaciones aprovechando mejor la capacidad disponible.

### Método
1. Medir para obtener las prestaciones base.
2. Identificar problemas mediante análisis de las mediciones.
3. Hacer cambios, de uno en uno para no mezclar efectos.
4. Volver a hacer medidas para observar el impacto de los cambios.

Si modificando parámetros del software no se consiguen prestaciones adecuadas, reconfigurar.
SI no se alcanzan las prestaciones deseadas, repensar la arquitectura.


### Aplicación a sistemas específicos
**Sevidores web:** modificar los parámetros de número de procesos y conexiones activas, utilizar conexiones permanentes, desactivar DNS inverso, eliminar contenido dinámico. Utilizar logs.

**Sistemas de bases de datos:** optimizar consultas, indexar, modificar los parámetros de número de proceos, prioridad, tamaño de la caché... Utilizar analizadores de consultas del sistema.


## Planificación de capacidad
La planificación de capacidad es el proceso de predecir cuándo los niveles de carga futuros saturarán el sistema y determinar el modo más eficiente (*cost-effective*) de retrasar la saturación del sistema tanto como sea posible.

 Los niveles de carga futuros son función de la combinación de tres factores:
- Evolución natural de las cargas existentes.
- Desarrollo de nuevas aplicaciones y/o servicios.
- Cambios en el comportamiento de los usuarios.

Es necesario acudir a modelos predictivos en lugar de la experimentación.


### Punto de partida
![[_resources/Pasted image 20221129132144.png]]

El sistema tiene una capacidad de servicio adecuada si se cumplen de forma continua los niveles de servicio, con la tecnología disponible y dentro de las restricciones de coste.

### Enfoque tradicional
1. **Recolección de predicciones de demandas**
2. **Preparar planes de acción**
4. **Revisar y firmar el plan**
5. **Despliegue y configuración de los recursos**

Si la planificación se demora en el tiempo, la planificación puede cambiar.

### Metodología
La planificación de capacidades debe responder a preguntas como:
- ¿Soportará el sistema el incremento de carga?
- ¿Durante cuánto tiempo?
- ¿Qué cambios se deben hacer en el sistema para soportar la nueva carga y/o nuevas aplicaciones?
- ¿Cómo se afecta a los niveles de servicio?

Para ello, hay que analizar el impacto sobre el sistema. Se propone una metodología basada en modelos de predicción.


### Estrategias de predicción de carga
![[_resources/Pasted image 20221129132943.png]]

### Técnicas de predicción de carga
Su calidad depende de la disponibilidad de datos históricos y la precisión de la planificación.

Los datos registrados de forma cronológica reciben el nombre de *series temporales* y se les puede aplicar tendencia, estacionario y estacionalidad.

- **Medias móviles**: solo sirve para predecir un paso, se basa en n valores previos.
- **Alisado exponencial**: similar a las medias móviles, pero pondera la influencia de los valores previos, da más valor a datos recientes.
- **Modelos de regresión**: permite estimar o predecir una variable aleatoria en función de otras variables.



### Caso de estudio: Google
Modifica el enfoque tradicional a un **enfoque basado en intenciones**, cómo quiere el propietario que se ejecute.

Si se incrementa la demanda de un servicio, puede influir en otros componentes. Son necesarias métricas de prestaciones. Tienen su propia herramienta de planificación de capacidad (*Auxon*).