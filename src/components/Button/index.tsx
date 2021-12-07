import * as React from "react";
import { StyledButton } from "./style";

interface ButtonProps {
  onClick: any;
  text: string;
  color: string;
  width: string;
  height: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  color,
  width,
  height,
}) => {
  return (
    <>
      <div className="submit-button">
        <StyledButton
          onClick={onClick}
          color={color}
          width={width}
          height={height}
        >
          {text}
        </StyledButton>
      </div>
    </>
  );
};
