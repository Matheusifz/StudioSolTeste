import * as React from "react";
import { StyledText } from "./style";

interface TextProps {
  text: string;
  fontSize: string;
  backgroundImage: string;
  backgroundColor: string;
}

export const Text: React.FC<TextProps> = ({
  text,
  fontSize,
  backgroundImage,
  backgroundColor,
}) => {
  return (
    <StyledText
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      fontSize={fontSize}
    >
      {text}
    </StyledText>
  );
};
