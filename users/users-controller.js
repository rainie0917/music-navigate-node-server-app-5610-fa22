import * as userDao from './users-dao.js'
import {findByCredentials, findByUsername} from "./users-dao.js";

let currentUser = null

const UsersController = (app) => {
    const register = async (req, res) => {
        const user = req.body
        const existingUser = await findByUsername(user.username)
        if (existingUser) {
            res.status(403);
            return
        }
        const currentUser = await userDao.register(user)
        req.session['currentUser'] = currentUser
        res.json(currentUser)
    }

    const login = async (req, res) => {
        const credentials = req.body
        const existingUser = await findByCredentials(credentials.username, credentials.password)
        if (!existingUser) {
            res.sendStatus(403)
            return
        }
        currentUser = existingUser
        res.json(existingUser)
    }

    const logout = (req, res) => {
        currentUser = null
        res.sendStatus(200)
    }

    const profile = async (req, res) => {
        if (currentUser) {
            res.json(currentUser)
            return
        }
        res.sendStatus(403)
    }

    app.post('/register', register)
    app.post('/login', login)
    app.post('/profile', profile)
    app.post('/logout', logout)
}

export default UsersController