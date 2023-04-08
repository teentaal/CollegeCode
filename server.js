const jsonServer = request('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares =jsonServer.defaluts();
const port = process.env.PORT || 3000;

server.user(middlewares);
server.user(router);

server.listen(port);