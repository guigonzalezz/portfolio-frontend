import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import axios from 'axios'

import styles from '../styles/Home.module.scss'

const URL = process.env.BACKEND_CMS_URL

export const getStaticProps: GetStaticProps = async (context) => {
 
  await Promise.all([
    
  ])

  const res = await axios.post(`${URL}/graphql`,{
    query: `{
      experiences {
        data {
          attributes {
            company
            where
            whenstarted
            whenended
            experiencedetails {
              data {
                attributes {
                  title
                  whenstarted
                  whenended
                  description
                }
              }
            }
          }
        }
      }
    }
    `
  })
  
  console.log("res ==>", res.data)
  const {data} = res; 

  return {
    props: {experiences: data}, 
    revalidate: 10, 
  };
}

const Home: NextPage = ({experiences}:any) => {
  console.log("experiences =>", experiences)
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
