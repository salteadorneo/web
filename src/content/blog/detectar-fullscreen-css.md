---
title: Detectar modo pantalla completa con CSS
publishedDate: 2026-02-24 10:00:00
tags: ["css", "fullscreen", "display-mode", "javascript"]
description: Aprende a detectar cuando tu app entra en pantalla completa con CSS y a controlarlo desde JavaScript con la Fullscreen API.
image: /images/css.svg
---

## Introducción

Si alguna vez necesitaste ajustar la interfaz cuando una app entra en pantalla completa, puedes hacerlo sin complicarte. CSS ya incluye una forma directa de detectar este estado con la media query `display-mode`.

## Media Query `display-mode`

La media feature `display-mode` permite saber cómo se está mostrando la aplicación. Algunos valores comunes son `browser`, `standalone`, `minimal-ui` y `fullscreen`.

Para detectar específicamente el modo pantalla completa:

```css
@media all and (display-mode: fullscreen) {
  /* Estilos solo para pantalla completa */
}
```

## Ejemplo práctico

Un caso típico: ocultar o ajustar elementos cuando el contenido está en fullscreen.

```css
@media all and (display-mode: fullscreen) {
  body {
    background-color: lightpink;
  }
}
```

## Detectarlo también desde JavaScript

Si además necesitas ejecutar lógica en JavaScript al entrar o salir de pantalla completa, puedes observar el mismo `display-mode` con `matchMedia`.

```js
const mediaQuery = window.matchMedia('(display-mode: fullscreen)');

const onDisplayModeChange = ({ matches }) => {
  if (matches) {
    // fullscreen
    return;
  }
  // no fullscreen
};

mediaQuery.addEventListener('change', onDisplayModeChange);
```

## Fullscreen API: entrar y salir

Si quieres controlar explícitamente la pantalla completa, usa la [Fullscreen API](https://developer.mozilla.org/es/docs/Web/API/Fullscreen_API).

Para entrar en fullscreen:

```js
document.documentElement.requestFullscreen();
```

Para salir:

```js
document.exitFullscreen();
```

Y para alternar entre ambos estados en un botón:

```js
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
```

## Saber el estado actual y escuchar cambios

La propiedad `document.fullscreenElement` te dice si hay un elemento en pantalla completa. Además puedes escuchar el evento `fullscreenchange` para reaccionar al cambio de estado.

```js
document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    // Entró en fullscreen
    return;
  }

  // Salió de fullscreen
});
```

Si trabajas con `canvas` (por ejemplo en juegos), también es útil escuchar `resize` para recalcular tamaños cuando el viewport cambia al entrar o salir de fullscreen.

Con esto tienes control visual (CSS) y funcional (JavaScript) para adaptar la experiencia cuando la app cambia de modo.