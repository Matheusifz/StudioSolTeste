import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${(props) => props.color};
  /* linear-gradient(180deg, #ef6c00 0%, #c0661c 100%) ;*/
  border-radius: 4px;
  width: 70px;
  height: 42px;
  border: none;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
`;
