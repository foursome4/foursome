import express from "express";
import { Server } from 'socket.io';
import { router } from "./routes";
import http from 'http';
import dotenv from 'dotenv';

const app = express();
const bodyParser = require ('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const server = http.createServer(app);


app.use(cors());
dotenv.config();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extends: true}));
app.use(express.json());
app.use(router);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE","PATCH"],
    credentials: true
  }
});

app.get("/", (req, res) => {
  return res.json("app inicialized!");
});

export {server, io}