![[_resources/CifradoSimetrico.pdf]]

---

# Definiciones
> [!info] Criptografía
> Ciencia que estudia las técnicas empleadas para encriptar la información.

> [!info] Criptoanálisis
> Ciencia que estudia herramientas y técnicas para romper los sistemas de cifrado definidos por la criptografía.

> [!info] Criptología
> Ciencia que desarrolla sistemas para cifrar la información y para desbaratarlos

# Funcionamiento
![[_resources/Pasted image 20230921173225.png]]

# Tipos de sistemas criptográficos
# Criptografía simétrica
Utilizan la misma clave para cifrar y descifrar.

<mark style="background: #BBFABBA6;">Ventaja:</mark> elevada velocidad de cifrado
<mark style="background: #FF5582A6;">Desventaja:</mark> gestión de claves

## Simétricos de flujo
Combina los dígitos de texto plano con una serie pseudoaleatoria de dígitos de cifrado (*keystream*), típicamente mediante una operación XOR.
En la práctica, los dígitos son bits o bytes.

![[_resources/Pasted image 20230921173515.png]]

### Cifradores de flujo síncronos
El keystream se genera independientemente del texto plano y el cifrado, y se combina con el plano para cifrar y el cifrado para descifrar.

El transmisor y el receptor deben estar perfectamente sincronizados para que el proceso de descifrado sea correcto.

## Cifradores de flujo auto-sincronizable
Usan varios de los N dígitos del texto cifrado previamente para generar la serie de dígitos de cifrado (keystream).

 El receptor se sincroniza automáticamente con el transmisor después de recibir N dígitos del texto cifrado.

## Simétricos de bloque
Un cifrador de bloques (*block cipher*) trabaja con grupos de bits de longitud fija (bloques). Transforma N bits de texto plano en N bits de texto cifrado.

***PERO*** tras dividir un texto plano en bloques, el cifrado se puede realizar:
- de modo independiente para cada bloque.
- de modo que el cifrado de unos bloques afecte el cifrado de otros.

#### Modos de funcionamiento
- **ECB** *Electronic CodeBook*: cada bloque se cifra con la key de forma independiente del resto de bloques.
- **CBC** *Cipher Block Chaining*: antes de encriptar cada bloque, se le hace una operación XOR con el bloque cifrado previo.
- **CFB** *Cipher FeedBack*: similar a un cifrador de flujo auto-sincronizable.
- **OFB** *Output FeedBack*: similar a un cifrador de flujo síncrono.

 En **CFB** y **OFB** cada bloque es un dígito. 

## Visión de algoritmos criptográficos simétricos
![[_resources/Pasted image 20230921174240.png]]

### AES
- Adoptado como estándar por el gobierno federal estadounidense.
- Cifrador/descifrador simétrico que trabaja con bloques de 128 bits.
- Tamaños de clave posible: 128, 192, 256.
- Principio de diseño: red de sustitución - permutación.

#### Vista general
![[_resources/Pasted image 20230921174357.png]]

**Al encriptar:** ![[_resources/Pasted image 20230921175505.png]]
**Al desencriptar, el orden inverso:** ![[_resources/Pasted image 20230921175530.png]]
##### Ronda inicial
![[_resources/Pasted image 20230921174648.png]]
![[_resources/Pasted image 20230921174713.png]]

##### Ronda intermedia
- **Byte_Sub**: se suma a cada bit por cifrar una cantidad fija para introducir confusión
- **Shift_Row**: se dispersa el mensaje para introducir difusión.
- **Mix_Columns**: se intercambian las columnas para introducir aún más difusión.
- **Add_Round_Key**: se hace la misma operación que en la ronda inicial.

