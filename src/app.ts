import express , {Express,Request,Response} from "express";
import * as dotenv from 'dotenv';
import sequelize from './models'
import indexRouter from './routes/index'
import http from 'http';
import socket from './socket';
import { Server } from "socket.io";
import bodyParser from 'body-parser'
import session from 'express-session';
import cookieParser from 'cookie-parser';

dotenv.config();

const app:Express = express();
const port = 3000;
const server: http.Server = http.createServer(app);
socket(server);

app.use(
    session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie:{secure:true}
    }),
);

app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", __dirname + "/public/views");
app.use("/public", express.static(__dirname + "/public"));
app.use('/', indexRouter)

app.get("/", (_, res) => res.render("login"));
app.get("/signup", (_, res) => res.render("signup"));
app.get("/main", (_,res) => res.render("main"))
app.get("/social", (_,res) => res.render("social"))
app.get("/notePopup",(_,res) => res.render("notePopup"))

server.listen(port, async() => {
    console.log('Server is Open 3000 port')
    await sequelize.authenticate()
    .then(async () => {
        console.log("DB connection success")
    })
    .catch(e => {
        console.log(e)
    })
})