import Layout from '../components/layout'
import Footer from '../components/footer'
import CustomHead from '../components/customhead'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import withSession from '../lib/session'

import useSWR from 'swr'
import axios from 'axios'

const fetcher = url => axios.get(url).then(res => res.data)

export default function AppHome({ loggedIn }) {

    const router = useRouter();

    if(!loggedIn) {
        return (
            <Layout className="container">
                <CustomHead />
                
                <main>
                    <h1>You are not logged in!</h1>
                    
                    <Link href="/api/login">Click here to login through Spotify</Link>
                </main>

                <Footer />
            </Layout>
        )
    }

    const { data, error } = useSWR('/api/spotify/user')

    if(error) {
        router.push(`/error/${error}`)
        return;
    } else if(!data) {
        return (
            <Layout className="container">
                <CustomHead />
                
                <main>
                    <h1>Loading your profile...</h1>
                </main>
            </Layout>
        )
    }

    return (
        <Layout className="container">
            <CustomHead />

            <main>
                <h1 className="bar">You made it{data.display_name ? ', ' + data.display_name : ''}! <Image className="pfp" src={data.images ? data.images[0].url : "/favicon.ico"} height={50} width={50} /></h1>

                <p>Here's what I know about you:</p>
                <br/>
                <code>
                    { JSON.stringify(data) }
                </code>
                <br/>

                <Link href="/api/logout">Logout</Link>
            </main>

            <Footer />
        </Layout>
    )
}

export const getServerSideProps = withSession(async ({req, res}) => {

    const spotify_token = req.session.get('auth_token');

    return {
        props: { 
            loggedIn: spotify_token ? true : false,
        }
    }
    
});