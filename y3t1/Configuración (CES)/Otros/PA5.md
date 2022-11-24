### Ejercicio 4.
$${IP_m\over IP_b}={\mu_m\over\mu_b}={1/S_m\over 1/S_b}\rightarrow S_m={IP_b\over IP_m}\times S_b$$


$$\text{CPU: }{IP_m\over IP_b}={\mu_m\over\mu_b}={N_m/S_m\over N_b/S_b}\rightarrow S_m={N_m\times IP_b\over N_b\times IP_m}\times S_b$$
---

$$X\geq{N\over R_{max}+z}={400\over0.16+5}=77.52pet/s$$
$$\mu_m\geq X\times V_i / 0.8$$
$$\mu_{m(CPU)}\geq 77.52\times5/0.8=484.5pet/s$$
$$\mu_{m(disco)}\geq 77.52\times4/0.8=387.6pet/s$$
$$\mu_{m(red)}\geq 77.52\times2/0.8=193.8pet/s$$

---
$$IP_{m(i)}={\mu_{m(i)}\times IP_{b(i)}\over\mu_{b(i)}={1\over S_{b(i)}}}={m(i)}=\mu_{m(i)}\times IP_{b(i)}\times S_{b(i)}$$

$$IP_{m(disco)}=387.6\times102\times0.013=513.95$$
$$IP_{m(red)}=193.8\times1000\times0.02=3875.9$$

Para CPU, se divide entre el número de núcleos:
$$IP_{m(CPU)}={484.5\times175\times0.06\over4}=1271.8$$

---
Se escogen los componentes y se calcula el nuevo tiempo de servicio:
*se ignoran las cantidades al calcular*

$$S_{m(disco)}={102\over180}\times0.013=0.0073s$$
$$S_{m(red)}={1000\over10000}\times0.02=0.002s$$
$$S_{m(CPU)}={8\times175\over4\times690}\times0.06=0.0304s$$

---
**Tiempo de respuesta mínimo (1 usuario) que puede garantizar la configuración seleccionada**
El tiempo de respuesta mínimo supone que no hay colas, por lo que:
$$T_{R(min)}=V_{CPU}*T_{S(CPU)}+V_{RED}*T_{S(RED)}+V_{DISCO}*T_{S(DISCO)}=0.1852$$