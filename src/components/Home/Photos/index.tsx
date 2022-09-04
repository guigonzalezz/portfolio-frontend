import { Box } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import styles from './Photos.module.scss'
export default function Photos({ data, backgroundImg}: any) {
 
  return (
    <Box id="photos" className={styles.box}>
      <Box>
        <Box>
          <Image src={backgroundImg} alt="background image" layout='fill'/>
        </Box>
        <section>
          Photos
        </section>
      </Box>
    </Box>
  );
}