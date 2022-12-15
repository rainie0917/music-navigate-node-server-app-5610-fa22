import mongoose from 'mongoose';
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
export default songsSchema;