![[_resources/Tema 4. GPUs-CUDA.pdf]]

---

# Arquitecutra
- FP32: núcleos de procesamiento de cálculo.
- INT32: núcleos de cálculo de direcciones.
- TTC (*3rd gen Tensor Core*): multiplicación y acumulación de matrices.
	- Útiles en Deep Learning.
	- Cada TTC puede realizar 256 FMAs FP16 (*Fused Multiply-Add operations*) por ciclo.

- 8 GPCs (*Graphic Processing Cluster*)
- Cada GPC tiene 8 TPCs (*Texture Processing Cluser*)
- Cada TPC tiene 2 SM (*Streaming Multiprocessor*)
- Cada SM:
	- 64 INT CUDA Cores
	- 64 FP32 CUDA Cores y 32 FP64 CUDA Cores
	- 4 3rd gen Tensor Cores

- No hay saltos predictivos o ejecución especulativa.
- Los hilos se agrupan en bloques de topología 1D, 2D o 3D.
- Cada hilo tiene su propio contador.