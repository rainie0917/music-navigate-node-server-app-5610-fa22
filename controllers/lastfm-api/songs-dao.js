import songsModels from "./songs-model.js";
import songsModel from "../songs/songs-models.js";

export const findAll = () => {
	return songsModels.find()
}

export const findSortedSongs = () => songsModel.find().sort({"likes":-1});

export const findByMbid = (mbid) => {
	return songsModels.findOne({mbid: mbid})
}

export const updateSong = (mbid, songUpdates) => {
	return songsModels.updateOne({mbid: mbid},
		{$set: songUpdates})
}

export const createSong = (song) => {
	return songsModels.create(song)
}


