### Problema 4
Para tamaños de vector grandes, se dan saltos de N en N con `tid += gridDim.x * blockDim.x`.

### Problema 5
Criba de Erastótenes.

### Problema 6
Si se inicializa ligeramente antes los warps posteriores, no se puede leer la memoria shared que establecen los dos primeros hilos.
Al incluir una barrera explícita, ahora existe ese problema pero a nivel de bloques.
Al intercambiar *i* por `threadIdx.x`, en cada bloque va a haber algún hilo que se encargue de inicializar la memoria compartida.

### Problema 7
Utilizar la memoria compartida para aprovechar la coalescencia es muy beneficioso (d* se lee en orden).
Si no se utilizara shared, cada hilo crearía su propio vector por lo que no se podría invertir el orden del vector correctamente.