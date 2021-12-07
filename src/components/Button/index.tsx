import * as React from "react";
import { StyledButton } from "./style";

interface ButtonProps {
  onClick: any;
  text: string;
  color: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, text, color }) => {
  return (
    <>
      <div className="submit-button">
        <StyledButton onClick={onClick} color={color}>
          {text}
        </StyledButton>
      </div>
    </>
  );
};
