
![[_resources/2_JSP.pdf]]

## Definiciones
> [!info] Java Server Pages (JSP)
> Tecnología construida sobre servlets que facilita la creación de páginas webs dinámicas al combinar código HTML con elementos especiales. *Resuelven el problema de salida de los servlets.*

---

## Elementos de JSP
- **Scripting:** permiten insertar código que será ejecutado en el momento de la petición.
	- `<% ... %>` *Scriptlet:* encierra código Java.
	- `<%= ... %>` *Expresión:* accede a valores y los imprime en la web.
	- `<%! ... %>` *Declaración:* declara variables y métodos.
	- `<%-- ... --%>` *Comentario*
- **Directivas:** permiten especificar información acerca de la página que permanece constantes para todas las peticiones.
	- `<%@ page ... %>` permite importar clases, especificar el timpo de respuesta, etc.
	- `<%@ include ... %>` permite incluir otros ficheros antes de que la página sea traducida a servlet.
	- `<%@ taglib ... %>` declara una biblioteca de etiquetas con acciones personalizadas.
- **Acciones:** determinan acciones que ejecutar sobre la información que se requiere en la petición.
	- `<jsp:useBean>` permite utilizar un Bean.
	- `<jsp:getProperty>`, `<jsp:setProperty>` modifica la propiedad de un Bean.
	- `<jsp:include>` Incluye la respuesta de un servlet o página JSP.
	- `<jsp:forward>` redirige a otro servlet o página JSP.
	- `<jsp:param>` envía un parámetro a una petición redirigida.