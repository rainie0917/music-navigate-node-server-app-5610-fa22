import SpotifyWebApi from 'spotify-web-api-node'

// credentials are optional
let spotifyApi = new SpotifyWebApi({
	clientId: 'edf38474c219489c9b65f533453e492a',
	clientSecret: '7e5700ff8be340bc830d8431b4a6bdb3',
	redirectUri: 'http://127.0.0.1:4000/callback'
})

export default spotifyApi