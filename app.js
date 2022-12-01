import mongoose from "mongoose"
import express from 'express'
import UsersController from "./controllers/users/users-controller.js";
import HelloController from "./controllers/hello-controller.js";
import cors from 'cors'
import SpotifyController from "./controllers/spotify-api/spotify-controller.js";
import LastfmController from "./controllers/lastfm-api/lastfm-controller.js";
import session from 'express-session'

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

mongoose.connect('mongodb://localhost:27017/cs5610-fa22', options);

const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(session({
    secret: 'cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false}
}))
app.use(express.json())

UsersController(app)
HelloController(app)
// SpotifyController(app)
LastfmController(app)

app.listen(4000)