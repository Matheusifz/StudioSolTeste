import React, { useState } from "react";
import { Digit } from "../Digit";
import "./style.css";

interface NumberProps {
  numbers: Array<number>;
}

export const Number: React.FC<NumberProps> = ({ numbers }) => {
  return (
    <div className="digital-watch">
      <svg width="0" height="0" viewBox="0 0 0 0">
        <defs>
          <g id="unit-h">
            <path d="M0 20 L20 40 L180 40 L200 20 L180 0 L20 0 Z"></path>
          </g>
          <g id="unit-v">
            <path d="M20 0 L0 20 L0 180 L20 200 L40 180 L40 20 Z"></path>
          </g>
        </defs>
      </svg>

      <div className="second">
        {numbers.map((value) => (
          <Digit value={`${value}`} id={`second-${value}`} />
        ))}
      </div>
    </div>
  );
};
