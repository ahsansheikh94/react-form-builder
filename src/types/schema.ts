import { InputHTMLAttributes } from "react";

export interface FieldValidations {
  isString: boolean;
  isNumber: boolean;
  isEmail: boolean;
  isPassword: boolean;
  min: number;
  max: number;
}

export interface Field {
  name: string;
  type: "input" | "textarea" | "dropdown" | "checkbox" | "radio";
  initialValue?: string | number | boolean;
  label: string;
  required: boolean;
  validations?: FieldValidations;
  inputProps: InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;
}

export interface Schema {
  fields: Field[];
}
