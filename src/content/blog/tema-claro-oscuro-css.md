---
title: Tema claro y oscuro en CSS
publishedDate: 2024-11-13 19:06:00
tags: ['css', 'web', 'tema', 'claro', 'oscuro']
description: Aprende a implementar una función de CSS que permita a los usuarios cambiar entre un tema claro y uno oscuro en tu sitio web.
image: /images/css.svg
---

## Introducción

El tema claro y oscuro es una característica popular en los sitios web modernos que permite a los usuarios elegir entre un diseño claro y uno oscuro. Esto es especialmente útil para mejorar la accesibilidad y la legibilidad del contenido, ya que algunos usuarios prefieren un tema claro durante el día y un tema oscuro por la noche.

## Media Query `prefers-color-scheme`

La característica `prefers-color-scheme` de CSS se utiliza para detectar si un usuario ha solicitado temas de color claro u oscuro. Un usuario indica su preferencia a través de una configuración del sistema operativo (por ejemplo, modo claro u oscuro) o una configuración del agente de usuario.

```css
body {
  background-color: white;
  color: black;
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: black;
    color: white;
  }
}
```

Fuente: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme" target="_blank">MDN Web Docs</a>

## Función `light-dark()`

En 2024 se añade la función `light-dark()` de CSS permite establecer dos colores para una propiedad, devolviendo uno de los dos colores según si el desarrollador ha establecido un esquema de color claro u oscuro o si el usuario ha solicitado un tema de color claro u oscuro, sin necesidad de encerrar los colores del tema dentro de una consulta de la función de medios `prefers-color-scheme`.

```css
:root {
    color-scheme: light dark;
}

body {
    background-color: light-dark(white, black);
    color: light-dark(black, white);
}
```

Fuente: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark" target="_blank">MDN Web Docs</a>

Con estas funciones, puedes ofrecer a los usuarios la posibilidad de elegir entre un tema claro y uno oscuro en tu sitio web, lo que mejora la experiencia de usuario y la accesibilidad.