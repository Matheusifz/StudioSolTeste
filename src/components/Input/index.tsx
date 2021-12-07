import * as React from "react";
import { BeautifulInput, Wrapper } from "./styles";

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
    <Wrapper>
      <BeautifulInput
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      ></BeautifulInput>
    </Wrapper>
  );
};

export default Input;
