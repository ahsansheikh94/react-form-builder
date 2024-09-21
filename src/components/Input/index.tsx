import React, { InputHTMLAttributes, useState } from "react";
import "./styles.css";

interface PropTypes
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
}

const InputField = ({
  label,
  type = "text",
  placeholder,
  ...props
}: PropTypes) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="input-container">
      <label className={`label`}>{label}</label>
      <input
        {...props}
        type={type}
        className={`input ${isFocused ? "focused" : ""}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
