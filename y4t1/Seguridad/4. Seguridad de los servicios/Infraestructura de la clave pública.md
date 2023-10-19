![[_resources/Infraestructura_de_Clave_Publica.pdf]]

#claves #AC #sellado #certificación #timestamps #validación

---
# Autoridades y entidades
## Autoridad de certificación (<mark style="background: #FF5582A6;">AC</mark>)
> [!info] Definición
> Entidad fiable, encargada de garantizar de forma unequívoca y segura la identidad asociada a una clave pública.

- Recibe y procesa peticiones de <mark style="background: #ABF7F7A6;">certificados</mark> de los usuarios.
- Consulta con una Autoridad de Registro para determinar si acepta o no la petición.
- Emite el <mark style="background: #ABF7F7A6;">certificado</mark>.
- Gestiona **Listas de Revocación de Certificados** (<mark style="background: #FFB8EBA6;">CRLs</mark>)
- Renueva certificados
- Proporciona servicios de backup e infraestructura de seguridad, políticas de operación, información de auditoría...

## Autoridad de registro (<mark style="background: #FFF3A3A6;">AR</mark>)
> [!info] Definición
> Gestiona el registro de usuarios y sus peticiones de certificación/revocación, así como los certificados respuesta a dichas peticiones.

- Indica a la <mark style="background: #FF5582A6;">AC</mark> si debe o no emitir un <mark style="background: #ABF7F7A6;">certificado</mark>.
- Autoriza la asociación entre una clave pública y el titular de un <mark style="background: #ABF7F7A6;">certificado</mark>.
- <u>Puede</u> intervenir en la gestión del ciclo de vida de un <mark style="background: #ABF7F7A6;">certificado</mark>.

### Repositorios/Directorios
Mecanismos a donde se envían los <mark style="background: #ABF7F7A6;">certificados</mark> y <mark style="background: #FFB8EBA6;">CRLs</mark>.

### Titulares, partes utilizadoras
**Titulares de certificados**
- Entidades finales
- Usuarios finales
- Suscriptores

**Partes utilizadoras**
Verifican los <mark style="background: #ABF7F7A6;">certificados</mark>, firmas electrónicas y rutas de certificación para comunicarse y realizar transacciones con sus suscriptores.

## Autoridad de validación (<mark style="background: #BBFABBA6;">AV</mark>)
> [!info] Definición
> Suministra información online en tiempo real acerca del estado de un <mark style="background: #ABF7F7A6;">certificado</mark>.

Suele proporcionar dos servicios de validación:
1. Permitir la descarga de las <mark style="background: #FFB8EBA6;">CRLs</mark> para que el usuario las interprete.
2. Mediante OCSP (*Online Certificate Status Protocol*), los usuarios que deseen obtener el estado de un <mark style="background: #ABF7F7A6;">certificado</mark> solo tienen que realizar peticiones contra la <mark style="background: #BBFABBA6;">AV</mark> para obtener su estado.

La <mark style="background: #FF5582A6;">AC</mark> actualiza la información de la <mark style="background: #BBFABBA6;">AV</mark> cada vez que modifica un <mark style="background: #ABF7F7A6;">certificado</mark> → a diferencia de las Listas de Revocación, se dispone de información en tiempo real.


## Autoridad de Sellado de Tiempos \[opcional]
> [!info] Definición
> Permite firmar documentos con sellos de tiempos de manrea que se pueda obtener una prueba de que un determinado dato existía en una fecha concreta.

**Creación de una estampa de tiempo**
![[_resources/Pasted image 20231013171836.png]]

**Comprobación de una estampa de tiempo**
![[_resources/Pasted image 20231013172117.png]]

# Estándares de PKI
> [!warning] Qué hay que saber
> 1. Que los mantiene la ITU (*Internationa Telecommunication Union*)
> 2. ![[_resources/Pasted image 20231013172512.png]]

# Proceso de un certificado
## Solicitud de <mark style="background: #ABF7F7A6;">certificado</mark> con registro personal
1. El usuario se persona en la <mark style="background: #FFF3A3A6;">AR</mark> donde entrega la documentación reqerida.
2. Si la <mark style="background: #FFF3A3A6;">AR</mark> aprueba la solicitud, transfiere los datos a la <mark style="background: #FF5582A6;">AC</mark> para que emita el <mark style="background: #ABF7F7A6;">certificado</mark>.
3. Una vez que el certificado ha sido emitido, la <mark style="background: #FFF3A3A6;">AR</mark> entrega el <mark style="background: #ABF7F7A6;">certificado</mark> al usuario.

Todo este proceso tiene un *soporte documental* que es el **PKCS#10**, que están especificados.
![[_resources/Pasted image 20231013173216.png]]

La generación del par de claves se hace en el ordenador del usuario y nunca debería salir del mismo.

## Validación de un certificado
Depende de la estructura de la PKI que lo ha emitido.

Cualquier entidad de la PKI que deba confiar en otra entidad de la PKI debe disponer del certificado de la <mark style="background: #FF5582A6;">AC</mark> raíz → Anclaje de confianza en el que confían TODOS los elementos de la PKI.

> [!faq] Para validar un certificado hay que hacer dos operaciones
> 1. Construir una cadena de certificados
> 2. Validar la cadena de certificados
> 
> Una cadena de certificados es una lista enlazada de los certificados usados para autenticar una entidad.
> - Comienza con el certificado de la entidad.
> - Termina con el certificado de una <mark style="background: #FF5582A6;">AC</mark> raíz.


Para validar cada uno de los certificados de la cadena hay que:
1. Comprobar la firma digital
2. Comprobar la validez temporal
3. Comprobar si está revocado
4. Comprobar el formato

# OCSP
Estándar de la IETF.
