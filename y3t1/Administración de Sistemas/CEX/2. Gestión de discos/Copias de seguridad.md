# Introducción

# Backups
## Niveles de backup
### Backup simple
Copiar todo una única vez, y luego, copiar solamente los archivos que fueron modificados después de la copia inicial.
La primera copia se denomina *full backup*.

Para crear una copia completa: `tar --create --file /dev/drive` o `tar -cf /dev/drive`.

 ### Backup incremental


Para crear una copia incremental, se utiliza la flag `--newer` con `tar`.

### Múltiples niveles

## Backup de un servidor RHEL con ReaR
**ReaR** (*Relax and Recover*) es una utilidad de backup. 
Produce una bootable iso y puede restaurar el sistema a partir de esta.
Suele configurarse para que el backup se almacene en un disco montado en red con NFS.

### Creación de un servidor NFS
```sh
...
```

### Uso de ReaR con NFS
```sh
dnf in rear genisoimage syslinux # Instalar los paquetes necesarios (en el servidor remoto)
cat /etc/rear/local.conf # Modificar configuración del servidor remoto.
# ...
read -d -v mkbackup # Se crea el sistema de recouperación.
```

