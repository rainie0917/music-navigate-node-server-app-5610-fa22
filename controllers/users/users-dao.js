import usersModel from "./users-model.js";

//sign up createUser and findByUsername
export const findByUsername = (username) =>
    usersModel.findOne({username})

export const register = async (user) => {
    const existingUser = await findByUsername(user.username)
    if (existingUser) {
        return res.status(403);
    }
    usersModel.create(user);
}

export const findByCredentials = (username, password) =>
    usersModel.findOne(
        {username, password},
        {password: false})