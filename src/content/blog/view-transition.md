---
title: Introducción a View Transition
publishedDate: 2024-11-12 21:20:00
tags: ["html", "view-transition"]
description: Transición de vista entre documentos (MPA) en HTML.
image: /images/html.svg
---

## ¿Qué es View Transition?

La transición de vista es una técnica que permite animar la transición entre dos documentos HTML. No requiere JavaScript y se basa en CSS. La transición de vista se puede utilizar para crear una experiencia de usuario más fluida y atractiva al navegar entre páginas web. La técnica se puede aplicar tanto a aplicaciones de página única (SPA) como a aplicaciones de múltiples páginas (MPA).

## Cómo funciona

La transición de vista se basa en la técnica de pre-carga de enlaces. Cuando un usuario hace clic en un enlace, en lugar de cargar la página directamente, se carga la página en segundo plano. Una vez que la página se ha cargado, se anima la transición entre la página actual y la nueva página. Esto crea una experiencia de usuario más fluida y atractiva.

## Implementación

Para implementar la transición de vista en su sitio web, siga estos pasos:

```css
@view-transition {
  navigation: auto;
}
```

### Personalizando animaciones

Las transacciones de vista tienen aplicadas por defecto animaciones CSS. Se pueden modificar las animaciones predeterminadas de cualquier manera que desee utilizando CSS regular. Puede dirigirse a la animación "from" con ::view-transition-old y a la animación "to" con ::view-transition-new.

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```