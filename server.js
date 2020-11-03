const http = require("http");
const express = require("express");
const routes = require("./routes");
const logger = require("morgan");

// 라우터 내 폴더 가져오기
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(routes);
const server = http.createServer(app);
server.listen(8000, () => console.log(`Server is listening on 8000`));
