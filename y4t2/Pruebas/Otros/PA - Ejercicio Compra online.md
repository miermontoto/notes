**Decisiones**
- existe carrito?
- cliente acepta?

**Situaciones**
- añadir item cando no existe carrito.
- añadir item cuando ya existe carrito.
- el cliente cancela la operación.
- el cliente acepta la operación.

---

## Prof
1. Estado del cliente
	1. Es cliente
	2. NO es aún cliente (<mark style="background: #FF5582A6;">I</mark>)
2. Número de ítems que se añaden
	1. 1
	2. Más de uno
	3. Cero (<mark style="background: #FF5582A6;">I</mark>)
	4. Negativo (<mark style="background: #FF5582A6;">I</mark>)
3. Qué item se añade al carrito
	1. Item a la venta
	2. Item no disponible / agotado (<mark style="background: #FF5582A6;">I</mark>)
4. Estado del carrito
	1. Carrito no creado
	2. Carrito creado
5. Confirmación del pedido
	1. El cliente acepta el pedido y continúa con la transacción
	2. El cliente cancela el pedido