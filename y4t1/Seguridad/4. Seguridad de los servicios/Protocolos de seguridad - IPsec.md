![[_resources/Protocolo_Seg_IPsec.pdf]]

---

# Combinación de Asociaciones de Seguridad
Una SA individual puede implementar cualquiera de los protocolos AH o ESP pero no ambos.

> [!info] Definición
> Secuencia de SAs a través de la cual se procesa un flujo de tráfico para proporcionarle un conjunto de servicios IPsec deseados.

**Formas de realizar la combinación**
- Adyacencia de transporte: se aplican más de un protocolo de seguridad al mismo paquete IP sin usar túneles.
- Tunelado iterativo: consiste en aplicar múltiples protocolos de seguridad al mismo paquete IP usando túneles sucesivos

**Estrategias de combinación de SAs**
1. **ESP con autenticación = NO combinación**
2. **Adyacencia de transporte = Combinar 2 SAs en modo transporte**
   ![[_resources/Protocolos de seguridad - IPsec 2023-11-02 15.16.47.excalidraw](_resources/Protocolos%20de%20seguridad%20-%20IPsec%202023-11-02%2015.16.47.excalidraw.md)
3. **Combinación Transporte-Túnel**
      ![[_resources/Protocolos de seguridad - IPsec 2023-11-02 15.20.58.excalidraw](_resources/Protocolos%20de%20seguridad%20-%20IPsec%202023-11-02%2015.20.58.excalidraw.md)