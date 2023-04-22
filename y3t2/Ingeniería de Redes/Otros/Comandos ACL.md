*A los servidores web A y mail A debe poder acceder cualquier equipo (empresa e Internet) a los puertos web y smtp. Al resto de puertos de esos equipos sólo accederá el personal de A. A los servidores corporativos A (todos los puertos) sólo puede acceder el personal del edificio A y los empleados de la VLAN 40 del edificio D.*
```
! Puertos específicos (acceso general)
acc 101 permit tcp any host 23.19.24.146 eq smtp
acc 101 permit tcp any host 23.19.24.147 eq www

! Todos los puertos (edificio A)
acc 101 permit ip 23.19.24.0 0.0.0.255 any

! ServCorp desde VLAN40 del edificio D
acc 101 permit ip 23.19.27.0 0.0.0.63 host 23.19.24.148

! APPLY (L0): OUT @ vlan12
int vlan12
ip acc 101 out
```


*Por motivos de seguridad, la compañía desea que los equipos de la sala de invitados del edificio B sólo puedan intercambiar información con los servicios web A, web B (tcp, puerto 80), mail A, mail B, mail C-D (tcp, puerto 25) y con Internet. No deben acceder a ningún otro equipo de la empresa.*
```
acc 102 permit udp any eq bootpc any eq bootps

! ServWebA
acc 102 permit tcp any host 23.19.24.147 eq www

! ServWebB
acc 102 permit tcp any host 23.19.25.67 eq www

! ServMailA
acc 102 permit tcp any host 23.19.24.146 eq smtp

! ServMailB
acc 102 permit tcp any host 23.19.25.66 eq smtp

! ServMailD
acc 102 permit tcp any host 23.19.27.66 eq smtp

! Internet
acc 102 permit ip any 156.35.0.0 0.0.255.255

! APPLY (R5): IN @ g0/1.10
int g0/1.10
ip acc 102 in
```


*Los equipos de la oficina remota en Internet (156.23.UO.0/24) tienen acceso a todos los puertos de los servidores del edificio B. A los servidores corporativos B (todos los puertos) sólo puede acceder el personal de la empresa (23.UO.24.0/22).*
```
! Oficina remota
acc 103 permit ip 156.23.19.0 0.0.0.255 any

! Peronsal de empresa
acc 103 permit ip 23.19.24.0 0.0.0.255 any

! APPLY (R5): OUT @ g0/1.35
int g0/1.35
ip acc 103 out
```

*Las salas de invitados (C-D) solamente tendrán acceso a los servicios web A, web B (tcp, puerto 80), mail A, mail B, mail C-D (tcp, puerto 25) y a Internet.*
```
acc 104 permit udp any eq bootpc any eq bootps

! ServWebA
acc 104 permit tcp any host 23.19.24.147 eq www

! ServWebB
acc 104 permit tcp any host 23.19.25.67 eq www

! ServMailA
acc 104 permit tcp any host 23.19.24.146 eq smtp

! ServMailB
acc 104 permit tcp any host 23.19.25.66 eq smtp

! ServMailD
acc 104 permit tcp any host 23.19.27.66 eq smtp

! Internet
acc 104 permit ip any 156.35.0.0 0.0.255.255

! APPLY (R6): IN @ g0/0.20, g0/1.10
int g0/0.20
ip acc 104 in
int g0/1.10
ip acc 104 in
```


*Las salas de trabajo del personal de la empresa (C-D) no tienen acceso a Internet ni conexión con ningún PC de la red empresarial. Sólo pueden acceder a la sala de servidores C-D y a los servidores web y mail de la empresa (web A, web B, mail A, mail B, mail C-D).*
```
acc 106 permit udp any eq bootpc any eq bootps

! Servidores C-D (incluye ServMailD)
acc 106 permit ip any 23.19.27.64 0.0.0.15

! ServWebA
acc 106 permit tcp any host 23.19.24.147 eq www

! ServWebB
acc 106 permit tcp any host 23.19.25.67 eq www

! ServMailA
acc 106 permit tcp any host 23.19.24.146 eq smtp

! ServMailB
acc 106 permit tcp any host 23.19.25.66 eq smtp

! APPLY (R6): IN @ g0/0.35, g0/1.40
int g0/0.35
ip acc 106 in
int g0/1.40
ip acc 106 in
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

! APPLY (R6): OUT @ g0/0.10
int g0/0.10
ip acc 108 out
```