![[_resources/Protocolo_Seg_SSL-TLS.pdf]]

#protocolos #ssl #tls #seguridad 

---

# Introducción
> [!info] Definción
> Un protocolo de seguridad define la secuencia de funciones necesarias para garantizar la protección de la información usando algoritmos criptográficos.


**<u><b>Enfoques básicos</b></u>
1. Usar un protocolo de seguridad separado
2. Integrar la seguridad en el protocolo de aplicación
3. Integrar la seguridad en el protocolo de transporte/red
4. Usar un protocolo de seguridad paralelo

### 1. Usar un protocolo de seguridad separado
Insertar una capa o protocolo intermedio entre los protocolos de aplicación (HTTP) y los de transporte (TCP) que proporcione servicios de seguridad.

![[_resources/Pasted image 20231026151249.png]]

Debido a las diferencias que existen entre TCP y SSL, se modifica ligeramente HTTP para obtener HTTPS.


> [!error] Tener claro
> El protocolo HTTPS NO proporciona seguridad, simplemente utiliza la capa SSL en lugar de utilizar la capa TCP.

### 2. Integrar la seguridad en el protocolo de aplicación
En el caso del protocolo HTTP, consiste en añadir todo un conjunto de funciones de seguridad al propio protocolo que da lugar a un nuevo protocolo.: *S-HTTP*.

> [!faq] No muy relevante
> Tiene un impacto en el mercado mínimo.


### 3. Integrar la seguridad en el protocolo de transporte/red
Los servicios de seguridad se convierten en una parte opcional del protocolo de transporte.

*Ejemplo: IPsec → provee servicios de seguridad en el propio protocolo IP.*

Se convierte en algo transparente a las capas superiores y es independiente de las aplicaciones.

### 4. Usar un protocolo de seguridad paralelo
Quiere decir que está funcionando de manera concurrente con el resto de protolcos de la red.

*Ejemplo: Kerberos → toolkit que utilizan otros protocolos para obtener servicios de seguridad.*


# Protocolo SSL/TLS
## Introducción
Consiste en un conjunto de mensajes predefinidos y reglas sobre cuando enviarlos o no.

**Objetivos**
1. Establecer un canal de comunicación cifrado entre un cliente y un servidor.
2. Autenticar al servidor ante el cliente
3. Autenticar al cliente ante el servidor

**Roles**
- Un PC es siempre cliente
- Otro PC es siempre servidor
El uso más común de SSL es la navegación web segura.

## Handshake
> [!warning] Hay que sabérselo entero!
> "Queda fácil" y es "muy importante".


![[_resources/Pasted image 20231026152258.png]]

1. Se comienza con un `ClientHello`.
2. El servidor, por lo normal, responde `ServerHello`.
3. El servidor envía un mensaje `ServerKeyExchange`, que le envía al cliente la clave pública del servidor (asimétrica, por ejemplo RSA)
4. El servidor envía `ServerHelloDone`, que es vacío pero marca el final del proceso inicial del protocolo.
5. El cliente envía `ClientKeyExchange`, cifrado con la clave pública del servidor, su clave pública.
6. El cliente envía `ChangeCipherSpec`, lo que significa que el cliente cifra la información a partir de ese momento y el servidor debería esperar la información cifrada y debería descifrar con la clave pública.
7. El cliente envía `Finished`, que asegura la integridad del handshake. Se recoge información sobre todos los mensajes enviados (que también las tiene el servidor) y calcula un hash.
8. El servidor envía `ChangeCipherSpec`, lo que le indica al cliente que el servidor comienza a cifrar toda la información posterior.
9. El servidor envía `Finished`, que debería coincidir con el mensaje enviado por l