import styles from './HeaderMobile.module.scss'
import Image from 'next/image'

const HeaderMobile = () => {


  return (
    <header className={styles.header}>
      <div>
        <div className={styles.optionsRight}>
          <span>About me</span>
          <span>Projects</span>
          <span>Experience</span>
          <span>Education</span>
        </div>
      </div>
      <div>
        <Image width={50} height={50} src="/logo.png" alt="Guilherme Gonzalez Logo"/>
      </div>
      <div>
        <div className={styles.optionsLeft}>
          <button>Contact me</button>
        </div>
      </div>
    </header>
  )
}



export default HeaderMobile