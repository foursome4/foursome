import express from "express";
import { Server } from 'socket.io';
import { router } from "./routes";
import http from 'http';
import dotenv from 'dotenv';
import { handlerWebSockets } from "./websockets/handler";
import verifyUserID from "./websockets/middleware/auth";

const app = express();
const bodyParser = require ('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const server = http.createServer(app);
const port = process.env.PORT || 3333;

dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extends: true}));
app.use(express.json());
app.use(router);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.get("/", (req, res) => {
  return res.json("app inicialized!");
});

io.use(verifyUserID);
handlerWebSockets(io);

server.listen(port, () => {
  console.log(`Server initialized! Access the link: http://localhost:${port}`);
});