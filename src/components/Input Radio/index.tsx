import React from "react";
import { Path, useForm, UseFormRegister } from "react-hook-form";
import IFormValues from "../../shared/interfaces/formValues.interface";

interface IRadios {
  text: string;
  value: string;
}

interface IInputProps {
  label: Path<IFormValues>;
  title: string;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  radios: IRadios[];
};

export const InputRadio = ({ label, register, required, radios, title}: IInputProps) => (
  <>
    <label>{title}</label>
    {
      radios.map((r, i) => (
        <label key={`${i}-${r.value}`} htmlFor={`field-${r.value}`}>
            <input
                {...register(label, { required })}
                type="radio"
                value={r.value}
                id={`field-${r.value}`}
            />
            {r.text}
        </label>
      ))
    }
  </>
);