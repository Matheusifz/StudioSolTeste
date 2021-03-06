import styled from "styled-components";

interface StyledButtonProps {
  color: string;
  width: string;
  height: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background: ${(props) => props.color};
  border-radius: 4px;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => props.height};
  border: none;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin: 5px;

  &:disabled {
    background: #dddddd;
  }
`;
