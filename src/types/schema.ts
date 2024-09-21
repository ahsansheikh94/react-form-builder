import { InputHTMLAttributes } from "react";

export interface FieldValidations {
  isString?: boolean;
  isNumber?: boolean;
  isEmail?: boolean;
  min?: number;
  max?: number;
  required?: boolean;
}

export interface Field {
  name: string;
  type: "input" | "textarea" | "dropdown" | "checkbox" | "radio";
  initialValue?: string | number | boolean;
  label: string;
  validations?: FieldValidations;
  inputProps?: InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;
}

export interface Schema {
  fields: Field[];
}

export interface Error {
  name: string;
  message: string;
}
