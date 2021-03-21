import axios from "axios"

import withSession from '../../../lib/session'
import tokenRefresh from '../../../lib/tokenRefresh'

export const config = {
    api: {
        externalResolver: true
    }
}

export default withSession(async (req, res) => {

    const spotify_token = req.session.get('auth_token');
    const refresh_token = req.session.get('refresh_token');

    const instance = axios.create({
        baseURL: 'https://api.spotify.com/v1/',
        headers: {'Authorization': `Bearer ${spotify_token}`}
    })

    instance.get('/me').then(
        (result) => {
            res.json({...result.data})
        }
    ).catch(
        (err) => {
            tokenRefresh({ err, res })
        }
    )

});