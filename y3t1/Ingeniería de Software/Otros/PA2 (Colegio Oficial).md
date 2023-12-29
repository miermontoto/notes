
- **Autor**: Juan Francisco Mier Montoto
- **Entrega**: 30-11-2022
- **Asignatura**: Ingeniería del Software, EPI Gijón

<div style="page-break-after: always;"></div>

## Índice
- [[#Diagrama de despliegue]]
- [[#Transformación a tablas]]

<div style="page-break-after: always;"></div>

## Diagrama de despliegue
![[_resources/PA2 2022-11-30 11.28.16.excalidraw]]



<div style="page-break-after: always;"></div>

## Transformación a tablas
La transformación a tablas sigue con el diagrama entregado en la primera entrega de prácticas de aula.

| Curso    |           |        |           |              |        |
| -------- | --------- | ------ | --------- | ------------ | ------ |
| @idCurso | Objetivos | Nombre | Contenido | Localización | Fechas |

| Sesión    |       |      |                |
| --------- | ----- | ---- | -------------- |
| Fecha | Hora | <u>@idCurso</u> | <u>@códigoSala</u> |

| Sala        |     |
| ----------- | --- |
| @códigoSala | Localización    |

| Acuerdo         |                    |              |        |     |
| --------------- | ------------------ | ------------ | ------ | --- |
| <u>@idCurso</u> | <u>@idProfesor</u> | Remuneración | Estado | Factura    |

| Profesor    |        |     |
| ----------- | ------ | --- |
| @idProfesor | Nombre | Apellidos    |

| Inscripción         |                 |        |     |
| ------------------- | --------------- | ------ | --- |
| <u>@idColectivo</u> | <u>@idCurso</u> | Precio | Fechas |

| Pago             |                                 |                             |         |     |
| ---------------- | ------------------------------- | --------------------------- | ------- | --- |
| <u>@idAlumno</u> | <u>@idInscripción_Colectivo</u> | <u>@idInscripción_Curso</u> | Estados | Datos tarjeta

| Alumno    |                    |        |           |       |
| --------- | ------------------ | ------ | --------- | ----- |
| @idAlumno | <u>idColectivo</u> | Nombre | Apellidos | Email | 

| Colectivo    |     | 
| ------------ | --- |
| @idColectivo | Nombre







