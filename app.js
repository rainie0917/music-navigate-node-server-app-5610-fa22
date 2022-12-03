import mongoose from "mongoose"
import express from 'express'
import cors from 'cors'
import session from 'express-session'
import UsersController from "./controllers/users/users-controller.js";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

const MUSIC_CONNECTION_STRING = process.env.DB_MUSIC_CONNECTION_STRING || 'mongodb://localhost:27017/music'
mongoose.connect(MUSIC_CONNECTION_STRING, options);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log(`Connected successfully to: ${MUSIC_CONNECTION_STRING}`)
});

const app = express();
app.use(cors({
    credentials: true,
    origin: true
}))
app.use(session({
    secret: 'should be an environment variable',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(express.json())
UsersController(app)
const PORT = (process.env.PORT || 4000);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))