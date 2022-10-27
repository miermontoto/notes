# NFS
*Network File System* es un sistema de ficheros que reside en un host remoto y se puede montar de forma local.

## Configuración
Se configura en `/etc/exports` o mediante `exportfs`.

Un host puede indicarse mediante su nombre o dirección IP.

Opciones:
- `ro` → read-only
- `sync` → el servidor no atiende peticiones nuevas hasta que las anteriores hayan sido escritas a disco. *El recíproco es `async`.*
- `wdelay` → se retrasa la escritura si se sospecha que hay una nueva solicitud de escritura. *El recíproco es `no_wdelay`.*
- `root_squash` → los usuarios root de los hosts remotos no tienen privilegios de root en el sistema de archivos. *El recíproco es `no_root_squash`.*

# Samba
Compartición de archivos con Windows.

