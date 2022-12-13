import mongoose from "mongoose";
import songsSchema from "./songs-schema.js";

const songsModel = mongoose.model(
	'songsModel', songsSchema)

export default songsModel