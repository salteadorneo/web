---
title: SVG adaptables a temas claro y oscuro
publishedDate: 2024-11-15 16:00:00
description: Crea un favicon SVG que cambie de color en función del tema claro u oscuro del sistema operativo del usuario.
tags: [web, svg, favicon, css]
image: /images/routine.svg
---

Los SVG son una excelente opción para crear iconos adaptables a temas claro y oscuro. En este artículo, te mostraré cómo puedes crear un favicon SVG que cambie de color en función del tema claro u oscuro del sistema operativo del usuario.

## Cómo detectar el tema claro y oscuro del sistema operativo

Para detectar si el usuario prefiere un tema claro u oscuro en su sistema operativo, puedes utilizar la pseudo-clase `prefers-color-scheme` de CSS. Esta pseudo-clase permite aplicar estilos en función del tema claro u oscuro del sistema operativo del usuario.

Aquí tienes un ejemplo de un SVG que cambia de color en función del tema claro u oscuro:

<section class="pre" style="display:grid;place-content:center;color:white;background:#1a1a1a;padding:1rem;">

| Tema claro | Tema oscuro |
| - | - |
| <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="50%" style="margin:0 auto;" viewBox="0 -960 960 960"><path d="M182-200q-51 0-79-35.5T82-322l42-300q9-60 53.5-99T282-760h396q60 0 104.5 39t53.5 99l42 300q7 51-21 86.5T778-200q-21 0-39-7.5T706-230l-90-90H344l-90 90q-15 15-33 22.5t-39 7.5Zm16-86 114-114h336l114 114q2 2 16 6 11 0 17.5-6.5T800-304l-44-308q-4-29-26-48.5T678-680H282q-30 0-52 19.5T204-612l-44 308q-2 11 4.5 17.5T182-280q2 0 16-6Zm482-154q17 0 28.5-11.5T720-480q0-17-11.5-28.5T680-520q-17 0-28.5 11.5T640-480q0 17 11.5 28.5T680-440Zm-80-120q17 0 28.5-11.5T640-600q0-17-11.5-28.5T600-640q-17 0-28.5 11.5T560-600q0 17 11.5 28.5T600-560ZM310-440h60v-70h70v-60h-70v-70h-60v70h-70v60h70v70Zm170-40Z"/></svg> | <svg xmlns="http://www.w3.org/2000/svg" fill="black" width="50%" style="margin:0 auto;" viewBox="0 -960 960 960"><path d="M182-200q-51 0-79-35.5T82-322l42-300q9-60 53.5-99T282-760h396q60 0 104.5 39t53.5 99l42 300q7 51-21 86.5T778-200q-21 0-39-7.5T706-230l-90-90H344l-90 90q-15 15-33 22.5t-39 7.5Zm16-86 114-114h336l114 114q2 2 16 6 11 0 17.5-6.5T800-304l-44-308q-4-29-26-48.5T678-680H282q-30 0-52 19.5T204-612l-44 308q-2 11 4.5 17.5T182-280q2 0 16-6Zm482-154q17 0 28.5-11.5T720-480q0-17-11.5-28.5T680-520q-17 0-28.5 11.5T640-480q0 17 11.5 28.5T680-440Zm-80-120q17 0 28.5-11.5T640-600q0-17-11.5-28.5T600-640q-17 0-28.5 11.5T560-600q0 17 11.5 28.5T600-560ZM310-440h60v-70h70v-60h-70v-70h-60v70h-70v60h70v70Zm170-40Z"/></svg> |

</section>

Aquí tienes el código SVG del ejemplo anterior:

```html
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -960 960 960">
    <path d="M182-200q-51 0-79-35.5T82-322l42-300q9-60 53.5-99T282-760h396q60 0 104.5 39t53.5 99l42 300q7 51-21 86.5T778-200q-21 0-39-7.5T706-230l-90-90H344l-90 90q-15 15-33 22.5t-39 7.5Zm16-86 114-114h336l114 114q2 2 16 6 11 0 17.5-6.5T800-304l-44-308q-4-29-26-48.5T678-680H282q-30 0-52 19.5T204-612l-44 308q-2 11 4.5 17.5T182-280q2 0 16-6Zm482-154q17 0 28.5-11.5T720-480q0-17-11.5-28.5T680-520q-17 0-28.5 11.5T640-480q0 17 11.5 28.5T680-440Zm-80-120q17 0 28.5-11.5T640-600q0-17-11.5-28.5T600-640q-17 0-28.5 11.5T560-600q0 17 11.5 28.5T600-560ZM310-440h60v-70h70v-60h-70v-70h-60v70h-70v60h70v70Zm170-40Z"/>
    <style>
        path { fill: #000; }
        @media (prefers-color-scheme: dark) {
            path { fill: #FFF; }
        }
    </style>
</svg>
```

## Cómo crear un favicon SVG adaptable

Puedes usar el código SVG anterior para crear un favicon adaptable a temas claro y oscuro. Solo tienes que añadir el código SVG en la etiqueta `<head>` de tu página web:

```html
<link rel="icon" type="image/svg+xml" href="favicon.svg">
```

Un buen ejemplo de uso es el favicon SVG de <a href="https://astro.build" target="_blank">Astro</a>.

<section class="pre" style="display:grid;place-content:center;color:white;background:#1a1a1a;padding:1rem;">

| Tema claro | Tema oscuro |
| - | - |
| <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="50%" style="margin:0 auto;" viewBox="0 0 128 128"><g fill="black"><path d="M47.7 107.1c-5.5-5-7.2-15.7-4.9-23.4 4 4.9 9.6 6.4 15.4 7.3 8.9 1.3 17.6.8 25.9-3.2l2.8-1.7a18 18 0 0 1-7.2 20l-5.5 3.8c-5.6 3.8-7.2 8.2-5 14.7l.2.7a14 14 0 0 1-6.6-5.6 15.8 15.8 0 0 1-2.6-8.6c0-1.5 0-3-.2-4.5-.5-3.7-2.2-5.3-5.5-5.4-3.3-.1-5.9 2-6.6 5.2l-.2.7Z" /><path d="M16 82.4s16.5-8 33-8l12.4-38.3c.5-2 1.8-3.2 3.3-3.2 1.6 0 3 1.3 3.4 3.2l12.4 38.3c19.6 0 33 8 33 8l-28-76c-.8-2.3-2.2-3.7-4-3.7H48c-1.8 0-3.1 1.4-4 3.7l-28 76Z" /></g><path fill="url(#a)" d="M47.7 107.1c-5.5-5-7.2-15.7-4.9-23.4 4 4.9 9.6 6.4 15.4 7.3 8.9 1.3 17.6.8 25.9-3.2l2.8-1.7a18 18 0 0 1-7.2 20l-5.5 3.8c-5.6 3.8-7.2 8.2-5 14.7l.2.7a14 14 0 0 1-6.6-5.6 15.8 15.8 0 0 1-2.6-8.6c0-1.5 0-3-.2-4.5-.5-3.7-2.2-5.3-5.5-5.4-3.3-.1-5.9 2-6.6 5.2l-.2.7Z" /><defs><linearGradient id="a" x1="64.7" x2="77.4" y1="119.2" y2="77.4" gradientUnits="userSpaceOnUse"><stop stop-color="#D83333" /><stop offset="1" stop-color="#F041FF" /></linearGradient></defs></svg> | <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="50%" style="margin:0 auto;" viewBox="0 0 128 128"><g fill="white"><path d="M47.7 107.1c-5.5-5-7.2-15.7-4.9-23.4 4 4.9 9.6 6.4 15.4 7.3 8.9 1.3 17.6.8 25.9-3.2l2.8-1.7a18 18 0 0 1-7.2 20l-5.5 3.8c-5.6 3.8-7.2 8.2-5 14.7l.2.7a14 14 0 0 1-6.6-5.6 15.8 15.8 0 0 1-2.6-8.6c0-1.5 0-3-.2-4.5-.5-3.7-2.2-5.3-5.5-5.4-3.3-.1-5.9 2-6.6 5.2l-.2.7Z" /><path d="M16 82.4s16.5-8 33-8l12.4-38.3c.5-2 1.8-3.2 3.3-3.2 1.6 0 3 1.3 3.4 3.2l12.4 38.3c19.6 0 33 8 33 8l-28-76c-.8-2.3-2.2-3.7-4-3.7H48c-1.8 0-3.1 1.4-4 3.7l-28 76Z" /></g><path fill="url(#a)" d="M47.7 107.1c-5.5-5-7.2-15.7-4.9-23.4 4 4.9 9.6 6.4 15.4 7.3 8.9 1.3 17.6.8 25.9-3.2l2.8-1.7a18 18 0 0 1-7.2 20l-5.5 3.8c-5.6 3.8-7.2 8.2-5 14.7l.2.7a14 14 0 0 1-6.6-5.6 15.8 15.8 0 0 1-2.6-8.6c0-1.5 0-3-.2-4.5-.5-3.7-2.2-5.3-5.5-5.4-3.3-.1-5.9 2-6.6 5.2l-.2.7Z" /><defs><linearGradient id="a" x1="64.7" x2="77.4" y1="119.2" y2="77.4" gradientUnits="userSpaceOnUse"><stop stop-color="#D83333" /><stop offset="1" stop-color="#F041FF" /></linearGradient></defs></svg> |

</section>

Modifican solamente el `fill` de `g` en el SVG original. Aquí tienes el código SVG del ejemplo anterior:

```html
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
  <g>
    <path d="M47.7 107.1c-5.5-5-7.2-15.7-4.9-23.4 4 4.9 9.6 6.4 15.4 7.3 8.9 1.3 17.6.8 25.9-3.2l2.8-1.7a18 18 0 0 1-7.2 20l-5.5 3.8c-5.6 3.8-7.2 8.2-5 14.7l.2.7a14 14 0 0 1-6.6-5.6 15.8 15.8 0 0 1-2.6-8.6c0-1.5 0-3-.2-4.5-.5-3.7-2.2-5.3-5.5-5.4-3.3-.1-5.9 2-6.6 5.2l-.2.7Z" />
    <path d="M16 82.4s16.5-8 33-8l12.4-38.3c.5-2 1.8-3.2 3.3-3.2 1.6 0 3 1.3 3.4 3.2l12.4 38.3c19.6 0 33 8 33 8l-28-76c-.8-2.3-2.2-3.7-4-3.7H48c-1.8 0-3.1 1.4-4 3.7l-28 76Z" />
  </g>
  <path fill="url(#a)" d="M47.7 107.1c-5.5-5-7.2-15.7-4.9-23.4 4 4.9 9.6 6.4 15.4 7.3 8.9 1.3 17.6.8 25.9-3.2l2.8-1.7a18 18 0 0 1-7.2 20l-5.5 3.8c-5.6 3.8-7.2 8.2-5 14.7l.2.7a14 14 0 0 1-6.6-5.6 15.8 15.8 0 0 1-2.6-8.6c0-1.5 0-3-.2-4.5-.5-3.7-2.2-5.3-5.5-5.4-3.3-.1-5.9 2-6.6 5.2l-.2.7Z" />
  <defs>
    <linearGradient id="a" x1="64.7" x2="77.4" y1="119.2" y2="77.4" gradientUnits="userSpaceOnUse">
      <stop stop-color="#D83333" />
      <stop offset="1" stop-color="#F041FF" />
    </linearGradient>
  </defs>
  <style>
    g {
      fill: #000;
    }
    @media (prefers-color-scheme: dark) {
      g {
        fill: #FFF;
      }
    }
  </style>
</svg>
```