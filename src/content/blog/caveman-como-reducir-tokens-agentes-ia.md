---
title: Caveman, el plugin para que tu agente de código diga menos y haga lo mismo
publishedDate: 2026-05-26 17:00:00
tags: [ia, productividad, agentes]
description: Qué es caveman, cómo se instala y cuándo conviene usarlo para reducir tokens sin perder precisión técnica.
image: /images/caveman.png
---

Si usas asistentes de código durante horas, sabes que muchas respuestas traen relleno: introducciones largas, frases diplomáticas y texto que no aporta para resolver el problema.

<a href="https://github.com/JuliusBrussee/caveman" target="_blank">caveman</a> es un proyecto open source que ataca justo eso: mantiene la precisión técnica, pero comprime la forma de escribir del agente para gastar menos tokens.

Su lema lo resume perfecto: **"why use many token when few do trick"**.

## ¿Qué es caveman?

Caveman es una skill/plugin pensada para agentes de programación (Claude Code, Codex, Gemini, Cursor, Windsurf, Copilot y más) que cambia el estilo de salida del modelo para volverlo más directo.

En lugar de:

> "Entiendo tu problema. Una posible solución sería..."

tiende a responder con algo del estilo:

> "Problema en X. Cambia Y por Z. Prueba comando A."

La idea no es perder calidad, sino quitar "aire" al texto.

## Qué incluye el repositorio

Además del modo principal `/caveman`, el repo incluye utilidades interesantes:

- `/caveman lite`, `/caveman ultra`, `/caveman wenyan`: niveles de compresión.
- `/caveman-commit`: mensajes Conventional Commits más concisos.
- `/caveman-review`: comentarios de revisión en una línea, con ubicación y fix.
- `/caveman-stats`: métricas de ahorro de tokens en sesión.
- `/caveman-compress <archivo>`: comprime archivos de texto/Markdown (por ejemplo memoria del agente).
- `caveman-shrink`: middleware MCP para comprimir descripciones de herramientas.

Si trabajas con sesiones largas, esa combinación puede reducir bastante el costo y mantener más contexto útil antes de llegar al límite.

## Instalación rápida

Según la documentación del proyecto, necesitas Node.js 18 o superior.

### macOS / Linux / WSL / Git Bash

```bash
curl -fsSL https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.sh | bash
```

### Windows (PowerShell)

```powershell
irm https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.ps1 | iex
```

También puedes instalar con `npx` y pasar flags como `--dry-run`, `--only`, `--all` o `--minimal` para controlar mejor qué toca el instalador.

## ¿Cuánto ahorra realmente?

El README reporta una media de **65% menos tokens de salida** en su benchmark de 10 tareas, con casos puntuales cercanos al 87%.

Eso no significa que siempre vayas a ahorrar lo mismo, pero sí marca una tendencia útil: cuando el trabajo es muy iterativo (debug, refactor, revisiones), quitar verborrea se nota rápido.

## Cuándo te conviene usarlo

Caveman tiene mucho sentido si:

- Pasas muchas horas al día en un agente de código.
- Te importa controlar consumo/costo de tokens.
- Prefieres respuestas accionables y cortas.
- Mantienes sesiones extensas y no quieres desperdiciar contexto con texto redundante.

Puede no ser ideal si te gusta que el asistente explique cada paso con contexto pedagógico largo. En ese caso, puedes alternar entre modos o desactivarlo con comandos como `normal mode`.

## Mi lectura del proyecto

Lo más interesante de `caveman` no es solo "hablar corto", sino tratar el estilo de salida como una optimización real de ingeniería: menos tokens, menos ruido y más foco en decisiones técnicas.

En otras palabras: no cambia el cerebro del modelo, cambia su interfaz verbal.

Si te interesa probarlo, aquí tienes el repo:

<a href="https://github.com/JuliusBrussee/caveman" target="_blank">https://github.com/JuliusBrussee/caveman</a>
