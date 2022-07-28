import { Box } from '@mui/material'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MyTabs from '../components/Tabs'


import styles from '../styles/Home.module.scss'
import { getGithubGistData, getGithubReposData } from '../utility/githubData'
import { getGraphQLData } from '../utility/graphqlData'

interface IProps {
  name: string;
  data: any;
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      data: [
        ...await getGraphQLData(),
        await getGithubReposData(),
        await getGithubGistData()
      ]
    }, 
    revalidate: 3600, //3600sec = 60min = 1h
  };
}

const Home: NextPage<{data: IProps[]}> = ({data}) => {
  const firstSection = data.filter((item: IProps) => ['about', 'experience', 'education', 'skill'].includes(item.name))
  const secondSection = data.filter((item: IProps) => ['project', 'repositories', 'gist'].includes(item.name))

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
          
          <MyTabs data={firstSection}/>
         
          <MyTabs data={secondSection}/>

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
