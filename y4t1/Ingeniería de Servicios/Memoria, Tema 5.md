### Ejercicio 1.
Una vez creado el `index.html`:
```HTML
<html lang="es">
<body>
	<h1><a href="https://mier.info">Prueba de contenido multimedia</a></h1>
	<video src="big_buck_bunny.mp4" controls></video>
</body>
</html>
```

Se lanza la imagen docker mediante el siguiente comando:
```sh

```

Al acceder a `localhost:80`, se accede correctamente a la página web:
![[_resources/Pasted image 20231106143055.png]]

Se puede apreciar mediante las herramientas de desarrollador del navegador que se descargan fragmentos del vídeo según se necesiten, incluyendo cabeceras que especifican el rango de bytes que se descargan:
![[_resources/Pasted image 20231106143441.png]]

#### Modifica ahora la página y utiliza como fuente otro vídeo
