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

## Modelo organizativo
- Distintos kernels se pueden ejecutar simultáneamente.
- El kernel es ejecutado por hilos. Los hilos ejecutan el mismo código sobre diferentes datos basándose en su id.
- Los hilos se agrupan en bloques.
- Los hilos del mismo bloque pueden **sincronizarse** y **compartir** datos.
- Los bloques no pueden sincronizarse entre sí: se ejeuctan en cualquier orden, secuencial o paralelo.
- <u>Los kernels son asíncronos respecto a la CPU (retorno inmediato del control).</u>
- Los kernels del mismo strema no comienzan so ejecución hasta que no hayan finalizado todas las llamadas CUDA anteriores.
- Los kernels no finalizan hasta que finalizan todos sus hilos.

- En CUDA, se usan grids o bloques 2D en lugar de almacenar y operar con los datos en 1D.
	- La manera de separar matrices en bloques y estos bloques en hilos funciona mejor con matrices y tensores que con vectores: se utilizan más cores, por lo que es más rápido.
	- La localidad en GPU es igual de importante que en CPU, aunque se entiende de otra manera.

### Jerarquía de memoria
- Los hilos CUDA pueden acceder a los datos desde múltiples espacios de memoria durante su ejecución.
- Cada hilo tiene su memoria local privada. Todos tienen acceso a la memoria global.
- Cada bloque de hilos tiene su espacio de memoria compartida (*shared*) entre hilos de un mismo bloque.
- Las GPUs tienen cachés L1 y L2. La L1 comparte espacio con la shared.
- Las memorias de texturas y constantes son espacios de memoria adicionales accesibles a todos los hilos.
- Los espacios de memoria global, texturas y constantes tienen el mismo ciclo de vida que la aplicación.

## Modelo de programación
- GPU → GPC → SM → Core CUDA
- Bloque → Warp → Hilo
- Dato → Hilo

- Cada hilo que ejecuta el kernel recibe un *id*.
- Existe, o puede existir, una relación entre el dato y el *id*.
- A este *id* se accede dentro del kernel a través de variables intrínsecas (`threadIdx`)


### Control de errores
En CUDA no se devuelven ni se lanzan errores.
`cudaGetLastError()` almacena el último error lanzado por la GPU.

### Eventos
Puesto que las llamadas al kernel son asíncronas, se puede utilizar `cudaDevideSyncrhonize()` o `cudaMemcpy()` que son síncronas para evitar devolver el control a la CPU.

Pero también se pueden utilizar eventos: `cudaEvent_t` → `cudaEventCreate()` → `cudaEventRecord()` → `cudaEventSynchronize()` → `cudaEventElapsedTime()` → `cudaEventDestroy()`.

### Reserva de memoria
- **Para reservar:** `cudaMalloc()`, `cudaMallocPitch()`, `cudaMalloc3D()`, `cudaMallocHost()`.
- **Para liberar:** `cudaFree()`, `cudaFreeHost()`.
- **Para inicializar:** `cudaMemset()`.
- **Para copiar:** `cudaMemcpy()`, `cudaMemcpyAsync()`.
	- Hay que indicar el tipo: *DeviceToDevice*, *DeviceToHost*, *HostToDevice*, *HostToHost, *Default*...
- **Para prebuscar:** `cudaMemPrefetchAsync()`...

#### Ejemplo clásico
```C
int main() {
	double *Host_Mat, *Device_Mat;
	int size = m*n*sizeof(double);

	Host_Mat = (double *) calloc (size);
	cudaMalloc = ((void **) &Device_Mat, size);

	cudaMemcpy(Device_Mat, Host_Mat, size, cudaMemcpyHostToDevice);
	// trabajo en CPU y GPU
	cudaMemcpy(Host_Mat, Device_Mat, size, cudaMemcpyDeviceToHost);

	cudaFree(Device_Mat);
	free(Host_Mat);
}
```

### Pinned memory
`cudaHostALloc(void ** ptr, size_t size, unsigned int flag);

Reserva memoria en la RAM del host y accesible a la GPU.
- Es de tipo page-locked, que acelera las transferencias de información.
- Su uso excesivo puede degradar el rendimiento.
- Tiene limitaciones y problemas de estabilidad si no se utiliza correctamente.

```C
float *a;
float *d_a;

cudaHostAlloc((void **) &a, vytes, cudaHostAllocMapped);
cudahostGetDevicePointer((void **) &d_a, (void *) a, 0);
kernel<<<...>>>(..., d_a);
```

#### Ejemplo clásico II
```C
int main() {
	double *Host_Mat, *Device_Mat;
	int size = m*n*sizeof(double);

	cudaHostAlloc((void **) &Host_Mat, size, cudaHostAllocMapped);
	cudaHostGetDevicePointer((void **) &Device_Mat, (void *) Host_Map, 0);

	cudaMemcpy(Device_Mat, Host_Mat, size, cudaMemcpyHostToDevice);
	// trabajo en CPU y GPU
	cudaMemcpy(Host_Mat, Device_Mat, size, cudaMemcpyDeviceToHost);

	cudaFreeHost(Host_Mat);
}
```

### Unified memory
`cudaMallocManaged(void** devPtr, size_t size, unsigned int flag)`

La reserva se hace en cualquier memoria, accesible por la GPU y la CPU.
- Las transferencias son invisibles al programador.
- Solían tener problemas en arquitecturas previas, pero ahora merece más la pena que la estructura clásica de memoria.

**Flags:**
- *cudaMemAttachGlobal*: accesible por cualquier strema en cualquier dispositivo.
- *cudaMemAttachHost*: no accesible por dispositivos con attributo *cudaDevAttrConcurrentManagedAccess* con valor 0.

#### Ejemplo clásico III
```C
int main() {
	double *Mat;
	int size = m*n*sizeof(double);

	cudaMallocManaged(&Mat, size);
	// trabajo en CPU y GPU
	cudaDeviceSynchronize();

	cudaFree(Mat);
}
```

### Memoria de constantes
Memorias rápidas preparadas para lectura, no para escritura.
```C
__constant__ double foo[5];
double bar[5] = {1.0, 4.0, 6.0, 4.0, 1.0};
cudaMemcpyToSymbol(foo, bar, sizeof(bar));
```

### Shared memory
Memoria caché compartida a nivel de bloque. `__shared__`

- Está dividia en *bancos* (32), cada banco tiene grupos de palabras de 32 bits. Puede servir dichas parlabras cada 2 ciclos de reloj.
- Si se intenta acceder múltiples veces de manera simultánea al mismo banco se generan *conflictos de acceso* y se produce *serialización* en el acceso.

```C
__global__ void EjemploShared(float* A, float *F, ...) {
	__shared float copia[(256+2)*3];
	int i = blockDim.x * blockIdx.x + threadIdx.x;
	int j = blockDim.y * blockIdx.y;

	// escribir datos a memoria compartida
	copia[threadIdx.x + 2] = A[t];
	t += N;
	copia[dim + threadIdx.x + 2] = A[t];
	...
	__syncthreads();
	...
	temp += copia[t] * F[0];
}
```


#### Ejemplo A * x = y
```C
__global__ void MatdotVecSh(double *A, double *x, double *v, int rows, int cols) {
	int j, i=blockIdx.x * blockDim.x + threadIdx.x;
	extern __shared__ double sh_x[];
	double tmp=0.0;
	if (i < rows) {
		if (threadIdx.x == 0) {
			for (j=0; j < cols; j++) { sh_x[j] = x[j]; }
		}
		__syncthreads();
		for (j=0; j < cols; j++) {
			tmp += A[i*cols+j] * sh_x[j];
		}
	}
	v[i] = tmp;
}

int main() {
	dim3 TpBlock (XXX, 1, 1);
	dim3 Nblocks (ZZZ, 1, 1);
	MatdotVecSh<<<Nblocks, TpBlock, n*sizeof(double)>>>(A, x, v, rows, cols);
}
```