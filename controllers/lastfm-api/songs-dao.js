import songsModels from "./songs-model.js";

export const findAll = () => {
	return songsModels.find()
}

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


