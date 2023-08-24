import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import { Server } from 'http';

import clientRoutes from "./routes/client.js"
import generalRoutes from "./routes/general.js"
import managementRoutes from "./routes/management.js"
import cattleRoutes from "./routes/cattle.js"
import userRoutes from "./routes/user.js"
import onsalecattleRoutes from "./routes/onsalecattle.js"

import Cattle from './models/Cattle.js';
import Question from './models/Question.js';
import User from './models/User.js';
import Staff from './models/Staff.js';
import Doctor from './models/Doctor.js';

import { dataProduct, dataCattle, dataUser, dataQuestions, dataStaff, dataDoctor } from "./data/index.js"
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));

app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/cattle", cattleRoutes);
app.use("/user", userRoutes);
app.use("/onsalecattle", onsalecattleRoutes);


const PORT = process.env.PORT || 9000;

const io = new Server({
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, ()=> console.log(`Server Port: ${PORT}`))
    // console.log(`data inserting`)
    // Product.insertMany(dataProduct);
    // Cattle.insertMany(dataCattle);
    // User.insertMany(dataUser);
    // Question.insertMany(dataQuestions);
    // Staff.insertMany(dataStaff);
    // Doctor.insertMany(dataDoctor);
    // console.log(`data inserted`)

}).catch((error) => console.log(`${error} did not connect`));
