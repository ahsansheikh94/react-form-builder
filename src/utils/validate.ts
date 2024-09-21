import { Schema } from "../../dist";
import { Field, FieldValidations } from "../types/schema";

export const validate = (
  value: any,
  label: string,
  validations?: FieldValidations
) => {
  let error = false;
  let errors = [];

  if (validations?.required && [null, undefined, ""].includes(value)) {
    error = true;
    errors.push(
      typeof validations.required === "string"
        ? validations.required
        : `${label} is a required field`
    );
  }

  if (validations?.isString && typeof value !== "string") {
    error = true;
    errors.push(
      typeof validations.isString === "string"
        ? validations.isString
        : `${label} must be a string`
    );
  }

  if (validations?.isNumber && typeof value !== "number") {
    error = true;
    errors.push(
      typeof validations.isNumber === "string"
        ? validations.isNumber
        : `${label} must be a number`
    );
  }

  if (validations?.isEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    error = true;
    errors.push(
      typeof validations.isEmail === "string"
        ? validations.isEmail
        : `${label} must be a valid email`
    );
  }

  if (validations?.min) {
    if (typeof value === "number") {
      if (value < validations.min) {
        error = true;
        errors.push(`${label} must be greater than ${validations.min}`);
      }
    } else {
      if (value?.length < validations.min) {
        error = true;
        errors.push(
          `${label} must be atleast ${validations.min} characters long.`
        );
      }
    }
  }

  if (validations?.max) {
    if (typeof value === "number") {
      if (value > validations.max) {
        error = true;
        errors.push(`${label} must be less than ${validations.max}`);
      }
    } else {
      if (value?.length > validations.max) {
        error = true;
        errors.push(
          `${label} must be atmost ${validations.max} characters long.`
        );
      }
    }
  }

  return { error, errors };
};

export const validateForm = (form: any, schema: Schema) => {
  const fields = Object.keys(form);
  const errors: Error[] = [];

  fields.map((fieldName) => {
    const field: Field = schema.fields.find(
      (f) => f.name === fieldName
    ) as Field;

    validate(form[fieldName], field?.label, field?.validations).errors.map(
      (err) => errors.push({ name: fieldName, message: err })
    );
  });

  return errors;
};
