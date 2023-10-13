![[_resources/Infraestructura_de_Clave_Publica.pdf]]

---
# Autoridades y entidades
## Autoridad de certificación (<mark style="background: #FF5582A6;">AC</mark>)
> [!info] Definición
> Entidad fiable, encargada de garantizar de forma unequívoca y segura la identidad asociada a una clave pública.

- Recibe y procesa peticiones de certificados de los usuarios.
- Consulta con una Autoridad de Registro para determinar si acepta o no la petición.
- Emite el certificado.
- Gestiona **Listas de Revocación de Certificados** (<mark style="background: #FFB8EBA6;">CRLs</mark>)
- Renueva certificados
- Proporciona servicios de backup e infraestructura de seguridad, políticas de operación, información de auditoría...

## Autoridad de registro (<mark style="background: #FFF3A3A6;">AR</mark>)
> [!info] Definición
> Gestiona el registro de usuarios y sus peticiones de certificación/revocación, así como los certificados respuesta a dichas peticiones.

- Indica a la <mark style="background: #FF5582A6;">AC</mark> si debe o no emitir un certificado.
- Autoriza la asociación entre una clave pública y el titular de un certificado.
- <u>Puede</u> intervenir en la gestión del ciclo de vida de un certificado.

### Repositorios/Directorios
Mecanismos a donde se envían los certificados y <mark style="background: #FFB8EBA6;">CRLs</mark>.

### Titulares, partes utilizadoras
**Titulares de certificados**
- Entidades finales
- Usuarios finales
- Suscriptores

**Partes utilizadoras**
Verifican los certificados, firmas electrónicas y rutas de certificación para comunicarse y realizar transacciones con sus suscriptores.

## Autoridad de validación (<mark style="background: #BBFABBA6;">AV</mark>)
> [!info] Definición
> Suministra información online en tiempo real acerca del estado de un certificado.

Suele proporcionar dos servicios de validación:
1. Permitir la descarga de las <mark style="background: #FFB8EBA6;">CRLs</mark> para que el usuario las interprete.
2. Mediante OCSP (*Online Certificate Status Protocol*), los usuarios que deseen obtener el estado de un certificado solo tienen que realizar peticiones contra la <mark style="background: #BBFABBA6;">AV</mark> para obtener su estado.

La <mark style="background: #FF5582A6;">AC</mark> actualiza la información de la <mark style="background: #BBFABBA6;">AV</mark> cada vez que modifica un certificado → a diferencia de las Listas de Revocación, se dispone de información en tiempo real.


## Autoridad de Sellado de Tiempos \[opcional]
> [!info] Definición
> Permite firmar documentos con sellos de tiempos de manrea que se pueda obtener una prueba de que un determinado dato existía 