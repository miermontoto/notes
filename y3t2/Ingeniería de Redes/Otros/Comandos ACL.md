*A los servidores web A y mail A debe poder acceder cualquier equipo (empresa e Internet) a los puertos web y smtp. Al resto de puertos de esos equipos sólo accederá el personal de A. A los servidores corporativos A (todos los puertos) sólo puede acceder el personal del edificio A y los empleados de la VLAN 40 del edificio D.*
```
acc 101 permit tcp any host 23.19.24.146 eq smtp
acc 101 permit tcp any host 23.19.24.147 eq www
acc 101 permit ip 23.19.24.0 0.0.0.255 host 23.19.24.148
acc 101 permit ip 23.19.24.0 0.0.0.255 23.19.24.144 0.0.0.15
```
OUT en g1/0/1

*Por motivos de seguridad, la compañía desea que los equipos de la sala de invitados del edificio B sólo puedan intercambiar información con los servicios web A, web B (tcp, puerto 80), mail A, mail B, mail C-D (tcp, puerto 25) y con Internet. No deben acceder a ningún otro equipo de la empresa. A los servidores corporativos B (todos los puertos) sólo puede acceder el personal de la empresa (23.UO.24.0/22).*
```
acc 102 permit edp any eq bootpc any eq bootps
acc 102 permit tcp 10.23.19.0 0.0.0.255 host 23.19.24.147 eq www
acc 102 permit tcp 10.23.19.0 0.0.0.255 host 23.19.25.67 eq www
acc 102 permit tcp 10.23.19.0 0.0.0.255 host 23.19.24.146 eq smtp
acc 102 permit tcp 10.23.19.0 0.0.0.255 host 23.19.25.66 eq smtp
acc 102 permit tcp 10.23.19.0 0.0.0.255 host 23.19.27.66 eq smtp
acc 102 permit tcp 10.23.19.0 0.0.0.255 156.35.0.0 0.0.255.255
acc 102 deny ip 10.23.19.0 0.0.0.255 any
```
IN en g0/1

*Los equipos de la oficina remota en Internet (156.23.UO.0/24) tienen acceso a todos los puertos de los servidores del edificio B.*
```
acc 103 permit edp any eq bootpc any eq bootps
acc 103 permit ip 156.23.19.0 0.0.0.255 23.19.25.64 0.0.0.63
```
IN en g0/2

*Las salas de invitados solamente tendrán acceso a los servicios web A, web B (tcp, puerto 80), mail A, mail B, mail C-D (tcp, puerto 25) y a Internet.*
```
acc 104 permit edp any bootpc any eq bootps
acc 105 permit edp any bootpc any eq bootps
acc 104 permit tcp 10.23.19.0 0.0.0.65 host 23.19.24.147 eq www
acc 105 permit tcp 10.23.19.64 0.0.0.15 host 23.19.24.147 eq www
acc 104 permit tcp 10.23.19.0 0.0.0.65 host 23.19.25.67 eq www
acc 105 permit tcp 10.23.19.64 0.0.0.15 host 23.19.25.67 eq www
acc 104 permit tcp 10.23.19.0 0.0.0.65 host 23.19.24.146 eq smtp
acc 105 permit tcp 10.23.19.64 0.0.0.15 host 23.19.24.146 eq smtp
acc 104 permit tcp 10.23.19.0 0.0.0.65 host 23.19.25.66 eq smtp
acc 105 permit tcp 10.23.19.64 0.0.0.15 host 23.19.25.66 eq smtp
acc 104 permit tcp 10.23.19.0 0.0.0.65 host 23.19.27.66 eq smtp
acc 105 permit tcp 10.23.19.64 0.0.0.15 host 23.19.27.66 eq smtp
```

*Las salas de trabajo del personal de la empresa no tienen acceso a Internet ni conexión con ningún PC de la red empresarial. Sólo pueden acceder a la sala de servidores C-D y a los servidores web y mail de la empresa (web A, web B, mail A, mail B, mail C-D).*
```
acc 
```