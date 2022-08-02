import { Box } from '@mui/material';
import * as React from 'react';
import styles from './Photos.module.scss'
export default function Photos({ data, backgroundImg}: any) {
 
  return (
    <Box className={styles.box}>
      <Box>
        <img src={backgroundImg} alt="background image"/>
        <section>
          Photos
        </section>
      </Box>
    </Box>
  );
}