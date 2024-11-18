---
title: Introducción al testing
publishedDate: 2024-11-18 19:22:00
tags: ["testing", "frontend", "backend", "python", "javascript"]
description: El testing es una práctica que nos permite asegurar que nuestro código funciona correctamente.
image: /images/testing.svg
---

El testing es una práctica que nos permite asegurar que nuestro código funciona correctamente. Nos permite detectar errores y corregirlos antes de que afecten a los usuarios.

## Tipos de testing

Existen varios tipos de testing:

**Testing unitario**: se centra en probar unidades individuales de código, como funciones o métodos.

**Testing de integración**: se centra en probar la interacción entre diferentes unidades de código.

**Testing de sistema**: se centra en probar la interacción entre diferentes subsistemas de la aplicación.

**Testing de aceptación (end-to-end)**: se centra en probar la aplicación completa desde la perspectiva del usuario final.

## ¿Cómo se realiza el testing?

El testing se realiza mediante la ejecución de pruebas automatizadas sobre el código. Estas pruebas pueden ser manuales o automatizadas. Las pruebas automatizadas son más eficientes y permiten realizar pruebas repetitivas y consistentes.

Normalmente se realiza mediante frameworks de testing. Suelen estar localizados en carpetas específicas del proyecto como `tests` o `test` o `__tests__`. En JavaScript/TypeScript es común encontrar archivos `.test.js` o `.test.ts`.

## JavaScript

### Vitest

Para realizar test en JavaScript se puede usar el framework <a href="https://vitest.dev/" target="_blank">Vitest</a>.

```javascript
import { expect, test } from 'vitest'

test('1 + 2', () => {
  expect(1 + 2).toBe(3)
})
```

### Bun

Se pueden realizar directamente con <a href="https://bun.sh/" target="_blank">Bun</a>.

```javascript
import { expect, test } from "bun:test";

test("1 + 2", () => {
    expect(1 + 2).toBe(3);
});
```

### Node

Desde la versión 18, se puede usar el módulo `test` de Node.js.

```javascript
import test from 'node:test';
import assert from 'node:assert';

test('1 + 2', () => {
    assert.strictEqual(1 + 2, 3)
})
```

Más información en la <a href="https://nodejs.org/api/test.html" target="_blank">documentación oficial</a>.

## Python

### unittest

Para realizar test en Python se puede usar el framework <a href="https://docs.python.org/3/library/unittest.html" target="_blank">unittest</a>.

```python
import unittest

class Test(unittest.TestCase):
    def test_ok(self):
        self.assertEqual(1 + 2, 3)

if __name__ == '__main__':
    unittest.main()
```

### pytest

Otro framework que se puede usar es <a href="https://docs.pytest.org/en/7.4.x/" target="_blank">pytest</a>.

```python
import pytest

def test_ok():
    assert 1 + 2 == 3
```