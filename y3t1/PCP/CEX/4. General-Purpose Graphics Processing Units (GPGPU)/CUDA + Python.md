![[_resources/CUDA Python.pdf]]

---
(numba)

# Introducción
Se basa en decoraciones (`@jit`, `@vectorize`, ...)

`@vectorize(['int64(int64, int64)'], target='cuda')


# Sintaxis CUDA
```python
d_noise = cuda.to_device(noise)
d_t = cuda.to_device(t)
d_pulses = cuda.device_array(shape=(n,), dtype=np.float32) # Datos generados en memoria de GPU, se puede copiar más adelante.

pulses = d_pulses.copy_to_host()
# ---
cuda.atomic_add(global, 0, 1) # incrementar 1 en offset 0 del array "global"
cuda.syncthreads()
cuda.shared.array(4, dtype=types.int32)
```

```python
x, y = cuda.grid(2) # cuda.threadIdx.x + cuda.blockIdx.x * cuda.blockDim.x, ...
blocks = (2, 2)
threadsPerBlock = (2, 2)
kernel[blocks, threadsPerBlock](d_A)
result = d_A.copy_to_host()
```