![[_resources/Introduccion_a_la_seguridad.pdf]]

---

> [!info] Definción de seguridad
> Conjunto de medidas que impiden realizar operaciones no autorizadas en un sistema para:
> - Acceder a la información.
> - Reducir el rendimiento del sistema.
> - Impedir el acceso a usuarios autorizados.


## Metas de la seguridad
### Confidencialidad
<mark style="background: #ADCCFFA6;">Ocultación de la información y otros recursos.</mark>

La confidencialidad se aplica también a la mera existencia de los datos, no solo a los propios datos.
*Se proporciona meidante mecanismos de control de acceso: cifrados, contraseñas...*
### Integridad
<mark style="background: #ADCCFFA6;">Ausencia de alteraciones no autorizadas de la información.</mark>

Se consideran dos aspectos:
- Integridad de los **datos** (el contenido)
- Integridad del **origen** (la fuente)

Los mecanismos de **detección** simplemente indica que la integridad de los datos ya no es creíble. (mediante eventos del sistema/usuarios o los propios datos)

### Disponibilidad
<mark style="background: #ADCCFFA6;">Probabilidad de que la información (o recurso) sea utilizable cuando se desee usarla.</mark>

La ausencia de disponibilidad provoca la denegación del acceso a información o servicios. El ataque más común es el *DoS*.

Para asegurar la disponibilidad hay que utilizar mecanismos de detección (que distingan entre eventos atípicos y picos de carga de trabajo deliberados).

## Amenazas a la seguridad
<mark style="background: #ADCCFFA6;">Causa potencial de una brecha de seguridad.</mark>

> [!warning] No se necesita que ocurra la brecha para que exista una amenaza.

**Ejemplos de amenazas**
- Revelación (*disclosure*): snooping, acceso no autorizado a información.
- Engaño (*deception*): MITM, uso de datos falsos consecuencia de alteraciones no autorizadas.
- Perturbación, interrupción: (*disruption, interruption*): DoS.
- Usurpación (*usurpation*): control no autorizado de un SI.

## Objetivos de la seguridad
1. Detectar las posibles amenzadas.
2. Gestionar y minimizar los riesgos.
3. Garantizar la correcta utilización de los recursos.
4. En caso de incidente: limitar y recuperarse.
5. Cumplir la legislación y los requisitos contractuales.

> [!info] Para cumplir estos objetivos, una ORG debe implantar y utilizar un:
> ![[_resources/Pasted image 20230914163428.png]]


### SGSI
![[_resources/Pasted image 20230914163453.png]]