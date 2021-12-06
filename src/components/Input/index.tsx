import * as React from "react";
import { BeautifulInput } from "./styles";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: any;
  type: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  value,
  type,
}) => {
  return (
    <div className="input-wrapper">
      <BeautifulInput
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      ></BeautifulInput>
    </div>
  );
};

export default Input;
