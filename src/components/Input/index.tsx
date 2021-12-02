import * as React from "react";

interface InputProps {
  label: string;
  value: number;
  onChange: any;
  type: string;
}

const Input: React.FC<InputProps> = ({ label, onChange, value, type }) => {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input
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
