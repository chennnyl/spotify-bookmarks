import { withIronSession } from "next-iron-session"

export default function withSession(handler) {
    return withIronSession(handler, {
        password: process.env.IRON_SESSION_PASSWORD,
        cookieName: "spotifyBookmarks",
        cookieOptions: {
            secure: process.env.NODE_ENV === "production"
        }
    })
}

