import styles from './HeaderMobile.module.scss'
import Image from 'next/image'
import Drawer from '../../Drawer'
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';

export default function HeaderMobile() {


  return (
    <header className={styles.header}>
      <div>
        <div className={styles.optionsLeft}>
          <Drawer />
        </div>
      </div>
      <div>
        <Image width={50} height={50} src="/logo.png" alt="Guilherme Gonzalez Logo"/>
      </div>
      <div>
        <div className={styles.optionsRight}>
          <a href="#contact">
            <PermPhoneMsgIcon/>
          </a>
        </div>
      </div>
    </header>
  )
}

