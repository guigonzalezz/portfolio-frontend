import Head from 'next/head';
import Image from 'next/image';
import Router from "next/router";

import styles from '../styles/404.module.scss'

const NotFound = () => (
  <>
    <Head>
      <title>
        404 | Not found
      </title>
    </Head>
    <div className={styles.main}>
      <Image width={100} height={100} src="/logo.png" alt="Guilherme Gonzalez Logo"/>
      <span className={styles.number}>404</span>
      <span className={styles.phrase}>Ops, page not found!</span>
      <span onClick={() => Router.push("/")} className={styles.redirect}>&lt; Lets go back home &gt;</span>
    </div>
  </>
);

export default NotFound;
