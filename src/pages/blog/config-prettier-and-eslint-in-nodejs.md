---
layout: ../../layouts/BlogLayout.astro
title: "Eslint & Prettier en NodeJS"
author: "Beimer Campos"
date: "09 Aug 2022"
description: "Configuración rápida y sencilla de eslint y prettier en tu proyecto de NodeJS"
# heroImage: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
---

Como desarrollador de seguro estas familiarizado con algunos de los principios relacionados a las buenas practicas al momento de escribir tu código, en este post te veremos como integrar dos de las herramientas más usadas para usar buenas practicas al momento de escribir código. Primero veamos de forma breve dos definiciones sencillas.

## Code Formatter
Herramienta que se encarga de aplicar un estilo de codificación coherente y consistente en todo el proyecto, en pocas palabras se encarga de **formatear** el código según unas reglas establecidas. En nuestro caso esta herramienta es Prettier.

## Linter
Es igualmente una herramienta que se encarga de detectar errores y malas practicas en nuestro código, este tambien es configurable segun lo que se requiera, a diferencia de un formatter este va más alla de solamente el formato de la escritura, integrando cosas como la detección de variables no declaradas, funciones sin retorno y muchas cosas más que contribuyan con la **calidad** de nuestro código. En este caso el linter que usaremos es Eslint.

## Manos a la obra!!
Ahora que ya conoces las definiciones base de lo que vamos a usar veamos como se integran estas herramientas.

Para iniciar esto lo unico que necesitas es haber inicializado un projecto nodeJS, de no haberlo hecho ejecuta `npm init` en tu carpeta en la que deseas comenzar a trabajar.

Instala eslint y prettier
```bash
npm i eslint prettier -D
```
Instala los paquetes para hacer que estas dos herramientas trabajen juntas sin interrumpirse la una a la otra.
```bash
npm i eslint-config-prettier eslint-plugin-prettier -D
```
Esto es lo único que se necesitas instalar para comenzar.

Crea tu archivo `.prettierrc.js` si no lo has creado aún, aqui te dejo una configuración sencilla de las reglas que he usado en algunos proyectos.
```javascript
module.exports={
	"singleQuote": true,
	"trailingComma": "all",
	"printWidth": 120,
	"useTabs": true,
	"semi": false
}
```

Generar el archivo de configuración de eslint, lo cual se hace ejecutando lo siguiente:
```bash
npx eslint --init
```
Esto nos abríra una interacción solicitando más detalles de la configuración

---

Una vez terminado esto te habrá generado el archivo `.eslintrc.js`.

Ahora debemos modificar la propiedad `extends`(dentro de este archivo) de la siguiente forma:
```javascript
{
    // 
    extends:['standard','plugin:prettier/recommended']
    //...
}
```

Esto es lo que se necesita para hacer que el linter integre la reglas configuradas en tu archivo `.prettierrc.js` en las reglas que usa para verificar el código. 

Ahora ya tienes configuradas las dos herramientas lo útimo que debes hacer es configurar a tu editor de código para que use el formato automático al momento de guardar, en este caso debes dejar prettier como predeterminado facilitandote más las cosas.

Otra opción es una vez configuradas estas herramientas es usarlas a travéz de la linea de comandos o incluso integrarlas en los `pre-commits` dependiendo lo que mejor se adapte a lo que necesitas.

