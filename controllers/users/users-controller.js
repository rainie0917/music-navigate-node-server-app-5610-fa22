import * as userDao from './users-dao.js'
import {findUserById} from "./users-dao.js";

let currentUser = null

const UsersController = (app) => {
    const findAllUsers = async (req, res) => {
        const users = await userDao.findAllUsers()
        res.json(users)
    }

    const findUserById = async(req, res) => {
        const uid = req.params.uid
        const user = await userDao.findUserById(uid)
        res.json(user)
    }

    const findUserByUsername = async (req, res) => {
        const username = req.params.username
        const user = await userDao.findByUsername(username)
        res.json(user)
    }

    const createUser = async (req, res) => {
        const newUser = req.body
        const actualUser = await userDao.createUser(newUser)
        res.json(actualUser)
    }

    const deleteUser = async (req, res) => {
        const uid = req.params.uid
        const status = await userDao.deleteUser(uid)
        res.json(status)
    }

    const updateUser = async (req, res) => {
        const uid = req.params.uid
        const updates = req.body
        const status = await userDao.updateUser(uid,  updates)
        res.json(updates)
    }

    const register = async (req, res) => {
        const user = req.body
        const existingUser = await userDao.findByUsername(user.username)
        if (existingUser) {
            res.sendStatus(403);
            console.log("Username already exists")
            return
        }
        const currentUser = await userDao.createUser(user)
        req.session['currentUser'] = currentUser
        res.json(currentUser)
    }

    const login = async (req, res) => {
        const credentials = req.body
        const existingUser = await userDao.findByCredentials(credentials.username, credentials.password)
        if (!existingUser) {
            res.sendStatus(403)
            console.log("User does not exists, please enter a correct username or register an account")
            return
        }
        req.session['currentUser'] = existingUser
        res.json(existingUser)
    }

    const logout = (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }

    const profile = async (req, res) => {
        if (req.session['currentUser']) {
            res.send(req.session['currentUser'])
        } else {
            res.sendStatus(403)
        }
    }

    // const findUserById = async (req, res) => {
    //     const uid = req.params.uid
    //     const status = await userDao.findUserById(uid)
    //     res.json(status)
    // }


    app.post('/users', createUser)
    app.get('/users', findAllUsers)
    app.get('/users/:uid', findUserById)
    app.get('/users/username/:username', findUserByUsername)
    app.delete('/users/:uid', deleteUser)
    app.put('/users/:uid', updateUser)
    app.get('/users/:uid', findUserById)

    app.post('/register', register)
    app.post('/login', login)
    app.post('/profile', profile)
    app.post('/logout', logout)
}

export default UsersController