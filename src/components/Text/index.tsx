import * as React from "react";
import { Text as StyledText } from "./style";

interface TextProps {
  text: string;
}

export const Text: React.FC<TextProps> = ({ text }) => {
  return <StyledText>{text}</StyledText>;
};
