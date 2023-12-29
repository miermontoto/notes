![[_resources/ISOF - 3 - Arquitectura 1.pdf]]

---

# Tipos de diseño

## Arquitectura
Describe la estructura y organización a alto nivel (subsistemas, componentes y relaciones).

Es el primer paso en el diseño y su resultado es la arquitectura del sistema.

## Detallado
Describe cada componente y su comportamiento, permite su construcción.

# Arquitecutra
La arquitectura del sistema es su estructura interna.
Junto a la arquitectura es necesario describir:
- Implementación de los datos (clases, DBs)
- Implementación del comportamiento (métodos)
- Implementación del interfaz

## A tener en cuenta
- ¿Existe alguna arquitectura genérica que se pueda usar?
- ¿Cuál es la distribución del sistema?
- ¿Documentación, módulos, estrategia de control?


## Tipos de arquitecturas
- **General**: capas, repositorio compartido
- **Distribuidos**: cliente-servidor
- **Interactivos**: modelo vista-controlador
- **Adaptable**: micro núcleo, reflexión
- **Otros**

### Arquitectura de capas
![[_resources/Pasted image 20221114121318.png]]

### Repositorio compartido
Los datos se guardan en una DB compartida.

- Distintos subsistemas acceden a la misma BD.
- Permite compartir grandes cantidades de datos.
- Cada subsistema no necesita preocuparse de los backups.
- Es necesario tener el mismo modelo de datos para todos (dificulta evolución)
- Distribución eficiente difícil de los datos.

### Cliente-servidor
![[_resources/Pasted image 20221114121755.png]]

#### <mark style="background: #BBFABBA6;">Ventajas</mark>
- Distribución de datos real
- Uso de sistemas en red correcto
- Fácil ampliación

#### <mark style="background: #FF5582A6;">Desventajas</mark>
- Cada subsistema puede usar modelos de datos diferentes (ineficiente)
- Gestor en cada servidor (redundancia)
- Difícil controla que servicios están disponibles

### Arquitectura de tres capas
![[_resources/Pasted image 20221114122202.png]]

#### Implementación física
- La capa de presentación puede implementarse en el nodo cliente.
- La capa de negocio puede implementarse en un nodo servidor de aplicaciones.
- La capa de datos en el nodo servidor de DB.

#### <mark style="background: #BBFABBA6;">Ventajas</mark>
- Cambios fáciles en cada nivel con pocos efectos sobre el resto.
- Aísla la lógica de la aplicación convirtiéndola en una capa intermedia.
- Permite distribuir las capas por nodos físicos.
