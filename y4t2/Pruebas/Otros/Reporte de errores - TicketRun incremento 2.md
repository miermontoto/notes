*Juan Francisco Mier Montoto, UO283319*

---

## Reporte de fallos
Se detectan cuatro fallos mayoritarios:
1. El fallo que afecta al mayor número de pruebas es la falta del descuento aplicado a inscripciones por clubes del 20% por ciento. Todas las pruebas que comprueban el precio de las inscripciones o la admisión de las propias inscripciones (las pruebas con puntos 1)
2. El siguiente fallo más relevante provoca que no se comprueben las fechas límite de pago, por lo que se puede pagar en cualquier momento después de la inscripción, lo que supone que se puedan pagar incluso después de la competición.
3. Otro fallo del sistema provoca que no se compruebe el estado de las inscripciones existentes al realizar de nuevo una inscripción a la misma carrera con el mismo atleta, lo que provoca que los atletas con inscripciones ANULADAS por cualquier motivo, no puedan volver a inscribirse jamás.
4. El error menos relevante encontrado provoca que, al pagar de menos una inscripción, se actualiza correctamente como ANULADA pero se guarda como totalmente pagada en base de datos, lo que podría generar problemas a la hora de realizar devoluciones o llevar la contabilidad de las competiciones.
<br><br><br><br><br><br>
## Resumen ejecutivo
Durante la ejecución del plan de pruebas, se detectan errores importantes que pueden llegar a impedir el correcto funcionamiento en lo que a la funcionalidad del incremento respecta. Estas incidencias se reportan en la plataforma Jira, y posteriormente son marcadas como "Resueltas", por lo que se supone que el equipo de desarrollo las corrige satisfactoriamente.

En un futuro, la preparación de pruebas de sistema puede evitar este tipo de fallos de planteamiento de la aplicación, ahorrando a todos los interesados en el sistema de competiciones tiempo y, posiblemente, dinero.