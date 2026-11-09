# Información del proyecto

## Qué es
**flappy edem** es un juego de navegador inspirado en Flappy Bird. El jugador hace aletear a un pájaro para esquivar obstáculos y sumar puntos.

## Para quién
Para cualquiera que quiera jugar partidas cortas desde el móvil o el ordenador.

## Funciones
- Hacer aletear al pájaro con un toque en la pantalla, un clic o la barra espaciadora.
- Esquivar obstáculos y sumar un punto por cada obstáculo superado.
- Terminar la partida al chocar y permitir empezar otra con la puntuación a cero.

## Fuera de alcance
- Cuentas de usuario, clasificaciones en línea y récords persistentes.

## Tecnología
HTML, CSS y JavaScript con Canvas. El juego se ejecutará en el navegador, en móvil y ordenador, sin servidor de aplicación.

## Datos y claves
La posición del pájaro y los obstáculos, el estado de la partida y la puntuación se mantienen en memoria. La puntuación empieza en cero en cada partida y al volver a abrir el juego. No se necesitan datos personales, base de datos ni claves.

## Cómo se arranca

Durante el desarrollo, se servirán los archivos con un servidor web local y se abrirá su dirección en el navegador.

## Cómo se prueba
Playwright comprobará en `e2e/` que la página se abre y muestra el nombre «flappy edem», y que el pájaro aletea con un toque en una vista móvil y con clic o barra espaciadora en una vista de escritorio.

En una partida que empieza con 0 puntos, superar un obstáculo debe dejar el marcador en 1. Chocar con el siguiente debe terminar la partida. Al volver a jugar o recargar la página, el marcador debe volver a 0.

---

<details>
<summary>Ejemplo de referencia: calculadora de hipoteca (no es tu proyecto)</summary>

**Qué es:** una página que calcula la cuota mensual de una hipoteca.

**Para quién:** personas que están comparando hipotecas antes de ir al banco.

**Funciones:**
- Pedir importe, interés anual y años.
- Mostrar la cuota mensual.
- Avisar si falta un dato o no es válido.

**Fuera de alcance:** cuentas de usuario, guardar simulaciones y ofertas de bancos reales.

**Tecnología:** una página HTML con JavaScript que se abre en el navegador.

**Datos y claves:** solo los datos que escribe el usuario, que no se guardan. No necesita claves.

**Cómo se prueba:** 200.000 € al 3 % a 30 años = 843 €/mes.

</details>
