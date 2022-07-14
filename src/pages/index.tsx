import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Guilherme Gonzalez | Software Engineer</title>
        <meta name="description" content="Guilherme Gonzalez Portfolio" />
      </Head>
      <div>
        <Header />
        <main className={styles.main}>
          <p>
            Photos
          </p>

          <p>
            Aboutme/Experience/Education/Skills
          </p>

          <p>
            Projects/Repositories/Gist
          </p>

          <p>
            Contact
          </p>


        </main>

        <Footer />
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  const data = {} //await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Home
