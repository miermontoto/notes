

# Arranque del sistema
## Firmware

Es  un software que pone el fabricante del dispositivo muy pequeño. Reside  en una memoria no volátil (ROM) que no se puede modificar. 

De la libertad que otorgue el firmware depende la libertad que se tiene del dispositivo. 


## Pasos 

1. **Firmware libre**: permite modificar el código a ejecutar a continuación. 
2. **Firmware no libre**: el firmware está protegido, firmado, y no permite ejecutar otra cosa que no sea la que ya viene con el dispositivo. 
3. **Botón de encendido**
4. **Ejecución del firmware**: software de arranque grabado en memoria no volátil.
  * NO reside en memoria secundaria, no se puede modificar fácilmente.
  * Está protegido por el fabricante. En algunos dispositivos suele estar además cifrado y controla el arranque de un SO concreto.
  * Abierto/Cerrado: cuando es abierto permite que el software que se ejecute a continuación sea de libre elección.
  * Se puede actualizar.
  * El firmware tipo BIOS está siendo reemplazado por los de tipo UEFI.
    * Proporciona un interfaz gráfico frente al de texto.
    * Necesita dispositivos dcon tabla de particiones tipo GPT.
    * Ejecuta directamente ejecutables tipo EFI.
    * Puede iniciar le SO de forma segura (_Secure Boot_).
    * Puede emular el arranque tradicional BIOS.
5. **Chequeo básico del hardware del equipo:** lo realiza el firmware, no se puede evitar.
6. **Lectura y ejecución del bootloader:** lo realiza el firmware, no se puede evitar.
  * Normalmente permite cargar un SO, pero no tiene que hacerlo necesariamente.
  * Puede ser cualquier código, incluso un virus.
  * En dispositivos cerrados y protegidos, es un código cifrado y firmado.
  * En ordenadores, es libre y programable y no suele estar proporcionado por el fabricante.
    * **Lectura:** depende del tipo de firmware.
      * Con BIOS:
        * Puede estar en el primer sector de todo el disco (MBR) o en el primer sector de cada partición **primaria**.
        * Si hay un bootloader en el M_aster_ B_oot_ R_ecord_, se ejecuta SIEMPRE. Si no existe, se ejecuta el de la partición primaria que tenga el flag de arranque a 1. Como mucho, hay DOS intentos para buscar el bootloader a ejecutar.
        * Usa una tabla de particiones tipo BIOS/MSDOS con máximo 4 particiones primarias o 3 particiones primarias + 1 extendida.
          * Una partición extendida NO tiene formato y NO puede contener archivos. Necesita unidades lógicas.
        * **Gestor de arranque:** software que reemplaza al bootloader que permite cambiar el flag de arranque y buscar bootloader en unidades lógicas de particiones extendidas. Se suele poner en el MBR para que se ejecute siempre. _ej: GRUB_
        * En el caso de tener varios discos de los que arrancar, se escoge el orden en el que se arrancan los discos.


![[Sketch 2-7-2022 2-35 PM.png]]
__

* Con UEFI:
  * Los bootloader se ejecutan en archivos tipo EFI.
  * Todos ellos residen en una partición especial (EFI) formateada con SF tipo FAT32.
  * El firmware lee TODOS los archivos EFI en la partición especial. _El firmware se convierte en el gestor de arranque._
  * El firmware tiene un **orden** de arranque.


![[Sketch 2-7-2022 3-39 PM.png]]


* **Ejecucción**: funciona igual en ambos tipos.
  * Se ejecuta con máximos privilegios.
  * Ejecuta el kernel del SO y le otorga todos los privilegios.



7. **Arranque del sistema operativo:**
  * Se lleva a memoria el kernel del SO.
  * Se realiza la _fase de iniciación_.
    * Comprueba el sistema (hardware y software).
    * Establecer estructuras de datos propias del SO.
    * Inicializa el vector de interrupciones.
    * Carga en memoria el resto de componentes del sistema operativo que han de estar permanentemente en memoria.
      * Al conjunto de componentes que están siempre en memoria se le llama al sistema operativo residente.
    * Crear un proceso de _login_ por cada terminal definida en el sistema.
    * Crear un conjunto de procesos auxiliares y _daemons_.
8. **Parada del sistema operativo**
  * El SO mantiene en memoria principal gran cantidad de información crítica.
  * Es necesario un apagado ordenado para que no se pierda o corrompa información.
  * En el siguiente apagado tras un apagado "brusco", el SO comrpueba si se ha corrompido información crítica.

[Sistemas Operativos (CEX)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzamtjb3FqZ2MzNTZvc2pnYzlvNmRpM2FjaGc2a3BtMmNoaTZ0aDNjZTFoNjVpNmFvcGw2c3MwIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Mon, Feb 7, 2022, 2:00 PM - 4:00 PM
Location:AS-1
Clase Expositiva

[Sistemas Operativos (CEX)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2c3EzZW9waWM0cjY0b3BuY2NvbWFkcG83MHBqMGUxbmNvcTMwYzFsYzhwM2VwMWxjcGlnIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Tue, Feb 8, 2022, 4:00 PM - 5:00 PM
Location:AS-1
Clase Expositiva

_3/4 preguntas de 20_
