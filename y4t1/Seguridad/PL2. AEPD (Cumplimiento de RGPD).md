# AEPD

## Servicios para el ciudadano
1. Facilitar el ejercicio de los derechos
2. Resolución de dudas sobre los derechos
3. Presentación de reclamaciones

## Como responsable - obligaciones
La AEPD proporciona ayuda a los responsables de tratamientos de datos personales para el cumplimiento del RGPD.

### Herramienta FACILITA
La herramienta FACILITA es un generador de documentos sobre el tratamiento de datos de "escaso riesgo" que incluye los propios tratamientos, el registro de actividades de tratamiento y un anexo con información para el ejercicio de los derechos y medidas de seguridad a aplicar.

El documento que genera la herramienta NO justifica por sí mismo el cumplimiento del RGPD, sino que es una guía para hacerlo.

# Desarrollo de un Sistema de Gtestión de la Protección de Datos Personales y el cumplimiento del RGPD
> [!error] Esta práctica será evaluada mediante preguntas
> No se desarrolla, solo se estudia cómo desarrollarlo.


Se analizará cómo se dearrollaría el prototipo de un SG que permita a una org proteger los datos personales cumpliendo con los requisitos que impone el RGPD. El sistema se puede denominar por su acrónimo: **SGPDP** (*Sistema de Gestión de la Protección de Datos Personales*).

La información que debe contener es la siguiente:
## 01. Delegado de protección de datos
La organización tiene que establecer un método para designar al DPD, aplicarlo y registrar su nombramiento o contratación.

En el SGPDP se debe incluír un documento con los requisitos para designar o contratar a un DPD. Según el tipo de ORG, indicar si es una figura obligatoria u opcional o si se quiere seleccionar a una persona ya contratada o no.

Después de finalizar el proceso de selección, se debe realizar otro documento, indicando la convocatoria realizada, candidatos evaluados y selección final. Por último, se debe incluir el contrato del DPD junto con todas las interacciones que se tengan con dicho DPD a lo largo del tiempo.

## 02. Registro de tratamientos
El RGPD requiere que CADA RESPONSABLE lleve un registro de los tratamientos bajo su responabilidad. Normalmente, se rellenan en hojas de Excel.

## 03. Registro de categorías de tratamientos
El RGPD requiere que CADA ENCARGADO lleve un registro de las categorías de tratamientos efectuadas por cuenta de un responsable. Normalmente, se almacenan en tablas de Excel.

## 04. Documentar los tratamientos
Es necesario documentar cada tratamiento individualmente, usando un directorio por cada tratamiento. Para describir las operaciones del tratamiento se recomienda usar la metodología general propuesta por la AEPD en el documento <u>Gestión del riesgo y evaluación de impacto en tratamientos de datos personales</u>, que utiliza un ciclo de vida de cinco etapas:
- Operaciones
- Datos
- Intervinientes
- Tecnologías
- Generalmente, un *interviniente* usa una *tecnología* para hacer una *operación* con unos *datos*.

## 05. Legitimidad y proporcionalidad del tratamiento
En la documentación de un tratamiento, después de la descripción de las operaciones, se debe incluir una sección donde se explique la legitimidad y la proporcionalidad de ese tratamiento. El RGPD contiene condiciones bajo las cuales se considera que que el tratamiento de datos personales es lícito.

## 06. Información a los interesados
Se debe indicar cómo el responsable cumple con la obligación de informar a los interesados sobre <u>las condiciones del tratamiento</u> y <u>los derechos que les asisten</u>. El RGPD explica cada derecho en una sección del artículo 12. También es conveniente la <u>Guía para el cumplimiento del deber de informar</u> de la AEPD.

La información sobre el tratamiento se debe presentar a los interesados en el momento en que se les soliciten los datos, justo antes de la recogida o registro de los datos, si los datos se obtienen directamente de él. La AEPD recomienda dos niveles para presentar la información:
1. Básico (resumido)
2. Adicional (detallado)

## 07. Derechos de los interesados
El responsable de un tratamiento tiene la obligación de facilitar a los interesados el ejercicio de los derechos sobre sus propios datos. Se debe documentar el mecanismo a implantar para que los interesados ejerciten sus derechos.

### Fase 1. Mostrar los derechos
El responsable tiene que presentar información a los interesados sobre los derechos que tienen sobre sus propios datos y cómo pueden ejercitarlos, normalmente con enlaces a páginas web /(si es que los datos se recogen electrónicamente). Además de una página para cada derecho, en la página general sobre todos ellos se puede informar de aspectos comunes (que es gratuito, qué medios se pueden utilizar, si se ha transferido a un encargado la atención de los derechos...)

**Derechos**
- Acceso
- Rectificación
- Supresión
- Limitación del tratamiento
- Portabilidad de los datos
- Oposición
- No ser objeto de decisiones individuales automatizadas

### Fase 2. Recepción de las solicitudes
Se ha de implementar un mecanismo para recibir las solicitudes de los interesados de forma específica para cada derecho.

### Fase 3. Procesamiento de solicitudes
Tras recibir una solicitud, el encargado de atender los derechos deberá procesarla en el plazo de tiempo indicado en el RGPD. Para demostrar el cumplimiento del mismo, es conveniente disponer de un procedimiento qu