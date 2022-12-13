import mongoose from "mongoose"

const songsSchema = new mongoose.Schema(
	{
		liked: {type: Boolean},
		likes: {type: Number},
		whoLiked: {type: [String]},
		artist: {type: String},
		realImg: {type: String},
		mbid: {type: String},
		name: {type: String},
	},
	{collection: 'songs'}
)

// const attrSchema = new mongoose.Schema({
// 	type: positionSchema
// })
//
// const albumSchema = new mongoose.Schema({
// 	artist: {type: String},
// 	title: {type: String},
// 	mbid: {type: String},
// 	url: {type: String},
// 	image: {type: imageSchema},
// 	"@attr": {type: attrSchema},
// })
//
// const tagSchema = new mongoose.Schema(
// 	{
// 		type:[{
// 			name: {type: String},
// 			url: {type: String}
// 		}]
// 	})
//
// const topTagSchema = new mongoose.Schema(
// 	{
// 		tag: {type: tagSchema}
// 	}
// )
//
// const artistSchema = new mongoose.Schema(
// 	{
// 		name: {type: String},
// 		mbid: {type: String},
// 		url: {type: String}
// 	}
// )
//
// const streamableSchema = new mongoose.Schema(
// 	{
// 		#text: {type: String},
// 		fulltrack: {type: String}
// 	}
// )
//
// const wikiSchema = new mongoose.Schema({
// 	published: {type: String},
// 	summary: {type: String},
// 	content: {type: String}
// })
//
// const trackSchema = new mongose.Schema({
// 	name: {type: String},
// 	mbid: {type: String},
// 	url: {type: String},
// 	duration: {type: String},
// 	streamable: {type: streamableSchema},
// 	listeners: {type: String},
// 	playcount: {type: String},
// 	artist: {type: artistSchema},
// 	album: {type: albumSchema},
// 	toptags: {type: topTagSchema},
// 	wiki: {type: wikiSchema},
// })
//
// const whoLikedSchema = new mongoose.Schema({
// 	track: {type: trackSchema},
// 	liked: {type: Boolean},
// 	whoLiked: [String]
// },
// 	{collection: 'songs'})

export default songsSchema


