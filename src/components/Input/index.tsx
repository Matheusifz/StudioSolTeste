import * as React from "react";

interface InputProps {
  name: string;
  label: string;
  value: number;
  onChange: any;
}

const Input: React.FC<InputProps> = ({ name, label, onChange, value }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default Input;
