## Procedimiento
- Se divide el problema en sub-problemas "grandes" que pueden ejecutarse en paralelo de manera independiente (**bloques de hilos**).
- Se divide cada sub-problema en piezas más finas que se resuelven concurrentemente y cooperativamente (**hilos**).
- Cada bloque de hilos puede ejecutarse en cualquiera de los procesadores disponibles en cualquier orden, simultánea o secuencialmente.
- La *Compute Capability* de una GPU viene definida por su revisión *major.minor*.

## Definición y uso
CUDA es C/C++ más extensiones:
- <u>Calificadores de declaración que especifican lugares o ámbitos.</u>
	- `__global__ void xxx(...)` *kernel*, se ejecuta en la GPU.
	- `__device__ int xxx` variable en la memoria de la GPU.
	- `__shared__ int xxx` variable en memoria compartida dentro del bloque.
- <u>Sintaxis ampliada para la llamada del kernel</u>
	- `kernel<<<a,b,c,d>>>(...)` lanza la ejecución del kernel.
- <u> Nuevos tipos / warpers</u>
	- `dim3` vector de 3 elementos.
- <u>Variables intrínsecas para identificar los hilos en el kernel</u>
	- `threadIdX`, `blockIdx` ID de los hilos y bloques.
	- `blockDim`, `gridDim` dimensiones de los bloques y las *grid*.
- <u>Operaciones intrínsecas dentro del kernel</u>
	- `__syncthreads()` barrera de sincronización dentro del kernel.

### Compilador
El compilador es `nvcc`. Separa los códigos CPU y GPU. Compila en dos etapas:
- **Virtual** genera código PTX (*Parallel Thread eXecution*)
- **Física** genera binarios para ambas partes.