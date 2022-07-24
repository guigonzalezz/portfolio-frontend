import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'


import styles from '../styles/Home.module.scss'
import { getGraphQLData } from '../utility/graphqlData'


export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      data: await getGraphQLData()
    }, 
    revalidate: 3600, //3600sec = 60min = 1h
  };
}

const Home: NextPage = ({data}:any) => {

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

export default Home
