# Presentación de datos: dashboards y procesos ETL
Juan Francisco Mier Montoto
*Inteligencia de Negocio, EPI Gijón 23-24*

---

# Índice
1. Introducción
2. Conceptos
   1. Dashboards
      - Características
      - Terminología clave
      - Aspectos técnicos
   2. Procesos ETL
      - Relevancia
      - Evolución
      - Funcionamiento
      - Alternativas
3. Diseño de Dashboards
4. Integración
5. Demostraciones prácticas
6. Conclusiones

## Tabla de figuras
TBW

## Referencias
- https://www.cyberclick.es/numerical-blog/que-es-un-dashboard#:~:text=Un%20dashboard%20es%20una%20herramienta,campa%C3%B1a%20o%20un%20proceso%20espec%C3%ADfico.
- https://www.kyoceradocumentsolutions.es/es/smarter-workspaces/business-challenges/procesos/dashboard-y-su-significado-estrategico.html
- https://www.arimetrics.com/glosario-digital/dashboard
- https://es.wikipedia.org/wiki/Cuadro_de_mando
- https://www.astera.com/es/type/blog/data-warehouse-concepts/
- https://en.wikipedia.org/wiki/Dashboard_(business)
- *GPT4 para la generación de ideas, refinamiento de texto y corrección de errores.*
- *Github Copilot X para la generación de ideas, refinamiento de texto y corrección de errores.*
- *Transparencias de la asignatura (Tema 2, Dashboards)*
---

# 1. Introducción
En la actualidad, la capacidad de una organización para tomar decisiones informadas y bien optimizadas se ha convertido en una piedra angular del objetivo de cualquier empresa para tratar de conseguir una ventaja competitiva. El volumen y la variedad de datos que se pueden obtener y procesar ha ido aumentando exponencialmente con el desarrollo de la tecnología, convirtiendo la gestión de esta información en una tarea compleja y crítica al mismo tiempo.

La capacidad de presentar datos de manera visual y comprensible se ha convertido en una herramienta fundamental para la toma de decisiones informadas. Los dashboards son una herramienta que permite presentar datos de manera visual, y que se utilizan para tomar decisiones informadas sobre un proceso o negocio. Estos dashboards suelen mostrar datos en tiempo real, y permiten a los directivos tomar decisiones informadas sobre el futuro de la empresa.

En el contexto de esta asignatura, y por lo tanto de este trabajo, se pretende explicar y expandir los conceptos "cuadro de mando" (dahsboard) y "procesos de extracción, transformación y carga" (ETL), así como su importancia en el sector. Además de dar ejemplos de herramientas y procesos que se utilicen hoy en día, se realizarán unas breves demostraciones prácticas de algunas de estas herramientas.

---

# 2. Conceptos
## 2.1. ¿Qué es un dashboard?
La palabra "dashboard", que traducido de manera literal es "cuadro de mandos", es un término que se utiliza para referirse a cualquier interfaz gráfica que muestre información relevante de manera visual sobre un proceso o negocio. Aunque el término se utiliza en muchos ámbitos (puede incluir indicadores comerciales, de producción, de marketing, de calidad, de recursos humanos...)

En nuestro ámbito, los dashboards suelen relfejar en tiempo real el rendimiento de una actividad o negocio, y se utilizan para tomar decisiones informadas sobre el mismo. Por ejemplo, un dashboard puede mostrar el número de ventas de un producto, el número de clientes, el número de productos defectuosos, etc. En el caso de una empresa, un dashboard puede mostrar el rendimiento de la misma en tiempo real, y permitir a los directivos tomar decisiones informadas sobre el futuro de la empresa.

### Características
- **Visualización de datos:** es la característica fundamental de cualquier cuadro de mandos, y aquella que determina su utilidad. La visualización de datos es la ciencia de presentar los datos de manera que se pueda extraer información útil y realizar decisiones informadas sobre ellos. Un buen dashboard cuenta con gráficas, tablas, indicadores, etc. que permitan al usuario entender la información que se está presentando.
- **Interactividad y personalización:** un dashboard "moderno" debe permitir al usuario interactuar con los datos (filtrarlos, ordenarlos, profundizar en ellos...) y ajustar la información que se muestra a cada proceso o negocio que se esté evaluando. Esta capacidad asegura que el dashboard se adapte tanto a las necesidades actuales como a las evoluciones futuras de lo que se esté analizando.
- **Accesibilidad:** puesto que estamos hablando de tecnologías modernas con una gran cantidad de herramientas disponibles, se da por hecho que un dashboard debe ser accesible desde una variedad de situaciones y dispositivos, manteniendo su funcionalidad y forma. Aunque normalmente los dashboards se analicen en pantallas grandes, es importante que también se puedan consultar en otras circunstancias, como dispositivos móviles.

### Terminología clave
Por lo general, los dashboards como concepto van siempre unidos a otros conceptos representados por sus siglas en inglés:
- KPI (*Key Performance Indicator*): valor cuantificable que permite medir el rendimiento de un proceso o actividad. Los valores de los KPIs son los números que se muestran en los dashboards, que se pueden mostrar de manera individual o en conjunto con otros KPIs, incluso comparándolos con mediciones históricas, en multitud de formatos.
- BI (*Business Inteligence*): conjunto de estrategias y herramientas que permiten transformar los datos en información útil para la toma de decisiones. El BI se puede aplicar a cualquier ámbito, pero en este caso se aplica a los negocios.
- ETL (*Extract, Transform, Load*): esta definición se expandirá en el siguiente apartado, pero básicamente se trata de un proceso que permite extraer datos de una fuente, transformarlos y cargarlos en otra fuente.

### Aspectos técnicos
Aunque los dashboards se pueden crear de muchas maneras, en la actualidad se suelen crear utilizando herramientas de software que permiten crearlos de manera visual, sin necesidad de programar. Estas herramientas suelen tener una interfaz gráfica que permite al usuario arrastrar y soltar elementos para crear el dashboard, y suelen tener una gran variedad de elementos disponibles para crearlos. En apartados posteriores se profundizará en algunas de estas herramientas.

- **Visualización de datos:** es la característica fundamental de cualquier cuadro de mandos, y aquella que determina su utilidad. La visualización de datos es la ciencia de presentar los datos de manera que se pueda extraer información útil y realizar decisiones informadas sobre ellos. Un buen dashboard cuenta con gráficas, tablas, indicadores, etc. que permitan al usuario entender la información que se está presentando.
- **Interactividad y personalización:** un dashboard "moderno" debe permitir al usuario interactuar con los datos (filtrarlos, ordenarlos, profundizar en ellos...) y ajustar la información que se muestra a cada proceso o negocio que se esté evaluando. Esta capacidad asegura que el dashboard se adapte tanto a las necesidades actuales como a las evoluciones futuras de lo que se esté analizando.
- **Accesibilidad:** puesto que estamos hablando de tecnologías modernas con una gran cantidad de herramientas disponibles, se da por hecho que un dashboard debe ser accesible desde una variedad de situaciones y dispositivos, manteniendo su funcionalidad y forma. Aunque normalmente los dashboards se analicen en pantallas grandes, es importante que también se puedan consultar en otras circunstancias, como dispositivos móviles.

### Tipos de Dashboards
Existen multitud de tipos de dashboards, que se pueden clasificar según muchos criterios diferentes. A continuación se explicarán algunos de los tipos de dashboards más comunes:

- **Operacionales:** muestran información en tiempo real sobre el rendimiento de un proceso o negocio. Suelen mostrar información sobre el rendimiento actual, y permiten tomar decisiones informadas sobre el mismo.


## 2.2. ¿Qué son los procesos ETL?
Los procesos ETL son procesos que combinan datos de múltiples fuentes en un único destino, transformando los datos en un formato común. Estos procesos se utilizan para extraer datos de diferentes fuentes, transformarlos en un formato común y cargarlos en un dashboard para que se muestren de manera visual.

Estos procesos deben estar personalizados en cada caso, ya que cada dashboard muestra datos diferentes, de diferentes fuentes y en diferentes formatos. Además, estos procesos deben ser escalables, ya que los datos que se muestran en los dashboards suelen ser datos que se generan de manera continua, y por lo tanto los procesos ETL deben ser capaces de procesar grandes cantidades de datos de manera eficiente.

### Relevancia
Todos estos "datos" de los que se habla no vienen de la misma fuente, ni en el mismo formato, ni siquiera representan todos lo mismo. Por lo general, los datos que se utilizan en los dashboards provienen de diferentes fuentes, como bases de datos, logs, APIs, etc. Además, estos datos pueden estar en diferentes formatos, como CSV, JSON, XML, etc. Por último, estos datos pueden representar diferentes cosas, como ventas, clientes, productos, etc.

Es por este motivo por lo que es relevante la existencia de procesos ETL, ya que permiten extraer los datos de las diferentes fuentes, transformarlos en un formato común y cargarlos en el dashboard para que se muestren de manera visual.

### Evolución
#### Origen
Los procesos ETL surgieron con la aparición de las bases de datos relacionales, que permitían almacenar grandes cantidades de datos de manera estructurada. En un principio, se solía almacenar los datos en bruto en las bases de datos, lo cuál no facilitaba la extracción de información útil. Para solucionar este problema, las primeras herramientas ETL convertían los datos en datos *relacionales*, es decir, los transformaban en tablas que se podían relacionar entre sí. De esta manera, se podía extraer información útil de los datos almacenados en las bases de datos.

Con la evolución de estas herramientas, las fuentes y los tipos de datos fueron aumentando de manera *exponencial*, lo que llevó a la creación de herramientas más complejas que permitían extraer datos de diferentes fuentes, transformarlos en diferentes formatos y cargarlos en diferentes destinos.

#### Data sinks
Los *data sinks* (o sumideros de datos), son capaces de recibir datos de múltiples fuentes y disponen de la elasiticad característica de los servicios en la nube que permiten escalar de manera automática según las necesidades de cada momento, en este caso según el volumen de datos que se esté procesando. Además, los *data sinks* suelen tener un coste muy bajo, ya que se paga por el volumen de datos que se procesa, y no por el volumen de datos que se almacena.

#### Data warehouses
Los almacenes de datos o *data warehouses* son bases de datos que almacenan grandes cantidades de datos de manera estructurada, y que se utilizan para realizar análisis de negocio. Estos almacenes de datos suelen ser el destino final de los procesos ETL, ya que permiten almacenar grandes cantidades de datos de manera estructurada y optimizada para realizar análisis de negocio.

#### Data lakes
Los lagos de datos o *data lakes* son almacenes de datos que almacenan grandes cantidades de datos de manera no estructurada. A diferencia de los *data warehouses*, los *data lakes* no tienen un esquema definido, lo que permite almacenar datos de cualquier tipo y formato. Esto permite almacenar grandes cantidades de datos sin tener que definir un esquema de antemano, lo que puede ser útil en algunos casos. Sin embargo, esto también puede ser un inconveniente, ya que no se puede realizar un análisis de negocio de los datos almacenados en un *data lake* sin antes transformarlos en un formato estructurado.

El almacenamiento de datos es un tema muy amplio y complejo, con muchas alternativas y posibilidades (metodologías Inmon y Kimball, enfoques top-down y bottom-up, etc.), por lo que no se profundizará más en este tema.

### Funcionamiento
Como su propio nombre indica, los procesos ETL se dividen en tres partes:
- **Extracción:** se extraen los datos de las fuentes de datos, que pueden ser bases de datos, logs, APIs, etc. En este paso, se pueden aplicar filtros para extraer solo los datos que se necesiten, y se pueden extraer datos de múltiples fuentes.
  - Frecuentemente, los datos brutos se almacenan temporalmente en una zona de almacenamiento intermedia llamada *staging area* (que es estrictamente *transitoria*).
  - En algunos casos, los datos se pueden extraer de manera incremental, es decir, solo se extraen los datos que han cambiado desde la última extracción. Esto puede ser útil para reducir el tiempo de procesamiento y el volumen de datos que se almacenan.
  - En otros casos, los datos se pueden extraer de manera continua, es decir, se extraen los datos en tiempo real según se van generando. Esto puede ser útil para procesar datos que se generan en tiempo real, como logs o datos de sensores.
- **Transformación:** se transforman los datos extraídos en un formato común, normalmente tablas relacionales.
  - Una transformación básica de datos es la limpieza, revisión y corrección de los datos extraídos, para asegurar que los datos que se almacenan son correctos y consistentes.
  - Otras operaciones más complejas pueden ser la agregación de datos, la conversión de formatos, la normalización de datos, el cifrado, etc.
- **Carga:** se cargan los datos transformados en el destino final. En este paso, se pueden aplicar filtros para cargar solo los datos que se necesiten, y se pueden cargar datos en múltiples destinos.
  - Frecuentemente, los datos se almacenan en un *data warehouse* o un *data lake* para su posterior análisis.
  - En algunos casos, los datos se pueden cargar de manera incremental, es decir, solo se cargan los datos que han cambiado desde la última carga. Esto puede ser útil para reducir el tiempo de procesamiento y el volumen de datos que se almacenan.
  - En otros casos, los datos se pueden cargar de manera continua, es decir, se cargan los datos en tiempo real según se van generando. Esto puede ser útil para procesar datos que se generan en tiempo real, como logs o datos de sensores.

### Alternativas
Aunque lo más tradicional es el esquema anteriormente explicado de `Extracción → Transformación → Carga`, existen algunos procesos y flujos alternativos:

- **Virtualización:** en lugar de extraer los datos de las fuentes, se crea una capa virtual que permite acceder a los datos de las fuentes sin necesidad de extraerlos. Esto permite ahorrar espacio de almacenamiento y tiempo de procesamiento, pero puede ser menos eficiente en algunos casos.
- **ELT:** en lugar de transformar los datos antes de cargarlos en el destino, se cargan los datos en bruto y se transforman en el destino. Funciona bien para grandes conjuntos de datos sin estructura que requieran una carga (o recarga) contínua, aunque, al igual que la virtualización, puede ser menos eficiente en algunos casos.

---

# 3. Diseño de Dashboards
## 3.1. Principios de diseño y visualización
Aunque los dashboards se pueden crear de muchas maneras, en la actualidad se suelen crear utilizando herramientas de software que permiten crearlos de manera visual, sin necesidad de programar. Estas herramientas suelen tener una interfaz gráfica que permite al usuario arrastrar y soltar elementos para crear el dashboard, y suelen tener una gran variedad de elementos disponibles para crearlos. En apartados posteriores se profundizará en algunas de estas herramientas.

Pese a que la creación de dashboards sea intuitiva y visual, es importante tener en cuenta algunos principios de diseño y visualización para crear dashboards que sean útiles y fáciles de entender. A continuación se explicarán algunos de estos principios:

- **Simplicidad:** un dashboard debe ser simple y fácil de entender, ya que su objetivo es mostrar información de manera visual. Un dashboard debe mostrar la información de manera clara y concisa, sin distracciones innecesarias.
- **Consistencia:** un dashboard debe ser consistente en todos sus elementos, para que el usuario sepa qué esperar en cada momento.
- **Relevancia:** un dashboard debe mostrar información relevante para el usuario, y debe mostrarla de manera que el usuario pueda entenderla.
- **Interactividad:** un dashboard debe permitir al usuario interactuar con los datos, para que pueda profundizar en la información que se muestra.
- **Accesibilidad:** un dashboard debe ser accesible desde una variedad de situaciones y dispositivos, manteniendo su funcionalidad y forma.

Otras características, como la estética o la tasa de refresco, no deben considerarse como principios de diseño, ya que no son características fundamentales de un dashboard.

## 3.2. Herramientas
Como se ha mencionado repetidas veces en este trabajo, existen multitud de herramientas que facilitan la creación (y el mantenimiento) de dashboards de manera interactiva y visual, sin necesidad de tener un conocimiento profundo de programación. A continuación se explicarán algunas de las herramientas más utilizadas en la actualidad.

Cada herramienta, a parte de tener sus ventajas y desventajas, está enfocada a distintos tipos de dashboards, por lo que es importante elegir la herramienta adecuada para cada caso.

Algunas de las herramientas más populares (incluyendo también las que se mencionan en las transparencias de teoría) son:
- Tableau
- Grafana
- Power BI
- QlikView/QlickSense
- NewRelic Insights

# 4. Integración

# 5. Demostraciones prácticas
## 5.1. Dashboard
