import React, { InputHTMLAttributes, useState } from "react";
import "./styles.css";

interface PropTypes
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error: boolean;
  errors: string[];
  forceShowError: boolean;
}

const InputField = ({
  label,
  type = "text",
  placeholder,
  error,
  errors,
  forceShowError,
  ...props
}: PropTypes) => {
  const [isFocused, setIsFocused] = useState(false);
  const [touched, setTouched] = useState(false);

  return (
    <div className="input-container">
      <label className={`label`}>{label}</label>
      <input
        {...props}
        type={type}
        className={`input ${isFocused ? "focused" : ""}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          setTouched(true);
        }}
        placeholder={placeholder}
        required={false}
      />
      {(touched || forceShowError) && error && (
        <p className="error">{errors[0]}</p>
      )}
    </div>
  );
};

export default InputField;
