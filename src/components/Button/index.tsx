import React, { ButtonHTMLAttributes } from "react";
import "./styles.css";

const StyledButton = ({
  onClick,
  children,
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="styled-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default StyledButton;
