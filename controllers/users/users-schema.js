import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: ['ADMIN', 'FAN', 'ARTIST']},
    adminInvitationCode: {type: String},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    likedSongs: {type: [String]},
    following: {type: [String]}

}, {collection: 'users'})

export default usersSchema