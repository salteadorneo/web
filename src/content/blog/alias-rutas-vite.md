---
title: Utiliza alias en tus rutas de Vite
description: Aprende a utilizar alias en tus rutas de Vite para importar módulos
  de forma más sencilla.
publishedDate: 2023-01-09 14:30:00
tags: ["vite", "javascript", "typescript"]
image: /images/vite.svg
---

## ¿Qué es Vite?

[Vite](https://vitejs.dev) es un empaquetador de módulos web moderno que
proporciona una experiencia de desarrollo rápida y sin configuración. Vite se
basa en el estándar de especificación de módulos ES, y se ejecuta directamente
en el navegador sin necesidad de un empaquetador de módulos como Webpack o
Rollup.

## ¿Qué es un alias?

Un alias es un nombre alternativo para un recurso. En Vite, los alias se
utilizan para mapear un prefijo de ruta a un directorio en el sistema de
archivos. Por ejemplo, si tenemos un directorio llamado `@/components` que
contiene todos los componentes de nuestra aplicación, podemos configurar un
alias para que `@` se refiera a ese directorio.

## Configuración

Para configurar un alias en Vite, debemos crear un archivo llamado
`vite.config.js` en la raíz de nuestro proyecto. Dentro de este archivo, debemos
exportar un objeto con la propiedad `resolve.alias` que contenga un objeto con
los alias que queremos configurar.

```javascript
...
import path from 'path'

export default defineConfig({
  ...
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})
```

## Uso

Para utilizar un alias, debemos importar el módulo que queremos utilizar con el
alias que configuramos. Por ejemplo, si queremos importar el componente `Button`
que se encuentra en el directorio `@/components`, debemos importarlo de la
siguiente manera:

```javascript
import Button from "@/components/Button";
```

## TypeScript

Si estamos utilizando TypeScript en nuestro proyecto, también debemos
configurar el compilador de TypeScript para que reconozca los alias. Para
hacerlo, debemos crear un archivo llamado `tsconfig.json` en la raíz de nuestro
proyecto y agregar la siguiente configuración:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

Con esta configuración, el compilador de TypeScript reconocerá los alias que
hemos configurado en Vite y podremos importar módulos con
`@/components/Button` en lugar de `../../components/Button`.