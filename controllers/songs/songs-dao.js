import songsModel from '../songs/songs-models.js';


// export const findSongs = () => songsModel.find();
export const findSortedSongs = () => songsModel.find().sort({"likes":-1});


export const updateSong = (sid, song) => songsModel.updateOne({_id: sid}, {$set: song})
