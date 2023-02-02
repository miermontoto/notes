## Paradigmas
- **Mutable**: adaptar la infraestructura existente
	- <mark style="background: #BBFABBA6;">Ventajas</mark>
		- Enfoque tradicional
	- <mark style="background: #FF5582A6;">Desventajas</mark>
		- Suele mezclarse con cambios manuales
		- Difícil de documentar todos los cambios
		- Infraestructura frágil después de varios cambios
		- Es difícil replicar la infraestructura (ej. pruebas)
- **Inmutable**: se crea nueva infraestructura
	- <mark style="background: #BBFABBA6;">Ventajas</mark>
		- Consistencia y predictibilidad
		- Despliegues atómicos: o se despliega toda la infraestructura o nada
		- Rollbacks sencillos
		- Fácil de replicar
	- <mark style="background: #FF5582A6;">Desventajas</mark>
		- Se requiere un stack de tecnologías de automatización
		- Se requiere gestionar datos (logs, etc)

## Lenguajes
- **Imperativos:** se indican los pasos para conseguir la infraestructura
	- <mark style="background: #BBFABBA6;">Ventajas:</mark> enfoque tradicional con shell scripts.
	- <mark style="background: #FF5582A6;">Desventajas:</mark> no se adapta cuando cambia el estado inicial.
- **Declarativos**: se indica cómo es la infraestructura
	- <mark style="background: #BBFABBA6;">Ventajas:</mark> es intuitivo para IcC
	- <mark style="background: #FF5582A6;">Desventajas:</mark> incita a utilizar las opciones por defecto

# Aprovisionamiento
## Terraform
- Aprovisiona una infraestructura automáticamente
- Lenguaje declarativo
- Multi-cloud
- Cloud agnóstico
- Idempotente
- Plantilla → plan → apply
- Estima costes de la infraestructura
- Sentinel: *policy-as-code*


## Vagrant
- Crea y configura máquinas virtuales
- VagrantFile: se programa en Ruby
- Varios proveedores
	- VirtualBox
	- virt
	- Docker
	- AWS

## Ansible
- Automatiza la configuración de servidores, red, routers, etc
- Configura Windows y Linux
- Necesita Python en todos los servidores
- No requiere agentes: ssh y WinRM
- *Control Node:* servidor que tiene instalado Ansible
- *Managed Node*: servidor que se quiere configurar