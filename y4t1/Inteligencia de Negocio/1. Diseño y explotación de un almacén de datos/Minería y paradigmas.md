![[_resources/T1.pdf]]

---

- **Regresión**: si el resultado forma parte de un conjunto contínuo.
- **Clasificación**: si el resultado forma parte de un conjunto discreto.

# Métodos de minería de datos
## Aprendizaje bayesiano
Se utilizan clasificadores que minimicen el error en base a probabilidades según pesos de alguna característica para obtener una clasificación con la mínima probabilidad de error.

## Aprendizaje basado en instancias
Problemas donde se mantiene toda la base de datos en lugar de escoger un algoritmo de aprendizaje. Se utilizan diferentes atributos para encontrar los vecinos más próximos y decidir sobre la probabilidad que se obtiene.

## Técnicas simbólicas
Favorecen la explicabilidad y atacan directamente problemas basados en atributos.
- **Aprendizaje de reglas:** algoritmos de tipo DyV.
- **Árboles de decisión**: DyV, estructurados jerárquicamente. Cada separación usa una variable y el resultado final puede expresarse en reglas lingüísticas como C4.5.

## Técnicas descriptivas
- **Clustering:** dividir la población en grupos naturales (o clusters). Dependen de la distancia entre los individuos. Pueedn ser jerárquicos o basados en particiones.
- **Reglas de asociación:** 


# Paradigmas
## Aprendizaje supervisado
Los métodos predictivos suelen ser nombrados "aprendizaje supervisado". Descubren la relación entre las variables de entrada.

Los problemas clásicos son la **clasificación** y la **regresión**.

## Aprendizaje no supervisado
Se buscan regularidades, irregularidades, relaciones, similitudes o asociaciones en las entradas.

Además del clustering y las reglas de asociación;
- **Minería de patrones**: patrones frecuentes, patrones infrecuentes/negativos, minería distribuida o incremental
- **Detección de outliers**: detección de anomalías.

## Otros paradigmas
- **Aprendizaje no balanceado:** cuando existe una distribución anómala de los datos.
- **Aprendizaje multi-instancia:** cada ejemplo es una bolsa de instancia.
- **Clasificación multi-etiqueta:** cada instancia tiene múltiples etiquetas.
- **Aprendizaje semi-supervisado:** muy de moda, donde se tiene un conjunto con algunas instancias sin clasificar.
- **Descubrimiento de subgrupos:** consiste en encontrar grupos que tengan propiedades en común aunque no sean mayoritarias.
- **Transfer learning:** reentrenamiento de redes para expandir o modificar un modelo ya existente.
- **Data stream learning:** secuencias de datos, se encuentra para detectar anomalías o cosas que están pasando.