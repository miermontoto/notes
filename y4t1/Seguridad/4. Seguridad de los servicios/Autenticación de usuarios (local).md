![[_resources/Autenticacion_Usuarios_Local.pdf]]

---

> [!info] Definición
> Proceso de verificación de una identidad reclamada por una entidad.

**Fases**
1. Fase de identificación
2. Fase de verificación

**Medios**
- Algo que el usuario conoce
- Algo que el usuario posee
- Algo que el usuario es
- Algo que el usuario hace

# Autenticación basada en contraseñas
Para acceder a un sistema...
1. Sistema: pide identificador + contraseña
2. Sistema: compara contraseña proporcionada con contraseña almacenada

## Ataques
### Ataque de diccionario
![[_resources/Pasted image 20231103172556.png]]

### Ataque a una cuenta específica
Seleccionar una cuenta y probar contraseñas hasta descubrir la conrrecta

### Ataque a una contraseña popular
Elegir una contraseña popular y probar todos los identificadores de usuario

### Adivinar la contraseña de un usuario específico
El atacante usa información para construir posibles contraseñas

### Explotar los errores del usuario
Anotarla en papel, compartirla, revelarla

### Explotar el uso múltiple de una misma contraseña
Al vulnerarse la contraseña de un usuario en algún servicio, se explota y aprovecha en otros servicios.


## Elección de contraseñas seguras
> [!error] Problemas
> 1. La longitud de las contraseñas debe ser razonable
> 2. Las contraseñas no deben adivinarse fácilmente

> [!success] Técnicas básicas
> - Educación del usuario: *concienciar y directrices*
> - Generación de contraseñas por computador: *el sistema ejecuta su propio comprobador periódicamente*
> - Comprobación de contraseñas reactiva y proactiva: *el sistema selecciona si las contraseñas son aceptables.*


# Autenticación basada en token
1. Hardware
2. Software
3. Tarjeta inteligente

**Conectividad con el computador**
1. Sin conexión
2. Con conexión

**Métodos de autenticación**
- Contraseña estática
- Contraseña dinámica
- Desafío-Respuesta

> [!warning] Sección de tarjetas missing
> Poco relevante


# Autenticación biométrica
> [!info] Biometría
> Identificar a un individuo basándose en sus características físicas.

- *Características estáticas*
- *Características dinámicas*

**Fases**
1. Inscripción
2. Verificación
3. Identificación