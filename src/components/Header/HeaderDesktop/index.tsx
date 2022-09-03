import styles from './HeaderDesktop.module.scss'
import Image from 'next/image'

export default function HeaderDesktop ({setSectionByHFSelected}: {setSectionByHFSelected: (value: string)=>{}}) {


  return (
    <header className={styles.header}>
      <div>
        <div className={styles.optionsRight}>
          <a href="#info-section" onClick={()=>{setSectionByHFSelected('about')}}>About me</a>
          <a href="#code-section" onClick={()=>{setSectionByHFSelected('project')}}>Projects</a>
          <a href="#info-section" onClick={()=>{setSectionByHFSelected('experience')}}>Experience</a>
          <a href="#info-section" onClick={()=>{setSectionByHFSelected('education')}}>Education</a>
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



