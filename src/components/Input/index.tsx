import * as React from "react";

interface InputProps {
  placeholder: string;
  value: string ;
  onChange: any;
  type: string;
}

const Input: React.FC<InputProps> = ({ placeholder, onChange, value, type }) => {
  return (
    <div className="input-wrapper">
      <input
      placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default Input;
