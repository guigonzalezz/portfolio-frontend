import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Input, Radio, RadioGroup, TextField } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import styles from './Contact.module.scss'
export default function Contact({ backgroundImg, contactImage}: any) {

 
  return (
    <Box id="contact" className={styles.box}>
      <Box>
        <Box>
          <Image src={backgroundImg} alt="background image" layout='fill'/>
        </Box>
        <section className={styles.mainSection}>
          <Box className={styles.leftSection}>
            <h1>Let&apos;s make your dream come true.</h1>
            <p>Let&apos;s discuss whenever your ideia is, and let&apos;s try together to inovate or create a brand new product.</p>
            <p>Depeding on the project size we can choose the best value to make this happen.</p>
            <p>Let&apos;s work together :)</p>
            <img src={contactImage.url} alt="person in a desk"/>
          </Box>
          <Box className={styles.rightSection}>
              <label className={styles.labelInput} htmlFor="name-input">Name</label>
              <input type="text" id="name-input" name="name-input" className={styles.inputField}/>

              <p>Which way do you want to get in touch?</p>
              <input type="radio" id="contact-option-input-1" name="contact-option-input" value="email" className={styles.radioField}/>
              <label htmlFor="contact-option-input-1">E-mail</label>
              <input type="radio" id="contact-option-input-2" name="contact-option-input" value="phone" className={styles.radioField}/>
              <label htmlFor="contact-option-input-2">Phone</label> 
              
              <label className={styles.labelInput} htmlFor="contact-input">Contact</label>
              <input type="text" id="contact-input" name="contact-input" className={styles.inputField}/>
              
              <label className={styles.labelInput} htmlFor="message-input">Message</label>
              <input type="text" id="message-input" name="message-input" className={styles.inputField}/>

              <Button variant="contained">Send Message</Button>
          </Box>
        </section>
      </Box>
    </Box>
  );
}