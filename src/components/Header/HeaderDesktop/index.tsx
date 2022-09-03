import styles from './HeaderDesktop.module.scss'
import Image from 'next/image'

export default function HeaderDesktop () {


  return (
    <header className={styles.header}>
      <div>
        <div className={styles.optionsRight}>
          <a href="#about">About me</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
        </div>
      </div>
      <div>
        <Image width={50} height={50} src="/logo.png" alt="Guilherme Gonzalez Logo"/>
      </div>
      <div>
        <div className={styles.optionsLeft}>
          <a href="#contact">+55 18 996485419</a>
          <a href="#contact"><button>Contact me</button></a>
        </div>
      </div>
    </header>
  )
}



