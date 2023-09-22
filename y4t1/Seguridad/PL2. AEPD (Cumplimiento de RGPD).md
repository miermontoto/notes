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
Tras recibir una solicitud, el encargado de atender los derechos deberá procesarla en el plazo de tiempo indicado en el RGPD. Para demostrar el cumplimiento del mismo, es conveniente disponer de un procedimiento que describa cómo se procesan las solicitudes de ejercicio de los derechos.

### Fase 4. Envío de la respuesta 
Depende del método de recepción de la solicitud en primer lugar, siempre guardando registro del envío de la respuesta.

## 07. Contrato entre responsable y encargado
El responsable de un tratamiento puede pedir a un encargado que lo realice.

1. El responsable debe seleccionar a un único encargado para que realice el tratamiento.
2. El encargado del tratamiento debe obligatoriamente formalizarse mediatne un contrato de encargo del tratamiento que lo vincula respecto del responsable. En el RGPD se regula el contenido mínimo del contrato y se recomiendan las siguientes secciones:
	1. Objeto del encargo del tratamiento
	2. Identificación de la información afectada
	3. Duración
	4. Obligaciones del encargado
	5. Obligaciones del responsable

## 08. Tranferencias internacionales
Esta sección solo es necesaria si hay alguna transferencia de datos personales fuera del Espacio Económico Europeo. Hay que documentar el método utilizado par garantizar que el receptor de los datos personales los protegerá adecuadamente mediante alguno de los siguientes métodos:
- Una decisión de adecuación de la Comisión
- Una aportación de garantías adecuadas por el responsable y/o el encargado del tratamiento
- Una excepción para una situación específica

## 09. Brechas de datos personales
El objetivo es diseñar e implementar los procedimientos y mecanismos necesarios para gestionar las brechas de seguridad de los datos personales utilizados en un tratamiento.

> [!warning] Ojo
> Un incidente de seguridad que no ha afectado a datos personales o tratamientos de datos personales no es una brecha de datos personales.

Se decide si se utilizará un sistema común para todos los tratamientos o un sistema específico para cada tratamiento. Se consideran tres niveles de operación:

### Nivel 1. Detección y registro de las brechas
Independientemente de la forma detección, se debe documentar y describir la brecha. Se puede aprovechar la descripción incluida en la notificación de la brecha que se debe enviar a la <mark style="background: #FF5582A6;">AC</mark>.

### Nivel 2. Medidas contra las brechas 
El responsable ha de describir:
1. Medidas de seguridad para remediar la brecha (reducir vulnerabilidad y prevenir una nueva)
2. Medidas para mitigar los efectos negativos de la brecha producida (medidas correctivas)
Estos documentso son dependientes de la brecha, la ORG y los sistemas de seguridad empleados.

### Nivel 3. Notificaciones y comunicaciones
Cada brecha de datos personales debe ser comunicada a la <mark style="background: #FF5582A6;">AC</mark> en un plazo máximo de 72 horas. Se debe almacenar la confirmación electrónica de la entrega del formulario. También hay que definir cómo notificar una brecha a los interesados.

## 10. Estimación de la necesidad de un análisis de riesgos
Se ha de considerar la protección de datos desde el diseño del tratamiento. La RGPD trata la "Seguridad de los datos personales" y la "Seguridad del tratamiento".

Para determinar el nivel de riesgo que afecta a un tratamiento, se utilizan tres niveles. escaso, bajo y alto. Para determinar dichos niveles en cada caso, se puede utilizar el siguiente esquema: ![[_resources/Pasted image 20230922153840.png]]

**EIPD:** Evaluación de Impacto sobre la Protección de Datos

## 11. Realización de un análisis de riesgos básico o una EIPD
El análisis de riesgos básico es demasiado elemental, por lo que es mejor seguir en todo caso la metodología propuesta para realizar una EIPD. Si tan solo es necesario un análisis básico, se utiliza la metodología de forma reducida.

Para el desarrollo de esta sección es importante considerar la <u>Gestión del riesgo y evaluación de impacto en tratamientos de datos personales</u> de la AEPD.

La primera fase del análisis de riesgos consiste en documentar con precisión el tratamiento y los datos personales (ya realizado). Después, hay que identificar las amenazas que afectan a cada operación de un tratamiento y a los datos tratados. Generalmente se desarrolla en forma de tabla:
![[_resources/Pasted image 20230922154633.png]]

En esta metodología, cada amenaza se asocia a un riesgo de seguridad que afecta a una de las propiedades de los datos relacionadas con la seguridad (CIA) → tipo de riesgo. La frecuencia o probabilidad de que se materialice una amenaza se caracteriza con una escala del 1 al 4. El valor del riesgo se obtiene multiplicando la frecuencia por el impacto, que se obtiene en la siguiente escala: ![[_resources/Pasted image 20230922154815.png]]

Inicialmente se aplicará esta metodología sin considerar las medidas de seguridad ya existentes, a esto se le denomina "riesgo inherente". Si los valores que se obtienen son bajos, no será neceario utilizar medidas de seguridad.

Tras realizar una selección de medidas, se debe realizar el análisis de nuevo teniéndolas en cuenta. Al valor del riesgo estimado considerando las medidas de seguridad se lo denomina "riesgo residual".

## 12. Descripción de las medidas de seguridad aplicadas
Se deben documentar las medidas seleccionadas. Si el tratamiento es de escaso riesgo, se documentan las medidas de seguridad básicas generadas por FACILITA. De lo contrario, se documentan las obtenidas por el análisis anterior.

Se consideran dos aspectos:
1. La documentación de las medidas o controles de seguridad
2. La aplicación de las medidas a cada tratamiento

## 13. Auto-verificación del cumplimiento del RGPD
Como fase final, es conveniente incluir algún procedimiento que permita verificar que el sistema asegura que los tratamientos cumplen el RGPD: Una vez que se define el procedimiento de comprobación, hay que aplicarlo al SGPDP desarrollado y generar un informe de cumplimiento a una determinada fecha. En el informe se deberían incluir las medidas propuestas para subsanar los incumplimientos.