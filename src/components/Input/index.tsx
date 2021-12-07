import * as React from "react";
import { Wrapper } from "./styles";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: any;
  type: string;
  isDisabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  value,
  type,
  isDisabled,
}) => {
  return (
    <Wrapper>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        disabled={isDisabled}
      />
    </Wrapper>
  );
};

export default Input;
