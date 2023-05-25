---
title: "PlayJS 0.3.1"
publishedDate: 2023-05-25 01:00:00
tags: ["javascript", "side project", "playjs"]
description: PlayJS es un playground para JavaScript en la web que permite ejecutar código en tiempo real.
allow_iframes: true
image: /images/javascript.svg
---

## ¿Qué es PlayJS?

Es un **playground para JavaScript en la web** que permite **ejecutar código en tiempo real**. Es uno de mis proyectos más técnicos. Me está permitiendo descubrir **las profundidades de JavaScript** y de la web en general. Es de [**código abierto**](https://github.com/salteadorneo/PlayJS) y animo a contribuir a cualquiera que quiera hacerlo.

Puedes probarlo en <u>[**playjs.dev**](https://playjs.dev/)</u>

## Nuevas funcionalidades

A partir de la **versión 0.3.1** se añade soporte para **funciones asícronas** y se permite **importar paquetes npm**.

### Funciones asíncronas

Se añade soporte `await` y `async`. Se abre el uso de `fetch` para llamadas a APIs. Un ejemplo de uso:

<iframe src="https://playjs.dev/YXN5bmMgZnVuY3Rpb24gZ2V0RmV0Y2goKSB7CiAgICByZXR1cm4gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvcy8xJykKICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSkKfQoKZ2V0RmV0Y2goKQ==" width="100%" height="500" style="border:none;"></iframe>

### Paquetes npm

La importación de paquetes de **npm** es gracias a [**Skypack**](https://www.skypack.dev/). Es una **funcionalidad experimental** en la que sigo trabajando, pero es el primer paso para hacer de PlayJS un **entorno de pruebas** más completo.

Era necesario poner este ejemplo:

<iframe src="https://playjs.dev/aW1wb3J0IGNvbmZldHRpIGZyb20gJ2NhbnZhcy1jb25mZXR0aScKCmZ1bmN0aW9uIGdldFBhcnR5KCkgewogICAgY29uZmV0dGkoewogICAgICAgIHBhcnRpY2xlQ291bnQ6IDEwMCwKICAgICAgICBzdGFydFZlbG9jaXR5OiAzMCwKICAgICAgICBzcHJlYWQ6IDM2MCwKICAgICAgICBvcmlnaW46IHsKICAgICAgICAgICAgeDogTWF0aC5yYW5kb20oKSwKICAgICAgICAgICAgeTogTWF0aC5yYW5kb20oKSAtIDAuMgogICAgICAgIH0KICAgIH0pOwogICAgc2V0VGltZW91dChnZXRQYXJ0eSwgMjAwMCkKfQpnZXRQYXJ0eSgp" width="100%" height="500" style="border:none;"></iframe>

### ¿Qué es Skypack?

**Skypack** es un **CDN** para **paquetes de npm**. Es una alternativa a los CDNs tradicionales como jsDelivr o UNPKG. La diferencia es que Skypack no requiere que instales los paquetes en tu proyecto, sino que los carga directamente desde el CDN.

## ¿Qué es un playground?

Un **playground** es un **entorno de pruebas**. En el caso de **PlayJS**, es un entorno de pruebas para JavaScript. Puedes probar código JavaScript **sin necesidad de instalar nada en tu ordenador**.