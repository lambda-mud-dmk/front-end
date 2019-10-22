import React from "react";
import styled from "styled-components";

const Button = ({ children }) => {
  return (
    <Div>
      <button>{children}</button>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 32px;
  display: flex;

  justify-content: center;
  button {
    width: 80%;
    height: 45px;
    border-radius: 5px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 0 #222;
    background-color: rgba(46, 98, 129, 67% );
    border: 1px solid rgba(46, 98, 129, 67% );
    color: white;
  }
`;

export default Button;
