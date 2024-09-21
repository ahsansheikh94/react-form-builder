import React, { useEffect, useState } from "react";
import { Schema } from "../../types/schema";
import InputField from "../Input";
import StyledButton from "../Button";

const FormBuilder = ({
  schema,
  submitButtonText,
  onSubmit,
}: {
  schema: Schema;
  submitButtonText?: string;
  onSubmit: (values: any) => void;
}) => {
  const [formState, setFormState] = useState<any>({});

  useEffect(() => {
    setFormState((prev: any) => {
      const newState = prev;

      schema.fields.map((field) => {
        newState[field.name] = field.initialValue || "";
      });

      return newState;
    });
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formState);
      }}
    >
      {schema.fields.map((field) => {
        switch (field.type) {
          case "input":
            return (
              <InputField
                {...field.inputProps}
                label={field.label}
                name={field.name}
                required
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
