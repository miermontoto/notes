# Tema 1  (TI en una org)
- **Servicios**
	- Conectividad de los puestos de trabajo
	- Gestión de los puestos de trabajo
	- Conectividad de dispositivos móviles
	- Comunicación institucional
	- Comunicación interpersonal
	- Seguridad
	- Trabajo colaborativo
	- Almacenamiento
	- Aplicaciones corporativas
- **Infraestructura**
	- Infraestructura de la red
	- Puestos de trabajo
	- Periféricos
	- Servidores

# Tema 2 (CPD)
## Infraestructura
- **Cerramiento:** conjunto de elementos constructivos que forman las paredes del habitáculo del CPD.
	- *Protecciones:* fuego, acceso y apertura, perturbaciones electromagnéticas, agua, gases corrosivos y humos.
	- Sala cofre
	- Contenedor
- **Suelo técnico:** pavimento elevado estructurado en paneles de tamaño estándar, fácilmente accesible.
	- Oculto pero fácilmente accesible, con el objetivo de distribuir cableado/tuberías/aire acondicionado.
	- 60x60cm, losteas desmontables, estructura metálica con suportes de altura ajustable.
- **Infraestructura eléctrica:** conjunto de sistemas orientados a distribuir la energía eléctrica a todos los dispositivos del CPD.
	- *Requisitos:* capacidad de gestión de un gran número de dispositivos, capacidad de gestión de potencias elevadas y fiabilidad.
	- *Elementos:* disyuntores (dispositivos cortacircuitos), PDU (distribuidores de potencia eléctrica), cableado y bases de conexión.
	- *Sistema EPO:* corta la energía completamente ante:
		- la activación de la alarma del sistema de extinción de incendios.
		- el disparo manual provocado por un operario ante una situación de riesgo.
	- ![[_resources/Pasted image 20230323162033.png]]
- **Energía de emergencia:** conjunto de sistemas de energía de respaldo, diseñados para mantener en funcionamiento los sistemas informáticos cuando falla la fuente de energía principal. (*SAI*, *generador*)
- **Racks y cableado:** conjunto de bastidores para la ubicación y cableado de equipos informáticos.
	- *Rack:* armario metálico que alberga un bastidor y cuyo objetivo es alojar equipamiento TI con una alta densidad.
	- *Cableado:* tipos: par trenzado, fibra óptica.
- **Refrigeración:** conjunto de sistemas diseñados para evitar el sobrecalentamiento del CPD.
	- *Tipos:* expansión directa, agua refrigerada.
		- **Expansión directa** ![[_resources/Pasted image 20230323162218.png]]
			- *Compresión*: gas frío y con baja presión → gas caliente con alta presión
			- *Condensación*: condensación (sale líquido alta presión temp media)
			- *Expansión*: caída de presión y temperatura, sale estado difásico
			- *Evaporación*: difásico absorbe calor, pasa a gas y temp media
		- **Agua refrigerada**
			- *Enfriadora*: máquina diseñada para refrigerar un líquido utilizando un evaporador
			- *Serpentín de agua refrigerada*: intercambiador de calor por el que circula agua refrigerada y que absorbe calor del flujo que lo atraviesa
			- *Válvula de 3 vías*: controla el caudal de agua de un serpentín mediante una tubería de bypass que permite controlar la potencia
			- *Ventiloconvector*: serpentín de gagua refrigerada con ventilador
	- *COP:* P<sub>frigorífica</sub>/P<sub>eléctrica</sub>
	- *Sistemas*: orientados a sala(5kw/rack), orientados a fila(40kw/rack), incluídos en rack(30kw/rack)
- **Detección y extinción de incendios:** conjunto de elementos destinados a la detección y extinción de incendios en el CPD.
	- *Elementos de sistema tradicional:* centralita de detección de incendios, detectores automáticos de fuego, activadores de alarma manuales, activadores de alarma manuales, dispositivos de señalización de alarma
	- *Funcionamiento de VESDA:* recoge aire de diversos puntos mediante ventiladores

## Disponibilidad
Grado de funcionamiento operativo de los sistemas que se encuentran en un CPD referido a un año.

**Estándar Tier:** modelo de clasificación de los CPD en base a su topología con especial énfasis en la redundancia de componentes que establece un conjunto de categorías de disponibilidad con el objetivo de estandarizar el diseño de los CPD.

- *Tier I:* sin redundancia.
- *Tier II:* redundancia N+1 en sistemas de energía de emergencia y refrigeración.
- *Tier III:* todo lo anterior, múltiples líneas de distribución eléctrica pero solo una activa.
- *Tier IV:* redundancia 2(N+1), múltiples líneas de distr. eléctrica, opera durante el mantenimiento, soporta un fallo de tipo "peor escenario" sin impacto.


# Tema 3

# Tema 4
