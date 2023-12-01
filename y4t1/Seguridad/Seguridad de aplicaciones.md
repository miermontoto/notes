## Manejo de los datos de entrada
Fallo de seguridad común.



### Desbordamiento de búfer
Se produce cuando un proceso sobrepasa el límite del búfer sobreescribiendo las posiciones de memoria siguientes.

Las posiciones de memoria pueden contener variables, punteros, direcciones de retorno...
Se pueden corromper datos, realizar violaciones de acceos a memoria, core dumps o incluso ejecutar código malicioso.

#### Shellcode
Código máquina del atacante que se ejecuta al 