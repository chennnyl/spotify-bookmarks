import Layout from '../components/layout'
import Footer from '../components/footer'
import CustomHead from '../components/customhead'

export default function Home() {
  return (
      <Layout className="container">
        <CustomHead />

        <main>
          <div className="title">
            <h1>Spotify Bookmarks</h1>
            <h2>Save your favorite moments in songs with ease</h2>
          </div>

          

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
