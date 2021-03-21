export default function handler(req, res) {

    const scopes = "user-read-playback-state user-modify-playback-state user-read-private";

    res.redirect(
        'https://accounts.spotify.com/authorize?' + 
        `client_id=${process.env.SPOTIFY_CLIENT_ID}&` +
        `response_type=code&` +
        `redirect_uri=${encodeURIComponent(process.env.REDIRECT_URI)}&` +
        // `state=` +
        `scope=${encodeURIComponent(scopes)}` 
    );
    res.end();
}