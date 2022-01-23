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
const port = process.env.PORT || 3333;

// dotenv.config();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extends: true}));
app.use(express.json());
app.use(router);
app.use((req, res, next) =>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method", "['GET', 'PUT', 'POST', 'PATCH, DELETE]");
  app.use(cors());
  next()
}) 

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3334",
    methods: ["GET", "POST"],
    credentials: true
  }
});

app.get("/", (req, res) => {
  return res.json("app inicialized!");
});

io.on("connection", (socket) => {
  console.log(`User Connection ${socket.id}`)
  console.log("Connection successfully established!");
  
  socket.on("disconnect", () => {
    console.log("Disconnected user!", socket.id);
  });
});

server.listen(port, () => {
  console.log(`Server initialized! Access the link: http://localhost:${port}`);
});
