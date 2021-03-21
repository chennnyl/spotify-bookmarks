import Layout from '../components/layout'
import Footer from '../components/footer'
import CustomHead from '../components/customhead'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import withSession from '../lib/session'

export default function Home({ spotify_token }) {

    const router = useRouter();

    useEffect(() => {
        if (!(spotify_token === null)) {

            router.push('/home')
        }
    }, [spotify_token])


    return (
        <Layout className="container">
            <CustomHead />

            <main>
                <div className="title">
                    <h1>Spotify Bookmarks</h1>
                    <h2>Save your favorite moments in songs with ease</h2>
                </div>

                <Link href="/api/login">Login with Spotify</Link>

                <Footer />

            </main>


            <style jsx>{`

          .title > h1 {
            line-height: 0px;
          }

        `}</style>

        </Layout>

    )
}

export const getServerSideProps = withSession(async ({ req, res }) => {

    const spotify_token = req.session.get('auth_token');
    const refresh_token = req.session.get('refresh_token');

    return {
        props: {
            spotify_token: spotify_token ? spotify_token : null,
            refresh_token: refresh_token ? refresh_token : null
        }
    }

});
