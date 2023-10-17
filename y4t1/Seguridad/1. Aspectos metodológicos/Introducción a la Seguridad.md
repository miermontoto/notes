![[_resources/Introduccion_a_la_seguridad.pdf]]

---

> [!info] Definción de seguridad
> Conjunto de medidas que impiden realizar operaciones no autorizadas en un sistema para:
> - Acceder a la información.
> - Reducir el rendimiento del sistema.
> - Impedir el acceso a usuarios autorizados.


# Metas de la seguridad
- Confidencialidad
- Integridad
- Disponibilidad
## Confidencialidad
<mark style="background: #ADCCFFA6;">Ocultación de la información y otros recursos.</mark>

La confidencialidad se aplica también a la mera existencia de los datos, no solo a los propios datos.
*Se proporciona mediante mecanismos de control de acceso: cifrados, contraseñas...*
## Integridad
<mark style="background: #ADCCFFA6;">Ausencia de alteraciones no autorizadas de la información.</mark>

Se consideran dos aspectos:
- Integridad de los **datos** (el contenido)
- Integridad del **origen** (la fuente)

Los mecanismos de **detección** simplemente indican que la integridad de los datos ya no es creíble. (mediante eventos del sistema/usuarios o los propios datos)

## Disponibilidad
<mark style="background: #ADCCFFA6;">Probabilidad de que la información (o recurso) sea utilizable cuando se desee usarla.</mark>

La ausencia de disponibilidad provoca la denegación del acceso a información o servicios. El ataque más común es el *DoS*.
Para asegurar la disponibilidad hay que utilizar mecanismos de detección (que distingan entre eventos atípicos y picos de carga de trabajo deliberados).

# Amenazas a la seguridad
<mark style="background: #ADCCFFA6;">Causa potencial de una brecha de seguridad.</mark>

> [!warning] No se necesita que ocurra la brecha para que exista una amenaza.

**Ejemplos de amenazas**
- Revelación (*disclosure*): snooping, acceso no autorizado a información.
- Engaño (*deception*): MITM, uso de datos falsos consecuencia de alteraciones no autorizadas.
- Perturbación, interrupción: (*disruption, interruption*): DoS.
- Usurpación (*usurpation*): control no autorizado de un SI.

# Objetivos de la seguridad
1. Detectar las posibles amenzadas.
2. Gestionar y minimizar los riesgos.
3. Garantizar la correcta utilización de los recursos.
4. En caso de incidente: limitar y recuperarse.
5. Cumplir la legislación y los requisitos contractuales.

> [!info] Para cumplir estos objetivos, una ORG debe implantar y utilizar un:
> ![[_resources/Pasted image 20230914163428.png]]


## SGSI
![[_resources/Pasted image 20230914163453.png]]

### Servicios proporcionados por un SGSI
- **Confidencialidad:** garantiza que una información solo pueda ser leída por su legítimo propietario o destinatario.
- **Autenticación:** garantiza al destinatario de una información que el remitente es realmente el que figura en la información recibida.
- **Integridad:** garantiza al destinatario o usuario de una inforamción que la información no ha sido alterada.
- **Disponibilidad:** garantiza que un sistema continúa disponible para sus legítimos usuarios frente a ataques e incidentes de seguridad.
- **No repudio**
	- *de origen:* permite demostrar la autoría y el envío de un mensaje.
	- *de destino:* permite demostrar la recepción de un determinado mensaje.
- **Autorización:** controla el acceso de los usuarios a los recursos y servicios del sistema.
- **Auditoría o trazabilidad:** monitoriza y registra el uso de los recursos del sistema por los usuarios para detectar comportamientos anómalos.
- **Reclamación de propiedad:** permite probar que un contenido digital protegido por derechos de autor pertenece a un usuario/organización.
- **Reclamación de origen:** permite probar quién ha sido el craedor de un mensaje o documento.
- **Anonimato:** garantiza el anonimato de los usuarios que acceden a recursos y servicios garantizando la privacidad de los usuarios.
- **Protección contra réplicas:** impide ataques basados en la replicación de operaciones.
- **Confirmación de operaciones:** confirma la realización de una operación/transacción, reflejando los intervinientes.
- **Certificación de fecha y hora:** certifica el instante en el que se ha enviado un mensaje o realizado una operación. (mediante sellos temporales)
- **Certificación mediante terceros de confianza:** cuando dos entidades relaizan transacciones electrónicas, pueden usar una tercera entidad de confianza que certifica sus identidades y la realización y el contenido de la transacción.

# Técnicas y mecanismos de seguridad
- Copias de seguridad y centros de respaldo
- Protocolos criptográficos
- Identificación de usuarios y control de acceso a recursos
- Huella digital y sellado temporal de mensajes
- Antivirus y sistemas de detección de intrusiones
- Análisis y filtrado de tráfico y proxy

## Principio de defensa en profundidad
> [!error] MUY IMPORTANTE!!


![[_resources/Pasted image 20230914164755.png]]

# Implantación de un SGSI
1. Formalizar la gestión de la seguridad de la información
2. Analizar y gestionar los riesgos de seguridad
3. Establecer los procesos de gestión de la seguridad (*metodología PDCA*)
4. Certificar la gestión de la seguridad

![[_resources/Pasted image 20230914165216.png]]

## Niveles de madurez en la gestión de la seguridad
1. **Implantación de medidas básicas**
2. **Adaptación al marco legal y las exigencias de clientes**
3. **Gestión integral de la seguridad de la información**
4. **Certificación de la gestión**