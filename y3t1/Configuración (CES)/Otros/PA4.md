### Ejercicio 1.
#### Demandas
$$D_i={U_i\over X}\rightarrow D_{CPU}={0.375\over5}=0.075s,D_{DISCO}={0.4\over5}=0.08s$$

$$S_i={D_i\over V_i}\rightarrow D_{RED}={1250000\times8\over100\times10^6}=0.1\rightarrow D_{RED}={0.1\over5}=0.02s$$

#### Razones de visita
$$V_{RED}=2,V_{DISCO}=V_{RED}+1=3,V_{DISCO}={X_{DISCO}\over X_{SISTEMA}}={20\over5}=4$$

#### Tiempos de servicio
$$S_i={D_i\over V_i}\rightarrow S_{CPU}={0.075\over5}=0.015s,S_{DISCO}={0.08\over4}=0.02s,S_{RED}={0.02\over2}=0.01s$$

#### Probabilidad de visita
$$P_{CPU-RED}={1\over V_{CPU}}={1\over5}=0.2,P_{CPU-DISCO}={V_{DISCO}\over V_{CPU}}={4\over5}=0.8$$

El tiempo de servicio es el tiempo de reflexión que dan en el enunciado.



