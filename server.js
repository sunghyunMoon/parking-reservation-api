const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // JSON 파일 경로
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3000; // Render에서 PORT 환경 변수를 자동 설정
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});