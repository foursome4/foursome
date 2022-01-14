import express from "express";

import { router } from "./routes";

const bodyParser = require ('body-parser')
const cookieParser = require('cookie-parser');
const cors = require('cors');

const server = express();
const port = 3333;

server.use(cors());
server.use(cookieParser());
server.use(bodyParser.urlencoded({extends: true}))
server.use(express.json());
server.use(router);

server.get("/", (req, res) => {
  return res.send("Server inicialized!");
});

server.listen(port, () => {
  console.log(`Server initialized! Access the link: http://localhost:${port}`);
});
