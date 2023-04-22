*A los servidores web A y mail A debe poder acceder cualquier equipo (empresa e Internet) a los puertos web y smtp. Al resto de puertos de esos equipos sólo accederá el personal de A. A los servidores corporativos A (todos los puertos) sólo puede acceder el personal del edificio A y los empleados de la VLAN 40 del edificio D.*
```
! Puertos específicos (acceso general)
acc 101 permit tcp any host 23.19.24.146 eq smtp
acc 101 permit tcp any host 23.19.24.147 eq www

! Todos los puertos (solo personal de A)
acc 101 permit ip 23.19.24.0 0.0.0.255 host 23.19.24.148
acc 101 permit ip 23.19.24.0 0.0.0.255 23.19.24.144 0.0.0.15

! APPLY (L0): OUT @ vlan12
```


*Por motivos de seguridad, la compañía desea que los equipos de la sala de invitados del edificio B sólo puedan intercambiar información con los servicios web A, web B (tcp, puerto 80), mail A, mail B, mail C-D (tcp, puerto 25) y con Internet. No deben acceder a ningún otro equipo de la empresa.*
```
acc 102 permit edp any eq bootpc any eq bootps

! 
acc 102 permit tcp 10.23.19.0 0.0.0.255 host 23.19.24.147 eq www
acc 102 permit tcp 10.23.19.0 0.0.0.255 host 23.19.25.67 eq www
acc 102 permit tcp 10.23.19.0 0.0.0.255 host 23.19.24.146 eq smtp
acc 102 permit tcp 10.23.19.0 0.0.0.255 host 23.19.25.66 eq smtp
acc 102 permit tcp 10.23.19.0 0.0.0.255 host 23.19.27.66 eq smtp
acc 102 permit tcp 10.23.19.0 0.0.0.255 156.35.0.0 0.0.255.255
acc 102 deny ip 10.23.19.0 0.0.0.255 any
```
IN en g0/1

*Los equipos de la oficina remota en Internet (156.23.UO.0/24) tienen acceso a todos los puertos de los servidores del edificio B. A los servidores corporativos B (todos los puertos) sólo puede acceder el personal de la empresa (23.UO.24.0/22).*
```
acc 103 permit edp any eq bootpc any eq bootps

! Oficina remota
acc 103 permit ip 156.23.19.0 0.0.0.255 23.19.25.64 0.0.0.63

! Peronsal de empresa
acc 103 permit ip 23.19.24.0 0.0.0.255 23.19.25.64 0.0.0.63

! APPLY (R5): OUT @ g0/1
```

*Las salas de invitados (C-D) solamente tendrán acceso a los servicios web A, web B (tcp, puerto 80), mail A, mail B, mail C-D (tcp, puerto 25) y a Internet.*
```
acc 104 permit edp any bootpc any eq bootps
acc 105 permit edp any bootpc any eq bootps

! ServWebA
acc 104 permit tcp 10.23.19.0 0.0.0.65 host 23.19.24.147 eq www
acc 105 permit tcp 10.23.19.64 0.0.0.15 host 23.19.24.147 eq www

! ServWebB
acc 104 permit tcp 10.23.19.0 0.0.0.65 host 23.19.25.67 eq www
acc 105 permit tcp 10.23.19.64 0.0.0.15 host 23.19.25.67 eq www

! ServMailA
acc 104 permit tcp 10.23.19.0 0.0.0.65 host 23.19.24.146 eq smtp
acc 105 permit tcp 10.23.19.64 0.0.0.15 host 23.19.24.146 eq smtp

! ServMailB
acc 104 permit tcp 10.23.19.0 0.0.0.65 host 23.19.25.66 eq smtp
acc 105 permit tcp 10.23.19.64 0.0.0.15 host 23.19.25.66 eq smtp

! ServMailD
acc 104 permit tcp 10.23.19.0 0.0.0.65 host 23.19.27.66 eq smtp
acc 105 permit tcp 10.23.19.64 0.0.0.15 host 23.19.27.66 eq smtp

! Internet
acc 104 permit ip 10.23.19.0 0.0.0.65 156.35.0.0 0.0.255.255
acc 105 permit ip 10.23.19.64 0.0.0.15 156.35.0.0 0.0.255.255

! APPLY (R7): 104 -> IN @ g0/0, 105 -> IN @ g0/1
```


*Las salas de trabajo del personal de la empresa no tienen acceso a Internet ni conexión con ningún PC de la red empresarial. Sólo pueden acceder a la sala de servidores C-D y a los servidores web y mail de la empresa (web A, web B, mail A, mail B, mail C-D).*
```
acc 106 permit edp any bootpc any eq bootps
acc 107 permit edp any bootpc any eq bootps

! Servidores C-D (incluye ServMailD)
acc 106 permit ip 23.19.26.0 0.0.0.255 23.19.27.64 0.0.0.15
acc 107 permit ip 23.19.27.0 0.0.0.63 23.19.27.64 0.0.0.15

! ServWebA
acc 106 permit tcp 23.19.26.0 0.0.0.255 host 23.19.24.147 eq www
acc 107 permit tcp 23.19.27.0 0.0.0.63 host 23.19.24.147 eq www

! ServWebB
acc 106 permit tcp 23.19.26.0 0.0.0.255 host 23.19.25.67 eq www
acc 107 permit tcp 23.19.27.0 0.0.0.63 host 23.19.25.67 eq www

! ServMailA
acc 106 permit tcp 23.19.26.0 0.0.0.255 host 23.19.24.146 eq smtp
acc 107 permit tcp 23.19.27.0 0.0.0.63 host 23.19.24.146 eq smtp

! ServMailB
acc 106 permit tcp 23.19.26.0 0.0.0.255 host 23.19.25.66 eq smtp
acc 107 permit tcp 23.19.27.0 0.0.0.63 host 23.19.25.66 eq smtp

! APPLY (R7): 106 -> IN @ g0/0, 107 -> IN @ g0/1
```


*A los servidores corporativos C-D (todos los puertos) puede acceder el personal de esos edificios, el personal de RRHH e ingeniería del Edificio A. y el personal de la oficina remota (156.23.UO.0/24).*
```
! Edificio C
acc 108 permit ip 23.19.26.0 0.0.0.255 host 23.19.27.67
acc 108 permit ip 23.19.26.0 0.0.0.255 host 23.19.27.68

! Edificio D
acc 108 permit ip 23.19.27.0 0.0.0.63 host 23.19.27.67
acc 108 permit ip 23.19.27.0 0.0.0.63 host 23.19.27.68

! Oficina remota
acc 108 permit ip 156.23.19.0 0.0.0.255 host 23.19.27.67
acc 108 permit ip 156.23.19.0 0.0.0.255 host 23.19.27.68

! Salas de invitados C-D
acc 108 permit ip 10.23.19.0 0.0.0.255 host 23.19.27.67
acc 108 permit ip 10.23.19.0 0.0.0.255 host 23.19.27.68

! Departamento de Ingeniería
acc 108 permit ip 10.23.24.0 0.0.0.63 host 23.19.27.67
acc 108 permit ip 10.23.24.0 0.0.0.63 host 23.19.27.68

! Departamento de RRHH
acc 108 permit ip 10.23.24.128 0.0.0.15 host 23.19.27.67
acc 108 permit ip 10.23.24.128 0.0.0.15 host 23.19.27.68

! APPLY (R7): IN @ g0/1
```