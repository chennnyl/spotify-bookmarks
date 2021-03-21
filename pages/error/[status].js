import Layout from '../../components/layout'
import Footer from '../../components/footer'
import CustomHead from '../../components/customhead'

import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Post() {
    const router = useRouter();

    const { status } = router.query
    
    return (
        <Layout>
            <CustomHead />

            <h1>Error code {status}</h1>
            <p>Something went wrong... Sorry about that!</p>

            <Link href="/">Head home</Link>

            <Footer />
        </Layout>
    )
}