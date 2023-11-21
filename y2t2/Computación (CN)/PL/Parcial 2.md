

# CN PL (parcial 2)
# Práctica 6

## Condicionamiento de sistemas lineales
El número de condición de una matriz A, `cond(A)` , permite saber si la solución de un sistema se verá afectada al realizar una pequeña modificación en los coeficientes.

```MATLAB
% Se declaran las variables.
A = ;
b = ;

condA = cond(A); % se calcula el nmero de condición de A
x = Ab; % solución original

% Se modifican las variables.
_mod

x1 = Ab; % solución modificada
errorPorcentual = norm(x1 - x) / norm(x) * 100; % se calcula el error relativo en porcentaje.
```

## Métodos iterativos para sistemas lineales (Método de Jacobi)
Mediante `jacobi.m`:

```MATLAB
% Se declaran las variables.
A = ;
b = ;
T = ; N = ; % parámetros que se le pasan a la función de Jacobi.

%%% ¿Es aplicable el método?
% A simple vista se comprueba que en la diagonal principal de A no hay
% elementos nulos.
D = diag(diag(A)); % se calcula la matriz diagonal de A.
B = -inv(D) * (A-D); % se calculan la matriz de autovalores de A.

radioEspectral = max(abs(eig(B))); % se calcula el radio espectral de A.
% Se comprueba que el radio espectral de A sea menor que uno.
if(radioEspectral < 1), disp("El radio espectral de la matriz es menor que uno, se puede resolver por Jacobi.")
else, disp("No se puede aplicar el método a esta matriz."), exit, end

%%% Se aplica el método de Jacobi
x = jacobi(A, b, T, N);
```

## Sistemas no lineales (Método de Newton-Raphson)
Con `newton_n.m`:

```MATLAB
% Se declaran las variables.
T = ; N = ; % variables para la función newton_m
syms ...
f1(x,y,...) = ;
f2(x,y,...) = ;
...
f(x,y,...) = [ f1(x,y,...) ; f2(x,y,...) ; ... ];
df = jacobian(f); % Se halla la matriz jacobiana del sistema.

% Se convierten ambas funciones a numéricas.
fNum = matlabFunction(f);
dfNum = matlabFunction(df);

% Se convierten ambas funciones a vectoriales.
fVect = @(z) f(z(1), z(2), ...);
dfVect = @(z) f(z(1), z(2), ...);

res = newton_n(fVect, dfVect, _puntosOrigen, T, N);
```

## Fsolve
```MATLAB
% Se declaran las funciones numéricas.
f1 = @(x,y) ;
f2 = @(x,y) ;
f = @(z) [f1(z(1),z(2));f2(z(1),z(2))];

% Se representan las funciones.
fimplicit(f1, colormap([0 0 0])
hold on, fimplicit(f2, title(’Gr aficas de las elipses’)

p = fsolve(f, _intervalo);
```

# Práctica 7

## Polinomios
Se representan de forma vectorial: `p = [an an−1 · · · a1 a0]`

Comandos:
```MATLAB
polyval(p,t): Evalúa el polinomio p en t.
polyder(p): Deriva el polinomio p.
roots(p): Halla las raíces del polinomio p.
conv(p,q): Multiplica los polinomios p y q.
poly([r1 r2 · · · rn]): Construye el polinomio (x-r1)(x-r2)· · · (x-rn), en formato vectorial.
```


## Interpolación de Lagrange
Tenemos una serie de puntos de formato (x1,y1), (x2,y2), (x3,y3), (x4,y4) y queremos construir un polinomio que pase por todos esos puntos.

Dicho polinomio se puede caluclar utilizando la fórmula de Lagrange:
`p(x) = y1l1(x) + y2l2(x) + · · · + yn+1ln+1(x)`

Para construirlo se utilizan los polinomios de Lagrange (ln):
![[y2t2/Computación (CN)/PL/_resources/image.png]]
Se utiliza `lagrange.m`  para construir la matriz de Lagrange.

~~~MATLAB
x = 0:5, y=[1.1 1.5 2.4 2 3 1]; % datos

L = lagrange(x);
p = y * L;

plot(x,y,'.','markersize',20);
xx = linspace(x(1),x(end));
yy = polyval(p, xx);
hold on, plot(xx, yy);
legend('Nodos', 'Polinomio', 'location', 'northeast');
~~~


### Interpolación como aproximación de una función
Se escogen puntos igualmente espaciados de una función y se hace el algoritmo anterior.

```MATLAB
% Aproximar el xsen(x) en [0,3] con 5 elementos.
% Hallar el error máximo cometido al aproximar f(x) por p(x).
% Representar en el intervalo [0,4].

f = @(x) x.*sin(x); % datos

xi = linspace(0,3,5), y=f(xi);

L = lagrange(xi);
p = y * L;

% Representar
fplot(f,[0 3],’k’)
hold on, fplot(@(x) polyval(p,x),[0 3],’r:’)
legend(’f(x)’,’Polinomio interpolador’,’location’,’south’)
```


### Error cometido
Donde n+1 es el número de nodos y n es el grado del polinomio resultante.
![[y2t2/Computación (CN)/PL/_resources/image.1.png]]
El productorio es un polinomio, que lo vamos a llamar `q(x)`.
Como se quiere acotar el error, se escoge el máximo del error obtenido con la función de arriba, que es el máximo del valor absoluto del productorio por el máximo del valor absoluto de la derivada n+1-ésima de c.

El primer máximo va a ser `K`  y el segundo va a ser `M`.
```MATLAB
% Obtener K
q = poly(x);
fplot(@(x) polyval(q,x), [0 3])
r = roots(polyder(q)); % se obtienen todas las raíces de la derivada de q (máximos/mínimos).
r = [ 0 ; r ; 3 ]; % se añaden los extremos del intervalo al vector columna de posibilidades.

K = max(abs(polyval(q,r))); % se evalúan todas las posibilidades y se escoge la máxima.

% Obtener M
syms x, f_sim(x) = f(x);
f5 = diff(f_sim,5);

fplot(matlabFunction(f5),[0 3]) % se visualiza la derivada.
c = fzero(matlabFunction(diff(f5)), 1); % punto de derivada nula con una aproximación al máximo.
M = double(abs(f5(c)));

% Cota del error
error = K*M / factorial(5)
```


### Nodos de Chebyshev
![[y2t2/Computación (CN)/PL/_resources/image.2.png]]


# Práctica 8

## Interpolación polinómica a trozos
`interp1(x,y,a)` a trozos con funciones polinómicas.
`spline(x,y,a)` a trozos con funciones cúbicas suavizadas.
... donde x e y son los vectores que contienen las coordenadas de los puntos a partir de los cuales se genera la interpolación.


### Interpolación lineal
```MATLAB
% Se declaran los datos.
f=@(x) _func_ ;
x = _vecX_ ; % Coordenadas x de los puntos.
y = f(x); % Coordenadas y de los puntos, se obtienen a partir de la función y de x.

% Se representa la función y la interpolación.
fplot(f, [x(1) x(end)], 'k') % Se representa la función en negrita.
hold on, plot(x,y,'r:') % Se representa la interpolación lineal en rojo con líneas punteadas.
legend('f(x)', 'Interpolación lineal', 'location', 'southwest') % Se inlcuye una leyenda.

% Calcular los errores de aproximar la función por interpolación respecto a la función en sí.
errs = abs(interp1(x,y,_puntos_) - f(_puntos_));
disp(errs)
```


### Interpolación mediante splines
```MATLAB
% Se declaran los datos.
f=@(x) _func_ ;
x = _vecX_ ; % Coordenadas x de los puntos.
y = f(x); % Coordenadas y de los puntos, se obtienen a partir de la función y de x.

% Se representa la función y la interpolación.
fplot(f, [x(1) x(end)], 'k') % Se representa la función en negrita.
hold on, fplot(@(t) spline(x,y,t), [x(1) x(end)], 'b:') % Se representa la interpolación por splines en azul con líneas punteadas.
legend('f(x)', 'Interpolación lineal', 'location', 'southwest') % Se inlcuye una leyenda.

% Se calculan los errores de aproximar la función por interpolación respecto a la función en sí.
errs = abs(spline(x,y,_puntos_) - f(_puntos_)
```


## Ajuste de datos
La mejor recta es la que hace que la suma de los errores cuadráticos sea mínima.
`polyfit(x,y,k)` calcula el ajuste a partir de unos datos con un polinomio de grado 'k' con el menor error posible.

```MATLAB
% Se declaran las variables.
x = _vecX_ ; % Coordenadas x de los puntos.
y = _vecY_ ; % Coordenadas y de los puntos.

% Recta que se ajusta mejor a esos datos con un grado 'k'.
p = polyfit(x,y,k);

% Se representa la recta obtenida frente a los datos.
plot(x, y, '.', 'markersize', '20') % Se representan los puntos.
hold on, fplot(@(n) polyval(p, n), [x(1) x(end)], 'g') % Se representa la recta ajustada en verde.
legend('Datos', 'Ajuste', 'location', 'south') % Se incluye una leyenda.
```


### Ajuste para datos NO polinómicos
```MATLAB
% Se declaran las variables.
x = _vecX_ ; % Coordenadas x de los puntos.
y = _vecY_ ; % Coordenadas y de los puntos.

% Se transforan las variables.
Y = log(y);
p = polyfit(x, Y, k); % Con 'k' siendo el grado.
A = p(1); b = p(2); a = exp(B); b = A; f=@(x) a*exp(b*x);

% Se representa la recta obtenida frente a los datos.
plot(x, y, '.', 'markersize', '20') % Se representan los puntos.
hold on, fplot(@(n) polyval(p, n), [x(1) x(end)], 'g') % Se representa la recta ajustada en verde.
legend('Datos', 'Ajuste', 'location', 'south') % Se incluye una leyenda.
```

Cuando se tienen n+1 puntos, es lo mismo interpolar que ajustar con un grado de n.


# Práctica 9

## Regla del trapecio
```MATLAB
% Utilizando la función trapecio.m
% Es exacta para rectas lineales.
trapecio(f, intervalo(1), intervalo(2));
```


### Cálculo de errores
```MATLAB
% Definición de variables
f = @(x) _func; % Función anónima a integrar.
intervalo = [_ini _fin]; % Intervalo de integración.
integralTrapecio = trapecio(f, intervalo(1), intervalo(2)); % Aproximación por la regla del trapecio.

syms x, f_sim(x) = f(x); % Se pasa a función simbólica para que 'int' pueda trabajar con ella.
integralExacta = double(int(f_sim, intervalo(1), intervalo(2))); % Obtención de la integral exacta.

error = abs(integralTrapecio - integralExacta); % Cálculo del error cometido.
```


## Regla de Simpson
```MATLAB
% Utilizando la función simpson.m
simpson(f, intervalo(1), intervalo(2));
```


### Cálculo de errores




## Reglas compuestas
Trocear la integral deseada en n subintervalos y aplicarle algún método a cada subintervalo.


### Trapecio compuesto
```MATLAB
% Se definen las variables.
f = @(x) _func;
integralTrapecio = trapecio_compuesta(f, intervalo(1), intervalo(2), 20); % Se aplica trapecio compuesta con 20 nodos.

% Se calcula el error cometido.
syms x, f_sim(x) =  f(x); % Se convierte la función a simbólica.
integralExacta = double(int(f_sim, intervalo(1), intervalo(2))); % Se obtiene la integral exacta.
error = abs(integralExacta - integralTrapecio); % Se calcula el error cometido.

% Para la cota del error:
f2 = diff(f_sim, 2); % Se obtiene la derivada segunda.
fplot(matlabFunction(f2), intervalo) % Se representa la segunda derivada.
x0 = fzero(matlabFunction(diff(f2)), _puntoPróximo); % Se obtiene el punto máximo a partir de la representación.
M = max(double(abs(f2([intervalo(1), x0, intervalo(2)]))); % Se obtiene M incluyendo los extremos del intervalo.
nodosMin = ceil(sqrt((intervalo(2) - intervalo(1))^3 * M / 12*epsilon)); % Se calcula la cantidad de nodos mínimos para superar la cota del error.
```

### Simpson compuesto



## Cuadratura gausianna
```MATLAB
% Se declaran las variables.
f = @(x) _func; % Se declara la función como función numérica.
syms x, LX_sim(x) = diff((x^2 - 1)^4, 4)/2^4/factorial(4)M % Se utiliza la fórmula de Rodrigues.
LX = sym2poly(LX_sim);
g = @(x) f((a+b)/2 + (b-a)/2*x);
xx = roots(LX); % Puntos para interpolar.
yy = g(xx);
p = polyfit(xx, yy, X-1); % Polinomio interpolador.
integralGaussiana = (intervalo(2) - intervalo(1)) / 2 * double(int(poly2sym(p), -1, 1); % Integral gaussiana sustituyendo p(x) por g(x).

% Error cometido
f_sim(x) = f(x);
integralExacta = double(int(f_sim, intervalo(1), intervalo(2))); % Se calcula la integral exacta.
error = abs(integralGaussiana - integralExacta); % Se calcula el error absoluto cometido.

```


## Comandos de MATLAB
`integral(f, a, b)` Utiliza una variante de la regla de Simpson.
`trapz(x, y)` Utiliza los nodos por donde pasa la función.


# Práctica 10

## Optimización en una variable
Se obtiene el punto extremo de una función sin necesidad de derivarla.

```MATLAB
% Se declaran las variables.
f = @(x) _func;

% Se representa la función.
fplot(f, intervalo);
```


### Con `fminbnd`

```MATLAB
% Para obtener el máximo, se cambia a una función opuesta a f.
g = @(x) -f(x);

% Se obtiene el máximo.
xmax = fminbnd(g, intervalo(1), intervalo(end));

% El valor máximo de la función en ese punto será:
alturaMax = f(xmax)
```


### Con el método áureo
```MATLAB
[xmax, alturaMax] = metodo_aureo(f, intervalo(1), intervalo(end), T) % T es la tolerancia.
```


## Optimización de varias variables
```MATLAB
% Se declaran las variables.
F = @(x, y) _func;
R = _región;

subplot(121), fsurf(F, R), subplot(122), fcontour(F, R) % Se representan la función y la región.

f = @(x) F(x(1), x(2)); % Se define la función a minimizar como función anónima de una sola variable vectorial.
```

### Método de máxima pendiente
```MATLAB
% Se utiliza jacobian para calcular su gradiente.
syms x y
Gf = matlabFunction(jacobian(f([x;y])).');
Gf = @(x) Gf(x(1), x(2)); % Se define como función anónima de una sola variable vectorial.

% Se obtiene el máximo.
[x,n] = MaximaPendiente(f, Gf, [1;1], T, N);
```


### Utilizando `fminsearch`  (sin restricciones)
```MATLAB
m = fminsearch(f, [1;1])
```


## Optimización con restricciones (programación lineal con forma estándard)

### Método del Símplex
`x = linprog(f, A, b)`
Donde f y b son vectores y A una matriz.

```MATLAB
% Se declaran las variables.
f = [5 4];
A = [1 2 ; 3 1 ; 3 2];
b = [14 15 16]';

x = linprog(-f, A, b) % OJO! se utiliza -f porque linprog busca el mínimo, no el máximo.
beneficio = f * x;
```
