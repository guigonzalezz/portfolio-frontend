import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import styles from './Contact.module.scss'
import { useForm } from 'react-hook-form';
import { Input } from '../../Input';
import { Select } from '../../Select';
import IFormValues from '../../../shared/interfaces/formValues.interface';
import { InputRadio } from '../../Input Radio';
import { InputMultiline } from '../../Input Multiline';


export default function Contact({ backgroundImg, contactImage }: any) {
  const { register, handleSubmit, formState: { errors }, } = useForm<IFormValues>();

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
  };
  // Continue using this site as a reference -> https://react-hook-form.com/get-started/
  return (
    <Box id="contact" className={styles.box}>
      <Box>
        <Box>
          <Image src={backgroundImg} alt="background image" layout='fill' className={styles.backgroundImage}/>
        </Box>
        <section className={styles.mainSection}>
          <Box className={styles.leftSection}>
            <h1>Let&apos;s make your dream come true.</h1>
            <p>Let&apos;s discuss whenever your ideia is, and let&apos;s try together to inovate or create a brand new product.</p>
            <p>Depeding on the project size we can choose the best value to make this happen.</p>
            <p>Let&apos;s work together :)</p>
            <Image src={contactImage.url} alt="person in a desk" width={contactImage.width} height={contactImage.height} />
          </Box>
          <Box className={styles.rightSection}>
            <form onSubmit={handleSubmit(data => onSubmit(data))}> 

              <Input register={register} label="Name" {...register("Name")} required />
              {errors.Name && <p className={styles.errorMessage} >Your name is required.</p>}

              <InputRadio register={register} title="Which way do you want to get in touch?" required label="Option" {...register("Option")} radios={[{ value: 'email', text: 'E-mail' }, { value: 'phone', text: 'Phone' }]}/>
              {errors.Option && <p className={styles.errorMessage}>Please select an option.</p>}

              <Input register={register} label="Contact" {...register("Contact")} required />
              {errors.Contact && <p className={styles.errorMessage}>Your contact is required.</p>}

              <InputMultiline register={register} label="Message" {...register("Message")} required />
              {errors.Message && <p className={styles.errorMessage}>Please write a message.</p>}

              <input type="submit" className={styles.submitButton} />

            </form>
          </Box>
        </section>
      </Box>
    </Box>
  );
}