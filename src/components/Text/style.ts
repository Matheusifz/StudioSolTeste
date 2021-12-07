import styled from "styled-components";

interface StyledTextProps {
  fontSize: string;
  backgroundImage: string;
  backgroundColor: string;
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
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#f3ec78"};
  background-image: ${(props) =>
    props.backgroundImage ? props.backgroundImage : "auto"};
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;
