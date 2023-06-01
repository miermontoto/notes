![[_resources/03-1-Arquitecturas.pdf]]

---

## Concepto
La "arquitectura" de un SD se refiere a:
- la ubicación de los componentes software sobre la red subyacente que hay
- la relación e interacción entre ellos

# Estilos de arquitecturas
## Arquitectura en capas
Cada capa se puede invocar solo a la que está debajo.
![[_resources/Pasted image 20230323103502.png]]

**Capas**
- Bajo nivel: cercano a la arquitectura máquina
- Alto nivel: cercano al usuario

**Niveles de un SD**
- Nivel de plataforma
- Nivel de middleware
- Nivel de aplicación y servicios

## Arquitecturas basadas en objetivos
Componentes que interactúan mediante RPC. Sigue el paradigma cliente-servidor.
![[_resources/Pasted image 20230323103719.png]]

## Arquitecturas basadas en eventos
Los componentes se comunican mediante eventos que pueden llevar asociados datos.
- Están "debilmente acoplados" (a penas dependen unos de otros)
- Normalmente apoyadas en MOM
- *Ejemplo: sistemas editor/subscriptor*
![[_resources/Pasted image 20230323104009.png]]

## Arquitecturas centradas en datos
Los componentes se comunican a través de un repositorio compartido.

### Arquitecturas con espacios de datos compartidos
Si se combina con eventos, dan lugar a **espacios de datos compartidos**.
- Aún más desacoplados
- Se evita el polling en los componentes que necesitan los datos.

![[_resources/Pasted image 20230323105027.png]]

**Ejemplos**
- Bases de datos con posibilidad de notificación
- Almacenamientos en la nube


# Arquitectuas de sistema
## Arquitecturas centralizadas
- Cliente-servidor
- 3 niveles (navegador, servidor, base de datos)
- Multinivel

### Cliente-servidor
- Las capas se implementan en un número de niveles
- Cliente-servidor es el caso con 2 niveles: varias posibilidades.
- Arquitectura multinivel: cada nivel un proceso
- La división de qué funcionalidad va en los clientes y cuál en los servidores no está clara, al haber varias capas.

*Niveles entre cliente y servidor*
![[_resources/Pasted image 20230323105419.png]]
<p style="font-size: 12px">NOTA: cada columna representa una posibilidad de repartir las funcionalidades entre cliente y servidor.</p>

## Arquitecturas descentralizadas
- En lugar de separar capas en procesos, se hace lo contrario.
- Una capa se implementa distribuida entre varios procesos.
- Todos los procesos implementan todas las capas, pero trabajando sobre diferentes datos.
- Son todos iguales entre sí, e intercambiables.

>[!INFO]
>Una arquitectura descentralizada crea una red virtual superpuesta por encima de la red física
> - Los nodos son los procesos
> - Los enlaces son sus intercomunicaciones

### Estructuradas
- Las red superpuesta se construye con algoritmos deterministas
- Los datos se mapean a nodos de forma determinista

### Desestructuradas
- La red superpuesta se construye con algoritmos que usan aleatoriedad
- Los datos se distribuyen aleatoriamente entre sus nodos
- Las búsquedas son problemáticas (*flood*)

### Híbridas
- Mayormente aleatorias
- Nodos especiales (*superpeers*)
	- Actúan como *brokers*
	- Contienen índices para mejorar las búsquedas


