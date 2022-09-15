import React from "react";
import { Path, useForm, UseFormRegister } from "react-hook-form";
import IFormValues from "../../shared/interfaces/formValues.interface";

type IInputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

export const Input = ({ label, register, required }: IInputProps) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })}  type="text" />
  </>
);