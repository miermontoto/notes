![[_resources/CifradoAsimetrico.pdf]]

---

# Funcionamiento
Ambas partes de una comunicación usan ***dos*** claves distintas: una para cifrar y la otra para descifrar.

![[_resources/Pasted image 20230922170338.png]]

# RSA
## Introducción
![[_resources/Pasted image 20230922172129.png]]

## Generación de claves
> [!warning] Tenéis que saberlo
> Se hacen ejercicios de ellos y normalmente cae


![[_resources/Pasted image 20230922171803.png]]

## Cifrado
La clave pública se utiliza para cifrar el mensaje.

Primero hay que convertir las letras de un mensaje a números, que se pueden utilizar en operaciones de exponenciación. ![[_resources/Pasted image 20230922172710.png]]

## Descifrado
La clave privada se utiliza para descifrar el mensaje.

![[_resources/Pasted image 20230922172752.png]]

## Bases de su seguridad
RSA se basa en "funciones unidireccionales con trampa", y su seguridad en "el problema de la factorización" → el cálculo directo es fácil pero el inverso es muy difícil.

## Elección de parámetros
La seguridad de RSA depende de la elección de los parámetros. ![[_resources/Pasted image 20230922174656.png]]

### Elección de `p` y `q`
- Su longitud debe de ser superior a 512 bits.
- Sus longitudes deben diferir en pocos dígitos.
- NO debens er primos muy cercanos.
- $p-1$ y $q-1$ DEBEN tener factores primos grandes
- $mcd(p-1, q-1)$ DEBE ser pequeño.
Estas condiciones se cumplen calculando $p$ y $q$ con los "primos seguros".

### Elección de $e$

## Esquemas de relleno

### OAEP
> [!info] ¿Hay que saber el esquema?
> No. ¿Hay que saber de qué va? Sí.

Es un relleno probabilístico: cada vez que se cifre un bloque, se le añade información aleatoria (probabilística).

![[_resources/Pasted image 20230922173813.png]]

# Diffie-Hellman
Permite el intercambio confidencial de claves entre dos personas que no han tenido contacto previo, usando un canal de comunicación inseguro y de forma anónima.

- Es un protocolo sin autenticación de los intervinientes.
- Constituye la base para otros protocolos con autenticación.
- Constituye el estandar PKCS#3

## Funcionamiento
Por fases:

1. Se coincide en dos números de manera pública (módulo $p$ y generador $g$).
2. Ambas partes eligen sus claves secretas $K_{SA}$(números aleatorios largos)
4. Ambas partes calculan sus claves públicas $K_{PA}=g^{K_{SA}}\space mod\space p$y las envían a la otra parte.
5. Al recibir la clave pública de la otra parte, se calcula la clave secreta común: $K_{SC}={K_{PB}}^{K_{SA}}\space mod\space p$

El resultado final es:$$K_{SC}=g^{K_{SB}K_{SA}}\space mod\space p$$

## Seguridad
El objetivo de un atacante es descubrir ambas claves secretas, ya que $g$ y $p$ son públicamente conocidos.

> [!warning] Vulnerabilidad a brute-force
> El Problema del Logaritmo Discreto (PLD) es computacionalmente intratable si $p$, $g$, $K_{SA}$ y $K_{SB}$ han sido bien elegidos.
> Encontrar las dos claves secretas es resolver el PLD.


- El módulo $p$ debe ser un número primo grande (>1024 bits).
- El generador $g$ debe ser una raíz primitiva del módulo $p$.
- La elección de claves secretas $K_S$ deben ser generadas aleatoriamente de manera correcta.