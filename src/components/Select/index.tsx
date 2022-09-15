import React from "react";
import { UseFormRegister } from "react-hook-form";
import IFormValues from "../../shared/interfaces/formValues.interface";

interface IOptions {
  value: string | number;
  text: string;
}


export const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string, options: Array<IOptions> } & ReturnType<UseFormRegister<IFormValues>>
>(function Select({ onChange, onBlur, name, label, options }, ref) {
  return (
    <>
      <label>{label}</label>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        {options.map((o: IOptions, i: number) => <option key={i} value={o.value}>{o.text}</option>)}
      </select>
    </>
  )
});
