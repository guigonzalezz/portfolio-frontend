import styles from './HeaderMobile.module.scss'
import Image from 'next/image'
import Drawer from '../../Drawer'

const HeaderMobile = () => {


  return (
    <header className={styles.header}>
      <div>
        <div className={styles.optionsRight}>
          <Drawer />
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