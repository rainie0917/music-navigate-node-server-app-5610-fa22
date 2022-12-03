import https from 'https';
import axios from 'axios'

const APIKEY = "6ce8b37cb0b83ad6e2c24435683ef490"
const LastfmController = (app) => {
	const searchTitle = async (req, res) =>
	{
		const title = req.params.title
		const url = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${title}&api_key=${APIKEY}&format=json`
		// console.log("url: " + url);
		axios.get(url)
			.then(response => {
				res.json(response.data)
			})
			.catch(error => {
				res.status(500).send("An error occurred")
			})
	}
	
	const getDetailByMBID= async (req, res) => {
		const mbid = req.params.mbid
		const url = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${APIKEY}&mbid=${mbid}&format=json`
		axios.get(url)
			.then(response => {
				res.json(response.data)
			})
			.catch(error => {
				res.status(500).send("An error occurred")
			})
	}
	

	app.get("/search/:title", searchTitle)
	app.get("/details/:mbid", getDetailByMBID)
}

export default LastfmController;
