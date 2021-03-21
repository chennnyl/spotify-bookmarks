import Layout from '../components/layout'
import Footer from '../components/footer'
import CustomHead from '../components/customhead'

import Link from 'next/link'

import withSession from '../lib/session'

export default function AppHome({ spotify_token }) {

    if(spotify_token === null) {
        return (
            <Layout className="container">
                <CustomHead />
                
                <main>
                    <h1>You are not logged in!</h1>
                    
                    <Link href="/api/login">Click here to login through Spotify</Link>
                </main>
            </Layout>
        )
    }

    return (
        <Layout className="container">
            <CustomHead />

            <main>
                <h1>You made it!</h1>

                <Link href="/api/logout">Logout</Link>
            </main>

            <Footer />
        </Layout>
    )
}

export const getServerSideProps = withSession(async ({req, res}) => {

    const spotify_token = req.session.get('auth_token');
    const refresh_token = req.session.get('refresh_token');

    return {
        props: { spotify_token: spotify_token ? spotify_token : null }
    }
    
});