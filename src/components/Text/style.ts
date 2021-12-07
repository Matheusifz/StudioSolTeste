import styled from "styled-components";

interface StyledTextProps {
  fontSize: string;
}

export const StyledText = styled.h1<StyledTextProps>`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "auto")};
  line-height: 44px;
  text-align: center;
  border: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  background-color: #f3ec78;
  background-image: linear-gradient(174.92deg, #ef6c00, #db6300);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;
