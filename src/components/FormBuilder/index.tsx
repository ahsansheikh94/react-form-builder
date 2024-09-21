import React, { useEffect, useState } from "react";
import { Schema } from "../../types/schema";
import InputField from "../Input";
import StyledButton from "../Button";
import { validateForm } from "../../utils/validate";

const FormBuilder = ({
  schema,
  submitButtonText,
  onSubmit,
  formContainerStyles,
}: {
  schema: Schema;
  submitButtonText?: string;
  onSubmit: (values: any) => void;
  formContainerStyles?: React.CSSProperties;
}) => {
  const [formState, setFormState] = useState<any>({});
  const [errors, setErrors] = useState<Error[]>([]);
  const [forceShowError, setForceShowError] = useState(false);

  useEffect(() => {
    setFormState((prev: any) => {
      const newState = prev;

      schema.fields.map((field) => {
        newState[field.name] = field.initialValue || "";
      });

      return newState;
    });
  }, []);

  useEffect(() => {
    setErrors(validateForm(formState, schema));
  }, [formState]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (errors.length) {
          setForceShowError(true);
        } else {
          onSubmit(formState);
        }
      }}
      style={formContainerStyles}
    >
      {schema.fields.map((field) => {
        switch (field.type) {
          case "input":
            return (
              <InputField
                {...field.inputProps}
                error={!!errors.filter((er) => er.name === field.name).length}
                forceShowError={forceShowError}
                errors={errors
                  .filter((er) => er.name === field.name)
                  .map((er) => er.message)}
                label={field.label}
                name={field.name}
                value={formState[field.name]}
                onChange={(e) =>
                  setFormState((prev: any) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            );
          default:
            return null;
        }
      })}
      <StyledButton type="submit">{submitButtonText || "Submit"}</StyledButton>
    </form>
  );
};

export default FormBuilder;
