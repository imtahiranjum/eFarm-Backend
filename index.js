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
import cattleRoutes from "./routes/cattle.js"
import userRoutes from "./routes/user.js"
import onsalecattleRoutes from "./routes/onsalecattle.js"
import conversationRoutes from "./routes/conversations.js"
import messageRoutes from "./routes/messages.js"
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
app.use(cookieParser());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));

app.use(morgan("common"));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/cattle", cattleRoutes);
app.use("/user", userRoutes);
app.use("/onsalecattle", onsalecattleRoutes);
app.use("/conversations", conversationRoutes);
app.use("/messages", messageRoutes);



const PORT = process.env.PORT || 9000;

const io = new Server({
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, ()=> console.log(`Server Port: ${PORT}`))

}).catch((error) => console.log(`${error} did not connect`));
