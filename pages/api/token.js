import axios from "axios"
import withSession from "../../lib/session"

export const config = {
    api: {
        externalResolver: true
    }
}

export default withSession(async (req, res) => {
    const { code, error, state, origin } = req.query;

    if(code == undefined) {
        res.redirect("/error/403");
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
            if(origin != 'redirect') {
                res.redirect("/home");
            } else {
                res.json({status: "OK"})
            }
            return;
        }
    ).catch(
        (err) => {
            if(err.response) {
                res.redirect(`/error/${err.response.status}`);
            }
            
        }
    )
});