const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Используйте CORS
server.use(cors());

// Используйте стандартные middlewares json-server (например, для логирования и статичных файлов)
server.use(middlewares);
server.use(router);

// Запускаем сервер на порту 3000
server.listen(3000, () => {
  console.log('JSON Server is running on http://localhost:3000');
});
