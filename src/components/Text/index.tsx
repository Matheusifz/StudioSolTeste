import * as React from "react";
import { StyledText } from "./style";

interface TextProps {
  text: string;
  fontSize: string;
}

export const Text: React.FC<TextProps> = ({ text, fontSize }) => {
  return <StyledText fontSize={fontSize}>{text}</StyledText>;
};
