import { Box } from '@mui/material'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Contact from '../components/Home/Contact'
import Photos from '../components/Home/Photos'
import MyTabs from '../components/Tabs'


import styles from '../styles/Home.module.scss'
import { getGithubGistData, getGithubReposData } from '../utility/githubData'
import { getGraphQLData } from '../utility/graphqlData'

interface IProps {
  name: string;
  data: any;
}

export const getStaticProps: GetStaticProps = async (context) => {
  //TODO: Reduce the size data returned, cuz exceeds the threshold
  //Now: 260 kB
  //Reduce to: less than 128 kB

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

  const medias = data.find(e => e.name === 'media')?.data;
  
  const rightBackground = medias.find((e:any) => e.attributes.photo.data.attributes.name == 'background-right.png').attributes.photo.data.attributes
  const leftBackground = medias.find((e:any) => e.attributes.photo.data.attributes.name == 'background-left.png').attributes.photo.data.attributes
  const contactImage = medias.find((e:any) => e.attributes.photo.data.attributes.name == 'contact.png').attributes.photo.data.attributes
  
  const [sectionByHFSelected, setSectionByHFSelected] = useState('')
  
  return (
    <>
      <Head>
        <title>Guilherme Gonzalez | Software Engineer</title>
        <meta name="description" content="Guilherme Gonzalez Portfolio" />
      </Head>
      <div>
        <Header setSectionByHFSelected={setSectionByHFSelected}/>
        <main className={styles.main}>

          <Photos backgroundImg={rightBackground.url}/>

          <MyTabs id="info-section" data={firstSection} sectionByHFSelected={sectionByHFSelected}/>

          <MyTabs id="code-section" data={secondSection} sectionByHFSelected={sectionByHFSelected}/>

          <Contact backgroundImg={leftBackground.url} contactImage={contactImage}/>

        </main>
        <Footer setSectionByHFSelected={setSectionByHFSelected}/>
      </div>
    </>
  )
}

export default Home
