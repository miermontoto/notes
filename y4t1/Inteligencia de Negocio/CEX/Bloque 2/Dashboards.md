![[_resources/Dashboards-1.pdf]]

---

**ETL:** manera de conectar el negocio entre sí.

**¿Para qué?**: para procesarlo y que se pueda consumir de una forma "analítica".
**Evolución:** antes eran tablas y bases de datos. Ahora, se puede escalar y la arquitectura puede analizar muchos más datos.

**Extracción de datos:** según el tamaño, se actualiza toda la información a partir de la obtención semi-automatizada de la misma.
**Transformación de datos:** posterior a la extracción.
**Virtualización de datos:** para ver como si una base de datos no existe (¿?).


![[_resources/Pasted image 20231006163255.png|800]]

**KPIs:** 


### Evolución de almacenes de datos
| Fase | Función                                                     | Valor para la empresa                                                                                          |
| ---- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 1    | Elaboración de informes sobre transacciones                 | Suministra información relacional para crear instantáneas del rendimiento de la empresa.                       |
| 2    | Corte y fragmentación, consultas ad hoc, herramientas de BI | Funciones avanzadas para lograr conocimientos más profundos y un análisis más sólido.                          |
| 3    | Predicción de rendimiento en el futuro                      | Desarrolla visualizaciones y una inteligencia empresarial progresiva.                                          |
| 4    | Análisis táctico (espacial, estadístico)                    | Ofrece escenarios hipotéticos para fundamentar las decisiones prácticas recurriendo a análisis más exhaustivos |
| 5    | Almacena meses o años de datos                              | Solo almacena datos de las últimas semanas o meses.                                                            |

La mayoría de las empresas están en la fase 3, pero quieren ir hacia abajo.

**Datawarehouses**: diseñados específicamente para analizar datos.
**Data lakes**: almacenan una gran cantidad de datos sin filtrar de todo tipo.
**Cubos OLAP:** cada cubo es análogo a una hoja de cálculo multidimensional..