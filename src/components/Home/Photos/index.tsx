import { Box } from '@mui/material';
import * as React from 'react';
import styles from './Photos.module.scss'
export default function Photos({ data, backgroundImg}: any) {
 
  return (
    <Box id="photos" className={styles.box}>
      <Box>
        <Box>
          <img src={backgroundImg} alt="background image"/>
        </Box>
        <section>
          Photos
        </section>
      </Box>
    </Box>
  );
}