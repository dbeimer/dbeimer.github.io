---
layout: ../../layouts/BlogLayout.astro
title: "Uso básico de rabbitmq con NodeJS"
description: "Publicar y consumir mensajes de rabbitmq"
author: "Beimer Campos"
date: "09 Aug 2023"
---

El uso básico que podemos darle a rabbit es el publicador y consumidor de mensajes encolados. A continuación veremos un ejemplo de como hacerlo.

Primero necesitas instalar la librería de `mqplib` ejecutando:

```bash
npm i mqplib
```

Luego inicializa las variables y crea la conexion

```javascript
RABBIT_URL = "amqps://[user]:[password]@[url]/[project]";

const exchange = "bots_managements";
const routingKey = "mibot.core.sms.management";
const queue = "my_queue";

// NOTE: creación de la conexión
let rabbitConn = await amqp.connect(env.RABBIT_URL);
let channel = await rabbitConn.createChannel();
```

### Publicación de un mensaje

Cuando se desea publicar directamente a una cola se debe usar la función `sendToQueue` y cuando quieres enviarla a un exchange usa la función `exchange`.

```javascript
// NOTE: send to exchange
const published = channel.publish(
  exchange,
  routingKey,
  Buffer.from(JSON.stringify(queueMessage))
);

// NOTE: send to queue
const published = channel.sendToQueue(
  queue,
  Buffer.from(JSON.stringify(queueMessage))
);
```

### Consumir mensajes

```javascript
channel.consume(queue, function (msg) {
  const body = msg.content.toString();
});
```

### Cerrar conexión

```javascript
await channel.close();
await rabbitConn.close();
```

Aquí tienes el [enlace](https://google.com) al codio en github.
