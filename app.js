import mongoose from "mongoose"
import express from 'express'
import cors from 'cors'
import session from 'express-session'
import UsersController from "./controllers/users/users-controller.js";
import LastfmController from "./controllers/lastfm-api/lastfm-controller.js";

import SongsController_home from "./controllers/songs/songs-controller.js";
import SongsController from "./controllers/lastfm-api/songs-controller.js";


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

const MUSIC_CONNECTION_STRING = "mongodb+srv://musicappcs5610fa22:lRUL6AL8KuX5ECmV@cluster0.h41fvkx.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(MUSIC_CONNECTION_STRING, options);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log(`Connected successfully to: ${MUSIC_CONNECTION_STRING}`)
});

const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(session({
    secret: 'should be an environment variable',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(express.json())
UsersController(app)
LastfmController(app)

// <<<<<<< HEAD
//
// SongsController(app);
// const PORT = (process.env.PORT || 4000);
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

// =======

app.listen(4000, () => console.log(`Server running on port 4000`))

SongsController(app)
SongsController_home(app)