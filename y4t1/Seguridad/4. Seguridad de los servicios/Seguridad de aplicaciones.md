[[_resources/Seguridad_Aplicaciones.pdf]]

---
## Manejo de los datos de entrada
Fallo de seguridad común.
### Desbordamiento de búfer
Se produce cuando un proceso sobrepasa el límite del búfer sobreescribiendo las posiciones de memoria siguientes.

Las posiciones de memoria pueden contener variables, punteros, direcciones de retorno...
Se pueden corromper datos, realizar violaciones de acceos a memoria, core dumps o incluso ejecutar código malicioso.

#### Shellcode
Código máquina del atacante que se ejecuta al retornar de una función.

- Unix → contiene una llamada a la función `execve()`
- Windows → contiene una llamada a la función `system()`

**Características**
1. Código máquina específico para un procesador y un SO
2. Su desarrollo requiere conocer: ensamblador + funcionamiento del sistema

- Debe ser independiente de la posición ← no se sabe dónde se va a cargar
- NO puede contener un `null` ← se terminaría el buffer

*tobogán NOP:* se utiliza para no tener que acertar de forma exacta la posición inicial de la rutina del shellcode.

#### Defensas
- **Compile-time defense**: elección del lenguaje de programación, técnicas de codificación seguras (acciones corporativas, acciones individuales), extensiones del lenguaje y uso de bibliotecas seguras, mecanismos de protección de la pila
- **Execution-time defense:** protección del espacio de direcciones ejecutable, hacer aleatorio el espacio de direcciones, páginas de protección

## Inyección de código SQL
Inserción de una consulta SQL parcial o completa en los datos proporcionados por una aplicación a un gestor de bases de datos.

### Causas
- Gestión incorrecta de caracteres de escape
- Manejo incorrecto de tipos


### Posibles ataques
- Ataque a ciegas
	- Técnicas de inferencia: se construye poco a poco información mediante preguntas consecutivas
	- Técnicas que usan canales alternativos: se obtiene información privilegiada, como nombres de usuario específicos, direcciones....
	- 