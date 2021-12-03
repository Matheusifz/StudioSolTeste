import * as React from "react";
import { BeautifulButton } from "./style";

interface ButtonProps {
  onClick: any;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <>
      <div className="submit-button">
        <BeautifulButton onClick={onClick}>{text}</BeautifulButton>
      </div>
    </>
  );
};
