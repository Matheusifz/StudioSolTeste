import * as React from "react";

interface ButtonProps {
  onClick: any;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <>
      <div className="submit-button">
        <button onClick={onClick}>{text}</button>
      </div>
    </>
  );
};
