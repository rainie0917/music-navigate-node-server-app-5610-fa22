import mongoose from 'mongoose';
const schema = mongoose.Schema({
  musicName: String,
  playerName: String,
  AlbumName: String,
  likes: Number,
  liked: Boolean,
}, {collection: 'songs'});
export default schema;