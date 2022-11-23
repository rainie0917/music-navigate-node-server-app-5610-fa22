import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, unique:true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    neuId: {type: String, required: true, unique: true},
    type: {type: String, enum: ['STUDENT', 'FACULTY', 'STAFF']},
}, {collection: 'users'})

export default usersSchema