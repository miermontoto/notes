

# Visión global de la multiprogramación
### Ejercicio multiprogramación

![[Sketch 2-8-2022 4-54 PM.png](../_resources/Visi%C3%B3n_global_de_la_multiprogramaci%C3%B3n.resources/Sketch%202-8-2022%204-54%20PM.png)


# Explicación



1. El SO inicia su ejecución en modo privilegiado e inicializa todos los vectores de interrupción.
2. Cuando finaliza las operaciones de inicialización, el SO cede el control voluntariamente a un proceso.
3. El proceso P1 usa la CPU en modo usuario hasta que llega una interrupción, que puede ser de ambos tipos.
  * Si se sabe que ningún dispositivo ha enviado una señal de interrupción, no puede ser una interrupción hardware.
4. Se pone la CPU en modo privilegiado, el hw guarda todos los regsitros, la CPU ejecuta automáticamente la rutina de interrupción correspondiente, el SO toma el control.
5. El SO salva el contexto de P1 (otra vez), atiende la interrupción software, ejecuta el servicio solicitado por P1.
  * Al ejecutar el servicio, una llamada al sistema puede acceder a un dispositivo (E/S) o no (no E/S).
6. Suponiendo que hay E/S, el SO marca al proceso P1 que generó la llamada.
7. EL SO da instrucciones al dispositivo para que haga la E/S (suele ser por DMA).
8. El SO debe elegir a otro proceso (que no estén marcados por E/S) para usar la CPU. Se supone P2.
9. El SO restaura el contexto para el proceso P2.
10. El SO ejecuta IRET y la CPU se pone automáticamente en modo usuario y P2 toma la CPU.
11. El proceso P2 usa la CPU en modo usuario hasta que llega una interrupción, que puede ser de ambos tipos.
  * Suponiendo otra vez que no hay señales por parte de dispositivos, y además que es una llamada al sistema.
12. CPU en modo privilegiado, el hw guarda..., el SO toma el control.
13. EL SO salva el contexto de P2, atiende...
  * Se supone que esta vez no hay entrada/salida.
14. No tiene por qué escoger al mismo proceso P2 para volver a ejecutar, aunque sí que podría.
  * Se supone que se vuelve a escoger.
15. El SO restaura el contexto de P2...
16. El dispositivo al que llamó P1 termina la E/S, por lo que envía una señal eléctrica.
17. Se guarda el contexto de P2, se atiende la interrupción hardware.
18. El SO pone a P1 en NO E/S (lo desmarca). _Hay interrupciones hardware que no desmarcan procesos._
19. El SO puede o no poner en ejecución a otro proceso no marcado.
  * En este caso, continúa con P2.
20. Se restaura el contexto de P2, iret, modo usuario, P2 toma la CPU.
21. Ocurre una interrupción de tipo excepción, el SO toma el control, guardo contexto, CPU modo privilegiado.
22. El SO salva el contexto, atiende la interrupción, atiende la excepción.
23. El SO finaliza P2 por error no gestionado.
24. El SO debe elegir a otro proceso no marcado.
25. Restaura el contexto, iret, modo usuario...


_Existe una llamada al sistema sin E/S 'exit' que finaliza el proceso._



### Actividad: Explicación del tiempo compartido utilizando excepciones.

1. El SO incia su ejecución en modo privilegiado e inicizaliza todos los vectores de interrupción.
2. Cuando finaliza las operaciones de inicialización, el SO cede voluntariamente a un proceso.
3. La CPU escoge el proceso P1, pone la CPU en modo usuario, prepara para ejecución y lo ejecuta.
4. Llega una interrupción del reloj, que ejecuta la rutina de interrupción 0, CPU en modo privilegiado, el SO toma el control.
5. El SO calcula la cantidad de tiempo que lleva el proceso en control de la CPU mediante la cantidad de ciclos de reloj y devuelve un simple iret.
6. Suponiendo que P1 no genera ninguna interrupción en su cuanto, el reloj continúa generando interrupciones "simpels" hasta que se supera dicho cuanto.
7. Al terminar el cuanto, se cambia el proceso. Suponiendo una ejecución por turnos, el SO escoge al proceso P2, prepara el contexto, etc.


![[Sketch 2-14-2022 3-53 PM.png](../_resources/Visi%C3%B3n_global_de_la_multiprogramaci%C3%B3n.resources/Sketch%202-14-2022%203-53%20PM.png)
