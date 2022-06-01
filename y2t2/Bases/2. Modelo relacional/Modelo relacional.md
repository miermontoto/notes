---

Created at 2022-03-03T14:13:18+01:00
Last updated at 2022-03-03T15:40:57+01:00

Tagged: #2.-Modelo-relacional

---

# Modelo relacional
Una base de datos relacional consiste en un conjunto de relaciones que sirve para representar tanto los objetos como las asociaciones entre ellos. SOLO HAY RELACIONES.

Un esquema de relación se compone de:

* Un nombre de relación R (nombre de la tabla)
* Un conjunto de atributos {Ai}
* Un conjunto de n dominios (no necesariamente distitntos) {Dj} donde cada atributo estará definido sobre un dominio.

* Una relación es un conjunto de tuplas .
* Una tupla es un conjunto de pares donde.

* El conjunto de atributos se llama **grado** de la relación.
* El conjunto de tuplas se llama **cardinalidad** de la relación.



# Restricciones inherentes

* Todo son relaciones.
* Una relación no puede tener tuplas duplicadas: clave primaria.
* Cada atributo únicamente puede tomar un valor.
* Un atributo que forme parte de la clave primaria no puede tomar valores nulos.



# Relaciones semánticas I/II

* **Clave primaria:** PRIMARY KEY
* **Unicidad:** UNIQUE (clave candidata)
* **Obligatoriedad:** NOT NULL (atributos no vacíos)
* **Verificación:** CHECK (dominio de un atributo)
* **Clave ajena:** FOREIGN KEY
* **Integridad referencial:** CASCADE, RESTRICT, SET NULL, SET DEFAULT



# Conversión

Cada elemento del modelo E/R se convierte al modelo relacional, resultando un conjunto de tablas que se implementarán directamente en el gestor.


## Notación

* Los atributos que formen parte de la clave primaria (PK) de una tabla llevarán "@" delante.
* Para las claves ajenas (FK) se indicará la tabla a la que hace referencia.
  * Su nombre estará formado por el atributo y la tabla a la que hacen referencia.
  * Es posible que una clave ajena esté formada por más de un atributo.
  * Cada tabla podrá tener entre cero y varias FK.


![[y2t2/Bases/_resources/Modelo_relacional.resources/image.png]]![[y2t2/Bases/_resources/Modelo_relacional.resources/image.1.png]]


## Relaciones

![[y2t2/Bases/_resources/Modelo_relacional.resources/image.2.png]]![[y2t2/Bases/_resources/Modelo_relacional.resources/image.3.png]]![[y2t2/Bases/_resources/Modelo_relacional.resources/image.4.png]]![[y2t2/Bases/_resources/Modelo_relacional.resources/image.5.png]]![[y2t2/Bases/_resources/Modelo_relacional.resources/image.6.png]]

Para N:1:N, la tabla Participa sería `(@DNIIngeniero (FK a Ingeniero), RefProyecto (FK a Proyecto), @codigoCargo (FK a Cargo))`
Para 1:N:N, la tabla Participa sería `(DNIIngeniero (FK a Ingeniero), @RefProtecto (FK a Proyecto), @codigoCargo (FK a Cargo))`
... etc ...


Para 1:N:1, la tabla Participa podría ser `((DNIIngeniero (FK a Ingeniero), @RefProyecto (FK a Proyecto)) (UNIQUE), @codigoCargo (FK a Cargo))` o `(@DNIIngeniero (FK a Ingeniero), (@RefProyecto (FK a Proyecto), codigoCargo (FK a Cargo)) (UNIQUE))`



### Entidad débil

![[y2t2/Bases/_resources/Modelo_relacional.resources/image.7.png]]
NO se genera una tabla para la relación.


### Agregación

![[y2t2/Bases/_resources/Modelo_relacional.resources/image.8.png]]


### Especialización

![[y2t2/Bases/_resources/Modelo_relacional.resources/image.9.png]]


* Si es disjunta, no se repite información.
* Si es solapada, sí que se repite información.

[Bases de Datos (CEX)](https://www.google.com/calendar/event?eid=XzhkOWxjZ3JmZHByNmFzams2MHIzZ29wcDZncmphZGI1Nm9vajZkaG43NG82NGRqMzZkaTZhZTFsNnNzajJwOW42NWhnIHVuZGVyc2NvcmViaXNAbQ)

Date & Time:Thu, Mar 3, 2022, 2:00 PM - 4:00 PM
Location:AS-1
Clase Expositiva


