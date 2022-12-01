import usersModel from "./users-model.js";

//sign up createUser and findByUsername
export const findByUsername = (username) =>
    usersModel.findOne({username})

export const register = async (user) => {
    const existingUser = await findByUsername(user.username)
    if (existingUser) {
        return res.status(403);
    }
    create(user);
}

export const findByCredentials = (username, password) =>
    usersModel.findOne(
        {username, password},
        {password: false})

export const createUser = (user) =>
    usersModel.create(user)

export const findAllUsers = () =>
    usersModel.find()

export const findUserById = (uid) =>
    usersModel.findById(uid)

export const deleteUser = (uid) =>
    usersModel.deleteOne({_id: uid})

export const updateUser = (uid, userUpdates) =>
    usersModel.updateOne({_id: uid},
        {$set: userUpdates})
