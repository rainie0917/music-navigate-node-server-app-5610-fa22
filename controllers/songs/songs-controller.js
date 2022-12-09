import * as songsDao from '../songs/songs-dao.js'

// const findSongs  = async (req, res) => {
//   const songs = await songsDao.findSongs()
//   res.json(songs);
// }

const findSortedSongs  = async (req, res) => {
  const songs = await songsDao.findSortedSongs()
  res.json(songs);
}



const updateSong = async (req, res) => {
  const songIdToUpdate = req.params['sid'];
  const updates = req.body;
  // const songIndex = song.findIndex(
  //     (s) => s._id === songIdToUpdate)
  // song[songIndex] =
  //     {...song[songIndex], ...updates};
  const status = await songsDao
  .updateSong(songIdToUpdate,
      updates);
  res.json(status);
  // res.sendStatus(200);

}

export default (app) => {
  // app.get('/api/songs', findSongs);
  app.get('/api/songs', findSortedSongs);
  app.put('/api/songs/:sid', updateSong);

}

