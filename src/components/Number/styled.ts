import styled from "styled-components";

export const Number = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  box-sizing: border-box;
  justify-content: center;

  .digit {
    display: flex;
    max-width: 25%;
    padding: 0;
  }

  svg {
    display: inline-block;
    margin: 20px;
  }

  .num- {
    position: relative;
    display: inline-block;
    margin: 30px;
    font-size: 0;
  }
  .num-::before,
  .num-::after {
    content: "";
    right: -40px;
    width: 20px;
    height: 20px;
    background-color: #0984e3;
  }
  .num-::before {
    top: 80px;
  }
  .num-::after {
    top: 180px;
  }
  svg {
    display: inline-block;
    margin: 20px;
    fill: rgba(221, 221, 221, 1);
  }

  svg .num- {
    fill: linear-gradient(180deg, #eeeeee 0%, #ffffff 100%);
    transition: 0.3s ease-in-out;
  }

  svg.num-1 .b,
  svg.num-1 .c,
  svg.num-2 .a,
  svg.num-2 .b,
  svg.num-2 .d,
  svg.num-2 .e,
  svg.num-2 .g,
  svg.num-3 .a,
  svg.num-3 .b,
  svg.num-3 .c,
  svg.num-3 .d,
  svg.num-3 .g,
  svg.num-4 .b,
  svg.num-4 .c,
  svg.num-4 .f,
  svg.num-4 .g,
  svg.num-5 .a,
  svg.num-5 .c,
  svg.num-5 .d,
  svg.num-5 .f,
  svg.num-5 .g,
  svg.num-6 .a,
  svg.num-6 .c,
  svg.num-6 .d,
  svg.num-6 .e,
  svg.num-6 .f,
  svg.num-6 .g,
  svg.num-7 .a,
  svg.num-7 .b,
  svg.num-7 .c,
  svg.num-8 .a,
  svg.num-8 .b,
  svg.num-8 .c,
  svg.num-8 .d,
  svg.num-8 .e,
  svg.num-8 .f,
  svg.num-8 .g,
  svg.num-9 .a,
  svg.num-9 .b,
  svg.num-9 .c,
  svg.num-9 .d,
  svg.num-9 .f,
  svg.num-9 .g,
  svg.num-0 .a,
  svg.num-0 .b,
  svg.num-0 .c,
  svg.num-0 .d,
  svg.num-0 .e,
  svg.num-0 .f {
    fill: rgba(38, 42, 52, 1);
  }
`;
