### 5_5
El primer parallel no despliega hilos, el segundo sí.

### 6
```c
#pragma omp parallel shared(A) private(B)
{
	#pragma omp task
	{
		int C;
		compute(A,B,C);
	}
}

```
A → shared
B → firstprivate
C → private

### 7
