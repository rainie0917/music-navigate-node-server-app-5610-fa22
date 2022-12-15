// import mongoose from 'mongoose';
// const schema = mongoose.Schema({
//   musicName: String,
//   playerName: String,
//   AlbumName: String,
//   likes: Number,
//   liked: Boolean,
// }, {collection: 'songs'});
// export default schema;

const songsSchema = new mongoose.Schema(
    {
      likes: {type: Number},
      whoLiked: {type: [String]},
      artist: {type: String},
      realImg: {type: String},
      mbid: {type: String},
      name: {type: String},
    },
    {collection: 'songs'}
)