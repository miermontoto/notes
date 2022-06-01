---

Created at 2022-03-28T11:04:23+02:00
Last updated at 2022-03-28T11:09:09+02:00

Tagged: #1.-Intro-a-los-SO

---

# Definiciones (ON → EN)
## Sistema informático / sistema de computación: 

Un sistema informático consta de 3 componentes: 

1. **Hardware** (componentes físicos), incluyendo periféricos. 
2. **Software** (todo lo que se ejecuta) 
  * Programas de aplicación (usuarios) 
3. Software de sistemas. 
  **Programas de sistemas**: software cercano al hardware, que se maneja a bajo nivel. 
  **Sistema operativos**. 
  
4. **Usuarios**: personas que se identifican individualmente ante el SO. 

**A mayor abstracción, mayor facilidad para implementar o utilizar.** 

## Sistema operativo 

Programa  que controla la ejecución de los programas de aplicación y que actúa  como interfaz entre el usuario del computador y hardware del mismo. 

Es el único software del ordenador que lo controla todo, lo que le otorga la seguridad distintiva de los SOs. 
Sin considerar el firmware, el primer software que se ejecuta es el SO. 
Cualquier programa que se ejecuta pasa por el SO. 
El SO se ejecuta en todo momento. 
El SO no está cargado completamente en memoria permanentemente, sino su kernel, una parte mínima necesaria para mantener el control en todo momento. 

## Tipos de usuarios de un SO 

1. Usuario de nivel comandos y/o aplicaciones (CLI/GUI) 
2. Usuario programador 
  * Utilidades (compiladores, depuradores, etc.) 
  * Lenguajes de programación (y librerías) 
  * **Librería de Llamadas al sistema** 
    * Interfaz entre los procesos y el SO. 
    * Sirven para solicitar servicios del SO. 
    * Se ejecutan con máximos privilegios. 
    * Está abajo del todo en la jerarquía de librerías, es la librería CON MÍNIMO NIVEL. 
3. Diseñador/implementador del sistema operativo
