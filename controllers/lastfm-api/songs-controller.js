import * as songsDao from './songs-dao.js'

const SongsController = (app) => {
	const findAll = async (req, res) => {
		const songs = await songsDao.findAll()
		res.json(songs)
	}

	const findSortedSongs  = async (req, res) => {
		const songs = await songsDao.findSortedSongs()
		res.json(songs);
	}
	
	const findByMbid = async (req, res) => {
		const mbid = req.params.mbid
		const song = await songsDao.findByMbid(mbid)
		res.json(song)
	}
	
	const updateSong = async (req, res) => {
		const songUpdates = req.body
		const mbid = req.params.mbid
		const status = await songsDao.updateSong(mbid, songUpdates)
		res.json(songUpdates)
	}

	
	const createSong = async (req, res) => {

		const song = await songsDao.createSong(req.body)
		res.json(song)
	}
	
	app.get('/songs', findAll)
	// app.get('/songs', findSortedSongs)
	app.get('/songs/:mbid', findByMbid)
	app.post('/songs', createSong)
	app.put('/songs/:mbid', updateSong)
}

export default SongsController