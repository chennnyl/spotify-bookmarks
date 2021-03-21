import axios from "axios"
import withSession from "../../lib/session"

export default withSession(async (req, res) => {
    const { code, error, state } = req.query;

    if(code == undefined) {
        res.status(403).send('<h1>403 Forbidden</h1>');
        return;
    }

    const params = new URLSearchParams();

    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', process.env.REDIRECT_URI);
    params.append('client_id', process.env.SPOTIFY_CLIENT_ID);
    params.append('client_secret', process.env.SPOTIFY_CLIENT_SECRET);

    axios.post('https://accounts.spotify.com/api/token', params).then(
        async (result) => {

            const {
                access_token, scope, expires_in, refresh_token
            } = result.data;

            req.session.set('auth_token', access_token);
            req.session.set('refresh_token', refresh_token);
            await req.session.save();
            res.redirect("/home");
            return;
        }
    )
});