# Estándar DSS
> [!info] Digital Signature Standard
> Propuesto por el NIST, utiliza el algoritmo DSA (pero también soporta RSA y ECDSA).


## Generación de claves
- **Fase 1:** elección de los parámetros del algoritmo DSA que tienen que ser compartidos por todos los usuarios de un dominio.
	- La realiza el administrador para todos los usuarios.
- **Fase 2:** Cálculo de una pareja de claves (privada y pública) para cada uno de los usuarios.
	- La realiza cada usuario.

### Fase 1. Generación de parámetros
1. Elegir una función de hash H aprobada por el estándar DSS.
	- Se usa SHA-2.
2. Elegir la longitud de los parámetros $L$ y $N$.
3. Elegir el parámetro $p$, de $L$ bits.
4. Eleigr el parámetro $q$, de $N$ bits y divisor de $(p-1)$.
5. Elegir el parámetro $g$, generador de orden $q$ del grupo $p$ ($1<g<p$)
	- $g=\beta^{p-1)/q}\space mod\space p$
	- $\beta$ tal que $1<\beta<p-1$

### Fase 2. Generación de claves
1. Se elige una clave secreta $X$ con un buen método de generación de aleatorios.
2. Calcular la clave pública $Y$ ($Y=g^X\space mod\space p$)

## Firma de mensajes
1. Generar un secreto $K$ **para cada mensaje**. ($1\le K\le q-1$)
2. Calcular $r=(g^K mod\space p)\space mod\space q$
3. Calcular $s=K^{-1}(z+X\times r))\space mod\space q$
	1. $z$ son los $n$ bits más a la izquierda del hash del mensaje.
	2. $K^{-1}$ es el inverso multiplicativo de K con respecto a la multiplicación en el módulo $q$.
4. Re-calcular la firma en el caso improbable de que $r=0$ o $s=0$.

## Verificar una firma
Para verificar una firma, son necesarios todos los datos públicos de la misma: $p$, $q$, $g$ e $Y$.

1. Comprobar que $0 < r' < q$ y $0 < s' < q$
2. Calcular $w={s'}^{-1}\space mod\space q$
3. Calcular $u_1=(z\times w)\space mod\space q$
4. Calcular $u_2=(r'\times w)\space mod\space q$
5. Calcular $v=[(g^{u_1}\times Y^{u_2})\space mod\space q]\space mod\space q$

> [!success] Comprobación final
> Si $v=r'$, la firma es válida.
> Si $v\neq r'$, la firma NO es válida.

