![[_resources/2_JSF.pdf]]

> [!info] Definción
> Es un framework construido sobre JSP para facilitar el desarrollo de interfaces de usuario.

---

Una de las ventajas de JSF es que se puede ampliar con librerías: *RichFaces, jQuery4jsf, PrimeFaces...*
Se lanzó en 2004, pero se hizo más popular tras soportar HTML5 y WebSockets.

## Novedades
- Nuevas etiquetas: `<h:...>`, `<f:...>
- Fichero descriptor web (`web.xml`)
- Fichero de recursos y reglas de navegación (`faces-config.xml`)
- Managed Beans para proporcionar atributos y funciones a la presentación.

## Navegación
![[_resources/Pasted image 20230919163026.png]]

```xml
<navigatin-rule>
	<from−view−id>/index.xhtml</from−view−id>
	<navigation−case>
		<from−outcome>alta</from−outcome>
		<to−view−id>/alta.xhtml</to−view−id>
	</navigation−case>
</navigation−rule>

<navigation−rule>
	<from−view−i d>∗</from−view−id>
	<navigation−case>
		<from−outcome>error</from−outcome>
		<to−view−id>/error</to−view−id>
	</navigation−case>
</navigation-rule>
```

## Ciclo de vida
![[_resources/Pasted image 20230919163323.png]]

1. La vista que tiene el cliente. Se recrea en memoria.
2. Se extraen los valores de la vista a unas variables locales.
3. Se validan los datos y, en caso de que no sean válidos, se recrea la vista con los mensajes de errores.
4. Se actualizan los datos validados en el objeto Bean
5. Se llama al método del controlador que responde a la acción
6. El controlador le da la respuesta al cliente (típicamente una nueva vista)

## Beans
> [!info] Definición
> Componente software reutilizable para proveer atributos y comportamiento.

> [!info] Bean gestionado
> Bean auto gestionado por el JSF que se utiliza para proveer a las vistas xhtml de atributos y métodos.


## Registro
Mediante la tag `@ManagedBean` o mediante `faces-config.xml`.

## Ámbitos
- Request
- Session
- Application
- View (debe implementar `Serializable`)