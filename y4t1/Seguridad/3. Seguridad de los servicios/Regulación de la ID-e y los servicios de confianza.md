![[_resources/Regulacion IDelectronica y ACs.pdf]]

---

# Contexto
![[_resources/Pasted image 20231019150907.png]]

## Leyes iniciales
![[_resources/Pasted image 20231019150934.png]]

# Directiva 1999/93
## Definiciones
![[_resources/Pasted image 20231019151005.png]]


## Consecuencias
**2 tipos de firmas**
- Firma electrónica (FE)
- Firma electrónica avanzada (FEA)

**Establecimiento de estándares para las firmas básicas**
- CMS *Cryptographic Message Syntax*
- XML Signature
- PDF Signature

**Establecimiento de estándares para las firmas electrónicas avanzadas**
- CAdES
- XAdES
- PAdES

Cada una referente a los estándares de firmas básicas.
*ADES = Advanced Electronic Signatures*


# Estándares

## CMS (básicas)
![[_resources/Pasted image 20231019151242.png]]

## CAdES
Extensioness del tipo CMS que lo hacen apropiado para las firmas electrónicas avanzadas.

- Gestionada por la ETSI *Instituto Europeo de Normas de Telecomunicaciones*
- El resto de "numerines" no hacen falta sabérselos.
- Indica los siguientes formatos: *-BES, -EPES, -T, -C, -X (varios), -A, -LT*

> [!info] No hay que saber los detalles
>Hay que tener claros los conceptos.


### CAdES-BES
*Basic Electronic Signature*

Contiene:
![[_resources/Pasted image 20231019151542.png]]

### CAdES-EPES
*Explicit Policy Based Electronic Signature*

Contiene el atributo firmado `SigPolicyID` que indica la política de firma que será utilizada para validar la firma electrónica.

### CAdES-T
Alguna de las extensiones anteriores a las que se le añade una estampa o sello de tiempo.


### CAdES-C
CAdES-T a la que se añaden los atributos `complete-certificate-references` y `complete-revocation-references`.

- `complete-certificate-references`: contiene referencias a todos los certificados de la cadena de certificación.
- `complete-revocation-references`: contiene referencias a las CRLs y/o respuestas de OCSP para todos los certificados.

### CAdES-X
CAdES-C a la que se le añaden los atributos `certificate-values` y `revocation-values`.

Toda la información necesaria para la verificación queda directamente incluida en la firma electrónica.
Tiene tipos 1 y 2 donde se añaden cada vez más información sobre el sello de tiempo-

### CAdES-A y CAdES-LT
Completan todo.

## Perfiles CAdES
Especifica múltiples formatos para FEA basados en CMS.

> [!error] Hay que sabérselos!

![[_resources/Pasted image 20231019152502.png]]

Cada nivel usa requsitos de nivel anterior y añade uno nuevo.
- CAdES-B: FE CAdES-BES o -EPES que incluye algunos atributos.
- CAdES-T: FE que cumple CAdES-B a la que se le añade marca/sello de tiempo.
- CAdES-LT: cumple el nivel -T y se le añade estampas de tiempo y validación para conseguir el *Long Term*.
- CAdES-LTA: cumple el nivel -LT y se le añaden uno o más atributos `archive-time-stamp-v3`. 

![[_resources/Pasted image 20231019152801.png]]

# Firmas digitales en PDF
La firmas se *incrustan* en el propio fichero. Cada firma incrustada se asocia con un manejador (*signature handler*). El certificado del firmante se incrusta en el PDF + info adicional (imagen, sello de tiempo...)

**Generación de la firma**

**Validación de la firma**

Soporta actualización incremental del fichero:
![[_resources/Pasted image 20231019153523.png]]

## PAdES
Conjunto de restricciones y extensiones normalizadas por la ETSI.

Lo fundamental es que existen varios perfiles:
- **Basic**: indica cómo incluir en un PDF una firma codificada en PKCS#7.
	- Proporciona soporte para firmas en serie.
	- Opcionalmente, timestamps, certificados, infoRevocación...
- **Enhanced**: indica cómo incluir en un PDF una firma nivel CAdES-B.
- **Long Term**: permite añadir a los formatos -CMS, -BES y -EPES múltiples datos de validación y sellado de tiempo.
- **For XML Content**: requisitos de los formatos XAdES

# Leyes actuales
![[_resources/Pasted image 20231019154818.png]]

Todo esto se denomina *eIDAS* → Electronic Identification And Signature

## Definiciones (eIDAS)
![[_resources/Pasted image 20231019154955.png]]

Se diferencia entre **Firmas** (las crean las personas físicas) y **Sellos** (las crean las personas jurídicas).

## Tipos de firmas
- Electrónica
- Electrónica avanzada (igual que en 1999)
- Electrónica cualificada (avanzada creada en un dispositivo)