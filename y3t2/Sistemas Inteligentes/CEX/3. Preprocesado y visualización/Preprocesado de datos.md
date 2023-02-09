![[_resources/T3_Preprocesado.pdf]]

---

# Introducción
## Concepto
<mark style="background: #ADCCFFA6;">Tratamiento de datos para mejorar su calidad (errores, columnas irrelevantes, incongruencias...)</mark>

## Flujo
![[_resources/Preprocesado de datos 2023-02-06 11.19.12.excalidraw]]

# Análisis y limpieza
## Análisis
### Tipos de datos
- Multimedia
- Bases de datos
- Listas, etc

### Relación entre datos

### Volumen de datos
- Tamaño excesivo
- Subconjuntos
- Gestión
- ¿Tiempo real?

### Suficiencia de los datos
- Determinar si son sufcicientes datos.
- A mayor complejidad, mayor cantidad y diversidad de datos requeridas.

## Limpieza
### Errores y valores ausentes

**Desechar columnas irrelevantes.**

### Relación entre variables
- Analizar columnas en busca de correlaciones entre ellas.
- **Métodos:** *Information Gain* o *Correlation-base feature selection*.

# Estandarización y normalización
## Estandarización
### Objetivo


### Método
Escalar los datos buscando <u>media 0 y desviación 1</u>. Distribución gaussiana. $$z={(x-\overline x)\over s}$$
## Normalización
### Objetivo
Todos los datos deben estar en la misma escala (máximo y mínimo)

### Método
Escalar los datos entre 0 y 1. $$z={x-min(x)\over max(x)-min(x)}$$
