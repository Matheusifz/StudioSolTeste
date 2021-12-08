import * as React from "react";
import { StyledButton } from "./style";

interface ButtonProps {
  onClick: any;
  text: string;
  color: string;
  width: string;
  height: string;
  isDisabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  color,
  width,
  height,
  isDisabled,
}) => {
  return (
    <>
      <div className="submit-button">
        <StyledButton
          onClick={onClick}
          color={color}
          width={width}
          height={height}
          disabled={isDisabled}
        >
          {text}
        </StyledButton>
      </div>
    </>
  );
};
