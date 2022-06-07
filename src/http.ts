import express from "express";
import { Server } from 'socket.io';
import { router } from "./routes";
import http from 'http';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
const bodyParser = require ('body-parser');
const cookieParser = require('cookie-parser');

const server = http.createServer(app);


app.use(cors());
dotenv.config();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extends: true}));
app.use(express.json());
app.use(router);

const io = new Server(server, {
  cors: {
    origin: ["https://www.foursome.com.br", "https://adm.foursome.com.br", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE","PATCH"],
    credentials: true
  }
});

app.get("/", (req, res) => {
  return res.json("app inicialized!");
});

export {server, io}