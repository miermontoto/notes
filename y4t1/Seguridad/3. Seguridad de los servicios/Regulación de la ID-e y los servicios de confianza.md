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
- CAdES-