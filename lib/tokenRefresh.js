import axios from 'axios'

export default function tokenRefresh({ err, res }) {
    if(err.response && err.response.status == 401) {
        axios.post(`http://localhost:8080/api/token?code=${encodeURIComponent(refresh_token)}&origin=redirect`).then(
            (result) => {
                res.json({ status: "refreshed token" })
            }
        ).catch(
            (err) => {
                if(err.response) {
                    res.json({ status: err.response.status })
                } else {
                    res.json({ status: "BAD!" })
                }
                
            }
        )
    }
}