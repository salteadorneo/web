---
title: "bitchat: mensajería sin internet, sin número, sin servidor"
publishedDate: 2026-04-24 10:00:00
tags: ['privacidad', 'descentralizado', 'bluetooth', 'nostr']
description: bitchat es una app de mensajería que funciona sobre Bluetooth mesh y el protocolo Nostr. Sin cuenta, sin número de teléfono, sin servidores centrales.
image: /images/bitchat.svg
---

**bitchat** es una app de mensajería que no necesita internet, ni cuenta, ni número
de teléfono. Funciona creando una red mesh entre dispositivos cercanos usando
**Bluetooth Low Energy**. Si hay suficientes teléfonos cerca, los mensajes saltan
de uno a otro hasta llegar al destino — hasta **7 saltos**.

Cuando sí hay internet, usa el protocolo **Nostr** como transporte alternativo,
conectándose a más de 290 relays distribuidos por todo el mundo. La app elige
automáticamente el mejor canal.

## Cómo funciona

Cada dispositivo actúa como nodo de la red. No hace falta un servidor central que
gestione las conexiones — los propios teléfonos se descubren entre sí y retransmiten
mensajes. Los mensajes privados van cifrados de extremo a extremo con el
**Noise Protocol** en Bluetooth y con **NIP-17** sobre Nostr.

Tiene canales tipo IRC (`#bluetooth` para la red local) y canales geolocalizados
basados en geohash: puedes unirte al chat de tu barrio, tu ciudad o tu país sin
revelar tu identidad.

Los comandos son estilo IRC: `/msg`, `/who`, `/slap`... Si algo sale mal, un
triple toque borra todos los datos al instante.

## Por qué importa

Es útil en situaciones donde la red cae o está intervenida: cortes de luz,
catástrofes naturales, eventos masivos, zonas remotas. También en contextos donde
la privacidad es crítica y no quieres dejar rastro en servidores de terceros.

A diferencia de Signal o WhatsApp, **no necesitas número de teléfono ni cuenta**.
No hay empresa que pueda entregar tus datos porque no los tiene.

## Código abierto y libre

El proyecto es de **dominio público** — sin licencia restrictiva. Está disponible
en [GitHub](https://github.com/permissionlesstech/bitchat) con más de 25.000 estrellas
y puede descargarse ya en la [App Store](https://apps.apple.com/us/app/bitchat-mesh/id6748219622)
para iOS y macOS.

Si te interesa la privacidad o simplemente quieres entender cómo funciona una red
mesh real, vale la pena echarle un vistazo al código.
