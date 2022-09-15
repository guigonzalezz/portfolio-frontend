import React from "react";
import { Path, UseFormRegister } from "react-hook-form";
import IFormValues from "../../shared/interfaces/formValues.interface";
import styles from './InputMultiline.module.scss'


interface IInputProps {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

export const InputMultiline = ({ label, register, required }: IInputProps) => (
  <>
    <label>{label}</label>
    <textarea className={styles.textBox} {...register(label, { required })} />
  </>
);