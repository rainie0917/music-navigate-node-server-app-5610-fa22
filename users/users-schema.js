import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, require:true, enum: ['ADMIN', 'FAN', 'SINGER'], default: 'FAN'},
    firstName: String,
    lastName: String,
    email: String,
}, {collection: 'users'})

export default usersSchema