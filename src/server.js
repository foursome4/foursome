"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var socket_io_1 = require("socket.io");
var routes_1 = require("./routes");
var http_1 = __importDefault(require("http"));
var dotenv_1 = __importDefault(require("dotenv"));
var app = (0, express_1.default)();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var server = http_1.default.createServer(app);
var port = process.env.PORT || 3333;
dotenv_1.default.config();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extends: true }));
app.use(express_1.default.json());
app.use(routes_1.router);
var io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:3334",
        methods: ["GET", "POST"],
        credentials: true
    }
});
app.get("/", function (req, res) {
    return res.json("app inicialized!");
});
io.on("connection", function (socket) {
    console.log("User Connection " + socket.id);
    console.log("Connection successfully established!");
    socket.on("disconnect", function () {
        console.log("Disconnected user!", socket.id);
    });
});
server.listen(port, function () {
    console.log("Server initialized! Access the link: http://localhost:" + port);
});
