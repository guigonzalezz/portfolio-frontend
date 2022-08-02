import { Box } from '@mui/material';
import * as React from 'react';
import styles from './Contact.module.scss'
export default function Contact({ data, backgroundImg}: any) {
 
  return (
    <Box className={styles.box}>
      <Box>
        <img src={backgroundImg} alt="background image"/>
        <section>
          Contact
        </section>
      </Box>
    </Box>
  );
}