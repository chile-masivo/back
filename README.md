# back-chile-masivo

Backend chile masivo

## Endpoints

- `/login`
- `/users`
- `/alerts`

### Login

Para login se acepta solo método `POST` y es necesario el siguiente estructura en **body** para `POST`:

```js
{
  "strategy": "local",
  "email": "you@example.com",
  "password": "XXXXXXXX"
}
```

### Users

El endpoint acepta los siguientes métodos: `GET`, `GET/:id`, `POST`, `PATCH` y `DELETE`.

Body para `POST`: 

```js
{
  "email": "you@example.com",
  "password": "XXXXXXXXXXXXXXX"
}
```

### Alerts

El endpoint acepta de forma anónima los siguientes métodos: `GET`, `GET/:id`, `POST`, mientras que con login `PATCH` y `DELETE`.

```js
{
  user: "ObjectID", // ObjectID como string (Opcional para anónimo)
  url: "https://twitter.com/user/status/:id", // Ejemplo
  location: { type: "Point", coordinates: [-73.856077, 40.848447] }, // Leer más abajo las posibilidades geoespaciales
  description: "String",
  verified: false // Opcional
}
```
Las posibilidades de Objecto en la key location se pueden encontrar en la documentación de [MongoDB GeoJSON Objects](https://docs.mongodb.com/manual/reference/geojson/).

### Respuestas

FeathersJS devuelve llamadas con el siguiente formato:

```js
{
  "data": [],
  "total": 100,
  "skip": 0, // Si queremos las siguientes 10 colocamos 10
  "limit": 10
}
```

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/back-chile-masivo
    npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.
## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
=======
# back
Back
>>>>>>> parent of db1d9f6... First commit
