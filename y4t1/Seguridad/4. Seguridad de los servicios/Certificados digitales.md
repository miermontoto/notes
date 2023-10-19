![[_resources/Certificados_Digitales.pdf]]

---

# Necesidad de los certificados digitales
La firma digital de A es útil para B si se cumple:
1. La clave privada de A no está comprometida.
2. B tiene acceso a la clave pública de A de manera segura.

¿Cómo estar seguro de estas dos propiedades? → Una tercera parte (en la que ambos confían) establece la asociación *clave pública ←→ identidad de su propietario*.

Los certificados son documentos que contienen:
- a quién pertenecen
- su clave pública
- una firma digital de la autoridad certificadora.

> [!error] Certificado raíz
> Un ***certificado raíz*** es un certificado que ha emitido la autoridad certificadora para ella misma. Son *autofirmados*.


## Tipos de certificados
**Según la clase**
- **Clase 1:** la AC solo verifica el nombre y el correo del titular
- **Clase 2:** la AC comprueba además el DNI/Carnet, el número de la SS y la fecha de nacimiento.
- **Clase 3:** la AC comprueba además la solvencia económica del titular.
- **Clase 4:** la AC comprueba además la verificación de cargos dentro de la empresa.

**Según la finalidad**
- **Certificados SSL para cliente**: se expiden a una persona física para 
- **Certificados SSL para servidor**: identifican a un servidor ante un cliente.
- **Certificados S/MIME:** se utilizan para email firmado y cifrado.
- **Certificados para firmar programas:** se usan para firmar drivers u otros programas.
- **Certificados raíces (para ACs):** usados por el software cliente para determinar si puede confiar en un certificado.

## Uso elemental (de un certificado)
> [!warning] Esta diapositiva hay que entenderla muy bien!
> "Todo sale a partir de esto. Esto es *esencial.*"

![[_resources/Pasted image 20231006172540.png]]

**La clave pública de la AC va a estar en CAC; es decir, en el certificado de la AC.**

## Estados de un certificado
![[_resources/Pasted image 20231006173844.png]]

Durante el período de validez, el certificado puede ser:
- Revocado
- Suspendido

Las ACs deben mantener *Listas de Revocación de Certificados*, incluyendo referencias a todos los certificados que han revocado.

## Certificados X.509
Se pueden describir formalmente usando ASN.1 → *Abstract Syntax Notation number One*.

> [!info] ASN.1
> Notación formal poara describir datos independientemente del lenguaje de implementación o representación física.
> - Proporciona tipos primitivos: int, str...
> - Proporciona tipos construidos: sequence, set ...

> [!faq] La siguiente diapositiva no hay que sabérsela.

Certificado: conjunto de información a firmar, identificador de con qué se firma y la propia firma digital.

## Codificación de certificados
> [!info] Hay que saberse los formatos de codificación.

**Formatos**
- **BER (*Basic Encoding Rules*)**: formato que incluye mecanismos de auto-descripción y auto-delimitación de los datos.
	- 4 campos: Type, Length, Value, End-of-contents
	- Permite múltiples codificaciones alternativas para un mismo dato
- **CER (*Canonical Encoding Rules*)**: solo permite una de las codificaciones BER:
	- Apropiado para tamaños grandes o si hay que codificar y transmitir parte de un valor antes de disponer de todo ello.
- **DER *(Distinguished Encoding Rules)***: solo permite una de las codificaciones BER:
	- Apropiado para tamaños pequeños y si hay que saltar algunos valores anidados.

> [!note] Algo de Base64

## Mensajes criptográficos
- **Estandar PKCS#7 (o la evolución CMS):** describe la sintaxis para representar datos relacionados con operaciones criptográficas.
	- La descripción de los mensajes se basa en ASN.1.
	- Los valores generados serán codificados en BER.
- **Estandar PKCS#12**: define una sintaxis para le intercambio de información personal que permite guardar múltiples objetos criptográficos en un mismo archivo.

## Almacenamiento de certificados en ficheros
Las codificaciones se almacenan en ficheros con diversas extensiones:
- Sin incluir clave privada:
	- DER (certificado codificado en archivo) → .cer, .der, .crt
	- PKCS#7 → .p7b
	- BASE64 → .cer, .pem
- Incluyendo la clave privada:
	- PKCS#12 → .pfx, .p12


Con esto tenéis una idea elemental de certificado.





