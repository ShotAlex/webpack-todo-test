# Webpack 5 Boilerplate

## Installation / Установка

```
git clone https://github.com/harryheman/Webpack5-Boilerplate.git
cd webpack-todo-test
npm install / yarn install
```

## Usage / Использование

### Development server / Сервер для разработки

```bash
npm start / yarn start
```

You can view the development server at `localhost:8080`.

Сервер запускается по адресу `localhost:8080`

### Production build / Сборка для продакшна

```bash
npm run build / yarn build
```

> Note: Install [http-server](https://www.npmjs.com/package/http-server) globally to deploy a simple server.

> Примечание: установите [http-server](https://www.npmjs.com/package/http-server) глобально для запуска простого сервера.

```bash
npm i -g http-server / yarn global add http-server
```

You can view the deploy by creating a server in `dist`.

Вы можете увидеть результат сборки, создав сервер в `dist`

```bash
cd dist && http-server
```
