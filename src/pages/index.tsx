import type { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.title}>
          Header
        </h1>

      </header>
      <main className={styles.main}>
        <p className={styles.description}>
         Photos
        </p>

        <p className={styles.description}>
          Aboutme/Experience/Education/Skills
        </p>

        <p className={styles.description}>
          Projects/Repositories/Gist
        </p>

        <p className={styles.description}>
          Contact
        </p>


      </main>

      <footer className={styles.footer}>
        <h1 className={styles.title}>
          Footer
        </h1>
      </footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Home
