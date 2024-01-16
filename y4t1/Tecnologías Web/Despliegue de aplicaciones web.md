[[_resources/TEW2023___15_Despliegue.pdf]]

---

![[_resources/Pasted image 20231213151545.png]]

# Modelos de servidor
- **Servidor independiente del proyecto**
	- El servidor es un producto software independiente del framework
	- El proyecto con el framework se exporta de forma que se le puede dar como un fichero al servidor.
	- El servidor interpreta los ficheros y los sirve.
	- Principalmente utilizado para PHP (Apache, Nginx) y Java (JBoss, Wildfly)
- **Servidor dependiente del proyecto**
	- El proyecto crea un archivo ejecutable que contiene todos los datos del proyecto y además tiene un servidor integrado.
	- El framework integra toda la gestión que tiene que hacer un servidor de aplicaciones.
	- En estos casos, el ejecutable del proyecto se incluye como un servicio en la máquina para que se pueda programar su arranque automático y se gestione la ejecución en segundo plano.
	- Principalmente utilizando para Python y Node.


# Modelos de despliegue
- Barebone
- Máquina virtual
- Contenedor

# Despliegue continuo (CI/CD)
CI → integración contínua
CD → despliegue contínuo

La idea es automatizar toda la ingeriería del proceso del software para generar los productos de forma automática.
Dentro de CI/CD, se automatiza el análisis del código, el testing, la compilación y el despliegue y la monitorización.