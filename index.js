const jsonServer = require('json-server')
const server = jsonServer.create()
const route = jsonServer.router('db.json')
const middleware = jsonServer.defaults() // GET, POST, PUT, PATCH, DELETE
const cors = require('cors')

server.use(cors());
server.use(middleware);
server.use(route)

const port = 3000;
const host = 'localhost';

server.listen(port,()=>{
    console.log(`server listening on http://${host}:${port}`);
})
