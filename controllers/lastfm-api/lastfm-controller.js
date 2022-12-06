import https from 'https';

const APIKEY = "6ce8b37cb0b83ad6e2c24435683ef490"
const LastfmController = (app) => {
	const searchSong = async (req, res) =>
	{
		const title = req.params.title
		const url = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${title}&api_key=${APIKEY}&format=json`
		console.log("url: " + url);
		https.get(url, (lastfmResponse) => {
			if (lastfmResponse.statusCode != 200) {
			}
			
			let data = '';
			
			lastfmResponse.on('data', (chunk) => {
				data += chunk;
			});
			
			lastfmResponse.on('close', () => {
				console.log('Retrieved all data');
				res.write(data);
			});
			
		})
	}
	
	app.get("/search/:title", searchSong)
}

export default LastfmController;