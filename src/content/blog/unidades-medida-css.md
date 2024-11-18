---
title: Unidades de medida en CSS
description: Elegir las unidades correctas en CSS es clave para lograr diseños
  responsivos y accesibles. Aquí tienes una guía práctica.
publishedDate: 2024-11-18 01:10:00
tags: ["css", "web", "responsive"]
image: /images/css.svg
---

## ¿Qué unidad de medida en CSS deberías usar?

Elegir las unidades correctas en CSS es clave para lograr diseños responsivos y accesibles. Aquí tienes una guía práctica:

### Unidades absolutas

Pixeles (`px`): Ideales para elementos que requieren dimensiones fijas, como bordes o imágenes. Sin embargo, abusar de px puede afectar la responsividad y la accesibilidad.

Puntos (`pt`), pulgadas (`in`), centímetros (`cm`), milímetros (`mm`): Más usados en impresión. En diseño web se evitan porque no son consistentes entre dispositivos.

### Unidades relativas

Em (`em`): Relativa al tamaño de fuente del elemento padre. Útil para escalado proporcional, pero puede complicarse si hay demasiados niveles anidados.

Rem (`rem`): Relativa al tamaño de fuente del elemento raíz (`<html>`). Es ideal para definir tamaños consistentes en toda la página.

Porcentajes (`%`): Relativos a las dimensiones del elemento padre. Muy usados en layouts responsivos, especialmente para ancho y alto.

Viewport Width (`vw`) y Viewport Height (`vh`): Relativos al tamaño de la ventana del navegador. Perfectos para crear tipografías o diseños que se adapten al tamaño de la pantalla.

### Mejores prácticas

Tipografía: Usa `rem` para tamaños de fuente; es más consistente y respeta las preferencias del usuario.
Espaciados (márgenes, padding): Usa `em` o `rem` para que el espaciado se ajuste al tamaño del texto, mejorando la legibilidad.

Anchos de diseño: Usa porcentajes (`%`) para layouts fluidos que se adapten a cualquier pantalla.

Elementos a pantalla completa: Usa `vw` y `vh` para que ocupen todo el viewport.

Aquí tienes un diagrama interactivo <a href="https://whatunit.com" target="_blank">whatunit.com</a>