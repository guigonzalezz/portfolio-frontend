
import Image from 'next/image'
import styles from './Footer.module.scss'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

const Footer = () => {
  


  return (
    <footer className={styles.footer}>
      <div className={styles.primaryPart}>
        <div>
          <Image className={styles.image} width={90} height={90} src="/logo.png" alt="Guilherme Gonzalez Logo"/>
        </div>
        <p>Full Stack developer focused on transforming dreams into reality</p>
      </div>

      <div className={styles.secondPart}>
        <span>About me</span>
        <span>Projects</span>
        <span>Experience</span>
        <span>Education</span>    
      </div>


      <div className={styles.thirdPart}>
        <div className={styles.icons}>
          <Link href="https://github.com/guigonzalezz"><GitHubIcon className={styles.icon}/></Link>
          <Link href="https://www.linkedin.com/in/guilherme-c-gonzalez-342bb4158/"><LinkedInIcon className={styles.icon}/></Link>
          <Link href="https://www.instagram.com/guigonzalez__/"><InstagramIcon className={styles.icon}/></Link>
        </div>
        <p>© 2022 gonzalezdev. All rights reserved.</p>
      </div>

    </footer>
  )
}


export default Footer