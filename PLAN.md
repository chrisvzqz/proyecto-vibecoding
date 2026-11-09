# Plan

Cada fase cabe en una sesión de trabajo. Se completa una fase cada vez, se ejecuta la suite completa y se marcan sus casillas en el commit local de cierre.

## Fase 1 · Pantalla inicial

**Objetivo**

Abrir una página local que muestre el nombre del juego.

**Tareas**

- [x] Crear una página mínima y servirla con un servidor web local.
- [x] Mostrar el título «flappy edem».

**Comprobación en el navegador**

Abre la dirección local y comprueba que aparece el título «flappy edem».

**Prueba automática**

Playwright comprueba en `e2e/` que la página carga y muestra el título.

## Fase 2 · Aleteo y bordes

**Objetivo**

Controlar el pájaro en Canvas desde móvil y ordenador, con un inicio y un final de partida visibles.

**Tareas**

- [ ] Mantener el pájaro quieto hasta el primer toque, clic o pulsación de la barra espaciadora. Ese primer gesto inicia la partida y también hace aletear al pájaro. Entre aleteos, el pájaro cae por gravedad.
- [ ] Mantener fija la posición horizontal del pájaro. Terminar la partida al tocar el techo o el suelo y mostrar «Volver a jugar», que devuelve el pájaro a su posición inicial a la espera de otro gesto.
- [ ] Avanzar la simulación en pasos de tiempo fijos, independientes del ritmo de dibujo. Pausarla al ocultar la pestaña y reanudarla desde el mismo estado, descartando el tiempo transcurrido en segundo plano.

**Comprobación en el navegador**

Abre la app y comprueba que el pájaro espera quieto. Inicia con un toque en móvil y prueba por separado el clic y la barra espaciadora en ordenador. Comprueba que el primer gesto hace subir al pájaro. Déjalo caer hasta el suelo y, en otro intento, aletea hasta el techo. En ambos casos la partida se detiene y puedes volver a jugar. Cambia de pestaña durante una partida y comprueba que se reanuda desde la posición en la que se pausó.

**Pruebas automáticas**

Con tiempo controlado, comprueban la espera inicial, la caída, el aleteo, ambos límites verticales y la pausa y reanudación sin un salto de posición. Playwright verifica los tres controles en vistas de escritorio y móvil.

## Fase 3 · Partida con dos obstáculos

**Objetivo**

Completar una partida con dos obstáculos conocidos y poder reiniciarla.

**Tareas**

- [ ] Desplazar dos obstáculos con posiciones y huecos definidos y mostrar un marcador que empieza en cero.
- [ ] Sumar un punto por obstáculo cuando el pájaro lo haya rebasado por completo sin chocar.
- [ ] Detener la partida al chocar o al superar los dos obstáculos. Al pulsar «Volver a jugar», restablecer el pájaro, los obstáculos y el marcador.

**Comprobación en el navegador**

Pasa el primer obstáculo y comprueba que el marcador sube una sola vez, de 0 a 1. Choca con el segundo y verifica que la partida se detiene con 1 punto. Pulsa «Volver a jugar» y comprueba que el marcador vuelve a 0. En otro intento, supera ambos obstáculos y comprueba que el recorrido termina con 2 puntos.

**Pruebas automáticas**

Con tiempo controlado, comprueban que el punto se concede al rebasar el obstáculo por completo, que se concede una sola vez y que chocar impide puntuar por ese obstáculo. Playwright verifica el recorrido de puntuar, chocar y reiniciar con obstáculos conocidos y tiempo controlado.

## Fase 4 · Obstáculos continuos

**Objetivo**

Jugar un recorrido continuo en móvil y ordenador.

**Tareas**

- [ ] Generar obstáculos a intervalos regulares, con huecos a distintas alturas dentro de un rango alcanzable.
- [ ] Retirar los obstáculos al salir de pantalla y continuar la partida mientras el pájaro evite los choques.

**Comprobación en el navegador**

Juega en móvil y ordenador. Comprueba que siguen apareciendo obstáculos después del segundo y que puedes encadenar varios, sumando un punto por cada uno. Reinicia la partida y después recarga la página. En ambos casos el marcador vuelve a 0.

**Pruebas automáticas**

Con tiempo controlado, comprueban la aparición de obstáculos, los límites de altura de los huecos y la retirada al salir de pantalla. Playwright verifica que la partida continúa después del segundo obstáculo y que el marcador vuelve a 0 al reiniciar y al recargar.
