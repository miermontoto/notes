# Servlets
![[_resources/1_Servlets.pdf]]
## Definiciones

> [!info] Servlets
> Programa en Java que acepta peticiones HTTP y genera respuestas utilizando el protocolo HTTP.

> [!info] Servidores de aplicaciones
> Programa que provee la infraestructura necesaria para aplicaciones web empresariales.

---
## Ciclo de vida
![[_resources/Pasted image 20230912163244.png]]

## Ámbitos de las variables / Parámetros
| Request                                                | Sesión                                                  | Contexto                                           |
| ------------------------------------------------------ | ------------------------------------------------------- | -------------------------------------------------- |
| - Solo vigente mientras se realiza la petición         | - Vigente mientras no se destruya la sesión             | - Vigente durante la ejecución de todo el proyecto |
| - Solo el Servlet que procesa la petición ve los datos | - Solo el Servlet que procesa la petición ve los datos | - Todos los servlets comparten su información                                                   |

**Cookie:** identificador único que almacena la información sobre un usuario en la que se guardan las sesiones.

### Vida de las variables
![[_resources/Pasted image 20230912163857.png]]

