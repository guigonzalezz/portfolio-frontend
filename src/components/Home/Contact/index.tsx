import { Box } from '@mui/material';
import * as React from 'react';
import styles from './Contact.module.scss'
export default function Contact({ data, backgroundImg}: any) {
 
  return (
    <Box id="contact" className={styles.box}>
      <Box>
        <Box>
          <img src={backgroundImg} alt="background image"/>
        </Box>
        <section>
          Contact
        </section>
      </Box>
    </Box>
  );
}