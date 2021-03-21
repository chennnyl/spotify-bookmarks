# Spotify Bookmarks Manager

This is a webapp written in Next.js that lets you store your favorite moments in songs and instantly play them back through Spotify. Got a favorite verse, solo, or beat drop? Write it down once through Spotify Bookmarks Manager and play it back instantly any time! 

## TODO
- Create DB of song IDs and timestamps (more efficient way of doing it?)
- Create subapi for spotify requests
    - seek to position
    - ????
- better css
- 

## Required environment variables for `.env.local`
- `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET`: Self-explanatory, grab em' by making an application on the Spotify Developer Portal
- `REDIRECT_URI`: the URI that points to your token-generating API endpoint; for example, `http://localhost:8080/api/token`
- `IRON_SESSION_PASSWORD`: a secure password (at least 32 characters) used to hash session variables with `next-iron-session`